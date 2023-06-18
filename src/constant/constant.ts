import { env } from '@/constant/env'
import { match } from 'ts-pattern'

export const FRONTEND_URL = match(env.NODE_ENV)
  .with('development', () => `http://localhost:3000` as const)
  .with('production', () => `https://${env.VERCEL_URL}` as const)
  .exhaustive()
