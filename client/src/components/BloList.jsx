import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


// home blog list , subscribe form , footer
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

        {/* subscribe form */}
        <div className="container my-5">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-8 col-lg-6">
              {/* Heading */}
              <h2 className="fw-bold mb-2">Never Miss Blog</h2>
              {/* Subheading */}
              <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                Subscribe to get the latest updates and articles directly in your inbox. </p>
              {/* Subscribe Form */}
              <form className="d-flex justify-content-center align-items-center gap-2">
                <input type="email"
                  className="form-control px-3"
                  placeholder="Enter your email"
                  required style={{ maxWidth: "300px" }} />
                <button type="submit"
                  className="btn btn-primary px-4" >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>



      {/* footer */}
      <footer style={{ backgroundColor: "#dcdde0" }}
        className="text-center text-md-start py-5">
        <div className="container">
          {/* Brand */}
          <div className="mb-4">
            <h2 className="fw-bold mb-2">
              <span style={{ color: "#28a745" }}>Blog</span>Verse<span style={{ color: "#28a745" }}>.</span></h2>
            <p className="text-muted mb-0"
              style={{ fontSize: "0.95rem" }}>
              Bringing ideas to life with blogs, insights, and tech updates.
            </p>
          </div>
          <div className="row align-items-center justify-content-center justify-content-md-between mb-4">
            {/* Quick Links */}
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 mb-0">
                <li>
                  <a href="#!" className="text-primary text-decoration-none">Home</a>
                </li>
                <li>
                  <a href="#!" className="text-primary text-decoration-none">Blog</a>
                </li>
                <li>
                  <a href="#!" className="text-primary text-decoration-none">About</a>
                </li>
                <li>
                  <a href="#!" className="text-primary text-decoration-none">Contact</a>
                </li>
              </ul>
            </div>
            {/* Subscribe */}
            <div className="col-12 col-md-6">
              <form className="d-flex justify-content-center justify-content-md-end gap-2">
                <input
                  type="email"
                  className="form-control px-3"
                  placeholder="Enter your email"
                  style={{ maxWidth: "250px" }} />
                <button className="btn btn-primary px-4">Subscribe</button>
              </form>
            </div>
          </div>
          {/* Bottom Text */}
          <div className="text-center text-muted"
            style={{ fontSize: "0.8rem" }}>
            &copy; {new Date().getFullYear()} BuildVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default BloList
