import { useState } from "react";
import { FaTruck, FaPercentage } from "react-icons/fa";
import { AiFillHome, AiFillStar, AiFillPhone } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { BsBasket3Fill } from "react-icons/bs";
import {Link} from "react-router-dom";

import "../styles/css/navigation-bar.css"

const NavigationBar:React.FC = () => {
    const [selected, setSelected] = useState(1)
  
    const iconSize = 32
    return (
        <header className="navigation-bar">
          <nav>
          <Link 
            to="/"
            className={selected === 1 ? "selected-tab" : "Link"}
            onClick={()=>{setSelected(1)}}>
            <AiFillHome size={iconSize}/>
          </Link>

          <Link 
            to="/delivery"
            className={selected === 2 ? "selected-tab" : "Link"}
            onClick={()=>{setSelected(2)}}>
            <FaTruck size={iconSize}/>
          </Link>

          <Link 
            to="/discount"
            className={selected === 3 ? "selected-tab" : "Link"}
            onClick={()=>{setSelected(3)}}>
            <h2><FaPercentage size={iconSize}/></h2>
          </Link>

          <Link 
            to="/collection"
            className={selected === 4 ? "selected-tab" : "Link"}
            onClick={()=>{setSelected(4)}}>
            <HiCollection size={iconSize}/>
          </Link>

          <Link 
            to="/contacts"
            className={selected === 5 ? "selected-tab" : "Link"}
            onClick={()=>{setSelected(5)}}>
            <AiFillPhone size={iconSize}/>
          </Link>

          <Link 
            to="/basket"
            className={selected === 6 ? "selected-tab" : "Link"}
            onClick={()=>{setSelected(6)}}>
            <BsBasket3Fill size={iconSize}/>
          </Link>
          </nav>
      </header>
    )
}

export default NavigationBar