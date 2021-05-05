import CreateFlashCard from './CreateFlashCard/createFlashCard'
import React, { Component } from 'react';
import axios from 'axios';
import Flash from './FlashCards/playFlashCards'
import GetDeck from './FlashCards/getDeck'
import { Card, Button } from 'react-bootstrap';


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
        this.getAllCards();
        console.log(this.state.collections)
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

    async addCollection(collection){
      await axios.post('http://127.0.0.1:8000/collection/', collection);
       this.getAllCollections();

    }

    async addCard(card){
        await axios.post('http://127.0.0.1:8000/flashcards/', card);
        this.getAllCards();
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
        />
        )

        

    
    }

    renderDeck(){
        if(this.state.cards.length > 0){
            <Flash deck= {this.state.cards} />
        }
    }
    

    render() { 
        {this.renderDeck()}
        return (
            <div>
            <CreateFlashCard 
        addCollection={this.addCollection.bind(this)}
        addCard={this.addCard.bind(this)}
        collections={this.state.collections}
        mapDecks={this.mapCollections.bind(this)}
        />
            <div className='scroll' id='scroll'>
            {this.mapCollections()}
       
            </div>
            <div id='flash'>
            {this.renderDeck()}
             
            </div>
            </div>

        );
    }
}
 
export default App;