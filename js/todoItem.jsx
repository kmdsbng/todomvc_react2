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
        <li className={classNames({
          completed: this.props.todo.completed,
          editing: this.props.editing
        })}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.todo.completed}
              onChange={this.handleToggle}
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
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
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
    },
    handleKeyDown: function (e) {
      if (e.which === ENTER_KEY) {
        this.saveText(e.target.value);
      } else if (e.which === ESCAPE_KEY) {
        this.setState({editingText: this.props.todo.title});
        this.props.onCancel();
      }
    },
    handleBlur: function (e) {
      this.saveText(e.target.value);
    },
    saveText: function (val) {
      val = val.trim();
      if (val) {
        this.props.onSave(val);
        this.setState({editingText: val});
      } else {
        this.props.onDestroy();
      }
    },
    handleToggle: function (e) {
      this.props.onToggle();
    }
  });
})();

