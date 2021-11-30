import Catalog from "./components/catalog";
import OurPartners from "./components/our-partners";
import AboutUs from "./components/about-us";

const AboutUsPage:React.FC = () => {
    return (
        <section className="main-container">
            <Catalog/>
            <OurPartners/>
            <AboutUs/>
        </section>
    )
}

export default AboutUsPage