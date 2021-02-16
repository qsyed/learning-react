class Hello extends React.Component {
    render() {
        // console.log(this.props);
        let bangs = "!".repeat(this.props.num)
      return <h1>Hello there {this.props.to} ! My name is {this.props.from} {bangs}</h1>;

    }
  }


