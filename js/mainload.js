let req = new XMLHttpRequest();

app.setAttribute("uk-scrollspy", "cls: uk-animation-fade; target: > div; delay: 1000; repeat: true")

req.open("GET", "/config.json", false);
req.send();
let mainJson = JSON.parse(req.responseText);
if (mainJson.debug == "true") {let debug = true;}
else {mainJson.debug == "false";};

log(req.responseText);