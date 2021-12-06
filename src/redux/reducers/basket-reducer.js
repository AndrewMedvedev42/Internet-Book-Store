const Basket = {list:[]}

const basketReducer = (state=Basket, action) => {
    switch (action.type){
        case "ADD_ITEM_TO_LIST":
            return {...state, list:[...state.list, action.payload.item]}
        case "REMOVE_ITEM_FROM_LIST":
            return {...state, list:state.list.filter((item, index)=> item.data.id !== action.payload.item)}
        default:
            return {...state}
    }
}

export default basketReducer