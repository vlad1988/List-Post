app.service('renderCharts', [function () {
//Отрисовка температуры
        this.renderTempChart = function (patient, dates, temperature) {
            $('#container-temperature').highcharts({
                title: {
                    text: 'Температурный лист',
                    x: -20 //center
                },
                subtitle: {
                    text: patient.name,
                    x: -20
                },
                xAxis: {
                    categories: dates
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                        name: 'T',
                        data: temperature
                    }]
            }); //highcharts
        };//renderTempChart

        this.renderPressureChart = function (patient, dates, systolic, diastolic) {

            $('#container-pressure').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Давление'
                },
                subtitle: {
                    text: patient.name
                },
                xAxis: {
                    categories: dates
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Давление (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                        name: 'Систолическое давление',
                        data: systolic

                    }, {
                        name: 'Диастолическое давление',
                        data: diastolic

                    }]
            });//highcharts
        };//renderPressureChart

        this.renderPulseChart = function (patient, dates, pulse) {
            $('#container-pulse').highcharts({
                title: {
                    text: 'Пульс',
                    x: -20 //center
                },
                subtitle: {
                    text: patient.name,
                    x: -20
                },
                xAxis: {
                    categories: dates
                },
                yAxis: {
                    title: {
                        text: 'Уд./мин.'
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                },
                tooltip: {
                    valueSuffix: 'Уд.'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                        name: 'P',
                        data: pulse
                    }]
            }); //highcharts
        };//renderTempChart

    }]);
