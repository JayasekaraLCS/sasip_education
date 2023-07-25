import React, { useState, useEffect } from 'react';
// import TeacherRegistration from './TeacherRegistration';
import UpdateStudent from './UpdateStudent';
import axios from 'axios';

const TeacherRegistrationPage = () => {
  const [teachersList, setTeachersList] = useState([]);

  useEffect(() => {
    fetchTeachersList();
  }, []);

  const fetchTeachersList = () => {
    // Your logic to fetch teachers list goes here
    // For example:
    axios
      .get('http://localhost:3001/teachers')
      .then((response) => {
        setTeachersList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
      });
  };

  return (
    <div>
      {/* <TeacherRegistration teachersList={teachersList} /> */}
      <UpdateStudent teachersList={teachersList} />
    </div>
  );
};

export default TeacherRegistrationPage;

