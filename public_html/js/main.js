/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ngRouter es el ruteador 
miApp = angular.module('miApp',['ngRoute','ngTable']);
miApp.config(function($routeProvider){
    
    // $routeProvider Se utiliza para la configuración de rutas .
    // metodos del $routerProvider when(path, route);
    // nos permite pasar parametros

    $routeProvider
            .when("/", {
                //
                
                templateUrl: "views/inicio.html" 
            })
            .when("/historial", {
                controller: "historialCtrl",
                templateUrl: "views/historial.html"
            })
            .when("/registro", {
                controller: "registroCtrl",
                templateUrl: "views/registro.html"
            })            
           .otherwise({
                redirectTo: "/", 
                templateUrl: "views/inicio.html"
            });
});



