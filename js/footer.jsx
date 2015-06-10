/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

app.TodoFooter = React.createClass({
  render: function () {
    var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
    var cx = React.addons.classSet;
    var clearButton = null;
    var nowShowing = this.props.nowShowing;

    if (false) {
      clearButton = (
        <button id="clear-completed" onClick={null}>Clear completed</button>
      );
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul id="filters">
          <li>
            <a href="#/" className={null}>All</a>
          </li>
          {' '}
          <li>
            <a href="#/active" className={null}>Active</a>
          </li>
          {' '}
          <li>
            <a href="#/completed" className={null}>Completed</a>
          </li>

        </ul>
        {clearButton}
      </footer>
    );
  }
});

