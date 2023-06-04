import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../../style.js';
import PropTypes from 'prop-types';
const FeatureCard = (props) => {
    const { title, content } = props;
    return (
        <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card hover:cursor-pointer`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_i3mq3e9v.json"
                    style={{ height: '100%', width: '100%' }}
                >
                </Player>
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
            </div>
        </div>
    )
}

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default FeatureCard