import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom"

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('This field can not be empty'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('This field can not be empty'),
    password: Yup.string()
        .min(6, 'Password should contain atleast 6 characters')
        .required('This field can not be empty'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Passwords must match')
});

const SignupContainer = () => (
    <div>
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <Formik
            initialValues={{
                name: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm font-medium text-gray-700">Full Name</label>
                        <Field type="text" placeholder="Full Name" name="name" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        {touched.name && errors.name && <div className='text-sm font-normal text-red-600'>{errors.name}</div>}
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm font-medium text-gray-700">Username</label>
                        <Field type="text" placeholder="Username" name="username" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm font-medium text-gray-700">Email</label>
                        <Field type='email' placeholder="Email" name="email" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        {touched.email && errors.email && <div className='text-sm font-normal text-red-600'>{errors.email}</div>}
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm font-medium text-gray-700">Password</label>
                        <Field type="password" placeholder="Password" name="password" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        {touched.password && errors.password && <div className='text-sm font-normal text-red-600'>{errors.password}</div>}
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm font-medium text-gray-700">Confirm Password</label>
                        <Field type="password" placeholder="Confirm Password" name="confirmPassword" className='w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        {touched.confirmPassword && errors.confirmPassword && <div className='text-sm font-normal text-red-600'>{errors.confirmPassword}</div>}
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
);

export default SignupContainer