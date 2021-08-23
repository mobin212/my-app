import { ACTIONTYPES } from "../Actiontypes"
import { Local } from "./Local"


const initialState = {
    products : []
}

export const setReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTIONTYPES.SET:
            // state.products=state.products.filter(q=>true)
            return{
                products: action.payload
            }
        default:
            return state    
    }
}

export const selectReducer = (state=[], action) => {
    switch(action.type) {
        case(ACTIONTYPES.SELECT):
         return action.payload
        default:
            return state
    }
}

const initial = Local('add')

// const ini={
//     total:initial
// }

export const buyReducer= (state={total:initial}, {type, payload}) => {
    switch(type) {
        case 'BUY' :
            const exist = state.total.find(row=> row.id===payload.id)
            if(!exist){
                return ({total:[{...payload,count:1},...state.total]})
            }
            if(Boolean(exist)){
                state.total.map(row=>{
                    if(row.id===payload.id){
                        return{...row,count:row.count++}
                    } else {
                        return row
                    }
                    })

                state.total=state.total.filter(r=>true)
            };
            localStorage.setItem('add',JSON.stringify(state.total))
            return state
        case 'REMOVE':
            state.total.map(row=>{
                if(row.id===payload.id && row.count >0){return {...row,count:row.count--}}
                else{
                    return row
                }
            });
            state.total=state.total.filter(r=>r.count !== 0)
            localStorage.setItem('add',JSON.stringify(state.total))
            return {...state}
            
        default: return state
    }
}










// export const buyReducer = (state=ini, {type,payload}) => {
//     switch(type) {
//         case('REMOVE'):
//             console.log(22);
            // ini.total.map(row=>{
            //                     if(row.id===payload.id && row.count==!0){row.count--}
            //                 })
//         case('BUY'):
//         console.log('ll');
//             const exist = ini.total.find(row=> row.id===payload.id)
//             console.log(!exist)
//             console.log(Boolean(exist))
//             if(!exist){
//                 payload.count=1;
//                 ini.total.push({...payload,count:1})}
//             if(Boolean(exist)){
//                 ini.total.map(row=>{
//                     if(row.id===payload.id){row.count++}
//                     if(row.id!==payload.id){row.count=row.count}
//                 })
//             };
//         default:return state
//     }
// }

    