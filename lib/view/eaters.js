define(function(require) {
  var EaterCollectionView    = require('view/eatercollection');
  var AddEaterView           = require('view/addeater');
  var InitializeAddPhaseView = require('view/initializeaddphase');

  return Backbone.View.extend({
    initialize: function() {
      this.eaterCollectionView = new EaterCollectionView({
        collection: this.collection
      });

      this.addEaterView = new AddEaterView({
        collection: this.collection
      });

      this.initializeAddPhaseView = new InitializeAddPhaseView({
        collection: this.collection
      });
    },

    render: function() {
      this.$el.
        append(this.addEaterView.render().el).
        append(this.eaterCollectionView.render().el).
        append(this.initializeAddPhaseView.render().el);
      return this;
    }
  });
});
