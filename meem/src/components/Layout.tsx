import Link from 'next/link';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Governance', href: '/governance' },
  {
    name: 'Our Work',
    href: '/our-work',
    children: [
      { name: 'Medical Aid', href: '/our-work/medical-aid' },
      { name: 'Homeless Support (UK)', href: '/our-work/homeless-support' },
      { name: 'Education & Community', href: '/our-work/education' },
    ],
  },
  { name: 'Impact & Reports', href: '/impact' },
  { name: 'News', href: '/news' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-dark-teal text-white sticky top-0 z-50 shadow-lg">
        <nav className="container-custom">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold hover:text-gofundme-green transition-colors">
              Meem Madaat
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <>
                      <button
                        className="hover:text-gofundme-green transition-colors duration-200 py-2 font-medium"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        {item.name}
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 text-charcoal hover:bg-light-gray transition-colors duration-200"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-gofundme-green transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/donate" className="btn-primary ml-4">
                Donate Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
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
            <div className="lg:hidden py-4 border-t border-white/20">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 hover:text-gofundme-green transition-colors duration-200 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-sm hover:text-gofundme-green transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/donate" 
                className="btn-primary mt-6 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-dark-teal text-white">
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4">About Meem Madaat</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                UK-registered charity (Charity No. XXXXX) dedicated to relieving poverty,
                advancing healthcare, and promoting social cohesion in the UK and Pakistan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:text-gofundme-green transition-colors inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="hover:text-gofundme-green transition-colors inline-block">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-gofundme-green transition-colors inline-block">
                    Impact & Reports
                  </Link>
                </li>
                <li>
                  <Link href="/policies" className="hover:text-gofundme-green transition-colors inline-block">
                    Policies & Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/donate" className="hover:text-gofundme-green transition-colors inline-block">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="hover:text-gofundme-green transition-colors inline-block">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/fundraise" className="hover:text-gofundme-green transition-colors inline-block">
                    Fundraise for Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="text-sm text-white/80 space-y-2">
                <p>
                  Email: <a href="mailto:info@meemmadaat.org" className="hover:text-gofundme-green transition-colors">info@meemmadaat.org</a>
                </p>
                <p>
                  Phone: <a href="tel:+441234567890" className="hover:text-gofundme-green transition-colors">+44 (0) 123 456 7890</a>
                </p>
                <p className="pt-2">
                  <Link href="/contact" className="hover:text-gofundme-green transition-colors inline-flex items-center">
                    Contact Form 
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>&copy; 2024 Meem Madaat. All rights reserved. Registered Charity No. XXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 