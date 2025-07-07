import { cn } from "@/lib/utils";
import {
  IconWorldDollar,
  IconExchange,
  IconWallet,
  IconShieldLock,
  IconCreditCard,
  IconChartDots,
  IconMessageChatbot,
  IconDeviceMobileCheck,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Global Money Transfers",
      description:
        "Send and receive money worldwide instantly through banks, wallets, or cash pickup.",
      icon: <IconWorldDollar />,
    },
    {
      title: "Currency Exchange",
      description:
        "Real-time currency conversion at competitive rates with transparent fees.",
      icon: <IconExchange />,
    },
    {
      title: "Multi-Currency Wallet",
      description:
        "Manage, hold, and convert multiple currencies in one secure wallet.",
      icon: <IconWallet />,
    },
    {
      title: "Bank-Grade Security",
      description:
        "Biometric login, 256-bit encryption, and fraud detection keep your money safe.",
      icon: <IconShieldLock />,
    },
    {
      title: "Local Payment Options",
      description:
        "Pay using cards, bank accounts, and mobile money across supported regions.",
      icon: <IconCreditCard />,
    },
    {
      title: "Analytics & Insights",
      description:
        "Track transfers, view exchange rates, and monitor expenses in real-time.",
      icon: <IconChartDots />,
    },
    {
      title: "24/7 Smart Support",
      description:
        "In-app chatbots and human support agents available around the clock.",
      icon: <IconMessageChatbot />,
    },
    {
      title: "Mobile-First Design",
      description:
        "Optimized for mobile users with a sleek and intuitive interface.",
      icon: <IconDeviceMobileCheck />,
    },
  ];

  return (
    <section className="relative z-10 py-16 px-4 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-xl lg:text-4xl font-medium text-gray-900 dark:text-white">
          Rombex Financial Services<br/> at Your Fingertips
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-xs lg:text-sm">
          Whether you're sending money home, traveling abroad, or managing
          currencies our app offers fast, secure, and reliable solutions tailored for you.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
