import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" /><br /><br />
          <input type="password" placeholder="Password" /><br /><br />
          <button type="submit">Login</button><br /><br />
          Don't have an account? <Link to="/register">Register</Link>
        </form>
    </div>
  )
}

export default Login;