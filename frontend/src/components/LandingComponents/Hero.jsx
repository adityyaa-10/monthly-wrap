import styles from '../../style.js';
import { Player } from '@lottiefiles/react-lottie-player';
import Button from './Button.jsx';
const Hero = () => (

  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h2 className={styles.heading2}>The <span className='text-blue'> Monthly Wrap</span> <br className='sm:block hidden' /> Magazine</h2>
      </div>

      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        The online magazine that gives an opportunity to the students to use their learnings and transfer them into articles. Articles will become a great repository of online learning for other netizens, interested in technology. Our main focus is to provide valuable experiences to others so that others can learn from them. The portal contains upcoming technologies and updates of different domains like software, automobile, pharmacy, healthcare, Research domain updates, etc.      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_k27t2gov.json"
        style={{ height: '100%', width: '100%' }}
      >
      </Player>

    </div>
  </section>)

export default Hero