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
  const [selectedStudentName, setSelectedStudentName] = useState('');
  const [selectedStudentGrade, setSelectedStudentGrade] = useState('');

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
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cardholderName: '',
    securityCode: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.studentId) {
      errors.studentId = 'Student ID is required';
    }

    if (!values.month) {
      errors.month = 'Month is required';
    }

    if (!values.paidClass) {
      errors.paidClass = 'Class Attend is required';
    }

    if (!values.classFees) {
      errors.classFees = 'Class Fees is required';
    } else if (isNaN(values.classFees) || values.classFees < 1000 || values.classFees > 2500) {
      errors.classFees = 'Class Fees must be between 1000.00 LKR and 2500.00 LKR';
    }

    if (!values.cardNumber) {
      errors.cardNumber = 'Card Number is required';
    }

    if (!values.expiryMonth) {
      errors.expiryMonth = 'Expiry Month is required';
    }

    if (!values.expiryYear) {
      errors.expiryYear = 'Expiry Year is required';
    }

    if (!values.cardholderName) {
      errors.cardholderName = 'Cardholder Name is required';
    }

    if (!values.securityCode) {
      errors.securityCode = 'Security Code is required';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const paymentData = {
      studentId: values.studentId,
      studentName: selectedStudentName,
      grade: selectedStudentGrade,
      month: values.month,
      paidClass: values.paidClass,
      classFees: values.classFees,
    //   cardNumber: values.cardNumber,
    //   expiryMonth: values.expiryMonth,
    //   expiryYear: values.expiryYear,
    //   cardholderName: values.cardholderName,
    //   securityCode: values.securityCode,
    };

    axios
      .post('http://localhost:3001/payments-email', paymentData)
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
        toast.success('Payment successfully made!', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error submitting payment:', error);
        setSubmitting(false);
        toast.error('Error submitting payment. Please try again.', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  const handleFormReset = () => {
    formik.resetForm();
  };

  const handleStudentIdChange = (event) => {
    const selectedStudentId = event.target.value;
    const selectedStudent = students.find((student) => student.studentID === selectedStudentId);
    setSelectedStudentName(selectedStudent ? selectedStudent.studentname : '');
    setSelectedStudentGrade(selectedStudent ? selectedStudent.grade : '');
    formik.setFieldValue('studentId', selectedStudentId);
  };

  return (
    <div className='backgroundstreg'>
      <div className='addnamebar'>
        <Namebar />
      </div>

      <div className='addnavbar'>
        {/* <Navbar /> */}
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
              onChange={handleStudentIdChange}
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
              value={selectedStudentName}
              readOnly
            />
          </div>

          <div className='form-row'>
            <label htmlFor='student-grade'>Grade:</label>
            <input
              type='text'
              id='student-grade'
              name='studentGrade'
              value={selectedStudentGrade}
              readOnly
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

          {/* Payment Details */}
          <div className='payment-details'>
            <h3>Transaction Details(Secure Payments)</h3>
            <div className='form-row'>
              <label htmlFor='card-number'>Card Number:</label>
              <input
                type='number'
                id='card-number'
                name='cardNumber'
                {...formik.getFieldProps('cardNumber')}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber && (
                <div className='error-message'>{formik.errors.cardNumber}</div>
              )}
            </div>

            <div className='form-row'>
              <label htmlFor='expiry-month'>Expiry Month:</label>
              <input
                type='number'
                id='expiry-month'
                name='expiryMonth'
                {...formik.getFieldProps('expiryMonth')}
              />
              {formik.touched.expiryMonth && formik.errors.expiryMonth && (
                <div className='error-message'>{formik.errors.expiryMonth}</div>
              )}
            </div>

            <div className='form-row'>
              <label htmlFor='expiry-year'>Expiry Year:</label>
              <input
                type='number'
                id='expiry-year'
                name='expiryYear'
                {...formik.getFieldProps('expiryYear')}
              />
              {formik.touched.expiryYear && formik.errors.expiryYear && (
                <div className='error-message'>{formik.errors.expiryYear}</div>
              )}
            </div>

            <div className='form-row'>
              <label htmlFor='cardholder-name'>Cardholder Name:</label>
              <input
                type='text'
                id='cardholder-name'
                name='cardholderName'
                {...formik.getFieldProps('cardholderName')}
              />
              {formik.touched.cardholderName && formik.errors.cardholderName && (
                <div className='error-message'>{formik.errors.cardholderName}</div>
              )}
            </div>

            <div className='form-row'>
              <label htmlFor='security-code'>Security Code:</label>
              <input
                type='number'
                id='security-code'
                name='securityCode'
                {...formik.getFieldProps('securityCode')}
              />
              {formik.touched.securityCode && formik.errors.securityCode && (
                <div className='error-message'>{formik.errors.securityCode}</div>
              )}
            </div>
          </div>

          <div className='button-container'>
            <button type='submit' disabled={formik.isSubmitting}>
              Make Payment
            </button>
            <button type='reset'>Reset</button>
          </div>
        </form>

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
