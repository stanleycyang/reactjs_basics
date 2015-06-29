var React = require('react'),
    Count = require('./count.react.js'),
    FilteredList = require('./filteredlist.react.js'),
    Hello = require('./hello.react.js');

React.render(<Hello name='handsome' />, document.getElementById('myDiv'));
React.render(<FilteredList />, document.getElementById('mount-list'));
React.render(<Count />, document.getElementById('mount-counter'));

