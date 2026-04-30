import { Suspense } from "react";
import HomeContent from "./components/HomeContent";

function LoadingFallback() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeContent />
    </Suspense>
  );
}