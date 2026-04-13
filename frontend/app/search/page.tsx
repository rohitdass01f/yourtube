import SearchResult from '@/components/ui/SearchResult';
import React, { Suspense } from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ q?: string }> }) => {
  const params = await searchParams;
  const q = params?.q;

  return (
    <div>
      {q && <div>search result for "{q}"</div>}

      <Suspense fallback={<div>Loading...</div>}>
        <SearchResult query={q || ""} />
      </Suspense>
    </div>
  )
}

export default page;