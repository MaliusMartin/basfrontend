import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <span className="navbar-brand">Hi Admin</span>
        <Link to="/dashboard" className="link">
        <span ><i className='bi-home-circle'></i>Imperial Innovation</span>
                </Link>
        
        <div className="navbar-nav">
          <div className="nav-item dropdown">
            
            <Link
              to="/bio" 
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <Link to="/bio" className="dropdown-item">
                  Update Password
                </Link>
              </li>
              <li>
                <Link to="/logout" className="dropdown-item">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
