import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = () => {
  const isDemoMode = import.meta.env.VITE_DEMO_MODE !== 'false';
  const { user, loading } = useAuth();
  if (isDemoMode) return <Outlet />;
  if (loading) return null; // o un spinner
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
