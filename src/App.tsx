import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import BerandaV2 from './pages/BerandaV2';

const AdminWhatsApp = lazy(() => import('./pages/AdminWhatsApp'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="min-h-screen bg-[#FDFAF3] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#E8A020] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<BerandaV2 />} />
          <Route path="/v1" element={<Beranda />} />
          {/* Alamat rahasia untuk scan Barcode WhatsApp */}
          <Route path="/admin-wa-secret" element={<AdminWhatsApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;