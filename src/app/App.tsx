import React from 'react';
import AppRouter from 'src/router/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'src/components/Header';
import { MemoryRouter } from 'react-router-dom';


function App() {
  return (
    <MemoryRouter>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
      <ToastContainer position="bottom-right" />
    </MemoryRouter>
  );
}

export default App;
