import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const roleData: Prisma.RoleCreateInput[] = [
  {
    name: "Importer",
    roleCode: "importer",
  },
  {
    name: "Exporter",
    roleCode: "exporter",
  },
    {
    name: "ImporterExporter",
    roleCode: "importer_exporter",
  },
  {
    name: "Admin",
    roleCode: "admin",
  },
  {
    name: "CustomerCare",
    roleCode: "customer_care",
  }
];

export async function main() {
  for (const r of roleData) {
    await prisma.role.upsert({ 
        where : { roleCode: r.roleCode },
        update : {},
        create : r, 
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
