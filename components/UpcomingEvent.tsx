'use client';

import React, { useEffect, useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function UpcomingEvents({ day }: { day: number }) {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/upcoming_events_day${day}.json`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching events data:", error));
  }, [day]);

  return (
    <div className="h-screen py-20 w-full">
      <h1 className="text-neutral-300 font-bold text-3xl px-12">DAY {day.toString()}</h1>
      <LayoutGrid cards={events.map((event) => ({
        id: event.id,
        content: <EventSkeleton event={event} />,
        className: "col-span-1",
        thumbnail: event.thumbnail,
      }))} />
    </div>
  );
}

const EventSkeleton = ({ event }: { event: any }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{event.title}</p>
      <p className="font-normal text-base text-white">{event.description}</p>
    </div>
  );
};
