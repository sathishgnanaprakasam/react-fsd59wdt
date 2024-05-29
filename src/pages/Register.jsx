import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Register</button><br /><br />
        Already have an account? <Link to="/login">Login</Link>
      </form>
    </div>
  )
}

export default Register;