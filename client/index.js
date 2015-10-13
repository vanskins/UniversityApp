if(Meteor.isCordova){
	document.addEventListener("backbutton", onBackButtonDown, false);

	function onBackButtonDown(event) {
	  event.preventDefault();
	  event.stopPropagation();
		var route_name = Router.current().route.getName();

		if(route_name == "home" || route_name == "register" || route_name == "dashboard"){
			navigator.app.exitApp();
		}else{
			navigator.app.backHistory();
		}
	}
}
