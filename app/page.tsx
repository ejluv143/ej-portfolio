import { Suspense } from "react";
import HomeContent from "./components/HomeContent";
import Loader from "./components/Loader";

function LoadingFallback() {
  return <Loader />;
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeContent />
    </Suspense>
  );
}