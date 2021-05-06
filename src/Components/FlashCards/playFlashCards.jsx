
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';


const Flash = (props) => {

   const [isFront, setSide] = useState(false);


   useEffect(() =>{
       console.log('Use Effect running')
   });


   function callTwoFunctions(){
       setSide(!isFront)
    //    if(isFront === true){
    //        document.getElementById('flashCard').style.backgroundColor = 'yellow';
    //    }
    //    if(isFront === false){
    //        document.getElementById('flashCard').style.backgroundColor = 'brown';
    //    }
   }
 
    return (
       
        <Card id='flashCard' onClick={() => callTwoFunctions()}>
        {isFront ? props.deck.definition : props.deck.word}
        </Card>
      
  

    );
}

export default Flash;

