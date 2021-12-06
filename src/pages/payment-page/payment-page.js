import BookSlot from "../../components/book-slot";
import {useSelector} from "react-redux"
import { useState } from "react";

const PaymentPage = () => {

    let sum = 0

    const storeBasketList = useSelector((state) => state.basket_list.list)

    storeBasketList.forEach((item)=>{
        console.log(sum);
        console.log(item.data.saleInfo.listPrice.amount);
        sum += Number(item.data.saleInfo.listPrice.amount)
    })

    
    return (<section className="main-container">
                {storeBasketList.map(item=>{
                    return <BookSlot data={item.data}/>
                })}
                <h3>{sum}</h3>
            </section>)
}

export default PaymentPage