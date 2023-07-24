import React, { useEffect, useState } from 'react';
import './StudentRegistration.css';
import Namebar from '../Components/Namebar';
import Navbar from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import axios from 'axios';


export default function StudentRegistration() {

    // State to hold the list of teachers fetched from the database
    const [teachersList, setTeachersList] = useState([]);

    // Function to fetch the list of teachers from the server
    const fetchTeachersList = () => {
      axios
        .get('http://localhost:3001/teachers')
        .then((response) => {
          setTeachersList(response.data);
        })
        .catch((error) => {
          console.error('Error fetching teachers:', error);
        });
    };

    // Fetch teachers list on component mount
    useEffect(() => {
      fetchTeachersList();
    }, []);
  

  const validate = values =>{
    const errors = {};

    if(!values.studentID){
      errors.studentID = 'Required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.studentID)){
      errors.studentID = 'Invalid StudentID';
    }

    if(!values.studentpassword){
      errors.studentpassword = 'Required';
    }

    else if(!/^[a-zA-Z0-9]+$/i.test(values.studentpassword)){
      errors.studentpassword = 'Invalid password.'
    }


    if(!values.studentname){
      errors.studentname = 'Required';
    }
    else if(!/^[A-Za-z\s]+$/i.test(values.studentname)){
      errors.studentname = 'Invalid Name.';
    }

    
    if(!values.school){
      errors.school = 'Required';
    }
    else if(!/^[A-Za-z\s]+$/i.test(values.school)){
      errors.school = 'Invalid School Name.';
    }

    if(!values.studentaddress){
      errors.studentaddress = 'Required';
    }
    else if(!/^[a-zA-Z0-9\s\.,#\-]+$/i.test(values.studentaddress)){
      errors.studentaddress = 'Invalid Address.';
    }

    if(!values.studentphone){
      errors.studentphone = 'Required';
    }
    else if(!/^\d{9}$/i.test(values.studentphone)){
      errors.studentphone = 'Invalid Phone Number.';
    }

    if (!values.grade) {
      errors.grade = 'Grade is required';
    }

    const imageFilest = values.studentimage;
    if (!imageFilest) {
      errors.studentimage = 'Image is required.';
    }
    
    // Validate "Classes Attend" checkboxes
    if (!values.classesAttend || values.classesAttend.length === 0) {
      errors.classesAttend = 'Please select at least one class..';
    }

    if(!values.parentname){
      errors.parentname = 'Required';
    }
    else if(!/^[A-Za-z\s]+$/i.test(values.parentname)){
      errors.parentname = 'Invalid Name.';
    }

    if(!values.parentaddress){
      errors.parentaddress = 'Required';
    }
    else if(!/^[a-zA-Z0-9\s\.,#\-]+$/i.test(values.parentaddress)){
      errors.parentaddress = 'Invalid Address.';
    }

    if(!values.parentnic){
      errors.parentnic = 'Required';
    }
    else if(!/^(\d{9}[vVxX]|\d{12})$/i.test(values.parentnic)){
      errors.parentnic = 'Invalid NIC Number.';
    }

    if(!values.parentphone){
      errors.parentphone = 'Required';
    }
    else if(!/^\d{9}$/i.test(values.parentphone)){
      errors.parentphone = 'Invalid Phone Number.';
    }

    return errors;

  };

    const formik = useFormik({
      initialValues: {
        studentID: '',
        studentpassword: '',
        studentname: '',
        school: '',
        studentaddress: '',
        studentphone: '',
        grade: '',
        studentimage: '',
        classesAttend: [], // Initialize classesAttend as an empty array
        parentname: '',
        parentaddress: '',
        parentnic: '',
        parentphone: '',
        

      },

    validate,

    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      axios.post('http://localhost:3001/students',{
        studentID: values.studentID,
        studentpassword: values.studentpassword,
        studentname: values.studentname,
        school: values.school,
        studentaddress: values.studentaddress,
        studentphone: values.studentphone,
        grade: values.grade,
        studentimage: values.studentimage,
        classesAttend: values.classesAttend,
        parentname: values.parentname,
        parentaddress: values.parentaddress,
        parentnic: values.parentnic,
        parentphone: values.parentphone

      })
      .then((result) => {
        console.log(result);
        toast.success('Data successfully saved!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // 3 seconds duration for the toast
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while saving data!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      });
    },
  });

  const handleFormReset = () => {
    formik.resetForm(); // Add this line to reset the form values
  };



  return (
    <div className='backgroundstreg'>
      <div className='addnamebar'>
        <Namebar />
      </div>
      <div className='addnavbar'>
        <Navbar />
      </div>
      <div className='body'>
        <form onSubmit={formik.handleSubmit} onReset={handleFormReset}>
          <h2>Student Registration Form</h2>
          <hr/>
          <h3>Student Details</h3>

          <div className="form-row">
            <label htmlFor="studentID">Student Number/UserID:</label>
            <input type="text" id="studentID" name="studentID" placeholder='Enter the email' onChange={formik.handleChange} value={formik.values.studentID}/>
            {formik.touched.studentID && formik.errors.studentID ? (
                <div>{formik.errors.studentID}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="studentpassword">Password:</label>
            <input type="password" id="studentpassword" name="studentpassword" placeholder='Enter the password' onChange={formik.handleChange} value={formik.values.studentpassword} />
            {formik.touched.studentpassword && formik.errors.studentpassword ? (
                <div>{formik.errors.studentpassword}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="studentname">Name:</label>
            <input type="text" id="studentname" name="studentname" placeholder='Enter the name' onChange={formik.handleChange} value={formik.values.studentname} />
            {formik.touched.studentname && formik.errors.studentname ? (
                <div>{formik.errors.studentname}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="school">School:</label>
            <input type="text" id="school" name="school" placeholder='Enter the school' onChange={formik.handleChange} value={formik.values.school} />
            {formik.touched.school && formik.errors.school ? (
                <div>{formik.errors.school}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="studentaddress">Address:</label>
            <input type="text" id="studentaddress" name="studentaddress" placeholder='Enter the address' onChange={formik.handleChange} value={formik.values.studentaddress} />
            {formik.touched.studentaddress && formik.errors.studentaddress ? (
                <div>{formik.errors.studentaddress}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="studentphone">Phone Number:</label>
            <input type="text" id="studentphone" name="studentphone" placeholder='Enter the phone number' onChange={formik.handleChange} value={formik.values.studentphone}/>
            {formik.touched.studentphone && formik.errors.studentphone ? (
                <div>{formik.errors.studentphone}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="grade">Grade:</label>
            <select id="grade" name="grade" onChange={formik.handleChange} value={formik.values.grade}>
              <option value=""disabled>Select the Grade</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
            </select>
                        {formik.touched.grade && formik.errors.grade ? (
                <div>{formik.errors.grade}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="studentimage">Student Image:</label>
            <input type="file" id="studentimage" name="studentimage" onChange={formik.handleChange} value={formik.values.studentimage} />
            {formik.touched.studentimage && formik.errors.studentimage ? (
                <div>{formik.errors.studentimage}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label>Classes Attend:</label>
            <div className="checkbox-group" style={{ color: formik.errors.classesAttend ? 'red' : 'inherit' }}>
              {teachersList.map((teacher) => (
                <label key={teacher._id} htmlFor={`teacher_${teacher._id}`}>
                  <input
                    type="checkbox"
                    id={`teacher_${teacher._id}`}
                    name={`teacher_${teacher._id}`}
                    value={teacher.teachersubject}
                    onChange={(event) => {
                      // Update the formik state for the checkboxes
                      const teacherId = teacher._id;
                      const isChecked = event.target.checked;
                      const selectedClasses = formik.values.classesAttend;

                      if (isChecked) {
                        // Add the selected class to the array
                        formik.setFieldValue(
                          'classesAttend',
                          [...selectedClasses, teacherId],
                          true // To trigger validation
                        );
                      } else {
                        // Remove the unselected class from the array
                        formik.setFieldValue(
                          'classesAttend',
                          selectedClasses.filter((id) => id !== teacherId),
                          true // To trigger validation
                        );
                      }
                    }}
                    checked={formik.values.classesAttend.includes(teacher._id)}
                  />
                  {`${teacher.teachersubject} - ${teacher.teacherfirstname} ${teacher.teacherlastname}`}
                </label>
              ))}
              {formik.touched.classesAttend && formik.errors.classesAttend ? (
                <div>{formik.errors.classesAttend}</div>
              ) : null}
            </div>
          </div>


          <hr />
          <h3>Parent Details</h3>

          <div className="form-row">
            <label htmlFor="parentname">Parent Name:</label>
            <input type="text" id="parentname" name="parentname" placeholder='Enter Parent Name' onChange={formik.handleChange} value={formik.values.parentname}/>
            {formik.touched.parentname && formik.errors.parentname ? (
                <div>{formik.errors.parentname}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="parentaddress">Address:</label>
            <input type="text" id="parentaddress" name="parentaddress" placeholder='Enter parent address' onChange={formik.handleChange} value={formik.values.parentaddress}/>
            {formik.touched.parentaddress && formik.errors.parentaddress ? (
                <div>{formik.errors.parentaddress}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="nic-number">NIC Number:</label>
            <input type="text" id="parentnic" name="parentnic" placeholder='Enter nic number' onChange={formik.handleChange} value={formik.values.parentnic}/>
            {formik.touched.parentnic && formik.errors.parentnic ? (
                <div>{formik.errors.parentnic}</div>
              ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="parentphone">Phone Number:</label>
            <input type="text" id="parentphone" name="parentphone" placeholder='Enter phone number' onChange={formik.handleChange} value={formik.values.parentphone}/>
            {formik.touched.parentphone && formik.errors.parentphone ? (
                <div>{formik.errors.parentphone}</div>
              ) : null}
          </div>

          <center>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </center>
        </form>

        <ToastContainer
        toastStyle={{
          background: '#00FF00', // Replace with your desired background color for error toasts
          color: '#FFFFFF', // Replace with your desired text color for error toasts
        }}
      />
      </div>
    </div>
  );
}
