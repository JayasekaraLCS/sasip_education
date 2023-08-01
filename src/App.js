import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Namebar from './Components/Namebar';
import AdminPanel from './Pages/AdminPanel';
import Status from './Components/Status';
import StudentRegistration from './Pages/StudentRegistration';
import PageSetup from './Components/PageSetup';
import TeacherRegistration from './Pages/TeacherRegistration';
import MarkAttendance from './Pages/MarkAttendance';
import MakePayments from './Pages/MakePayments';
import CheckPayments from './Pages/CheckPayments';
import CheckAttendance from './Pages/CheckAttendance';
import GenerateReports from './Pages/GenerateReports';
import CheckResults from './Pages/CheckResults';
import AddResults from './Pages/AddResults';
import NoPage from './Pages/NoPage';
import StudentLogin from './Pages/StudentLogin';
import TeacherLogin from './Pages/TeacherLogin';
import VIewTeachers from './Pages/VIewTeachers';
import ViewStudents from './Pages/ViewStudents';
import UpdateTeacher from './Pages/UpdateTeacher';
import DeleteTeacher from './Pages/DeleteTeacher';
import UpdateStudent from './Pages/UpdateStudent';
import TeacherRegistrationPage from './Pages/TeacherRegistrationPage';
import UpdateStudentPage from './Pages/UpdateStudentPage';
import DeleteStudent from './Pages/DeleteStudent';
import ViewTeacherProfile from './Pages/ViewTeacherProfile';
import MakeOnlinePayments from './Pages/MakeOnlinePayments';
import ResultsReport from './Pages/ResultsReport';
import AttendanceReport from './Pages/AttendanceReport';
import NotPaymentsDetails from './Pages/NotPaymentsDetails';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Login/>} />
          <Route path ='/AdminPanel' element={<AdminPanel/>} />
          <Route path = '/StudentRegistration' element={<StudentRegistration/>} />
          <Route path = '/TeacherRegistration' element={<TeacherRegistration/>} />
          <Route path = '/MarkAttendance' element ={<MarkAttendance/>}  />
          <Route path = '/MakePayments' element={<MakePayments/>} />
          <Route path = '/CheckPayments' element={<CheckPayments/>}  />
          <Route path = '/CheckAttendance' element={<CheckAttendance/>} />
          <Route path = '/GenerateReports' element={<GenerateReports/>}  />
          <Route path = '/CheckResults' element ={<CheckResults/>}  />
          <Route path = '/AddResults' element ={<AddResults/>}  />
          <Route path ='*' element ={<NoPage/>}  />
          <Route path = '/StudentLogin' element ={<StudentLogin/>}  />
          <Route path = '/TeacherLogin' element ={<TeacherLogin/>} />
          <Route path = '/VIewTeachers' element ={<VIewTeachers/>} />
          <Route path = '/ViewStudents' element ={<ViewStudents/>} />
          <Route path = '/UpdateTeacher' element ={<UpdateTeacher/>} />
          <Route path = '/DeleteTeacher' element ={<DeleteTeacher/>} />
          <Route path = '/UpdateStudent' element ={<UpdateStudent/>} />
          <Route path = '/TeacherRegistrationPage' element = {<TeacherRegistrationPage/>} />
          <Route path = '/UpdateStudentPage' element = {<UpdateStudentPage/>} />
          <Route path = '/DeleteStudent' element = {<DeleteStudent/>} />
          <Route path = '/ViewTeacherProfile' element = {<ViewTeacherProfile/>} />
          <Route path = '/MakeOnlinePayments' element = {<MakeOnlinePayments/>} />
          <Route path = '/ResultsReport'  element = {<ResultsReport/>} />
          <Route path = '/AttendanceReport' element = {<AttendanceReport/>} />
          <Route path = '/NotPaymentsDetails' element = {<NotPaymentsDetails/>} />
          
          
          
          
          

          

        </Routes>

      </BrowserRouter>











     
      {/* <Navbar/> */}
      {/* <Namebar/> */}
      {/* <Status/> */}
      {/* <PageSetup/> */}
      {/* <Example/> */}
      {/* <NoPage/> */}
      {/* <AddResults/> */}
      {/* <TeacherRegistrationPage/> */}
      
    </div>
  );
}

export default App;
