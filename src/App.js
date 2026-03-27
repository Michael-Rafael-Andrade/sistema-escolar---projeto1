import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import Alunos from './pages/Alunos';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/Dashboard';
import CadastrarLivros from './pages/CadastrarLivros.js';
import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>

        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastarAlunos' element={<CadastrarAlunos />} />
            <Route path='/Alunos' element={<Alunos />} />
            <Route path='/Biblioteca' element={<Biblioteca />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/CadastrarLivros' element={<CadastrarLivros />} />
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
