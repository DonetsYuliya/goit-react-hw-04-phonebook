import css from './style.module.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import PhonebookForm from './PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts ? contacts : [];
  });

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const addNewContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...prevContacts];
    });
    return true;
  };

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return result;
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const contact = getFilteredContacts();

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <PhonebookForm onSubmit={addNewContact} />
      <h2 className={css.title}>Contacts</h2>
      <ContactsFilter handleFilter={handleFilter} />
      <ContactsList contact={contact} removeContact={removeContact} />;
    </div>
  );
};

export default App;

App.defaultProps = { contacts: [] };
