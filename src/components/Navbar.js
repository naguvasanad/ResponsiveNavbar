import React, { useState } from "react";
import { FaReact } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";
import "./navStyle.css";
import Menus from "./Menus";

const Navbar = ()=>{
    const [showMedia,setShowMedia] = useState(true);
    const [classNameUi,setClassNameUI]=useState("nav-links");

    const OnClickHandler=()=>{
        if(classNameUi=="nav-links")
        setClassNameUI("nav-links ul");
        else
        setClassNameUI("nav-links");
    }
    return(
        <>
        <div className="navbar">
        <div className="nav-logo">
            <h1><FaReact/><span>R</span>eact</h1>
        </div>
        
        <Menus setClasName={classNameUi}/>
        
        <div id="mobile">
          <GiHamburgerMenu className="hamburger" onClick={() =>{setShowMedia(!showMedia)}}/>
        </div>
        </div>
        </>
    );
}

export default Navbar;