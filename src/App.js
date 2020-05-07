import React, { Component } from 'react';
import WeatherAll from './Components/Weather/WeatherALl'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={WeatherAll} />
        </div>
        <Nav />
      </BrowserRouter>
    );
  }
}
export default App;

