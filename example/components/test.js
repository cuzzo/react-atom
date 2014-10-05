/** @jsx React.DOM */
var Test = React.createClass({displayName: 'Test',
  mixins: [ReactBEM, ReactATOM],

  bem_blocks: ["widget"],

  bem_translate_class: function(bem_classes) {
    return this.atomize(bem_classes);
  },

  bem_render: function() {
    return (
      React.DOM.section({class: "no-overwrite"}, 
        React.DOM.h3({role: "title"}, "Price Form"), 
        React.DOM.form(null, 
          React.DOM.input({type: "text", name: "amount", modifiers: "amount"}), 
          React.DOM.input({type: "submit", name: "submit", modifiers: "submit", role: "button"})
        )
      )
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {

  React.renderComponent(
    Test(null),
    document.getElementsByTagName("body")[0]
  );

});
