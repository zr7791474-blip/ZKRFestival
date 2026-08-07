export interface ScheduleItem {
  time: string
  artistId?: number
  label?: string
  stage: string
}

export interface DaySchedule {
  day: string
  date: string
  items: ScheduleItem[]
}

export const schedule: DaySchedule[] = [
  {
    day: 'Day One',
    date: 'August 14, 2027',
    items: [
      { time: '18:00', label: 'Gates Open', stage: 'All Stages' },
      { time: '19:00', artistId: 12, stage: 'Main Stage' },
      { time: '20:00', artistId: 3, stage: 'Neon Arena' },
      { time: '21:00', artistId: 10, stage: 'Neon Arena' },
      { time: '22:00', artistId: 2, stage: 'Main Stage' },
      { time: '23:30', artistId: 1, stage: 'Main Stage' },
    ],
  },
  {
    day: 'Day Two',
    date: 'August 15, 2027',
    items: [
      { time: '17:30', label: 'Gates Open', stage: 'All Stages' },
      { time: '18:30', artistId: 6, stage: 'Main Stage' },
      { time: '19:30', artistId: 11, stage: 'Neon Arena' },
      { time: '20:30', artistId: 5, stage: 'Neon Arena' },
      { time: '21:30', artistId: 4, stage: 'Main Stage' },
      { time: '23:00', artistId: 7, stage: 'Main Stage' },
    ],
  },
  {
    day: 'Day Three',
    date: 'August 16, 2027',
    items: [
      { time: '17:00', label: 'Gates Open', stage: 'All Stages' },
      { time: '18:00', artistId: 9, stage: 'Main Stage' },
      { time: '19:00', artistId: 8, stage: 'Neon Arena' },
      { time: '20:00', label: 'Special Guest TBA', stage: 'Neon Arena' },
      { time: '21:30', label: 'Aurora Waves x Neon Collective', stage: 'Main Stage' },
      { time: '23:00', artistId: 7, stage: 'Main Stage' },
    ],
  },
]

export function getScheduleByDay(dayIndex: number): DaySchedule | undefined {
  return schedule[dayIndex]
}