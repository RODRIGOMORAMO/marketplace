import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context/UserContext'; // ✅ CORREGIDO
import PublicacionesProvider from './context/PublicacionesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PublicacionesProvider>
        <App />
      </PublicacionesProvider>
    </UserProvider>
  </React.StrictMode>
);
