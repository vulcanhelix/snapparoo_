"use client";

import { TextGenerateEffect } from "@snapparoo/ui/typewriter-effect";

export function TypewriterEffectSmooth() {
  const words = [
    {
      text: "Capture",
    },
    {
      text: "stunning",
    },
    {
      text: "product",
    },
    {
      text: "photos",
    },
    {
      text: "and",
    },
    {
      text: "launch",
    },
    {
      text: "fast",
    },
    {
      text: "with",
    },
    {
      text: "Snapparoo.",
      className: "text-blue-500",
    },
  ];
    
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
