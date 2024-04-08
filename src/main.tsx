import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { Home } from '@/pages/home'
import { Info } from '@/pages/info'
import { Favorites } from '@/pages/favorites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/info',
    element: <Info />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
)
