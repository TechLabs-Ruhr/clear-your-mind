import React from 'react';
import {results} from '../dummy';



export default function Results({result}) {

    let userResult = ""

    if (result > 0 && result <= 10){
        userResult = results[0].text
    } else if (result > 10 && result <= 16){
        userResult = results[1].text
    } else if (result > 16 && result <= 20){
        userResult = results[2].text
    } else if (result > 20 && result <= 30){
        userResult = results[3].text
    } else if (result > 30 && result <= 40){
        userResult = results[4].text
    } else if (result > 40){
        userResult = results[5].text
    }

    return (<>
    <div style={{color:"#F6F7EB", minHeight: "100vh"}}>
      <h2>Based on your answers to the questionnaire: </h2>
      <h2>You scored {result}</h2>
      <h2>{userResult}</h2>
    </div>
    </> );
}
