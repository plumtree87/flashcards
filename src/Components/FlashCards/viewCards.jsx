import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';


const View = (props) => {

   const [isFront, setSide] = useState(false);


   useEffect(() =>{
       console.log('Use Effect running', isFront)
   });


    const handleClick = (event) => {
        event.stopPropagation();
        setSide(!isFront);
    }

    return (
     
    
        <ReactCardFlip isFlipped={isFront} flipDirection='vertical'>

        <div id='frontView' style={{backgroundColor: 'green', color: 'white'}} onClick={handleClick}>
           <center>{props.card.word}  </center> 
     
  
        </div>

        <div id='backView' style={{backgroundColor: 'white', color: 'green'}}  onClick={handleClick}>
        <button id='cardViewNext' onClick={() => props.nextCard()}> <center>{props.card.definition}</center></button>
         
        
         <div>
        
        </div>
        </div>  

       
  
        </ReactCardFlip>

 
      
  

    );
}

export default View;


/* <div>

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

    <button id='nextCardButton' onClick={() => props.nextCard()}>
        Next Card
    </button>


</div>

</div> */