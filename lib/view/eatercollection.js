define(function(require) {
  var EaterView = require('view/eater');

  return Backbone.View.extend({
    tagName: 'ul',
    className: 'unstyled eaters',
    initialize: function() {
      this.collection.on('add', this.add, this);
    },
    render: function() {
      this.$el.html('');
      this.collection.forEach(this.add, this);
      return this;
    },
    add: function(eater) {
      var eaterView = new EaterView({
        model: eater,
        collection: this.collection
      }).render();
      eater.on('remove', function(model, collection) {
        if (collection === this.collection) {
          eaterView.remove();
        }
      }, this);
      this.$el.append(eaterView.el);
    }
  });
});
