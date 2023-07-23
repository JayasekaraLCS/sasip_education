import React from 'react';
import './TeacherRegistration.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import axios from 'axios';


export default function TeacherRegistration() {
  
  const validate = values =>{
    const errors = {};

    if(!values.teacherID){
      errors.teacherID = 'Required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.teacherID)){
      errors.email = 'Invalid TeacherID';
    }

    if(!values.teacherpassword){
      errors.teacherpassword = 'Required';
    }

    else if(!/^[a-zA-Z0-9]+$/i.test(values.password)){
      errors.password = 'Invalid password.'
    }


    if(!values.teachername){
      errors.teachername = 'Required';
    }
    else if(!/^[A-Za-z\s]+$/i.test(values.teachername)){
      errors.teachername = 'Invalid Name.';
    }

    
    if(!values.teacherfirstname){
      errors.teacherfirstname = 'Required';
    }
    else if(!/^[a-zA-Z]+$/i.test(values.teacherfirstname)){
      errors.teacherfirstname = 'Invalid Name.';
    }

    if(!values.teacherlastname){
      errors.teacherlastname = 'Required';
    }
    else if(!/^[a-zA-Z]+$/i.test(values.teacherfirstname)){
      errors.teacherlastname = 'Invalid Name.';
    }

    if(!values.nic){
      errors.nic = 'Required';
    }
    else if(!/^(\d{9}[vVxX]|\d{12})$/i.test(values.nic)){
      errors.nic = 'Invalid NIC Number.';
    }

    if(!values.teacherphone){
      errors.teacherphone = 'Required';
    }
    else if(!/^\d{9}$/i.test(values.teacherphone)){
      errors.teacherphone = 'Invalid Phone Number.';
    }


    const imageFile = values.teacherimage;
    if (!imageFile) {
      errors.teacherimage = 'Image is required.';
    } 


    if(!values.teachersubject){
      errors.teachersubject = 'Required';
    }
    else if(!/^[a-zA-Z]+$/i.test(values.teacherfirstname)){
      errors.teachersubject = 'Invalid Subject Name.';
    }

    




    return errors;

  };

  

  const formik = useFormik({
    initialValues: {
      teacherID: '',
      teacherpassword: '',
      teachername: '',
      teacherfirstname: '',
      teacherlastname: '',
      nic: '',
      teacherphone: '',
      teacherimage: '',
      teachersubject: '',
    },

    validate,

    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      axios.post('http://localhost:3001/register',{
        teacherID: values.teacherID,
        teacherpassword: values.teacherpassword,
        teachername: values.teachername,
        teacherfirstname: values.teacherfirstname,
        teacherlastname: values.teacherlastname,
        nic: values.nic,
        teacherphone: values.teacherphone,
        teacherimage: values.teacherimage,
        teachersubject: values.teachersubject
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
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

      <div className='body'>
        
        <form onSubmit={formik.handleSubmit} onReset={handleFormReset}>
            <h2>Teacher Registration Form</h2>
            <hr/>
            <h3>Teacher Details</h3>

            <div className="form-row">
            <label htmlfor="TeacherID">TeacherID/UserID:</label>
            <input type="email" id="teacherID" name="teacherID" placeholder='Enter the email' onChange={formik.handleChange} value={formik.values.teacherID}/>
                    {formik.touched.teacherID && formik.errors.teacherID ? (
                <div>{formik.errors.teacherID}</div>
              ) : null}
            
            </div>

            <div className="form-row">
            <label htmlFor="teacherpassword">Password:</label>
            <input type="password" id="teacherpassword" name="teacherpassword" placeholder='Enter the password' onChange={formik.handleChange} value={formik.values.teacherpassword}/>
                    {formik.touched.teacherpassword && formik.errors.teacherpassword ? (
                        <div>{formik.errors.teacherpassword}</div>
                      ) : null}      
            </div>

            <div className="form-row">
            <label htmlFor="Teacher-Name">Teacher Name:</label>
            <input type="text" id="teachername" name="teachername" placeholder='Enter the full name' onChange={formik.handleChange} value={formik.values.teachername} />
            {formik.touched.teachername && formik.errors.teachername ? (
                <div>{formik.errors.teachername}</div>
              ) : null}
            
            </div>

            <div className="form-row">
            <label htmlFor="Teacher-First-Name">First Name:</label>
            <input type="text" id="teacherfirstname" name="teacherfirstname" placeholder='Enter first name' onChange={formik.handleChange} value={formik.values.teacherfirstname} />
            {formik.touched.teacherfirstname && formik.errors.teacherfirstname ? (
                <div>{formik.errors.teacherfirstname}</div>
              ) : null}
            </div>

            <div className="form-row">
            <label htmlFor="Teacher-Last-Name">Last Name:</label>
            <input type="text" id="teacherlastname" name="teacherlastname" placeholder='Enter last name' onChange={formik.handleChange} value={formik.values.teacherlastname} />
            {formik.touched.teacherlastname && formik.errors.teacherlastname ? (
                <div>{formik.errors.teacherlastname}</div>
              ) : null}
            </div>

            <div className="form-row">
            <label htmlFor="NIC">NIC:</label>
            <input type="text" id="nic" name="nic" placeholder='Enter NIC number' onChange={formik.handleChange} value={formik.values.nic}/>
            {formik.touched.nic && formik.errors.nic ? (
                <div>{formik.errors.nic}</div>
              ) : null}
            </div>

            
            <div className="form-row">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" id="teacherphone" name="teacherphone" placeholder='Enter Phone number' onChange={formik.handleChange} value={formik.values.teacherphone} />
            {formik.touched.teacherphone && formik.errors.teacherphone ? (
                <div>{formik.errors.teacherphone}</div>
              ) : null}
            </div>


            <div className="form-row">
            <label htmlFor="student-image">Teacher Image:</label>
            <input type="file" id="teacherimage" name="teacherimage" onChange={formik.handleChange} value={formik.values.teacherimage}/>
                {formik.touched.teacherimage && formik.errors.teacherimage ? (
                    <div>{formik.errors.teacherimage}</div>
                  ) : null}
            </div>

            <div className="form-row">
            <label htmlFor="teacher-subject">Subject:</label>
            <input type="text" id="teachersubject" name="teachersubject" placeholder='Enter the teaching subject' onChange={formik.handleChange} value={formik.values.teachersubject} />
            {formik.touched.teachersubject && formik.errors.teachersubject ? (
                <div>{formik.errors.teachersubject}</div>
              ) : null}
            </div>

            
            <center>
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
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
  )
}
