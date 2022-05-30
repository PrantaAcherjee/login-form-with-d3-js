import React, { useState,useEffect } from 'react';
import Chart from '../chart/Chart';
import './Login.scss';

const Login = () => {
  const [login,setLogin]=useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)

  const handleOnChange=e=>{
   const field=e.target.name;
   const value=e.target.value;
   const newLoginData={...login,};
   newLoginData[field]=value;
   setLogin(newLoginData);
  }
  const handleOnSubmit=e=>{
    if (login.password !== login.password2) {
      alert('Your password did not match');
      return
  }
  setFormErrors(validate(login));
  setIsSubmit(true);
   e.preventDefault()
  //  console.log(login)
  }

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(login);
    }
  }, [formErrors,isSubmit,login]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.number) {
      errors.number = "Number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
   <>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
         <Chart></Chart>
      ) : (
       
        <div>
          <h2 style={{textAlign:'center'}}>Create an account</h2>
          <div className='form-container'>
          <form onSubmit={handleOnSubmit} className='form-style'>
              <label htmlFor="">Your Email address</label>
              <input  onChange={handleOnChange} value={login.email} type="email" name='email' />
              <p>{formErrors.email}</p>
    
              <label htmlFor="">Your password</label>    
              <input  onChange={handleOnChange} value={login.password} type="password" name='password' />
              <p>{formErrors.password}</p>
    
              <label htmlFor="">Confirm Your password</label>    
              <input  onChange={handleOnChange} value={login.password2} type="password" name='password2' />
              <p>{formErrors.password}</p>

              <label htmlFor="">Your fullname</label>    
              <input  onChange={handleOnChange} value={login.name} type="text" name='name' />
              <p>{formErrors.name}</p>
    
              <label htmlFor="">Your mobile number</label>    
              <input  onChange={handleOnChange} value={login.number} type="number" name='number'/>
              <p>{formErrors.number}</p>
              <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}} >

              <div><input onClick={handleClick} checked={checked} type="checkbox" /></div>

              <div style={{paddingLeft:'0.5rem'}}>I read and agree with terms and conditions</div>
              </div>
             {
               checked?<button type='submit' style={{background:'darkcyan',color:'white'}}>Create an account</button>:
               <button type='submit' disabled style={{background:'cyan',color:'white'}}>Create an account</button> 
             }
              
            
            
          </form>
              
        </div>
        </div>
      )}
   
    </> 
  )
}

export default Login