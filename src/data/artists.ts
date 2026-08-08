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
    genre: 'Synthwave',
    country: 'Japan',
    description: 'Retro-futuristic synthwave duo channeling neon-lit Tokyo into every beat.',
    biography: 'Formed in Shibuya in 2018, Neon Collective combines analog synthesizers with modern production to create a sound that is both nostalgic and forward-looking.',
    social: {
      spotify: 'https://open.spotify.com/artist/neon-collective',
      youtube: 'https://youtube.com/@neoncollective',
      instagram: 'https://instagram.com/neoncollective',
      soundcloud: 'https://soundcloud.com/neoncollective',
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
    genre: 'House',
    country: 'United Kingdom',
    description: 'High-energy house music with infectious grooves and festival-ready anthems.',
    biography: 'Pulse Engine is the stage name of London-based producer James Thornton, whose blend of deep house, tech house, and progressive house has made him a festival favorite across Europe.',
    social: {
      spotify: 'https://open.spotify.com/artist/pulse-engine',
      youtube: 'https://youtube.com/@pulseengine',
      instagram: 'https://instagram.com/pulseengine',
      website: 'https://pulseengine.co.uk',
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
    genre: 'Drum & Bass',
    country: 'Netherlands',
    description: 'Neurofunk and liquid D&B with surgically precise production and devastating drops.',
    biography: 'Amsterdam\'s Void Protocol has been at the forefront of the drum and bass evolution for the past five years.',
    social: {
      spotify: 'https://open.spotify.com/artist/void-protocol',
      youtube: 'https://youtube.com/@voidprotocol',
      soundcloud: 'https://soundcloud.com/voidprotocol',
      instagram: 'https://instagram.com/voidprotocol',
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
    genre: 'Trance',
    country: 'Israel',
    description: 'Uplifting trance with crystalline melodies and euphoric buildups that define the genre.',
    biography: 'Crystal Mesh rose from the Israeli trance scene to become one of the genre\'s most recognized names.',
    social: {
      spotify: 'https://open.spotify.com/artist/crystal-mesh',
      youtube: 'https://youtube.com/@crystalmesh',
      instagram: 'https://instagram.com/crystalmesh',
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
    genre: 'Progressive',
    country: 'United States',
    description: 'Progressive house journeys that unfold like cinematic narratives over extended sets.',
    biography: 'Binary Sunset is the moniker of Los Angeles-based producer Alex Rivera, whose progressive house sound draws from film scoring, ambient music, and deep house.',
    social: {
      spotify: 'https://open.spotify.com/artist/binary-sunset',
      youtube: 'https://youtube.com/@binarysunset',
      instagram: 'https://instagram.com/binarysunset',
      website: 'https://binarysunsetmusic.com',
    },
    featured: true,
    colors: { primary: '#f59e0b', secondary: '#d97706' },
    tags: ['progressive', 'cinematic', 'deep', 'closing-set', '2027'],
  },
  {
    id: 8,
    slug: 'fractal-mind',
    name: 'Fractal Mind',
    stage: 'Neon Arena',
    day: 'Day Three',
    image: '/images/artists/artist-fractal-mind.jpg',
    coverImage: '/images/artists/cover-fractal-mind.jpg',
    genre: 'Psytrance',
    country: 'Brazil',
    description: 'Mind-bending psytrance with organic textures, twisting leads, and cosmic energy.',
    biography: 'Hailing from São Paulo, Fractal Mind brings the vibrancy of Brazilian psychedelic culture to the global stage.',
    social: {
      spotify: 'https://open.spotify.com/artist/fractal-mind',
      soundcloud: 'https://soundcloud.com/fractalmind',
      instagram: 'https://instagram.com/fractalmind',
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
    genre: 'Ambient',
    country: 'Iceland',
    description: 'Atmospheric ambient soundscapes inspired by Icelandic landscapes and Arctic silence.',
    biography: 'Echo Chamber is the project of Reykjavík composer Sigrid Jónsdóttir, who transforms field recordings from Iceland\'s glaciers into deeply moving ambient compositions.',
    social: {
      spotify: 'https://open.spotify.com/artist/echo-chamber',
      youtube: 'https://youtube.com/@echochamber',
      website: 'https://echochamber.is',
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
    genre: 'Bass',
    country: 'Canada',
    description: 'Heavy bass music that pushes subwoofer limits with genre-defying production.',
    biography: 'Toronto\'s Hologram has been dismantling speaker systems since 2019 with a unique take on bass music that incorporates elements of trap, dubstep, and experimental electronic.',
    social: {
      spotify: 'https://open.spotify.com/artist/hologram',
      youtube: 'https://youtube.com/@hologram',
      soundcloud: 'https://soundcloud.com/hologram',
      instagram: 'https://instagram.com/hologram',
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
    genre: 'Dubstep',
    country: 'Australia',
    description: 'Melodic dubstep with cinematic drops that balance beauty and absolute destruction.',
    biography: 'Spectra emerged from Melbourne\'s bass music scene with a distinctive style that pairs emotional melodies with devastating bass drops.',
    social: {
      spotify: 'https://open.spotify.com/artist/spectra',
      youtube: 'https://youtube.com/@spectra',
      instagram: 'https://instagram.com/spectra',
      soundcloud: 'https://soundcloud.com/spectra',
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
    genre: 'Deep House',
    country: 'France',
    description: 'Parisian deep house with effortless elegance, warm analog textures, and sunset energy.',
    biography: 'Lunar Drift is the alias of Paris-based DJ and producer Camille Dubois, whose deep house productions are influenced by the French touch legacy, jazz harmonies, and Balearic beats.',
    social: {
      spotify: 'https://open.spotify.com/artist/lunar-drift',
      instagram: 'https://instagram.com/lunardrift',
      soundcloud: 'https://soundcloud.com/lunardrift',
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