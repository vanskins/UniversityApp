Template.home.events({
  "click #goReg": function(event){
    Router.go('register')
  },//click #goReg
  "click #btnLogin": function(event){
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();

    if(username == "" || password == ""){
      IonPopup.show({
        title: "ERROR",
        template: "Username and password <br>should not be empty.",
        buttons: [{
          text: 'OK',
          type: 'button-assertive',
          onTap: function() {
            IonPopup.close();
          }
        }]
      }); //IonPopup
      }else{
        Meteor.loginWithPassword(username, password, function(error){
          if(error){
            IonPopup.show({
              title: "ERROR",
              template: error.reason,
              buttons: [{
                text: 'OK',
                type: 'button-assertive',
                onTap: function() {
                  IonPopup.close();
                }
              }]
            }); //IonPopup
          }else{
            Router.go('dashboard');
          }
      });
    }
  }//click #btnLogin
});

Template.home.helpers({
  admin: function(){
    Router.go('admindashboardHome');
  },
  teacher: function(){
    Router.go('teacherdashbaord');
  },
  student: function(){
    Router.go('studentdashboard');
  }
});

Handlebars.registerHelper('connected', function () {
  return Meteor.status().connected;
});

var testarray = new Array
  ('<div class="spinner">',
  '<div class="rect1"></div>',
  '<div class="rect2"></div>',
  '<div class="rect3"></div>',
  '<div class="rect4"></div>',
  '<div class="rect5"></div>',
  '</div>');
