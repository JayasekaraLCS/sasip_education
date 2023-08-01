import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function VIewTeachers() {

    const [teachers, setTeachers] = useState([]);
    const [filterValues, setFilterValues] = useState({
      teacherID: '',
      teacherfirstname: '',
      teacherlastname: '',
      teachersubject: '',
      nic: '',
      
      
    });
  

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = () => {
        axios.get('http://localhost:3001/teachers')
        .then((response) => {
            setTeachers(response.data);
        })
        .catch((error) => {
            console.error('Error fetching teachers:', error);
        });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const filteredTeachers = teachers.filter((teacher) => {
        return (
            teacher.teacherID.toLowerCase().includes(filterValues.teacherID.toLowerCase()) &&
            teacher.teacherfirstname.toLowerCase().includes(filterValues.teacherfirstname.toLowerCase()) &&
            teacher.teacherlastname.toLowerCase().includes(filterValues.teacherlastname.toLowerCase()) &&
            teacher.teachersubject.toLowerCase().includes(filterValues.teachersubject.toLowerCase()) &&
            String(teacher.nic).toLowerCase().includes(filterValues.nic.toLowerCase()) 
        );
      });


      return (
        <div>
          <h2>Teachers Information</h2>
          <div className="filter-container">
          
          </div>
          <table>
            <thead>
              <tr>
                <th>Teacher ID
                        <input
                    type="text"
                    name="teacherID"
                    placeholder="Search by Teacher ID"
                    value={filterValues.teacherID}
                    onChange={handleFilterChange}
                    />
                </th>
                <th>First Name
                        <input
                    type="text"
                    name="teacherfirstname"
                    placeholder="Search by First Name"
                    value={filterValues.teacherfirstname}
                    onChange={handleFilterChange}
                    />
                </th>
                <th>Last Name
                        <input
                    type="text"
                    name="teacherlastname"
                    placeholder="Search by Last Name"
                    value={filterValues.teacherlastname}
                    onChange={handleFilterChange}
                    />
                </th>
                <th>Subject
                        <input
                    type="text"
                    name="teachersubject"
                    placeholder="Search by Subject"
                    value={filterValues.teachersubject}
                    onChange={handleFilterChange}
                    />
                </th>
                <th>Password</th>
                <th>NIC
                        <input
                    type="text"
                    name="nic"
                    placeholder="Search by NIC"
                    value={filterValues.nic}
                    onChange={handleFilterChange}
                    />
                </th>
                <th>Phone Number</th>
                <th>Fee of Class</th>
                <th>Image</th>
                
                
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher._id}>
                  <td>{teacher.teacherID}</td>
                  <td>{teacher.teacherfirstname}</td>
                  <td>{teacher.teacherlastname}</td>
                  <td>{teacher.teachersubject}</td>
                  <td>{teacher.teacherpassword}</td>
                  <td>{teacher.nic}</td>
                  <td>{teacher.teacherphone}</td>
                  <td>{teacher.feeOfClass}</td>
                  <td>{teacher.teacherimage}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
