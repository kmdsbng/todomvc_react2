/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};


(function () {
  //'use strict';

  app.ALL_TODOS = 'all';
  app.ACTIVE_TODOS = 'active';
  app.COMPLETED_TODOS = 'completed';
  var TodoFooter = app.TodoFooter;
  var TodoItem = app.TodoItem;

  var ENTER_KEY = 13;

  var TodoApp = React.createClass({
    render: function () {
      var footer;
      var main;
      var todos = this.props.model.todos;

      var shownTodos = todos.filter(function (todo) {
        return false;
      }, this);

      var todoItems = shownTodos.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={null}
            onDestroy={null}
            onEdit={null}
            editing={null}
            onSave={null}
            onCancel={null}
          />
        );
      }, this);

      var activeTodoCount = todos.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
      }, 0);

      var completedCount = todos.length - activeTodoCount;

      if (activeTodoCount || completedCount) {
        footer =
          <TodoFooter
            count={null}
            completedCount={null}
            nowShowing={null}
            onClearCompleted={null}
          />;
      }

      if (todos.length) {
        main = (
          <section id="main">
            <input
              id="toggle-all"
              type="checkbox"
              onChange={null}
              checked={null}
            />
            <ul id="todo-list">
              {todoItems}
            </ul>
          </section>
        );
      }

      return (
        <div>
          <header id="header">
            <h1>todos</h1>
            <input
              ref="newField"
              id="new-todo"
              placeholder="What needs to be done?"
              onKeyDown={this.handleEdit}
              autoFocus={true}
            />
          </header>
          {main}
          {footer}
        </div>
      );
    },
    handleEdit: function (e) {
      if (e.which !== ENTER_KEY) {
        return;
      }

      if (!e.target.value) {
        return;
      }

      this.props.model.addTodo(e.target.value);
      e.target.value = '';
    }
  });

  var model = new app.TodoModel('react-todos');

  function render() {
    React.render(
      <TodoApp model={model}/>,
        document.getElementById('todoapp')
    );
  }

  model.subscribe(render);
  render();
})();
