
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login_schema } from '../utils/validations';
const initialValues = {
  email: "",
  password: ""
}

export default function Login() {
  const [hasInteracted, setHasInteracted] = useState({
    email: false,
    password: false
  });

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: login_schema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  console.log(values);


  const handleEmailChange = (e: React.FormEvent) => {
    handleChange(e);
    setHasInteracted(prev => ({ ...prev, email: true }));
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    handleChange(e);
    setHasInteracted(prev => ({ ...prev, password: true }));
  }

  return (
    <div className="wrapper signIn">
      <div className="illustration">
        <img src='/login_sample.webp' alt="illustration"
          height={100} />
      </div>
      <div className="form">
        <div className="heading">LOGIN</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" value={values.email} placeholder="Enter your mail" onChange={handleEmailChange} onBlur={handleBlur} />
            {errors.email && hasInteracted.email ?
              <p className="form-error text-xs mt-1">{errors.email}</p>
              : null
            }
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={values.password} placeholder="Enter your password" onChange={handlePasswordChange} onBlur={handleBlur} />
            {errors.password && hasInteracted.password ?
              <p className="form-error text-xs mt-1">{errors.password}</p>
              : null
            }
          </div>
          <button type="submit">Submit</button>
        </form>
        <p className="pt-2">
          Don't have an account ? <Link to="/sign_up" style={{ textDecoration: "none" }}> Sign Up </Link>
        </p>
      </div>
    </div>
  );
}
