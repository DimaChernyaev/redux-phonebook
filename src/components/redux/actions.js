import { nanoid } from 'nanoid';

export const addTask = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), name, number },
  };
};

export const deleteContacts = id => {
  return { type: 'contacts/deleteContact', payload: id };
};

export const setFilter = values => {
  return { type: 'filter/setFilter', payload: values };
};
