import { useFormik } from "formik";
import { sign_up_schema } from "../utils/validations";
import { useState } from 'react';
import { Link } from "react-router-dom";

const initialValues = {
    name: "",
    email: "",
    password: ""
}

export default function Signup() {
    const [hasInteracted, setHasInteracted] = useState({
        name: false,
        email: false,
        password: false
    });

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: sign_up_schema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    console.log(values);

    const handleNameChange = (e: React.FormEvent) => {
        handleChange(e);
        setHasInteracted(prev => ({ ...prev, name: true }));
    }

    const handleEmailChange = (e: React.FormEvent) => {
        handleChange(e);
        setHasInteracted(prev => ({ ...prev, email: true }));
    }

    const handlePasswordChange = (e: React.FormEvent) => {
        handleChange(e);
        setHasInteracted(prev => ({ ...prev, password: true }));
    }

    return (
        <div className="wrapper signUp">
            <div className="illustration sign-up-illustration">
                <img src="/sign_up_Illustration.webp" alt="illustration" />
            </div>
            <div className="form">
                <div className="heading">CREATE AN ACCOUNT</div>
                <form onSubmit={handleSubmit}>
                    <div className="flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={values.name} placeholder="Enter your name" onChange={handleNameChange} onBlur={handleBlur} />
                        {errors.name && hasInteracted.name ?
                            <p className="form-error text-xs mt-1">{errors.name}</p>
                            : null
                        }
                    </div>
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
                    Have an account ? <Link to="/" style={{ textDecoration: "none" }}> Log In </Link>
                </p>
            </div>
        </div>
    );
}

