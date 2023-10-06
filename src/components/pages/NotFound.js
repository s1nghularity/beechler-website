import jazzPlayer from '../../assets/img/404gif.gif';
import '../../styles/NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStore, faHome } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="not-found">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h2>Oops!</h2>
      <h1>404</h1>
      <img src={jazzPlayer} className='jazz-gif' alt="Jazz player" />
      <p>Page Not Found</p>

      <div className="not-found-buttons">
        <Link to="/">
          <button>
            <FontAwesomeIcon icon={faHome} />
            Home
          </button>
        </Link>
        <Link to="/products">
          <button>
            <FontAwesomeIcon icon={faShoppingCart} />
            Products
          </button>
        </Link>
        <Link to="/dealers">
          <button>
            <FontAwesomeIcon icon={faStore} />
            Dealers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
