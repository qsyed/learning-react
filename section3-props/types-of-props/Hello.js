class Hello extends React.Component {
    render() {
        // console.log(this.props);
        let bangs = "!".repeat(this.props.num)


      return(
          <div>

       <p>Hello there {this.props.to} ! My name is {this.props.from} {bangs}</p>
        <img src ={this.props.img} />




       </div>
      );

    }
  }


