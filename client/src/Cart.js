import React, { useState } from 'react'
import { useContext } from 'react'
import { Usercontext } from './App'
import { useDispatch, useSelector } from 'react-redux'
import add_to_cart from './reduxreducer'


function Cart() {
  const selector  = useSelector((state)=>state.add_to_cart)
  const dispatch = useDispatch()
  console.log(add_to_cart.product.product_detail)
  return (
    <div>
      <p>{add_to_cart && add_to_cart.product.product_detail}</p>
    </div>
  )
}

export default Cart
