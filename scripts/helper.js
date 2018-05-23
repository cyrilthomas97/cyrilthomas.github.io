var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skills_array = ['1', '2', '3','4'];

var skills_new = '';

for(var i=0; i<skills_array.length; i+=1){
	skills_new = skills.replace('%data%', skills_array[i]);
	$('.skills-section-images').append(skills_new); //$ means jquery is being used, within paranthensis the class name is used
}



//experience section

var experience = '<li><h4>%data% &nbsp; &nbsp &nbsp; (%data1%)</h4><h5>%data2%</h5></li>' //&nbsp creates one space each

var experience_array =[ //creating parametersa as objects
	{
		name: 'University of Waterloo',
		years: '2016-2022', 
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	},
	{
		name: 'Pivotal' ,
		years: '2016-2017', 
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	},
	{
		name: 'Google',
		years:'2019-2020', 
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}
];

var experience_new = '';

for(var i=0; i<experience_array.length; i ++){
	experience_new = experience.replace('%data%', experience_array[i]['name']);
	experience_new = experience_new.replace('%data1%', experience_array[i]['years']);
	experience_new = experience_new.replace('%data2%', experience_array[i]['info']);

	//jquery used to append this to our html file

	$('.experience-section-info').append(experience_new);

}

var projects = '<li><h3>%data%</h3><div class="row"><div class="col-md-3"><img src="./img/%data1%.png" alt="project-image-1" class="img-responsive"></div><div class="col-md-9"><h5>%data2% </h5></div></div></li>';

var projects_array = [
	{
		 name: 'Sideproject',
		 img: 'dog',
		 info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>'
	},

	{
		 name: 'Out of Names',
		 img: 'rabbit' ,
		 info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>'
	}

];

var projects_new = '';

for(var i=0; i<projects_array.length; i++){
	projects_new = projects.replace('%data%', projects_array[i]['name']);
	projects_new = projects_new.replace('%data1%', projects_array[i]['img']);
	projects_new = projects_new.replace('%data2%', projects_array[i]['info']);
	$('.projects-section-info').append(projects_new);
}
