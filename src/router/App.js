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
import Character from '../pages/Character'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Rick-Morty-SPA' component={Home} />
        <Route exact path='/Rick-Morty-SPA/characters' component={Characters} />
        <Route exact path='/Rick-Morty-SPA/characters/:id' component={Character} />
      </Switch>
    </Router>
  )
}

export default App
