"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ChevronDown, ArrowLeftRight, Building2, RefreshCw, Coins, Apple, Smartphone } from "lucide-react";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 'interac',
      title: 'Interac Transfers',
      description: 'Secure, Fast, Global Transfers',
      icon: ArrowLeftRight,
      link: '/services/interac-transfers'
    },
    {
      id: 'direct-bank',
      title: 'Direct Bank Transfers',
      description: 'Seamless Direct Banking',
      icon: Building2,
      link: '/services/direct-bank-transfers'
    },
    {
      id: 'currency',
      title: 'Currency Exchange',
      description: 'Seamless, Real-Time Currency Exchange',
      icon: RefreshCw,
      link: '/services/currency-exchange'
    },
    {
      id: 'crypto',
      title: 'USDT & USDC Transactions',
      description: 'Secure Stablecoin Transfers',
      icon: Coins,
      link: '/services/usdt-usdc-transactions'
    },
  ];

  const downloadLinks = [
    {
      id: 'ios',
      name: 'Download for iOS',
      icon: Apple,
      link: 'https://play.google.com/store/apps/details?id=com.exchange.global_exchange&pcampaignid=web_share', // Replace with actual App Store link
      description: 'Available on the App Store'
    },
    {
      id: 'android',
      name: 'Download for Android',
      icon: Smartphone,
      link: 'https://apps.apple.com/ng/app/rombex-crossborder-payments/id6747320009', // Replace with actual Play Store link
      description: 'Get it on Google Play'
    }
  ];

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
      hasDropdown: true,
    },
    {
      name: "Rates",
      link: "/rates",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar className="flex items-center justify-center">
        {/* Desktop Navigation */}
        <NavBody className="bg-white lg:bg-white/90">
          <NavbarLogo />
          
          {/* Custom Nav Items with Services Dropdown */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <div key={`nav-${idx}`} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 z-50">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <a
                                key={service.id}
                                href={service.link}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                              >
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                  <Icon className="w-6 h-6 text-black" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                  </h3>
                                  <p className="text-sm text-gray-600">
                                    {service.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Download Button with Dropdown */}
          <div className="flex items-center gap-4">
            <div 
              className="relative"
              onMouseEnter={() => setIsDownloadOpen(true)}
              onMouseLeave={() => setIsDownloadOpen(false)}
            >
              <button className="lg:px-5 lg:py-3 px-4 py-2 text-white bg-black hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 text-xs lg:text-sm font-medium rounded-full flex items-center gap-2">
                Download
                <ChevronDown className={`w-4 h-4 transition-transform ${isDownloadOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Download Dropdown */}
              {isDownloadOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50">
                  {downloadLinks.map((download) => {
                    const Icon = download.icon;
                    return (
                      <a
                        key={download.id}
                        href={download.link}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {download.name}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {download.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <span className="block text-neutral-600 dark:text-neutral-300 font-medium">
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={service.id}
                            href={service.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2 text-neutral-600 dark:text-neutral-300"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{service.title}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                )}
              </div>
            ))}
            
            {/* Mobile Download Links */}
            <div className="flex w-full flex-col gap-3 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">Download App</span>
              {downloadLinks.map((download) => {
                const Icon = download.icon;
                return (
                  <a
                    key={download.id}
                    href={download.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm">{download.name}</div>
                      <div className="text-xs text-gray-300">{download.description}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}