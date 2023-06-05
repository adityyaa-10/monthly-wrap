import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom"


const LoginSchema = Yup.object().shape({
    username: Yup.string().required('This field cannot be empty'),
    password: Yup.string().required('Enter your password'),
});


const LoginContainer = () => {
    const handleFormSubmit = (values) => {
        axios
            .post('http://127.0.0.1:8000/api/users/login/', values)
            .then(response => {
                // Handle successful login
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };
    return (
        <div>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In to your account</h2>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={handleFormSubmit} //
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="relative mb-4">
                            <label htmlFor="username" className="leading-7 text-sm font-medium text-gray-700">Username</label>
                            <Field placeholder="Userame" name="username" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.username && errors.username && <div className='text-sm font-normal text-red-600'>{errors.username}</div>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm font-medium text-gray-700">Password</label>
                            <Field type="password" placeholder="Password" name="password" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                            {touched.password && errors.password && <div className='text-sm font-normal text-red-600'>{errors.password}</div>}
                        </div>
                        <div className='relative mb-4'>
                            <h1 className='leading-7 text-sm font-semibold text-blue'>Forgot Password?</h1>
                        </div>
                        <button type="submit" className='hover:bg-blue w-full rounded-md py-2 text-base hover:text-white border border-blue mt-2'>Log In</button>
                        <div className='color-light pt-4 text-center text-sm'>
                            Don&apos;t have an account?
                            <Link to={`/signup`}>
                                <span className='text-blue cursor-pointer pl-1 text-sm font-bold'>
                                    Sign Up
                                </span>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default LoginContainer