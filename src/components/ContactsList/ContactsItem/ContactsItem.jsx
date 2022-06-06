import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { useDeleteContactMutation } from '../../../redux/phonebook/phonebook-slice';
import styles from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <span className={styles.decoration}></span>
        <p className={styles.text}>
          {name}: <span className={styles.number}>{number}</span>
        </p>
      </div>
      <button
        className={styles.button}
        disabled={isDeleting}
        type="Submit"
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? <Loader /> : 'Delete'}
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
