import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Styles:
import '../styles/App.scss'

// Components:
import Home from '../pages/Home'
import Characters from '../pages/Characters'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Characters} />
      </Switch>
    </Router>
  )
}

export default App
