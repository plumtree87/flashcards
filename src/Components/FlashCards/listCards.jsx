
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import ModalButton from '../CreateFlashCard/modalButton'


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
     
   
       
       <div id='cardCounter'>{props.countCards}</div>
     
      
     
        {isFront ? <center>{props.deck.definition} </center> : <center>{props.deck.word}</center>}  
        
        <div id='flashCardDiv'>
        <button id='editCard' onClick={() => props.putCard(props.deck.id, props.deck.collection)}>Edit</button>
        </div>
        <div>
            
            <button id='deleteCard' onClick={() => props.deleteCard(props.deck.id, props.deck.collection)}>Delete</button>
        </div>
        </Card>
      
  

    );
}

export default Flash;

