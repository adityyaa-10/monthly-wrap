import styles from "../style.js";
import Navbar from "../components/LandingComponents/Navbar.jsx";
import Billing from "../components/LandingComponents/Billing.jsx";
import CardDeal from "../components/LandingComponents/CardDeal.jsx";
import Footer from "../components/LandingComponents/Footer.jsx";
import Hero from "../components/LandingComponents/Hero.jsx";
import KickStart from "../components/LandingComponents/KickStart.jsx";
import Business from "../components/LandingComponents/Business.jsx";
const LandingPage = () =>
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

                <Business />
                <Billing />
                <CardDeal />
                <KickStart />
                <Footer />
            </div>
        </div>
    </div>
);

export default LandingPage