import {
  ContactList,
  ContactText,
  Contact,
  ButtonDelete,
} from './ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'components/redux/actions';
import { getStateFilter, getStateContacts } from 'components/redux/selectors';

const ContactsList = () => {
  const { contacts } = useSelector(getStateContacts);
  const { filter } = useSelector(getStateFilter);

  const dispatch = useDispatch();

  function getContactSearch(arr, value) {
    console.log(arr);
    return arr.filter(contact => contact.name.toLowerCase().includes(value));
  }

  const visableContacts = getContactSearch(contacts, filter);

  return (
    <ContactList>
      {visableContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <FaUserAlt />
          <ContactText>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
          </ContactText>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            <FaRegTrashAlt />
          </ButtonDelete>
        </Contact>
      ))}
    </ContactList>
  );
};

export default ContactsList;
