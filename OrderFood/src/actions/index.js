import { ADD_ORDER, DELETE_ORDER, CLEAN_ORDER } from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    // 1 object order co: name, amount, unitPrice
    payload: order
})

export const deleteOrder = (item) => ({
    type: DELETE_ORDER,
    payload: item
})

export const cleanOrder = () => ({
    type: CLEAN_ORDER
})