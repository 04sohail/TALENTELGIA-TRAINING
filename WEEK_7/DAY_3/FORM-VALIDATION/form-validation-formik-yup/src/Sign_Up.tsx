import { useFormik } from "formik";
import { sign_up_schema } from "./validation";


const initialValues = {
    name: "",
    email: "",
    password: ""
}

export default function Signup() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues: initialValues,
        validationSchema: sign_up_schema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className="wrapper signUp">
            <div className="illustration sign-up-illustration">
                <img src="/sign_up_Illustration.webp" alt="illustration" />
            </div>
            <div className="form">
                <div className="heading">CREATE AN ACCOUNT</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={values.name} placeholder="Enter your name" onChange={handleChange} onBlur={handleBlur} />
                        {errors.name && touched.name ?
                            <small className="form-error">{errors.name}</small>
                            : null
                        }
                    </div>
                    <div>
                        <label htmlFor="name">E-Mail</label>
                        <input type="text" id="name" name="email" value={values.email} placeholder="Enter your mail" onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ?
                            <small className="form-error">{errors.email}</small>
                            : null
                        }
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            placeholder="Enter you password"
                            onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.password && touched.password ?
                            <small className="form-error">{errors.password}</small>
                            : null
                        }
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
