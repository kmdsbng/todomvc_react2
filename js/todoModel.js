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

})();


