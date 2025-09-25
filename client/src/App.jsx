import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Login from './components/admin/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />

        <Route path='/login' element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='listblog' element={<ListBlog />} />
        </Route>

        {/* Catch-all route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
