define(function(require) {
  return Backbone.View.extend({
    tagName: 'button',
    className: 'btn success',
    events: {
      "click": function(e) {
        e.preventDefault();
        this.initializeAddPhase();
      }
    },
    render: function() {
      this.$el.text('Open Suggestions SMS');
      return this;
    },
    initializeAddPhase: function() {
      // implement
    }
  });
});
