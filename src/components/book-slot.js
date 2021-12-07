const BookSlot = (data) => {
    const {volumeInfo, saleInfo} = data.data
    return (
        <li className={`book-slot ${data.styling}`}>
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