import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import { IndexPage } from './pages/indexPage'

function App() {
  return (
    <BrowserRouter>
      <IndexPage />
    </BrowserRouter>
  );
}

export default App;
