
var app = angular.module('myApp',['ngRoute','toastr']);
// 1. configurez rutele
app.config(function($routeProvider, $locationProvider){
    $routeProvider
     // ruta pentru home page
    .when('/',{
        templateUrl : 'main.html',
        controller : 'details'
    })
    .when('/update/:id',{
        templateUrl : 'update.html',
        controller : 'update'
    })
    .when('/add',{
        templateUrl : 'add.html',
        controller : 'insert'
    })
    // otherwise = daca scrie alceva in UTL il duc tot timpul pe hompage
    // trebuie sa fie ultima
    .otherwise({  
        redirectTo: '/'
    });
    // daca se doreste sa se acceseze fara prefix #!
    // $locationProvider.hashPrefix('');
})

// 2. pentru fiecare ruta definita mai sus,  scriu un controller care manipuleaza continutul HTML: templateUrl
app.controller('details',function($scope,$http,toastr){
    function getEMP(){
        $http.get("/getUsers").then(function(response){
            $scope.data = response.data;
            //console.log($scope.data);
            if($scope.data.length > 0){
                $scope.display = true;
            }else{
                $scope.display = false;
            }
        });
    }

    getEMP();

    $scope.remove = function(id){
        $http.get("/deleteUser",{params:{uid : id}}).then(function(response){
            //console.log(response.data);
            toastr.success('','Utilizatorul a fost sters cu succes!');
        });
        getEMP();
    }
});

app.controller('update',function($scope,$routeParams,$http,toastr){
    $scope.id = $routeParams.id;

    //cand se afiseaza in browser codul din update.html se face get la server si se afiseaza datele in html
    $http.get('/singleRow',{params : {uid : $scope.id}}).then(function(response){
        var result = response.data;
        $scope.nume     = result[0].nume;
        $scope.prenume  = result[0].prenume;
        $scope.email    = result[0].email;
        
    });

    // din browser cand se da click pe Editeaza se trimit datele catre server tot prin GET
    // Provocare schimbati GET in POST
    $scope.update = function(id){
        $http.get('/updateData',{params : {uid : id, nume : $scope.nume, prenume : $scope.prenume, email : $scope.email}})
        .then(function(response){
            toastr.success('',response.data.affectedRows + ' Informatiile au fost actualizate cu succes!');
        });
    }
});

app.controller('insert', function ($scope, $http, toastr) {
     // din browser cand se da click pe Adauga se trimit datele catre server tot prin GET
    $scope.add = function () {
        // Provocare schimbati GET in POST
        $http.get('/addData', { params: { nume: $scope.nume, prenume: $scope.prenume, email: $scope.email, parola: $scope.parola } })
            .then(function (response) {
                console.log(response.data);
                toastr.success('', response.data.affectedRows + ' Utilizatorul a fost salvat cu succes!');
            });
    }
});
// validare email
app.directive('validateEmailRemotely', function(AuthenticateService) {
    console.log('email in directive');
    return {
     restrict: 'A',  // directiva va fi atribut in HTML; E - element
         scope: true,
         require: 'ngModel',
         link: function(scope, elem, attrs, ctrls) {
            console.log('email in directive',attrs);
           var ngModel = ctrls;
           scope.$watch(attrs.ngModel, function(email) {
            AuthenticateService.Email(email)
            .then(function(result) {
                if (result.email_exists) {
                    console.log('este mail in db')
                ngModel.$setValidity('validEmail', false);
                } else {
                ngModel.$setValidity('validEmail', true);
                }
             });
           });
         }
   }
 });
 app.service('AuthenticateService', function($http) {
    console.log('email in serviciu');
    return {
       
      Email: function(email) {
         var url = '/valid_email?email='+email;
     
         return $http.get(url)
            .then(function(response) {
                return response.data;
            }, function(error) {
                return error.data;
        });
      }
   };
 });