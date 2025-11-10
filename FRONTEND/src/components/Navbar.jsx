import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// components/Navbar.jsx
export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
console.log("Auth Status: ",auth.isLoggedIn);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Shortly</h1>
        <ul className="flex gap-6 text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          {/* <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li> */}
          { auth.isLoggedIn ? (
            <button onClick={() => dispatch(logout())} className="hover:text-blue-600">Logout</button>
          ) : (
            <>
            <Link to="/login" className="...">Login</Link>
            <Link to="/signup" className="...">Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
