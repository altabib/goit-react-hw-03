
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import { useState } from "react";
import { useEffect } from "react";
import './App.css'

const contactData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
];


function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts-list");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactData;
  });

const [filter, setFilter] = useState("");

useEffect(() => {
    window.localStorage.setItem("contacts-list", JSON.stringify(contacts));
  }, [contacts]);
  

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };
  
  
  const deleteContact = (deleteCont) => { 
    setContacts((prevContacts) => {
      return prevContacts.filter((item) => item.id !== deleteCont);
    });
  };

const filterContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="box">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList user={ filterContacts} onDelete={deleteContact}/>
</div>
  )
}

export default App
