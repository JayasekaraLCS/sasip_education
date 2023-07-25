import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch teachers on component mount
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axios
      .get('http://localhost:3001/teachers')
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
      });
  };

  const handleDelete = (teacherId) => {
    // Remove the teacher from the state immediately
    const updatedTeachers = teachers.filter((teacher) => teacher._id !== teacherId);
    setTeachers(updatedTeachers);

    // Perform the delete logic using axios.delete
    axios
      .delete(`http://localhost:3001/teachers/${teacherId}`)
      .then((response) => {
        console.log('Teacher deleted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting teacher:', error);
      });
  };

  return (
    <div className="delete-teacher-container">
      <h2>Delete Teachers</h2>
      <div className="teacher-list">
        <h3>Teachers List</h3>
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher._id}>
              {teacher.teachername} - <button onClick={() => handleDelete(teacher._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteTeacher;
