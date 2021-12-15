import BookSlot from "../../components/book-slot";
import { removeItemFromBasket } from "../../redux/actions/actions";
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom";

const Basket = () => {
    const storeBasketList = useSelector((state) => state.basket_list.list)
    console.log(storeBasketList);

    const dispatch = useDispatch()

    const removeItem = (item_ID) => {
        dispatch(removeItemFromBasket(item_ID))
    }

    return (<section className="page page-top">
        {
            storeBasketList && (                        
                storeBasketList.map((item)=>{
                    return (<article>
                                <BookSlot data={item.data}/>
                                <button onClick={()=>{removeItem(item.data.id)}}>X</button>
                            </article>)    
        }))}
        <Link to="/payment">
            <button>Buy All</button>
        </Link>
    </section>)
}

export default Basket