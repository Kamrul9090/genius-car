import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthProvider';
const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then()
            .catch()
    }
    const menuItem = <>
        <Link className='font-semibold' to='/'>Home</Link>
        {
            user?.email ?
                <>
                    <Link className='font-semibold ml-2' to='/orders'>Orders</Link>
                    <button onClick={handleLogOut} className='btn btn-xs btn-ghost ml-2 font-bold'>Sign Out</button>
                </>
                :
                <Link className='font-semibold ml-2' to='/login'>Login</Link>

        }
    </>
    return (
        <div className="navbar h-12 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Get Stared</button>
            </div>
        </div>
    );
};

export default Header;