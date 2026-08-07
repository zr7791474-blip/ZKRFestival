import { getArtistById } from './artists'

export interface Track {
  id: number
  title: string
  artistId: number
  duration: string
  cover: string
  audio: string
  album?: string
  genre: string
  bpm: number
  releaseDate: string
  tags: string[]
}

export interface Playlist {
  id: number
  name: string
  description: string
  cover: string
  trackIds: number[]
}

export interface Album {
  id: number
  title: string
  artistId: number
  cover: string
  trackIds: number[]
  releaseDate: string
}

export const tracks: Track[] = [
  {
    id: 1,
    title: 'Spectral Dawn',
    artistId: 1,
    duration: '5:23',
    cover: '/images/artists/cover-aurora-waves.jpg',
    audio: '/audio/singles/aurora-waves-spectral-dawn.mp3',
    album: 'Spectral',
    genre: 'Electronic',
    bpm: 120,
    releaseDate: '2027-03-15',
    tags: ['electronic', 'ambient', 'atmospheric'],
  },
  {
    id: 2,
    title: 'Northern Lights',
    artistId: 1,
    duration: '4:47',
    cover: '/images/artists/cover-aurora-waves.jpg',
    audio: '/audio/singles/aurora-waves-northern-lights.mp3',
    album: 'Spectral',
    genre: 'Electronic',
    bpm: 110,
    releaseDate: '2027-03-15',
    tags: ['electronic', 'ambient', 'melodic'],
  },
  {
    id: 3,
    title: 'Midnight Circuit',
    artistId: 2,
    duration: '4:12',
    cover: '/images/artists/cover-neon-collective.jpg',
    audio: '/audio/singles/neon-collective-midnight-circuit.mp3',
    album: 'Midnight Circuit EP',
    genre: 'Synthwave',
    bpm: 118,
    releaseDate: '2026-09-20',
    tags: ['synthwave', 'retro', 'driving'],
  },
  {
    id: 4,
    title: 'Neon Pulse',
    artistId: 2,
    duration: '3:58',
    cover: '/images/artists/cover-neon-collective.jpg',
    audio: '/audio/singles/neon-collective-neon-pulse.mp3',
    album: 'Midnight Circuit EP',
    genre: 'Synthwave',
    bpm: 125,
    releaseDate: '2026-09-20',
    tags: ['synthwave', 'energetic', 'anthem'],
  },
  {
    id: 5,
    title: 'Subterranean',
    artistId: 3,
    duration: '6:34',
    cover: '/images/artists/cover-deep-circuit.jpg',
    audio: '/audio/singles/deep-circuit-subterranean.mp3',
    genre: 'Techno',
    bpm: 138,
    releaseDate: '2027-01-10',
    tags: ['techno', 'industrial', 'dark'],
  },
  {
    id: 6,
    title: 'Floor Control',
    artistId: 4,
    duration: '5:01',
    cover: '/images/artists/cover-pulse-engine.jpg',
    audio: '/audio/singles/pulse-engine-floor-control.mp3',
    album: 'Engine Room',
    genre: 'House',
    bpm: 126,
    releaseDate: '2027-02-28',
    tags: ['house', 'tech-house', 'groovy'],
  },
  {
    id: 7,
    title: 'Gravity Well',
    artistId: 5,
    duration: '4:15',
    cover: '/images/artists/cover-void-protocol.jpg',
    audio: '/audio/singles/void-protocol-gravity-well.mp3',
    genre: 'Drum & Bass',
    bpm: 174,
    releaseDate: '2027-04-05',
    tags: ['drum-and-bass', 'neurofunk', 'heavy'],
  },
  {
    id: 8,
    title: 'Crystal Horizon',
    artistId: 6,
    duration: '7:22',
    cover: '/images/artists/cover-crystal-mesh.jpg',
    audio: '/audio/singles/crystal-mesh-crystal-horizon.mp3',
    genre: 'Trance',
    bpm: 140,
    releaseDate: '2026-12-01',
    tags: ['trance', 'uplifting', 'epic'],
  },
  {
    id: 9,
    title: 'Horizon Line',
    artistId: 7,
    duration: '8:45',
    cover: '/images/artists/cover-binary-sunset.jpg',
    audio: '/audio/singles/binary-sunset-horizon-line.mp3',
    album: 'Horizon Line',
    genre: 'Progressive',
    bpm: 122,
    releaseDate: '2026-11-15',
    tags: ['progressive', 'cinematic', 'emotional'],
  },
  {
    id: 10,
    title: 'Desert Transit',
    artistId: 7,
    duration: '6:30',
    cover: '/images/artists/cover-binary-sunset.jpg',
    audio: '/audio/singles/binary-sunset-desert-transit.mp3',
    album: 'Horizon Line',
    genre: 'Progressive',
    bpm: 124,
    releaseDate: '2026-11-15',
    tags: ['progressive', 'deep', 'journey'],
  },
  {
    id: 11,
    title: 'Fractal Bloom',
    artistId: 8,
    duration: '7:58',
    cover: '/images/artists/cover-fractal-mind.jpg',
    audio: '/audio/singles/fractal-mind-fractal-bloom.mp3',
    genre: 'Psytrance',
    bpm: 148,
    releaseDate: '2027-05-20',
    tags: ['psytrance', 'psychedelic', 'organic'],
  },
  {
    id: 12,
    title: 'Glacial Drift',
    artistId: 9,
    duration: '9:12',
    cover: '/images/artists/cover-echo-chamber.jpg',
    audio: '/audio/singles/echo-chamber-glacial-drift.mp3',
    genre: 'Ambient',
    bpm: 70,
    releaseDate: '2027-01-30',
    tags: ['ambient', 'atmospheric', 'icelandic'],
  },
  {
    id: 13,
    title: 'Shatter Point',
    artistId: 10,
    duration: '3:42',
    cover: '/images/artists/cover-hologram.jpg',
    audio: '/audio/singles/hologram-shatter-point.mp3',
    genre: 'Bass',
    bpm: 150,
    releaseDate: '2027-02-14',
    tags: ['bass', 'dubstep', 'heavy'],
  },
  {
    id: 14,
    title: 'Broken Glass',
    artistId: 11,
    duration: '4:33',
    cover: '/images/artists/cover-spectra.jpg',
    audio: '/audio/singles/spectra-broken-glass.mp3',
    genre: 'Dubstep',
    bpm: 140,
    releaseDate: '2027-03-01',
    tags: ['dubstep', 'melodic', 'emotional'],
  },
  {
    id: 15,
    title: 'Côte d\'Azur',
    artistId: 12,
    duration: '6:18',
    cover: '/images/artists/cover-lunar-drift.jpg',
    audio: '/audio/singles/lunar-drift-cote-dazur.mp3',
    genre: 'Deep House',
    bpm: 120,
    releaseDate: '2026-08-10',
    tags: ['deep-house', 'balearic', 'sunset'],
  },
  {
    id: 16,
    title: 'ZKR 2027 Official Mix',
    artistId: 1,
    duration: '62:00',
    cover: '/images/gallery/night-panorama.jpg',
    audio: '/audio/mixes/zkr-2027-official-mix.mp3',
    genre: 'Mixed',
    bpm: 0,
    releaseDate: '2027-07-01',
    tags: ['mix', 'official', 'festival'],
  },
]

