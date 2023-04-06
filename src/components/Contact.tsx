import { Link, Navigate, useParams } from 'react-router-dom';
import { UserData } from '../App';

type ContactProps = {
  contacts: UserData[];
};

const Contact = ({ contacts }: ContactProps) => {
  const { id } = useParams();

  const [selectedContact] = contacts.filter(
    (contact) => contact.id === Number(id)
  );

  if (!selectedContact) return <Navigate to='/' replace />;

  return (
    <div className='contact'>
      <img src={`https://robohash.org/bgset_bg1/${selectedContact.name}`} />

      <div className='contact-info'>
        <p>
          <strong>Name: </strong>
          {selectedContact.name}
        </p>
        <p>
          <strong>Email: </strong>
          {selectedContact.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {selectedContact.phone}
        </p>
        <p>
          <strong>Address: </strong>
          {selectedContact.address.suite}, {selectedContact.address.street},{' '}
          {selectedContact.address.city}
        </p>
        <p>
          <strong>Company: </strong>
          {selectedContact.company.name}
        </p>

        <div className='buttons'>
          <Link to={`/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link to='/'>
            <button className='delete-btn'>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
