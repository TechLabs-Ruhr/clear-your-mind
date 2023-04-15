import React from 'react';
import '../smallComponents/Button.css'
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';


function Button(props) {
    const width = props.width ? props.width : '80%';
    const fontSize = props.fontSize ? props.fontSize : '20px';
    const padding = props.padding ? props.padding : '0px'
    
    if (props.type === 'submit') {
        return (
            <>
                <button
                    className="button-17"
                    onClick={props.onClick}
                    type="submit"
                    style={{
                        padding,
                        fontSize,
                        width,
                        display: "inline-block",
                        margin: "0 auto",
                        paddingTop: "20px",
                    }}
                >
                    {props.inner}
                    {props.title}
                </button>
            </>
        );
    } else {
        return (
            <>
                <Link
                    to={props.route}
                    className="button-17"
                    onClick={props.onClick}
                    style={{
                        padding,
                        fontSize,
                        width,
                        display: "inline-block",
                        margin: "0 auto",
                        paddingTop: "20px",
                    }}
                >
                    {props.inner}
                    {props.title}
                </Link>
            </>
        );
    }
}

export default Button;


