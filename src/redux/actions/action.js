import {ACTIONTYPES} from '../Actiontypes'
import axios from 'axios'




export const ActionSet = () => {
    
    // const dispatch = useDispatch()
    return async dispatch=>{
        
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err=> console.log(err));
    
        
    

    dispatch({ type : ACTIONTYPES.SET, payload : response.data })
    }
}




export const action = (green) => {
    return {
        type : 'BUY',
        payload : green
    }
}


export const actionSelect = (yellow) => {
    return {
        type : ACTIONTYPES.SELECT,
        payload : yellow
    }
}

export const actionRemove = (red) => {
    return {
        type : 'REMOVE',
        payload : red
    }
}
