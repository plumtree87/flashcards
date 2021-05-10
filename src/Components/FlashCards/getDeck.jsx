
import React from 'react'
import { Card } from 'react-bootstrap';

const GetDeck = (props) => {

   
    return (
        <div id='test' >
       <Card id='getDeckCard'  >
        {props.collection.title}
        <button id='study' onClick={() => props.getDeck(props.collection.id)}> Study </button>
        <button id='deleteDeck' onClick={() => props.deleteCollection(props.collection.id)}>Delete</button>
       </Card>

       </div>
    );
}

export default GetDeck;

