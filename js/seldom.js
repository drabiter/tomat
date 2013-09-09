var seldom = (function() {
  return {
    selOne: function(selector) {
      return document.querySelector(selector);
    },

    selChild: function(selector, node) {
      return node.querySelector(selector);
    },

    selAll: function(selector) {
      return document.querySelectorAll(selector);
    }
  }
})();
