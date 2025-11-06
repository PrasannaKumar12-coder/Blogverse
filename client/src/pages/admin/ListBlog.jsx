import React, { useState, useEffect } from "react"
import { BsTrash } from "react-icons/bs"
import axios from 'axios'

const ListBlog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('https://blogverse-2-oqgl.onrender.com/api/blog')
      .then(res => {
        if(res.status === 200){
          setBlogs(res.data.data)
        }
      })
      .catch(err => console.error(err))
  }, [])

  const handleDelete = async (id) => {
  if(window.confirm("Are you sure you want to delete this blog?")){
    try {
      const res = await axios.delete(`/api/blog/${id}`)
      if(res.status === 200){
        setBlogs(blogs.filter(blog => blog._id !== id))
        alert("Blog deleted successfully")
      }
    } catch (err) {
      console.error("Error deleting blog:", err)
      alert("Failed to delete blog")
    }
  }
}

  return (
    <div className="p-4">
      <h2 className="mb-4">Blog List</h2>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Heading</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog._id}</td>
                <td>{blog.heading}</td>
                <td>{blog.category}</td>
                <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBlog
