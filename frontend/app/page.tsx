import React, { Suspense } from 'react'
import Categorytab from "../components/Category-tab"
import Videogrid from '@/components/Videogrid'


const Home = () => {
  return (
   <main className="p-4 w-full">
      <Categorytab/>
      <Suspense fallback={<div>loading videos...</div>}>
      <Videogrid/>
      </Suspense>
    </main>
  )
}

export default Home;