import React from 'react';
import {
  BrowserRouter,
  Route 
} from 'react-router-dom';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Knowledges from './pages/knowledges.js';
import Portfolio from './pages/portfolio.js';

const App = () => {
  return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/competences" component={Knowledges}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </BrowserRouter>
  );
}

export default App;
