import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {questions, survey} from './dummy';

const options = ["Not at all", "Mildly, but it didn't bother me much", "Moderately - it wasn't pleasant at times", "Severely - it bothered me a lot"]

export function Questionnaire() {
    const [answers, setAnswers] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Survey answers:", answers);
      }

    function handleOptionChange(questionIndex, optionIndex) {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    }
    
    return (<>
    <div  className="container mt-3" style={{color:"#F6F7EB"}}>
        <h1>Questionnaire</h1>
    <div className="container mt-3">
        <p>{survey[0].instructions}</p>
    </div> 
    <form onSubmit={handleSubmit}>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
        <Row className='mb-3'>
          <h3>{question.question}</h3>
          {options.map((option, optionIndex) => (
            <label className="container mt-3" key={optionIndex}>
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={option}
                checked={answers[questionIndex] === optionIndex}
                onChange={() => handleOptionChange(questionIndex, optionIndex)}
              />
              {option}
            </label>
          ))}
        </Row>
        </div>
      ))}
      <Button variant="primary" type="submit">Submit</Button>
    </form> 
    </div>
    </> );
}
