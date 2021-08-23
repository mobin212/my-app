import React from 'react'
import { useState,useEffect } from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(true)


    useEffect(()=>{
        window.addEventListener('click', (e)=>{
        
           if(e.target.parentElement){
               setClick(true)
           }

        })
        }
    ,[])

   

    const changing = () =>{
        setClick(!click)
    }
    return (
        <header>
            <div  className="content">
                <div id="container" className="container">
                    <div className="logo">
                        <a href="#2">
                            <BsFillAlarmFill id="icon" className="icon"/>
                        </a>
                    </div>
                    
                    <div className={click ? "list_content_non" : "list_content"}>
                        <ul className="list">
                            <li className="item"><Link to='/'>one</Link></li>
                            <li className="item"><Link to='/photo'>PHOTO</Link></li>
                            <li className="item"><Link to='/'>HOME</Link></li>
                            <li className="item"><Link to='/sabad'><AiOutlineShoppingCart className='sabad'/></Link></li>
                        </ul>
                    </div>
                    
                    <div className="change" onClick={changing}>
                        <a href='#btn' id='btn'>
                            {click ? <AiOutlineBars className="change" /> : <AiFillCloseCircle className="change" />}
                        </a>
                    </div>h
                </div>
            </div>
        </header>
    )
}

export default Navbar
