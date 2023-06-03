import SignupContainer from '../components/SignupContainer'
import { Player } from '@lottiefiles/react-lottie-player';
import Navbar from '../components/LandingComponents/Navbar';
import styles from '../style.js';
import Footer from '../components/LandingComponents/Footer';
const Signup = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <section className="text-gray-600 xl:max-w-[1300px] w-full container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <div className="text-center lg:mb-4 mb-1">
          <h1 className="sm:text-3xl md:text-5xl text-2xl font-normal text-center text-white mb-11">Welcome to the world of <span className='font-semibold text-blue'>Blog Writing</span></h1>
        </div>
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 md:pr-16 lg:pr-0 pr-0 hidden lg:block">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_sy6mqjxk.json"
              style={{ height: '100%', width: '100%' }}
            >
            </Player>
          </div>
          <div className="lg:w-[40%] bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5 md:mt-0">
            <SignupContainer />
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

export default Signup
