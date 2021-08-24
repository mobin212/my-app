import React,{ useRef, useEffect} from 'react'
import { useSelector } from 'react-redux'
import './PHOTO.css'

const PHOTOS = () => {
    const photo = useSelector(ph=>ph.allProduct.products)

    const Re = useRef()
    
    
    useEffect(()=>{
        let refrence = [...Re.current.children]
        // console.log(refrence)
        const W = window.screen.height
        window.addEventListener('scroll', ()=>{
            refrence.forEach(r=>{//eslint-disable-line react-hooks/exhaustive-deps
            
            
                const top = r.getBoundingClientRect().top
                if(top < W*0.5){
                    r.classList.add("move")
                }else{r.classList.remove('move')}
            })
        })

        

    },[])
    

const render = photo.map(row=>{ 
    let clas = (row.id %2===0) ? 'righ' : 'lef'
    const one = row.id < 3 ? 'one' : ''
    return(
        <div  className={`${clas} ${one} unique`} key={row.id}>
            <img className='p-img' alt={row.title} src={`${row.image}`} />
        </div>
    )
})
console.log(render)

    return (
        <div id="p">
            <h2 className='scroll'>
                SCROLL DOWN
            </h2>
            <div className='PHOTO' ref={Re}>
                {render}
            </div>
        </div>
        
    )
}

export default PHOTOS
