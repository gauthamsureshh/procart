import React from 'react';

function Aboutus() {
    return (
        <nav class="navbar navbar-dark bg-dark justify-content-between">
            <a href='/' className="navbar-brand" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}> Procart </a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <button class="btn btn-outline-danger my-2 my-sm-0">cart</button>
            </form>
        </nav>
    );
}

export default Aboutus;