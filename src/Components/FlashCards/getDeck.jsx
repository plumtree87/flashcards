
import React from 'react'
import { Card } from 'react-bootstrap';

const GetDeck = (props) => {

   
    return (
        <div id='test' >
      
       <Card id='getDeckCard'  >
        {props.collection.title}   {props.collection.id}
        <button onClick={() => props.getDeck(props.collection.id)}> Study </button>
       </Card>

       </div>
    );
}

export default GetDeck;

