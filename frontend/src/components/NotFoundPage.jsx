import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

function NotFoundPage() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <section className="max-w-[1300px] mx-auto">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-sm font-medium text-blue">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-400">Sorry, the page you are looking for does not exist.Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <button onClick={goBack} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-blue rounded-lg gap-x-2 sm:w-auto text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Go back</span>
                            </button>

                            <Link to={'/home'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue hover:text-white">
                                Take me home
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/371ede32-b576-423b-b5e1-785911337d8b/loGbMLNP5b.json"
                            style={{ height: '550px', width: '550px' }}
                        >
                        </Player>  </div>
                </div>
            </section>
        </>
    )
}

export default NotFoundPage
