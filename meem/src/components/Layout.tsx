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
      { name: 'Family Support', href: '/our-work/family-support' },
      { name: 'Education Programs', href: '/our-work/education' },
      { name: 'Emergency Relief', href: '/our-work/emergency-relief' },
      { name: 'Community Development', href: '/our-work/community-development' },
      { name: 'Food Security', href: '/our-work/food-security' },
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
      <header className="bg-dark-teal text-white">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              Meem Madaat
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <>
                      <button
                        className="hover:text-gofundme-green transition-colors duration-200 py-2"
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
                              className="block px-4 py-2 text-charcoal hover:bg-light-gray transition-colors duration-200"
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
                      className="hover:text-gofundme-green transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/donate" className="btn-primary">
                Donate Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                    className="block py-2 hover:text-gofundme-green transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-sm hover:text-gofundme-green transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/donate" className="btn-primary mt-4 inline-block">
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
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Meem Madaat</h3>
              <p className="text-sm text-white/80">
                UK-registered charity (Charity No. XXXXX) dedicated to relieving poverty,
                advancing healthcare, and promoting social cohesion in the UK and Pakistan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-gofundme-green transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-work" className="hover:text-gofundme-green transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="hover:text-gofundme-green transition-colors">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-gofundme-green transition-colors">
                    Impact & Reports
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-gofundme-green transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/donate" className="hover:text-gofundme-green transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="hover:text-gofundme-green transition-colors">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gofundme-green transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-white/80">
                Email: info@meemmadaat.org<br />
                Phone: +44 (0) 123 456 7890<br />
                <Link href="/contact" className="hover:text-gofundme-green transition-colors">
                  Contact Form →
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>&copy; 2024 Meem Madaat. All rights reserved. Registered Charity No. XXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 