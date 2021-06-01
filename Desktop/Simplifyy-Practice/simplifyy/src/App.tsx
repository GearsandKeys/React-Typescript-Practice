import React from 'react';
import './App.css';
import './components/Sidebar.css'
import Sidebar from "./components/Sidebar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Pages/Home';
import Products from './Pages/Products';
import Reports from './Pages/Reports';


function App() {
  return (
    <>
      <Router>
      <Sidebar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/reports" component={Reports}></Route>
          <Route path="/products" component={Products}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
