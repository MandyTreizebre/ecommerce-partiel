import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    basket: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        changeBasket: (state, action) => {
            state.basket = action.payload
        }
    }
})

export const {changeBasket} = basketSlice.actions

export const selectBasket = state => state.basket

export default basketSlice.reducer