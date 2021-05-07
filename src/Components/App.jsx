import CreateFlashCard from './CreateFlashCard/createFlashCard'
import React, { Component } from 'react';
import axios from 'axios';
import Flash from './FlashCards/playFlashCards'
import GetDeck from './FlashCards/getDeck'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';


class App extends Component {
    state = { 
        word: '',
        definition: '',
        collection: [],
        cards: [],
        collections: [],
        
    }


    componentDidMount(){
        this.getAllCollections();
       // this.getAllCards();
       console.log(this.state.cards)
    }

    async getAllCollections(){
        let collections = await axios.get('http://127.0.0.1:8000/collection/')
        this.setState({
            collections: collections.data
        })
      
    }

    async getAllCards(){
        let cards = await axios.get('http://127.0.0.1:8000/flashcards/');
        this.setState({
            cards: cards.data, 
        })

    }

    async putCard(id, xcollection){
        let xword = prompt('What do you want the front side for the WORD to be?')
        let xdefinition = prompt("What is the backside of the card for the defiintion of this word?")
        await axios.put(`http://127.0.0.1:8000/flashcards/${id}/`, {
            word: xword,
            definition: xdefinition,
            collection: xcollection
        })
        this.getDeck(xcollection)
    }

    captureFK(fk){
        console.log(fk)

    }

    async deleteCard(id, fk){
        console.log(id)
        console.log(fk)
        await axios.delete(`http://127.0.0.1:8000/flashcards/${id}/`)
        this.getDeck(fk)
    }

    async addCollection(collection){
      await axios.post('http://127.0.0.1:8000/collection/', collection);
       this.getAllCollections();

    }

    async deleteCollection(id){
        await axios.delete(`http://127.0.0.1:8000/single/${id}/`);
        this.getAllCollections();

    }



    async addCard(card){
        await axios.post('http://127.0.0.1:8000/flashcards/', card);
        this.getDeck(card.collection)
    }

    async getDeck(id){
    
        let collection = await axios.get(`http://127.0.0.1:8000/flashcards/${id}/`)
        this.setState({
            collection: collection.data
        })
        console.log(collection.data)
        let deck = collection.data.map(collection => {
            console.log('Flash Data', collection);
            return collection
        });
        console.log(deck)
        this.setState({
            cards: deck
        })
        console.log(this.state.cards)
        
    }

    mapCollections(){
        let collectionArray = this.state.collections.map(collection => {
            return collection
        })
        console.log(collectionArray)
        return collectionArray.map(collection =>
            <GetDeck  
         
            collection={collection}
            getDeck ={(id) => this.getDeck(id)}
            deleteCollection = {(id) => this.deleteCollection(id)}
        />
        )
    
    }

    //left some junk code inside putCard(parameters) in case i find time to put word and definition without a prompt, and still need them. I often forget to setup parameters properly here.
    renderDeck(){
        if(this.state.cards.length > 0){
            return this.state.cards.map(mappedCards =>{
               return <Flash 
               deck= {mappedCards}
               putCard={(id, xword, xdefinition, xcollection) => this.putCard(id, xword, xdefinition, xcollection)}
               deleteCard={(id, fk) => this.deleteCard(id, fk)}
                />
            });
            
        }
    }
    

    render() { 
        
     
        return (
            <div>
            <CreateFlashCard 
        addCollection={this.addCollection.bind(this)}
        addCard={this.addCard.bind(this)}
        collections={this.state.collections}
        mapDecks={this.mapCollections.bind(this)}
        />
            <Container>
                <Row>
                <Col id='deckCol'>
                <div className='scroll' id='scroll'>
            {this.mapCollections()}
            </div>
                </Col>
                <Col id='flashCardCol'>
                <div id='flash' className='card-grid'>
            {this.renderDeck()}
             
            </div>
                </Col>
                 </Row>
            </Container>

         


            </div>

        );
    }
}
 
export default App;