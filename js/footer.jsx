/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
/*global classNames */
var app = app || {};

app.TodoFooter = React.createClass({
  render: function () {
    var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
    var cx = classNames;
    var clearButton = null;
    var nowShowing = this.props.nowShowing;

    if (this.props.completedCount) {
      clearButton = (
        <button id="clear-completed" onClick={this.handleClearCompleted}>Clear completed</button>
      );
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul id="filters">
          <li>
            <a href="#/" className={cx({selected: nowShowing === app.ALL_TODOS})}>All</a>
          </li>
          {' '}
          <li>
            <a href="#/active" className={cx({selected: nowShowing === app.ACTIVE_TODOS})}>Active</a>
          </li>
          {' '}
          <li>
            <a href="#/completed" className={cx({selected: nowShowing === app.COMPLETED_TODOS})}>Completed</a>
          </li>

        </ul>
        {clearButton}
      </footer>
    );
  },
  handleClearCompleted: function () {
    this.props.onClearCompleted();
  }
});

