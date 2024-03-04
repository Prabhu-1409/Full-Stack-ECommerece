import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useContext } from 'react'
import { Usercontext } from './App'

function Account() {
  const {userdata, setuserdate}  = useContext(Usercontext)
  const [user ,  setuser] = useState()
  //const location  = useLocation()
  //const navigate = useNavigate()
    //console.log(location.state)
    //const user =  location.state
  console.log(userdata)
  const [avatar , setavatar] = useState()

  const avatarhandler = (e) =>{
    e.preventDefault()
    const userid = userdata._id
    const formdata = new FormData()
    formdata.append('avatar',avatar)
    formdata.append('userid',userid)
    console.log([...formdata.entries()])
  }
  useEffect(()=>{
    Axios({
      method:'GET',
      url:'http://localhost:3001/api/profile',
      withCredentials:true
    }).then((res)=>{
      console.log(res)
      setuser(res.data[0])
    })
  },[])


  return (
    <div>
      <h4>{user && user.firstname}</h4>
      <h4>{user && user.lastname}</h4>
      <form>
      <input type='file' name='avatar' onChange={(e)=>{setavatar(e.target.files[0])}}></input>
      <button onClick={avatarhandler}>Upload</button>
      </form>
    </div>
  )
}

export default Account
