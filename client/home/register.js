function dialog(title, template, button){
  IonPopup.show({
    title: title,
    template: template,
    buttons: [{
      text: 'OK',
      type: button,
      onTap: function() {
        IonPopup.close();
      }
    }]
  }); //IonPopup
};

Template.register.events({
  "click #btnBack": function(event){
    Router.go('/');
  },// click #btnBack
  "click #btnRegStudent": function(event){
    event.preventDefault();
    var username = $("#txtUserName").val();
    var password = $("#txtPassword").val();
    var confpassword = $("#txtConfPassword").val();
    var id = $("#txtID").val();
    var fullname = $("#txtFullName").val();


    if(username == "" || password == "" || confpassword == "" || id == "" || fullname == ""){
      title = "ERROR";
      button = "button button-assertive";
      template = "Please Complete all the Fields";
      dialog(title, template, button);
    }else if(password != confpassword){
      title = "ERROR";
      button = "button button-assertive";
      template = "Password does not match.";
      dialog(title, template, button);
    }else{
      Meteor.call('registerStudent', username, password, id, fullname, function(error){
        if(error){
          title = "ERROR";
          template = error.reason;
          button = "button button-assertive";
          dialog(title, template, button);
        }else{
          title = "success";
          template = "You can now login.";
          button = "button button-balanced";
          dialog(title, template, button);
        }
      });//Meteor call
    }//else
  },// click #btnRegStudent
  "click #bnRegTeacher": function(event){
    event.preventDefault();
      var username = $("#txtUserName").val();
      var password = $("#txtPassword").val();
      var confpassword = $("#txtConfPassword").val();
      var id = $("#txtID").val();
      var fullname = $("#txtFullName").val();

      if(username == "" || password == "" || confpassword == "" || id == "" || fullname == ""){
        title = "ERROR";
        button = "button button-assertive";
        template = "Please Complete all the Fields";
        dialog(title, template, button);
      }else if(password != confpassword){
        title = "ERROR";
        button = "button button-assertive";
        template = "Password does not match.";
        dialog(title, template, button);
      }else{
        IonPopup.prompt({
          title: 'Security Token',
          template: 'Please enter the token given by admin',
          okText: 'Submit',
          inputType: 'password',
          inputPlaceholder: '',
            onOk: function(error, result){
              token = result;
              Meteor.call('registerTeacher', token, username, password, id, fullname, function(error){
                if(error){
                  title = "ERROR";
                  button = "button button-assertive";
                  template = error.reason;
                  dialog(title, template, button);
                }else{
                  title = "success";
                  template = "You can now login.";
                  button = "button button-balanced";
                  dialog(title, template, button);
                }
              });
            }//onok
        });//IonPopup.prompt
      }//else
  }//#btnRegTeacher
});

var testarray = new Array
  ('<div class="spinner">',
  '<div class="rect1"></div>',
  '<div class="rect2"></div>',
  '<div class="rect3"></div>',
  '<div class="rect4"></div>',
  '<div class="rect5"></div>',
  '</div>');

Notifications.error('TRYING TO CONNECT',testarray.join(" "));
