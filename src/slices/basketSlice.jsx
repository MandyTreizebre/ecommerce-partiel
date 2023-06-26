import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    basket: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addOneProduct: (state, action) => {
            state.basket = action.payload
        },
        removeOneProduct: (state, action) => {
            state.basket = action.payload
        },
        reset: (state) => {
            state.basket = []
        }
    }
})

export const {addOneProduct, removeOneProduct, reset} = basketSlice.actions

export const selectBasket = state => state.basket

export default basketSlice.reducer