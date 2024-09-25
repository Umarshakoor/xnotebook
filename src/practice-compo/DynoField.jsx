import { useState } from "react";

const DynamicField = () => {
  // state to manage dynamic fields and their input values
  const [fields, setFields] = useState([{ value: "" }]);
  console.log(fields);

  //function to handle input change for specific fields
  const inputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    console.log(newFields);
    setFields(newFields);
    console.log("after set new field", fields);
  };

  // function to add new field
  const addField = () => {
    setFields([...fields, { value: "" }]);
  };

  //function remove field
  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form data", fields);
  };
  return (
    <div>
      <h3>Dynamic Input fields</h3>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={field.value}
              onChange={(event) => inputChange(index, event)}
              placeholder={`field ${index + 1}`}
              style={{ marginRight: "10px" }}
            />
            <button type="button" onClick={removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          + Add field
        </button>
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default DynamicField;
