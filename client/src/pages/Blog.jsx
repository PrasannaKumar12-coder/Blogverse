import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"



// individual blog through id 
const Blog = () => {
  const { id } = useParams()
  const [blogDetails, setBlogDetails] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5173/api/blog/${id}`)
      .then(res => {
        if (res.status === 200) {
          setBlogDetails(res.data)
          console.log(res.data)
        }
      })
      .catch(err => {
        console.log('error have in ', err)
      })


    // const BlogFullInfo = BlogsInfo.find((blog) => blog._id === (id))
  }, [id])

  if (!blogDetails) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="ms-3">Loading...</h3>
      </div>
    )
  }

  return (
    <div className="container my-5">
      {/* Back Button */}
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-primary">
          <i className="bi bi-arrow-left me-2"></i>Back to Blogs
        </Link>
      </div>

      {/* Blog Content */}
      <article className="row justify-content-center align-items-center">
        <div className="col-lg-10 col-xl-8">
          {/* Blog Header */}
          <header className="text-center mb-4">
            <span className="badge bg-primary mb-3">{blogDetails.category}</span>
            <h1 className="display-5 fw-bold text-dark mb-3">{blogDetails?.heading}</h1>
            <p className="lead text-muted">{blogDetails?.subHeading}</p>
            <hr className="w-25 mx-auto my-4" />
          </header>

          {/* Featured Image */}
          <div className="mb-5">
            <img
              src={blogDetails?.img}
              className="img-fluid rounded shadow"
              alt={blogDetails?.heading}
              onError={(e) => {
                e.target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }}
            />
          </div>

          {/* Blog Content */}
          <div className="blog-content">
            <div className="mb-4">
              <p className="fs-5 text-dark">
                {blogDetails?.blogContent}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="h4 text-dark mb-3">Key Highlights</h3>
              <ul className="list-unstyled">
                {blogDetails?.keyHighlights
                  ?.split("\n\n")
                  .map((point, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {point}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-dark">
                {blogDetails?.moreDetails}
              </p>
            </div>

            <blockquote className="blockquote bg-light p-4 rounded border-start border-4 border-primary">
              <p className="mb-0 fst-italic">
                "{blogDetails?.summary}"
              </p>
            </blockquote>

            <div className="mt-4">
              <p className="text-dark">
                {blogDetails?.conclusion}
              </p>
            </div>
          </div>

          {/* Blog Footer */}
          <footer className="mt-5 pt-4 border-top">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>Back to Blogs
              </Link>
              <div className="text-muted small">
                <i className="bi bi-calendar me-1"></i>
                Published recently
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}

export default Blog