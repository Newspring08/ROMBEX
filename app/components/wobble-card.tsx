"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaLine, FaLink } from "react-icons/fa6";

export function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-6 gap-4 max-w-7xl mx-auto w-full mt-9">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs space-y-4">
          <h2 className="text-left text-balance text-2xl md:text-xl lg:text-3xl font-medium tracking-[-0.015em] text-white">
            Interac e-Transfer®
          </h2>
          <p className="mt-4 text-left leading-6 text-xs text-neutral-200">
            Send and receive money instantly between Canadian bank accounts with
            the security and convenience you trust. ROMBEX makes Interac
            transfers faster with auto-deposit and enhanced security.
          </p>

          <Button className="lg:px-5 lg:py-5 text-white bg-gradient-to-r from-gray-500 via-gray-800 to-black hover:text-white hover:bg-black hover:scale-105 transform transition-colors duration-300 text-xs lg:text-sm font-medium rounded-md">
            Send Money Now
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Button>
        </div>
        <img
          src="/rombex/rombex-img2.png"
          width={300}
          height={300}
          alt="phone image"
          className="absolute  -right-2 lg:-right-[0.5%] grayscale filter -bottom-40 lg:-bottom-50 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] space-y-4">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-medium tracking-[-0.015em] text-white">
          Direct Bank Transfers
        </h2>
        <p className="mt-4 max-w-[26rem] text-left leading-6 text-xs text-neutral-200">
          Connect your existing bank accounts for seamless transfers between
          institutions. Send funds directly to 5,000+ banks across North America
          with next business day settlement.
        </p>
        <Button className="lg:px-5 lg:py-5 text-white  bg-gradient-to-r from-gray-500 via-gray-800 to-black hover:text-white mt-5 hover:bg-black hover:scale-105 transform transition-colors duration-300 text-xs lg:text-sm font-medium rounded-md">
          Learn More
          <div className=" w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <FaLink className="h-3 w-3 sm:h-4 sm:w-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Button>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm space-y-6">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-medium tracking-[-0.015em] text-white">
            Competitive Currency Exchange
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-xs leading-6 text-neutral-200">
            Get bank-beating exchange rates for 50+ currencies with our smart
            matching technology. Save up to 3% compared to traditional banks
            when sending money internationally.
          </p>
          <Button className="lg:px-5 lg:py-5 text-white  bg-gradient-to-r from-gray-500 via-gray-900 to-black hover:text-white hover:bg-black hover:scale-105 transform transition-colors duration-300 text-xs lg:text-sm font-medium rounded-md">
            Learn More
            <div className=" w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Button>
        </div>
        <img
          src="/rombex/rombex-img3.png"
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-30 md:-right-[2%] lg:-right-[3%] -bottom-65 lg:-bottom-45 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
