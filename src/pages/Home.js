import React from "react";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";
import ambulance from "../img/Ambulance.png";

const Home = () => {
  return (
    <div className="container">
      <div className="grid-4-2">
        <div className="home-content">
          <img src={ambulance} alt={" "} />
          <p>
            An issue that is never ending in our country is traffic. <br />
            The core problem with traffic arises when an ambulance tries to
            cross over.
            <br />
            Our Team Priority Pulse is reaching out to the issue with a
            Priority-based solution. <br />
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

      <div className="grid-1">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Case</th>
              <th>Contact</th>
              <th>Priority Level</th>
            </tr>
          </thead>
          <tbody>
            <Contacts />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
