import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='header'>
      {/* <input type='text' /> */}
      <Link to='/'>Contact List</Link>
    </nav>
  );
};

export default NavBar;
