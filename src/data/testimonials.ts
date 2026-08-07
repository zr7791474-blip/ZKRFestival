export interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Yasmine K.',
    role: 'Festival Attendee',
    text: 'Nothing comes close. The visuals, the sound, the energy — ZKR redefined what a festival can be. I\'ve been to over 40 festivals and this is the one I\'ll never forget.',
    avatar: '/images/avatars/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Marcus D.',
    role: 'Music Journalist',
    text: 'ZKR isn\'t just a festival — it\'s a sensory architecture experiment. The way they blend stage design with real-time generative visuals is unprecedented in the live events space.',
    avatar: '/images/avatars/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Léa F.',
    role: 'Photographer',
    text: 'Every corner is a photograph waiting to happen. The lighting design alone deserves its own award. I shot 4,000 frames and every single one tells a story.',
    avatar: '/images/avatars/testimonial-3.jpg',
  },
  {
    id: 4,
    name: 'Omar R.',
    role: 'VIP Guest',
    text: 'The VIP experience was flawless. Private lounge, incredible views, artist access. Worth every dirham. Already booked for 2027.',
    avatar: '/images/avatars/testimonial-4.jpg',
  },
]