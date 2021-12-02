const BookSlot = (item) => {
    const {volumeInfo, saleInfo} = item.data
    console.log(item.data);
    return (
        <li className="book-card">
        {
            volumeInfo.imageLinks ? (
                <img src={`${volumeInfo.imageLinks.smallThumbnail}`} alt={volumeInfo.title}/>
            ):<img src="#" alt="img"/>
        }
        <h3>{volumeInfo.title}</h3>

        {saleInfo.saleability === "NOT_FOR_SALE" || saleInfo.saleability === "FREE" ?
            <p>{saleInfo.saleability.split('_').join(" ")}</p> : 
                <p>{saleInfo.listPrice.amount + " " + saleInfo.listPrice.currencyCode}</p> 
        }
        </li>     
    )
}

export default  BookSlot