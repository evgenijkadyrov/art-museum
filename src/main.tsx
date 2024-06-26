import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { Home } from '@/pages/home'
import { Info } from '@/pages/info'
import { FavoritesPage } from '@/pages/favorites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Info />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} />
    <GlobalStyles />
  </>
  // </React.StrictMode>
)
