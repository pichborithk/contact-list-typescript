import { Link } from 'react-router-dom';
import { UserData } from '../App';

type SideBarProps = {
  contacts: UserData[];
};

const SideBar = ({ contacts }: SideBarProps) => {
  return (
    <div className='side-bar'>
      {contacts.map((contact) => (
        <Link to={`/${contact.id}`} key={contact.id}>
          {contact.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
