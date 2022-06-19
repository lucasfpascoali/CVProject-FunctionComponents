import React from "react";
import Fieldset from "./Fieldset";

function Form(props) {

    const generalInfo = [
        { name: 'firstName', type: 'text' }, { name: 'lastName', type: 'text' },
        { name: 'email', type: 'email' }, { name: 'phoneNumber', type: 'text' }
    ];

    const educationalExp = [
        { name: 'schoolName', type: 'text' }, { name: 'studyTitle', type: 'text' },
        { name: 'studyDateFrom', type: 'date' }, { name: 'studyDateTo', type: 'date' }
    ];

    const praticalExp = [
        { name: 'companyName', type: 'text' }, { name: 'positionTitle', type: 'text' },
        { name: 'mainTasks', type: 'text' }, { name: 'workDateFrom', type: 'date' },
        { name: 'workDateTo', type: 'date' }
    ];

    const { values, handleChange } = props;

    return (
        <form onSubmit={props.onSubmit}>
            <Fieldset legend='General Info' inputFields={generalInfo} values={values}
                handleChange={handleChange} />
            <Fieldset legend='Educational Experience' inputFields={educationalExp} values={values}
                handleChange={handleChange} />
            <Fieldset legend='Pratical Experience' inputFields={praticalExp} values={values}
                handleChange={handleChange} />
            <input type='submit' />
        </form>
    )
}

export default Form;