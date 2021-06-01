import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
// Another way for multiple FA icons
// import * as FaIcons from "react-icons/fa";
// then we would label it as FaIcons.FaBars, see in SidebarData.tsx
import {SidebarData} from './SidebarData'
import {Link} from 'react-router-dom';
import './Sidebar.css'
import {IconContext} from 'react-icons'; //allows color changing for all icons

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () : void => setSidebar(!sidebar)
    
    return (
        <>
        <IconContext.Provider value={{color: "white"}}> 
            <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaBars onClick={showSidebar}/>
                    </Link>
            </div>
               <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                  <ul className='nav-menu-items' onClick={showSidebar}>
                      <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose />
                        </Link>
                      </li>
                      {SidebarData.map((item, index) => {
                          return (
                              <li key={index} className={item.cName}>
                                  <Link to={item.path}>
                                      {item.icon}
                                      <span>{item.title}</span>
                                  </Link>
                              </li>
                          )
                        })}
                    </ul> 
               </nav>
        </IconContext.Provider>
    </>
    )
}

export default Sidebar
