import './App.css';
import Login from './views/Login';
import InitialPage from './views/Home';
import Ajuda from './views/Ajuda';
import { Route } from 'react-router';
import Context, { data } from './provider/Context.js'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Context.Provider value={ data }>
        <Route exact path="/" component={ InitialPage } />
      </Context.Provider>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/ajuda" component={ Ajuda } />
    </BrowserRouter>
  );
}

export default App;
