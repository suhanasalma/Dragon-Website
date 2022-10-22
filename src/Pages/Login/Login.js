import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Context/ContextProvide';
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";


  
  const { logIn, setLoading } = useContext(AuthContext);
  const signIn =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        form.reset()
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("your email is not varified");
        }
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
      .finally(()=>{
        setLoading(false)
      })

  }
   return (
     <div>
       <h1 className="text-center">Login</h1>
       <div>
         <Form onSubmit={signIn}>
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
           <p className='text-danger'>{error}</p>
           <Button variant="primary" type="submit">
             Submit
           </Button>
         </Form>
       </div>
     </div>
   );
};

export default Login;