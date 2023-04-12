import './App.scss'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Views/Home';
import AddCard from './Views/AddCard';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/addcard',
    element: <AddCard />
  }
])

function App() {


  return (
    <div className="App">
      <RouterProvider router = { router } />
    </div>
  )
}

export default App
