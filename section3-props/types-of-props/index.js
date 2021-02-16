class App extends React.Component{
    render(){
        return(
            <div>
            <Hello to="Ringo"
             from="paul"
             num = {3}
             data = {[1,2,3,4,5]}
            />
            <Hello to="Cher" from="sonny"/>
            </div>
        )
    }
    



}

ReactDOM.render(<App/>, document.getElementById('root'))