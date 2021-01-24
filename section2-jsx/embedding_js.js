// learning how to embedd js code


function getMood(){
    const moods = ["happy", "angry", "sad", "hungry"]
    
    // getting a random element from the array
    return moods[Math.floor(Math.random() * moods.length)]
}
class JSXDemo extends React.Component {
    render(){
        return(
            <div>
                <h1>Hi im feeling: {getMood()} </h1>
            </div>
            
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))