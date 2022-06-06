import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from '../../redux/phonebook/phonebook-slice';
import Loader from 'components/Loader/Loader';
import styles from './Phonebook.module.css';

function Phonebook() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setPhone(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalazeName = name.toLowerCase();

    const hasName = contacts.find(contact =>
      contact.name.toLowerCase().includes(normalazeName)
    );

    if (name === '') {
      toast.error(`🤕 Please enter a valid name`);
      return;
    }

    if (hasName) {
      toast.warn(`🥺 ${name} is already in contacts.`);
      return;
    }

    addContact({ name, phone });

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nameInputId} className={styles.label}>
        <p className={styles.text}>Name</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={numberInputId} className={styles.label}>
        <p className={styles.text}>Number</p>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces,dashes, parentheses and can start with +"
          required
          id={numberInputId}
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? <Loader /> : 'Add contact'}
      </button>
    </form>
  );
}

Phonebook.propTypes = {
  addContact: PropTypes.func,
};

export default Phonebook;
