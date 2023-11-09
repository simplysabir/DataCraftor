import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

// SELECT * FROM posts OFFSET 0 LIMIT 10
// SELECT * FROM posts OFFSET 10 LIMIT 10
// SELECT * FROM posts OFFSET 20 LIMIT 10



// LIMIT -> take
// OFFSET -> skip
async function main() {
  let res = await prisma.post.findMany({
    take: 1,
    skip: 1,
  })
    console.log(res);
    
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })