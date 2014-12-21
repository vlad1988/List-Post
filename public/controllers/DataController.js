app.controller('DataCtrl', ['$scope', '$controller', 'renderCharts', 'Patient', 'Data', 'RetrieveData',
    function ($scope, $controller, renderCharts, Patient, Data, RetrieveData) {
        $scope.showTempForm = false;
        $scope.toggleTemperatureForm = function () {
            $scope.showTempForm = !$scope.showTempForm;
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
            }, 2000);
        };

    }]);