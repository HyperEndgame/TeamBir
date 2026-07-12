export type SiteKey = 'main' | 'materials' | 'luxury' | 'transport' | 'developments' | 'travel' | 'fleet'

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  nav: { label: string; href: string }[]
  accentColor?: string
  logoSrc?: string
  address?: { street: string; city: string; state: string; zip: string }
  schema: {
    type: string
    locality: string
    phone?: string
  }
}

export const SITE_CONFIGS: Record<SiteKey, SiteConfig> = {
  main: {
    name: 'Team BIR',
    tagline: 'Go With the Best.',
    logoSrc: '/images/mainlogo.png',
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
    description: 'Premium aggregates, fill dirt, topsoil, concrete, contract crushing, and sustainable materials recycling in Knoxville, TN. 865-832-6247.',
    url: 'https://materials.teambir.com',
    logoSrc: '/images/mainlogo.png',
    nav: [
      { label: 'Aggregates', href: '/aggregates' },
      { label: 'Fill Dirt', href: '/fill-dirt' },
      { label: 'Crushing', href: '/crushing' },
      { label: 'Recycling', href: '/recycling' },
      { label: 'Contact', href: '/contact' },
    ],
    address: { street: '2601 Western Avenue', city: 'Knoxville', state: 'TN', zip: '37921' },
    schema: { type: 'LocalBusiness', locality: 'Knoxville', phone: '865-832-6247' },
  },
  luxury: {
    name: 'BIR Luxury Landing',
    tagline: 'Premier Events & Luxury Living in Oak Ridge.',
    logoSrc: '/images/mainlogo.png',
    description: '12,000 sq ft luxury event venue in Oak Ridge, TN — weddings, corporate events, birthday parties, pool parties, and new luxury condominiums & townhomes.',
    url: 'https://luxury.teambir.com',
    nav: [
      { label: 'Events', href: '/contact' },
      { label: 'Condominiums', href: '/condominiums' },
      { label: 'Amenities', href: '/amenities' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'EventVenue', locality: 'Oak Ridge' },
  },
  transport: {
    name: 'BIR Transport',
    tagline: 'Go With the Best.',
    description: 'Family-owned Tennessee trucking and logistics — dry van truckload, cross docking, final mile, truck parking, boat/RV storage. USDOT 717687. 540-980-7530.',
    url: 'https://transport.teambir.com',
    logoSrc: '/images/mainlogo.png',
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    schema: { type: 'MovingCompany', locality: 'Knoxville', phone: '540-980-7530' },
  },
  developments: {
    name: 'BIR Developments',
    tagline: 'Your Trusted Builder in Knoxville.',
    description: 'Custom homes, commercial construction, renovations, excavation, and electrical in Knoxville, TN. TN Contractor License #80985.',
    url: 'https://developments.teambir.com',
    logoSrc: '/images/mainlogo.png',
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Subcontractors', href: '/contact' },
      { label: 'Contact', href: '/contact' },
    ],
    address: { street: '2225 Sycamore Drive', city: 'Knoxville', state: 'TN', zip: '37921' },
    schema: { type: 'GeneralContractor', locality: 'Knoxville' },
  },
  travel: {
    name: 'BIR Travel Plaza',
    tagline: 'Your Stop for Comfort & Convenience.',
    description: "Tennessee's premier travel plaza at 1217 Deep Springs Rd, Dandridge — Jack in the Box, Naan Stop, 100% No Ethanol fuel, 250 parking spaces, and full-hookup RV parking.",
    url: 'https://travel.teambir.com',
    logoSrc: '/images/mainlogo.png',
    nav: [
      { label: 'Amenities', href: '/amenities' },
      { label: 'Location', href: '/location' },
      { label: 'Contact', href: '/contact' },
    ],
    address: { street: '1217 Deep Springs Rd', city: 'Dandridge', state: 'TN', zip: '37725' },
    schema: { type: 'TravelAgency', locality: 'Dandridge' },
  },
  fleet: {
    name: 'BIR Fleet Services',
    tagline: 'Coming Soon.',
    logoSrc: '/images/mainlogo.png',
    description: 'A new Team BIR company is on the way.',
    url: 'https://fleet.teambir.com',
    nav: [],
    schema: { type: 'Organization', locality: 'Knoxville' },
  },
}
