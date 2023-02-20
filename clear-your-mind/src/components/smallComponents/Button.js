
import React from 'react';
import '../smallComponents/Button.css'
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';


function Button(props) {

  //  const history = useHistory();
/*
    const handleClick = () => {
        history.push(props.to);
    };
*/
    return (<>
        <Link to={props.route} className="button-17">
            {props.inner} 
            <div style={{ width: "80%", display: "inline-block", margin: "0 auto" }}>{props.title}</div>
        </Link>
        </>  );
}

export default Button;

