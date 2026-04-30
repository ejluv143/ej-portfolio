import { Suspense } from "react";
import ResumeClient from "./ResumeClient";
import ResumeLoadingFallback from "./ResumeLoadingFallback";

export default function ResumePage() {
  return (
    <Suspense fallback={<ResumeLoadingFallback />}>
      <ResumeClient />
    </Suspense>
  );
}