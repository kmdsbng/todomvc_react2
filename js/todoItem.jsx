/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
var app = app || {};

(function () {
  'use strict';

  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;

  app.TodoItem = React.createClass({
    render: function() {
      return (
        <li className={React.addons.classSet({
          completed: null,
          editing: null
        })}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={null}
              onClick={null}
            />
            <label onDoubleClick={null}>
              {null}
            </label>
            <button className="destroy"
              onClick={null}
            />
          </div>
          <input
            ref="editField"
            className="edit"
            value={null}
            onBlur={null}
            onChange={null}
            onKeyDown={null}
          />
        </li>
      );
    }
  });
})();

