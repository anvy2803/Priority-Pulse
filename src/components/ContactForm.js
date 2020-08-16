import React, { useContext, useState } from "react";
import ContactContext from "../context/Contact/contactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, contacts } = contactContext;

  const [contact, setContact] = useState({
    id: "",
    name: "",
    age: "",
    cases: "",
    phone: "",
    priority: "",
  });

  const { name, age, cases, phone, priority } = contact;

  const onClick = (e) => {
    e.preventDefault();
    if (
      contact.id !== "" &&
      name !== "" &&
      age !== "" &&
      cases !== "" &&
      phone !== "" &&
      priority !== ""
    ) {
      addContact(contact);
      setContact({
        id: "",
        name: "",
        age: "",
        cases: "",
        phone: "",
        priority: "",
      });
    }
  };

  const onChange = (e) => {
    if (e.target.value === "") {
      setContact({
        [e.target.name]: "",
      });
    } else {
      setContact({
        ...contact,
        id: contacts.length + 1,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <form className="form-container">
      <h1 className="form-title">Patient Details</h1>
      <p className="form-lead"> Fill the details below.</p>
      <input
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        placeholder="Patient Name"
        onChange={onChange}
      />
      <input
        type="number"
        name="age"
        value={age}
        autoComplete="off"
        placeholder="Patient Age"
        onChange={onChange}
      />
      <input
        type="text"
        name="cases"
        autoComplete="off"
        placeholder="Case"
        onChange={onChange}
        value={cases}
      />
      <input
        type="number"
        name="priority"
        autoComplete="off"
        placeholder="Priority Level"
        onChange={onChange}
        value={priority}
      />
      <input
        type="number"
        name="phone"
        autoComplete="off"
        placeholder="Contact"
        onChange={onChange}
        value={phone}
      />
      <div>
        <input
          type="button"
          value="Submit"
          className="btn btn-block"
          onClick={onClick}
        />
        <p className="form-lead">Getting problem in submitting</p>
        <input type="button" value="Track Patient" className="btn btn-block" />
      </div>
    </form>
  );
};

export default ContactForm;
