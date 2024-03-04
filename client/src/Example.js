import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import login_logout from './reduxreducer'
import {login_user , logout_user} from './loginlogout'

function Example() {

    const info = {
        name:'prabhu'
    }

    const selector = useSelector(state=>state.login_logout)
    const dispatch = useDispatch()

    const login_user =(user)=>{
        return{
            type:"LOGIN",
            payload:user
        }
    }
    
    const logout_user = () =>{
        return{
            type:"LOGOUT"
        }
    }
    

    useEffect(()=>{
        dispatch(login_user(info))
    },[])
  return (
    <div>
        {
            login_logout.loggedin ? 
            <>
            <h1>{login_logout.user}</h1>
            <button onClick={()=>dispatch(logout_user())}>Logout</button>
            </>
            :
            <>
            <h1>User Logged out</h1>
            <button onClick={()=>dispatch(login_user(info))}>Login</button>
            </>
        }
    </div>
  )
}

export default Example
