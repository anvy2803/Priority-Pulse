import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, age, cases, phone, priority } = contact;

  return (
    <tr className={priority >= 5 ? "emergency" : ""}>
      <td> {id} </td>
      <td> {name} </td>
      <td> {age} </td>
      <td> {cases} </td>
      <td> {phone} </td>
      <td> {priority} </td>
    </tr>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
