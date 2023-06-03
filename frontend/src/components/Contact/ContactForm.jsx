import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('This field can not be empty'),
    subject: Yup.string()
        .required('Please specify the subject for your message!'),
    message: Yup.string()
        .required('Write a message or ask your query!'),
});
const ContactForm = () => {
    return (
        <section className="w-full">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl font-bold text-center dark:text-white"><span className='text-blue'>Contact</span> Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send a feedback? Kindly get in touch and our team will get back to you at the earliest. </p>
                <Formik
                    initialValues={{
                        email: '',
                        subject: '',
                        message: ''
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">Your email</label>
                                <input id="email" className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@example.com" />
                                {touched.email && errors.email && <div className='text-sm font-normal text-red-600'>{errors.email}</div>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" />
                                {touched.subject && errors.subject && <div className='text-sm font-normal text-red-600'>{errors.subject}</div>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                                {touched.message && errors.message && <div className='text-sm font-normal text-red-600'>{errors.message}</div>}
                            </div>
                            <button type="submit" className='bg-blue px-3 mr-2 rounded-md py-2 text-base text-white border border-blue mt-2'>Get in Touch</button>

                        </Form>
                    )}
                </Formik>
            </div >
        </section >

    )
}

export default ContactForm
