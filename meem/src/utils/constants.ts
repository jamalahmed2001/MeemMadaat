import type { NavigationItem, OrganizationInfo, SocialLinks } from '../types';

export const NAVIGATION: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Our Work',
    href: '/our-work',
    children: [
      { name: 'Emergency Relief', href: '/our-work/emergency-relief' },
      { name: 'Medical Aid', href: '/our-work/medical-aid' },
      { name: 'Education', href: '/our-work/education' },
      { name: 'Food Security', href: '/our-work/food-security' },
      { name: 'Community Development', href: '/our-work/community-development' },
      { name: 'Family Support', href: '/our-work/family-support' },
      { name: 'Videos', href: '/our-work/videos' },
    ],
  },
  {
    name: 'Get Involved',
    href: '/get-involved',
    children: [
      { name: 'Donate', href: '/donate' },
      { name: 'Volunteer', href: '/volunteer' },
      { name: 'Fundraise', href: '/fundraise' },
    ],
  },
  { name: 'Impact & Reports', href: '/impact' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const ORGANIZATION_INFO: OrganizationInfo = {
  name: 'Meem Madaat Welfare',
  tagline: 'Empowering communities through compassionate action and sustainable development.',
  charityNumber: '1234567',
  donationPolicy: '100% of your donations go directly to our charitable projects.',
  contact: {
    email: 'Meemmadaat@gmail.com',
    phone: '07855828260',
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://www.facebook.com/meemmadaatwelfaregroup',
  twitter: 'https://twitter.com/meemmadaat',
  instagram: 'https://www.instagram.com/meemmadaatwelfaregroup',
  youtube: 'https://www.youtube.com/channel/UCDq3MHeLr8w_Qj2Ju60zNrA',
}; 