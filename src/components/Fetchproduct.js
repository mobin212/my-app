import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import { ActionSet } from '../redux/actions/action'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import Category from './Category'

const Fetchproduct = () => {
    
    const dispatch = useDispatch()
    let select = useSelector(product => product.allProduct.products)

    const [final, setFinal] = useState(select)

    const Atag = [...document.querySelectorAll('.atag')]

    Atag.forEach(row => {
        row.addEventListener('click', (e)=>{
          var select2 = e.target.textContent!=='ALL'? select.filter(row=> e.target.textContent===row.category): select
          setFinal(select2)
        })
    });
    
    const render =final.length !==0 ? final.map(row => {
        return(
                <Cart img={row.image} key={row.id} category={row.category}
                 title={row.title} price={row.price} id={row.id} />
        )
    }) : select.map(row => {
        return(
                <Cart img={row.image} key={row.id} category={row.category}
                 title={row.title} price={row.price} id={row.id} />
        )
    })
    

    useEffect( ()=>{
        // const Axs = async () => {
        //     const response = await axios.get('https://fakestoreapi.com/products')
        //     .catch(err=> console.log(err))
            dispatch(ActionSet())
        // };
        // Axs();
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div id="hole" className='hole'>
            <div className="cate">
                <Category />
            </div>
            <div className='card_content'>
                {render}
            </div>
        </div>
    )
}

export default Fetchproduct
