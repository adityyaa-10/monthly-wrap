/* eslint-disable react/prop-types */
import styles from '../../style.js';
import layout from '../../layout.js';
import Button from './Button.jsx'
import { Player } from '@lottiefiles/react-lottie-player';

const Features = [
    {
        id: "feature-1",
        title: "Personal Account",
        content:
            "You can create your personal account and Read or Write Blogs in our Monthly Wrap Magazine.",
    },
    {
        id: "feature-2",
        title: "Monthly Theme",
        content:
            "Every month, there will be a different theme for blog writing and blog reading.",
    },
    {
        id: "feature-3",
        title: "Like and Comment",
        content:
            "You can like and comment on blogs and get rewarded for publishing best blog of the month.",
    },
];
const FeatureCard = (props) => {
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
                <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{props.title}</h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{props.content}</p>
            </div>
        </div>
    )
}

const Business = () => {
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Everything you need <br className='sm:block hidden' /> to start <span className='text-blue'> Blogging</span> </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Monthly Wrap is a creative platform where individuals or organizations can share their thoughts, experiences, and knowledge through written content, engaging with readers and building an online presence.</p>
                <Button styles="mt-10" />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {Features.map((feature, index) => (
                    <FeatureCard key={feature.id}{
                        ...feature} index={index} />
                ))}
            </div>

        </section>
    )
}

export default Business