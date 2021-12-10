import {Link} from "react-router-dom";
import { useEffect, useState } from "react"
import "../../../styles/css/page-styles/about-us-page.css"
import BookSlot from "../../../components/book-slot";
import { FaSearch } from "react-icons/fa";

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
        <section className="main-container catalog-section">
            <section className="container search-section">
                <div className="search-input">
                    <FaSearch color="#FF8A50" size={15}/>
                    <input  type="text" onChange={(e)=>{setSearchValue(e.target.value)}}/>
                </div>

                <ul className={`card-slot-container`}>
                    {
                        bookCollection && (                        
                                bookCollection.map((item)=>{
                                return <Link key={item.id} to={`/book/${item.id}`}>
                                            <BookSlot data={item} styling={"card-slot"}/>         
                                    </Link> 
                            }))
                    }
                </ul>
            </section>
        </section>
    )
}

export default Catalog