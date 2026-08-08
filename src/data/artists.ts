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
    name: 'AURORA',
    stage: 'Main Stage',
    day: 'Day One',
    image: '/images/artists/artist-aurora-waves.jpg',
    coverImage: '/images/artists/cover-aurora-waves.jpg',
    logo: '/images/artists/logo-aurora-waves.svg',
    genre: 'Alternative Pop',
    country: 'Norway',
    description: 'Norwegian alternative pop blending ethereal vocals, electronic textures, and atmospheric songwriting.',
    biography: 'AURORA, born Aurora Aksnes, is a Norwegian singer and songwriter known for her ethereal voice, distinctive visual identity, and atmospheric approach to pop music. Her music combines alternative pop with electronic, folk, and art-pop influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/1WgXqy2Dd70QQOU7Ay074N',
      youtube: 'https://www.youtube.com/@AURORAMUSIC',
      instagram: 'https://www.instagram.com/auroramusic/',
      website: 'https://www.aurora-music.com/',
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
    description: 'American pop built around catchy melodies, polished production, expressive vocals, and modern songwriting.',
    biography: 'Sabrina Carpenter is an American singer, songwriter, and actress who developed an international music career through a series of successful pop releases. Her music combines contemporary pop with elements of dance-pop and R&B.',
    social: {
      spotify: 'https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B',
      youtube: 'https://www.youtube.com/@sabrinacarpenter',
      instagram: 'https://www.instagram.com/sabrinacarpenter/',
      website: 'https://www.sabrinacarpenter.com/',
    },
    featured: true,
    colors: { primary: '#ec4899', secondary: '#f43f5e' },
    tags: ['synthwave', 'retro', 'duo', 'live-set', '2027'],
  },
  {
    id: 3,
    slug: 'deep-circuit',
    name: 'Charlotte de Witte',
    stage: 'Neon Arena',
    day: 'Day One',
    image: '/images/artists/artist-deep-circuit.jpg',
    coverImage: '/images/artists/cover-deep-circuit.jpg',
    genre: 'Techno',
    country: 'Belgium',
    description: 'Belgian techno driven by powerful rhythms, dark atmospheres, hypnotic grooves, and high-energy club production.',
    biography: 'Charlotte de Witte is a Belgian DJ and producer widely recognized for her influential work in techno. Her sound combines dark, driving rhythms with hypnotic electronic textures, making her one of the prominent names in contemporary techno.',
    social: {
      spotify: 'https://open.spotify.com/artist/1lJhME1ZpzsEa5M0wW6Mso',
      youtube: 'https://www.youtube.com/@charlottedewittemusic',
      instagram: 'https://www.instagram.com/charlottedewittemusic/',
      website: 'https://www.charlottedewitte.com/',
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
    biography: 'Billie Eilish is an American singer and songwriter from Los Angeles known for her distinctive vocals and atmospheric production. Working closely with her brother FINNEAS, she has developed a sound that blends alternative pop, electronic music, and experimental production.',
    social: {
      spotify: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH',
      youtube: 'https://www.youtube.com/@BillieEilish',
      instagram: 'https://www.instagram.com/billieeilish/',
      website: 'https://www.billieeilish.com/',
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
    description: 'Moroccan hip-hop combining rap, trap, electronic production, and North African influences.',
    biography: 'ISSAM is a Moroccan rapper, singer, and producer known for his distinctive blend of hip-hop, trap, electronic production, and North African musical influences. His experimental approach has helped bring Moroccan alternative rap to international audiences.',
    social: {
      spotify: 'https://open.spotify.com/artist/3Jd0G2a0rQW5Kx5Xx7V9lA',
      youtube: 'https://www.youtube.com/@ISSAM',
      instagram: 'https://www.instagram.com/issam/',
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
    biography: 'INNA is a Romanian singer known for her international dance-pop and electronic music career. She gained worldwide recognition through successful dance releases and collaborations and has remained a major name in European electronic pop.',
    social: {
      spotify: 'https://open.spotify.com/artist/2S5Gg0mJ9c8r5d4Q9Y0sJY',
      youtube: 'https://www.youtube.com/@INNA',
      instagram: 'https://www.instagram.com/inna/',
      website: 'https://innaofficial.com/',
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
    biography: 'Karol G, born Carolina Giraldo Navarro, is a Colombian singer and songwriter and one of the leading figures in contemporary Latin music. Her work blends reggaeton, Latin urban music, pop, and other influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla',
      youtube: 'https://www.youtube.com/@KarolG',
      instagram: 'https://www.instagram.com/karolg/',
      website: 'https://www.karolgmusic.com/',
    },
    featured: true,
    colors: { primary: '#f59e0b', secondary: '#d97706' },
    tags: ['progressive', 'cinematic', 'deep', 'closing-set', '2027'],
  },
  {
    id: 8,
    slug: 'fractal-mind',
    name: 'Astrix',
    stage: 'Neon Arena',
    day: 'Day Three',
    image: '/images/artists/artist-fractal-mind.jpg',
    coverImage: '/images/artists/cover-fractal-mind.jpg',
    genre: 'Psytrance',
    country: 'Israel',
    description: 'Psychedelic trance built around hypnotic rhythms, progressive arrangements, and cosmic electronic textures.',
    biography: 'Astrix is the stage name of Israeli psytrance producer and DJ Avi Shmailov. He is known internationally for his psychedelic trance productions and long-running influence on the global psytrance scene.',
    social: {
      spotify: 'https://open.spotify.com/artist/6kyKlGWuqK7Nf5j4Rfle6X',
      youtube: 'https://www.youtube.com/@astrixofficial',
      instagram: 'https://www.instagram.com/astrixmusic/',
      website: 'https://www.astrix.co.il/',
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
    biography: 'DJ Snake is a French DJ, producer, and songwriter known for major international electronic music releases and collaborations. His production style combines EDM with trap, bass, house, and other global influences.',
    social: {
      spotify: 'https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4',
      youtube: 'https://www.youtube.com/@djsnake',
      instagram: 'https://www.instagram.com/djsnake/',
      website: 'https://www.djsnake.com/',
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
    biography: 'Morad is a Spanish rapper of Moroccan heritage known for his direct storytelling and distinctive urban sound. He became widely recognized within Spain’s contemporary rap and urban music scene through his independent releases and collaborations.',
    social: {
      spotify: 'https://open.spotify.com/artist/4az97MtWmBQ5Db3GfDh9j9',
      youtube: 'https://www.youtube.com/@Morad',
      instagram: 'https://www.instagram.com/morad/',
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
      youtube: 'https://www.youtube.com/@AmrDiab',
      instagram: 'https://www.instagram.com/amrdiab/',
      website: 'https://www.amrdiab.net/',
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
    biography: 'Harry Styles is an English singer and songwriter who first achieved international fame as a member of One Direction before launching a successful solo career. His solo music explores pop, rock, folk, and psychedelic influences across multiple critically acclaimed albums.',
    social: {
      spotify: 'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3',
      youtube: 'https://www.youtube.com/@HarryStyles',
      instagram: 'https://www.instagram.com/harrystyles/',
      website: 'https://www.hstyles.co.uk/',
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