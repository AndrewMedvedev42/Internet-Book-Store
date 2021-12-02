import BookSlot from "../../components/book-slot";
import {useSelector} from "react-redux"

const Basket = () => {
    const storeBasketList = useSelector((state) => state.basket_list.list)
    console.log(storeBasketList);

    return (<section className="main-container">
        {
            storeBasketList && (                        
                storeBasketList.map((item)=>{
                    return <BookSlot data={item.data}/>         
        }))}
    </section>)
}

export default Basket