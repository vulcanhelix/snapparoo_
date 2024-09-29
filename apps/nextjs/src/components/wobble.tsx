"use client";

import React from "react";

import { WobbleCard } from "@snapparoo/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Rapid Delivery
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Within 24 hours, you receive a full set of high-quality, professional images.
          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Philosophy
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        The impact of this revolutionary approach ripples through every aspect of your e-commerce business:
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance  text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
          Cost Reduction
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Eliminate expensive sample shipping. Say goodbye to overpriced rush fees from local photographers. 
          Our efficient process cuts costs dramatically.

          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[20%]"
        />
      </WobbleCard>
    </div>
  );
}
