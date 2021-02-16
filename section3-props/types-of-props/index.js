class App extends React.Component{
    render(){
        return(
            <div>
            <Hello to="Ringo"
             from="paul"
             num = {3}
             
             
            />
            
            </div>
        )
    }
    



}

ReactDOM.render(<App/>, document.getElementById('root'))