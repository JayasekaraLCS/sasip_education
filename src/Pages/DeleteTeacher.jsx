import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [filterValue, setFilterValue] = useState('');

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
    // Show a confirmation message before deleting the teacher
    const isConfirmed = window.confirm('Are you sure you want to delete this teacher?');

    if (isConfirmed) {
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
    }
  };


  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.teachername.toLowerCase().includes(filterValue.toLowerCase())
  );



  return (
    <div className="delete-teacher-container">
      <h2>Delete Teachers</h2>

      {/* Filter input field */}
      <div className="filter">
        <label htmlFor="filter">Filter by Teacher Name:</label>
        <input
          type="text"
          id="filter"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Enter Teacher Name"
        />
      </div>

      <div className="teacher-list">
        <h3>Teachers List</h3>
        <ul>
          {filteredTeachers.map((teacher) => (
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
