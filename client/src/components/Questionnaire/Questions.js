import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {questions, questionnaire} from '../dummy';

export default function Questions({toggleVisibility, setResult}) {
    const [answers, setAnswers] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setResult(calculateResult())
        toggleVisibility();
      }


    function handleOptionChange(questionIndex, optionIndex) {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    }

    function calculateResult() {
        return answers.reduce((acc, answer) => {
          return answer >= 0 ? acc + answer : acc;
        }, 0);
      }
    
    return (<>
    <div style={{color:"#F6F7EB"}}>
    <div>
          <p>{questionnaire[0].instructions}</p>
    </div> 
    <form onSubmit={handleSubmit}>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
        <Row className='mb-3'>
          <h3>{question.question}</h3>
          {question.answers.map((option, optionIndex) => (
            <label className="container mt-3" key={optionIndex}>
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value= {option}
                checked={answers[questionIndex] === optionIndex}
                onChange={() => handleOptionChange(questionIndex, optionIndex)}
                required
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
