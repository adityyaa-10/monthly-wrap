import styles from "../../style.js";
import Button from "./Button.jsx";

const KickStart = () => (
    <section id="join" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Kickstart your blog writing journey today. Explore your interests, share your thoughts, and engage with readers. Embrace creativity, be consistent, and enjoy the fulfilling experience of expressing yourself through written content.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
);

export default KickStart;