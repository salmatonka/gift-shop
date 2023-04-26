import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ProductCards from "../../Pages/ProductCards/ProductCards/ProductCards";
import Category from "../../Pages/Category/Category/Category";
import Products from "../../Pages/Products/Products/Products";
import AboutPage from "../../Pages/Others/AboutPage/AboutPage";
import ContactPage from "../../Pages/Others/ContactPage/ContactPage";
import BookingPage from "../../Pages/Others/BookingPage/BookingPage";
import Register from "../../Pages/Others/Register/Register";
import Login from "../../Pages/Others/Login/Login";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home/>,  
            },
            {
                path:'/product',
                element:<Products/>,
                loader: () => fetch('https://gift-server-salmatonka.vercel.app/products')
                
            },

            {
                path:'/category/:id',
                element:<Category/>,
                loader: ({params}) => fetch(`https://gift-server-salmatonka.vercel.app/category/${params.id}`)
            } ,

            {
                path:'/product/:id',
                element:<ProductCards/> ,
                loader: ({params}) => fetch(`https://gift-server-salmatonka.vercel.app/products/${params.id}`)
                
            },
            {
                path:'/booking',
                element:<BookingPage/>, 
               
            },
            {
                path:'/booking/:id',
                element:<BookingPage/>, 
                loader: ({params}) => fetch(`https://gift-server-salmatonka.vercel.app/products/${params.id}`) 
            },
            
            {
                path:'/about',
                element:<AboutPage/>,  
            },
            {
                path:'/contact',
                element:<ContactPage/>,  
            },
            {
                path:'/register',
                element:<Register/>,  
            },
            {
                path:'/login',
                element:<Login/>,  
            },
           
        ]

    }
])

export default router;