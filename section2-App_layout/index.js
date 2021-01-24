class APP extends React.Component {
    render() {
        return(
        <div>
            <Hello />
            <NumPicker />
        </div>
        )
    }
  }

ReactDOM.render(<APP />, document.getElementById('root'));