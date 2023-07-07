import { combineReducers } from 'redux';

const initialStateContacts = {
  contacts: [],
};

const initialStateFilter = {
  filter: '',
};

const contactsReducer = (state = initialStateContacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleteContact':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const filterReducer = (state = initialStateFilter, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return { filter: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
