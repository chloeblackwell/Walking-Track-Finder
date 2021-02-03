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
                <Link className='btn btn-sm active mr-1 mb-1' to='/login'>
                    Login
                    </Link>
            </li>
            <li>
                <Link className='btn btn-sm active' to='/register'>
                    Register
                    </Link>
            </li>
        </ul>
    )
    const userLink = (
        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/'>
                    Home
                    </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/dashboard'>
                    Dashboard
                    </Link>
            </li>
            <li>
                {/* <a href="/" rel='noopener noreferrer' onClick={this.logOut.bind(this)}>
                        Logout
                    </a> */}
                <button className="btn btn-sm active" id="logoutBtn" data-toggle="modal" data-target="#logoutModal" onClick={handleLogOut}>
                    <div>Logout</div>
                </button>
            </li>
        </ul>
    )
    return (
        <nav className='navbar navbar-expand-lg'>
            <Link className="navbar-brand" to="/">
                Walking Track Finder
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div>
                <div className='d-flex justify-content-end ml-auto' id='navbar1'>
                    {state.isAuthenticated ? userLink : loginRegLink}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;