import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a href='/' className="navbar-brand" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Procart</a>
            <form className="form-inline">
                <Link to={'shoppingcart'} className="btn  my-2 my-sm-0" type="button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </form>
        </nav>
    );
}

export default NavBar;
