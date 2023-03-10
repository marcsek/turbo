import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'server/src/appRouter';

export const trpc = createTRPCReact<AppRouter>();
