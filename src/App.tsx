import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import './scss/main.scss';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Edit from './components/Edit';
import ContactForm from './components/ContactForm';

const API_URL = `${import.meta.env.VITE_API_URL}`;

type UserData = {
  id: number;
} & ContactData;

type ContactData = {
  name: string;
  email: string;
  phone: string;
  address: AddressData;
  company: { name: string };
};

type AddressData = {
  city: string;
  street: string;
  suite: string;
};

function App() {
  const [contacts, setContacts] = useState<UserData[]>([]);
  const [filerContacts, setFilterContacts] = useState<UserData[]>([]);
  const navigate = useNavigate();

  async function getContacts() {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setContacts(result);
      setFilterContacts(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  async function addNewContact(data: ContactData) {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await getContacts();
    } catch (error) {
      console.error(error);
    }
    navigate('/');
  }

  return (
    <>
      <NavBar setFilterContacts={setFilterContacts} contacts={contacts} />
      <main>
        <SideBar contacts={filerContacts} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/new'
            element={<ContactForm onSubmit={addNewContact} />}
          />
          <Route path='/:id'>
            <Route index element={<Contact contacts={contacts} />} />
            <Route path='edit' element={<Edit />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
export type { ContactData, UserData };
