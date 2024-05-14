import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Product from './components/Product.jsx'
import CreateForm from './components/CreateForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import Backend from './components/Backend.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';



const routeur = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    // errorElement: <Erreur />
  },
  {
    path:"/products/:id",
    element: <Product />,
    // errorElement: <Erreur />
  },
  {
    path:"/create",
    element: <CreateForm />,
    // errorElement: <Erreur />
  },
  {
    path:"/update/:id",
    element: <UpdateForm />,
    // errorElement: <Erreur />
  },
  {
    path:"/backend",
    element: <Backend />,
    // errorElement: <Erreur />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routeur}/>
  </React.StrictMode>,
)
