import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const BloList = () => {
  const [blogsCard, setBlogsCard] = useState([])
  const [menu, setMenu] = useState('All')
  const navigate = useNavigate()

  const BlogItems = ["All", "Technology", "Startup", "Lifestyle", "Finance"]

  const TruncateTextHeading = ({ text }) => {
    const words = text.split(" ")
    const truncated = words.length > 11 ? words.slice(0, 11).join(" ") + "..." : text
    return <p>{truncated}</p>
  }

 useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get('/api/blog')
      setBlogsCard(Array.isArray(res.data?.data) ? res.data.data : [])
    } catch (err) {
      console.error(err)
      setBlogsCard([]) // fallback to empty array
    }
  }
  fetchBlogs()
}, []) // empty dependency array


  // filter safely
  const filteredBlogs = Array.isArray(blogsCard)
    ? blogsCard.filter(blog => menu === "All" ? true : blog.category === menu)
    : []

  return (
    <>
      {/* categories */}
      <div className='d-flex justify-content-center gap-2 gap-sm-4 gap-md-4 gap-lg-4 py-3' style={{ cursor: "pointer" }}>
        {BlogItems.map(item => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={item}
            onClick={() => setMenu(item)}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`fs-6 fs-sm-5 fs-md-4 fs-lg-3 rounded-5 border-0 py-0 py-sm-1 px-3 ${menu === item ? 'text-white bg-primary' : ''}`}
          >
            {item}
            <motion.div
              layoutId='underline'
              transition={{ type: 'spring', stiffness: 500, damping: 300 }}
            />
          </motion.button>
        ))}
      </div>

      {/* card details */}
      <div className="container-lg my-4">
        <div className="row g-4">
          {filteredBlogs.map(blog => (
            <div key={blog._id} onClick={() => navigate(`/blog/${blog._id}`)} className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 rounded-4 shadow-sm border-0 overflow-hidden">
                <img
                  src={blog.img}
                  className="card-img-top rounded-top-4"
                  alt={blog.heading}
                  onError={(e) => {
                    e.target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
                  }}
                  style={{ height: "200px", objectFit: "cover", transition: "transform 0.3s" }}
                />
                <div className="card-body">
                  <p
                    style={{
                      fontSize: "0.75rem",
                      backgroundColor: "#d0e7ff",
                      display: "inline-block",
                      borderRadius: "50px",
                      padding: "3px 8px",
                      color: "#0d6efd",
                      fontWeight: 500,
                      lineHeight: 1,
                      letterSpacing: "0.5px"
                    }}
                  >
                    {blog.category}
                  </p>
                  <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    <TruncateTextHeading text={blog.heading} />
                  </h5>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "0.85rem" }}
                    dangerouslySetInnerHTML={{ __html: blog.subHeading?.slice(0, 100) || '' }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BloList
