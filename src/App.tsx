import { useEffect, useMemo, useState } from 'react';
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

type ContactsData = {
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
  const [contacts, setContacts] = useState<ContactsData[]>([]);

  async function getContacts() {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      console.log(result);
      setContacts(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <SideBar contacts={contacts} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id'>
            <Route index element={<Contact />} />
            <Route path='edit' element={<Edit />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
export type { Name };
