
import { Link } from 'react-router-dom';
const preventRefresh = (e: React.FormEvent) => {
  e.preventDefault();
};

export default function Login() {
  return (
    <div className="wrapper signIn">
      <div className="illustration">
        <img src='/login_sample.webp' alt="illustration"
          height={100} />
      </div>
      <div className="form">
        <div className="heading">LOGIN</div>
        <form>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" placeholder="Enter Email" />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input type="Password" id="Password" placeholder="Enter Password" />
          </div>
          <button type="submit" onClick={preventRefresh}>
            Login
          </button>
        </form>
        <p>
          Don't have an account ? <Link to="/sign_up"> Sign Up </Link>
        </p>
      </div>
    </div>
  );
}
