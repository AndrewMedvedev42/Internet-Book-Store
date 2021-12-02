import axios from "axios"

export const addItemToList = (item_id) => async (dispatch) => {
    
    const item = await axios.get(`https://www.googleapis.com/books/v1/volumes/${item_id}`)

    dispatch({
        type:"ADD_ITEM_TO_LIST",
        payload:{
            item: item,
        }
    })
}
