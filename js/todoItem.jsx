/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
var app = app || {};

(function () {
  //'use strict';

  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;

  app.TodoItem = React.createClass({
    getInitialState: function () {
      return {
        editingText: this.props.todo.title
      };
    },
    render: function() {
      return (
        <li className={React.addons.classSet({
          completed: this.props.todo.completed,
          editing: this.props.editing
        })}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={null}
              onClick={null}
            />
            <label onDoubleClick={this.handleDoubleClick}>
              {this.state.editingText}
            </label>
            <button className="destroy"
              onClick={this.handleDestroy}
            />
          </div>
          <input
            ref="editField"
            className="edit"
            value={this.state.editingText}
            onBlur={null}
            onChange={this.handleChange}
            onKeyDown={null}
          />
        </li>
      );
    },
    handleDestroy: function (e) {
      this.props.onDestroy();
    },
    handleDoubleClick: function (e) {
      this.props.onEdit();
    },
    handleChange: function (e) {
      this.setState({editingText: e.target.value});
    }
  });
})();

