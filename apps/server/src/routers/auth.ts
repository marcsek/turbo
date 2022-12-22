import { Router } from 'express';
import passport from 'passport';
import { createAccessToken } from '../jwt';
import { publicProcedure, router } from '../trpc';
import { passPortMiddleware } from '../middleware/passportAuthenticate.middleware';
import { z } from 'zod';

const expressRouter = Router();
export const googleRoute = expressRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
export const succesRoute = expressRouter.get('/sucess', (req, res) => {
  res.send('Success hihi');
});
export const callback = expressRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false, successRedirect: 'http://localhost:5173/login/sucess' }),
  (req, res) => {
    const user = req.user;

    if (user) {
      console.log(user);
      const accessToken = createAccessToken({ userId: user }, { expiresIn: '1h' });

      res.cookie('jit', accessToken, {
        maxAge: 3_600_000,
        httpOnly: true,
        secure: false,
      });

      res.send('parada');
    }
  }
);

export default expressRouter;

export const authRouter = router({
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
