"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className=" p-2 flex items-center justify-center">
      <div className="flex flex-col overflow-hidden   ">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white ">
                Unleash the Spirit of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Chakravyuh
                </span>
              </h1>
            </>
          }
        >
          {/* <Image
          src={`/Chakravyuh.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}

          <video
            src="/Chakravyuh.mp4"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            controls
            autoPlay
            muted
            loop
          ></video>
        </ContainerScroll>
      </div>
    </div>
  );
}
