
/* Module Client Library
 * (c) 2007 University of Guelph
 *---------------------------------------*/

/*-----------------------------------------------------------
 * DOMStack
 *----------------------------------------------------------- 
 * DOMStack is a utility class for building HTML DOM objects.
 * A DOMStack is a subclass of Array, with convenience 
 * methods for creating, initializing, and appending DOM
 * nodes.
 *
 * Before using any of the DOM methods, you should initialize
 * the DOMStack with a 'root' element by calling push(e).
 *-----------------------------------------------------------*/
var DOMStack = Class.create();
DOMStack.prototype = {
  /* Creates a new, initially empty, DOMStack. */
  initialize: function() {
    this.stack = new Array();
  },

  /* Pushses a new node on to the stack. */
  push: function(node) {
    this.stack.push(node);
    return this;
  },

  /* Pops a node from the stack. */
  pop: function() {
    return this.stack.pop();
  },

  /* Appends a node to the current context element. */
  appendChild: function(node) {
    this.peek().appendChild(node);
    return this;
  },

  /* Sets an attribute in the context element, as if by
     setAttribute() */
  setAttribute: function(key, value) {
    this.peek().setAttribute(key, value);
    return this;
  },

  /* Returns the context node. */
  peek: function() {
    return this.stack.last();
  },

  /* Sets the className property of the context node. */
  setClassName: function(className) {
    this.peek().className = className;
    return this;
  },

  /* Creates a new text node, initialized with the contents of 'text',
     and appends it as a child of the context element. */
  appendText: function(text) {
    this.appendChild(document.createTextNode(text));
    return this;
  },

  /* Creates a new element of name 'tagName', which becomes the new
     context element. */
  openElement: function(tagName) {
    this.push(document.createElement(tagName));
    return this;
  },

  /* Appends the context element as a child of the previous context
     element, and restores the previous context element. */
  closeElement: function(tagName) {
    if (tagName && this.peek().nodeName.toUpperCase()
          != tagName.toUpperCase()) {
      alert("Error: Expected " + tagName + " but found " +
            this.peek().nodeName);
    } else {
      this.appendChild(this.pop());
    }
    return this;
  }
}


