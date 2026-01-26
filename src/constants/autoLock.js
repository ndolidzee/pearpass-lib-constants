import { MS_PER_SECOND, MS_PER_MINUTE, MS_PER_HOUR } from './time.js'

export const AUTO_LOCK_TIMEOUT_OPTIONS = {
  SECONDS_30: { label: '30 seconds', value: 30 * MS_PER_SECOND },
  MINUTES_1: { label: '1 minute', value: MS_PER_MINUTE },
  MINUTES_5: { label: '5 minutes', value: 5 * MS_PER_MINUTE },
  MINUTES_15: { label: '15 minutes', value: 15 * MS_PER_MINUTE },
  MINUTES_30: { label: '30 minutes', value: 30 * MS_PER_MINUTE },
  HOURS_1: { label: '1 hour', value: MS_PER_HOUR },
  HOURS_4: { label: '4 hours', value: 4 * MS_PER_HOUR },
  NEVER: { label: 'Never', value: null }
}

export const DEFAULT_AUTO_LOCK_TIMEOUT =
  AUTO_LOCK_TIMEOUT_OPTIONS.SECONDS_30.value
