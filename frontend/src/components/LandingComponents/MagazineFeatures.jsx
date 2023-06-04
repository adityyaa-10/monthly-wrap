import styles from '../../style.js';
import layout from '../../layout.js';
import Button from './Button.jsx'
import FeatureCard from './FeatureCard.jsx';

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
const MagazineFeatures = () => {
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

export default MagazineFeatures