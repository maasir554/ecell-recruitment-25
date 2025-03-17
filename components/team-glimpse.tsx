"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const teamImages = [
  { id: 1, image: "/team/as1.jpg" },
  { id: 2, image: "/team/as2.jpg" },
  { id: 3, image: "/team/g1.jpg" },
  { id: 4, image: "/team/ha1.jpg" },
  { id: 5, image: "/team/hero.jpg" },
  { id: 6, image: "/team/sac1.jpg" },
  { id: 7, image: "/team/sac2.jpg" },
  { id: 8, image: "/team/f1.jpg" },
  { id: 9, image: "/team/san1.jpg" },
  { id: 10, image: "/team/san2.jpg" },
  { id: 11, image: "/team/san3.jpg" },
  { id: 12, image: "/team/sann1.jpg" },
];

// Splitting images into two rows
const firstRow = teamImages.slice(0, teamImages.length / 2);
const secondRow = teamImages.slice(teamImages.length / 2);

const ImageCard = ({ image }: { image: string }) => {
  return (
    <div
      className={cn(
        "relative h-40 w-40 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
        "overflow-hidden rounded-xl border shadow-lg",
        // Light mode styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // Dark mode styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        src={image}
        alt="Team member"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
        priority
      />
    </div>
  );
};

export function TeamMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((member) => (
          <ImageCard key={member.id} image={member.image} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((member) => (
          <ImageCard key={member.id} image={member.image} />
        ))}
      </Marquee>
      
      {/* Gradient Fading Edges for Smoothness */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
