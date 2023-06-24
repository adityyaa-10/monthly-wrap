import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('This field cannot be empty'),
    password: Yup.string().required('Enter your password'),
});

const LoginContainer = () => {
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate();

    const handleTokenRefresh = async (refreshToken) => {
        try {
            const refreshResponse = await fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh: refreshToken }),
                credentials: 'include', // Include cookies in the request
            });

            if (refreshResponse.ok) {
                const data = await refreshResponse.json();
                const newAccessToken = data.access;

                return newAccessToken;
            } else {
                throw new Error('Token refresh failed');
            }
        } catch (error) {
            throw new Error('Token refresh failed');
        }
    };

    const handleLogin = async (values, { setSubmitting }) => {
        setSubmitting(true);

        const payload = {
            username: values.username,
            password: values.password,
        };

        try {
            const loginResponse = await fetch('http://127.0.0.1:8000/api/users/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                credentials: 'include', // Include cookies in the request
            });

            if (loginResponse.ok) {
                const data = await loginResponse.json();

                if (data.access_token && data.refresh_token && data.message) {
                    setResponseMessage(data.message);
                    navigate('/home');
                    console.log(data.access_token)
                    console.log(data.refresh_token)
                    const new_access_token = data.access_token;
                    const new_refresh_token = data.refresh_token;
                    const userid = data.username
                    localStorage.setItem('user', userid)
                    Cookies.set('new_access_token', new_access_token, { secure: true, sameSite: 'strict' });
                    Cookies.set('new_refresh_token', new_refresh_token, { secure: true, sameSite: 'strict' });

                } else {
                    setResponseMessage('Please enter a valid username and password');
                }
            } else if (loginResponse.status === 401) {
                // Access token expired, attempt token refreshing
                const refreshToken = Cookies.get('new_refresh_token');

                if (refreshToken) {
                    const newAccessToken = await handleTokenRefresh(refreshToken);

                    // Retry the login request with the new access token
                    const retryResponse = await fetch('http://127.0.0.1:8000/api/users/login/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${newAccessToken}`,
                        },
                        body: JSON.stringify(payload),
                        credentials: 'include', // Include cookies in the request
                    });

                    if (retryResponse.ok) {
                        const data = await retryResponse.json();

                        if (data.token) {
                            setResponseMessage(data.message);
                            navigate('/home');
                        } else {
                            setResponseMessage('Please enter a valid username and password');
                        }
                    } else {
                        setResponseMessage('An error occurred. Please try again later.');
                    }
                } else {
                    setResponseMessage('Please enter a valid username and password');
                }
            } else {
                setResponseMessage('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <h2 className="text-gray-900 text-lg font-medium  mb-5">
                Log In to your account
            </h2>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className={`${responseMessage ? 'mb-4' : 'hidden'}`}>
                            <span
                                className={`text-sm font-semibold ${responseMessage.includes('successful') ? 'text-green-600' : 'text-red-600'
                                    }`}
                            >
                                {responseMessage}
                            </span>
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="username"
                                className="leading-7 text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <Field
                                placeholder="Userame"
                                name="username"
                                className="w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {touched.username && errors.username && (
                                <div className="text-sm font-normal text-red-600">
                                    {errors.username}
                                </div>
                            )}
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="password"
                                className="leading-7 text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <Field
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {touched.password && errors.password && (
                                <div className="text-sm font-normal text-red-600">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className="relative mb-4">
                            <Link
                                to={`/resetpassword`}
                                className="leading-7 text-sm font-semibold text-blue"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="hover:bg-blue w-full rounded-md py-2 text-base hover:text-white border border-blue mt-2"
                        >
                            Log In
                        </button>
                        <div className="color-light pt-4 text-center text-sm">
                            Don&apos;t have an account?
                            <Link to={`/signup`}>
                                <span className="text-blue cursor-pointer pl-1 text-sm font-bold">
                                    Sign Up
                                </span>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginContainer;
