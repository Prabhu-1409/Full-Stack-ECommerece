import React from 'react'
import Slider from './Slider'
import Gettingproduct from './Gettingproduct'
import Navbar from './Navbar'
import  Axios  from 'axios'
import { useEffect } from 'react'
import './Home.css'

function Home() {

  useEffect(()=>{
    Axios({
      method:'GET',
      url:'http://localhost:3001/api/home',
      withCredentials:true
    }).then((res)=>{
      //console.log(res)
    })
  })

  return (
    <div className='align-pages'>
      <Navbar></Navbar>
      <Slider></Slider>
      <Gettingproduct></Gettingproduct>
    </div>
  )
}

export default Home
