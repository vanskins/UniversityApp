Template.studentdashboardSettings.events({
  "click #btnPicture": function(event){
     event.preventDefault();
     $("#profile_photo").click()
  },
  "change #profile_photo": function (event){
    var profile = Profile.findOne({"metadata.owner": Meteor.userId()});
    if(profile){
      Profile.remove(profile._id);
      FS.Utility.eachFile(event, function(file) {
        var newFile = new FS.File(file);
        newFile.metadata = {owner: Meteor.userId()};
        Profile.insert(newFile, function (err, fileObj) {
        });
      });
    }else{
      FS.Utility.eachFile(event, function(file) {
        var newFile = new FS.File(file);
        newFile.metadata = {owner: Meteor.userId()};
        Profile.insert(newFile, function (err, fileObj) {
          console.log(err);
        });
      });
    }
  }
});

Template.studentdashboardSettings.helpers({
  uploaded: function(){
    return IonLoading.show({
          customTemplate: '<h3>Loading…</h3><p>Please wait while we upload your image.</p>',
          duration: 3000
          });
        }
});
