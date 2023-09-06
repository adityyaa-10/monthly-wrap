import Cookies from 'js-cookie';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [submissionError, setSubmissionError] = useState('');

    const refreshAccessToken = async () => {
        try {
            const refreshToken = Cookies.get('new_refresh_token');

            const response = await fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const data = await response.json();

            Cookies.set('new_access_token', data.access_token);
        } catch (error) {
            console.error('Error refreshing access token:', error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;

        try {
            const accessToken = Cookies.get('new_access_token');
            const response = await fetch('http://127.0.0.1:8000/query/contactus/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ subject, message }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    await refreshAccessToken();
                    const newAccessToken = Cookies.get('new_access_token');
                    const retryResponse = await fetch('http://127.0.0.1:8000/query/contactus/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${newAccessToken}`,
                        },
                        body: JSON.stringify({ subject, message }),
                    });

                    if (!retryResponse.ok) {
                        toast.error('Server did not respond', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                } else {
                    throw new Error('Failed to submit form');
                }
            }
            else {
                toast.success('Message sent!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                console.log('Form submitted successfully!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionError('Failed to submit form. Please try again later.');
        }
    };
    return (
        <>
            <ToastContainer />
            <section className="w-full">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl font-bold text-center dark:text-white"><span className='text-blue'>Contact</span> Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send a feedback? Kindly get in touch and our team will get back to you at the earliest. </p>


                    <form onSubmit={handleSubmit} >
                        <div className="relative mb-4">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                placeholder="Let us know how we can help you"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">Your message</label>
                            <textarea
                                id="message"
                                rows="6"
                                className=" text-primary block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <div className="text-red-600 text-md font-semibold">{submissionError}</div>
                        <button type="submit" className="bg-blue px-3 mr-2 rounded-md py-2 text-base text-white border border-blue mt-2" >
                            Get in Touch
                        </button>
                    </form>
                </div >
            </section >
        </>
    )
}

export default ContactForm
