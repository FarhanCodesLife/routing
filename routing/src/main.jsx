import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/home'
import About from './component/About'
import Contect from './component/Contect'
const router = createBrowserRouter([
  {
    path:"",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contect",
        element:<Contect />

      },
      {
        path:"*",
        element:<h1>Not Found!</h1>
      
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(


  <RouterProvider router={router}>
  </RouterProvider>




)
