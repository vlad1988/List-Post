var app = angular.module("TempList", ['ui.bootstrap']);


app.controller("MainCtrl", ['$scope', '$http', 'renderCharts', 'Patient', 'RetrieveData',
    function ($scope, $http, renderCharts, Patient, RetrieveData) {
        $scope.showingAddPatient = false;
        $scope.showAddForm = function () {
            $scope.showingAddPatient = !$scope.showingAddPatient;
        };
        $scope.cancelPatientForm = function () {
            $scope.showingAddPatient = false;
        };

        $scope.sendPatient = function () {
            $http.get("index/addpatient/" + $scope.name).success(function (data, status) {

            });
            $scope.showingAddPatient = false;
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getAllPatients()
                            .success(function (response) {
                                $scope.names = response;
                            });
                });
            }, 2000);
        };

        Patient.getAllPatients()
                .success(function (response) {
                    $scope.names = response;
                });

        $scope.selectedPatient = function (patient) {

            Patient.getTemperatureById(patient.idpatients)
                    .then(function (result) {
                        var obj = RetrieveData.retrieveTemperature(result.data);
                        renderCharts.renderTempChart(patient, obj.dates, obj.temperature);
                    });
            Patient.getPressureById(patient.idpatients)
                    .then(function (result) {
                        var obj = RetrieveData.retrievePressure(result.data);
                        renderCharts.renderPressureChart(patient, obj.dates, obj.systolic, obj.diastolic);
                    });
            Patient.getPulseById(patient.idpatients)
                    .then(function (result) {
                        var obj = RetrieveData.retrievePulse(result.data);
                        renderCharts.renderPulseChart(patient, obj.dates, obj.pulse);
                    });

        };

    }]);


