import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Routing from './components/router';


function App() {



  return (
    <div>
      <Routing />

    </div>);
}
export default App;
