Template.teacherdashboardCreate.events({
  "click #teacherdashboardCreate": function(event){
    event.preventDefault();
    var description = $("#txtAddDescription").val(),
    sec_code = $("#txtAddSectionCode").val(),
    subj_code = $("#txtSubjectCode").val(),
    sched = $("#txtAddSchedule").val(),
    sem = $("#txtAddSemester").val(),
    school_yr = $("#txtAddYear").val();
    Meteor.call('AddClass',description,sec_code,subj_code,sched,sem,school_yr);
  }
});
