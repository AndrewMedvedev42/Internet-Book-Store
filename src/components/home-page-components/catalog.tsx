import {Link} from "react-router-dom";
import { useEffect, useState } from "react"
import BookSlot from "../book-slot";
import {LoadingAnimation} from "../loadingAnimation";
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
        <section className="container search-section">
                <div className="input-section">
                    <FaSearch color="#FF8A50" size={15}/>
                    <input  type="text" onChange={(e)=>{setSearchValue(e.target.value)}}/>
                </div>

                <ul className={`card-slot-container`}>
                    {
                        bookCollection ? (                        
                                bookCollection.map((item)=>{
                                return <Link key={item.id} to={`/book/${item.id}`}>
                                            <BookSlot data={item} styling={"card-slot"}/>         
                                    </Link> 
                            })) : <LoadingAnimation/>
                    }
                </ul>
        </section>
    )
}

export default Catalog