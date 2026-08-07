export interface Video {
  id: number
  title: string
  thumbnail: string
  src: string
  artistId?: number
  duration: string
  featured: boolean
  tags: string[]
}

export const videos: Video[] = [
  {
    id: 1,
    title: 'ZKR Festival 2027 — Official Trailer',
    thumbnail: '/images/gallery/main-stage-lighting.jpg',
    src: '/video/zkr-2027-trailer.mp4',
    duration: '2:34',
    featured: true,
    tags: ['trailer', 'official', '2027'],
  },
  {
    id: 2,
    title: 'ZKR 2026 — After Movie',
    thumbnail: '/images/gallery/night-panorama.jpg',
    src: '/video/zkr-2026-aftermovie.mp4',
    duration: '12:45',
    featured: true,
    tags: ['aftermovie', '2026', 'recap'],
  },
  {
    id: 3,
    title: 'Aurora Waves — Artist Teaser',
    thumbnail: '/images/artists/cover-aurora-waves.jpg',
    src: '/video/artist-teasers/aurora-waves-teaser.mp4',
    artistId: 1,
    duration: '0:45',
    featured: false,
    tags: ['teaser', 'artist', 'aurora-waves'],
  },
  {
    id: 4,
    title: 'Neon Collective — Artist Teaser',
    thumbnail: '/images/artists/cover-neon-collective.jpg',
    src: '/video/artist-teasers/neon-collective-teaser.mp4',
    artistId: 2,
    duration: '0:38',
    featured: false,
    tags: ['teaser', 'artist', 'neon-collective'],
  },
  {
    id: 5,
    title: 'Binary Sunset — Artist Teaser',
    thumbnail: '/images/artists/cover-binary-sunset.jpg',
    src: '/video/artist-teasers/binary-sunset-teaser.mp4',
    artistId: 7,
    duration: '0:52',
    featured: false,
    tags: ['teaser', 'artist', 'binary-sunset'],
  },
  {
    id: 6,
    title: 'Behind the Stage — ZKR 2026 Documentary',
    thumbnail: '/images/gallery/stage-design-detail.jpg',
    src: '/video/zkr-2026-documentary.mp4',
    duration: '24:10',
    featured: false,
    tags: ['documentary', 'behind-the-scenes', '2026'],
  },
]

export function getVideoById(id: number): Video | undefined {
  return videos.find((v) => v.id === id)
}

export function getFeaturedVideos(): Video[] {
  return videos.filter((v) => v.featured)
}

export function getVideosByArtist(artistId: number): Video[] {
  return videos.filter((v) => v.artistId === artistId)
}

export function getVideosByTag(tag: string): Video[] {
  return videos.filter((v) => v.tags.includes(tag))
}