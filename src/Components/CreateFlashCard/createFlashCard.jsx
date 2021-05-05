import { Card } from 'react-bootstrap';
import React, { Component } from 'react';

class CreateFlashCard extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
            title: '',
            word: '',
            definition: '',
            collection: '',
            deck: 0
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleCardSubmit= this.handleCardSubmit.bind(this);
     
    }

 

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCardSubmit(event){
        event.preventDefault();
        const card = {
            word: this.state.word,
            definition: this.state.definition,
            collection: this.props.collections.length -1
        }
        this.props.addCard(card);
        this.setState({
            deck: this.state.deck += 1
        })
      
    }


    handleSubmit(event) {
        event.preventDefault();
        const collection = {
            title: this.state.title

        }
        this.props.addCollection(collection);
        this.setState({
            collection: this.props.collections.length -1,
            deck: 0
        });
    }
    
    renderTitle(){
        if(this.state.title === ''){
            return(
            <Card>
                <p>First Create the title/subject for the deck of flashcards.
                 Press ADD button BEFORE you add a card.
                </p>
            </Card>
            );

        }
        if(this.state.title !== ''){
            return (
            <Card>
             <h3>Add new card to: "{this.state.title}"</h3>
                    <h3>{this.state.deck} {this.props.collections.collection}</h3>
            <div type='container'>
                 <form onSubmit={this.handleCardSubmit}>

                        <div>
                        <label>Word</label>
                        <input type='text' name="word" value={this.state.word} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label>Definition</label>
                        <input type='text' name="definition" value={this.state.definition} onChange={this.handleChange} />
                        </div>
                        <div>
                      <input type='submit' value='Add' />
                      </div>
                </form>
                </div>
                </Card>
            );

        }
           
    }

    render(){
  
        return (
            <div id='createFlashCard'>
                <hr />
               
                    <h3>Create New Collection</h3>
               
                <Card>
                <div type='container'>
                     <form onSubmit={this.handleSubmit}>

                            <div>
                            <label>Title/Subject of Collection</label>
                            <input type='text' name="title" value={this.state.title} onChange={this.handleChange} />
                            </div>
                            <div>
                          <input type='submit' value='Add' />
                          </div>
                    </form>
                    </div>
                    </Card>

                   {this.renderTitle()}
               
        
            </div>
        );
    }


}
 
export default CreateFlashCard;