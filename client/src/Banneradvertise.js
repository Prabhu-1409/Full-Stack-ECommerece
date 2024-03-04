import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Banneradvertise.css'

function Banneradvertise() {
    const [banner , setbanner] = useState()
    const [offer , setoffer] = useState('')
    const handleadvertise = (e) =>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('banners',banner)
        formdata.append('offer',offer)
        console.log([...formdata.entries()])
        Axios.post('http://localhost:3001/api/offers',formdata).then(()=>{
            console.log('Succesfully sent')
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='advertise'>
      <div className='name-container'>
      <h1 className='advertise-name'>Advertise</h1>
      <span className='line1'></span>
      </div>
      <form className='advertise-form' onSubmit={handleadvertise}>
        <input type='file' name='banners' id='banners' onChange={(e)=>{setbanner(e.target.files[0])}}></input>
        <textarea cols={30} rows={5} className='textarea' onChange={(e)=>{setoffer(e.target.value)}} placeholder='Enter the offer details'></textarea>
        <input className='advertise-submit' type='submit'></input>
      </form>
    </div>
  )
}

export default Banneradvertise
