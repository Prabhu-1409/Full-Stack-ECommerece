import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from'react-router-dom'
import image from './image.jpg'

function Register() {
    const [firstname, setfirstname] = useState('')
    const [lastname , setlastname] = useState('')
    const [email, setemail] =useState('')
    const [password ,  setpassword] = useState('')
    const [reenterpassword, setreenterpassword] = useState('')
    const [response , setresponse]= useState('')
    const navigate = useNavigate()

    const registerhandle=(e)=>{
            e.preventDefault()
            if(password === reenterpassword){
                const formdata = new FormData()
                formdata.append('firstname',firstname)
                formdata.append('lastname',lastname)
                formdata.append('email',email)
                formdata.append('password',password)
                console.log([...formdata.entries()])
                Axios({
                  method:'POST',
                  url:'http://localhost:3001/authentication/userregister',
                  data:formdata,
                  headers:{
                    'Content-Type':'application/json'
                  }
                }).then((res)=>{
                  //let res_data = JSON.stringify(res,null,2)
                  //setresponse(res_data)
                  //lert(res.data.message)
                  if(res.data.status==='1'){
                    setresponse(res.data.message)
                    navigate('/login')
                  }
                })
            }else{
              alert('Password doesnt match')
            }
    }
  return (
    <div className='py-16'>
      <div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
        <div className='hidden lg:block lg:w-1/2 bg-cover' 
        style={{ backgroundImage:`url(${image})`}}>
        </div>
      <div className='w-full p-8 lg:w-1/2'>
        <p className='text-xl text-gray-600 text-center'>Create an Account</p>
      <form>
        <div className='mt-4'>
        <div className='flex justify-between'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Enter your Firstname</label>
        </div>
        <input type='text' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none' name='firstname' id='firstname' value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} placeholder='Enter your First Name'></input>
        </div>
        <div className='mt-4'>
        <div className='flex justify-between'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Enter your Lastname</label>
        </div>
        <input type='text' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none' name='lastname' id='lastname' value={lastname} onChange={(e)=>{setlastname(e.target.value)}} placeholder='Enter your Last Name'></input>
        </div>
        <div className='mt-4'>
        <div className='flex justify-between'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Enter your Email ID</label>
        </div>
        <input type='text' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none' name='email' id='email' value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter your email ID'></input>
        </div>
        <div className='mt-4'>
        <div className='flex justify-between'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Enter the Password</label>
        </div>
        <input type='password' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none' name='password' id='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Set password'></input>
        </div>
        <div className='mt-4'>
        <div className='flex justify-between'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Re-Enter the Password</label>
        </div>
        <input type='password' className='bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none' name='repassword' id='repassword' value={reenterpassword} onChange={(e)=>{setreenterpassword(e.target.value)}} placeholder='Re-enter the password'></input>
        </div>
        <div className='mt-8'>
        <button className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600' onClick={registerhandle}>Create</button>
        </div>
      </form>
      <p>{response}</p>
      </div>
      </div>
    </div>
  )
}

export default Register
