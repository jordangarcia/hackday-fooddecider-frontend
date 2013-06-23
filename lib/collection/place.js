define(function(require) {
  return Backbone.Collection.extend({
    model: require('model/collection')
  });
});
