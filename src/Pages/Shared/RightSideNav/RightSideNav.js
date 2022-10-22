import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaDiscord,
  FaRegNewspaper
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from '../../../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/ContextProvide';
import { useNavigate } from "react-router-dom";



const RightSideNav = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate();


  const signInGoogle = ()=>{
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user)
        navigate("/");
      })
      .catch((error) => {
        console.error(error)
      });
    
  }


   return (
     <div>
       <ButtonGroup vertical>
         <Button
           onClick={signInGoogle}
           className="mb-3"
           variant="outline-primary"
         >
           <FaGoogle /> Login via Google
         </Button>
         <Button className="mb-5" variant="outline-dark">
           <FaGithub /> Login via Git
         </Button>
       </ButtonGroup>
       <div className="mb-5">
         <h5>FInd Us On</h5>
         <ListGroup>
           <ListGroup.Item variant="primary">
             <FaFacebook /> FaceBook
           </ListGroup.Item>
           <ListGroup.Item action variant="secondary">
             <FaYoutube /> YouTube
           </ListGroup.Item>
           <ListGroup.Item action variant="success">
             <FaTwitter /> Twitter
           </ListGroup.Item>
           <ListGroup.Item action variant="danger">
             <FaWhatsapp /> WhatsApp
           </ListGroup.Item>
           <ListGroup.Item action variant="warning">
             <FaDiscord /> Discord
           </ListGroup.Item>
           <ListGroup.Item action variant="info">
             <FaTwitch /> Privacy Policy
           </ListGroup.Item>
           <ListGroup.Item action variant="light">
             <FaRegNewspaper /> Terms & Condition
           </ListGroup.Item>
         </ListGroup>
       </div>
       <div>
         <BrandCarousel></BrandCarousel>
       </div>
     </div>
   );
};

export default RightSideNav;