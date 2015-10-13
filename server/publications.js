Meteor.publish("Tokens", function(){
  return Tokens.find({});
});
Meteor.publish("profiles", function(){
  return Profile.find({});
})
