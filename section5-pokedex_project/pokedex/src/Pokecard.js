import React, {Component} from 'react';
import './Pokecard.css';

const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component{
    render(){
        let imgSrc = `${Poke_API}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title"> {this.props.name} </h1>
                <img src={imgSrc}/>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Experience: {this.props.exp}</div>

            </div>

        );
    }
}


export default Pokecard;
