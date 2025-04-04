import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login_schema } from "../utils/validations";
import { useUser } from "../contexts/useUser";
import { UserServices } from "../services/api"


const USER_SERVICES_INSTANCE = new UserServices();

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [hasInteracted, setHasInteracted] = useState({
    email: false,
    password: false,
  });

  const { loginUser } = useUser(); // Access context methods
  const navigate = useNavigate()
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: login_schema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const response = await USER_SERVICES_INSTANCE.loginUserCheck(values.email, values.password)
      console.log(response, typeof response);
      if (response.length > 0) {
        loginUser(values); // Set user in context on login
        console.log("User logged in:", values);
        navigate("/landing_page")
      }
    },
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setHasInteracted((prev) => ({ ...prev, email: true }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setHasInteracted((prev) => ({ ...prev, password: true }));
  };

  return (
    <div className="wrapper signIn">
      <div className="illustration">
        <img src="/login_sample.webp" alt="illustration" height={100} />
      </div>
      <div className="form">
        <div className="heading">LOGIN</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              placeholder="Enter your mail"
              onChange={handleEmailChange}
              onBlur={handleBlur}
            />
            {errors.email && hasInteracted.email ? (
              <p className="form-error text-xs mt-1">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              onBlur={handleBlur}
            />
            {errors.password && hasInteracted.password ? (
              <p className="form-error text-xs mt-1">{errors.password}</p>
            ) : null}
          </div>
          <button type="submit" className="cursor-pointer">
            Submit
          </button>
        </form>
        <p className="pt-2">
          Don't have an account?{" "}
          <Link to="/sign_up" style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
