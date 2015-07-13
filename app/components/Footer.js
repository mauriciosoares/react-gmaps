var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');

var Footer = React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired
  },

  render: function() {
    var allTodos = this.props.allTodos;
    var total = Object.keys(allTodos).length;

    if(!total) {
      return null;
    }

    var completed = this._getCompleted();

    var itemsLeft = total - completed;
    var itemsLeftPhrase = itemsLeft === 1 ? ' item ': ' items ';
    itemsLeftPhrase += 'left';

    // if no items are completed, does not show this button
    var clearCompletedButton;
    if(completed) {
      clearCompletedButton =
        <button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed({completed})
        </button>
    }

    return (
      <footer>
        <span id="todo-count">
          <strong>{itemsLeft}</strong> itemsLeftPhrase
        </span>
        {clearCompletedButton}
      </footer>
    )
  },

  _getCompleted: function() {
    var completed = 0,
      allTodos = this.props.allTodos;

    for (var key in allTodos) {
      if(allTodos[key].complete) {
        completed += 1;
      }
    }

    return completed;
  },

  _onClearCompletedClick: function() {
    TodoActions.destroyCompleted();
  }
});
