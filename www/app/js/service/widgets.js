app.factory('widgetSrv', function() {
  var widgetSrv = {};
  //CENTRO MAREE
  /*file_get_html('http://www.comune.venezia.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/1748');*/

  // SALUTE, marea attuale
  /* $feed_contents = file_get_contents('http://93.62.201.235/maree/ESPORTAZIONI/DATI/Punta_Salute.html'); */

  widgetSrv.colorForTide = function(tide_level){
  	if (tide_level >= 1.4) {
  			return "Red";
  		} else if (tide_level >= 1.1) {
  			return "Orange";
  		} else if (tide_level >= 0.8) {
  			return "Yellow";
  		} else if (tide_level >= -0.5) {
  			return "Green";
  		} else if (tide_level >= -0.9) {
  			return "White";
  		} else {
  			return "Blue";
  	}
	}
   return widgetSrv;
});