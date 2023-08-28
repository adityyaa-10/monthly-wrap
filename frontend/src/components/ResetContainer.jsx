import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('This field can not be empty'),
});

const ResetContainer = () => {
    const [apiResponse, setApiResponse] = useState(null);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/send-reset-password-email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const responseData = await response.json();
                setApiResponse(responseData.message);
            } else {
                const errorData = await response.json();
                setApiResponse(errorData.error);
            }
        } catch (error) {
            setApiResponse('An error occurred while connecting to the server.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            {apiResponse && (
                <div
                    className={`mb-4 p-3 ${apiResponse.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                >
                    {apiResponse.message}
                </div>
            )}
            <h2 className="text-gray-900 text-lg font-medium mb-5">
                Enter your email
            </h2>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="relative mb-4">
                            <Field
                                placeholder="Userame"
                                name="email"
                                className="w-full bg-white rounded-md border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {touched.email && errors.email && (
                                <div className="text-sm font-normal text-red-600">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="hover:bg-blue w-full rounded-md py-2 text-base hover:text-white border border-blue mt-2"
                        >
                            Log In
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetContainer;
