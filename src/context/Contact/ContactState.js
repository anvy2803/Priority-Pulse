import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./ContactReducer";
import { ADD_CONTACT } from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "Nithish",
        age: "38",
        cases: "Accident",
        phone: "91826 87397",
        priority: "4",
      },
      {
        id: "2",
        name: "Kiran",
        age: "20",
        cases: "Heart Stroke",
        phone: "7032629788",
        priority: "5",
      },
      {
        id: "3",
        name: "Sudeep",
        age: "60",
        cases: "High BP",
        phone: "95054 45002",
        priority: "3",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
