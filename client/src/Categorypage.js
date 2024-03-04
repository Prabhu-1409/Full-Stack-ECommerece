import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import './Categorypage.css'

function Categorypage() {
    const [category , setcategory] = useState()

    const {categoryname}  = useParams()
    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/category?category=${categoryname}`).then((details)=>{
            setcategory(details.data)
            console.log(category)
        })
    },[categoryname])
  return (
    <div>
      <div className='category-align'>
      <h1 className='category-name'>{categoryname}</h1>
      <span className='line4'></span>
      </div>
      <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
              {category&& category.map((getting, i)=>{
                  return <React.Fragment key={i}>
                    <div className='w-72 h-75 b-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl' id='card'>
                      <a href={`/productdetails/${getting._id}`}>
                          <div className='content'>
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
  )
}

export default Categorypage
