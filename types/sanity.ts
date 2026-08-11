export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
}

export interface SanityBlogPost extends SanityDocument {
  _type: 'blogPost';
  title: string;
  slug: { current: string };
  publishedAt: string;
  author?: {
    name: string;
    image?: SanityImage;
  };
  mainImage?: SanityImage;
  categories?: {
    title: string;
  }[];
  body?: any[];
  excerpt?: string;
}

export interface SanityProduct extends SanityDocument {
  _type: 'product';
  title: string;
  slug: { current: string };
  description: string;
  features?: string[];
  heroImage?: SanityImage;
}
