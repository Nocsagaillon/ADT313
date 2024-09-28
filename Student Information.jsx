import React from 'react';
const StudentInformation = ({ name, section }) => {
    return (
    <div className="student-info">
    <h2>Student Information</h2>
    <p>Name : {name}</p>
    <p>Section: {section}</p>
    </div>
     );
};
export default StudentInformation;