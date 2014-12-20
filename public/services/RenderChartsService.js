app.service('renderCharts',[function(){
        this.renderTempChart = function (patient, dates, temperature) {
        $('#container').highcharts({
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
}]);
