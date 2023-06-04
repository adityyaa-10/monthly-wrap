import styles from "./style.js";
import Navbar from "./components/LandingComponents/Navbar.jsx";
import NonTechBlogs from "./components/LandingComponents/NonTechBlogs.jsx";
import Footer from "./components/LandingComponents/Footer.jsx";
import Hero from "./components/LandingComponents/Hero.jsx";
import KickStart from "./components/LandingComponents/KickStart.jsx";
import MagazineFeatures from "./components/LandingComponents/MagazineFeatures.jsx";
import WriteInRTF from "./components/LandingComponents/WriteInRTF.jsx";
const App = () =>
(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>

        <MagazineFeatures />
        <WriteInRTF />
        <NonTechBlogs />
        <KickStart />
        <Footer />
      </div>
    </div>
  </div>
);

export default App