import { TRPCError } from '@trpc/server';
import { verifyAccessToken } from '../jwt';
import { middleware } from '../trpc';

export const authMiddleware = middleware(async ({ ctx: { req }, next }) => {
  const token = req.cookies.jit;

  if (token) {
    const payload: { userId: string } | null = verifyAccessToken(token);
    return next({ ctx: { user: payload?.userId } });
  }

  throw new TRPCError({ message: 'Not authenticated', code: 'UNAUTHORIZED' });
});
