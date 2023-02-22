const initialstate={
    productos:[]
}


const rootReducer= (state=initialstate,action)=>{
    switch(action.type){
        case 'GET_PRODUCTOS':
            return{
                ...state,
                productos:action.payload
            }
            
        default:
            return{...state}
    }
}

export default rootReducer;