define(function(require) {
  var EaterCollection = require('collection/eater');
  var EatersView = require("view/eaters");

  var eaterCollection = new EaterCollection([
    { name: 'Jordan',
      phone: '540-798-5881' },
    { name: 'Jeff',
      phone: '818-817-1849' },
    { name: 'Parsha',
      phone: '714-123-4567' },
  ]);

  new EatersView({
    collection: eaterCollection
  }).render().$el.prependTo(document.getElementById('main'));
});
