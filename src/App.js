// ─── Librerías ───────────────────────────────────────────────────
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ─── Componentes ─────────────────────────────────────────────────
import Layout from './components/Layout';
import Home from './pages/Home';
import Institution from './pages/Institution';
import Plan from './pages/Plan';
import About from './pages/About';
import NotFound from './pages/NotFound';

// ─── Estilos ─────────────────────────────────────────────────────
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ins/:institution" element={<Institution />} />
            <Route path="plan" element={<Plan />} />
            <Route path="nosotros" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
