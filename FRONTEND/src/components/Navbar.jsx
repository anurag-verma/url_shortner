
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user and token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logout());
    navigate('/');
  };
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Shortly</h1>
        <ul className="flex gap-6 text-gray-600 items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          {/* <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li> */}
          {auth.isLoggedIn ? (
            <>
            <Link to="/dashboard" className="hover:text-blue-600 underline font-bold">{auth.user.name}</Link>
            <button onClick={handleLogout} className="hover:text-blue-600 border border-blue-600 rounded px-3 py-1 ml-2">Logout</button></>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600 border border-blue-600 rounded px-3 py-1">Login</Link>
              <Link to="/signup" className="hover:text-blue-600 border border-blue-600 rounded px-3 py-1">Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
