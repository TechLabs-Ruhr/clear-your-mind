import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import {About} from './components/About'
import ForumMain from './components/Forum/ForumMain';
import Dashboard from './components/Dashboard/Dashboard';
import MoodTracker from './components/Dashboard/MoodTracker';
import {Questionnaire} from './components/Questionnaire/Questionnaire';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/App.css';
import UserForm from './components/Authentication/user-form.component';
import Login from './components/Authentication/Login';



function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}> </Route>
      <Route path='forum' element={<ForumMain/>}> </Route>
      <Route path='MTD' element={<Dashboard/>}> </Route>
      <Route path='/MTD/moodTracker' element={<MoodTracker/>}> </Route>
      <Route path='/questionnaire' element={<Questionnaire/>}> </Route>
      <Route path='/register' element={<UserForm/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
   </Routes>
  );
}

export default App;
