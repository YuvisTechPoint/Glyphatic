// Export Prisma generated types
export type { User, Account, Session, VerificationToken } from '@prisma/client'

// Add any extended database types here
export interface CustomUser {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
}
