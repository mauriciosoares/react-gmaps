var React = require('react');
var Footer = require('./Footer');
var Header = require('./Header');

var a = {};

var TodoApp = React.createClass({
  render: function() {
    return(
      <div>
        <Footer allTodos={a} />
      </div>
    )
  }
});

module.exports = TodoApp;
