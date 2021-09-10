import { Link } from 'react-router-dom';
import Header from '../components/Header';

function InitialPage() {
  return(
    <div>
      <Header/>
      <h1>Bem vindo a nossa pagina</h1>
      <span>Projeto em React desenvolvido por Allan Lancioni</span>
      <hr />
      <Link to="/login">
        <span>Login</span>
      </Link>
      <Link to="/ajuda">
        <span>Ajuda</span>
      </Link>
    </div>
  );
}

export default InitialPage;