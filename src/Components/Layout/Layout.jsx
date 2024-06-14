
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-brand">Libreria</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/libros" className="nav-link">Libros</Link>
          </li>
        </ul>
      </nav>
      <main className="content">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
