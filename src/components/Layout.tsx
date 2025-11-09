import React from "react";
import { NavLink } from "react-router-dom";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-vh-100 d-flex flex-column bg-page">
      <header className="sticky-top border-bottom navbar-custom">
        <div className="container-fluid py-2">
          <div className="d-flex justify-content-center">
            <NavLink to="/" className="navbar-brand fw-semibold fs-4 mb-1 mb-lg-2">
              Java Snippets
            </NavLink>
          </div>
          <nav className="d-flex justify-content-center">
            <ul className="nav nav-pills gap-2">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/programs" className="nav-link">Programs</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow-1">
        <div className="container-fluid px-3 px-md-4 py-4">{children}</div>
      </main>

      <footer className="border-top bg-white">
        <div className="container-fluid px-3 px-md-4 py-3 text-muted small">
          Built with React + Vite • Bootstrap
        </div>
      </footer>
    </div>
  );
}
