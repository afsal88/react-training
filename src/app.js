/** @jsx React.DOM */

var React = require('react');
var MessageBox = require('./MessageBox');

React.renderComponent(
  <MessageBox />,
  document.getElementById('app')
);