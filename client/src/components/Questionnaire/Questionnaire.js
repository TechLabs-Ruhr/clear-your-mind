import React, {useState} from 'react';
import Questions from './Questions'
import Results from './Results'
import {questionnaire} from '../dummy';
import Header from '../Header';
import Footer from '../Footer';

export function Questionnaire() {
  const [isComplete, setComplete] = useState(false);
  const [result, setResult] = useState(0);

  const toggleVisibility = () => {
    setComplete(!isComplete);
  }
    
    return (<>
    <Header isLine={true}/>
    <div  className="container mt-3" style={{color:"#F6F7EB", paddingTop: "100px", paddingBottom: "100px"}}>
      <h1>{questionnaire[0].title}</h1>
      {!isComplete && (
        <Questions toggleVisibility={toggleVisibility} setResult={setResult} />
      )}
      {isComplete && (
        <Results result={result} />
      )}
    </div>
    <Footer isLine={true}/>
    </> );
}
