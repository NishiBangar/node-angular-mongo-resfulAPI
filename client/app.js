var myApp = angular.module("myApp",['ngRoute']);

// To change to the default for hash-bang urls (AngularJS 1.6) in the $location service.
myApp.config(['$locationProvider',function($locationProvider){
	$locationProvider.hashPrefix('');
}// *********************************************************************************

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller : 'BooksController',
		templateUrl : 'views/books.html'
	})
	.when('/books',{
		controller : 'BooksController',
		templateUrl : 'views/books.html'
	})
	.when('/books/details/:id',{
		controller : 'BooksController',
		templateUrl : 'views/book_details.html'
	})
	.when('/books/add',{
		controller : 'BooksController',
		templateUrl : 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller : 'BooksController',
		templateUrl : 'views/edit_book.html'
	})
	.otherwise({
		redirectTo : '/'
	});
});