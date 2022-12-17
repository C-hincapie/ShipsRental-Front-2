// Rutas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Estilos
import './styles/styles.css'

// Páginas
import Login from './pages/auth/Login';
import Registro from './pages/auth/Registro';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import IndexAdmin from './pages/admin/Index';
import Barcos from 'pages/admin/Barcos';
import Clientes from 'pages/admin/Clientes';
import { DarkModeContext } from 'context/darkMode';
import { useState, useEffect } from 'react';
import Usuarios from 'pages/admin/Usuarios';
import Reservaciones from 'pages/admin/Reservaciones';
import Categorias from 'pages/admin/Categorias';
import Mensajes from 'pages/admin/Mensajes';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log('Modo dark: ', darkMode);
  }, [darkMode])

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Routes>
            <Route path='/auth' element={<AuthLayout />}>
              <Route path='registro' element={<Registro />} />
              <Route index element={<Login />} />
            </Route>
            <Route path='/admin' element={<PrivateLayout />}>
              <Route path='barcos' element={<Barcos />} />
              <Route path='usuarios' element={<Usuarios />} />
              <Route path='clientes' element={<Clientes />} />
              <Route path='reservaciones' element={<Reservaciones />} />
              <Route path='categorias' element={<Categorias />} />
              <Route path='mensajes' element={<Mensajes />} />
              <Route index element={<IndexAdmin />} />
            </Route>
            <Route path='/' element={<PublicLayout />}>
              <Route index element={<Index />} />
            </Route>
            {/* <Route path='*' element={<Navigate replace to='/' />} /> */}
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
