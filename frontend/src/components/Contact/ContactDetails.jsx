import { Player } from '@lottiefiles/react-lottie-player';
const ContactDetails = () => {
    return (
        <section className="text-gray-600 body-font max-w-screen-xl mx-auto">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-2 sm:mb-10 px-4">
                        <section className="text-gray-600 body-font">
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
                                            <h2 className="font-medium title-font text-blue mb-1 text-xl">Shooting Stars</h2>
                                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                            <Player
                                                autoplay
                                                loop
                                                src="https://assets8.lottiefiles.com/packages/lf20_os8lwjfj.json"
                                                style={{ height: '200px' }}
                                            >
                                            </Player>
                                        </div>
                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                            <h2 className="font-medium title-font text-blue mb-1 text-xl">The Catalyzer</h2>
                                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
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
                                            <h2 className="font-medium title-font text-blue mb-1 text-xl">The 400 Blows</h2>
                                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
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
