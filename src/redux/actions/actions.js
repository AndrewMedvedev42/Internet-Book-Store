import axios from "axios"
import {useSelector} from "react-redux"

export const addItemToList = (item_id) => async (dispatch) => {
    
    const item = await axios.get(`https://www.googleapis.com/books/v1/volumes/${item_id}`)

    dispatch({
        type:"ADD_ITEM_TO_LIST",
        payload:{
            item: item,
        }
    })
}

export const removeItemFromBasket = (item_id) => async (dispatch) => {

    dispatch({
        type:"REMOVE_ITEM_FROM_LIST",
        payload:{
            item: item_id,
        }
    })
}
