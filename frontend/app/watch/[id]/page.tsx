"use client";
import VideoInfo from "@/components/VideoInfo";
import VideoPlayer from "@/components/VideoPlayer";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Comments from "@/components/Comments";
import RelatedVideos from "@/components/RelatedVideos";
import axiosInstance from "@/lib/axiosinstance";


const page = () => {
  const params = useParams();
  const id = params.id;
 const [videos, setVideos] = useState<any>(null); 
  const [video, setVideo] = useState<any>(null);
  const [loading, setloading] = useState(true);
  

  useEffect(() => {
    const fetchvideo = async () => {
      if (!id || typeof id !== "string") return;
      try {
        const res = await axiosInstance.get("/video/getall");
          const video = res.data?.filter((vid: any) => vid._id === id);
        setVideos(video[0]);
        setVideo(res.data);
      } catch (error) {
        console.log(error);
        setVideos([]); //
      } finally {
        setloading(false);
      }
    };
    fetchvideo();
  }, [id]);

 

  if (loading) {
    return <div>Loading...</div>;
  }
  

  if (!videos) {
    return <div>Video not found...</div>;
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <VideoPlayer video={videos} />
            <VideoInfo video={videos} />
            <Comments videoId={id} />
          </div>
          <div>
            <RelatedVideos videos={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
