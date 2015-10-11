Meteor.subscribe("Tokens");

Template.admindashboardToken.helpers({
  tokens:function(){
    return Tokens.find({});
  }
});

Template.admindashboardToken.events({
  "click #btnGenerate": function(event){
    event.preventDefault();
    Meteor.call('addTokens');
  },
  "click #btnDelToken": function(event){
    event.preventDefault();
    var confirm = window.confirm("are you sure you want to logout?");
    if(confirm){
      Meteor.call('DelToken',this._id);
    }
  }
});
