import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CacheBuster from './CacheBuster/CacheBuster';

import Home from './Home/Home';
import Store from './Store/Store';
import Lessons from './Lessons/Lessons';
import Blog from './Blog/Blog';
import ForTeachers from './ForTeachers/ForTeachers';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import ForStudents from './ForStudents/ForStudents';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { genesisSagaAC } from '../redux/sagas/actions';

import './App.css'

const mapDispatchToProps = ({
  dispatchGenesisSaga: genesisSagaAC,
});

class App extends React.Component {
  state = {
    login: {
      isLoggedIn: false,
      key: null,
    },
    storeData: null,
    stories: null,
  };

  setLogin = login => this.setState({ login });
  setStories = stories => this.setState({ stories });
  setStoreData = storeData => this.setState({ storeData });

  componentDidMount = () => {
    this.props.dispatchGenesisSaga();
  }

  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!isLatestVersion) {
            refreshCacheAndReload();
          }
          return (
            <div className="main-wrapper">
              <Header />

              <div className='page'>
                <Switch>
                  <Route exact path='/' component={ Home } />
                  <Route
                    exact
                    path='/store'
                    render={ props => <Store
                      {...props}
                      storeData={ this.state.storeData }
                      setStoreData={ this.setStoreData }
                    />}
                  />
                  <Route exact path='/lessons' component={ Lessons } />
                  <Route exact path='/blog' component={ Blog } />
                  {/* <Route
                    exact
                    path='/stories'
                    render={ props => <Stories
                      {...props}
                      login={ this.state.login }
                      setLogin={ this.setLogin }
                      stories={ this.state.stories }
                      setStories={ this.setStories }
                    />}
                  /> */}
                  <Route exact path='/for-students' component={ ForStudents } />
                  <Route exact path='/for-teachers' component={ ForTeachers } />
                  <Route exact path='/about-us' component={ AboutUs } />
                  <Route exact path='/contact' component={ Contact } />
                  <Route exact path='*' component={NotFound} />
                </Switch>
              </div>

              <Footer />
            </div>
          )
        }}
      </CacheBuster>
    );
  }
}

const withStore = connect(null, mapDispatchToProps);

export default withRouter(withStore(App));
