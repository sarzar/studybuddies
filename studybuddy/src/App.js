import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from "./Components/Pages/home";
import Connect from "./Components/Pages/connect";
import Faq from "./Components/Pages/faq";
import Contact from "./Components/Pages/contact"

function App() {
  return (
    <div className="App">
      <div className = "navbar">
      <Router>
          <Navbar/>
          <main>
            <Switch>
            <Route path ="/connect" exact>
              <Connect/>
            </Route>
            <Route path ="/faq" exact>
              <Faq/>
            </Route>
            <Route path ="/Contact" exact>
              <Contact/>
            </Route>
            <Route exact path ="/" exact>
              <Home/>
            </Route>
            <Redirect to = "/" />
            </Switch>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
