import './App.css';
import Login from './views/Login';
import InitialPage from './views/Home';
import Ajuda from './views/Ajuda';
import { Route } from 'react-router';
import Provider from './provider/Provider'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Route exact path="/" component={ InitialPage } />
      </Provider>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/ajuda" component={ Ajuda } />
    </BrowserRouter>
  );
}

export default App;