export const playlists: Playlist[] = [
  {
    id: 1,
    name: 'ZKR 2027 Essentials',
    description: 'The definitive festival playlist featuring every artist performing at ZKR 2027.',
    cover: '/images/gallery/night-panorama.jpg',
    trackIds: [1, 3, 5, 6, 7, 8, 9, 11, 12, 14, 15],
  },
  {
    id: 2,
    name: 'Pre-Party Warm Up',
    description: 'Get in the mood before heading to the venue. Deep, warm, building energy.',
    cover: '/images/gallery/sunset-venue.jpg',
    trackIds: [15, 2, 12, 10, 6],
  },
  {
    id: 3,
    name: 'Peak Time Bangers',
    description: 'The hardest-hitting tracks from this year\'s lineup. Maximum energy.',
    cover: '/images/gallery/crowd-energy.jpg',
    trackIds: [13, 7, 5, 4, 14],
  },
  {
    id: 4,
    name: 'After Hours Wind Down',
    description: 'Post-festival recovery. Ambient, deep, and introspective.',
    cover: '/images/gallery/vip-lounge-atmosphere.jpg',
    trackIds: [12, 2, 10, 15],
  },
]

export const albums: Album[] = [
  {
    id: 1,
    title: 'Spectral',
    artistId: 1,
    cover: '/images/artists/cover-aurora-waves.jpg',
    trackIds: [1, 2],
    releaseDate: '2027-03-15',
  },
  {
    id: 2,
    title: 'Midnight Circuit EP',
    artistId: 2,
    cover: '/images/artists/cover-neon-collective.jpg',
    trackIds: [3, 4],
    releaseDate: '2026-09-20',
  },
  {
    id: 3,
    title: 'Engine Room',
    artistId: 4,
    cover: '/images/artists/cover-pulse-engine.jpg',
    trackIds: [6],
    releaseDate: '2027-02-28',
  },
  {
    id: 4,
    title: 'Horizon Line',
    artistId: 7,
    cover: '/images/artists/cover-binary-sunset.jpg',
    trackIds: [9, 10],
    releaseDate: '2026-11-15',
  },
]

export function getTrackById(id: number): Track | undefined {
  return tracks.find((t) => t.id === id)
}

export function getTracksByArtist(artistId: number): Track[] {
  return tracks.filter((t) => t.artistId === artistId)
}

export function getPlaylistById(id: number): Playlist | undefined {
  return playlists.find((p) => p.id === id)
}

export function getAlbumById(id: number): Album | undefined {
  return albums.find((a) => a.id === id)
}

export function getAlbumsByArtist(artistId: number): Album[] {
  return albums.filter((a) => a.artistId === artistId)
}

export function getPlaylistTracks(playlist: Playlist): (Track & { artistName: string })[] {
  return playlist.trackIds
    .map((id) => {
      const track = getTrackById(id)
      if (!track) return null
      const artist = getArtistById(track.artistId)
      return { ...track, artistName: artist?.name ?? 'Unknown' }
    })
    .filter((t): t is Track & { artistName: string } => t !== null)
}

export function getAlbumTracks(album: Album): (Track & { artistName: string })[] {
  return album.trackIds
    .map((id) => {
      const track = getTrackById(id)
      if (!track) return null
      const artist = getArtistById(track.artistId)
      return { ...track, artistName: artist?.name ?? 'Unknown' }
    })
    .filter((t): t is Track & { artistName: string } => t !== null)
}