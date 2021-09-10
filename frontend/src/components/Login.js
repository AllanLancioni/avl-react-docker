function Login() {
  return (
    <div>
      <h1>LOGIN</h1>
      <input
        type="text"
        minlength="27"
        maxlength="35"
      >
      </input>
      <input
        type="password"
        minlength="4"
        maxlength="8"
      >
      </input>
      <button>LogIn</button>
    </div>
  )
}

export default Login;