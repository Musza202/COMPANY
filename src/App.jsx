import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './comp/Menu';
import Home from './comp/Home';
import Rolunk from './comp/Rolunk';
import Termekek from './comp/Termekek';
import Akciok from './comp/Akciok';

function App() {
  return (
    <BrowserRouter>
      <Menu />
    <div className="Hargita">
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rolunk" element={<Rolunk />} />
          <Route path="/Termekek" element={<Termekek />} />
          <Route path="/Akciok" element={<Akciok />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
