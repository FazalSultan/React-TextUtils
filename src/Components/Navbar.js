import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.Te}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">About</a>
            </li>
          </ul>
          <form className="d-flex search-bar" role="search" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          
        </div>
        <li className="nav-item dark-mode-btn">
            <FontAwesomeIcon icon={faCircleHalfStroke}/>
          </li>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  Te: PropTypes.string.isRequired,
  Home: PropTypes.string,
  About: PropTypes.string
};


Navbar.defaultProps = {
  Te: "Enter Name",
  Home: "Enter Something About Home",
  About: "Enter Something About"
};
