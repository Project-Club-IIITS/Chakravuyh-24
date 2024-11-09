"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { div } from "framer-motion/client";

export function HeroHighlightDemo() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/battle.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {}
            <div className="relative z-10 grid place-items-center h-full bg-black bg-opacity-50 mt-[-30px]">
                <HeroHighlight>
                    {}
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white text-center"
                    >
                        CHAKRAVYUH
                    </motion.h1>

                    {}
                    <div className="absolute top-15/16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-7 whitespace-nowrap">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: [20, -5, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0.0, 0.2, 1],
                            }}
                        >
                            <Highlight className="text-black dark:text-white text-lg sm:text-lg md:text-xl lg:text-2xl p-2 px-4">
                                Enter the Kurukshetra
                            </Highlight>
                        </motion.div>
                    </div>
                </HeroHighlight>
            </div>
        </div>
    );
}
