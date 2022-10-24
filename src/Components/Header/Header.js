import { Link } from "react-router-dom";

function Header() {

  const login = localStorage.getItem('login');

  return (
    <header className='link-header'>
      {
        <div>
          <div><Link to="/home">Home</Link></div>
          <div><Link to="/news">News</Link></div>
          <div><Link to="/profile">Profile</Link></div>
          <div>
            {(!login) ? (
              <Link to="/login"> Login</Link>
            ) : (
              <Link to="/logout">Logout</Link>
            )}

          </div>

          <hr></hr>
        </div>
      }

      <hr></hr>

    </header>
  );
};

export default Header;                                                                                                                                                                              