import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NotPaymentsDetails() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [payments, setPayments] = useState([]); // Add a new state variable for payments

  useEffect(() => {
    fetchStudents();
    fetchPayments(); // Fetch payments when the component mounts
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

  const fetchPayments = () => {
    axios
      .get('http://localhost:3001/payments') // Adjust the API URL as needed
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
      });
  };

  useEffect(() => {
    const filtered = students.filter((student) => {
      // Check if the student ID exists in the Class Payments Details
      const studentExistsInPayments = payments.some(
        (payment) => payment.studentId === student.studentID
      );
      return !studentExistsInPayments;
    });
    setFilteredStudents(filtered);
  }, [students, payments]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredStudentsBySearch = filteredStudents.filter((student) => {
    return (
      student.studentID.toLowerCase().includes(filterValue.toLowerCase()) ||
      student.studentname.toLowerCase().includes(filterValue.toLowerCase()) ||
      student.grade.toLowerCase().includes(filterValue.toLowerCase()) ||
      student.school.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Students Not in Class Payments Details</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by Student ID, Name, Grade, or School"
          value={filterValue}
          onChange={handleFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>School</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudentsBySearch.map((student) => (
            <tr key={student._id}>
              <td>{student.studentID}</td>
              <td>{student.studentname}</td>
              <td>{student.school}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
