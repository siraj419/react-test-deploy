import React from 'react'
import Dashboard from './pages/Dashboard'
import Items from './pages/Items'
import ItemDetail from './pages/ItemDetail'
import NotFound from './pages/NotFound'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Layout from './Layout'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Routes with Layout (navbar and footer) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:item_id" element={<ItemDetail />} />
      </Route>

      {/* Routes without Layout */}
      <Route path='/auth'>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App