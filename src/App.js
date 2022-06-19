import React, { useState } from "react";
import Form from "./components/Form";
import Curriculum from "./components/Curriculum";
import './styles/app.css';

function App() {
  const [values, setValues] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phoneNumber: undefined,
    schoolName: undefined,
    studyTitle: undefined,
    studyDateFrom: undefined,
    studyDateTo: undefined,
    companyName: undefined,
    positionTitle: undefined,
    mainTasks: undefined,
    workDateFrom: undefined,
    workDateTo: undefined,
  });

  const handleValuesChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const [renderForm, setRenderForm] = useState(true);

  const onSubmitButton = (e) => {
    e.preventDefault();
    setRenderForm(!renderForm);
  }

  return (
    <div className="app">
      {renderForm ? <Form values={values} handleChange={handleValuesChanges} onSubmit={onSubmitButton} />
        : <Curriculum values={values} onSubmit={onSubmitButton} />}
    </div>
  );
}

export default App;
