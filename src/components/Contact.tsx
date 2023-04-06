import { Link, Navigate, useParams } from 'react-router-dom';
import { UserData } from '../App';

type ContactProps = {
  contacts: UserData[];
  onDelete: (id: number) => void;
};

const API_URL = `${import.meta.env.VITE_API_URL}`;

const Contact = ({ contacts, onDelete }: ContactProps) => {
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
          <button
            className='delete-btn'
            onClick={() => onDelete(selectedContact.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
