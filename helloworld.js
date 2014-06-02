function pageCheckOffline() {
    console.log(page.evaluate(function() {
        //return "navigator onLine status: " + window.navigator.onLine;
        return uaIsOffline();
    }));
}

var onPageLoad = function() {
    setTimeout(function() {

        page.evaluate(function() {
                console.log(window.navigator.userAgent);
        });

        page.render('example.png');
        phantom.exit();
    }, 30000);
};

var page = require('webpage').create();
page.viewportSize = { width:1024, height:768 };

page.onConsoleMessage = function(msg){
    console.log(msg);
};

page.open('http://google.com', onPageLoad);
