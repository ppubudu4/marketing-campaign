import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />

          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
