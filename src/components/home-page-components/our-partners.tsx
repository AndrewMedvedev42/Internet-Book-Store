const OurPartners:React.FC = () => {

    const partners = ["Google", "Facebook", "Twitter", "Reddit", "Youtube"]

    return (
        <section className="container partners-section">
                <h2 className="sub-title">Our Partners</h2>
                <ul >
                    {partners.map((item, index)=>{
                        return <li key={index}>
                                    <img src="#" alt={item}/>
                                </li>
                    })}
                </ul>
        </section>
    )
}

export default OurPartners