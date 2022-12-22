import { userRouter } from './routers/user';
import { authRouter } from './routers/auth';
import { router } from './trpc';

export const appRouter = router({
  user: userRouter,
  auth: authRouter,
});
export type AppRouter = typeof appRouter;
