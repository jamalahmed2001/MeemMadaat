import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { NAVIGATION, ORGANIZATION_INFO, SOCIAL_LINKS } from '../utils/constants';
import type { NavigationItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setOpenDropdown(null);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const renderNavItem = (item: NavigationItem, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;
    
    if (!hasChildren) {
      return (
        <Link
          href={item.href}
          className={`hover:text-gofundme-green transition-colors duration-200 ${
            isMobile ? 'block py-3 px-2 rounded-md hover:bg-white/10 text-base' : 'text-sm xl:text-base whitespace-nowrap'
          }`}
          onClick={() => isMobile && setMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <div className={isMobile ? '' : 'relative flex-shrink-0'}>
        <div className={isMobile ? '' : 'flex items-center'}>
          <Link
            href={item.href}
            className={`hover:text-gofundme-green transition-colors duration-200 ${
              isMobile ? 'block py-3 px-2 rounded-md hover:bg-white/10 text-base' : 'py-2 text-sm xl:text-base whitespace-nowrap'
            }`}
            onClick={() => isMobile && setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
          {!isMobile && (
            <button
              className="ml-1 hover:text-gofundme-green transition-colors duration-200 py-2"
              onClick={() => toggleDropdown(item.name)}
              aria-label={`Toggle ${item.name} menu`}
              aria-expanded={openDropdown === item.name}
            >
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === item.name ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
        
        {/* Desktop Dropdown */}
        {!isMobile && openDropdown === item.name && hasChildren && item.children && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                className="block px-4 py-2 text-charcoal hover:bg-light-gray transition-colors duration-200 text-sm whitespace-nowrap"
                onClick={() => setOpenDropdown(null)}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
        
        {/* Mobile Dropdown */}
        {isMobile && hasChildren && item.children && (
          <div className="pl-4 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                className="block py-2 px-2 rounded-md hover:bg-white/10 hover:text-gofundme-green transition-colors duration-200 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-dark-teal text-white sticky top-0 z-50">
        <nav ref={navRef} className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity duration-200"
            >
              <Image
                src="/images/meem-madaat-logo.png"
                alt="Meem Madaat Logo"
                width={40}
                height={40}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="text-lg md:text-xl lg:text-2xl font-bold hover:text-gofundme-green transition-colors duration-200">
                {ORGANIZATION_INFO.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-1 justify-end">
              {NAVIGATION.map((item) => (
                <div key={item.name}>{renderNavItem(item)}</div>
              ))}
              <Link 
                href="/donate" 
                className="btn-primary text-sm xl:text-base whitespace-nowrap ml-4"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/20 bg-dark-teal">
              <div className="space-y-1 px-4 sm:px-6">
                {NAVIGATION.map((item) => (
                  <div key={item.name}>{renderNavItem(item, true)}</div>
                ))}
                <div className="pt-4">
                  <Link 
                    href="/donate" 
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-dark-teal text-white mt-auto">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-12">
            {/* About Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                About {ORGANIZATION_INFO.name}
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                {ORGANIZATION_INFO.tagline}
              </p>
              <p className="text-sm text-white/60">
                UK Registered Charity No. {ORGANIZATION_INFO.charityNumber}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base">
                {['Home', 'About Us', 'Governance', 'Impact & Reports', 'Stories', 'News'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                      className="hover:text-gofundme-green transition-colors duration-200 block py-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Work */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Our Work</h3>
              <ul className="space-y-2 text-sm md:text-base">
                {NAVIGATION.find(item => item.name === 'Our Work')?.children?.map((child) => (
                  <li key={child.name}>
                    <Link 
                      href={child.href} 
                      className="hover:text-gofundme-green transition-colors duration-200 block py-1"
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved & Contact */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm md:text-base mb-6">
                <li>
                  <Link 
                    href="/donate" 
                    className="hover:text-gofundme-green transition-colors duration-200 block py-1"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/volunteer" 
                    className="hover:text-gofundme-green transition-colors duration-200 block py-1"
                  >
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/fundraise" 
                    className="hover:text-gofundme-green transition-colors duration-200 block py-1"
                  >
                    Fundraise
                  </Link>
                </li>
              </ul>
              
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Info</h3>
              <div className="text-sm md:text-base text-white/80 space-y-2">
                <p>
                  <span className="block">Email:</span>
                  <a 
                    href={`mailto:${ORGANIZATION_INFO.contact.email}`}
                    className="hover:text-gofundme-green transition-colors duration-200"
                  >
                    {ORGANIZATION_INFO.contact.email}
                  </a>
                </p>
                <p>
                  <span className="block">Phone:</span>
                  <a 
                    href={`tel:${ORGANIZATION_INFO.contact.phone.replace(/\s/g, '')}`}
                    className="hover:text-gofundme-green transition-colors duration-200"
                  >
                    {ORGANIZATION_INFO.contact.phone}
                  </a>
                </p>
              </div>
              
              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href={SOCIAL_LINKS.facebook}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href={SOCIAL_LINKS.twitter}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href={SOCIAL_LINKS.instagram}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href={SOCIAL_LINKS.youtube}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 text-center">
            <p className="text-xs md:text-sm text-white/60">
              &copy; {new Date().getFullYear()} {ORGANIZATION_INFO.name}. All rights reserved. 
              Registered Charity No. {ORGANIZATION_INFO.charityNumber}
            </p>
            <p className="text-xs text-white/40 mt-2">
              {ORGANIZATION_INFO.donationPolicy}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 