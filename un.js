var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";
var giantrule = ["ppq","mesu","ocsp"];
function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for(var i = 0; i < giantrule.length; i++){
    var copyright = giantrule[i];
    if(shExpMatch(host, "*" + copyright + "*")){
      return PROXY;
    }
  }
  return DIRECT;
}