import { protectedProcedure, publicProcedure, router } from '../trpc';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userRouter = router({
  greeting: publicProcedure.query((req) => {
    return { greeting: req.ctx };
  }),
  getUser: protectedProcedure.query(async (req) => {
    const user = await prisma.user.findUnique({ where: { id: req.ctx.user } });

    return user;
  }),
});
