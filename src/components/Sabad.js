import React from 'react'
import {useSelector} from 'react-redux'
import './Sabad.css'
import { useDispatch } from 'react-redux'
import { action} from '../redux/actions/action'
import { actionRemove } from '../redux/actions/action'
import { Link } from 'react-router-dom'
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";


const Sabad = () => {
    const restate = useSelector(state => state.buy.total)
    const dispatch = useDispatch()
    const total =(restate.length ? restate.reduce((one,two)=>{
        return(one+two.price*two.count)
    },0): 0) 
    const display = restate.map((row,index)=>{
        const clasname = index%2===0 ? 'po' : 'pt'
        return(
        
                <div id="sabad" key={index} className={`inner ${clasname}`}>
                    <img className='imgg' src={row.image} alt="" />
                    <h2>NUMBER: {row.count}</h2>
                    <h2>PRICE: {row.price}</h2>
                    <div className='icons'>
                        <h2>ID: {row.id}</h2>
                        <button className='btn_icon up' onClick={(e)=>{dispatch(action(row))}}><AiOutlineCaretUp className='row'/></button>
                        <button className='btn_icon' onClick={(e)=>{dispatch(actionRemove(row))}}><AiOutlineCaretDown className='row'/></button>
                    </div>
                </div>

        )
    })
    

    return (
        <div className='contain_s'>
            <div className='display'>
                {display}
            </div>
            <div className="total">
                <h2 className="cost">SUM: {total}$</h2>
            </div>
            <Link to='/' className="back">GO TO HOME</Link>
        </div>
    )
}


export default Sabad
