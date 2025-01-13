import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/shared/Layout'
import Login from './pages/Auth/LoginForm'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ProtectedRoute from './components/routes/ProtectedRoute'
import ResetPasswordLink from './pages/Auth/ResetPasswordLink'
import NewPassword from './pages/Auth/NewPassword'
import SuccessPassword from './pages/Auth/SuccessPassword'
import CreateUser from './pages/Users/CreateUser'
import UsersPage from './pages/Users/UsersPage'
import UpdateUser from './pages/Users/UpdateUser'
import ProfileSettings from './pages/Profile/ProfileSettings'
import  Clients from './pages/Clients/ClientsPage'
import BusinessDetails from './pages/Clients/BusinessDetails'
import BusinessInformation from './pages/Clients/NewCLient'
import ContentCalendars from './pages/Clients/ContentCalendars'
import Plan from './pages/Clients/Plan'
import MonthlyView from './pages/Clients/CalendarMonthlyView'
import WebDevelopmentDetails from './pages/Clients/WebDevelopmentDetails'
import Teams from './pages/Teams/TeamsPage'
import CreateTeam from './pages/Teams/CreateTeam'
import EditTeam from './pages/Teams/EditTeamPage'
import Meetings from './pages/Meetings/MeetingsPage'
import MeetingsForm from './pages/Meetings/MeetingForm'
import CalendarPage from './pages/Clients/CalendarPage'
import CalendarVariables from'./pages/Profile/CalendarVariables'
import ClientSheet from './pages/Accountant/ClientsSheet'
import AssignedTasks from './pages/Accountant/AssignedTasks'
import AssignedTask from './pages/Accountant/AssignedTask'
import CreatePlanSet from './pages/Profile/CreatePlanSets'
import PlanSets from './pages/Profile/PlanSets'
import Threads from './pages/Clients/Threads'
import Proposals from './pages/AccountManager/Proposal'
import Reports from './pages/AccountManager/Reports'
// import CalendarMonthlyView from './pages/Clients/CalendarMonthlyView'
 
function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link-sent" element={<ResetPasswordLink />} />
        <Route path="/set-password/:token/:uid" element={<NewPassword />} />
        <Route path="/success-password" element={<SuccessPassword />} />

      <Route element={<Layout />}>
        <Route path="/" element={<ProtectedRoute><h1>Home Page</h1></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
        <Route path="/users/create" element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
        <Route path="/users/view" element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
        <Route path="/users/calendar-variables" element={<ProtectedRoute><CalendarVariables /></ProtectedRoute>} />
        <Route path="/profile-settings/update" element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>} />
        <Route path="/clients" element={<ProtectedRoute><Clients/></ProtectedRoute>} />
        <Route path="/clients/:clientId/*" element={<ProtectedRoute><BusinessDetails/></ProtectedRoute>} />
        <Route path="/clients/:clientId/business-details" element={<ProtectedRoute><BusinessDetails/></ProtectedRoute>} />
        <Route path="/clients/:clientId/business-information" element={<ProtectedRoute><BusinessInformation/></ProtectedRoute>} />
        <Route path="/clients/:clientId/content-calendars" element={<ProtectedRoute><ContentCalendars/></ProtectedRoute>} />
        <Route path="/clients/:clientId/content-calendars/calendar" element={<ProtectedRoute><CalendarPage/></ProtectedRoute>} />
        <Route path="/clients/:clientId/plan" element={<ProtectedRoute><Plan/></ProtectedRoute>} />
        <Route path="/clients/:clientId/calendar-monthly-view" element={<ProtectedRoute><MonthlyView/></ProtectedRoute>} />
        <Route path="/clients/:clientId/web-development-details" element={<ProtectedRoute><WebDevelopmentDetails/></ProtectedRoute>} />
        <Route path="/clients/:clientId/threads" element={<ProtectedRoute><Threads/></ProtectedRoute>} />
        <Route path="clients/:clientId/proposal" element={<ProtectedRoute><Proposals/></ProtectedRoute>} />
        <Route path="clients/:clientId/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>} />
        <Route path="/teams" element={<ProtectedRoute><Teams/></ProtectedRoute>} />
        <Route path="/teams/create-team" element={<ProtectedRoute><CreateTeam/></ProtectedRoute>} />
        <Route path="/teams/edit-team" element={<ProtectedRoute><EditTeam/></ProtectedRoute>} />
        <Route path="/meetings" element={<ProtectedRoute><Meetings/></ProtectedRoute>} />
        <Route path="/meetings-form" element={<ProtectedRoute><MeetingsForm/></ProtectedRoute>} />
        <Route path="/client-sheet" element={<ProtectedRoute><ClientSheet/></ProtectedRoute>} />
        <Route path="/assigned-tasks" element={<ProtectedRoute><AssignedTasks/></ProtectedRoute>} />
        <Route path="/assigned-task" element={<ProtectedRoute><AssignedTask/></ProtectedRoute>} />
        <Route path="/create-plan-set" element={<ProtectedRoute><CreatePlanSet/></ProtectedRoute>} />
        <Route path="/plansets" element={<ProtectedRoute><PlanSets/></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}

export default App
