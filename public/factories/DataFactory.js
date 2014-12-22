app.factory('Data', ['$http', function ($http) {

        var addTemperatureById = function (id, date, temp) {
            return $http({
                method: 'GET',
                url: 'data/addtemperature/' + id + '/' + date + '/' + temp
            });
        };

        var addPulseById = function (id, date, pulse) {
            return $http({
                method: 'GET',
                url: 'data/addpulse/' + id + '/' + date + '/' + pulse
            });
        };

        var addPressureById = function (id, date, systolic, diastolic) {
            return $http({
                method: 'GET',
                url: 'data/addpressure/' + id + '/' + date + '/' + systolic + '/' + diastolic
            });
        };

        return {
            addTemperatureById: addTemperatureById,
            addPulseById: addPulseById,
            addPressureById : addPressureById 
        };
    }]);


