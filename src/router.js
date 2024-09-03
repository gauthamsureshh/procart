import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductDetailsPage from "./Components/productDetailsPage";
import Shoppingcart from "./Components/shoppingCart";
import CheckoutPage from "./Components/checkoutPage";

const router = createBrowserRouter([
    {path:'', element: <App/>},
    {path:'productdetails/:productid', element:<ProductDetailsPage/>},
    {path:'shoppingcart', element:<Shoppingcart/>},
    {path:'checkout', element:<CheckoutPage/>}
])

export default router;