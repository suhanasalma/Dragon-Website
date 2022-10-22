import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Context/ContextProvide';
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Registration = () => {
  const [error,setError] = useState('')
  const [terms, setTerms] = useState(false)

  const { createUserEmailPass, updateUser, emailVerification } =
    useContext(AuthContext);
   const navigate = useNavigate();

  const signUpEmailandPassword = (e)=>{
    e.preventDefault();
    const form  = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name,email,password)
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
         setError('Please Provide minimum two uppercase word')
         return

      }
      if(!/(?=.[0-9])/.test(password)){
         setError('please provide minimum one letter')
         return
      }
      if(!/(?=.*[!@#$&*])/.test(password)){
         setError('plase provide minimum one special cherecter')
         return

      }
      setError("");

    createUserEmailPass(email,password)
    .then(result=>{
      const user = result.user;
      setError("");
      console.log(user)
      updateUserProfile(name)
       
      form.reset()
      emailVarified()
      toast.success('please verify your email')
      // navigate("/");

    })
    .catch(error=>{
      console.error(error)
      setError(error.message)
    })

  }

  const updateUserProfile =(name)=>{
    const profile = {displayName:name}
    updateUser(profile)
      .then(() => {})
      .catch((error) => {});
  }

  const emailVarified = ()=>{
    emailVerification().then(() => {
    });
  }
   return (
     <div>
       <div>
         <h1 className="text-center">Registration</h1>
         <div>
           <Form onSubmit={signUpEmailandPassword}>
             <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" name="name" placeholder="Enter Name" />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                 type="email"
                 name="email"
                 placeholder="Enter email"
               />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control
                 type="password"
                 name="password"
                 placeholder="Password"
               />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check
                 type="checkbox"
                 onClick={()=>setTerms(!terms)}
                 label={<NavLink to="/terms">"Terms & Conditions"</NavLink>}
               />
             </Form.Group>
             <p>{error}</p>
             <Button disabled={!terms} variant="primary" type="submit">
               Submit
             </Button>
           </Form>
         </div>
       </div>
     </div>
   );
};

export default Registration;