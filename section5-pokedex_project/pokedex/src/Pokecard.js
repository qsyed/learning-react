import React, {Component} from 'react';
const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component{
    render(){
        let imgSrc = `${Poke_API}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1> {this.props.name} </h1>
                <img src={imgSrc}/>
                <div>Type: {this.props.type}</div>
                <div>Experience: {this.props.exp}</div>

            </div>

        );
    }
}


export default Pokecard;
