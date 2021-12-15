import Catalog from "../../components/home-page-components/catalog";
import OurPartners from "../../components/home-page-components/our-partners";
import AboutUs from "../../components/home-page-components/about-us";
import "../../styles/css/page-styles/home-page.css"

const HomePage:React.FC = () => {
    return (
        <section className="page page-top home-page">
            <Catalog/>
            <OurPartners/>
            <AboutUs/>
        </section>
    )
}

export default HomePage