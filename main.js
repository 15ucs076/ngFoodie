// Runs when HTML file is loaded
//$(document).ready(function() {
	//$('#user-email').on('input',function() {
   // var email = $('#user-email').val()
      //  var message = 'Welcome Back, ' + email;
      //  $('.welcome-message').text(message);
   // });
   //});
   
   
   var foodieApp = angular.module('foodieApp',[]);
  
   
   foodieApp.controller('mainController',function($scope) {
	 $scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}
	   {
	  
		   name: 'farzi cafe',
		   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		   location: 'Connaught Place',
		   category: 'Casual Dining , Bar',
		   vote: '4.2',
		   cuisines: 'Modern Indian',
		   cost: '2200',
		   hours: '12 Noon to 1 AM (Mon-Sun)',
		   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	   },
	   {
	   
		   name: 'farzi cafe',
		   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		   location: 'Connaught Place',
		   category: 'Casual Dining , Bar',
		   vote: '4.2',
		   cuisines: 'Modern Indian',
		   cost: '2200',
		   hours: '12 Noon to 1 AM (Mon-Sun)',
		   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	   },
	   {
	  
		   name: 'farzi cafe',
		   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		   location: 'Connaught Place',
		   category: 'Casual Dining , Bar',
		   vote: '4.2',
		   cuisines: 'Modern Indian',
		   cost: '2200',
		   hours: '12 Noon to 1 AM (Mon-Sun)',
		   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	   },
	   {
	  
		   name: 'farzi cafe',
		   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		   location: 'Connaught Place',
		   category: 'Casual Dining , Bar',
		   vote: '4.2',
		   cuisines: 'Modern Indian',
		   cost: '2200',
		   hours: '12 Noon to 1 AM (Mon-Sun)',
		   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	   },
	   {
	  
		   name: 'farzi cafe',
		   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		   location: 'Connaught Place',
		   category: 'Casual Dining , Bar',
		   vote: '4.2',
		   cuisines: 'Modern Indian',
		   cost: '2200',
		   hours: '12 Noon to 1 AM (Mon-Sun)',
		   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	   }
	   
	   ]
	   
	   })