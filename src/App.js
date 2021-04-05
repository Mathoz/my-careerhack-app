import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import Home from './Views/Home';
import Temperature from './Views/Temperature';
import CustomizeImage from './Views/CustomizeImage';
import NavBar from './Components/NavBar';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/temperature" component={Temperature}/>
          <Route exact path="/customize-image" component={CustomizeImage}/>
        </Switch>
      </div>
    )
  }
}

export default App