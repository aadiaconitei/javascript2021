// definesc modulul aplicatiei: myApp si includ modulul ngRoute
var app = angular.module('myApp', ['ngRoute']);

// configurez rutele
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // ruta pentru home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        // ruta pentru portofoliu page
        .when('/portfolio', {
            templateUrl: 'pages/portofoliu.html',
            controller: 'portoController'
        })
        // ruta pentru about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // ruta pentru contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');
});

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = '#StamInCasa!';
});
app.controller('portoController', function ($scope) {
    $scope.message = 'Facem cat mai multe proiecte pentru portofoliu';
});
app.controller('aboutController', function ($scope) {
    $scope.message = 'Despre noi... numai de bine.';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'Contactati-ne acum iar noi va raspundem in 90 de zile.';
});