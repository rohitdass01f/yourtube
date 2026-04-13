"use client"
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link' 
import React from 'react'
 const videos = "/Video/vdo.mp4"

const RelatedVideos = ({videos}:any) => {
  return (
    <div className="space-y-2">
      {videos.map((video: any) => (
        <Link key={video._id} href={`/watch/${video._id}`} className="group flex gap-3">
          <div className="relative w-40 aspect-video bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <video src={video} className="w-full h-full object-cover"/>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">{video.videotitle}</h3>
            <p className="text-xs text-gray-600 mt-1">{video.videochanel}</p>
            <p className="text-xs text-gray-600">{video.views?.toLocaleString()} views{video.createdAt && ` • ${formatDistanceToNow(new Date(video.createdAt))}, ago`}</p>
          </div>
        </Link>
      ))}</div>
  )
}

export default RelatedVideos