import React, { useState, useEffect } from 'react';
import './Status.css';

export default function Status() {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    // Fetch the number of students from the server
    fetch('http://localhost:3001/students/count')
      .then((response) => response.json())
      .then((data) => setStudentCount(data.count))
      .catch((error) => console.error('Error fetching student count:', error));

    // Fetch the number of teachers from the server
    fetch('http://localhost:3001/teachers/count')
      .then((response) => response.json())
      .then((data) => setTeacherCount(data.count))
      .catch((error) => console.error('Error fetching teacher count:', error));

  }, []);

  return (
    <div>
      <div className="Counters">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="Nostudents" className="label">
                  Students - {studentCount}
                </label>
              </td>
              <td></td>
              <td>
                <label htmlFor="Noteacher" className="label">
                  Teachers - {teacherCount}
                </label>
              </td>
              <td></td>
              <td>
                <label htmlFor="NoClasses" className="label">
                  Classes - {teacherCount}
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
