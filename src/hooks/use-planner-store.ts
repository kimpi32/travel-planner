import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Trip,
  TripDay,
  TripActivity,
  ActivityCategory,
  BudgetCategory,
  TripStatus,
} from "@/types/planner";

function generateId(): string {
  return Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function daysBetween(start: string, end: string): number {
  const s = new Date(start);
  const e = new Date(end);
  const diff = e.getTime() - s.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

const DEFAULT_BUDGET_CATEGORIES: Omit<BudgetCategory, "estimated" | "actual">[] = [
  { category: ActivityCategory.Transport, label: "교통", color: "var(--chart-1)" },
  { category: ActivityCategory.Accommodation, label: "숙박", color: "var(--chart-2)" },
  { category: ActivityCategory.Food, label: "식비", color: "var(--chart-3)" },
  { category: ActivityCategory.Attraction, label: "관광", color: "var(--chart-4)" },
  { category: ActivityCategory.Shopping, label: "쇼핑", color: "var(--chart-5)" },
];

function buildInitialBudgetCategories(): BudgetCategory[] {
  return DEFAULT_BUDGET_CATEGORIES.map((c) => ({ ...c, estimated: 0, actual: 0 }));
}

function buildDaysFromRange(startDate: string, endDate: string): TripDay[] {
  const count = daysBetween(startDate, endDate) + 1;
  return Array.from({ length: count }, (_, i) => ({
    id: generateId(),
    dayNumber: i + 1,
    date: addDays(startDate, i),
    activities: [],
  }));
}

export interface TripBudgetSummary {
  totalEstimated: number;
  totalActual: number;
  perPersonEstimated: number;
  perPersonActual: number;
  categories: BudgetCategory[];
}

interface PlannerState {
  trips: Trip[];
  activeTripId: string | null;
}

interface PlannerActions {
  // Trip CRUD
  createTrip: (params: {
    title: string;
    destination: string;
    destinationSlug?: string;
    startDate: string;
    endDate: string;
    travelers: number;
    budget?: number;
  }) => Trip;
  updateTrip: (tripId: string, updates: Partial<Omit<Trip, "id">>) => void;
  deleteTrip: (tripId: string) => void;
  setActiveTrip: (tripId: string | null) => void;

  // Day management
  addDay: (tripId: string) => void;
  removeDay: (tripId: string, dayId: string) => void;

  // Activity management
  addActivity: (tripId: string, dayId: string, activity: Omit<TripActivity, "id">) => void;
  updateActivity: (tripId: string, dayId: string, activityId: string, updates: Partial<Omit<TripActivity, "id">>) => void;
  removeActivity: (tripId: string, dayId: string, activityId: string) => void;
  moveActivity: (tripId: string, fromDayId: string, toDayId: string, activityId: string, toIndex: number) => void;

  // Getters
  getActiveTrip: () => Trip | undefined;
  getTripBudgetSummary: (tripId: string) => TripBudgetSummary | undefined;
}

export const usePlannerStore = create<PlannerState & PlannerActions>()(
  persist(
    (set, get) => ({
      trips: [],
      activeTripId: null,

      createTrip: (params) => {
        const now = new Date().toISOString();
        const days = buildDaysFromRange(params.startDate, params.endDate);
        const trip: Trip = {
          id: generateId(),
          title: params.title,
          destination: params.destination,
          destinationSlug: params.destinationSlug,
          startDate: params.startDate,
          endDate: params.endDate,
          travelers: params.travelers,
          days,
          budget: {
            total: params.budget ?? 0,
            categories: buildInitialBudgetCategories(),
          },
          status: "planning" as TripStatus,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({ trips: [trip, ...state.trips] }));
        return trip;
      },

      updateTrip: (tripId, updates) => {
        set((state) => ({
          trips: state.trips.map((t) =>
            t.id === tripId
              ? { ...t, ...updates, updatedAt: new Date().toISOString() }
              : t
          ),
        }));
      },

      deleteTrip: (tripId) => {
        set((state) => ({
          trips: state.trips.filter((t) => t.id !== tripId),
          activeTripId: state.activeTripId === tripId ? null : state.activeTripId,
        }));
      },

      setActiveTrip: (tripId) => {
        set({ activeTripId: tripId });
      },

      addDay: (tripId) => {
        set((state) => ({
          trips: state.trips.map((t) => {
            if (t.id !== tripId) return t;
            const lastDay = t.days[t.days.length - 1];
            const newDate = lastDay ? addDays(lastDay.date, 1) : t.startDate;
            const newDay: TripDay = {
              id: generateId(),
              dayNumber: t.days.length + 1,
              date: newDate,
              activities: [],
            };
            return {
              ...t,
              days: [...t.days, newDay],
              updatedAt: new Date().toISOString(),
            };
          }),
        }));
      },

      removeDay: (tripId, dayId) => {
        set((state) => ({
          trips: state.trips.map((t) => {
            if (t.id !== tripId) return t;
            const filtered = t.days.filter((d) => d.id !== dayId);
            const renumbered = filtered.map((d, i) => ({ ...d, dayNumber: i + 1 }));
            return { ...t, days: renumbered, updatedAt: new Date().toISOString() };
          }),
        }));
      },

      addActivity: (tripId, dayId, activity) => {
        const newActivity: TripActivity = { ...activity, id: generateId() };
        set((state) => ({
          trips: state.trips.map((t) => {
            if (t.id !== tripId) return t;
            return {
              ...t,
              days: t.days.map((d) =>
                d.id === dayId
                  ? {
                      ...d,
                      activities: [...d.activities, newActivity].sort((a, b) =>
                        a.time.localeCompare(b.time)
                      ),
                    }
                  : d
              ),
              updatedAt: new Date().toISOString(),
            };
          }),
        }));
      },

      updateActivity: (tripId, dayId, activityId, updates) => {
        set((state) => ({
          trips: state.trips.map((t) => {
            if (t.id !== tripId) return t;
            return {
              ...t,
              days: t.days.map((d) =>
                d.id === dayId
                  ? {
                      ...d,
                      activities: d.activities.map((a) =>
                        a.id === activityId ? { ...a, ...updates } : a
                      ),
                    }
                  : d
              ),
              updatedAt: new Date().toISOString(),
            };
          }),
        }));
      },

      removeActivity: (tripId, dayId, activityId) => {
        set((state) => ({
          trips: state.trips.map((t) => {
            if (t.id !== tripId) return t;
            return {
              ...t,
              days: t.days.map((d) =>
                d.id === dayId
                  ? { ...d, activities: d.activities.filter((a) => a.id !== activityId) }
                  : d
              ),
              updatedAt: new Date().toISOString(),
            };
          }),
        }));
      },

      moveActivity: (tripId, fromDayId, toDayId, activityId, toIndex) => {
        set((state) => ({
          trips: state.trips.map((t) => {
            if (t.id !== tripId) return t;

            let activity: TripActivity | undefined;
            const daysWithout = t.days.map((d) => {
              if (d.id === fromDayId) {
                activity = d.activities.find((a) => a.id === activityId);
                return { ...d, activities: d.activities.filter((a) => a.id !== activityId) };
              }
              return d;
            });

            if (!activity) return t;

            const movedActivity = activity;
            const daysWithMoved = daysWithout.map((d) => {
              if (d.id === toDayId) {
                const acts = [...d.activities];
                acts.splice(toIndex, 0, movedActivity);
                return { ...d, activities: acts };
              }
              return d;
            });

            return { ...t, days: daysWithMoved, updatedAt: new Date().toISOString() };
          }),
        }));
      },

      getActiveTrip: () => {
        const { trips, activeTripId } = get();
        if (!activeTripId) return undefined;
        return trips.find((t) => t.id === activeTripId);
      },

      getTripBudgetSummary: (tripId) => {
        const trip = get().trips.find((t) => t.id === tripId);
        if (!trip) return undefined;

        const categoryMap: Record<string, { estimated: number; actual: number }> = {};

        for (const day of trip.days) {
          for (const activity of day.activities) {
            if (!categoryMap[activity.category]) {
              categoryMap[activity.category] = { estimated: 0, actual: 0 };
            }
            categoryMap[activity.category].estimated += activity.estimatedCost;
            categoryMap[activity.category].actual += activity.actualCost ?? 0;
          }
        }

        const categories: BudgetCategory[] = trip.budget.categories.map((bc) => ({
          ...bc,
          estimated: categoryMap[bc.category]?.estimated ?? 0,
          actual: categoryMap[bc.category]?.actual ?? 0,
        }));

        const totalEstimated = categories.reduce((s, c) => s + c.estimated, 0);
        const totalActual = categories.reduce((s, c) => s + c.actual, 0);

        return {
          totalEstimated,
          totalActual,
          perPersonEstimated: trip.travelers > 0 ? totalEstimated / trip.travelers : 0,
          perPersonActual: trip.travelers > 0 ? totalActual / trip.travelers : 0,
          categories,
        };
      },
    }),
    {
      name: "travel-planner-storage",
    }
  )
);
