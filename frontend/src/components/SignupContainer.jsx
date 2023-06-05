import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom"
import axios from 'axios';
const SignupSchema = Yup.object().shape({
    first_name: Yup.string().required('This field can not be empty'),
    last_name: Yup.string().required('This field can not be empty'),
    username: Yup.string().required('This field can not be empty'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('This field can not be empty'),
    password: Yup.string()
        .min(6, 'Password should contain atleast 6 characters')
        .required('This field can not be empty'),
    password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Passwords must match')
});

const SignupContainer = () => {
    const handleFormSubmit = (values) => {

        axios.post('http://127.0.0.1:8000/api/users/register/', values)
            .then(response => {
                // Handle successful response
                console.log(response.data);
            })
            .catch(error => {
                // Handle error response
                console.error(error);
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
                onSubmit={handleFormSubmit}
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