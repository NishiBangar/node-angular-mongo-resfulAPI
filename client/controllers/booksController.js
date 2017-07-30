var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams',
		function($scope,$http,$location,$routeParams){

	 
	// **** Get All Books *****
	$scope.getBooks = function(){

		$http.get('/api/books').then(function(successResponse){
			$scope.books = successResponse.data;

		},function(errorResponse){
			alert("Server rror");
		});
	};

	// **** Get Individual Book Details ****
	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).then(function(successResponse){
			$scope.book = successResponse.data;
		
		},function(errorResponse){
			alert("Server Error");
		});
	};

	// **** Add Book *****
	$scope.addBook = function(){
		 
		$http.post('/api/books',$scope.book).then(function(successResponse){
			$scope.book = successResponse.data;
			window.location.href='#/books';
		
		},function(errorResponse){
			alert("Server Error");
		});
	};

	// **** Update Book *****
	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id,$scope.book).then(function(successResponse){
			
			window.location.href='#/books';
		
		},function(errorResponse){
			alert("Server Error");
		});
	};

	// **** Remove Book *****
	$scope.removeBook = function(id){
		 
		$http.delete('/api/books/'+id).then(function(successResponse){
			
			window.location.href='#/books';
		
		},function(errorResponse){
			alert("Server Error");
		});
	};
}]);
