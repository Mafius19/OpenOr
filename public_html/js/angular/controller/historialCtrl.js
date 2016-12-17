// $scope sirve para un controlador 
// $rootScope nos permite compartir informacion con los controladores
miApp.controller('historialCtrl', ['$scope', '$rootScope', 'appRegService', 'ngTableParams', function($scope, $rootScope, appRegService, ngTableParams){

//then devuelve los datos del json A datos
appRegService.getHistorial().then(function(datos){
            $rootScope.registrosRoot = datos;
            $scope.registros = $rootScope.registrosRoot;
            
            var data = $rootScope.registrosRoot;
            $scope.tableParams = new ngTableParams({
                
            page: 1, // show first page
            count: 3           // count per page        
            }, {
            total: data.length, // length of data
                    getData: function ($defer, params) {
                    //cuando hago $scope.tableParams.reload, esta funcion getData
                    //se ejecuta nuevamente y recargo otra vez la fuente de datos data
                    //con el array actualizado
                    data = $rootScope.registrosRoot;
                            //actualizo parametros seteados en la primera carga
                            params.total(data.length);
                            //actualizo el params.page a uno si se da la situacion de borrar el
                            //UNICO elemento de la ULTIMA pagina del table
                            if (params.total() <= ((params.page() - 1) * params.count())){
                    params.page(1);
                    }
                    //obtengo los elementos de la pagina actual a mostrar
                    $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                   }
            });
    });
    
    $scope.limpiarInputs = function (){
        $('input').val(null);
    };
    
    $scope.ordenarPor = function (order){
      $scope.ordenSeleccionado = order; 
    };
    
    
}]);

