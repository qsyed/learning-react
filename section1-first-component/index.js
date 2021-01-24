  
class Hello extends React.Component {
    render() {
      return <h1>Hello there!</h1>;
    }
  }
  

//   we are rendering the compinent in the div with id "root"
  ReactDOM.render(<Hello />, document.getElementById('root'));