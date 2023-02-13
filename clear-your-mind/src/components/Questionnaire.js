import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Questionnaire() {
    return (<>
    <div>
        <h1>Questionnaire</h1>
    </div>

    <div className="container">
        <Form style={{color:"white"}}>
            <ol>
                <li><p>Numbness or tingling</p></li>
                    <Form.Group className="mb-3">
                        <Form.Check type="radio" id="0" 
                        name = "q1" label="Not at all"/>
                        <Form.Check type="radio" id="1" 
                        name = "q1" label="Mildly, but it doesn't bother me much"/>
                        <Form.Check type="radio" id="2" 
                        name = "q1" label="Moderately - it isn't pleasant at times"/>
                        <Form.Check type="radio" id="3" 
                        name = "q1" label="Severely - it bothers me a lot"/>
                    </Form.Group>
                <li><p>Feeling hot</p></li>
                    <Form.Group className="mb-3">
                        <Form.Check type="radio" id="0" 
                        name = "q2" label="Not at all"/>
                        <Form.Check type="radio" id="1" 
                        name = "q2" label="Mildly, but it doesn't bother me much"/>
                        <Form.Check type="radio" id="2" 
                        name = "q2" label="Moderately - it isn't pleasant at times"/>
                        <Form.Check type="radio" id="3" 
                        name = "q2" label="Severely - it bothers me a lot"/>
                    </Form.Group>
                <li><p>Wobbliness in legs</p></li>
                    <Form.Group className="mb-3">
                        <Form.Check type="radio" id="0" 
                        name = "q3" label="Not at all"/>
                        <Form.Check type="radio" id="1" 
                        name = "q3" label="Mildly, but it doesn't bother me much"/>
                        <Form.Check type="radio" id="2" 
                        name = "q3" label="Moderately - it isn't pleasant at times"/>
                        <Form.Check type="radio" id="3" 
                        name = "q3" label="Severely - it bothers me a lot"/>
                    </Form.Group>
            </ol>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    <div  className="container mt-3" style={{color:"white"}}>
        <p>The total score is calculated by finding the sum of the 21 items.</p>
        <ul>
            <li>Score of 0-21 = low anxiety</li>
            <li>Score of 22-35 = moderate anxiety</li>
            <li>Score of 36 and above = potentially concerning levels of anxiety</li>
        </ul>
    </div>
    </> );
}
