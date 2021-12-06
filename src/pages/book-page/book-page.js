import {useState, useEffect } from "react"
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addItemToList } from "../../redux/actions/actions";

const BookPage = () => {
    const [isInBasket, setIsInBasket] = useState(false)
    const [book, setBook] = useState()
    const pathID = useLocation().pathname.split('/')[2]

    const dispatch = useDispatch()

    const submitAction = (item_ID) => {
        setIsInBasket(true)
        dispatch(addItemToList(item_ID))
    }

    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes/${pathID}`).then((res)=>{return res.json()}).then((data)=>{ setBook(data)})
    },[])

    const storeBasketList = useSelector((state) => state.basket_list.list)

    useEffect(()=>{
        if (book) {
            if (storeBasketList.some(item=>item.data.id === book.id)) {
                setIsInBasket(true)
            }
        }
    },[book])

    console.log(isInBasket);

    return (<section className="main-container">

            {
                book && (
                    <>
                    <article>
                        <img src={book.volumeInfo.imageLinks.large} alt={book.volumeInfo.title} />
                        {
                            !isInBasket ? (
                                <button onClick={()=>{submitAction(book.id)}}>Basket</button>) 
                                    : (<button disabled={isInBasket} >In a Basket</button>)
                        }
                        
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