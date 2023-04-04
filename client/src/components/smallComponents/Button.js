import React from 'react';
import '../smallComponents/Button.css'
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';


function Button(props) {
    const width = props.width ? props.width : '80%';
    const fontSize = props.fontSize ? props.fontSize : '20px';
    const padding = props.padding ? props.padding : '0px'
    return (<>
        <Link to={props.route} className="button-17" onClick={props.onClick}>
            {props.inner} 
            <div style={{
                padding,
                fontSize,
                width,
                display: "inline-block",
                margin: "0 auto",
                paddingTop: "20px",
                 }}>
                {props.title}</div>
        </Link>
        </>  );
}

export default Button;

