function Login() {
  return (
    <main>
      <img src="/wlcm.png" alt="" />
      <h1>Welcome back</h1>
      <section>
        <label htmlFor="email">
          <span>Email</span>
          <input id="email" type="text" />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input id="password" type="password" />
        </label>
      </section>
      <section>
        <button>Sign in</button>
        <button>Create new account</button>
      </section>
    </main>
  );
}

export default Login;
