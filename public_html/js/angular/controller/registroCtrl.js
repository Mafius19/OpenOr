miApp.controller('registroCtrl', ['$scope', '$rootScope', 'appRegService', 'ngTableParams', function($scope, $rootScope, appRegService, ngTableParams){
    
    $scope.registro = null;
    // este array contiene los registros de forma local en la vista 
    $scope.registroLocal = [];
    
    $scope.agregarRegistro = function(){
        var regTemp = JSON.parse(JSON.stringify($scope.registro));
        $scope.registroLocal.push(regTemp);
        $scope.registro = {};
    },
    
    $scope.enviarRegistros = function(){
        console.log($scope.registroLocal);
        appRegService.setRegistro($scope.registroLocal);
        $scope.registroLocal = 0;
        $scope.calcularTotalRegistos();
    },
    
    $scope.calcularTotalRegistos = function(){
        var total = 0;
        angular.forEach($scope.registroLocal, function (registro){
            total +=registro.cantidad;  
        });
        $scope.total = total;
        $scope.cantidad = $scope.registroLocal.length;
    }; 
}]);

