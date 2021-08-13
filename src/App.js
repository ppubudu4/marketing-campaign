import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import store from './redux/store';
import PrivateRoute from './routing/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
