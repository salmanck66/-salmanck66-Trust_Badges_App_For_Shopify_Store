// app/db.server.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };
