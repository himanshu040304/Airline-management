import React from 'react'
import flight from './flight-4.jpg'
import user from './user.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef,useEffect } from 'react';
// import { useRef } from 'react';
import Navbar from '../Navbar/Navbar.js'
import api from '../API/api.js'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [userName,setUserName]=useState('')
    const [userPass,setUserPass]=useState('')
    const [isFocusp, setIsFocusp] = useState(false);  
    const navigate=useNavigate()
    const input1=useRef()
    const input2=useRef()
    const handleChange=(e,s)=>{
      if(s==='n'){
        setUserName(e.target.value)
      }
      if(s==='p'){
        setUserPass(e.target.value)
      }
  
  
    }
    const handleSubmit=(e)=>{
    
      e.preventDefault()
      api.post('api/user/login',{
          username:userName,
          password:userPass
      },{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((user)=>{
        console.log(user)
        localStorage.setItem('token',user.data.token)
        navigate("/")
        
      }).catch(err=>window.alert('Something went wrong! Try again with correct credentials'))
         
}
const check=()=>{
  const token = localStorage.getItem('token')
  if (!token) {
    // navigate("/")
  } else {
    api.get('/logged', {
      headers: {
        Authorization: token
      }
    }).then(res => {

      if (res.data.success) {
        navigate('/')



      } else {
        localStorage.removeItem('token')
        // navigate("/")

      }
    }).catch((err) => {
      localStorage.removeItem('token')
      // navigate("/")

    })
  }
}
useEffect(() => check(), [])
  return (
    <><Navbar/>
    <div className='h-[4.2rem]'></div>
    <div className="h-screen w-full bg-gradient-to-r from-yellow-400 to-orange-400 flex flex-row items-center justify-center ">
      <div className="h-[65vh] w-[65vw] bg-white rounded-[1rem] shadow-2xl shadow-black flex  p-3">
          <img src={flight} className='h-full w-[30rem] rounded-l-3xl'/>
          <form onSubmit={(e)=>handleSubmit(e)} className='h-full w-[22rem] ml-28 rounded-r-3xl flex flex-col justify-center items-center '>
                <h1 className=' text-5xl mb-7 font-serif'>Login!</h1>
                <img src={user} className='rounded-full h-20 w-20 mb-8'/>
                <div className='flex flex-col h-16 mb-4 justify-center items-center'>
                <label onClick={()=>{input1.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocus||userName ? 'ml-4 mb-10  bg-white  text-xs':''}`}>User Name</label>
                <input ref={input1} value={userName} onChange={(e)=>{handleChange(e,'n')}} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem] hover:border-blue-500 focus:border-green-500 transition-colors duration-300 ease-in-out' onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false)}}></input>
                </div>
                <div className='flex flex-col mb-2 h-16 justify-center items-center'>
                <label onClick={()=>{input2.current.focus()}} className={`absolute z-10 ml-6 p-1 self-start transition-translate duration-300 ease-in-out transform ${isFocusp||userPass ? 'ml-4  bg-white mb-10 text-xs':''}`}>Enter password</label>
                <input ref={input2} type='password' value={userPass} onChange={(e)=>{handleChange(e,'p')}} className=' relative p-1 border-2 border-gray-500 rounded-lg h-10 w-[22rem]  hover:border-blue-500 focus:border-green-500 transition-colors duration-300 ease-in-out' onFocus={()=>{setIsFocusp(true)}} onBlur={()=>{setIsFocusp(false)}}></input>
                </div> 
                <button type='submit' className='w-28 text-white mt-3 self-center mb-2 bg-blue-700 h-10 rounded-3xl hover:scale-110 transition-colors duration-300 ease-in-out hover:bg-orange-500"' >Login</button>
                <div className='flex text-md text-gray-900 ml-5 self-start'>Don't have an account? <Link className='ml-10 text-blue-800' to="/SignIn">Sign Up</Link></div>   
          </form>
      </div>
    </div>
    </>
  )
}

export default Login
