import React, { useState, useEffect } from "react"
import { BsFileText, BsChat, BsPeople, BsCheckCircle, BsEye, BsClock, BsBarChart } from "react-icons/bs"
import { BsPlusCircle, BsListUl } from "react-icons/bs"
import axios from 'axios'

const Dashboard = () => {
  const [count, setCount] = useState(0);

useEffect(() => {
  axios.get("http://localhost:5000/api/blog/count")
    .then(res => {
      console.log(res.data); 
      setCount(res.data.totalBlogs); 
    })
    .catch(err => {
      console.error("Error fetching blog count:", err);
    });
}, []);



  return (
    <div className="p-3">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-2">Welcome back, Admin! 👋</h2>
        <p className="text-muted">Here's what's happening with your blog today.</p>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-5">
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card border-0 shadow-sm h-100 hover-shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fw-bold text-primary">{count}</h3>
                  <p className="text-muted mb-0">Total Blogs</p>
                </div>
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle">
                  <BsFileText className="text-primary" size={24} />
                </div>
              </div>
              <div className="mt-3">
                <span className="badge bg-success bg-opacity-10 text-success">
                  <BsEye className="me-1" /> 500+
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom Styles */}
      <style>
        {`
          .hover-shadow {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
          }
          .card {
            border-radius: 12px;
          }
          .progress {
            border-radius: 10px;
          }
          .btn {
            border-radius: 8px;
            transition: all 0.3s ease;
          }
          .btn:hover {
            transform: translateY(-1px);
          }
        `}
      </style>
    </div>
  )
}

export default Dashboard