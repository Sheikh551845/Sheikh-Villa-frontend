import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Components/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <QueryClientProvider client={queryClient}>
 <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </div>
    </QueryClientProvider>
    </AuthProvider>

 
  </React.StrictMode>,
)
