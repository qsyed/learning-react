class JSXDemo extends React.Component {
    render(){
        return(
            <img src = "https://images.unsplash.com/photo-1606851361443-fd99450eda8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
            
            
        );
    }
}

ReactDom.render(<JSXDemo />, document.getElementById('root'))