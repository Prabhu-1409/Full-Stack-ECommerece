import React, { useEffect, useState } from 'react'
import Axios from 'axios'
//import Card from 'react-bootstrap/Card';
import './ProductGrid.css'
//import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
//import Slider from './Slider'
import { useParams } from 'react-router-dom'
import Electronics1 from  './Electronics1.jpg'
import Household from './Household.jpg'
import Homedecors from './Homedecors.jpg'
import Kitchen from './Kitchen.jpg'
import Toys from './Toys.jpg'
import './Gettingproduct.css'


function Gettingproduct() {
  const [getproduct, setgetproduct] = useState([])
  const [categoryname,  setcategoryname] = useState()

  const {user_id}  = useParams()
  console.log(user_id)
    useEffect(()=>{
        Axios({
          method:'GET',
          url:'http://localhost:3001/api/gettingproduct',
          withCredentials:true
        }).then((message)=>{
            setgetproduct(message.data)
            console.log(`Products Reached`)
        }).catch((err)=>{
            console.log(err)
        })
    },[setgetproduct])

  return (
    <div>
    <div className='line'>
    <span className='title-line'>
    </span>
    <h1 className='category-title'>Top Categories</h1>
    <span className='title-line'>
    </span>
    </div>
    <div className='grid'>
      <div>
        <div className='cards1'>
          <div className='card'>
          <a href={`/category/${categoryname}`}>
            <li onClick={()=>{
            setcategoryname('Electronics')
          }}>Electronics</li>
          <img src={Electronics1} className='card-image' alt='electronics'></img></a></div>
          <div className='card'>
          <a href={`/category/${categoryname}`}><li onClick={()=>{
            setcategoryname('Household')
          }}>Household</li>
          <img src={Household} className='card-image' alt='Household'></img></a></div>
          <div className='card'>
          <a href={`/category/${categoryname}`}><li onClick={()=>{
            setcategoryname('Home Decors')
          }}>Home Decors</li>
          <img src={Homedecors} className='card-image' alt='Homedecors'></img></a></div>
          </div>
          <span className='gap'>
          </span>
          <div className='cards2'>
          <div className='card'>
          <a href={`/category/${categoryname}`}><li onClick={()=>{
            setcategoryname('Kitchen')
          }}>Kitchen</li>
          <img src={Kitchen} className='card-image' alt='Kitchen'></img></a></div>
          <div className='card'>
          <a href={`/category/${categoryname}`}><li onClick={()=>{
            setcategoryname('Toys')
          }}>Toys</li>
          <img src={Toys} className='card-image' alt='Toys'></img></a></div>
          </div>
        </div>
        <div className='line'>
          <span className='title-line2'>
            </span>
                <h1 className='category-title'>Top Deals</h1>
                    <span className='title-line2'>
            </span>
          </div>   
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
              {getproduct.map((getting, i)=>{
                  return <React.Fragment key={i}>
                    <div className='w-72 h-75 b-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl' id='card'>
                      <a href={`/productdetails/${getting._id}`}>
                          <div className='content' key={uuidv4()}>
                              <img variant='top' className='h-80 w-72 object-cover rounded-t-xl' src={`http://localhost:3001/${getting.file}`}  alt={getting.name}/>
                                <div className='px-4 py-3 w-72'>
                                    <span className='text-gray-400 mr-3 uppercase text-xs'>Brand</span>
                                      <p className='text-lg font-semibold text-black cursor-auto  my-3'>{getting.name}</p>
                                          <p className='text-lg font-semibold text-black cursor auto my-3'>💲{getting.price}</p>
                                          <del>
                                            <p className='text-sm text-gray-600 cursor-auto ml-2'>10000</p>
                                          </del>
                                </div>
                          </div>
                      </a>
                      </div>
            </React.Fragment>
      })}     </div>
    </div>
    </div>
  )
}

export default Gettingproduct
