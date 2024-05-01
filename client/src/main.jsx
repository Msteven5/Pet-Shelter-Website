import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Error from './pages/Error';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail';
import Animal from './pages/Animal';
import AnimalDetail from './pages/AnimalDetail';
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
      , {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/shop',
        element: <Products />
      },{
        path: '/shop/:id',
        element: <ProductDetail />
      }, {
        path: '/pets',
        element: <Animal />
      }, {
        path: '/pets/:id',
        element: <AnimalDetail />
      }, {
        path: '/admin_only',
        element: <Admin />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
