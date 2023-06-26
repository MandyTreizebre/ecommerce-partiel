import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            state.product = action.payload
        }
    }
})

export const {getAllProducts} = productSlice.actions

export const selectProduct = state => state.product

export default productSlice.reducer