function getNumber(){
    return Math.floor(Math.random() * 10) + 1;

}


class NumPicker extends React.Component {
    render(){
        const num = getNumber()
        let msg;
        if(num ===7){
            msg = 
            <div>
                CONGRATS !!!
                <img src = "https://media3.giphy.com/media/5oGIdt1xapQ76/giphy.gif?cid=ecf05e47i3iw0ckuk6129t8d730huq4kj9zv5abswlqdlff0&rid=giphy.gif" />
            </div>
        } else{
            msg = 
            
            <div>
                <h2>WOMP WOMP WOMP</h2>
                <img src ="https://media2.giphy.com/media/JvEMPOQubkyQx9YLQ5/giphy.gif?cid=ecf05e47dtmhkrdpqt7heb9daru0ej3pbjhsvhe6q0gwgnhi&rid=giphy.gif" />
            </div>
            
        }
        return (
            
            <div>
            <h1>your number is ... {num} </h1>
            {msg}
            </div>

        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));