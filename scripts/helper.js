var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skills_array = ['1', '2', '3','4'];

var skills_new = '';

for(var i=0; i<skills_array.length; i+=1){
	skills_new = skills.replace('%data%', skills_array[i]);
	$('.skills-section-images').append(skills_new); //$ means jquery is being used, within paranthensis the class name is used

}