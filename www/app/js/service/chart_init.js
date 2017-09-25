app.chart_init = function(ctl,$scope,datasets,labels,title){
	console.log("chart init");

  $scope.chartData = {
    labels: labels, //["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: title,
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#000",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: datasets,//[65, 59, 80, 81, 56, 55, 40],
        spanGaps: true,
      }
    ]
  };

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('LineController', 'onChartClick', event);
  }

}

