import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [filterValues, setFilterValues] = useState({
    studentID: '',
    studentname: '',
    school: '',
    grade: '',
    parentname: '',
    parentnic: '',
  });

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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const filteredStudents = students.filter((student) => {
    return (
      student.studentID.toLowerCase().includes(filterValues.studentID.toLowerCase()) &&
      student.studentname.toLowerCase().includes(filterValues.studentname.toLowerCase()) &&
      student.school.toLowerCase().includes(filterValues.school.toLowerCase()) &&
      student.grade.toLowerCase().includes(filterValues.grade.toLowerCase()) &&
      student.parentname.toLowerCase().includes(filterValues.parentname.toLowerCase()) &&
      student.parentnic.toLowerCase().includes(filterValues.parentnic.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Students Information</h2>
      <div className="filter-container">
        
        
      </div>
      <table>
        <thead>
          <tr>
            <th>Student ID
                    <input
                type="text"
                name="studentID"
                placeholder="Search by Student ID"
                value={filterValues.studentID}
                onChange={handleFilterChange}
                />
            </th>
            <th>Password</th>
            <th>Student Name
                    <input
                type="text"
                name="studentname"
                placeholder="Search by Student Name"
                value={filterValues.studentname}
                onChange={handleFilterChange}
                />
            </th>
            <th>School
                    <input
                type="text"
                name="school"
                placeholder="Search by School"
                value={filterValues.school}
                onChange={handleFilterChange}
                />
            </th>
            <th>Address</th>
            <th>Phone</th>
            <th>Grade
            <input
                type="text"
                name="grade"
                placeholder="Search by Grade"
                value={filterValues.grade}
                onChange={handleFilterChange}
                />
            </th>
            <th>Image</th>
            <th>Classes Attend</th>
            <th>Parent Name
                    <input
                type="text"
                name="parentname"
                placeholder="Search by Parent Name"
                value={filterValues.parentname}
                onChange={handleFilterChange}
                />
            </th>
            <th>Parent Address</th>
            <th>Parent NIC
                    <input
                type="text"
                name="parentnic"
                placeholder="Search by Parent NIC"
                value={filterValues.parentnic}
                onChange={handleFilterChange}
                />
            </th>
            <th>Parent Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.studentID}</td>
              <td>{student.studentpassword}</td>
              <td>{student.studentname}</td>
              <td>{student.school}</td>
              <td>{student.studentaddress}</td>
              <td>{student.studentphone}</td>
              <td>{student.grade}</td>
              <td>{student.studentimage}</td>
              <td>
                    {student.classesAttend.map((teacher) => (
                    <div key={teacher._id}>
                        {teacher.teachersubject} - {teacher.teacherfirstname}
                    </div>
                    ))}
            </td>
              <td>{student.parentname}</td>
              <td>{student.parentaddress}</td>
              <td>{student.parentnic}</td>
              <td>{student.parentphone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
