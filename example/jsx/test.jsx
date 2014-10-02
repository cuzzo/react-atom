/** @jsx React.DOM */
var Test = React.createClass({
  mixins: [ReactBEM, ReactATOM],

  bem_blocks: ["widget"],

  bem_translate_class: function(bem_classes) {
    return this.atomize(bem_classes);
  },

  bem_render: function() {
    return (
      <section class="no-overwrite">
        <h3 role="title">Price Form</h3>
        <form>
          <input type="text" name="amount" modifiers="amount" />
          <input type="submit" name="submit" modifiers="submit" role="button" />
        </form>
      </section>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {

  React.renderComponent(
    <Test />,
    document.getElementsByTagName("body")[0]
  );

});
