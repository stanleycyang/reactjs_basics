var React = require('react'),
    Count = require('./count.react.js'),
    FilteredList = require('./filteredlist.react.js'),
    Hello = require('./hello.react.js');

React.render(React.createElement(Hello, {name: "handsome"}), document.getElementById('myDiv'));
React.render(React.createElement(FilteredList, null), document.getElementById('mount-list'));
React.render(React.createElement(Count, null), document.getElementsById('mount-counter'));

