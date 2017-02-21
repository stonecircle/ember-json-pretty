import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({

  jsonString: Ember.computed('model', function(){
    var jsonObject = this.get('model');
    return JSON.stringify(jsonObject);
  }),

  actions: {
    refreshJson: function(){
      var jsonObject = JSON.parse(this.get('jsonString'));
      this.set('model', jsonObject);
    }
  }
});

export default ApplicationController;
