import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateStudent = ({ teachersList }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    // Fetch students on component mount
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

  const handleStudentSelect = (student) => {
    // Initialize the classesAttend property as an empty array if not already set
    const updatedStudent = {
      ...student,
      classesAttend: student.classesAttend || [],
    };

    setSelectedStudent(student);
    setIsUpdateMode(true);
  };

  const handleUpdate = (updatedStudentData) => {
    // Create a new object with only the properties you want to update
    const updatedData = {
      studentname: updatedStudentData.studentname,
      school: updatedStudentData.school,
      studentaddress: updatedStudentData.studentaddress,
      studentphone: updatedStudentData.studentphone,
      grade: updatedStudentData.grade,
      classesAttend: updatedStudentData.classesAttend,
      parentname: updatedStudentData.parentname,
      parentaddress: updatedStudentData.parentaddress,
      parentnic: updatedStudentData.parentnic,
      parentphone: updatedStudentData.parentphone,
    };
  
    // Perform the update logic using axios.put
    axios
      .put(`http://localhost:3001/students/${selectedStudent._id}`, updatedData)
      .then((response) => {
        // Update the students state with the updated student
        const updatedStudents = students.map((student) =>
          student._id === response.data._id ? response.data : student
        );
        setStudents(updatedStudents);
  
        // Reset the selectedStudent and isUpdateMode states
        setSelectedStudent(null);
        setIsUpdateMode(false);
  
        console.log('Student updated successfully:', response.data);
        fetchStudents();
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };


  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.studentname.toLowerCase().includes(filterValue.toLowerCase())
  );
  

  return (
    <div className="update-student-container">
      <h2>Update Student Information</h2>

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
              {student.studentname} -{' '}
              <button onClick={() => handleStudentSelect(student)}>Update</button>
              {/* Add a delete button here if you want */}
            </li>
          ))}
        </ul>
      </div>

      <div className="update-form">
        {isUpdateMode && selectedStudent && (
          <form onSubmit={() => handleUpdate(selectedStudent)}>
            <h3>Update Student Information</h3>

            <div className="form-row">
              <label htmlFor="studentname">Student Name:</label>
              <input
                type="text"
                name="studentname"
                value={selectedStudent.studentname}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, studentname: e.target.value })}
                placeholder="Update Student Name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="school">School:</label>
              <input
                type="text"
                name="school"
                value={selectedStudent.school}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, school: e.target.value })}
                placeholder="Update School Name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="studentaddress">Address:</label>
              <input
                type="text"
                name="studentaddress"
                value={selectedStudent.studentaddress}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, studentaddress: e.target.value })}
                placeholder="Update Address"
              />
            </div>

            <div className="form-row">
              <label htmlFor="studentphone">Phone Number:</label>
              <input
                type="text"
                name="studentphone"
                value={selectedStudent.studentphone}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, studentphone: e.target.value })}
                placeholder="Update Phone Number"
              />
            </div>

            <div className="form-row">
              <label htmlFor="grade">Grade:</label>
              <input
                type="text"
                name="grade"
                value={selectedStudent.grade}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, grade: e.target.value })}
                placeholder="Update Grade"
              />
            </div>

            {/* Add checkboxes to update "classesAttend" */}
            <div className="form-row">
              <label>Classes Attend:</label>
              <div className="checkbox-group">
                {/* Render checkboxes for each teacher */}
                {teachersList && teachersList.map((teacher) => (
                  <label key={teacher._id} htmlFor={`teacher_${teacher._id}`}>
                    <input
                      type="checkbox"
                      id={`teacher_${teacher._id}`}
                      name={`teacher_${teacher._id}`}
                      value={teacher.teachersubject}
                      onChange={(event) => {
                        const teacherId = teacher._id;
                        const isChecked = event.target.checked;

                        // Create a new array with selected teacher IDs
                        const updatedClasses = isChecked
                          ? [...selectedStudent.classesAttend, teacherId]
                          : selectedStudent.classesAttend.filter((id) => id !== teacherId);

                        setSelectedStudent({
                          ...selectedStudent,
                          classesAttend: updatedClasses,
                        });
                      }}
                      checked={selectedStudent.classesAttend.includes(teacher._id)}
                    />
                    {`${teacher.teachersubject} - ${teacher.teachername}`}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="parentname">Parent Name:</label>
              <input
                type="text"
                name="parentname"
                value={selectedStudent.parentname}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, parentname: e.target.value })}
                placeholder="Update Parent Name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="parentaddress">Parent Address:</label>
              <input
                type="text"
                name="parentaddress"
                value={selectedStudent.parentaddress}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, parentaddress: e.target.value })}
                placeholder="Update Parent Address"
              />
            </div>

            <div className="form-row">
              <label htmlFor="parentnic">Parent NIC:</label>
              <input
                type="text"
                name="parentnic"
                value={selectedStudent.parentnic}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, parentnic: e.target.value })}
                placeholder="Update Parent NIC Number"
              />
            </div>

            <div className="form-row">
              <label htmlFor="parentphone">Parent Phone Number:</label>
              <input
                type="text"
                name="parentphone"
                value={selectedStudent.parentphone}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, parentphone: e.target.value })}
                placeholder="Update Parent Phone Number"
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

export default UpdateStudent;
