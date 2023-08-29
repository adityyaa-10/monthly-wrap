import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';

const ResetSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password should contain atleast 6 characters')
        .required('This field can not be empty'),
    password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Passwords must match')
});


const ResetPassword = () => {
    const { userId, token } = useParams();

    const handleFormSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch(`http://localhost:8000/api/users/reset-password/${userId}/${token}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newPassword: values.password })
            });

            if (response.ok) {
                console.log('Password reset successful');
            } else {
                console.error('Password reset failed');
            }
        } catch (error) {
            console.error('Error resetting password:', error);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div className='h-[100vh] w-[100vw] flex items-center'>
            <div className='max-w-[400px] bg-gray-100 rounded-lg p-8 flex flex-col mx-auto '>
                <h2 className="text-blue text-lg font-semibold mb-5">Reset Your Password</h2>
                <Formik
                    initialValues={{
                        password: '',
                        password2: '',
                    }}
                    validationSchema={ResetSchema}
                    onSubmit={handleFormSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
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
                            <button type="submit" className='hover:bg-blue w-full rounded-md py-2 text-base hover:text-white border border-blue mt-2'>Reset Password</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default ResetPassword