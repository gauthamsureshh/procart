import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductDetailsPage from "./Components/productDetailsPage";

const router = createBrowserRouter([
    {path:'', element: <App/>},
    {path:'productdetails/:productid', element:<ProductDetailsPage/>}
])

export default router;