import React, { useEffect, useState } from 'react';
import './MakePayments.css'; // Import the CSS file with the styles
import Namebar from '../Components/Namebar';
import Navbar from '../Components/Navbar';
import { useFormik } from 'formik';
import axios from 'axios';
import pdfMake from 'pdfmake'; // Change the import path here
import pdfFonts from 'pdfmake/build/vfs_fonts'; // Change the import path here
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function ResultReportTeacher() {
    const [paidClasses, setPaidClasses] = useState([]);
    const [grades, setGrades] = useState([]);
    const [examNos, setExamNos] = useState([]);
  
    useEffect(() => {
      // Fetch paid classes from the "results" collection
      axios
        .get('http://localhost:3001/results/paidclasses')
        .then((response) => setPaidClasses(response.data))
        .catch((error) => console.error('Error fetching paid classes:', error));
  
      // Fetch grades from the "results" collection
      axios
        .get('http://localhost:3001/results/grades')
        .then((response) => setGrades(response.data))
        .catch((error) => console.error('Error fetching grades:', error));
  
      // Fetch exam numbers from the "results" collection
      axios
        .get('http://localhost:3001/results/examnos')
        .then((response) => setExamNos(response.data))
        .catch((error) => console.error('Error fetching exam numbers:', error));
    }, []);
  
    const initialValues = {
      classx: '',
      gradex: '',
      examNo: '',
    };
  
    const onSubmit = (values) => {
      console.log(values)
      // Fetch the data for the report based on the selected values
      axios
        .post('http://localhost:3001/results/report', {        
            classx: values.classx,
            gradex: values.gradex,
            examNo: values.examNo,
      
        })
        .then((response) => {
          console.log(response)
          console.log('Response from server:', response.data);
          const reportData = response.data;
          generatePDFReport(reportData); // Call the function to generate the PDF report
          console.log('Report data:', reportData);
        })
        .catch((error) => console.error('Error fetching report data:', error));
    };
  
  
  // Function to generate the PDF report
  const generatePDFReport = (reportData) => {
    console.log(reportData)
    if (!Array.isArray(reportData)) {
      console.error('Invalid report data. Expected an array.');
      return;
    }
  
    const documentDefinition = {
      content: [
        { text: 'Results Report', style: 'header' },
        { text: '\n\n' },
        {
          style: 'table',
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['Student Name', 'Grade', 'Exam NO', 'Marks'],
              ...reportData.map((data) => [
                data.studentName,
                data.grade,
                data.examNo,
                data.marks,
              ]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        table: {
          alignment: 'center',
        },
      },
    };
  
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('results_report.pdf'); // Download the PDF file with the specified name
  };
  
  
  
    const validate = (values) => {
      const errors = {};
  
      if (!values.classx) {
        errors.classx = 'Class is required';
      }
  
      if (!values.gradex) {
        errors.gradex = 'Grade is required';
      }
  
      if (!values.examNo) {
        errors.examNo = 'Exam No is required';
      }
  
      return errors;
    };
  
    const formik = useFormik({
      initialValues,
      onSubmit,
      // validate,
    });
  
    return (
      <div className="backgroundstreg">
        <div className='addnamebar'>
          <Namebar />
        </div>
  

  
        <div className="paymentformdiv">
          <form className="payment-form" onSubmit={formik.handleSubmit}>
            <h2>Result Report</h2>
  
            <div className="form-row">
              <label htmlFor="classx">Class</label>
              <select
                id="classx"
                name="classx"
                value={formik.values.classx}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select Class
                </option>
                {paidClasses.map((paidClass) => (
                  <option key={paidClass} value={paidClass}>
                    {paidClass}
                  </option>
                ))}
              </select>
              {formik.touched.classx && formik.errors.classx && (
                <div className="error-message">{formik.errors.classx}</div>
              )}
            </div>
  
            <div className="form-row">
              <label htmlFor="gradex">Grade</label>
              <select
                id="gradex"
                name="gradex"
                value={formik.values.gradex}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select Grade
                </option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {formik.touched.gradex && formik.errors.gradex && (
                <div className="error-message">{formik.errors.gradex}</div>
              )}
            </div>
  
            <div className="form-row">
              <label htmlFor="examNo">Exam No</label>
              <select
                id="examNo"
                name="examNo"
                value={formik.values.examNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select Exam No
                </option>
                {examNos.map((examNo) => (
                  <option key={examNo} value={examNo}>
                    {examNo}
                  </option>
                ))}
              </select>
              {formik.touched.examNo && formik.errors.examNo && (
                <div className="error-message">{formik.errors.examNo}</div>
              )}
            </div>
  
            <div className="button-container">
              <button type="submit">Print Report</button>
              <button type="button" onClick={formik.handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
