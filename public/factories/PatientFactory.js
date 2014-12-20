app.factory('Patient', ['$http', function ($http) {

        var getAllPatients = function () {
            return $http({
                method: 'GET',
                url: 'index/patients'
            });
        };

        var getPressureById = function () {
        };
        var getPulseById = function () {
        };
        
        var getTemperatureById = function (id) {
            return $http({
                method: 'GET',
                url: 'index/templist/' + id
            });
        };

        return {
            getAllPatients: getAllPatients,
            getTemperatureById: getTemperatureById
        };
    }]);
