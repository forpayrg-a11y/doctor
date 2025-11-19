import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Your Trusted Partner in Hair Restoration and Health Tourism 
              </h2>

                <p className="mt-4 text-pretty text-gray-700">
                  Discover world-class hair restoration treatments with personalized care,
                  transparent pricing, and trusted medical specialists. From advanced FUE and DHI
                  techniques to comprehensive after-care support, we guide you through every step
                  of your health tourism journey to achieve natural, lasting results with comfort
                  and confidence.
                </p>
            </div>
          </div>

          <div>
            <Image
              width={800}
              height={800}
              src="/header.png" 
              className="rounded" 
              alt="Hero image" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;