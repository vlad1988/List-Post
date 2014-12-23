var app = angular.module("TempList", ['ngCookies']);
//'ui.bootstrap'
app.controller("MainCtrl", ['$scope', '$http', '$window', 'renderCharts', 'Patient', 'RetrieveData',
    function ($scope, $http, $window, renderCharts, Patient, RetrieveData) {
        $scope.info = true;
        $scope.showingAddPatient = false;
        $scope.showPanels = true;
        $scope.showReplyForm = true;
        var iduser = document.getElementById('iduser').value;
        $scope.reload = function () {
            $window.location.reload();
        };
        $scope.showingPanels = function () {
            $scope.info = false;
            $scope.showPanels = !$scope.showPanels;
        };
        $scope.showingReplyPatientData = function (patient) {
            $scope.replyPatient = {};
            $scope.showReplyForm = false;
            $scope.replyPatient.name = patient.name;
            $scope.replyPatient.id = patient.idpatients;
            $scope.replyPatient.card = patient.card;
        };
        $scope.addActive = function (index) {
            $scope.selected = index;
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
            $http.get("index/addpatient/" + $scope.name + "/" + iduser + "/" + $scope.card).success(function (data, status) {

            });
            $scope.showingAddPatient = false;
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getAllPatientsById(iduser)
                            .success(function (response) {
                                $scope.names = response;
                            });
                });
            }, 1000);
        };

        Patient.getAllPatientsById(iduser)
                .success(function (response) {
                    $scope.names = response;
                });

        $scope.selectedPatient = function (patient) {
            $scope.info = false;
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
                    Patient.getAllPatientsById(iduser)
                            .success(function (response) {
                                $scope.names = response;
                            });
                });
            }, 1000);
        };

        $scope.updatePatient = function (id) {
            Patient.updatePatientById(id, $scope.replyPatient.name, $scope.replyPatient.card)
                    .success(function (data, status) {
                    });
            setTimeout(function () {
                $scope.$apply(function () {
                    Patient.getAllPatientsById(iduser)
                            .success(function (response) {
                                $scope.names = response;
                            });
                });
            }, 1000);
            $scope.showReplyForm = true;
        };


    }]);

app.controller('CookieCtrl', [function () {
        console.log('cookie');
    }]);



