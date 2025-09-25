import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const ResponsiveHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='d-flex justify-content-between align-items-center px-5'
      style={{ width: "100%", height: "70px" }}>
      <div style={{ cursor: "pointer" }}>
        <h3 onClick={() => navigate('/')}
          style={{ color: "#333", fontWeight: "bold" }}>
          <span style={{ color: "#28a745" }}>Blog</span>Verse<span style={{ color: "#28a745" }}>.</span></h3>
      </div>
      <div >
        <button

          onClick={() => navigate('/login')}
          className='btn btn-primary'
          style={{ borderRadius: "50px", height: "40px", width: "130px", fontWeight: "500", fontSize: "15px" }}
          type='button'
        >Login &nbsp;
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            < BsArrowRightShort /></span>
        </button>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
