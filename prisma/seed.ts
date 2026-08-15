import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  // Example seed data: create a default admin user if none exists
  const admin = await prisma.user.upsert({
    where: { email: 'admin@glyphatic.com' },
    update: {},
    create: {
      email: 'admin@glyphatic.com',
      name: 'System Admin',
    },
  })
  console.log({ admin })
  console.log('Database seeded successfully.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
