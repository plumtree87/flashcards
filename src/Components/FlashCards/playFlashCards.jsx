
import React from 'react'
import { Card } from 'react-bootstrap';


const Flash = (props) => {

    console.log()



    return (
        <div id='flash'>
       <Card id='flashCard'>
        {props.deck.word} {props.deck.definition} HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
       </Card>
       </div>
  

    );
}

export default Flash;

