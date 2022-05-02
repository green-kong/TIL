import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/comment">Comment</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
