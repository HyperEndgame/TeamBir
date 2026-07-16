export interface JobOpening {
  role: string
  type: string
  location: string
  applyUrl: string
}

export const CAREERS: Partial<Record<'materials' | 'transport' | 'developments' | 'travel', JobOpening[]>> = {
  materials: [
    { role: 'CDL Driver', type: 'Full-time', location: 'Knoxville, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birconcrete' },
    { role: 'Non-CDL / General Labor', type: 'Full-time', location: 'Knoxville, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birconcretend' },
  ],
  transport: [
    { role: 'CDL-A Driver', type: 'Full-time', location: 'Knoxville, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birtransport' },
    { role: 'Non-CDL Driver / Support', type: 'Full-time', location: 'Knoxville, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birtransportnd' },
  ],
  developments: [
    { role: 'CDL Driver', type: 'Full-time', location: 'Knoxville, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birdevelopments' },
    { role: 'Non-CDL / General Labor', type: 'Full-time', location: 'Knoxville, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birdevelopmentsnondot' },
  ],
  travel: [
    { role: 'Travel Plaza Team Member', type: 'Full-time / Part-time', location: 'Dandridge, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/birtravelplaza' },
    { role: 'Jack in the Box Team Member', type: 'Full-time / Part-time', location: 'Dandridge, TN', applyUrl: 'https://intelliapp.driverapponline.com/c/jackinthebox' },
  ],
}
