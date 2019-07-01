import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"

// import EnterCityName from './components/EnterCityName'
import Weather from './components/Weather'

export default class App extends Component {
  render() {
    return(
        <div className="container">
          <Router>
            <Route path='/' exact component={Weather} />
          </Router>
        </div>
        )
  }
}