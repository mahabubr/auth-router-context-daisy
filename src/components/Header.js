import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                alert('log out successful')
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>{user.email}</span>}
                {
                    user?.email
                    ?
                    <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
                    :
                    <Link to='/login' className="btn btn-sm">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Header;