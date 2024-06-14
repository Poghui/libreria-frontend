import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/libros">Libros</Link></li>

        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
