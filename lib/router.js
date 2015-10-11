Router.map(function(){
  //HOME PAGE ROUTES
  this.route('home', {path: '/', layoutTemplate: 'homelayout'});
  this.route('register', {path: '/register', layoutTemplate: 'homelayout'});
  this.route('dashboard');

  //ADMIN DASHBOARD ROUTES
  this.route('admindashboardHome', {path: '/admin/home', layoutTemplate: 'admindashboardlayout'});
  this.route('admindashboardPost', {path: '/admin/post', layoutTemplate: 'admindashboardlayout'});
  this.route('admindashboardToken', {path: '/admin/token', layoutTemplate: 'admindashboardlayout'});
  this.route('admindashboardFAQ', {path: '/admin/FAQ', layoutTemplate: 'admindashboardlayout'});
  this.route('admindashboardAbout', {path: '/admin/about', layoutTemplate: 'admindashboardlayout'});

  //STUDENT DASHBOARD ROUTES
  this.route('studentdashboardHome', {path: '/student/home', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardSearch', {path: '/student/search', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardSched', {path: '/student/schedules', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardClassStanding', {path: '/student/standing', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardSettings', {path: '/student/settings', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardHelp', {path: '/student/help', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardFAQ', {path: '/student/faq', layoutTemplate: 'studentdashboardlayout'});
  this.route('studentdashboardAbout', {path: '/student/about', layoutTemplate: 'studentdashboardlayout'});

  //TEACHER DASHBOARD ROUTES
  this.route('teacherdashboardHome', {path: '/teacher/home', layoutTemplate: 'teacherdashboardlayout'});
  this.route('teacherdashboardCreate', {path: '/teacher/create', layoutTemplate: 'teacherdashboardlayout'});
  this.route('teacherdashboardMyClass', {path: '/teacher/myclass', layoutTemplate: 'teacherdashboardlayout'});
  this.route('teacherdashboardSettings', {path: '/teacher/settings', layoutTemplate: 'teacherdashboardlayout'});
  this.route('teacherdashboardHelp', {path: '/teacher/help', layoutTemplate: 'teacherdashboardlayout'});
  this.route('teacherdashboardFAQ', {path: '/teacher/faq', layoutTemplate: 'teacherdashboardlayout'});
  this.route('teacherdashboardAbout', {path: '/teacher/about', layoutTemplate: 'teacherdashboardlayout'});
});

var requireLogin = function() {
  if (! Meteor.user()) {
   this.redirect('home');
  }else{
   this.next();
 }
}

var curUser = function() {
  if (! Meteor.user()) {
   this.next();
  }else{
   this.redirect('dashboard');
 }
}


Router.onBeforeAction(requireLogin, {except: ['home','register']});
Router.onBeforeAction(curUser, {only: ['home','register']});
