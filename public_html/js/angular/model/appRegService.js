
miApp.service('appRegService',function($http,$q,$rootScope){
   
    var finalizedPayments = [];
   
    this.getHistorial = function () {
        var datosRecu = null;
        var deferred = $q.defer();
        $http.get("js/ordenanzas.json").success(function(datos){
            //console.log("entro aqui ....")
//            angular.forEach(datos, function (data){
//                finalizedPayments.push(data);
//            });
            datosRecu = datos;
            angular.forEach(finalizedPayments, function (data){
                datosRecu.push(data);
            });
            
            deferred.resolve(datosRecu);
        });
        return deferred.promise;
    };
    
    this.setRegistro = function (payments){
        //console.log(payments);
        angular.forEach(payments, function (payment){
            finalizedPayments.push(payment);
        });
        //console.log(finalizedPayments.length);
    };
});