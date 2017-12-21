$("#btn").click(function(){

var firstname = $("#firstname").val();
var lastname = $("#lastname").val();
var skills = $("#skills").val();
var workexperience = $("#workexperience").val();
var education = $("#education").val();
var certification = $("#certification").val();


var description = firstname + lastname + " has a " + education + " degree " " , " "works for" + workexperience + "company"  + "and has the following certifications:" certification + ".";
$("#careerbackground").html(description);
})

