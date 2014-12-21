app.factory('Data', ['$http', function ($http) {

        var addTemperatureById = function (id, date, temp) {
            return $http({
                method: 'GET',
                url: 'data/addtemperature/' + id + '/' + date + '/' + temp
            });
        };
        return {
            addTemperatureById: addTemperatureById
        };
    }]);


