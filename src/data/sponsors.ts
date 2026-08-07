export type SponsorTier = 'title' | 'premium' | 'partner' | 'supporter'

export interface Sponsor {
  id: number
  name: string
  logo: string
  website: string
  tier: SponsorTier
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'NeonWave Audio',
    logo: '/images/sponsors/neonwave-audio.png',
    website: 'https://neonwaveaudio.com',
    tier: 'title',
  },
  {
    id: 2,
    name: 'Quantum Dynamics',
    logo: '/images/sponsors/quantum-dynamics.png',
    website: 'https://quantumdynamics.io',
    tier: 'premium',
  },
  {
    id: 3,
    name: 'Pulse Energy',
    logo: '/images/sponsors/pulse-energy.png',
    website: 'https://pulseenergy.com',
    tier: 'premium',
  },
  {
    id: 4,
    name: 'Crystal Vision',
    logo: '/images/sponsors/crystal-vision.png',
    website: 'https://crystalvision.co',
    tier: 'partner',
  },
  {
    id: 5,
    name: 'Aether Labs',
    logo: '/images/sponsors/aether-labs.png',
    website: 'https://aetherlabs.io',
    tier: 'partner',
  },
  {
    id: 6,
    name: 'Synth Corp',
    logo: '/images/sponsors/synth-corp.png',
    website: 'https://synthcorp.com',
    tier: 'partner',
  },
  {
    id: 7,
    name: 'Void Systems',
    logo: '/images/sponsors/void-systems.png',
    website: 'https://voidsystems.tech',
    tier: 'supporter',
  },
  {
    id: 8,
    name: 'Horizon Tech',
    logo: '/images/sponsors/horizon-tech.png',
    website: 'https://horizontech.com',
    tier: 'supporter',
  },
]

export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter((s) => s.tier === tier)
}

export function getTitleSponsors(): Sponsor[] {
  return sponsors.filter((s) => s.tier === 'title')
}

export function getPremiumSponsors(): Sponsor[] {
  return sponsors.filter((s) => s.tier === 'premium' || s.tier === 'title')
}