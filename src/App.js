import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Namebar from './Components/Namebar';
import AdminPanel from './Pages/AdminPanel';
import Status from './Components/Status';
import StudentRegistration from './Pages/StudentRegistration';
import PageSetup from './Components/PageSetup';
import Example from './Pages/Example';
import TeacherRegistration from './Pages/TeacherRegistration';
import MarkAttendance from './Pages/MarkAttendance';



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Namebar/> */}
      <AdminPanel/>
      {/* <Status/> */}
      {/* <StudentRegistration/> */}
      {/* <PageSetup/> */}
      {/* <Example/> */}
      {/* <TeacherRegistration/> */}
      {/* <MarkAttendance/> */}
    </div>
  );
}

export default App;
