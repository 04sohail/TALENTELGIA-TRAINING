
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="wrapper signUp">
            <div className="illustration sign-up-illustration">
                <img src="/sign_up_Illustration.webp" alt="illustration" />
            </div>
            <div className="form ">
                <div className="heading">CREATE AN ACCOUNT</div>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="name">E-Mail</label>
                        <input type="text" id="name" placeholder="Enter your mail" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter you password"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <p>
                    Have an account ? <Link to="/"> Login </Link>
                </p>
            </div>
        </div>
    );
}
