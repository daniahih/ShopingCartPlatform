export default function Login() {
  return (
    <section className="page-card">
      <h2>Login</h2>
      <p>Welcome back! Please enter your details to continue.</p>

      <form className="form-grid">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
