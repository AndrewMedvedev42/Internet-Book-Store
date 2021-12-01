import {useState, useEffect } from "react"
import {useLocation} from "react-router-dom"

const BookPage:React.FC = () => {
    const [book, setBook] = useState<any>({})
    const pathID = useLocation().pathname.split('/')[2]
    console.log(pathID);
    
    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes/${pathID}`).then((res)=>{return res.json()}).then((data)=>{ console.log(data)})
    },[])
    
    return (<div className="main-container"></div>)
}

export default BookPage