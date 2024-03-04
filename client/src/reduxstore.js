import { configureStore } from '@reduxjs/toolkit'
import add_to_cart from './reduxreducer'


const store = configureStore({
    reducer:{
        cart:add_to_cart
    }
})

export default store