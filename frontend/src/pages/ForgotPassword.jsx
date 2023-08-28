import ResetContainer from '../components/ResetContainer'
import { Player } from '@lottiefiles/react-lottie-player';
import Navbar from '../components/LandingComponents/Navbar';
import styles from '../style.js';
import Footer from '../components/LandingComponents/Footer';


const ForgotPassword = () => {
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <section className="text-gray-600 xl:max-w-[1300px] w-full container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
                <div className="text-center lg:mb-4 mb-1">
                    <h1 className="sm:text-3xl md:text-5xl text-2xl font-normal text-center text-white mb-11">Forgot Password ? Reset <span className='font-semibold text-blue'> it now !</span></h1>
                </div>
                <div className="container mx-auto flex flex-wrap items-center justify-center">
                    <div className="lg:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5 md:mt-0 ">
                        <ResetContainer />
                    </div>
                    <div className="lg:w-1/2 hidden lg:block md:pl-16 lg:pl-0 pl-0 ">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/53e4f91b-4a6a-4a53-a4b7-39a1280a028a/mtinW8fRA2.json"
                            style={{ height: '550px', width: '550px' }}
                        >
                        </Player>
                    </div>
                </div>

            </section>
            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
