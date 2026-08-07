export type TicketGlow = 'purple' | 'pink' | 'cyan' | 'none'

export interface TicketTier {
  id: string
  name: string
  price: string
  currency: string
  description: string
  features: string[]
  glow: TicketGlow
  popular: boolean
}

export const ticketTiers: TicketTier[] = [
  {
    id: 'general',
    name: 'General',
    price: '1,490',
    currency: 'MAD',
    description: 'Full festival access for all three days.',
    features: [
      '3-day festival entry',
      'Access to all stages',
      'Food Village access',
      'General camping zone',
      'Festival wristband',
    ],
    glow: 'purple',
    popular: false,
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '3,990',
    currency: 'MAD',
    description: 'Elevate your experience with premium perks.',
    features: [
      'Everything in General',
      'Priority fast-lane entry',
      'VIP viewing platforms',
      'VIP lounge & bars',
      'Complimentary drinks',
      'VIP camping zone',
      'Artist meet & greet',
    ],
    glow: 'cyan',
    popular: true,
  },
  {
    id: 'backstage',
    name: 'Backstage',
    price: '9,990',
    currency: 'MAD',
    description: 'The ultimate all-access experience.',
    features: [
      'Everything in VIP',
      'Backstage access',
      'Side-stage viewing',
      'Green room access',
      'Dinner with artists',
      'Personal concierge',
      'Exclusive merch pack',
      'After-party invitation',
    ],
    glow: 'pink',
    popular: false,
  },
]

export function getTicketTierById(id: string): TicketTier | undefined {
  return ticketTiers.find((t) => t.id === id)
}

export function getPopularTier(): TicketTier | undefined {
  return ticketTiers.find((t) => t.popular)
}