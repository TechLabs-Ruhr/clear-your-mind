import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import {About} from './components/About'
import ForumMain from './components/Forum/ForumMain';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}> </Route>
    <Route path='forum' element={<ForumMain/>}> </Route>
   </Routes>
  );
}

export default App;
