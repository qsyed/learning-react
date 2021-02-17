class APP extends React.Component {
    render() {
        return(
        <div>
            <Friend 
                name = "Elton"
                hobbies = {["Piano", "Sining", "Dancing"]}
            />
            
        </div>
        )
    }
  }

ReactDOM.render(<APP />, document.getElementById('root'));