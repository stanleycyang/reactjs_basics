var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("h1", null, "Hello, ", this.props.name, "!")
        );
    }
});
React.render(
    React.createElement(MyComponent, {name: "Handsome"}),
    document.getElementById('myDiv')
);
