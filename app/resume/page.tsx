import { Suspense } from "react";
import ResumeClient from "./ResumeClient";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResumeClient />
    </Suspense>
  );
}