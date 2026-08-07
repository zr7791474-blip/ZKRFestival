export interface EventHighlight {
  label: string
  value: string
}

export interface EventInfo {
  name: string
  subtitle: string
  description: string
  date: string
  location: string
  duration: string
  artistCount: string
  format: string
  startDate: string
  highlights: EventHighlight[]
  seo: {
    title: string
    description: string
  }
}

export const eventInfo: EventInfo = {
  name: 'ZKRFestival',
  subtitle: 'Experience the Future of Music',
  description:
    'Three unforgettable nights. World-class artists. Immersive visuals. The next generation music festival.',
  date: 'August 2027',
  location: 'Casablanca',
  duration: '3 Days',
  artistCount: '40+ Artists',
  format: 'Live Experience',
  startDate: '2027-08-14T18:00:00+01:00',
  highlights: [
    { label: 'Date', value: 'August 2027' },
    { label: 'Location', value: 'Casablanca' },
    { label: 'Duration', value: '3 Days' },
    { label: 'Lineup', value: '40+ Artists' },
    { label: 'Format', value: 'Live Experience' },
  ],
  seo: {
    title: 'ZKR Festival — Experience the Future of Music',
    description:
      'Three unforgettable nights. World-class artists. Immersive visuals. The next generation music festival. Casablanca, August 2027.',
  },
}