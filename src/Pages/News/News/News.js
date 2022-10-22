import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const News = () => {
   const singleNews = useLoaderData()
   const { title, _id, image_url, author, rating, total_view, details } =
     singleNews;
   return (
     <div>
       <h1>News</h1>
       <CardGroup>
         <Card>
           <Card.Img variant="top" src={image_url} />
           <Card.Body>
             <Card.Title>{title}</Card.Title>
             <Card.Text>{details}</Card.Text>
           </Card.Body>
           <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
           </Card.Footer>
         </Card>
       </CardGroup>
     </div>
   );
};

export default News;