import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home/Home'
import Store from './Store/Store'
import Blog from './Blog/Blog'
import About from './About/About'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

import Header from './Header/Header'
const App = () => (
  <div className={"body"}>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/store' component={Store} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  </div>
)

export default App
