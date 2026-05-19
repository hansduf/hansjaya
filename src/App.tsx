import { useState, useEffect, lazy, Suspense } from 'react';
import BerandaV2 from './pages/BerandaV2';

const AdminWhatsApp = lazy(() => import('./pages/AdminWhatsApp'));

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (path === '/admin-wa-secret') {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-[#FDFAF3] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#E8A020] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <AdminWhatsApp />
      </Suspense>
    );
  }

  return <BerandaV2 />;
}

export default App;