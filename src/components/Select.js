import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { action, actionSelect } from '../redux/actions/action'
import axios from 'axios'
import './Select.css'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"

const Select = (props) => {
    const param = useParams()
    const dispatch = useDispatch()
    const select = useSelector(state => state.one)
    const restate = useSelector(state => state.buy.total)

    const exist = restate.find(w=>Number(w.id)===Number(param.id))
    // console.log(Boolean (exist))
    // console.log(param.id)

    const fetch = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${param.id}`)
        .catch(err => console.log(err))
        dispatch(actionSelect(response.data))
    }

    useEffect(()=>{
        fetch();
    },[])//eslint-disable-line react-hooks/exhaustive-deps
    // console.log(action)

    

    return (
        <div id="contain" className="contain">
            <div className="card1">
                <img src={select.image} className='oneimg' alt={select.title} />
            </div>
            <div className='desc'>
                <Link to='/sabad'>
                <button className='btn-2'><AiOutlineShoppingCart className='sabad'/></button>
                </Link>
                <p className="des">{select.description}</p>
                <h2 className="category">{select.category}</h2>
                <h3 className='price2'>{`price  ${select.price} $`}</h3>
                <button onClick={()=>{dispatch(action(select))}} className="btn-2" disabled={Boolean(exist)}>ADD</button>
            </div>
        </div>
    )
}

export default Select
