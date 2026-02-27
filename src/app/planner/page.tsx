import { TripDashboard } from "@/components/planner/TripDashboard";

export const metadata = {
  title: "내 여행 | Travel Planner",
  description: "나의 여행 계획을 관리하고 일정을 구성하세요.",
};

export default function PlannerPage() {
  return <TripDashboard />;
}
