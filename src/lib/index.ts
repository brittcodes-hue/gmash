export const ROUTE_PATHS = {
  HOME: "/",
  RENOVATION_SERVICES: "/renovation-services",
  FORECLOSURE_HELP: "/foreclosure-help",
  REVIEWS: "/reviews",
  BLOG: "/blog",
  BLOG_DETAIL: "/blog/:slug",
  REAL_ESTATE: "/real-estate",
} as const;

export type RoutePath = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];

export const serviceTypes = [
  { value: 'fix-flip', label: 'Fix & Flip' },
  { value: 'foreclosure-help', label: 'Foreclosure Help' },
  { value: 'renovation-consultation', label: 'Renovation Consultation' },
  { value: 'real-estate-services', label: 'Real Estate Services' },
  { value: 'general-inquiry', label: 'General Inquiry' },
] as const;

export type ServiceType = typeof serviceTypes[number]['value'];

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceType: ServiceType;
  message: string;
}

export const CONTACT_INFO = {
  phone: '720.663.7346',
  email: 'skyler@gmash.co',
  website: 'gmash.co',
} as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/gmash.co',
  facebook: 'https://facebook.com/gmash.co',
  linkedin: 'https://linkedin.com/company/gmash',
} as const;

export const EXTERNAL_RESOURCES = {
  hud: 'https://www.hud.gov/topics/avoiding_foreclosure',
  coloradoHotline: 'tel:877-601-4673',
} as const;

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10;
};
