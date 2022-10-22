import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Context/ContextProvide';

const MyAccount = () => {
   const {user} = useContext(AuthContext)
   const [name,setName] = useState(user?.displayName)

   const handleChange = (e)=>{
      e.preventDefault()
      console.log(name)
   }
   const nameChange = (event) =>{
      setName(event.target.value)
   }
   return (
     <div>
       <h1>My Account</h1>
       <Form onSubmit={handleChange}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control
             readOnly
             type="email"
             defaultValue={user?.email}
             placeholder="email"
           />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Your Name</Form.Label>
           <Form.Control
             onChange={nameChange}
             defaultValue={name}
             type="text"
             placeholder="Password"
           />
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
     </div>
   );
};

export default MyAccount;