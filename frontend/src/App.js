import './App.css';
import Login from './components/Login';
import InitialPage from './components/InitialPage';
import Ajuda from './components/Ajuda';
import Provider from './provider/Provider';
import { Route } from 'react-router';

function App() {
  return (
    <Provider>
      <Route exact path="/" component={ InitialPage } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/ajuda" component={ Ajuda } />
    </Provider>
  );
}

export default App;
