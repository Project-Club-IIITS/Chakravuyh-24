"use client";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function PastEvents() {
  const [events, setEvents] = useState<
    { title: string; description: string; imageUrl: string }[]
  >([]);

  useEffect(() => {
    fetch("/past_events.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching events data:", error));
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-5xl text-purple-500 font-bold text-center my-4">
        Past Events
      </h1>
      <BentoGrid className="max-w-[80%] mx-[10%]">
        {events.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton imageUrl={item.imageUrl} />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ imageUrl }: { imageUrl: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      width={300}
      height={300}
      className="w-full h-full object-cover object-top"
      alt="iamge"
      src={imageUrl}
    />
  </div>
);
