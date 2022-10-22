import {RouterProvider} from 'react-router-dom';
// import routes from './Routes/Routes/Routes'
import { routes } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
