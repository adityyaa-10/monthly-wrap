import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom"
import { useState } from 'react';
import Cookies from 'js-cookie';
const SignupSchema = Yup.object().shape({
    first_name: Yup.string().required('This field can not be empty'),
    last_name: Yup.string().required('This field can not be empty'),
    username: Yup.string().required('This field can not be empty')
        .min(10, 'Username is too small'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('This field can not be empty'),
    password: Yup.string()
        .min(10, 'Password should contain atleast 10 characters including a special character')
        .required('This field can not be empty'),
    password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Passwords must match')
});

const SignupContainer = () => {
    const [responseMessage, setResponseMessage] = useState('');

    const handleSignup = (values, { setSubmitting }) => {
        // Convert the form values to JSON
        const data = JSON.stringify(values);

        // Make a POST request to the backend
        fetch('http://127.0.0.1:8000/api/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                // Check if the response contains tokens and a message
                if (data.tokens && data.message) {
                    // Extract the access token from the response
                    const accessToken = data.tokens.access;
                    const refreshToken = data.tokens.refresh;

                    // Store the tokens securely on the client-side (e.g., in secure HTTP-only cookies or local storage)
                    // You can use a library like js-cookie or implement the storage mechanism yourself
                    // Example using js-cookie:
                    Cookies.set('accessToken', accessToken, { secure: true, sameSite: 'strict' });
                    Cookies.set('refreshToken', refreshToken, { secure: true, sameSite: 'strict' });

                    // Set the response message in the state
                    setResponseMessage(data.message);
                } else {
                    // Set an error message in the state if the response is not as expected
                    setResponseMessage('Invalid response from the server');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Set an error message in the state if something went wrong
                setResponseMessage('An error occurred. Please try again later.');
            })
            .finally(() => {
                setSubmitting(false);
            });
    };
    return (
        <div>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSignup}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="relative mb-4">
                            <label htmlFor="first_name" className="leading-7 text-sm font-medium text-gray-700">First Name</label>
                            <Field type="text" placeholder="First Name" name="first_name" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.first_name && errors.first_name && <div className='text-sm font-normal text-red-600'>{errors.first_name}</div>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="last_name" className="leading-7 text-sm font-medium text-gray-700">Last Name</label>
                            <Field type="text" placeholder="Last Name" name="last_name" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.last_name && errors.last_name && <div className='text-sm font-normal text-red-600'>{errors.last_name}</div>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="username" className="leading-7 text-sm font-medium text-gray-700">Username</label>
                            <Field type="text" placeholder="Username" name="username" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.username && errors.username && <div className='text-sm font-normal text-red-600'>{errors.username}</div>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm font-medium text-gray-700">Email</label>
                            <Field type='email' placeholder="Email" name="email" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.email && errors.email && <div className='text-sm font-normal text-red-600'>{errors.email}</div>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm font-medium text-gray-700">Password</label>
                            <Field type="password" placeholder="Password" name="password" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.password && errors.password && <div className='text-sm font-normal text-red-600'>{errors.password}</div>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password2" className="leading-7 text-sm font-medium text-gray-700">Confirm Password</label>
                            <Field type="password" placeholder="Confirm Password" name="password2" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.password2 && errors.password2 && <div className='text-sm font-normal text-red-600'>{errors.password2}</div>}
                        </div>
                        <button type="submit" className='hover:bg-blue w-full rounded-md py-2 text-base hover:text-white border border-blue mt-2'>Sign Up</button>
                        {responseMessage && <div className='text-sm font-normal'>{responseMessage}</div>}
                        <div className='color-light pt-4 text-center text-sm'>
                            Already have an Account?
                            <Link to={`/login`}>
                                <span className='text-blue cursor-pointer pl-1 text-sm font-bold'>
                                    Log in
                                </span>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
};

export default SignupContainer