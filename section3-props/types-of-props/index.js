class App extends React.Component{
    render(){
        return(
            <div>
            <Hello to="Ringo"
             from="paul"
             num = {3}
            //  img = "https://unsphttps://images.unsplash.com/photo-1613444709814-ca264b29bb81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80lash.com/photos/x5sWUJufxZU"
             
            />

            <Hello to="Sam"
            />
            
            </div>
        )
    }
    



}

ReactDOM.render(<App/>, document.getElementById('root'))