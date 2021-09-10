import './App.css';
import Login from './views/Login';
import InitialPage from './views/Home';
import Ajuda from './views/Ajuda';
import { Route } from 'react-router';

function App() {
  return (
    <>
      <Route exact path="/" component={ InitialPage } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/ajuda" component={ Ajuda } />
    </>
  );
}

export default App;
