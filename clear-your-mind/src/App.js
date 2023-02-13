import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import {About} from './components/About';
import {Questionnaire} from './components/Questionnaire';


function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}> </Route>
    <Route path='/questionnaire' element={<Questionnaire/>}> </Route>

   </Routes>
  );
}

export default App;
