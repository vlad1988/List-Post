app.factory('Patient', ['$http', function ($http) {

        var getAllPatientsById = function (id) {
            return $http({
                method: 'GET',
                url: 'index/patients/' + id
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

        var deletePatientById = function (id) {
            return $http({
                method: 'GET',
                url: 'index/deletepatient/' + id
            });
        };

        var updatePatientById = function (id, name, card) {
            return $http({
                method: 'GET',
                url: 'index/updatepatient/' + id + '/' + name + '/'+ card
            });
        };

        return {
            getAllPatientsById: getAllPatientsById,
            getTemperatureById: getTemperatureById,
            getPressureById: getPressureById,
            getPulseById: getPulseById,
            deletePatientById: deletePatientById,
            updatePatientById: updatePatientById
        };
    }]);
