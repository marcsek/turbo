import { Router } from 'express';
import passport from 'passport';
import { createAccessToken } from '../jwt';
import { publicProcedure, router } from '../trpc';
import { passPortMiddleware } from '../middleware/passportAuthenticate.middleware';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

const expressRouter = Router();
export const googleRoute = expressRouter.get('/google', passport.authenticate('google', { scope: ['profile'], session: false }));

export const authRouter = router({
  google: router({
    callback: publicProcedure.use(passPortMiddleware('google', { scope: ['profile'], session: false })).query((req) => {
      const user = req.ctx.user;

      if (user) {
        console.log('tutok', req.ctx.req.user);

        const accessToken = createAccessToken({ userId: user }, { expiresIn: '1h' });

        req.ctx.res.cookie('jit', accessToken, {
          maxAge: 3_600_000,
          httpOnly: true,
          secure: false,
        });

        return 'success';
      }
    }),
  }),

  login: publicProcedure
    .use(passPortMiddleware('local', { session: false }))
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation((req) => {
      const user = req.ctx.user;

      const accessToken = createAccessToken({ userId: user }, { expiresIn: '1h' });

      req.ctx.res.cookie('jit', accessToken, {
        maxAge: 3_600_000, // 1h
        httpOnly: true,
        // domain: "localhost",
        // path: "/",
        // sameSite: "strict",
        secure: false, // !!!
      });

      return `success ${accessToken}`;
    }),

  logout: publicProcedure.query((req) => {
    req.ctx.res.clearCookie('jit');

    return true;
  }),
});
