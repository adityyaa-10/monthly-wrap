import { Player } from '@lottiefiles/react-lottie-player';
const ContactDetails = () => {
    return (
        <section className="text-gray-600 body-font max-w-screen-xl mx-auto">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-2 sm:mb-10 px-4">
                        <section className="text-gray-200 body-font">
                            <div className="mx-auto flex flex-wrap">
                                <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center sm:mx-auto">
                                            <Player
                                                autoplay
                                                loop
                                                src="https://assets5.lottiefiles.com/packages/lf20_kdx6cani.json"
                                                style={{ height: '80px' }}
                                            >
                                            </Player>
                                        </div>
                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                            <h2 className="font-medium  text-indigo-500 mb-1 text-xl">monthlywrap.cse@kiet.edu</h2>
                                            <p className="leading-relaxed">Email us and someone from our team will get back to you ASAP!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex relative pb-2 sm:items-center md:w-2/3 mx-auto">
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                            <Player
                                                autoplay
                                                loop
                                                src="https://assets5.lottiefiles.com/packages/lf20_kdx6cani.json"
                                                style={{ height: '80px' }}
                                            >
                                            </Player>
                                        </div>
                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                            <h2 className="font-medium  text-indigo-500 mb-1 text-xl">gaurav.parashar@kiet.edu</h2>
                                            <p className="leading-relaxed">Get in touch with faculty coordinator of The Monthly Wrap and get your queries resolved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="sm:w-1/2 px-4">
                        <Player
                            autoplay
                            loop
                            src="https://assets5.lottiefiles.com/packages/lf20_ncztkceu.json"

                        >
                        </Player>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails
