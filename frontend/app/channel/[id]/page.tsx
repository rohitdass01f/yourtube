"use client";
import { notFound, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChannelHeader from "@/components/ChannelHeader";
import Channeltabs from "@/components/Channeltabs";
import VideoUploader from "@/components/VideoUploader";
import ChannelVideos from "@/components/ChannelVideos";
import { useUser } from "@/lib/Authcontext";
import axiosInstance from "@/lib/axiosinstance";

const page = () => {
  const params = useParams();
  const id = params.id;
  const { user } = useUser();
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      try {
        const res = await axiosInstance.get(`/video/channel/${id}`);
        setVideos(res.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) fetchChannelVideos();
  }, [id]);

  try {
    let channel = user;
    return (
      <div className="flex-1 min-h-screen bg-white">
        <div className="max-w-full mx-auto">
          <ChannelHeader channel={channel} user={user} />
          <Channeltabs />
          <div className="px-4 pb-8">
            <VideoUploader channelId={id} channelName={channel?.channelname} />
          </div>
          <div className="px-4 pb-8">
            <ChannelVideos videos={videos} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching channel data:", error);
    notFound();
  }
};

export default page;