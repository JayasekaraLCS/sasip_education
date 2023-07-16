import './TeacherRegistration.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'
import { useFormik } from 'formik';


export default function TeacherRegistration() {
  
  const validate = values =>{
    const errors = {};

    if(!values.teacherID){
      errors.teacherID = 'Required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.teacherID)){
      errors.email = 'Invalid TeacherID';
    }

    if(!values.teachername){
      errors.teachername = 'Required';
    }
    else if(!/^[a-zA-Z]+$/i.test(values.teachername)){
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
    else if(!/^\d{10}$/i.test(values.teacherphone)){
      errors.teacherphone = 'Invalid Phone Number.';
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
      teachername: '',
      teacherfirstname: '',
      teacherlastname: '',
      nic: '',
      teacherphone: '',
      teachersubject: '',
    },

    validate,

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

      <div className='body'>
        
        <form onSubmit={formik.handleSubmit}>
            <h2>Teacher Registration Form</h2>
            <hr/>
            <h3>Teacher Details</h3>

            <div className="form-row">
            <label htmlfor="TeacherID">TeacherID/UserID:</label>
            <input type="email" id="teacherID" name="teacherID" placeholder='Enter the email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.teacherID}/>
                    {formik.touched.teacherID && formik.errors.teacherID ? (
                <div>{formik.errors.teacherID}</div>
              ) : null}
            
            </div>

            <div className="form-row">
            <label htmlFor="password">Password:</label>
            <input type="password" id="teacherpassword" name="teacherpassword" placeholder='Enter the password'  required/>
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
            <input type="file" id="teacherimage" name="teacherimage" required/>
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
        
    </div>

      

    </div>
  )
}
