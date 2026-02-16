export type DrillLevel = "continent" | "subregion" | "country" | "city";
export type TravelScope = "domestic" | "international";

export interface GeoNode {
  id: string;
  slug: string;
  name: string; // 한국어
  nameEn: string; // English
  level: DrillLevel;
  imageUrl: string;
  icon?: string; // 이모지 국기 등
  parentId: string | null;
  childCount?: number;
  description?: string;
}

export interface EstimateRequest {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budgetRange?: { min: number; max: number };
  travelStyle?: "budget" | "moderate" | "luxury";
  preferences?: string[];
}

export interface FlightOption {
  airline: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
  currency: string;
}

export interface AccommodationOption {
  name: string;
  type: "hotel" | "hostel" | "airbnb" | "pension";
  pricePerNight: number;
  currency: string;
  rating?: number;
  location: string;
  imageUrl?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  activities: {
    time: string;
    title: string;
    description: string;
    estimatedCost?: number;
    category: "transport" | "food" | "activity" | "shopping" | "rest";
  }[];
}

export interface BudgetBreakdown {
  flights: number;
  accommodation: number;
  food: number;
  transport: number;
  activities: number;
  shopping: number;
  misc: number;
  total: number;
  perPerson: number;
  currency: string;
}

export interface TravelEstimate {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  flights: FlightOption[];
  accommodation: AccommodationOption[];
  itinerary: ItineraryDay[];
  budget: BudgetBreakdown;
  exchangeRate?: { from: string; to: string; rate: number };
  weather?: { avgTemp: number; condition: string };
  visaInfo?: string;
  createdAt: string;
}
