Template.admindashboardlayout.onCreated(function(){
  Meteor.subscribe("profiles");
});
Template.admindashboardlayout.events({
  "click #sideHome": function(event){
    event.preventDefault();
    Router.go('admindashboardHome');
  },
  "click #sideNews": function(event){
    event.preventDefault();
    Router.go('admindashboardPost');
  },
  "click #sideGenerate": function(event){
    event.preventDefault();
    Router.go('admindashboardToken');
  },
  "click #sideFAQ": function(event){
    event.preventDefault();
    Router.go('admindashboardFAQ');
  },
  "click #sideAbout": function(event){
    event.preventDefault();
    Router.go('admindashboardAbout');
  },
  "click #btnLogout": function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
