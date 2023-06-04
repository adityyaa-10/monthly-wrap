import rtfexample from "../../assets/LandingAssets/rtfexample.png";
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
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Writing blogs in rich text format will provide you with numerous benefits. It allows for enhanced formatting options like bold, italics, headings, and lists, making the content visually appealing. Rich text also supports embedding images, videos, and hyperlinks, enabling more engaging and interactive blog posts that effectively convey information and captivate readers.</p>
    </div>

  </section>

)


export default WriteInRTF