/** @jsx React.DOM */

var React = require('react');

var MessageBox = React.createClass({
  render: function() {

    return (
      <div className="container jumbotron" >
        <h2>Hello, World</h2>
      </div>
    );
  }
});

module.exports = MessageBox;