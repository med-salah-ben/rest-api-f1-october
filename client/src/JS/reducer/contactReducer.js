import {
  GET_CONTACTS_LOAD,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACT,
  EDIT_CONTACT,
} from "../constant/actionsTypes";

const initialState = {
  contacts: [],
  contact: {},
  loadContacts: false,
  errors: [],
  editContact : ""
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, errors: payload, loadContacts: false };
    case GET_CONTACT:
      return { ...state, contact: payload };
    case EDIT_CONTACT:
      return {...state , editContact:payload }
    default:
      return state;
  }
};
