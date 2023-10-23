import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "../ContactCard/ContactCard";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loadContacts = useSelector(
    (state) => state.contactReducer.loadContacts
  );
  return (
    <div style={{height:"100vh" , display:"flex" ,flexWrap:"wrap" , justifyContent:"center"  , alignItems:"flex-start"}}>
      {loadContacts ? (
        <h1>Contacts Loading....</h1>
      ) : contacts.length === 0 ? (
        "There is no data"
      ) : (
        contacts.map((el) => <ContactCard contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default ContactsList;
