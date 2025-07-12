export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface OrganizationInfo {
  name: string;
  tagline: string;
  donationPolicy: string;
  contact: {
    email: string;
    phone: string;
  };
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
} 