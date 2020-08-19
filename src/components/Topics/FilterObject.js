import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            characters: [
                {
                    job: 'ninja',
                    rarity: 6,
                    role: 'dps'
                },
                {
                    job: 'Knight',
                    role: 'tank',
                    ability: 'taunt'
                },
                {
                    job: 'Bard',
                    rarity: 3,
                }
            ],
            userInput: '',
            filteredCharacters: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    filterCharacters(prop){
        let characters = this.state.characters;
        let filteredCharacters = [];

        for ( let i=0; i < characters.length; i++ ) {
            if( characters[i].hasOwnProperty(prop) ) {
                filteredCharacters.push(characters[i]);
            }
        }

        this.setState({ filteredCharacters: filteredCharacters });
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.characters, null, 10) }</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ () => this.filterCharacters(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterObjectPB'> Filtered: { JSON.stringify(this.state.filteredCharacters, null, 10) } </span>
            </div>
        )
    }
}