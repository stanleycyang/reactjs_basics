var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("h1", null, "Hello, world!")
        );
    }
});
React.render(
    React.createElement(MyComponent, null),
    document.getElementById('myDiv')
);
