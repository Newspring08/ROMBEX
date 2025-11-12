import Link from "next/link";
import {
  Building2,
  Lock,
  Zap,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  Globe2,
  Clock,
  Shield,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

export default function DirectBankTransfersPage() {
  const features = [
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description:
        "Monitor every transaction from initiation to completion with live status updates",
    },
    {
      icon: Zap,
      title: "Instant Confirmations",
      description:
        "Get immediate transaction confirmations and receipts for complete peace of mind",
    },
    {
      icon: Shield,
      title: "24/7 Uptime",
      description:
        "Our system operates around the clock, ensuring your transfers are never delayed",
    },
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description:
        "Enterprise-level encryption protects every transaction from end to end",
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description:
        "Competitive rates for high-value transfers without hidden charges",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description:
        "Connect to major local and international financial institutions worldwide",
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "Pay Suppliers",
      description:
        "Send bulk payments to vendors and suppliers globally with detailed reporting",
    },
    {
      icon: TrendingUp,
      title: "Employee Payroll",
      description:
        "Process payroll efficiently with instant deposits to employee bank accounts",
    },
    {
      icon: BarChart3,
      title: "International Payments",
      description:
        "Support loved ones abroad with fast, secure cross-border transfers",
    },
  ];

  const benefits = [
    "No traditional remittance complexity",
    "Verified bank account connections",
    "Detailed transaction reporting",
    "Multi-currency support",
    "Bulk transfer capabilities",
    "Automated payment scheduling",
    "ACH and wire transfer options",
    "Business account integration",
  ];

  const supportedBanks = [
    "RBC Royal Bank",
    "TD Canada Trust",
    "Scotiabank",
    "BMO",
    "CIBC",
    "Tangerine",
    "Simplii",
    "EQ Bank",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10">
      {/* Back Button */}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex items-start hero-animate">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl flex items-center justify-center shadow-xl">
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-gray-900 leading-tight hero-animate">
            Direct Bank{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Transfers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed hero-animate">
           Real-time transaction tracking
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed hero-animate">
            Move your money globally with direct bank-to-bank transfers. Rombex
            connects to major local and international financial institutions,
            enabling instant deposits and withdrawals to verified bank accounts.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed hero-animate mb-8">
            24/7 operational uptime You stay in control while enjoying
            bank-grade speed and transparency, without the complexity of
            traditional remittance channels.
          </p>

          <div className="hero-animate">
            <Link
              href="/rates"
              className="px-8 py-4 bg-black md:mt-2.5 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Check Rates
            </Link>
          </div>
        </div>

        {/* Right - Image/Illustration */}
        <div className="hero-animate">
          <div className="relative flex items-center justify-end w-full max-w-xl aspect-square rounded-2xl overflow-hidden  ">
            <Image
              src="/services/direct-tf.jpg"
              alt="Interac e-Transfer"
              fill
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-4">
          Bank-Grade Speed & Transparency
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          You stay in control while enjoying bank-grade speed and transparency,
          without the complexity of traditional remittance channels
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
          Ready to Simplify Your Transfers?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join thousands who've switched to faster, more transparent bank
          transfers with Waverlite
        </p>
        <button className="px-12 py-5 bg-black text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
          Connect Your Bank Now
        </button>

        <div className="mt-8 text-sm text-gray-500">
          Enterprise-grade security • Instant verification • Available 24/7
        </div>
      </div>
    </main>
  );
}
