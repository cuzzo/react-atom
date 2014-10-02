# React BEM

BEM class names are systematic. So why write them yourself?

# Usage

React BEM automatically generates BEM style classes on React components... So you don't have to.

# Example

JSX Component:

```javascript
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
```

Translates to:

```html
<section class="painted-blue text-left" data-reactid=".0">
    <h3 class="typography-loose" data-reactid=".0.0" role="title">
        Price Form
    </h3>
    <form data-reactid=".0.1">
        <input class="rounded-default font-small" type="text" data-reactid=".0.1.0" name="amount"></input>
        <input class="painted-light-grey widget__button--submit" type="submit" data-reactid=".0.1.1" role="button" name="submit"></input>
    </form>
</section>
```

You can see it live, how it attaches the BEM classes, [here](http://cuzzo.github.io/react-bem/example/ "React autogenerate BEM class names example").

# License

React BEM is free--as in BSD. Hack your heart out, hackers.
