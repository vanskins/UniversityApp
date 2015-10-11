Template.dashboard.helpers({
  admin: function(){
    Router.go('admindashboardHome');
  },
  teacher: function(){
    Router.go('teacherdashboardHome');
  },
  student: function(){
    Router.go('studentdashboardHome')
  }
});
