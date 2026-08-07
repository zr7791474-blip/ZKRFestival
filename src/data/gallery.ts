export interface GalleryImage {
  id: number
  image: string
  title: string
  description: string
  category: string
  photographer: string
  featured: boolean
  alt: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: '/images/gallery/crowd-sunset.jpg',
    title: 'Golden Hour Crowd',
    description: 'The festival crowd bathed in golden light as the sun sets over the main stage.',
    category: 'crowd',
    photographer: 'Yasmine K.',
    featured: true,
    alt: 'Festival crowd at sunset with warm golden light',
  },
  {
    id: 2,
    image: '/images/gallery/main-stage-lighting.jpg',
    title: 'Main Stage Illuminated',
    description: 'The main stage comes alive with a full spectrum of laser and LED lighting.',
    category: 'stage',
    photographer: 'Marcus D.',
    featured: false,
    alt: 'Main stage lighting rig with lasers and LED panels',
  },
  {
    id: 3,
    image: '/images/gallery/laser-closeup.jpg',
    title: 'Laser Forest',
    description: 'Over 200 synchronized laser units create an immersive 3D forest of light.',
    category: 'stage',
    photographer: 'Léa F.',
    featured: false,
    alt: 'Laser show close-up with beams cutting through fog',
  },
  {
    id: 4,
    image: '/images/gallery/artist-performance.jpg',
    title: 'Live Performance',
    description: 'An artist in their element, performing to a packed main stage.',
    category: 'performance',
    photographer: 'Omar R.',
    featured: false,
    alt: 'Artist performing on stage with visual backdrop',
  },
  {
    id: 5,
    image: '/images/gallery/vip-lounge-atmosphere.jpg',
    title: 'VIP Lounge',
    description: 'The premium VIP lounge with elevated views and ambient lighting.',
    category: 'venue',
    photographer: 'Yasmine K.',
    featured: false,
    alt: 'VIP lounge atmosphere with ambient lighting and bar',
  },
  {
    id: 6,
    image: '/images/gallery/night-panorama.jpg',
    title: 'Festival Night Panorama',
    description: 'A sweeping panoramic view of the entire festival ground at night.',
    category: 'venue',
    photographer: 'Marcus D.',
    featured: true,
    alt: 'Panoramic night view of the entire festival venue',
  },
  {
    id: 7,
    image: '/images/gallery/food-village-night.jpg',
    title: 'Food Village After Dark',
    description: 'The food village transforms into a glowing culinary destination at night.',
    category: 'venue',
    photographer: 'Léa F.',
    featured: false,
    alt: 'Food village at night with glowing vendor stalls',
  },
  {
    id: 8,
    image: '/images/gallery/crowd-energy.jpg',
    title: 'Peak Energy',
    description: 'The crowd reaches peak energy during a headliner\'s closing track.',
    category: 'crowd',
    photographer: 'Omar R.',
    featured: false,
    alt: 'Festival crowd with hands raised during peak moment',
  },
  {
    id: 9,
    image: '/images/gallery/stage-design-detail.jpg',
    title: 'Stage Design',
    description: 'Intricate details of the custom-built kinetic stage structure.',
    category: 'stage',
    photographer: 'Marcus D.',
    featured: false,
    alt: 'Close-up of kinetic stage design and structural details',
  },
  {
    id: 10,
    image: '/images/gallery/sunset-venue.jpg',
    title: 'Sunset Over the Venue',
    description: 'The Casablanca waterfront venue framed by a dramatic Atlantic sunset.',
    category: 'venue',
    photographer: 'Yasmine K.',
    featured: false,
    alt: 'Sunset over the Casablanca waterfront festival venue',
  },
]

export function getFeaturedGalleryImages(): GalleryImage[] {
  return galleryImages.filter((img) => img.featured)
}

export function getGalleryImagesByCategory(category: string): GalleryImage[] {
  return galleryImages.filter(
    (img) => img.category.toLowerCase() === category.toLowerCase(),
  )
}

export function getGalleryImageById(id: number): GalleryImage | undefined {
  return galleryImages.find((img) => img.id === id)
}