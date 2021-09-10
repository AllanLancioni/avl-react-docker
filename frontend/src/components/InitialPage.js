import { Link } from 'react-router-dom';

function InitialPage() {
  return(
    <div>
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