function getNumber(){
    return Math.floor(Math.random() * 10) + 1;

}


class NumPicker extends React.Component {
    render(){
        const num = getNumber()
        return (
            
            <div>
            <h1>your number is ... {num} </h1>
            <p>{num === 7 ? 'Congrats' : "Unlucky"}</p>
            {
                num === 7 && 
                <img src = "https://media3.giphy.com/media/5oGIdt1xapQ76/giphy.gif?cid=ecf05e47i3iw0ckuk6129t8d730huq4kj9zv5abswlqdlff0&rid=giphy.gif" />
            }
            </div>

        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));