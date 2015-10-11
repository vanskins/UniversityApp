Meteor.publish("Tokens", function(){
  return Tokens.find({});
});
