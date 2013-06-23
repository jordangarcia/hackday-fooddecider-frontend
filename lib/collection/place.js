define(function(require) {
  var WEBUI_SUGGESTER_ALIAS = 'me';

  return Backbone.Collection.extend({
    initialize: function(options) {
      this.sessionId = options.sessionId;
    },

    parse: function(data, options) {
      return _.map(data, function(place) {
        if (!place.suggester) {
          place.suggester = WEBUI_SUGGESTER_ALIAS;
        }
        return place
      });
    },

    url: function() {
      return '/' + this.sessionId + '/choices';
    },

    model: require('model/place')
  });
});
