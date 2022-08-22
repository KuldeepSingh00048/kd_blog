import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const review = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState({
    name:"",
    email:"",
    feedback:""
  })
  const handleChange = e =>{
    const{name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  const submit =()=>{
    const {name,email,feedback} = user
    if(name && email &&feedback){
      alert("posted")
      axios.post("https://kd-blog-server.herokuapp.com/submit", user)
      .then(res => alert(res.data.message))
      navigate('/')
    }
    else{
      alert("invalid")
    }
  }
  return (
    <section className='Rmiddle'>
           {console.log("user",user)}
       <div className='Review'>
           <h1> Rate this Blog after seeing the actual Jharkhand,</h1>
           <br/>
           <br/>
           <form className='form'>
                <div className='feedback'>
                   <input name="name" id="search"  type='text'
                      placeholder="Enter your Name" 
                      value={user.name}
                      onChange={handleChange}
                    />

                   <input name="email" id="search" type='email' 
                      placeholder="Enter your E-Mail" 
                      value={user.email}
                      onChange={handleChange}
                    />

                   <textarea className='content' name="feedback" id="search" rows={8} type='feedback'
                      placeholder="Plzz Write Your Feedback " 
                      value={user.feedback}
                      onChange={handleChange}              
                    />
                   <input onClick={submit} type='submit' className='button'/>
                   {/* < input type='reset' className='button' /> */}
                </div>
           </form>      
       </div>
    </section>
  )
}

export default review