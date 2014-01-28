MaUi.BarriersRoute = Ember.Route.extend({  
  model: function() {
    return this.get('store').find('barrier');
  }
});

