
import * as Yup from 'yup';

export const sign_up_schema = Yup.object().shape({
    name: Yup.string().max(30, 'Name Should Be Of 30 Letters')
        .required('Name is required')
        .matches(/^[a-zA-Z ]+$/, 'Name can only contain letters and spaces')
        .test('space-count', 'Name can have at most 2 spaces', function (value) {
            return (value.match(/ /g) || []).length <= 2;
        }),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Must have one uppercase letter')
        .matches(/[a-z]/, 'Must have one lowercase letter')
        .matches(/[0-9]/, 'Must have one number')
        .matches(/[!@#$%^&*()\-_=+[\]{};:',.<>/?\\|]/, 'Must have one special character')
        .matches(/^[^\s]*$/, 'No spaces allowed')
});