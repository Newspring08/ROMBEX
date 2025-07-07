"use client";

import { motion } from "framer-motion";
import {
  FaPaypal,
  FaAmazonPay,
  FaCcVisa,
  FaCcMastercard,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";

const icons = [
  { icon: FaPaypal, name: "PayPal" },
  { icon: FaAmazonPay, name: "Amazon Pay" },
  { icon: FaCcVisa, name: "Visa" },
  { icon: FaCcMastercard, name: "MasterCard" },
  { icon: FaApplePay, name: "Apple Pay" },
  { icon: FaGooglePay, name: "Google Pay" },
];

export default function MarqueeSlider() {
  return (
    <div className="overflow-hidden bg-whitw py-8 px-10">
      <motion.div
        className="flex space-x-12 justify-center items-center"
       
      >
        {icons.concat(icons).map((entry, index) => {
          const Icon = entry.icon;
          return (
            <div key={index} className="flex-shrink-0">
              <Icon className="text-black text-4xl hover:opacity-100 transition" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
