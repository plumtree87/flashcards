import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';


const View = (props) => {

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
        <div>
        <div>
            <button onClick={() => props.nextCard()}>
                Next Card
            </button>
        
        </div>
        <Card id='flashCardView' onClick={() => callTwoFunctions()}>
     
   
       
       <div id='cardCounter'>{props.countCards}</div>
     
      
     
        {isFront ? props.card.definition : <center>{props.card.word}</center>}  
        
        <div id='flashCardViewDiv'>
        <button id='editCard' onClick={() => props.putCard(props.deck.id, props.deck.collection)}>Edit</button>
        </div>
        <div>
            
            <button id='deleteCard' onClick={() => props.deleteCard(props.deck.id, props.deck.collection)}>Delete</button>
        </div>
        </Card>
        <div>
        <button onClick={() => props.previousCard()}>
        Previous Card
        </button>
        </div>
        </div>
      
  

    );
}

export default View;