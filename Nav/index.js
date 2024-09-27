var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./pages/home.html",
			controller: "HomeController",
		})
		.when("/product", {
			templateUrl: "./pages/product.html",
			controller: "ProductController",
		})	
		.when("/about", {
			templateUrl: "./pages/about.html",
			controller: "AboutController",
		})
		.when("/contact", {
			templateUrl: "./pages/contact.html",
			controller: "ContactController",
		})
		.otherwise({
			redirectTo: "/",
		});
});

app.controller("HomeController", function ($scope) {
	$scope.message = "Welcome to the Home Page!";
});

app.controller("ProductController", function ($scope) {
	$scope.message = "Freshly made with love, just for your taste buds!";
});

app.controller("AboutController", function ($scope) {
	$scope.message = "Learn more About Us!";
});

app.controller("ContactController", function ($scope) {
	$scope.message = "Get in Touch with Us!";
});

app.controller("NavController", function ($scope, $location) {
	$scope.isSidebarOpen = false;

	$scope.isActive = function (route) {
		return $location.path() === route;
	};

	$scope.setActive = function (route) {
		$location.path(route);
	};

	$scope.toggleSidebar = function () {
		$scope.isSidebarOpen = !$scope.isSidebarOpen;
	};
});

app.directive("parallaxImage", function ($window) {
	return function (scope, element) {
		angular.element($window).on("scroll", function () {
			var scrolled = $window.pageYOffset;
			element
				.find("img")
				.css("transform", "translateY(" + scrolled * 0.5 + "px)");
		});
	};
});

