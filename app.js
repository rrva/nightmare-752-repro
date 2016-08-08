var Nightmare = require('nightmare');
var vo = require('vo');
var fs = require('fs');

function runApp() {
    vo(run)(function (err, result) {
        console.log(err);
        if (err) throw err;
    });
}

runApp();

function *run() {
    var nightmare = Nightmare({show: false, images: false});

    var sections = yield nightmare
        .viewport(1280, 1024)
        .goto('http://www.nightmarejs.org/')
        .wait(3000)
        .evaluate(function () {
            sections = document.querySelectorAll("div.navigation a[href^='https://github.com/segmentio/nightmare#api']");
            var a = [];
            [].forEach.call(sections, function (section) {
                a.push({
                    'href': section.href,
                    'selector': 'div.navigation a[href="' + section.getAttribute('href') + '"]'
                });
            });
            return a;
        });

    console.log("sections", sections);

    yield nightmare.end();
}
