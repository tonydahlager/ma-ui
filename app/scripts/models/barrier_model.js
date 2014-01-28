/*global Ember*/

MaUi.Barrier = DS.Model.extend({
    title: DS.attr('string')
});

// probably should be mixed-in...
MaUi.Barrier.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
MaUi.Barrier.FIXTURES = [
  
  {
    id: 0,
    
    title: 'foo'
    
  },
  
  {
    id: 1,
    
    title: 'foo'
    
  }
  
];
