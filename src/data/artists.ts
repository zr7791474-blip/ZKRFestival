export interface ArtistSocialLinks {
  spotify?: string
  youtube?: string
  soundcloud?: string
  instagram?: string
  website?: string
}

export interface ArtistColors {
  primary?: string
  secondary?: string
}

export interface Artist {
  id: number
  slug: string
  name: string
  stage: string
  day: string
  image: string
  coverImage: string
  logo?: string
  genre: string
  country: string
  description: string
  biography: string
  social: ArtistSocialLinks
  featured: boolean
  colors: ArtistColors
  tags: string[]
}

export const artists: Artist[] = [
  {
    id: 1,
    slug: 'aurora-waves',
    name: 'Aurora Waves',
    stage: 'Main Stage',
    day: 'Day One',
    image: '/images/artists/artist-aurora-waves.jpg',
    coverImage: '/images/artists/cover-aurora-waves.jpg',
    logo: '/images/artists/logo-aurora-waves.svg',
    genre: 'Electronic',
    country: 'Norway',
    description: 'Ethereal electronic soundscapes that blur the line between music and visual art.',
    biography: 'Born in Oslo, Aurora Waves has been pushing the boundaries of electronic music for over a decade. Known for immersive live shows that combine generative visuals with spatial audio, she has headlined festivals across 30 countries.',
    social: {
      spotify: 'https://open.spotify.com/artist/aurora-waves',
      youtube: 'https://youtube.com/@aurorawaves',
      instagram: 'https://instagram.com/aurorawaves',
      website: 'https://aurorawaves.com',
    },
    featured: true,
    colors: { primary: '#8b5cf6', secondary: '#06b6d4' },
    tags: ['electronic', 'ambient', 'headliner', 'live-visuals', '2027'],
  },
  {
    id: 2,
    slug: 'neon-collective',
    name: 'Sabrina Carpenter',
    stage: 'Main Stage',
    day: 'Day One',
    image: '/images/artists/artist-neon-collective.jpg',
    coverImage: '/images/artists/cover-neon-collective.jpg',
    genre: 'Pop',
    country: 'United States',
    description: 'American pop artist known for catchy melodies, polished production, expressive vocals, and modern songwriting.',
    biography: 'Sabrina Carpenter is an American singer, songwriter, and actress who has developed an international music career through contemporary pop releases and successful collaborations. Her music combines modern pop with dance-pop and R&B influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B',
      youtube: 'https://youtube.com/@sabrinacarpenter',
      instagram: 'https://instagram.com/sabrinacarpenter',
      website: 'https://www.sabrinacarpenter.com',
    },
    featured: true,
    colors: { primary: '#ec4899', secondary: '#f43f5e' },
    tags: ['synthwave', 'retro', 'duo', 'live-set', '2027'],
  },
  {
    id: 3,
    slug: 'deep-circuit',
    name: 'Deep Circuit',
    stage: 'Neon Arena',
    day: 'Day One',
    image: '/images/artists/artist-deep-circuit.jpg',
    coverImage: '/images/artists/cover-deep-circuit.jpg',
    genre: 'Techno',
    country: 'Germany',
    description: 'Berlin-grade techno with layers of industrial texture and hypnotic repetition.',
    biography: 'Deep Circuit emerged from Berlin\'s underground warehouse scene with a signature sound built on heavy kick drums, textured percussion, and evolving synth patterns.',
    social: {
      spotify: 'https://open.spotify.com/artist/deep-circuit',
      soundcloud: 'https://soundcloud.com/deepcircuit',
      instagram: 'https://instagram.com/deepcircuit',
    },
    featured: false,
    colors: { primary: '#6366f1', secondary: '#4f46e5' },
    tags: ['techno', 'industrial', 'berlin', 'warehouse', '2027'],
  },
  {
    id: 4,
    slug: 'pulse-engine',
    name: 'Billie Eilish',
    stage: 'Main Stage',
    day: 'Day Two',
    image: '/images/artists/artist-pulse-engine.jpg',
    coverImage: '/images/artists/cover-pulse-engine.jpg',
    genre: 'Alternative Pop',
    country: 'United States',
    description: 'Atmospheric alternative pop combining intimate vocals, electronic production, and unconventional songwriting.',
    biography: 'Billie Eilish is an American singer and songwriter known for her distinctive vocals and atmospheric production. Working closely with her brother FINNEAS, she has developed a sound that blends alternative pop, electronic music, and experimental production.',
    social: {
      spotify: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH',
      youtube: 'https://youtube.com/@BillieEilish',
      instagram: 'https://instagram.com/billieeilish',
      website: 'https://www.billieeilish.com',
    },
    featured: true,
    colors: { primary: '#06b6d4', secondary: '#0891b2' },
    tags: ['house', 'tech-house', 'progressive', 'festival', '2027'],
  },
  {
    id: 5,
    slug: 'void-protocol',
    name: 'ISSAM',
    stage: 'Neon Arena',
    day: 'Day Two',
    image: '/images/artists/artist-void-protocol.jpg',
    coverImage: '/images/artists/cover-void-protocol.jpg',
    genre: 'Hip-Hop / Rap',
    country: 'Morocco',
    description: 'Moroccan hip-hop blending rap, trap, electronic production, and North African influences.',
    biography: 'ISSAM is a Moroccan rapper, singer, and producer known for combining hip-hop, trap, electronic production, and North African influences. His experimental sound has helped bring Moroccan alternative rap to an international audience.',
    social: {
      youtube: 'https://youtube.com/@ISSAM',
      instagram: 'https://instagram.com/issam',
    },
    featured: false,
    colors: { primary: '#f43f5e', secondary: '#e11d48' },
    tags: ['drum-and-bass', 'neurofunk', 'liquid', 'high-energy', '2027'],
  },
  {
    id: 6,
    slug: 'crystal-mesh',
    name: 'INNA',
    stage: 'Main Stage',
    day: 'Day Two',
    image: '/images/artists/artist-crystal-mesh.jpg',
    coverImage: '/images/artists/cover-crystal-mesh.jpg',
    genre: 'Dance-Pop / EDM',
    country: 'Romania',
    description: 'Romanian dance-pop combining electronic production, infectious melodies, and club-oriented energy.',
    biography: 'INNA is a Romanian singer known internationally for her dance-pop and electronic music. She gained worldwide recognition through successful dance releases and collaborations and has become one of Romania\'s most internationally recognized pop artists.',
    social: {
      spotify: 'https://open.spotify.com/artist/57h9W4L4aEnKXTrTHjDAR6',
      youtube: 'https://youtube.com/@INNA',
      instagram: 'https://instagram.com/inna',
      website: 'https://www.innaofficial.com',
    },
    featured: false,
    colors: { primary: '#a78bfa', secondary: '#7c3aed' },
    tags: ['trance', 'uplifting', 'melodic', 'anthem', '2027'],
  },
  {
    id: 7,
    slug: 'binary-sunset',
    name: 'Karol G',
    stage: 'Main Stage',
    day: 'Day Three',
    image: '/images/artists/artist-binary-sunset.jpg',
    coverImage: '/images/artists/cover-binary-sunset.jpg',
    logo: '/images/artists/logo-binary-sunset.svg',
    genre: 'Reggaeton / Latin Urban',
    country: 'Colombia',
    description: 'Colombian Latin urban music combining reggaeton, urbano rhythms, pop melodies, and contemporary production.',
    biography: 'Karol G, born Carolina Giraldo Navarro, is a Colombian singer and songwriter and one of the leading figures in contemporary Latin music. Her work combines reggaeton, Latin urban music, pop, and other influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla',
      youtube: 'https://youtube.com/@KarolG',
      instagram: 'https://instagram.com/karolg',
      website: 'https://www.karolgmusic.com',
    },
    featured: true,
    colors: { primary: '#f59e0b', secondary: '#d97706' },
    tags: ['progressive', 'cinematic', 'deep', 'closing-set', '2027'],
  },
  {
    id: 8,
    slug: 'fractal-mind',
    name: 'PNL',
    stage: 'Neon Arena',
    day: 'Day Three',
    image: '/images/artists/artist-fractal-mind.jpg',
    coverImage: '/images/artists/cover-fractal-mind.jpg',
    genre: 'French Rap / Cloud Rap',
    country: 'France',
    description: 'French rap known for atmospheric production, melodic flows, introspective lyrics, and a distinctive cloud-rap sound.',
    biography: 'PNL is a French rap duo formed by brothers Ademo and N.O.S. The duo is known for its atmospheric production, melodic delivery, introspective writing, and influential approach to French cloud rap.',
    social: {
      spotify: 'https://open.spotify.com/artist/3aK9rUo3J4t8j7v0m9z9k9',
      youtube: 'https://youtube.com/@PNL',
      instagram: 'https://instagram.com/pnlmusic',
    },
    featured: false,
    colors: { primary: '#10b981', secondary: '#059669' },
    tags: ['psytrance', 'psychedelic', 'organic', 'brazilian', '2027'],
  },
  {
    id: 9,
    slug: 'echo-chamber',
    name: 'DJ Snake',
    stage: 'Main Stage',
    day: 'Day Three',
    image: '/images/artists/artist-echo-chamber.jpg',
    coverImage: '/images/artists/cover-echo-chamber.jpg',
    genre: 'Electronic / EDM',
    country: 'France',
    description: 'French electronic music combining EDM, trap, bass, house, and globally influenced production.',
    biography: 'DJ Snake is a French DJ, producer, and songwriter known for major international electronic music releases and collaborations. His production blends EDM with trap, bass, house, and global musical influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4',
      youtube: 'https://youtube.com/@djsnake',
      instagram: 'https://instagram.com/djsnake',
      website: 'https://www.djsnake.com',
    },
    featured: false,
    colors: { primary: '#94a3b8', secondary: '#64748b' },
    tags: ['ambient', 'atmospheric', 'icelandic', 'meditative', '2027'],
  },
  {
    id: 10,
    slug: 'hologram',
    name: 'Morad',
    stage: 'Neon Arena',
    day: 'Day One',
    image: '/images/artists/artist-hologram.jpg',
    coverImage: '/images/artists/cover-hologram.jpg',
    genre: 'Hip-Hop / Rap',
    country: 'Spain',
    description: 'Spanish urban rap driven by raw storytelling, direct delivery, and modern street-oriented production.',
    biography: 'Morad is a Spanish rapper of Moroccan heritage known for his direct storytelling and distinctive urban sound. He became widely recognized through his releases and collaborations within Spain\'s contemporary urban music scene.',
    social: {
      spotify: 'https://open.spotify.com/artist/7IsFY1mtIWfj9J8P1WhzNA',
      youtube: 'https://youtube.com/@Morad',
      instagram: 'https://instagram.com/morad',
    },
    featured: false,
    colors: { primary: '#3b82f6', secondary: '#2563eb' },
    tags: ['bass', 'dubstep', 'trap', 'experimental', '2027'],
  },
  {
    id: 11,
    slug: 'spectra',
    name: 'Amr Diab',
    stage: 'Neon Arena',
    day: 'Day Two',
    image: '/images/artists/artist-spectra.jpg',
    coverImage: '/images/artists/cover-spectra.jpg',
    genre: 'Arabic Pop',
    country: 'Egypt',
    description: 'Egyptian Arabic pop combining modern production, Mediterranean influences, and melodic songwriting.',
    biography: 'Amr Diab is an Egyptian singer and songwriter and one of the most influential figures in Arabic pop music. His long career has helped shape modern Arabic pop through a combination of Egyptian musical traditions, international production, and contemporary pop songwriting.',
    social: {
      spotify: 'https://open.spotify.com/artist/5abSRg0xN1NV3gLbuvX24M',
      youtube: 'https://youtube.com/@AmrDiab',
      instagram: 'https://instagram.com/amrdiab',
    },
    featured: false,
    colors: { primary: '#e879f9', secondary: '#c026d3' },
    tags: ['dubstep', 'melodic', 'cinematic', 'bass', '2027'],
  },
  {
    id: 12,
    slug: 'lunar-drift',
    name: 'Harry Styles',
    stage: 'Main Stage',
    day: 'Day One',
    image: '/images/artists/artist-lunar-drift.jpg',
    coverImage: '/images/artists/cover-lunar-drift.jpg',
    genre: 'Pop / Rock',
    country: 'United Kingdom',
    description: 'British pop and rock combining modern production with classic songwriting and influences from multiple musical eras.',
    biography: 'Harry Styles is an English singer and songwriter who first achieved international fame as a member of One Direction before launching a successful solo career. His solo work explores pop, rock, folk, and psychedelic influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3',
      youtube: 'https://youtube.com/@HarryStyles',
      instagram: 'https://instagram.com/harrystyles',
      website: 'https://www.hstyles.co.uk',
    },
    featured: false,
    colors: { primary: '#fbbf24', secondary: '#f59e0b' },
    tags: ['deep-house', 'french-touch', 'balearic', 'warm', '2027'],
  },
]

export function getArtistById(id: number): Artist | undefined {
  return artists.find((a) => a.id === id)
}

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug)
}

export function getFeaturedArtists(): Artist[] {
  return artists.filter((a) => a.featured)
}

export function getArtistsByDay(day: string): Artist[] {
  return artists.filter((a) => a.day === day)
}

export function getArtistsByGenre(genre: string): Artist[] {
  return artists.filter((a) => a.genre.toLowerCase() === genre.toLowerCase())
}

export function getArtistsByTag(tag: string): Artist[] {
  return artists.filter((a) => a.tags.includes(tag))
}

export function getArtistStageName(item: { artistId?: number; label?: string }): string {
  if (item.artistId) {
    const artist = getArtistById(item.artistId)
    return artist?.name ?? 'Unknown Artist'
  }
  return item.label ?? ''
}

