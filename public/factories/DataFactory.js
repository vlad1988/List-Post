app.factory('Data', ['$http', function ($http) {

        var addTemperatureById = function (id, date, temp) {
            return $http({
                method: 'GET',
                url: 'data/addtemperature/' + id + '/' + date + '/' + temp
            });
        };
        var deleteTemperatureById = function (id, date) {
            return $http({
                method: 'GET',
                url: 'data/deletetemperature/' + id + '/' + date
            });
        };

        var addPulseById = function (id, date, pulse) {
            return $http({
                method: 'GET',
                url: 'data/addpulse/' + id + '/' + date + '/' + pulse
            });
        };
        
        var deletePulseById = function (id, date) {
            return $http({
                method: 'GET',
                url: 'data/deletepulse/' + id + '/' + date
            });
        };

        var addPressureById = function (id, date, systolic, diastolic) {
            return $http({
                method: 'GET',
                url: 'data/addpressure/' + id + '/' + date + '/' + systolic + '/' + diastolic
            });
        };
        
        var deletePressure = function(id, date){
            return $http({
                method: 'GET',
                url: 'data/deletepressure/' + id + '/' + date 
            });
        };

        return {
            deletePressure: deletePressure,
            deletePulseById:deletePulseById,
            deleteTemperatureById:deleteTemperatureById,
            addTemperatureById: addTemperatureById,
            addPulseById: addPulseById,
            addPressureById: addPressureById
        };
    }]);


