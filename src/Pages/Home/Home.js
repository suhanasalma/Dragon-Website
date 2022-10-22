import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsDisplay from '../Shared/AllNewsDisplay/AllNewsDisplay';

const Home = () => {
   const allNews = useLoaderData()
   return (
      <div>
         {
            allNews.map(news=><AllNewsDisplay key={news.__id} news = {news}></AllNewsDisplay>)
         }
      </div>
   );
};

export default Home;