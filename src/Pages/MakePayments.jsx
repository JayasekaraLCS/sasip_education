import React, { useEffect, useState } from 'react';
import './MakePayments.css';
import Navbar from '../Components/Navbar';
import Namebar from '../Components/Namebar';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MakePayments() {

  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudentName, setSelectedStudentName] = useState(''); // State to hold the selected student's name
  const [selectedStudentGrade, setSelectedStudentGrade] = useState(''); // State to hold the selected student's grade
  

  useEffect(() => {
    fetch('http://localhost:3001/newteachers')
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Error fetching teachers data:', error));

      fetch('http://localhost:3001/newstudents')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students data:', error));
      
  }, []);

  const initialValues = {
    studentId: '',
    studentName: '',
    grade: '',
    month: '',
    paidClass: '',
    classFees: '',
  };

  const validate = (values) => {
    const errors = {};

    // Student ID validation
    if (!values.studentId) {
      errors.studentId = 'Student ID is required';
    } 

    // Month validation
    if (!values.month) {
      errors.month = 'Month is required';
    }

    // Paid Class validation
    if (!values.paidClass) {
      errors.paidClass = 'Class Attend is required';
    }

    // Class Fees validation
    if (!values.classFees) {
      errors.classFees = 'Class Fees is required';
    } else if (isNaN(values.classFees) || values.classFees < 1000 || values.classFees > 2500) {
      errors.classFees = 'Class Fees must be between 1000.00 LKR and 2500.00 LKR';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Prepare the data to be saved to the database
    const paymentData = {
      studentId: values.studentId,
      studentName: selectedStudentName, // Use the selectedStudentName from the state
      grade: selectedStudentGrade, // Use the selectedStudentGrade from the state
      month: values.month,
      paidClass: values.paidClass,
      classFees: values.classFees,
    };


        // // Call the sendEmail function when the payment is successfully made
        // sendEmail(paymentData, selectedStudentId)
        // .then((emailSent) => {
        //   if (emailSent) {
        //     console.log('Email sent successfully!');
        //     // Handle success, display a success message or redirect to another page
        //   } else {
        //     console.log('Failed to send email.');
        //     // Handle email sending failure, if needed
        //   }
        // })
        // .catch((error) => {
        //   console.error('Error sending email:', error);
        //   // Handle email sending failure, if needed
        // });
  

    console.log(paymentData)
  
    axios
      .post('http://localhost:3001/payments', paymentData)
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
        // Handle success, display a success message or redirect to another page

        toast.success('Payment successfully made!', {
          position: 'top-right',
          autoClose: 500, // Show the toast for 0.5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Handle success, display a success message or redirect to another page

      })
      .catch((error) => {
        console.error('Error submitting payment:', error);
        setSubmitting(false);
        // Handle error, display an error message, or handle accordingly

        toast.error('Error submitting payment. Please try again.', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Handle error, display an error message, or handle accordingly

      });
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  const handleFormReset = () => {
    formik.resetForm(); // Add this line to reset the form values
  };

  useEffect(() => {
    console.log(formik.errors)
  
   
  })
  


  const handleStudentIdChange = (event) => {
    const selectedStudentId = event.target.value;
    // Find the student with the selected ID from the list of students
    const selectedStudent = students.find((student) => student.studentID === selectedStudentId);
    // Set the selected student's name in the state variable
    setSelectedStudentName(selectedStudent ? selectedStudent.studentname : '');
    setSelectedStudentGrade(selectedStudent ? selectedStudent.grade : '');
    // Set the selected student ID in formik state
    formik.setFieldValue('studentId', selectedStudentId);
  };

  return (
    <div className='backgroundstreg'>
      <div className='addnamebar'>
        <Namebar />
      </div>

      <div className='addnavbar'>
        <Navbar />
      </div>

      <div className='paymentformdiv'>
        <form id='payment-form' className='payment-form' onSubmit={formik.handleSubmit} onReset={handleFormReset}>
          <h2>Make Payments</h2>

          <div className='form-row'>
        <label htmlFor='student-id'>Student ID:</label>
        <select
          id='student-id'
          name='studentId'
          value={formik.values.studentId}
          onChange={handleStudentIdChange} // Call the handleStudentIdChange function on change
        >
          <option value='' disabled>
            Select the Student ID
          </option>
          {students.map((student) => (
            <option key={student._id} value={student.studentID}>
              {student.studentID}
            </option>
          ))}
        </select>
        {formik.touched.studentId && formik.errors.studentId && (
          <div className='error-message'>{formik.errors.studentId}</div>
        )}
      </div>

          <div className='form-row'>
            <label htmlFor='student-name'>Student Name:</label>
            <input
              type='text'
              id='student-name'
              name='studentName'
              value={selectedStudentName} // Set the value to the selected student's name
              readOnly // Make it read-only to prevent user input
            />
          </div>

          <div className='form-row'>
            <label htmlFor='student-grade'>Grade:</label>
            <input
              type='text'
              id='student-grade'
              name='studentGrade'
              value={selectedStudentGrade} // Set the value to the selected student's grade
              readOnly // Make it read-only to prevent user input
            />
          </div>

          <div className='form-row'>
            <label htmlFor='month'>Month:</label>
            <select id='month' name='month' {...formik.getFieldProps('month')}>
              <option value='' disabled>
                Select the Month
              </option>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            {formik.touched.month && formik.errors.month && (
              <div className='error-message'>{formik.errors.month}</div>
            )}
          </div>

          <div className='form-row'>
              <label htmlFor='paidclass'>Class Attend:</label>
              <select id='paidclass' name='paidClass' {...formik.getFieldProps('paidClass')}>
                <option value='' disabled>
                  Select the class
                </option>
                {teachers.map((teacher) => (
                  <option key={teacher._id} value={`${teacher.teachersubject} - ${teacher.teacherfirstname} ${teacher.teacherlastname}`}>
                    {`${teacher.teachersubject} - ${teacher.teacherfirstname} ${teacher.teacherlastname}`}
                  </option>
                ))}
              </select>
              {formik.touched.paidClass && formik.errors.paidClass && (
                <div className='error-message'>{formik.errors.paidClass}</div>
              )}
          </div>

          <div className='form-row'>
            <label htmlFor='class-fees'>Class Fees:</label>
            <input
              type='text'
              id='class-fees'
              name='classFees'
              {...formik.getFieldProps('classFees')}
            />
            {formik.touched.classFees && formik.errors.classFees && (
              <div className='error-message'>{formik.errors.classFees}</div>
            )}
          </div>

          <div className='button-container'>
            <button  type='submit' disabled={formik.isSubmitting}>
              Make Payment
            </button>
            <button type='reset'>Reset</button>
          </div>
        </form>

        {/* Add the ToastContainer to display the toasts */}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    </div>
  );
}
