import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NotPaymentsDetails() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [paidClasses, setPaidClasses] = useState([]); // Add the paidClasses state

  useEffect(() => {
    fetchStudents();
    fetchPayments(); // Fetch the paid classes on component mount
  }, []);

  const fetchStudents = () => {
    return axios
      .get('http://localhost:3001/students')
      .then((response) => {
        setStudents(response.data);
        return response.data; // Return the students data
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        return [];
      });
  };

  const fetchPayments = () => {
    return axios
      .get('http://localhost:3001/payments')
      .then((response) => {
        const paidClasses = response.data.map((payment) => payment.paidClass);
        setPaidClasses(paidClasses); // Set the paidClasses state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
        return [];
      });
  };

  useEffect(() => {
    const getNotPaidClasses = async () => {
      const studentsData = await fetchStudents();

      const filtered = studentsData.filter((student) => {
        // Get all classes from "Class Attend" column
        const allClasses = student.classesAttend.map((teacher) => teacher.teachersubject);

        // Filter classes that are not paid
        const notPaidClasses = allClasses.filter((cls) => !paidClasses.includes(cls));

        return notPaidClasses.length > 0; // Return students with at least one unpaid class
      });

      setFilteredStudents(filtered);
    };

    getNotPaidClasses();
  }, [paidClasses]); // Fetch the unpaid classes when the paidClasses state changes

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredStudentsBySearch = filteredStudents.filter((student) => {
    // Get all classes from "Class Attend" column
    const allClasses = student.classesAttend.map((teacher) => teacher.teachersubject);

    return (
      student.studentID.toLowerCase().includes(filterValue.toLowerCase()) ||
      student.studentname.toLowerCase().includes(filterValue.toLowerCase()) ||
      student.grade.toLowerCase().includes(filterValue.toLowerCase()) ||
      student.school.toLowerCase().includes(filterValue.toLowerCase()) ||
      allClasses.some((cls) => cls.toLowerCase().includes(filterValue.toLowerCase()))
    );
  });

  return (
    <div>
      <h2>Students with Unpaid Classes</h2>
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
            <th>Unpaid Classes</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudentsBySearch.map((student) => (
            <tr key={student._id}>
              <td>{student.studentID}</td>
              <td>{student.studentname}</td>
              <td>{student.school}</td>
              <td>{student.grade}</td>
              <td>
                {student.classesAttend.map((teacher) => (
                  <div key={teacher._id}>
                    {!paidClasses.includes(teacher.teachersubject) && teacher.teachersubject}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
