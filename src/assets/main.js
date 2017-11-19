$(function() {

  // your code will go here
   $.ajax({
    url: 'https://www.codeschool.com/users/cathortiz.json',
    dataType: 'jsonp',
    success: function(response) {
    	console.log('response',response.courses.completed);
      addCourses(response.courses.completed);
    }
  });

   function addCourses(courses) {
   	var badges = $('#badges');
   	courses.forEach(function(course) {

   	var courseTile = 	$('<div />', {
   			'class': 'course'
   		}).appendTo(badges);

   		$('<h3 />', {
   			text: course.title
   		}).appendTo(courseTile);

   		$('<img />', {
   			src: course.badge
   		}).appendTo(courseTile);

   		$('<a />', {
   			href: course.url,
   			target: '_blank',
   			'class': 'btn btn-primary',
   			text: "View Course"
   		}).appendTo(courseTile);

   	})

   }

});
