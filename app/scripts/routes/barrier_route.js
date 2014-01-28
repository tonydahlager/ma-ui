MaUi.BarrierRoute = Ember.Route.extend({  
  model: function(params) {
    return this.get('store').find('barrier', params.barrier_id);
  }
});

