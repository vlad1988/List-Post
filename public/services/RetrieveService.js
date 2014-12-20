app.service('RetrieveData', [function () {
        var retrieveTemperature = function (data) {
            var dates = [], temperature = [];
            for (var i = 0; i < data.length; i++) {
                dates.push(data[i].date);
            }

            for (var i = 0; i < data.length; i++) {
                temperature.push(parseFloat(data[i].temparature, 10));
            }
            return {
                dates: dates,
                temperature: temperature
            };
        };

        return{
            retrieveTemperature: retrieveTemperature
        };
    }]);
