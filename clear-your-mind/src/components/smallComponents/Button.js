
import React from 'react';
import '../smallComponents/Button.css'
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';


function Button(props) {
    const width = props.width ? props.width : '80%';
    return (<>
        <Link to={props.route} className="button-17" onClick={props.onClick}>
            {props.inner} 
            <div style={{ width, display: "inline-block", margin: "0 auto" }}>{props.title}</div>
        </Link>
        </>  );
}

export default Button;

