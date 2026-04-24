import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;