import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { AiFillHome, AiFillStar, AiFillPhone } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import {Link} from "react-router-dom";

const NavigationBar:React.FC = () => {
    const [selected, setSelected] = useState(1)
  
    const handleClick = (iconNumber:number) => {
      setSelected(iconNumber)
    }
  
    const iconSize = 32
    return (
        <nav>
          <Link className="Link" to="/">
            <AiFillHome/>
          </Link>
          <Link className="Link" to="/">
            <FaTruck/>
          </Link>
          <Link className="Link" to="/">
            <AiFillStar/>
          </Link>
          <Link className="Link" to="/">
            <HiCollection/>
          </Link>
          <Link className="Link" to="/">
            <AiFillPhone/>
          </Link>
      </nav>
    )
}

export default NavigationBar