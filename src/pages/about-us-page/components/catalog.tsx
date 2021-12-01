import {Link} from "react-router-dom";
import { useEffect, useState } from "react"
import "../../../styles/css/page-styles/about-us-page.css"

const Catalog:React.FC = () => {
    const [searchValue, setSearchValue] = useState('christmas')
    const [bookCollection, setBookCollection] = useState<any[]>()

    useEffect(()=>{
        if (searchValue) {
                fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`).then((res)=>{return res.json()}).then((data)=>{setBookCollection(data.items)})
        }else{
            setSearchValue('christmas')
        }
    },[searchValue])
    return (
        <section className="catalog-section">
            {/* <article>
                <div>
                    <h2>Slideshow</h2>
                    <p> </p>
                </div>
                <img src="#" alt="hello" />
            </article> */}
            
            <section className="search-section">
                <input type="text" onChange={(e)=>{setSearchValue(e.target.value)}}/>
                <ul>
                    {
                        bookCollection && (                        
                                bookCollection.map((item)=>{
                                const {volumeInfo, saleInfo} = item
                                return <Link key={item.id} to={`/book/${item.id}`}>
                                             <li className="book-card">
                                                {
                                                    volumeInfo.imageLinks.smallThumbnail ? (
                                                        <img src={`${volumeInfo.imageLinks.smallThumbnail}`} alt={volumeInfo.title}/>
                                                    ):<img src="#" alt="img"/>
                                                }
                                                <h3>{volumeInfo.title}</h3>

                                                {saleInfo.saleability === "NOT_FOR_SALE" || saleInfo.saleability === "FREE" ?
                                                    <p>{saleInfo.saleability.split('_').join(" ")}</p> : 
                                                        <p>{saleInfo.listPrice.amount + " " + saleInfo.listPrice.currencyCode}</p> }
                                            </li>                               
                                    </Link> 
                            }))
                    }
                </ul>
            </section>
        </section>
    )
}

export default Catalog