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

    initialize: function(options) {
      this.router = options.router;
    },

    render: function() {
      this.$el.text('Open Suggestions SMS');
      return this;
    },

    initializeAddPhase: function() {
      // implement
      this.callback({sessionId: '1'});
    },

    callback: function(response) {
      this.router.navigate(response.sessionId, {trigger: true});
    }
  });
});
