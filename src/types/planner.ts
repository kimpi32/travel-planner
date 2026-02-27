export enum ActivityCategory {
  Transport = "transport",
  Accommodation = "accommodation",
  Food = "food",
  Attraction = "attraction",
  Shopping = "shopping",
  Activity = "activity",
  Other = "other",
}

export interface TripActivity {
  id: string;
  time: string; // "HH:MM" format
  title: string;
  description?: string;
  place?: string;
  placeHref?: string;
  estimatedCost: number;
  actualCost?: number;
  category: ActivityCategory;
  duration?: number; // minutes
  notes?: string;
}

export interface TripDay {
  id: string;
  dayNumber: number;
  date: string; // ISO date string "YYYY-MM-DD"
  title?: string;
  activities: TripActivity[];
}

export interface BudgetCategory {
  category: ActivityCategory;
  label: string;
  estimated: number;
  actual: number;
  color: string; // CSS variable reference
}

export type TripStatus = "planning" | "active" | "completed";

export interface Trip {
  id: string;
  title: string;
  destination: string;
  destinationSlug?: string;
  startDate: string; // "YYYY-MM-DD"
  endDate: string; // "YYYY-MM-DD"
  travelers: number;
  days: TripDay[];
  budget: {
    total: number;
    categories: BudgetCategory[];
  };
  status: TripStatus;
  createdAt: string;
  updatedAt: string;
}
