import React,{useState, useRef, useEffect} from 'react'
import './Category.scss'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Category = () => {

    const [show, setShow] = useState(false)

    const click = () =>{
        setShow(!show);
    }

    
    const re = useRef()
    
    useEffect(()=>{
            window.addEventListener('click', (e)=>{
                if(Boolean(re.current)){
                    if(!re.current.contains(e.target) && Boolean(re.current)){
                        Boolean(re.current);
                        setShow(false)};
                }
                
            })
        },[])
           
                   

   
    




    const clas = show ? 'dropdown_menu' : ""

    return (
        <div className='btn_group'>
            <button className='btn_group_1'>CATEGORY</button>
            <button className='btn_group_2' id="btn" onClick={click} ref={re}><AiFillCaretDown className='down'/></button>
            <div className={`${clas}  add`}>
                <Link id='A' className='atag' to="/">ALL</Link>
                <Link id='m' className='atag' to="/">men's clothing</Link>
                <Link id='j' className='atag' to="/">jewelery</Link>
                <Link id='e' className='atag' to="/">electronics</Link>
                <Link id='w' className='atag' to="/">women's clothing</Link>
            </div>
        </div>
    )
}

export default Category
