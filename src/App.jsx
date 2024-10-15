import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import SouthIndia from './pages/SouthIndia';
import Domestic from './pages/Domestic';
import International from './pages/International';
import Standard from './pages/Standard';
import Premium from './pages/Premium';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected_route';


const router= createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/SouthIndia",
          element: (
            <ProtectedRoute>
              <SouthIndia />
            </ProtectedRoute>
          )
        },
        {
          path: "/Domestic",
          element:(
            <ProtectedRoute>
           <Domestic />
           </ProtectedRoute>
          )
        },
        {
          path: "/International",
          element:(
            <ProtectedRoute>
              <International />
            </ProtectedRoute>
          )
        },
        {
          path: "/Standard",
          element: (
            <ProtectedRoute>
              <Standard />
            </ProtectedRoute>
          )
         
        },
        {
          path: "/Premium",
          element: (
            <ProtectedRoute>
              <Premium />
            </ProtectedRoute>
          )
        },
      ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
  
}

export default App
