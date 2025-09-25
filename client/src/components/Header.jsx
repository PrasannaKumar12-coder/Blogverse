
import React from "react";

const Header = () => {
    return (
        <header
            className="d-flex flex-column align-items-center justify-content-center text-center"
            style={{
                minHeight: "60vh",
                width: "100%",
                background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
                padding: "0 1rem",
            }}
        >
            {/* Headings */}
            <h1 className="fw-bold mb-1 hero-heading-1" style={{ margin: 0 }}>
                Transform Your
            </h1>

            <h1
                className="fw-bold mb-2 text-primary hero-heading-2"
                style={{ margin: "0.5rem 0" }}
            >
                Thinking
            </h1>

            <h2
                className="fw-semibold mb-2 hero-subheading"
                style={{ color: "#495057", marginBottom: "0.5rem" }}
            >
                for Success
            </h2>

            <p
                className="text-muted mb-4 hero-text"
                style={{ maxWidth: 700, marginBottom: "2.5rem" }}
            >
                Learn and apply insights from the world’s leading minds in technology and
                innovation
            </p>

            {/* Search Bar - responsive using Bootstrap utilities */}
            <div
                className="search-container d-flex  flex-sm-row align-items-center w-100"
                style={{
                    maxWidth: "600px",
                    background: "white",
                    borderRadius: "50px",
                    padding: "6px 10px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    transition: "box-shadow .25s ease, transform .15s ease",
                }}
            >
                {/* Input fills remaining space */}
                <input
                    type="search"
                    aria-label="Search insights"
                    placeholder="Search for insights..."
                    className="form-control mb-2 mb-sm-0"
                    style={{
                        border: "none",
                        outline: "none",
                        borderRadius: "50px",
                        padding: "0 20px",
                        height: "50px",
                        fontSize: "1rem",
                        flex: 1, // This makes the input occupy remaining space
                    }}
                />

                {/* Button keeps its natural size */}
                <button
                    type="button"
                    className="btn btn-primary ms-sm-2"
                    style={{
                        borderRadius: "50px",
                        height: "50px",
                        padding: "0 25px",
                        fontWeight: 500,
                        flex: "none", // Prevents button from stretching
                    }}
                    onClick={() => console.log("Search clicked")}
                >
                    Search
                </button>
            </div>
            
            


            {/* Inline responsive CSS (Bootstrap handles layout; these tweak typography + focus effect) */}
            <style>{`
        /* Desktop sizes (default) */
        .hero-heading-1 { font-size: 3rem; }
        .hero-heading-2 { font-size: 3.5rem; }
        .hero-subheading { font-size: 1.5rem; }
        .hero-text { font-size: 1.1rem; }

        /* Focus-within: highlight whole search container on input focus */
        .search-container:focus-within {
          box-shadow: 0 0 0 4px rgba(13,110,253,0.12), 0 8px 30px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        /* Tablet */
        @media (max-width: 992px) {
          .hero-heading-1 { font-size: 2.4rem; }
          .hero-heading-2 { font-size: 2.9rem; }
          .hero-subheading { font-size: 1.3rem; }
          .hero-text { font-size: 1rem; }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .hero-heading-1 { font-size: 1.8rem; }
          .hero-heading-2 { font-size: 2.2rem; }
          .hero-subheading { font-size: 1.05rem; }
          .hero-text { font-size: 0.95rem; }
          .search-container { padding: 10px; border-radius: 36px; }
          .search-container input, .search-container button { height: 44px; }
        }
      `}</style>
        </header>
    );
};

export default Header;




