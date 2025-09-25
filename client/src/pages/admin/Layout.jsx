import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { BsArrowRightShort, BsGrid, BsPlusCircle, BsListUl, BsChat, BsBoxArrowRight } from "react-icons/bs"

const Layout = () => {
  const navigate = useNavigate()

  const Logout = () => {
   localStorage.clear();
    navigate('/')
  }
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-fluid">
          {/* Brand Logo */}
          <div className="navbar-brand" style={{ cursor: "pointer" }}>
            <h3
              onClick={() => navigate('/')}
              className="mb-0 fw-bold"
              style={{ color: "#333" }}
            >
              <span style={{ color: "#28a745" }}>Blog</span>Verse
              <span style={{ color: "#28a745" }}>.</span>
            </h3>
          </div>

          {/* Logout Button */}
          <div className="d-flex align-items-center">
            <button
              onClick={Logout}
              className="btn btn-outline-primary d-flex align-items-center"
              style={{
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "500",
                fontSize: "14px",
                borderWidth: "2px"
              }}
              type="button"
            >
              <BsBoxArrowRight className="me-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="d-flex" style={{ minHeight: "calc(100vh - 80px)" }}>
        {/* Sidebar */}
        <div
          className="bg-white shadow-sm border-end"
          style={{ width: "260px", minHeight: "100%" }}
        >
          <div className="p-4">
            {/* Sidebar Header */}
            <div className="text-center mb-4">
              <div
                className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <BsGrid className="text-white" size={24} />
              </div>
              <h5 className="text-dark mb-1">Admin Panel</h5>
              <small className="text-muted">Welcome Back!</small>
            </div>

            {/* Navigation Menu */}
            <nav className="mt-4">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink
                    to="dashboard"
                    end
                    className={({ isActive }) =>
                      `d-flex align-items-center p-3 text-decoration-none rounded ${isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-dark hover-bg-light"
                      }`
                    }
                  >
                    <BsGrid className="me-3" size={18} />
                    <span className="fw-medium">Dashboard</span>
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink
                    to="addblog"
                    className={({ isActive }) =>
                      `d-flex align-items-center p-3 text-decoration-none rounded ${isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-dark hover-bg-light"
                      }`
                    }
                  >
                    <BsPlusCircle className="me-3" size={18} />
                    <span className="fw-medium">Add Blog</span>
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink
                    to="/admin/listblog"
                    className={({ isActive }) =>
                      `d-flex align-items-center p-3 text-decoration-none rounded ${isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-dark hover-bg-light"
                      }`
                    }
                  >
                    <BsListUl className="me-3" size={18} />
                    <span className="fw-medium">Blog List</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow-1 bg-light">
          <div className="container-fluid p-4">
            <div
              className="bg-white rounded-3 shadow-sm p-4"
              style={{ minHeight: "calc(100vh - 120px)" }}
            >
              <Outlet /> {/* Nested routes render here */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style>
        {`
          .hover-bg-light:hover {
            background-color: #f8f9fa !important;
            transition: all 0.3s ease;
          }
          .navbar-brand h3 {
            transition: transform 0.2s ease;
          }
          .navbar-brand h3:hover {
            transform: scale(1.05);
          }
          .btn-outline-primary {
            transition: all 0.3s ease;
          }
          .btn-outline-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0,123,255,0.3);
          }
          .rounded {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </>
  )
}

export default Layout