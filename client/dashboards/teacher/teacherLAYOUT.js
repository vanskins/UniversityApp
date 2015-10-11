Template.teacherdashboardlayout.events({
  "click #sideHome": function(event){
     event.preventDefault();
     Router.go('teacherdashboardHome');
  },
  "click #sideCreate": function(event){
     event.preventDefault();
     Router.go('teacherdashboardCreate');
  },
  "click #sideMyClass": function(event){
     event.preventDefault();
     Router.go('teacherdashboardMyClass');
  },
  "click #sideSettings": function(event){
     event.preventDefault();
     Router.go('teacherdashboardSettings');
  },
  "click #sideHelp": function(event){
     event.preventDefault();
     Router.go('teacherdashboardHelp');
  },
  "click #sideFAQ": function(event){
     event.preventDefault();
     Router.go('teacherdashboardFAQ');
  },
  "click #sideAbout": function(event){
     event.preventDefault();
     Router.go('teacherdashboardAbout');
  },
  "click #btnLogout": function(event){
     event.preventDefault();
     Meteor.logout();
  }
});
