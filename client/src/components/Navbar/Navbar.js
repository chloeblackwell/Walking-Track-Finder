import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../../store/index';
import { useLoginCheck, logout } from '../../utils/setAuthToken';
import './style.css';

function Navbar() {
    const history = useHistory();
    const [state, dispatch] = useAppContext();

    useLoginCheck(dispatch);

    const handleLogOut = (e) => {
        e.preventDefault();
        logout(dispatch);
        history.push('/');
    };

    const loginRegLink = (
        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1 pink' to='/login'>
                    Login
                    </Link>
            </li>
            <li>
                <Link className='btn btn-sm active pink' to='/register'>
                    Register
                    </Link>
            </li>
        </ul>
    )
    const userLink = (
        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1 pink' to='/'>
                    Home
                    </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1 pink' to='/dashboard'>
                    Dashboard
                    </Link>
            </li>
            <li>
                <button className="btn btn-sm active pink" id="logoutBtn" data-toggle="modal" data-target="#logoutModal" onClick={handleLogOut}>
                    <div>Logout</div>
                </button>
            </li>
        </ul>
    )
    return (
        <nav className='navbar navbar-expand-lg navbar-dark'>
            <Link className="navbar-brand" to="/">
                Walking Track Finder
            </Link>
            <div>
                <div className='d-flex justify-content-end ml-auto' id='navbar1'>
                    {state.isAuthenticated ? userLink : loginRegLink}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;