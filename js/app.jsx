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
    getInitialState: function () {
      return {
        nowShowing: app.ALL_TODOS,
        editing: null
      };
    },
    render: function () {
      var footer;
      var main;
      var model = this.props.model;
      var todos = this.props.model.todos;

      console.log(model, todos);

      var shownTodos = todos.filter(function (todo) {
        switch (this.state.nowShowing) {
        case app.ACTIVE_TODOS:
          return !todo.completed;
        case app.COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
        }
      }, this);

      var todoItems = shownTodos.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={this.toggle.bind(this, todo)}
            onDestroy={model.destroy.bind(model, todo)}
            onEdit={this.edit.bind(this, todo)}
            editing={this.state.editing === todo.id}
            onSave={this.save.bind(this, todo)}
            onCancel={this.cancel}
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
            count={activeTodoCount}
            completedCount={completedCount}
            nowShowing={this.state.nowShowing}
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
    },
    edit: function (todo) {
      this.setState({editing: todo.id});
    },
    save: function (todo, val) {
      console.log(todo, val);

      this.props.model.update(todo, val);
      this.setState({editing: null});
    },
    cancel: function () {
      this.setState({editing: null});
    }
  });

  var todo_model = new app.TodoModel('react-todos');

  function render() {
    React.render(
      <TodoApp model={todo_model}/>,
        document.getElementById('todoapp')
    );
  }

  todo_model.subscribe(render);
  render();
})();
