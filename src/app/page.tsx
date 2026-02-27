import HexNavigator from "@/components/hex-navigation/HexNavigator";
import SearchBar from "@/components/search/SearchBar";
import { Plane } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <div className="flex shrink-0 items-center gap-2">
            <Plane className="h-5 w-5" />
            <h1 className="text-lg font-bold">여행 플래너</h1>
          </div>
          <div className="flex-1">
            <SearchBar />
          </div>
          <nav className="hidden items-center gap-4 text-sm text-muted-foreground sm:flex">
            <button className="transition-colors hover:text-foreground">AI 견적</button>
            <button className="transition-colors hover:text-foreground">내 여행</button>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main>
        <HexNavigator />
      </main>
    </div>
  );
}
