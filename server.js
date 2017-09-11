var MiniProxy = require("mini-proxy");

var myProxy = new MiniProxy({
	"port": 8080,
	"onBeforeRequest": function(requestOptions) {
		console.log("proxy request :" + requestOptions.host +
			    (requestOptions.path || ''));
	}
});

myProxy.start();
console.log("proxy start at 8080");
