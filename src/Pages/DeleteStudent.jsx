import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteStudent = () => {
  const [students, setStudents] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get('http://localhost:3001/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  };

  const handleDelete = (studentId) => {
    // Show a confirmation message before deleting the student
    const isConfirmed = window.confirm('Are you sure you want to delete this student?');

    if (isConfirmed) {
      axios
        .delete(`http://localhost:3001/students/${studentId}`)
        .then((response) => {
          console.log('Student deleted successfully:', response.data);
          // Update the frontend list here if needed
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
        });
    }
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.studentname.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="delete-student-container">
      <h2>Delete Students</h2>

      {/* Filter input field */}
      <div className="filter">
        <label htmlFor="filter">Filter by Student Name:</label>
        <input
          type="text"
          id="filter"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Enter Student Name"
        />
      </div>

      <div className="student-list">
        <h3>Students List</h3>
        <ul>
          {filteredStudents.map((student) => (
            <li key={student._id}>
              {student.studentname} - <button onClick={() => handleDelete(student._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteStudent;
