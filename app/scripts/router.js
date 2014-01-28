MaUi.Router.map(function () {
  
  this.resource('barriers', function(){
    this.resource('barrier', { path: '/:barrier_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
