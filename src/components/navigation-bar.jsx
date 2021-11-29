import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { AiFillHome, AiFillStar, AiFillPhone } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import {Link} from "react-router-dom";
import { TitleBar, Toolbar, ToolbarNav, ToolbarNavItem } from 'react-desktop/macOs';
import { BsFillTelephoneFill } from "react-icons/bs";

const NavigationBar = () => {
    const [selected, setSelected] = useState(1)
  
    const handleClick = (iconNumber) => {
      setSelected(iconNumber)
    }
  
    const iconSize = 32
    return (
        <TitleBar>
        <Toolbar>
          <ToolbarNav>
          <Link className="Link" to="/">
            <ToolbarNavItem
                icon={<AiFillHome size={iconSize}/>}
                selected={selected === 1}
                onClick={() => handleClick(1)}
              />
          </Link>

          <Link className="Link" to="/delivery">
            <ToolbarNavItem
                icon={<FaTruck size={iconSize}/>}
                selected={selected === 2}
                onClick={() => handleClick(2)}
              />
          </Link>
          <Link className="Link" to="/discount">
            <ToolbarNavItem
                icon={<AiFillStar size={iconSize}/>}
                selected={selected === 3}
                onClick={() => handleClick(3)}
              />
          </Link>
          <Link className="Link" to="/collection">
            <ToolbarNavItem
                icon={<HiCollection size={iconSize}/>}
                selected={selected === 4}
                onClick={() => handleClick(4)}
              />
          </Link>
          <Link className="Link" to="/contact-us">
            <ToolbarNavItem
                icon={<AiFillPhone size={iconSize}/>}
                selected={selected === 5}
                onClick={() => handleClick(5)}
              />
          </Link>
          </ToolbarNav>
        </Toolbar>
      </TitleBar>
    )
}

export default NavigationBar