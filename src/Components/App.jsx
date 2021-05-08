import CreateFlashCard from './CreateFlashCard/createFlashCard'
import React, { Component } from 'react';
import axios from 'axios';
import Flash from './FlashCards/listCards'
import GetDeck from './FlashCards/getDeck'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { render } from '@testing-library/react';
import View from './FlashCards/viewCards';



class App extends Component {
    state = { 
        word: '',
        definition: '',
        collection: [],
        cards: [],
        collections: [],
        cardNumber: 0,
        viewTrueListFalse: true
        
    }


    componentDidMount(){
        this.getAllCollections();
       
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

    async deleteCard(id, fk){
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
    
        let deck = collection.data.map(collection => {
        
            return collection
        });
      
        this.setState({
            cards: deck
        })
      
        
    }

    mapCollections(){
        let collectionArray = this.state.collections.map(collection => {
            return collection
        })
   
        return collectionArray.map(collection =>
            <GetDeck  
         
            collection={collection}
            getDeck ={(id) => this.getDeck(id)}
            deleteCollection = {(id) => this.deleteCollection(id)}
     
        />
        )
    
    }


    goToNextCard(){
     
        let cardNum = this.state.cardNumber;
        cardNum ++;
        if(cardNum === this.state.cards.length ){
            cardNum = 0;
        }
        console.log(cardNum, this.state.cards.length)
        this.setState({
            cardNumber: cardNum
        });

    }
    goToPreviousCard(){

        let cardNum = this.state.cardNumber;
        cardNum--;
        if(cardNum < 0)
        cardNum = this.state.cards.length -1;
        this.setState({
            cardNumber: cardNum
        });
    }

    //  countCards = { cardNumber + " / " + this.state.cards.length }
    // 


    //left some junk code inside putCard(parameters) in case i find time to put word and definition without a prompt, and still need them. I often forget to setup parameters properly here.
    renderDeckList(){
        if(this.state.cards.length > 0){

            let cardNumber = this.state.cardNumber;

            return this.state.cards.map(mappedCards =>{
                
                cardNumber += 1;
              
               return <Flash 
               deck= {mappedCards}
               putCard={(id, xword, xdefinition, xcollection) => this.putCard(id, xword, xdefinition, xcollection)}
               deleteCard={(id, fk) => this.deleteCard(id, fk)}
               countCards = {cardNumber + ' / ' + this.state.cards.length}
              
            
                />
            });
            
        }
    }
    

    RenderDeckView(){
        if(this.state.cards.length > 0){
            return <View 
                nextCard = {() => this.goToNextCard()}
                previousCard = {() => this.goToPreviousCard()}
                card={this.state.cards[this.state.cardNumber]} nextCard={() => this.goToNextCard()} previousCard={() => this.goToPreviousCard()}
                countCards = {this.state.cardNumber}
            />
        }
    }

    renderViewOrList(){
        const notThis = !this.state.viewTrueListFalse
        this.setState({
            viewTrueListFalse: notThis
        })

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
                <button id='viewChange' onClick={() => this.renderViewOrList()}>
            View
            </button>
   
                <div id='flash' className='card-grid'>

            {this.state.viewTrueListFalse ? this.RenderDeckView() : this.renderDeckList()} 
     
            </div>
                </Col>
                 </Row>
            </Container>

         


            </div>

        );
    }
}
 
export default App;