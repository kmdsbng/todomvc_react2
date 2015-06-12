/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
var app = app || {};

(function () {
  //'use strict';
  var Utils = app.Utils;

  app.TodoModel = function (key) {
    this.key = key;
    this.todos = Utils.store(key);
    this.onChanges = [];
  };

  var proto = app.TodoModel.prototype;

  proto.subscribe = function (cb) {
    this.onChanges.push(cb);
  };

  proto.addTodo = function (val) {
    var todo = {
      id: Utils.uuid(),
      completed: false,
      title: val
    };

    this.todos.push(todo);
    this.inform();
  };

  proto.inform = function () {
    Utils.store(this.key, this.todos);
    this.onChanges.forEach(function (cb) {cb(); });
  };

  proto.destroy = function (todo) {
    this.todos = this.todos.filter(function (t) {
      return t.id !== todo.id;
    });
    this.inform();
  };

  proto.update = function (todoToSave, val) {
    this.todos.forEach(function (todo) {
      if (todo.id === todoToSave.id) {
        todo.title = val;
      }
    });
    this.inform();
  };

})();


