import { useState } from "react";
import "./FormPage.css";

function FormPage() {
  // Define values for name and the value that'll be used to set the name - setName
  const [name, setName] = useState("");
  const [uid, setUID] = useState("");
  const [section, setSection] = useState("");
  // Define state variables for displaying the values
  const [displayName, setDisplayName] = useState("");
  const [displayUID, setDisplayUID] = useState("");
  const [displaySection, setDisplaySection] = useState("");

  // function for onSubmit

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // set the values
    setDisplayName(name);
    setDisplayUID(uid);
    setDisplaySection(section);
    // Display an alert with the typed values
    alert(`Name: ${name}\nUID: ${uid}\nSection: ${section}`);
    // Log the values to the console
    console.log(`Name: ${name}, UID: ${uid}, Section: ${section}`);
  };

  const handleNameChange = (name) => {
    setName(name.target.value);
  };

  const handleUIDChange = (uid) => {
    setUID(uid.target.value);
  };

  const handleSectionChange = (section) => {
    setSection(section.target.value);
  };

  return (
    <div>
      <form className="formClass" onSubmit={handleFormSubmit}>
        <label>
          Enter Your Name :
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Enter Your UID :
          <input type="text" value={uid} onChange={handleUIDChange} />
        </label>

        <label>
          Enter Your Section :
          <input type="text" value={section} onChange={handleSectionChange} />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="detailContainer">
        <h1>Your Name : {displayName}</h1>
        <h2>Your UID : {displayUID}</h2>
        <h2>Your Section : {displaySection}</h2>
      </div>
    </div>
  );
}

export default FormPage;
