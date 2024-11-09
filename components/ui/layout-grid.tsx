"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className?: string;
    thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const AUTOPLAY_INTERVAL = 3000;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const paginate = useCallback(
        (newDirection: number) => {
            const increment = isMobile ? 1 : 3;
            if (newDirection > 0) {
                setActiveIndex((prev) =>
                    prev >= cards.length - increment ? 0 : prev + 1
                );
            } else {
                setActiveIndex((prev) =>
                    prev <= 0 ? cards.length - increment : prev - 1
                );
            }
            setActiveCard(null);
        },
        [cards.length, isMobile]
    );

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (!isPaused) {
            intervalId = setInterval(() => paginate(1), AUTOPLAY_INTERVAL);
        }
        return () => clearInterval(intervalId);
    }, [isPaused, paginate]);

    const handleCardClick = (cardId: number) => {
        if (isMobile) {
            setActiveCard(activeCard === cardId ? null : cardId);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 5000);
        }
    };

    return (
        <div className="w-full min-h-screen bg-black p-4 md:p-8">
            <div
                className="max-w-7xl mx-auto relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Navigation Arrows */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-0 md:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 
                        p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-0 md:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 
                        p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
                    <motion.div
                        className="h-full bg-white/50"
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "0%" : "100%" }}
                        transition={{
                            duration: AUTOPLAY_INTERVAL / 1000,
                            ease: "linear",
                            repeat: isPaused ? 0 : Infinity,
                        }}
                    />
                </div>

                {/* Cards Container */}
                <div className="relative overflow-hidden px-8 md:px-0">
                    <motion.div
                        className="flex gap-4 md:gap-8"
                        animate={{
                            x: isMobile
                                ? `${-activeIndex * 100}%`
                                : `${-activeIndex * (33.33 + 2)}%`,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`
                                    relative 
                                    h-[40vh] md:h-[60vh] 
                                    ${
                                        isMobile
                                            ? "min-w-full"
                                            : "min-w-[calc(33.33%-1rem)]"
                                    }
                                    rounded-xl 
                                    overflow-hidden 
                                    cursor-pointer
                                    ${
                                        !isMobile &&
                                        "group hover:-translate-y-2 transition-transform duration-300"
                                    }
                                `}
                                onClick={() => handleCardClick(card.id)}
                            >
                                {/* Image */}
                                <img
                                    src={card.thumbnail}
                                    alt="card thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover object-center 
                                        transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div
                                    className={`
                                        absolute inset-0 
                                        bg-gradient-to-t from-black/90 to-transparent 
                                        transition-opacity duration-300
                                        ${
                                            isMobile
                                                ? activeCard === card.id
                                                    ? "opacity-90"
                                                    : "opacity-0"
                                                : "opacity-0 group-hover:opacity-60"
                                        }
                                    `}
                                />

                                {/* Info Icon (Mobile Only) */}
                                {isMobile && activeCard !== card.id && (
                                    <div className="absolute bottom-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                )}

                                {/* Content */}
                                <div
                                    className={`
                                        absolute inset-0 
                                        p-4 md:p-6 
                                        flex flex-col justify-end
                                        ${
                                            isMobile
                                                ? `transition-opacity duration-300 ${
                                                      activeCard === card.id
                                                          ? "opacity-100"
                                                          : "opacity-0"
                                                  }`
                                                : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }
                                    `}
                                >
                                    <div
                                        className={`
                                            text-white
                                            ${
                                                !isMobile &&
                                                "transform translate-y-8 group-hover:translate-y-0"
                                            }
                                            transition-all duration-300
                                        `}
                                    >
                                        {card.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({
                        length: Math.ceil(cards.length / (isMobile ? 1 : 3)),
                    }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setActiveIndex(idx * (isMobile ? 1 : 3));
                                setActiveCard(null);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                Math.floor(activeIndex / (isMobile ? 1 : 3)) ===
                                idx
                                    ? "bg-white w-6"
                                    : "bg-white/30 hover:bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
