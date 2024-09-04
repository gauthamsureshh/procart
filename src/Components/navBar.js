import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a href='/' className="navbar-brand" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Procart</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <Link to={'shoppingcart'} className="btn  my-2 my-sm-0" type="button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </form>
        </nav>
    );
}

export default NavBar;
