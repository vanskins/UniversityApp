Meteor.startup(function(){
  checkadmin = Meteor.users.find({roles: 'admin'}).count();
  if(checkadmin == 0){
      adminDetails= {
      username: "admin",
      password: "admin"
    }
    id = Accounts.createUser(adminDetails);
    Roles.addUsersToRoles(id, 'admin');
  }
});

Meteor.methods({

  // REGISTRATIONS 
  registerStudent: function(username, password, id, fullname,){
    studentDetails = {
      username: username,
      password: password,
      profile: {
        id: id,
        fullname: fullname
      }//additional details for the user
    }//studentDetails object
    id = Accounts.createUser(studentDetails);
    Roles.addUsersToRoles(id, 'student');
  },//registerStudent
  registerTeacher: function(token, username, password, id , fullname){
    var ifexist = Tokens.find({token: token, used: false}).count();
    console.log(ifexist);
    if(ifexist === 1){
        regDetails = {
        username: username,
        password: password,
        profile: {
          id: id,
          fullname: fullname
        }
      }
        id = Accounts.createUser(regDetails);
        Roles.addUsersToRoles(id, 'teacher');
        Tokens.update({token: token}, {$set: {used: "true"}});
    }else{
      throw new Meteor.Error("invalid", "Invalid Token.");
    }
  },
  addTokens: function(token){
    var rand = function() {
        return Math.random().toString(36).substr(2); // remove `0.`
    };
    var token = function() {
        return rand(); // to make it longer
    };
    var token = token();
    var auth = Meteor.user().roles[0];
      if(auth != 'admin'){
        throw new Meteor.Error("Access Denied");
      }else if(auth == 'admin'){
        Tokens.insert({
          token: token,
          used: false,
          createdAt: new Date()
        });
      }
  } // add tokens
});
