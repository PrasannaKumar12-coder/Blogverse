import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "" 
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock authentication
    const validCredentials = [
      { email: "admin@example.com", password: "admin123" },
      { email: "user@example.com", password: "user123" }
    ];

    const isValid = validCredentials.some(
      cred => cred.email === formData.email && cred.password === formData.password
    );

    if (isValid) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", formData.email);
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Admin Login</h2>
          <p>Enter your credentials to continue</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              disabled={isLoading}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              disabled={isLoading}
              className="form-input"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgot" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8f9fa;
          padding: 20px;
        }

        .login-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-header h2 {
          margin: 0 0 0.5rem 0;
          color: #333;
          font-weight: 600;
        }

        .login-header p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        .error-message {
          background-color: #fee;
          color: #c33;
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          border-left: 3px solid #c33;
        }

        .login-form {
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #007bff;
        }

        .form-input:disabled {
          background-color: #f8f9fa;
          opacity: 0.7;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          cursor: pointer;
        }

        .forgot-link {
          color: #007bff;
          text-decoration: none;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .login-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .login-button:hover:not(:disabled) {
          background-color: #0056b3;
        }

        .login-button:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
        }

        .demo-credentials {
          background-color: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .demo-credentials p {
          margin: 0 0 0.5rem 0;
          color: #666;
          font-weight: 500;
        }

        .credential-pair {
          margin-bottom: 0.25rem;
          color: #888;
        }

        .credential-pair:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default Login;