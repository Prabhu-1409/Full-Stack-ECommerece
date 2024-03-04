import React, { useState } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import Productdetails from './Productdetails'
import { useSelector, useDispatch  } from 'react-redux'
import Account from './Account'
import { useContext } from 'react'
import { Usercontext } from './App'
import { Link } from 'react-router-dom'
import login from './login.jpg'


function Login() {
    const {userdata, setuserdata} = useContext(Usercontext)
    const [email, setemail] =useState('')
    const [password, setpassword] =useState('')
    const [response ,  setresponse] = useState('')
    const navigate = useNavigate()


    const handlesubmit = (e) =>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('email',email)
        formdata.append('password',password)
        //console.log([...formdata.entries()])
        Axios(
            {
                method:'POST',
                url:'http://localhost:3001/authentication/login',
                data:formdata,
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true,
            },
        ).then((res)=>{
          if(res.data[0]){
            const user = res.data[0]
            setresponse(user)
            console.log(response)
            setuserdata(response)
            localStorage.setItem(response._id,response.emailid)
            sessionStorage.setItem(response._id,response.emailid)
            navigate('/Home')
           //navigate('/Account',{replace:true,state:res.data[0]})
          }else{
            alert('You dont have an account')
            navigate('/register')
          }
        })
    }
  return (
    <div className='py-16'>
    <div className='flex bg-white rounded-lg shadow-lg oveflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
      <div className='hidden lg:block lg:w-1/2 bg-cover'
       style={{backgroundImage:`url(${login})`}}>
      </div>
    <div className='w-full p-8 lg:w-1/2'>
      <h2 className='text-2xl font-semibold text-gray-700 text-center'>Hi, This is Prabhu 👋</h2>
      <p className='text-xl text-gray-600 text-center'>Welcome Back!</p>
      <div className='px-4 py-3'>
          <svg className='h-6 w-6' viewBox='0 0 40 40'>
          </svg>
      </div>
      <form>
      <div className='mt-4'>
      <div className='flex justify-between'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>Email Address</label>
      </div>
        <input type='text' value={email} id='label-email' placeholder=" " onChange={(e)=>{setemail(e.target.value)}} name='email' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'></input>
      </div>
      <div className='mt-4'>
      <div className='flex justify-between'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
        <a href='' className='text-xs text-gray-500'>Forget Password ?</a>
      </div>
        <input type='password' value={password} placeholder=" " id='label_password' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none' onChange={(e)=>{setpassword(e.target.value)}} name='password'></input>
      </div>
      <div className='mt-8'>
      <button className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray' onClick={handlesubmit}>
          Login
      </button>
      </div>
      </form>
      <div className='mt-4 flex-items-center justify-between'>
        <span className='border-b w-1/5 md:w-1/4'></span>
      <Link className='text-xs text-gray-500 uppercase' to='/Register'>Or Sign Up</Link>
        <span className='border-b w-1/5 md:w-1/4'></span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
