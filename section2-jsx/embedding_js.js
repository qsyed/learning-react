// learning how to embedd js code

class JSXDemo extends React.Component {
    render(){
        return(
            <div>
                <h1>hi my number is {2 * 8.3}</h1>
            </div>
            
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))