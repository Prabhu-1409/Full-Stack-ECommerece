import React, { useEffect, useState } from 'react'
import { Usercontext } from './App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react'


function Navbar() {
  const {userdata, setuserdata} = useContext(Usercontext)
  const [navuser ,  setnavuser] = useState()
  const userid = userdata._id
  const responsive = useRef()
  console.log(userid)
  useEffect(()=>{
    Axios({
      method:'GET',
      url:'http://localhost:3001/api/navprofile',
      withCredentials:true
    }).then(res=>{
      console.log(res.data[0])
      setnavuser(res.data[0])
    })
  },[])

  const[navbar,setnavbar]= useState(false)

  const havhandle = ()=>{
    setnavbar(!navbar)
  }

  return (
    <div>
      <nav>
        <div className='logo'>
          <h2>Logo</h2>
        </div>
        <div className='menuicon' onClick={havhandle}>
          <MenuIcon/>
        </div>
        <div className={`menu  ${navbar && `responsive`}`}>
          <ul>
            <li>Home</li>
          </ul>
          <div>
          <input type='text' className='input' placeholder='Search'></input>
          <SearchIcon/>
          </div>
          <FaShoppingCart className='cart'/>
          <div className='account'>
          <h1>Hello, {navuser && navuser.firstname}</h1>
          <img src='' alt='image'/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
