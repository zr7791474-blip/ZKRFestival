export interface ExperienceItem {
  id: number
  title: string
  description: string
  image: string
  icon: string
  gradient: string
  badge: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Live Stage',
    description: 'A 50-meter wide main stage with 360° LED screens, kinetic lighting rigs, and spatial audio that puts you inside the music.',
    image: '/images/experience/live-stage.jpg',
    icon: '🎤',
    gradient: 'from-violet-600/20',
    badge: 'Main Attraction',
  },
  {
    id: 2,
    title: 'Laser Show',
    description: 'Over 200 synchronized laser units creating immersive 3D structures of light that respond to the music in real-time.',
    image: '/images/experience/laser-show.jpg',
    icon: '✦',
    gradient: 'from-cyan-600/20',
    badge: 'Visual Spectacle',
  },
  {
    id: 3,
    title: 'Food Village',
    description: '30+ curated vendors blending Moroccan culinary heritage with international street food, craft cocktails, and late-night bites.',
    image: '/images/experience/food-village.jpg',
    icon: '🍽',
    gradient: 'from-fuchsia-600/20',
    badge: '30+ Vendors',
  },
  {
    id: 4,
    title: 'VIP Lounge',
    description: 'Elevated viewing decks, premium open bar, private restrooms, artist meet-and-greets, and dedicated concierge service.',
    image: '/images/experience/vip-lounge.jpg',
    icon: '✨',
    gradient: 'from-pink-600/20',
    badge: 'Premium Access',
  },
  {
    id: 5,
    title: 'Camping',
    description: 'Glamping and standard camping zones with 24/7 security, hot showers, charging stations, and morning yoga sessions.',
    image: '/images/experience/camping.jpg',
    icon: '⛺',
    gradient: 'from-blue-600/20',
    badge: 'Overnight Stay',
  },
  {
    id: 6,
    title: 'After Movie',
    description: 'Professional cinematography team capturing every moment. Your festival experience, distilled into a cinematic masterpiece.',
    image: '/images/experience/after-movie.jpg',
    icon: '🎬',
    gradient: 'from-violet-600/20',
    badge: 'Cinematic',
  },
]

export function getExperienceById(id: number): ExperienceItem | undefined {
  return experiences.find((exp) => exp.id === id)
}