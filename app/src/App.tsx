import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import { Impressum, Datenschutz } from './pages/Legal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
    </Routes>
  );
}
