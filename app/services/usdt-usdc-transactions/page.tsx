import Link from "next/link";

export default function UsdtUsdcTransactionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left - Image */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative w-full max-w-md sm:max-w-sm md:max-w-md aspect-square rounded-3xl overflow-hidden shadow-md">
              <img
                src="/services/USDT.jpg"
                alt="Stablecoin illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="max-w-xl text-left lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-600 text-sm font-medium">
                Stablecoin Transactions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              USDT & USDC <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Transactions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-gray-600 leading-relaxed mb-8">
              Rombex bridges the world of traditional banking and blockchain
              finance. Send, receive, and store stablecoins like USDT and USDC
              digital currencies pegged to the US Dollar directly within your
              wallet.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-black text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Value Proposition */}
      <section className="mx-auto max-w-7xl px-6 -mt-10 sm:-mt-12 relative z-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              The Best of Both Worlds
            </h2>
            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed">
              Enjoy the stability of fiat currency combined with the speed and
              efficiency of crypto transactions. Get financial freedom with
              digital asset stability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Built for speed, security, and reliability in the digital finance
            ecosystem
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Zero Downtime
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Peer-to-peer transfers available 24/7 with no maintenance windows
              or interruptions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Instant Global Settlements
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Send money anywhere in the world with near-instant confirmation
              and settlement.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Secure Storage
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Industry-leading security with both cold and hot wallet storage
              options for your assets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
