import React, { useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const categories = ["All", "Technology", "Startup", "Lifestyle", "Finance"];
  const [blogData, setBlogData] = useState({
    heading: "",
    subHeading: "",
    img: "",
    keyHighlights: "",
    category: "All",
    blogContent: "",
    moreDetails: "",
    summary: "",
    conclusion: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    try {
      const res = await axios.post("https://blogverse-2-oqgl.onrender.com/api/blog", blogData);
      if (res.status === 201) {
        alert("Blog added successfully");
        setBlogData({
          heading: "",
          subHeading: "",
          img: "",
          keyHighlights: "",
          category: "All",
          blogContent: "",
          moreDetails: "",
          summary: "",
          conclusion: "",
        });
      }
    } catch (err) {
      console.log("Error in adding blog:", err);
    }
  };

  return (
    <div className="container-fluid p-xs-0 p-md-3">
      <div className="row">
        {/* Main form column */}
        <div className="col-lg-9 col-md-8">
          <h2 className="mb-4">Add New Blog</h2>
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Blog Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    value={blogData.heading}
                    placeholder="Enter heading of blog"
                    onChange={(e) => setBlogData({ ...blogData, heading: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Sub Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    value={blogData.subHeading}
                    placeholder="Enter sub heading of blog"
                    onChange={(e) => setBlogData({ ...blogData, subHeading: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    value={blogData.img}
                    placeholder="https://imageexample.com"
                    onChange={(e) => setBlogData({ ...blogData, img: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Key Highlights</label>
                  <textarea
                    className="form-control"
                    value={blogData.keyHighlights}
                    placeholder={`Highlight 1 \nHighlight 2 \nHighlight 3`}
                    onChange={(e) => setBlogData({ ...blogData, keyHighlights: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={blogData.category}
                    onChange={(e) => setBlogData({ ...blogData, category: e.target.value })}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Blog Content</label>
                  <textarea
                    className="form-control"
                    value={blogData.blogContent}
                    placeholder="Enter Main content of Blog"
                    onChange={(e) => setBlogData({ ...blogData, blogContent: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Additional Details</label>
                  <textarea
                    className="form-control"
                    value={blogData.moreDetails}
                    placeholder="Give 1 or 2 lines of content"
                    onChange={(e) => setBlogData({ ...blogData, moreDetails: e.target.value })}
                    rows={2}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Summary</label>
                  <input
                    type="text"
                    className="form-control"
                    value={blogData.summary}
                    placeholder="summary of blog"
                    onChange={(e) => setBlogData({ ...blogData, summary: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Conclusion</label>
                  <textarea
                    className="form-control"
                    value={blogData.conclusion}
                    placeholder="conclusion of blog"
                    onChange={(e) => setBlogData({ ...blogData, conclusion: e.target.value })}
                    rows={2}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary px-4">
                Submit Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
