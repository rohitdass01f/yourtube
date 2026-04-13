"use client";
import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import axiosInstance from "@/lib/axiosinstance";

const Videogrid = () => {
  const [videos, setVideos] = useState<any[]>([]); // 
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchvideo = async () => {
      try {
        const res = await axiosInstance.get("/video/getall");
        setVideos(res.data || []);
      } catch (error) {
        console.log(error);
        setVideos([]); 
      } finally {
        setloading(false);
      }
    };
    fetchvideo();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : videos.length > 0 ? (
        videos.map((video: any) => (
          <Videocard key={video._id} video={video} />
        ))
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default Videogrid;