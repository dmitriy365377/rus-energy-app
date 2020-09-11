import React from 'react';
import { Tutorial } from './pages/tutorial/tutorial'
import { BrowserRouter, Route } from 'react-router-dom';

// components
import { IndexPage } from './pages/indexPage'

function App() {
  return (
    <BrowserRouter>
      <Tutorial />
      <IndexPage />
    </BrowserRouter>
  );
}

export default App;
