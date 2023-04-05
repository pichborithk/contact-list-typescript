import { Navigate, useParams } from 'react-router-dom';
import { ContactData } from '../App';
import { useMemo } from 'react';

type ContactProps = {
  contacts: ContactData[];
};

const Contact = ({ contacts }: ContactProps) => {
  const { id } = useParams();
  const [selectedContact] = useMemo<ContactData[]>(() => {
    return contacts.filter((contact) => contact.id === Number(id));
  }, [id]);

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
      </div>
    </div>
  );
};

export default Contact;
