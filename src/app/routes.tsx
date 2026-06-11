import { createBrowserRouter } from 'react-router'
import App from '@/App'
import { Home } from '@/app/pages/Home'
import { Services } from '@/app/pages/Services'
import { Pricing } from '@/app/pages/Pricing'
import { Contact } from '@/app/pages/Contact'
import { NotFound } from '@/app/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
