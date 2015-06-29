var Counter = React.createClass({
    incrementCount: function(){
        this.setState({
            count: this.state.count + 1
        });
    },

    getInitialState: function(){
        return {
            count: 0
        }
    },

    render: function(){
        return (
            <div className='counter'>
                <h1>Count: {this.state.count}</h1>
                <button type='button' onClick={this.incrementCount}>Increment Count</button>
            </div>
        );
    }
});

React.render(<Counter />, document.getElementById('mount-counter'));
