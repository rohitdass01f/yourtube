import HistoryContent from "@/components/Historycontent";
import Likedcontent from "@/components/Likedcontent";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Watch Liked videos</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Likedcontent />
      </Suspense>
    </div>
  );
};

export default Page;