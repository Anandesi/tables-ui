var { JSDOM } = require('jsdom');
var jsdom = new JSDOM('<!doctype html><html><body></body></html>');
var { window } = jsdom;

global.window = window;
global.document = window.document;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});

global.navigator = { userAgent: 'all' };
global.__isDevelopment = true
global.__isHosted = process.env["CLOUDBOOST_HOSTED"] || false
global.__isBrowser = false;
if(__isHosted){
	global.USER_SERVICE_URL = "https://service.cloudboost.io"
	global.SERVER_DOMAIN = "cloudboost.io"
	global.SERVER_URL='https://api.cloudboost.io'
	global.DASHBOARD_URL='https://dashboard.cloudboost.io'
	global.ACCOUNTS_URL='https://accounts.cloudboost.io'
} else {
	global.USER_SERVICE_URL = "http://localhost:3000"
	global.SERVER_DOMAIN = "localhost:4730"
	global.SERVER_URL="http://localhost:4730"
	global.DASHBOARD_URL="http://localhost:1440"
	global.ACCOUNTS_URL="http://localhost:1447"
}
