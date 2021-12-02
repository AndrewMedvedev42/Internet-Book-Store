import {useState, useEffect } from "react"
import {useLocation} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addItemToList } from "../../redux/actions/actions";

const BookPage:React.FC = () => {
    const [book, setBook] = useState<any>()
    const pathID = useLocation().pathname.split('/')[2]

    const dispatch = useDispatch()

    const submitAction = (item_ID:string) => {
        dispatch(addItemToList(item_ID))
    }

    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes/${pathID}`).then((res)=>{return res.json()}).then((data)=>{ setBook(data)})
    },[])

    if (book) {
        console.log(book);
        
    }

    return (<section className="main-container">

            {
                book && (
                    <>
                    <article>
                        <img src={book.volumeInfo.imageLinks.large} alt={book.volumeInfo.title} />
                        <button onClick={()=>{submitAction(book.id)}}>Basket</button>
                    </article>
                    <article>
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.description}</p>
                    </article>
                    </>
                )
            }
    </section>)
}

export default BookPage