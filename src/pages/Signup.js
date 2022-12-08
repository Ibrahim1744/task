import React, { useState , useEffect } from 'react';
import {BiUser} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {useNavigate } from 'react-router-dom';
import RegisteredSuccessfully from './RegisteredSuccessfully';

const Signup = () => {
  const navigate=useNavigate();
  const initialValues={username:"" , email:"" ,password:"" , repeatPassword:""};
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit , setIsSubmit]=useState(false)
  const [go,setGo]=useState(false)
  const handleChange=(e)=>{
    const {name , value}=e.target;
    setFormValues({...formValues , [name]:value})
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  
    if(go===true)
    {
      fetch("https://goldblv.com/api/hiring/tasks/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
          body:JSON.stringify(formValues)
      }).then((res)=>{
        localStorage.setItem("email", formValues.email)
        alert('Registered Successfully')
        navigate('/success')
      })
    }
    

  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
    
  }, [formErrors]);
  const validate=(values)=>{
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="Username is required !"
    }
    
    else if(values.username.length < 5){
      errors.username="Enter 5 characters at least"

    }
    else if(values.username.length.length > 15){
      errors.username="username should be less than 15 characters"

    }
    if(!values.email){
      errors.email="Email is required !"
    }
    else if (!regex.test(values.email))
    {
      errors.email="This is not a valid email"

    }
    if(!values.password){
      errors.password="Password is required"
    }
    else if(values.password.length < 8){
      errors.password="Enter 8 characters at least"

    }
    else if(values.password.length > 18){
      errors.password="Password cannot exceed more than 18 charachters"

    }
    if(!values.repeatPassword){
      errors.repeatPassword="Type password again "
    }
    else if(values.password != values.repeatPassword ){
      errors.repeatPassword="Password doesn't match "

    }
    if(formValues.username.length >=5 && formValues.username.length <= 15 &&  formValues.password.length >=8 && formValues.password.length<18 && formValues.password=== formValues.repeatPassword)
    {
      setGo(true)
      console.log(go);
    }
    else{
      console.log('anyyy');
    }
    
    return errors
  }
  return (
    <>
      <div className="signup-parent">
        <div className="signup-img">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="form">
          <h1>Creat Account</h1>
          <p>Go ahead and sign up ,let everyone know how awesome you are!</p>
       <form action="" onSubmit={handleSubmit}>
        <div className="username">
          <BiUser className='icon'/>
        <input type="text" placeholder='Username' name='username' value={formValues.username} onChange={handleChange} />
        <p className='warning'>{formErrors.username}</p>

        </div>
        <div className="username">
          <AiOutlineMail className='icon'/>
        
          <input type="text" placeholder='Email' name='email'   value={formValues.email} onChange={handleChange} />
        <p className='warning'>{formErrors.email}</p>
        
      
        
        </div>
        <div className="username">
          <RiLockPasswordLine className='icon'/>
        <input type="password" placeholder='Password' name='password' value={formValues.password} onChange={handleChange} />
        <p className='warning'>{formErrors.password}</p>

        </div>
        <div className="username">
          <RiLockPasswordLine className='icon'/>
        <input type="password" placeholder='Confirm password' name='repeatPassword' value={formValues.repeatPassword} onChange={handleChange} />
        <p className='warning'>{formErrors.repeatPassword}</p>

        </div>
     
        <button className='create-acc main-btn'>Create Account</button>
       </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
