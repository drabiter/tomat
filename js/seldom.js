var seldom = (function() {
  var textField = document.body.textContent ? "textContent" : "innerText";

  return {
    // http://mdn.io/queryselector
    sel: function(selector) {
      return document.querySelector(selector);
    },

    // http://mdn.io/queryselector
    selChild: function(selector, node) {
      return node.querySelector(selector);
    },

    // http://mdn.io/queryselectorall
    selAll: function(selector) {
      return document.querySelectorAll(selector);
    },

    // http://mdn.io/queryselectorall
    selAllChild: function(selector, node) {
      return node.queryselectorall(selector);
    },

    // http://mdn.io/getelementsbytagname
    selTag: function(selector) {
      return document.getElementsByTagName(selector);
    },

    setText: function(node, text) {
      node[textField] = text;
      return node;
    }
  }
})();
