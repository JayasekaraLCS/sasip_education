import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
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

  const handleTeacherSelect = (teacher) => {
    setSelectedTeacher(teacher);
    setIsUpdateMode(true);
  };

  const handleUpdate = (updatedTeacherData) => {
    // Create a new object with only the properties you want to update
    const updatedData = {
      teachername: updatedTeacherData.teachername,
      teacherfirstname: updatedTeacherData.teacherfirstname,
      teacherlastname: updatedTeacherData.teacherlastname,
      nic: updatedTeacherData.nic,
      teacherphone: updatedTeacherData.teacherphone,
      teachersubject: updatedTeacherData.teachersubject,
    };
  
    // Perform the update logic using axios.put
    axios
      .put(`http://localhost:3001/teachers/${selectedTeacher._id}`, updatedData)
      .then((response) => {
        // Update the teachers state with the updated teacher
        const updatedTeachers = teachers.map((teacher) =>
          teacher._id === response.data._id ? response.data : teacher
        );
        setTeachers(updatedTeachers);
  
        // Reset the selectedTeacher and isUpdateMode states
        setSelectedTeacher(null);
        setIsUpdateMode(false);
  
        console.log('Teacher updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating teacher:', error);
      });
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.teachername.toLowerCase().includes(filterValue.toLowerCase())
  );
  

  return (
  <div className="update-teacher-container">
      <h2>Update Teacher Information</h2>

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
              {teacher.teachername} -{' '}
              <button onClick={() => handleTeacherSelect(teacher)}>Update</button>
              {/* Add a delete button here if you want */}
            </li>
          ))}
        </ul>
      </div>

        <div className="update-form">
          {isUpdateMode && selectedTeacher && (
            <form onSubmit={() => handleUpdate(selectedTeacher)}>
              <h3>Update Teacher Information</h3>

              <div className="form-row">
                <label htmlFor="teachername">Teacher Name:</label>
                <input
                  type="text"
                  name="teachername"
                  value={selectedTeacher.teachername}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, teachername: e.target.value })}
                  placeholder="Update Teacher Name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="teacherfirstname">First Name:</label>
                <input
                  type="text"
                  name="teacherfirstname"
                  value={selectedTeacher.teacherfirstname}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, teacherfirstname: e.target.value })}
                  placeholder="Update Teacher First Name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="teacherlastname">Last Name:</label>
                <input
                  type="text"
                  name="teacherlastname"
                  value={selectedTeacher.teacherlastname}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, teacherlastname: e.target.value })}
                  placeholder="Update Teacher Last Name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="nic">NIC:</label>
                <input
                  type="text"
                  name="nic"
                  value={selectedTeacher.nic}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, nic: e.target.value })}
                  placeholder="Update NIC Number"
                />
              </div>

              <div className="form-row">
                <label htmlFor="teacherphone">Phone Number:</label>
                <input
                  type="text"
                  name="teacherphone"
                  value={selectedTeacher.teacherphone}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, teacherphone: e.target.value })}
                  placeholder="Update Phone Number"
                />
              </div>

              <div className="form-row">
                <label htmlFor="teachersubject">Teaching Subject:</label>
                <input
                  type="text"
                  name="teachersubject"
                  value={selectedTeacher.teachersubject}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, teachersubject: e.target.value })}
                  placeholder="Update Teaching Subject"
                />
              </div>

              <div className="form-row">
                <button type="submit">Update</button>
                {/* Add a cancel or reset button to exit update mode */}
                <button type="button" onClick={() => setIsUpdateMode(false)}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
    </div>
  );
};

export default UpdateTeacher;

