"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/alipay.png", alt: "Alipay" },
  { src: "/paypal.png", alt: "Paypal" },
  { src: "/amazon.png", alt: "Amazon Pay" },
  { src: "/samsung.png", alt: "samsung Pay" },
  { src: "/spherule.png", alt: "spherule Pay" },
  { src: "/visa.png", alt: "visa Pay" },
];

export default function MarqueeSlider() {
  return (
    <div className="overflow-hidden bg-emerald-700 py-8">
      <motion.div
        className="flex space-x-12 animate-marquee"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 gap-1.5">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
