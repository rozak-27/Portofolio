"use client";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export default function BoxesBackground() {
  return (
    <>
    <div className="absolute inset-0 w-full h-full z-0">
      <ShootingStars />
      <StarsBackground />
      <ShootingStars
         minDelay={200}
         maxDelay={1200}
        />
      </div>
    </>
  );
}