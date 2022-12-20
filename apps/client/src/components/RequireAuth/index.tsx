import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { trpc } from '../../utils/trpc';

const RequireAuth = () => {
  const { data: user } = trpc.user.getUser.useQuery();
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to="login" state={{ from: location }} replace />;
};

export default RequireAuth;
