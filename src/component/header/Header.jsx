import React from "react";
import "./Header.css";
import Logo from "../../images/logo.svg";
import MainImg from "../../images/Team-cuate 1.svg";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="logoImg">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="menuBtns">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>
                  {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    WHAT WE DO
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      HIRE EXPERTS
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      COMPANY
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SAY HELLO!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="d-flex align-items-center flex-wrap">
          <div className="col-md-6 pe-5">
            <h1 className="header-title">About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="col-md-6">
            <img src={MainImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
