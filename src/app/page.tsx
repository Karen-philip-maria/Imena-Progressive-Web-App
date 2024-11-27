import Image from "next/image";
import Sidebar from "./SidebarDashboard"
import Chat from "./Chats"
// import Assignments from "./Assignment"
import StackedBarChart from "./StackedBarChart"
import Dashboard from "./Dashboard"
import HomePage from "./AssignmentDashboard"
// import GradesPage from "./Grades"
import PracticalPage from "./Practicals"
import FileUpload from "./FileUpload"
import TeacherHomepage from "./TeacherHomepage"
// import Assignments from "./AssignmentPage"
import GradesPage from "./GradesGeneral"

export default function Home() {
  return (
    <div>
      <main >
    {/* <Sidebar/> */}
    {/* <HomePage/> */}
    {/* <Chat/> */}
    {/* <Assignments/> */}
    {/* <PracticalPage/> */}
    {/* <StackedBarChart/> */}
    {/* <Dashboard/> */}
    {/* <GradesPage/> */}
    {/* <FileUpload/> */}
    <TeacherHomepage/>
    {/* <Assignments/> */}
    {/* <GradesPage/> */}
      </main>
  
    </div>
  );
}
