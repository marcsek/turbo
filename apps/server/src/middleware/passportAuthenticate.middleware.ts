import { TRPCError } from '@trpc/server';
import type { AuthenticateOptions, Strategy } from 'passport';
import passport from 'passport';
import { middleware } from '../trpc';

export const passPortMiddleware = (strategy: string | string[] | Strategy, options: AuthenticateOptions) => {
  return middleware(async ({ ctx, next }) => {
    ctx.req.body = ctx.req.body[0];
    const user = await new Promise((resolve, reject) => {
      passport.authenticate(strategy, options, (err, user) => {
        if (err) return reject(err);
        if (!user) return reject(new TRPCError({ message: 'Incorrect credentials format', code: 'BAD_REQUEST' }));
        resolve(user);
      })(ctx.req, ctx.res, next);
    }).catch((err: TRPCError) => {
      throw new TRPCError(err);
    });

    return next({ ctx: { user: user as string } });
  });
};
