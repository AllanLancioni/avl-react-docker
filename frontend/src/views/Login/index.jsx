import { useState } from "react";
import Header from "../../components/Header";
import './index.css';

function Login() {

  const [passwordInvalid, setPasswordInvalid] = useState(true);
  const [emailInvalid, setEmailInvalid] = useState(true);

  const handleEmail = (event) => {
    const re = /\w+@trademaster.com.br/;
    if (re.test(event.target.value)) {
      setEmailInvalid(false);
    }
  };

  const handlePassword = (event) => {
    const password = event.target.value;
    const MIN_LENGTH_PASSWORD = 4;
    const MAX_LENGTH_PASSWORD = 8;
    if (password.length >= MIN_LENGTH_PASSWORD && password.length <= MAX_LENGTH_PASSWORD) {
      setPasswordInvalid(false);
    }
  };

  return (
    <div>
      <Header />
      <h1>Entrar</h1>
      <input
        name="email"
        type="text"
        onChange={ handleEmail }
      >
      </input>
      <input
        type="password"
        onChange={ handlePassword }
      >
      </input>
      <button
        disabled={ emailInvalid || passwordInvalid }
      >
        Login
      </button>
    </div>
  )
}

export default Login;