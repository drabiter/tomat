var selOne = function(selector) {
  return document.querySelector(selector);
};

var selChild = function(selector, node) {
  return node.querySelector(selector);
};

var selAll = function(selector) {
  return document.querySelectorAll(selector);
};  