export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export interface MegaNavColumnData {
  heading: string;
  headingLink?: string;
  links: NavItem[];
}

export interface MegaNavPanelData {
  columns: MegaNavColumnData[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
    ctaText?: string;
    tag?: string;
  };
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}
