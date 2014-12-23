app.controller('DataCtrl', ['$scope', '$controller', 'renderCharts', 'Patient', 'Data', 'RetrieveData',
    function ($scope, $controller, renderCharts, Patient, Data, RetrieveData) {
        $scope.showTempForm = false;
        $scope.showPulseForm = false;
        $scope.showPressureForm = false;
        $scope.showDeleteTemp = false;
        $scope.showDeletePulse = false;
        $scope.showDeletePressure = false;
        $scope.toggleTemperatureForm = function () {
            $scope.showTempForm = !$scope.showTempForm;
        };
        $scope.togglePulseForm = function () {
            $scope.showPulseForm = !$scope.showPulseForm;
        };
        $scope.togglePressureForm = function () {
            $scope.showPressureForm = !$scope.showPressureForm;
        };
        $scope.toggleDeleteTemp = function () {
            $scope.showDeleteTemp = !$scope.showDeleteTemp;
        };
        $scope.toggleDeletePulse = function () {
            $scope.showDeletePulse = !$scope.showDeletePulse;
        };
        $scope.toggleDeletePressure = function () {
            $scope.showDeletePressure = !$scope.showDeletePressure;
        };

        $scope.addTemp = function (name, id, date, temperature) {
            Data.addTemperatureById(id, date, temperature);
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getTemperatureById(id)
                            .then(function (result) {
                                var obj = RetrieveData.retrieveTemperature(result.data);
                                renderCharts.renderTempChart(name, obj.dates, obj.temperature);
                                $scope.tempdates = obj.dates;
                                $scope.tempvalues = obj.temperature;
                                $scope.showTempForm = false;
                            });
                });
            }, 1000);
        };

        $scope.deleteTemp = function (name, id, date) {
            Data.deleteTemperatureById(id, date);
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getTemperatureById(id)
                            .then(function (result) {
                                var obj = RetrieveData.retrieveTemperature(result.data);
                                renderCharts.renderTempChart(name, obj.dates, obj.temperature);
                                $scope.tempdates = obj.dates;
                                $scope.tempvalues = obj.temperature;
                                $scope.showDeleteTemp = false;
                            });
                });
            }, 1000);
        };

        $scope.addPulse = function (name, id, date, pulse) {
            Data.addPulseById(id, date, pulse);
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getPulseById(id)
                            .then(function (result) {
                                var obj = RetrieveData.retrievePulse(result.data);
                                renderCharts.renderPulseChart(name, obj.dates, obj.pulse);
                                $scope.pulsedates = obj.dates;
                                $scope.pulses = obj.pulse;
                                $scope.showPulseForm = false;
                            });
                });
            }, 1000);
        };

        $scope.deletePulse = function (name, id, date) {
            Data.deletePulseById(id, date);
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getPulseById(id)
                            .then(function (result) {
                                var obj = RetrieveData.retrievePulse(result.data);
                                renderCharts.renderPulseChart(name, obj.dates, obj.pulse);
                                $scope.pulsedates = obj.dates;
                                $scope.pulses = obj.pulse;
                                $scope.showDeletePulse = false;
                            });
                });
            }, 1000);

        };

        $scope.addPressure = function (name, id, date, systolic, diastolic) {

            Data.addPressureById(id, date, systolic, diastolic);
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getPressureById(id)
                            .then(function (result) {
                                var obj = RetrieveData.retrievePressure(result.data);
                                renderCharts.renderPressureChart(name, obj.dates, obj.systolic, obj.diastolic);
                                $scope.pressuredates = obj.dates;
                                $scope.systolic = obj.systolic;
                                $scope.diastolic = obj.diastolic;
                                $scope.showPressureForm = false;
                            });
                });
            }, 1000);
        };

        $scope.deletePressure = function (name, id, date) {
            Data.deletePressure(id, date);
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getPressureById(id)
                            .then(function (result) {
                                var obj = RetrieveData.retrievePressure(result.data);
                                renderCharts.renderPressureChart(name, obj.dates, obj.systolic, obj.diastolic);
                                $scope.pressuredates = obj.dates;
                                $scope.systolic = obj.systolic;
                                $scope.diastolic = obj.diastolic;
                                $scope.showDeletePressure = false;
                            });
                });
            }, 1000);
        };

    }]);