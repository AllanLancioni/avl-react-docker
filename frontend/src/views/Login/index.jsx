import { useContext, useEffect, useState } from "react";
import PageTitle from '../../components/PageTitle'
import './index.css';
import axios from 'axios';
import environment from "../../config/environment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastConfig } from "../../config/toast.config";
import { useHistory } from "react-router-dom";
import { Context } from "../../store";


const MIN_LENGTH_PASSWORD = 4;
const MAX_LENGTH_PASSWORD = 8;
const EMAIL_PATTERN = /^[-\w]+@trademaster.com.br$/i;

function Login() {
  const [password, setPassword] = useState('20210913');
  const [email, setEmail] = useState('teste@trademaster.com.br');
  const { login, logout } = useContext(Context);
  const history = useHistory();

  let emailValid = false, passwordValid = false;
  useEffect(() => logout(), [logout]);

  if (EMAIL_PATTERN.test(email))
    emailValid = true;


  if (password.length >= MIN_LENGTH_PASSWORD && password.length <= MAX_LENGTH_PASSWORD)
    passwordValid = true;

  function handleForm(event) {
    event.preventDefault();
    if (!emailValid || !passwordValid)
      return;
    const request = axios.get(`${environment.api}/login?user=${email}&password=${password}`)
      .then(res => login(res.data))
      .then(_ => history.push("/"))
      // .catch(err => console.error(err));
    toast.promise(
      request,
      {
        pending: 'Verificando usuário...',
        success: 'Autenticado!',
        error: 'Acesso Negado, Verifique se o usuário e senha condizem com credenciais válidas.'
      },
      toastConfig
    )
  }

  return (
    <div className="page">
      <form className="login-container card" onSubmit={e => handleForm(e)}>
        <PageTitle>Bem vindo ao TradeMaster</PageTitle>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value.trim())}
        >
        </input>
        <label htmlFor="password">Senha</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        >
        </input>
        <input type="submit"
          value="Login"
          disabled={!emailValid || !passwordValid}
        />
      </form>
      <ToastContainer />

    </div>
  )
}

export default Login;