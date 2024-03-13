import { useNavigate } from 'react-router-dom';

const ComingSoonPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="max-w-md bg-gray-800 text-white p-8 rounded shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Coming Soon!</h1>
                    <p className="text-gray-300 mb-6">We are working hard to bring you something amazing. Stay tuned!</p>
                    <button onClick={goBack} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-blue rounded-lg gap-x-2 sm:w-auto text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span>Go back</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ComingSoonPage;
