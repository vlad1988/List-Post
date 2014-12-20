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

            var temperature = [];
            var dates = [];

            Patient.getTemperatureById(patient.idpatients)
                    .then(function (result) {
//                        retrieveData(result.data);
                        var obj = RetrieveData.retrieveTemperature(result.data);
                        renderCharts.renderTempChart(patient, obj.dates, obj.temperature);
                    });

//            function retrieveData(data) {
//                for (var i = 0; i < data.length; i++) {
//                    dates.push(data[i].date);
//                }
//
//                for (var i = 0; i < data.length; i++) {
//                    temperature.push(parseFloat(data[i].temparature, 10));
//                }
//                renderCharts.renderTempChart(patient, dates, temperature);
//            }
            $scope.datatemp = dates;
            $scope.temperature = temperature;
        };

    }]);


