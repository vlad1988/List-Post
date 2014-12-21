var app = angular.module("TempList", ['ui.bootstrap']);

app.controller("MainCtrl", ['$scope', '$http', 'renderCharts', 'Patient', 'RetrieveData',
    function ($scope, $http, renderCharts, Patient, RetrieveData) {
        $scope.showingAddPatient = false;
        $scope.showPanels = true;
        $scope.showReplyForm = true;

        $scope.showingPanels = function () {
            $scope.showPanels = !$scope.showPanels;
        };
        $scope.showingReplyPatientData = function (patient) {
            $scope.replyPatient = {};
            $scope.showReplyForm = false;
            $scope.replyPatient.name = patient.name;
            $scope.replyPatient.id = patient.idpatients;
        };

        $scope.hideFormReply = function () {
            $scope.showReplyForm = true;
        };

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
            $scope.showPanels = true;
            $scope.idPatient = patient.idpatients;
            $scope.namePatient = patient.name;
            Patient.getTemperatureById(patient.idpatients)
                    .then(function (result) {
                        var obj = RetrieveData.retrieveTemperature(result.data);
                        renderCharts.renderTempChart(patient, obj.dates, obj.temperature);
                        $scope.tempdates = obj.dates;
                        $scope.tempvalues = obj.temperature;
                    });
            Patient.getPressureById(patient.idpatients)
                    .then(function (result) {
                        var obj = RetrieveData.retrievePressure(result.data);
                        renderCharts.renderPressureChart(patient, obj.dates, obj.systolic, obj.diastolic);
                        $scope.pressuredates = obj.dates;
                        $scope.systolic = obj.systolic;
                        $scope.diastolic = obj.diastolic;
                    });
            Patient.getPulseById(patient.idpatients)
                    .then(function (result) {
                        var obj = RetrieveData.retrievePulse(result.data);
                        renderCharts.renderPulseChart(patient, obj.dates, obj.pulse);
                        $scope.pulsedates = obj.dates;
                        $scope.pulses = obj.pulse;
                    });

        };
        $scope.deletePatient = function (id) {
            Patient.deletePatientById(id)
                    .success(function (data, status) {
                    });
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getAllPatients()
                            .success(function (response) {
                                $scope.names = response;
                            });
                });
            }, 2000);
        };

        $scope.updatePatient = function (id) {
            Patient.updatePatientById(id, $scope.replyPatient.name)
                    .success(function (data, status) {
                    });
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getAllPatients()
                            .success(function (response) {
                                $scope.names = response;
                            });
                });
            }, 2000);
            $scope.showReplyForm = true;
        };

    }]);

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
            $scope.addtemp = null;
            $scope.tempdate = null;
        };

    }]);

