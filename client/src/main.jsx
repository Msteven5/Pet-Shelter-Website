import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App'
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products'
import ProductByType from './pages/ProductByType'
import Animal from './pages/Animal';
import AnimalDetail from './pages/AnimalDetail';
import AnimalByType from './pages/AnimalByType'
import Admin from './pages/Admin'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/shop',
        element: <Products />
      }, {
        path: '/shop/:type',
        element: <ProductByType />
      },{
        path: '/pets',
        element: <Animal />
      }, {
        path: '/pets/:type',
        element: <AnimalByType />
      }, {
        path: '/pet/:id',
        element: <AnimalDetail />
      },{
        path: '/profile',
        element: <Profile />
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
