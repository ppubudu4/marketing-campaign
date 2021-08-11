import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route>
            <div className='App'>hi Test</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
