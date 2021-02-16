class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Slot Machine</h1>
                <Machine
                s1 = "x"
                s2 = "x"
                s3 = "x"
                />



               <Machine
                s1 = "x"
                s2 = "y"
                s3 = "x"
                />


                <Machine
                s1 = "y"
                s2 = "z"
                s3 = "x"
                />

            
            </div>
        )
    }
    



}

ReactDOM.render(<App/>, document.getElementById('root'))