import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './Container/Container';
import ContactsList from './ContactsList/ContactsList';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Phonebook />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />

      <ToastContainer position="top-center" autoClose={3000} />
    </Container>
  );
}

export default App;
