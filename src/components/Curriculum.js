import React from "react";
import '../styles/curriculum.css';

function Curriculum(props) {
    const { values, onSubmit } = props;

    return (
        <div id="curriculum-body">
            <header>
                <h2>{values.firstName} {values.lastName}</h2>
                <p>E-mail: {values.email}</p>
                <p>Phone Number: {values.phoneNumber}</p>
            </header>
            <div className="section">
                <p>School Name: {values.schoolName}</p>
                <p>Title of Study: {values.studyTitle}</p>
                <p>Date of Study: {values.studyDateFrom} - {values.studyDateTo}</p>
            </div>
            <div className="section">
                <p>Company Name: {values.companyName}</p>
                <p>Position Title: {values.positionTitle}</p>
                <h4>Mains Tasks</h4>
                <ul>
                    {values.mainTasks.split(', ').map(task => <li>{task}</li>)}
                </ul>
                <p>Date of Work: {values.workDateFrom} - {values.workDateTo}</p>
            </div>
            <form onSubmit={onSubmit}>
                <input type='submit' value='Edit' />
            </form>
        </div>
    );
}

export default Curriculum;