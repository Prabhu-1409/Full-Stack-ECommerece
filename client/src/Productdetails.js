import React, { useEffect , useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Usercontext } from './App';
import add_to_cart from './reduxreducer';
import {addcart} from './cartredux'
import { useSelector, useDispatch } from 'react-redux';
import './Productdetails.css'


function Productdetails() {
    const [ details , setdetails] =useState([])
    const [ reviews , setreviews] =useState('')
    const {productid} =useParams()
    const navigate = useNavigate()
    const {userdata, setuserdata} = useContext(Usercontext)
    const star = 3
    const selector = useSelector((state)=>state.add_to_cart)
    const dispatch = useDispatch()
    const addcart = ()=>{
        dispatch({
            type:"ADDTOCART",
            payload:details.name
        })
    }
    console.log(addcart.payload)
    useEffect(()=>{
        Axios({
            method:'GET',
            url:`http://localhost:3001/api/productbyid?id=${productid}`,
            withCredentials:true
        }).then((product)=>{
           setdetails(product.data)
           console.log(product.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[productid])

    const reviewhandle = (e) =>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('review',reviews)
        console.log([...formdata.entries()])
    }

   const Ratings = ({star}) =>{
      const rating_stars  =   Array.from(({length:5}),(ele, i)=>{
            const half_ratings = i + 0.5
            return (
            <span>
                {star >=  i + 1 ? (
                    <FaStar/>
                ): star >= half_ratings ?(
                    <FaStarHalfAlt/>
                ):(
                    <FaRegStar/>
                )}
            </span>
            )
        })
        return (
            <div>
                {rating_stars}
            </div>
        )
   }
       
  return (
    <div className='bg-gray-100 dark:bg-gray-800 py-8'>
        <div  className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row -mx-4'>
        <div className='md:flex-1 px-4'>
        <div className='h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mg-4'>
        <img className='w-full h-full object-cover' src={`http://localhost:3001/${details.file}`} alt=''></img>
        </div>
        <div className=''>
            <div id='align-button'>
                <button className='w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700' id='addtocart' onClick={()=>{
                    
                }}>Add To Cart</button>
                <button className='w-full bg-white-900 dark:bg-gray-600 text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700' id='buynow' onClick={()=>{
                    
                }}>Buy Now</button>
            </div>
        </div>
        </div>
        <div className='md:flex-1 px-4' id='aligntext'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white' id='product-name'>{details.name}</h2> 
        <div className='flex mb-4' id='price-availability'>
            <div className='mr-4'>
                <span className='font-bold text-gray-700 dark:text-gray-300'>Price:</span>
                <span className='text-gray-600 dark:text-gray-300'>💲{details.price}</span>
            </div>
            <div className='mr-4'>
                <span className='font-bold text-gray-700 dark:text-gray-300'>Availability:</span>
                <span className='text-gray-600 dark:text-gray-300'> {details.stock}</span>
            </div>
        </div>
        <div className='description-align'>
            <h2 className='font-bold text-gray-700 dark:text-gray-300'>Product Description:</h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm mt-2' id='description'>
                {details.description}
            </p>
        </div>
        </div>
        </div>
        </div>
        <form>
            <textarea type='text' value={reviews} name='review' onChange={(e)=>{setreviews(e.target.value)}} placeholder='Enter the Reviews about the Product'></textarea>
            <button onClick={reviewhandle}>Send</button>
        </form>
    </div>
  )
}

export default Productdetails
