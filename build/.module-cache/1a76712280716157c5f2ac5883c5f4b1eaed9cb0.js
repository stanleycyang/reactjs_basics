var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("h1", null, "Hello, ", this.props.name, "!")
        );
    }
});

var SecondComponent = React.createClass({displayName: "SecondComponent",
    getInitialState: function(){
        return {
            count: 5
        }
    },
    render: function(){
        return (
            React.createElement("h1", null, this.state.count)
        )
    }
});

React.render(
    React.createElement(MyComponent, {name: "Handsome"}),
    document.getElementById('myDiv')
);
