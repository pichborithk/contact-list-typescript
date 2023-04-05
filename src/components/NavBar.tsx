import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserData } from '../App';

type NavBarProps = {
  contacts: UserData[];
  setFilterContacts: Dispatch<SetStateAction<UserData[]>>;
};

const NavBar = ({ setFilterContacts, contacts }: NavBarProps) => {
  const [name, setName] = useState<string>('');

  return (
    <nav className='header'>
      <input
        type='text'
        value={name}
        onChange={(event) => {
          const value = event.target.value;
          setName(value);
          setFilterContacts(() => {
            return contacts.filter((contact) => {
              return (
                value === '' ||
                contact.name.toLowerCase().includes(name.toLowerCase())
              );
            });
          });
        }}
      />
      <Link to='/new'>
        <button>New</button>
      </Link>
      <Link to='/'>Contact List</Link>
    </nav>
  );
};

export default NavBar;
