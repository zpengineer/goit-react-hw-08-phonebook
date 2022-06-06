import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from '../../redux/phonebook/phonebook-slice';
import ContactsItem from './ContactsItem/ContactsItem';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const getFilterValue = useSelector(state => state.filter);
  const { data: contacts, isSuccess } = useFetchContactsQuery();

  if (!isSuccess) {
    return;
  }

  const getVisibleContacts = (AllContacts, filter) => {
    const normalazeFilter = filter.toLowerCase();

    return AllContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalazeFilter)
    );
  };

  const filteredContactsList = getVisibleContacts(contacts, getFilterValue);

  return (
    <>
      {contacts && (
        <ul className={styles.list}>
          {filteredContactsList.map(({ id, name, phone }) => (
            <ContactsItem key={id} name={name} number={phone} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
