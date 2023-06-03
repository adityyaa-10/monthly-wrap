import ContactForm from '../components/Contact/ContactForm'
import Sidebar from '../components/Sidebar';
import ContactDetails from '../components/Contact/ContactDetails';
const ContactUs = () => {
    return (
        <div>
            <div className='float-left'>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ">
                <div className="p-4 border-2 border-dashed rounded-lg border-gray-700 mt-16 text-white">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
