const OurPartners:React.FC = () => {

    const partners = ["Google", "Facebook", "Twitter", "Reddit", "Youtube"]

    return (
        <section className="main-container partners-section">
            <article className="container">
                <h2 className="section-title">Our Partners</h2>
                <ul >
                    {partners.map((item, index)=>{
                        return <li key={index}>
                                    <img src="#" alt={item}/>
                                </li>
                    })}
                </ul>
            </article>
        </section>
    )
}

export default OurPartners