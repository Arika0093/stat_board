$(function(){
	var q = getquery();
	if(q.length == 8){
		$(".number").text(q[0]);
		$(".linejpn").text(q[1]);
		$(".lineeng").text(q[2]);
		$(".linecolor").css("background-color", "#" + q[3]);
		$(".direcjpn").text(q[4]);
		$(".direceng").text(q[5]);
		$(".time").text(q[6]);
		$(".for").text(q[7]);
	}
});

// URL load
function getquery() {
	var result = [];
	if (1 < window.location.search.length) {
		var query = window.location.search.substring(1);
		var parameters = query.split('&&');
		for (var i = 0; i < parameters.length; i++) {
			var param = decodeURIComponent(parameters[i]);
			result[i] = param;
		}
	}
	return result;
}

function createurl() {
	var ln = ["num", "lnj", "lne", "col", "drj", "dre", "tim", "for"];
	var ref = "index.html?";
	for(var i = 0; i < ln.length; i++){
		ref += $("#" + ln[i]).val();
		if(i != ln.length - 1){
			ref += "&&";
		}
	}
	this.location.href = ref;
}