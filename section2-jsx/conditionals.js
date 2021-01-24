function getNumber(){
    return Math.floor(Math.random() * 10) + 1;

}


class NumPicker extends React.Component {
    render(){
        return (
            <h1>your number is ... {getNumber()} </h1>

        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));