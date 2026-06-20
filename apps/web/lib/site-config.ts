export type SiteKey = 'main' | 'materials' | 'luxury' | 'transport' | 'developments' | 'travel'

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  nav: { label: string; href: string }[]
  accentColor?: string
  schema: {
    type: string
    locality: string
    phone?: string
  }
}

export const SITE_CONFIGS: Record<SiteKey, SiteConfig> = {
  main: {
    name: 'Team BIR',
    tagline: 'Built to Last. Driven to Deliver.',
    description: 'Team BIR is a family of Tennessee-based companies spanning construction, transport, real estate, and hospitality — founded by Jimmy Bir Singh.',
    url: 'https://teambir.com',
    nav: [
      { label: 'Businesses', href: '/businesses' },
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'Organization', locality: 'Knoxville', phone: '' },
  },
  materials: {
    name: 'BIR Materials',
    tagline: 'Rock Solid Results.',
    description: 'Premium aggregates, fill dirt, topsoil, contract crushing, and sustainable materials recycling in Tennessee.',
    url: 'https://materials.teambir.com',
    nav: [
      { label: 'Aggregates', href: '/aggregates' },
      { label: 'Fill Dirt', href: '/fill-dirt' },
      { label: 'Crushing', href: '/crushing' },
      { label: 'Recycling', href: '/recycling' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'LocalBusiness', locality: 'Knoxville' },
  },
  luxury: {
    name: 'BIR Luxury Landing',
    tagline: 'Elevated Living in Oak Ridge.',
    description: 'Luxury duplexes, apartments, and condominiums in Oak Ridge, TN — 22 miles from Downtown Knoxville with resort-style amenities.',
    url: 'https://luxury.teambir.com',
    nav: [
      { label: 'Duplexes', href: '/duplexes' },
      { label: 'Apartments', href: '/apartments' },
      { label: 'Condominiums', href: '/condominiums' },
      { label: 'Amenities', href: '/amenities' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'ApartmentComplex', locality: 'Oak Ridge' },
  },
  transport: {
    name: 'BIR Transport',
    tagline: 'Go With the Best.',
    description: 'Tennessee-based trucking and logistics: Cross Docking, Final Mile, Overweight Assistance, Drop Trailer Storage, and Refrigerated Storage.',
    url: 'https://transport.teambir.com',
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'MovingCompany', locality: 'Knoxville', phone: 'USDOT 717687' },
  },
  developments: {
    name: 'BIR Developments',
    tagline: 'Your Trusted Builder in Knoxville.',
    description: 'Custom homes, commercial construction, renovations, and excavation services in Knoxville, TN.',
    url: 'https://developments.teambir.com',
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'GeneralContractor', locality: 'Knoxville' },
  },
  travel: {
    name: 'BIR Travel Plaza',
    tagline: 'Your Stop for Comfort & Convenience.',
    description: "Tennessee's premier travel plaza in Dandridge — McDonald's, fuel, truckers lounge, and full-hookup RV parking.",
    url: 'https://travel.teambir.com',
    nav: [
      { label: 'Amenities', href: '/amenities' },
      { label: 'Location', href: '/location' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'TravelAgency', locality: 'Dandridge' },
  },
}
