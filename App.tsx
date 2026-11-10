import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Shell } from './components/Shell';
import { Home } from './pages/Home';
import { Estudiar } from './pages/Estudiar';
import { Leccion } from './pages/Leccion';
import { Senales } from './pages/Senales';
import { Examen } from './pages/Examen';
import { Prueba } from './pages/Prueba';
import { Avance } from './pages/Avance';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="estudiar" element={<Estudiar />} />
          <Route path="leccion/:slug" element={<Leccion />} />
          <Route path="senales" element={<Senales />} />
          <Route path="examen" element={<Examen />} />
          <Route path="prueba/:mode" element={<Prueba />} />
          <Route path="avance" element={<Avance />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
