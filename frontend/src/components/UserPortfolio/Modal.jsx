import portfolios from './protfolioData'

import PropTypes from 'prop-types'
const Modal = ({ activeID, setShowModal }) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
    return (
        <div className='w-full h-full  fixed top-0 left-0 z-[250] bg-headingColor bg-opacity-40 text-gray-700'>
            <div className='w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px]
            transform -translate-x-1/2 -translate-y-1/2 p-5'>
                <div>
                    <figure>
                        <img src={portfolio.imgUrl} className='rounded-[8px] w-full' alt="" />
                    </figure>
                </div>
                <div>
                    <h2 className='text-xl text-headingColor font-[700] my-4'>
                        {portfolio.title}
                    </h2>
                    <p className='text-[15px] leading-7 text-smallTextColor'>{portfolio.description}</p>

                    <div className='mt-3 flex items-center gap-3 flex-wrap'>
                        <h4 className='text-headingColor text-[18px] text-[700]'>
                            Technologies :
                        </h4>
                        {portfolio.technologies.map((item, index) => (
                            <span
                                key={index}
                                className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <a href={portfolio.siteUrl}>
                        <button className='bg-blue text-white text py-2 px-4 my-4 mb-0 rounded-[8px]
                        font-[500] hover:bg-headingColor ease-in duration-300'>Refer Project</button>
                    </a>
                </div>
                <button onClick={() => setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] 
                text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>&times;</button>
            </div>
        </div>
    )
}

export default Modal

// Prop Validation

Modal.propTypes = {
    activeID: PropTypes.number.isRequired,
    setShowModal: PropTypes.func.isRequired
};