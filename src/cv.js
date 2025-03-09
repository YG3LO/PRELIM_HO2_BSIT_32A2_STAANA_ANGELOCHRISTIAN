import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CV = () => {
  const handleHobbiesClick = () => {
    alert("My hobbies: Coding, Playing Basketball, Exploring Tech!");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted!");
    event.target.reset();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Mr. Sta Ana CV
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark text-light"
      >
        <h1 className="display-4 fw-bold">Welcome to My CV</h1>
        <p className="lead">
          Hi, I'm Angelo Christian D. Sta Ana, passionate about technology &
          innovation.
        </p>
        <button className="btn btn-warning" onClick={handleHobbiesClick}>
          My Hobbies
        </button>
      </section>

      {/* About Section (Now Dark Mode) */}
      <section id="about" className="py-5 bg-dark text-light">
        <div className="container text-center">
          <h2 className="mb-4">About Me</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-secondary text-light shadow p-4">
                <h3>Education</h3>
                <ul className="list-unstyled">
                  <li>BSIT - Lyceum of Alabang</li>
                  <li>(2022 - Present)</li>
                  <li>STEM Strand - Lyceum of Alabang (2020 - 2022)</li>
                  <li>Muntinlupa National High School </li>
                  <li>(2016 - 2020)</li>
                  <li>Bayanan Elementary School Main (2010 - 2016)</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-secondary text-light shadow p-4">
                <h3>Awards & Achievements</h3>
                <ul className="list-unstyled">
                  <li>Top 5 Academic Performance (2022 - 2023)</li>
                  <li>Basketball Champion (2022 - 2023)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-light text-center">
        <div className="container">
          <h2>Contact Me</h2>
          <form className="w-50 mx-auto mt-4" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning me-2">
              Submit
            </button>
            <button type="reset" className="btn btn-secondary">
              Clear
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2025 My CV | Designed by Mr. Angelo Christian D. Sta Ana</p>
      </footer>
    </div>
  );
};

export default CV;
