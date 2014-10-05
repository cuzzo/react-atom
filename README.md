# React ATOM

[BEM](https://bem.info/method/ "BEM Specification") class names are systematic. So why write them yourself?

# Usage

React [ATOM](https://github.com/cuzzo/atom-css "ATOM CSS") automatically generates BEM style classes on React components... So you don't have to. Then it atomizes them, so they're really fast/performant.

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

You can see it live, how it attaches the BEM classes and then converts those to atoms [here](http://cuzzo.github.io/react-atom/example/ "React autogenerate BEM class names and convert to atoms example").

# Resources

* [ATOM](https://github.com/cuzzo/atom-css "ATOM CSS") - The ATOM CSS specification.
* [BEM](http://www.integralist.co.uk/posts/maintainable-css-with-bem/ "BEM Example/Explanation") - BEM explained.
* [React BEM](https://github.com/cuzzo/react-bem "React BEM Automatic Class Generation") - Automatic BEM class generation for React Components.

# License

React BEM is free--as in BSD. Hack your heart out, hackers.
