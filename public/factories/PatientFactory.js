app.factory('Patient', ['$http', function ($http) {

        var getAllPatients = function () {
            return $http({
                method: 'GET',
                url: 'index/patients'
            });
        };

        var getPressureById = function (id) {
            return $http({
                method: 'GET',
                url: 'index/pressurelist/' + id
            });
        };
        
        var getPulseById = function (id) {
            return $http({
                method: 'GET',
                url: 'index/pulselist/' + id
            });
        };
        
        var getTemperatureById = function (id) {
            return $http({
                method: 'GET',
                url: 'index/templist/' + id
            });
        };

        return {
            getAllPatients: getAllPatients,
            getTemperatureById: getTemperatureById,
            getPressureById: getPressureById,
            getPulseById: getPulseById
        };
    }]);
