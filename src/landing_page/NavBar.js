import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import UserProfile from './components/UserProfile';

export default function NavBar() {
  const isAuthenticated = !!localStorage.getItem('userInfo');

  return (
    <>
      <div className='container-fluid m-0 p-0'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home" >Logo</Link>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-evenly gap-5">
                {isAuthenticated ?
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/get-a-demo">Get a Demo</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <UserProfile />
                  </>
                  :
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
