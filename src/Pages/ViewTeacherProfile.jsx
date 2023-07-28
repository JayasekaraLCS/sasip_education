import React, { useEffect, useState } from 'react';
import Namebar from '../Components/Namebar';
import axios from 'axios';

export default function ViewTeacherProfile() {
    const [teacherProfile, setTeacherProfile] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch teacher profile when the component mounts
      fetchTeacherProfile();
    }, []);
  
    const fetchTeacherProfile = async () => {
      try {
        // Modify the URL to include the query parameter
        const response = await axios.get('http://localhost:3001/teachers/profile', {
          params: {
            txtuserID: 'teacher-id-here', // Replace 'teacher-id-here' with the actual teacher ID
          },
        });
        setTeacherProfile(response.data.teacher);
      } catch (error) {
        console.error('Error fetching teacher profile:', error);
        setError('Error fetching teacher profile');
      }
    };
  return (
    <div>
      <Namebar />
      <div className="teacher-profile-container">
        {teacherProfile ? (
          <div>
            <h1>Teacher Profile</h1>
            <div>
              <label>Teacher ID:</label>
              <span>{teacherProfile.teacherID}</span>
            </div>
            <div>
              <label>Name:</label>
              <span>{teacherProfile.teachername}</span>
            </div>
            <div>
              <label>First Name:</label>
              <span>{teacherProfile.teacherfirstname}</span>
            </div>
            <div>
              <label>Last Name:</label>
              <span>{teacherProfile.teacherlastname}</span>
            </div>
            <div>
              <label>NIC:</label>
              <span>{teacherProfile.nic}</span>
            </div>
            <div>
              <label>Phone:</label>
              <span>{teacherProfile.teacherphone}</span>
            </div>
            <div>
              <label>Subject:</label>
              <span>{teacherProfile.teachersubject}</span>
            </div>
            {/* Add more fields for other teacher information */}
            <div>
              <label>Image:</label>
              <img src={teacherProfile.teacherimage} alt="Teacher" />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
