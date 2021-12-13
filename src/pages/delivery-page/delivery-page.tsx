import "../../styles/css/page-styles/delivery-page.css"

const DeliveryPage:React.FC = () => {
    return (
            <section className="page page-top delivery-page">
                <section className="container delivery-article border-radius-25px white-block">
                    <h2 className="page-title">Delivery</h2>
                    <article>
                        <h3 className="section-title">Title</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </article>
                    <article>
                        <h3 className="section-title">Title</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </article>
                    <article className="delivery-message">
                        <p className="delivery-message-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </article>
                </section>
            </section>
    )
}

export default DeliveryPage