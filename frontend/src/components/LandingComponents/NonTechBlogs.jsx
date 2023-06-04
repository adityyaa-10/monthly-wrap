import styles from '../../style.js';
import layout from '../../layout.js';
import { Player } from '@lottiefiles/react-lottie-player';
import Button from './Button.jsx';

const NonTechBlogs = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Write Technical and<br className="sm:block hidden" /> <span className='text-blue'>Non-Technical Blogs</span></h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Expanding beyond tech blogs allows individuals to explore their diverse interests, share personal experiences, and connect with a broader audience. By writing about a range of topics, one can unleash creativity, engage in meaningful discussions, develop versatile writing skills, and cultivate a well-rounded online presence that reflects their multifaceted personality and passions.</p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_jnqIFpi4XF.json"
        style={{ height: '100%', width: '100%' }}
      >
      </Player>
    </div>

  </section>

)


export default NonTechBlogs
