import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Store from './Store/Store';
import Blog from './Blog/Blog';
import Extra from './Extra/Extra';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import Stories from './Stories/Stories';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import './App.css'

class App extends React.Component {
  state = { login: { isLoggedIn: false, key: '' } };

  setLogin = login => this.setState({ login });

  render() {
    return (
      <div className="main-wrapper">
        <Header />

        <div className='page'>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/store' component={ Store } />
            <Route exact path='/blog' component={ Blog } />
            <Route exact path='/extra' component={ Extra } />
            <Route
              exact
              path='/stories'
              render={(props) => <Stories {...props} login={ this.state.login } setLogin={ this.setLogin } />}
            />
            <Route exact path='/aboutus' component={ AboutUs } />
            <Route exact path='/contact' component={ Contact } />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
