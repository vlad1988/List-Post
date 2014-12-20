app.factory('Patient', ['$http', function($http){
       
        var getAllPatients = function(){
            return $http({
                method: 'GET',
                url: 'index/patients'
            });
        };
        
        return {
            getAllPatients:getAllPatients
        };
}]);
