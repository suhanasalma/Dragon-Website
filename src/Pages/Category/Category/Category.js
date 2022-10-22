import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsDisplay from '../../Shared/AllNewsDisplay/AllNewsDisplay';

const Category = () => {
   const categories = useLoaderData()
   console.log(categories)
   return (
     <div>
       {categories.length !== 0 ? (
         <div>
           {categories.map((news) => (
             <AllNewsDisplay news={news}></AllNewsDisplay>
           ))}
         </div>
       ) : (
         <h1 className='text-center'>No news found</h1>
       )}
     </div>
   );
};

export default Category;