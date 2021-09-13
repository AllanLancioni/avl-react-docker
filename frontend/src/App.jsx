import './App.css';
import Login from './views/Login';
import InitialPage from './views/Home';
import Help from './views/Help';
import { Route } from 'react-router';
import { Store } from './store'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Route exact path="/" component={ InitialPage } />
      </Store>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/help" component={ Help } />
    </BrowserRouter>
  );
}

export default App;
