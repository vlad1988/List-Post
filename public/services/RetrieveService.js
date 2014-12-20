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

        var retrievePressure = function (data) {
            var dates = [], systolic = [], diastolic = [];

            for (var i = 0; i < data.length; i++) {
                dates.push(data[i].date);
            }

            for (var i = 0; i < data.length; i++) {
                systolic.push(parseFloat(data[i].systolic, 10));
            }

            for (var i = 0; i < data.length; i++) {
                diastolic.push(parseFloat(data[i].diastolic, 10));
            }
            return {
                dates: dates,
                systolic: systolic,
                diastolic: diastolic
            };
        };

        var retrievePulse = function (data) {
            var dates = [], pulse = [];
            for (var i = 0; i < data.length; i++) {
                dates.push(data[i].date);
            }
            for (var i = 0; i < data.length; i++) {
                pulse.push(parseFloat(data[i].pulse, 10));
            }
            return {
                dates: dates,
                pulse: pulse
            };
        };

        return{
            retrieveTemperature: retrieveTemperature,
            retrievePressure: retrievePressure,
            retrievePulse: retrievePulse
        };
    }]);
