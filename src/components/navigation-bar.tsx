import { FaTruck, FaPercentage } from "react-icons/fa";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { BsBasket3Fill } from "react-icons/bs";
import {Link} from "react-router-dom";

import {useLocation} from "react-router-dom"

import "../styles/css/navigation-bar.css"

const NavigationBar:React.FC = () => {
    const pathID = useLocation().pathname.split('/')[1]
    
    const iconSize = 32

    return (
        <header className="navigation-bar">
          <nav>
          <Link 
            to="/"
            className={'' === pathID ? "selected-tab" : "Link"}>
              <AiFillHome size={iconSize}/>
          </Link>

          <Link 
            to="/delivery"
            className={"delivery" === pathID ? "selected-tab" : "Link"}>
            <FaTruck size={iconSize}/>
          </Link>

          <Link 
            to="/discount"
            className={"discount" === pathID ? "selected-tab" : "Link"}>
            <FaPercentage size={iconSize}/>
          </Link>

          <Link 
            to="/collection"
            className={"collection" === pathID ? "selected-tab" : "Link"}>
            <HiCollection size={iconSize}/>
          </Link>

          <Link 
            to="/contacts"
            className={"contacts" === pathID ? "selected-tab" : "Link"}>
            <AiFillPhone size={iconSize}/>
          </Link>

          <Link 
            to="/basket"
            className={"basket" === pathID ? "selected-tab" : "Link"}>
            <BsBasket3Fill size={iconSize}/>
          </Link>
          </nav>
      </header>
    )
}

export default NavigationBar