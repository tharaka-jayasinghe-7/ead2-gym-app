import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <NavLink to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </NavLink>

            <div className="nav-list">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </NavLink>
              <NavLink
                to="/members"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-users nav-link-icon"></i>
                <span className="nav-link-name">Members</span>
              </NavLink>
              <NavLink
                to="/trainers"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-user nav-link-icon"></i>
                <span className="nav-link-name">Trainers</span>
              </NavLink>
              <NavLink
                to="/schedule"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-clipboard-list nav-link-icon"></i>
                <span className="nav-link-name">Schedule</span>
              </NavLink>
              <NavLink
                to="/exercise"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-solid fa-dumbbell nav-link-icon"></i>
                <span className="nav-link-name">Exercises</span>
              </NavLink>
            </div>
          </div>

          <NavLink to="/logout" className="nav-link" activeClassName="active">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </NavLink>
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
