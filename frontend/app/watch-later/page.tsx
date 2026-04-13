import WatchLater from "@/components/Watchlater";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Watch Later Videos</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <WatchLater />
      </Suspense>
    </div>
  );
};

export default Page;