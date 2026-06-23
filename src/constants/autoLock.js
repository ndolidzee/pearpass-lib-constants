import { MS_PER_SECOND, MS_PER_MINUTE, MS_PER_HOUR } from './time.js'

export const AUTO_LOCK_TIMEOUT_OPTIONS = {
  SECONDS_30: {
    label: '30 seconds',
    value: 30 * MS_PER_SECOND,
    deprecated: true
  },
  MINUTES_1: { label: '1 Minute', value: MS_PER_MINUTE },
  MINUTES_3: { label: '3 Minutes', value: 3 * MS_PER_MINUTE },
  MINUTES_5: { label: '5 Minutes', value: 5 * MS_PER_MINUTE },
  MINUTES_10: { label: '10 Minutes', value: 10 * MS_PER_MINUTE },
  MINUTES_15: {
    label: '15 minutes',
    value: 15 * MS_PER_MINUTE,
    deprecated: true
  },
  MINUTES_30: { label: '30 Minutes', value: 30 * MS_PER_MINUTE },
  HOURS_1: { label: '1 Hour', value: MS_PER_HOUR },
  HOURS_3: { label: '3 Hours', value: 3 * MS_PER_HOUR },
  HOURS_4: { label: '4 hours', value: 4 * MS_PER_HOUR, deprecated: true },
  NEVER: { label: 'Never', value: null }
}

export const DEFAULT_AUTO_LOCK_TIMEOUT =
  AUTO_LOCK_TIMEOUT_OPTIONS.MINUTES_1.value
