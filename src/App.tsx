import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './scss/main.scss';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Edit from './components/Edit';

const API_URL = `${import.meta.env.VITE_API_URL}/`;

type Name = {
  id: number;
  name: string;
};

type ContactData = {
  email: string;
  phone: string;
  address: AddressData;
  company: { name: string };
} & Name;

type AddressData = {
  city: string;
  street: string;
  suite: string;
};

function App() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [filerContacts, setFilterContacts] = useState<ContactData[]>([]);

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

  return (
    <>
      <NavBar setFilterContacts={setFilterContacts} contacts={contacts} />
      <main>
        <SideBar contacts={filerContacts} />
        <Routes>
          <Route path='/' element={<Home />} />
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
export type { ContactData, Name };
