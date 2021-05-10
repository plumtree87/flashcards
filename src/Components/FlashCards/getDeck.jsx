
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const GetDeck = (props) => {
    const [isColored, setColor] = useState(false)
    const [titleColor, setTitleColor] = useState(0)

    useEffect(() =>{
        console.log("UseEffect COLOR chosen deck is working", isColored)
    })


function colorTitle(id){
    console.log('setting titleColor to', id)
    setTitleColor(id)
    props.getDeck(id)

}

function colorDeck(id){
    if (id === titleColor){
        console.log('list item id =', id, 'set titleColor =', titleColor)
        return <b>{props.collection.title}</b>
    }
    else return props.collection.title
}

   
    return (
        <div id='test' >
    
       <Card id='getDeckCard'  >
        {colorDeck(props.collection.id)}
        <button id='study' onClick={() => colorTitle(props.collection.id)}> Study </button>
        <button id='deleteDeck' onClick={() => props.deleteCollection(props.collection.id)}>Delete</button>
       </Card>

       </div>
    );
}

export default GetDeck;

