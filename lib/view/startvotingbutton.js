define(function(require) {
  return Backbone.View.extend({
    tagName: 'button',

    className: 'btn success',

    events: {
      "click": function(e) {
        e.preventDefault();
        e.target.setAttribute('disabled', 'disabled');
        this.sendStartVoting();
      }
    },

    initialize: function(options) {
      this.router = options.router;
      this.sessionId = options.sessionId;
    },

    render: function() {
      this.$el.text('Start Voting');
      return this;
    },

    sendStartVoting: function() {
      Backbone.ajax(this.startSessionUrl(), {
        type: 'POST',
        success: this.succsesCb
      });
    },

    startSessionUrl: function() {
      return '/' + this.sessionId + '/start';
    },

    successCb: function(response) {
      this.router.navigate(response.sessionId, {trigger: true});
    }
  });
});
