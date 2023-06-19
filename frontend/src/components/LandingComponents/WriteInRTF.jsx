import rtfexample from "../../assets/LandingAssets/rtfexamplenew.png";
import styles from '../../style.js';
import layout from "../../layout.js";
const WriteInRTF = () =>
(
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={rtfexample} alt="billing" className='w-[90%] h-[100%] relative z-[5]' />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Write your blogs in <br className='sm:block hidden' /><span className='text-blue'> Rich Text Format</span></h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Blog creation in The Monthly Wrap website is powered by Jodit editor! Experience seamless writing with our user-friendly interface. Customize your blog posts by selecting a cover image and enhancing content with text styles, images, videos, and hyperlinks. Engage readers with visually appealing and captivating posts, all made possible with Jodit&apos;s rich formatting options. Enjoy the power of Jodit editor on our platform!</p>
    </div>

  </section>

)


export default WriteInRTF