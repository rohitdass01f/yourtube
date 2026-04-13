import HistoryContent from "@/components/Historycontent";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Watch History</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <HistoryContent />
      </Suspense>
    </div>
  );
};

export default Page;