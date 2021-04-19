import React,{useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../imgs/logo.png';
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";


import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const[colorChange, setColorChange] = useState(false);
   
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const changeNavColor = () => {
        if(window.scrollY > 80 ){
            setColorChange(true)
        }else{
            setColorChange(false)            
        }
    }

    window.addEventListener('scroll', changeNavColor);
    
    return (
      <div className={ colorChange ? 'header nav-about' : 'header'}>
        <div className='title-nav'>
            <Link to='/' onClick={closeMobileMenu}>
                <img src={logo} alt='logo'/>
            </Link>            
        </div> 
        <div className="logo-nav">
          <ul className={click ? "nav-options active" : "nav-options"}>                               
                      <li>
                          <Link className="option" to='/' onClick={closeMobileMenu}>
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link to='/about' className="option" onClick={closeMobileMenu}>
                              about
                          </Link>
                      </li>
                      <li>
                          <Link to='/projects' className="option" onClick={closeMobileMenu}>
                              projects
                          </Link>
                      </li>
                      <li>
                          <Link to='/partners' className="option" onClick={closeMobileMenu}>
                              partners
                          </Link>
                      </li>
                      <li>
                        <div className='title'>
                            <Link to='/' onClick={closeMobileMenu}>
                                <img src={logo} alt='logo'/>
                            </Link>                            
                        </div>
                      </li>                      
                      <li>
                          <Link to='/Mission' className="option" onClick={closeMobileMenu}>
                              Mission
                          </Link>
                      </li>
                      <li>
                          <Link to='/News' className="option" onClick={closeMobileMenu}>
                              News
                          </Link>
                      </li>
                      <li>
                          <Link to='/FAQ' className="option" onClick={closeMobileMenu}>
                              FAQ
                          </Link>
                      </li>
                      <button className='btn btn-share' onClick={closeMobileMenu}>
                          Share
                      </button>                    
                </ul>
        </div>  
        
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    );
  };
  
  export default Navbar;