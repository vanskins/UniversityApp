Template.studentdashboardlayout.onCreated(function(){
  this.subscribe("profiles");
});

Template.studentdashboardlayout.helpers({
  connected: function(){
     return Meteor.status().connected;
  },
  profile: function(){
    var profile = Profile.findOne({"metadata.owner": Meteor.userId()});
    if(profile){
      return profile;
    }
      return [];
    }
});

Template.studentdashboardlayout.events({
  "click #sideHome": function(event){
    event.preventDefault();
    Router.go('studentdashboardHome');
  },
  "click #sideSearch": function(event){
    event.preventDefault();
    Router.go('studentdashboardSearch');
  },
  "click #sideSchedule": function(event){
    event.preventDefault();
    Router.go('studentdashboardSched');
  },
  "click #sideStanding": function(event){
    event.preventDefault();
    Router.go('studentdashboardClassStanding');
  },
  "click #sideSettings": function(event){
    event.preventDefault();
    Router.go('studentdashboardSettings');
  },
  "click #sideFAQ": function(event){
    event.preventDefault();
    Router.go('studentdashboardFAQ');
  },
  "click #sideAbout": function(event){
    event.preventDefault();
    Router.go('studentdashboardAbout');
  },
  "click #btnLogout": function(event){
    event.preventDefault();
    Meteor.logout();
  },
  "click #sideHelp": function(event){
    event.preventDefault();
    Router.go('studentdashboardHelp');
  }
});
