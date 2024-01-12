import { useState } from 'react'
import Modal from './Modal'
import portfolios from './protfolioData'

const EachUserProjects = () => {

    const [nextItems, setNextItems] = useState(6)
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id)
    }


    return (
        <section id='portfolio'>
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h2 className="text-2xl md:text-4xl ml-5 py-5 font-semibold">
                            Check out <span className="text-blue">My Projects</span>
                        </h2>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {portfolios.slice(0, nextItems)?.map((portfolio, index) => (
                        <div
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
                            key={index}
                        >
                            <figure>
                                <img className='rounded-[8px] shadow-md' src={portfolio.imgUrl} alt="" />
                            </figure>

                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <button onClick={() => showModalHandler(portfolio.id)} className='text-white bg-dimBlue hover:bg-dimBlue py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-6'>

                    {
                        nextItems < portfolios.length && portfolios.length > 6 && (<button onClick={loadMoreHandler} className='text-white bg-blue
                         hover:bg-dimBlue py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                            Load More
                        </button>)

                    }
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
        </section>
    )
}

export default EachUserProjects