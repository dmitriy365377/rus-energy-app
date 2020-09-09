import React from 'react';
import { Tutorial } from './pages/tutorial/tutorial'
import { BrowserRouter, Route } from 'react-router-dom';

// components
import { indexPage } from './pages/indesPage'

function App() {
  return (
    <BrowserRouter>
      <Tutorial />
      <Route path="/sign-in" component={indexPage} />
    </BrowserRouter>
  );
}

export default App;
