import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-3">
  <div className="container">
    <Link className="navbar-brand text-success fw-semibold" href="#">React Restaurant</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'menu'}>Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
