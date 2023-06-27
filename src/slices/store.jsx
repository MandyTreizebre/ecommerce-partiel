import {configureStore} from "@reduxjs/toolkit"
import basketReducer from './basketSlice'
import productReducer from './productSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer
    }
})

export default store