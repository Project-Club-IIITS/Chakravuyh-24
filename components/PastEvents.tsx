import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function PastEvents() {
    return (
        <div className="flex flex-col gap-2 ">
            <h1 className="text-5xl text-purple-500 font-bold text-center my-4">
                Past Events
            </h1>
            <BentoGrid className="max-w-[80%] mx-[10%]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
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
const items = [
    {
        title: "The Dawn of Innovation",
        description:
            "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton imageUrl="/ArcheryContest.png" />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton imageUrl="/ChariotRace.png" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton imageUrl="/HorseRiding.png" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton imageUrl="/SwordFighting.png" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton imageUrl="/ArcheryContest.png" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton imageUrl="/ArcheryContest.png" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton imageUrl="/ArcheryContest.png" />,
    },
];
