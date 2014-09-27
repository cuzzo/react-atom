// Preload MOLECULES & SPLIT_MOLECULES

var MOLECULAR_CACHE = {};

var get = function(key, request_func) {
  if (key in MOLECULAR_CACHE) return MOLECULAR_CACHE[key];
  var resp = request_func(key);
  MOLECULAR_CACHE[key] = resp;
  return resp;
};

var ReactATOM = {
  atomize: function(bem_classes) {
    return get(bem_classes, function(key) {
        return atomizer.atomize(key)
      });
  }
};

var Atomizer = function() {
  this._reduce = function(className) {
    return this.atomize_class(className).join(" ");
  }.bind(this);

  this.atomize_class = function(bem_class) {
    var classes = MOLECULES[bem_class] || [];
    if (SPLIT_MOLECULES[bem_class]) {
      classes.push(bem_class);
    }
    return classes;
  };

  this.atomize = function(bem_classes) {
    return bem_classes
        .split(" ")
        .map(this._reduce)
        .join(" ")
        .trim();
  };
};

var atomizer = new Atomizer();
