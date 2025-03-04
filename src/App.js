import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './pages/Home';
import Institution from './pages/Intitution'
import About from './pages/About';
import Plan from './pages/Plan';
import NotFound from './pages/NotFound';
import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='int/:name' element={<Institution />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;