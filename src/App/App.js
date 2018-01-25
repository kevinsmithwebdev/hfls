import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Components/Home'
const App = () => (
  <div className={"body"}>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
)

export default App
