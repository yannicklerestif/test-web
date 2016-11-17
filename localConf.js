// conf.js
// Doc: http://angular.github.io/protractor/#/tutorial
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var reporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter');
var BrowserLogReporter = require('./designtool/reporters/browserLogReporter');

exports.config = {
    framework: 'jasmine2',
    baseUrl: 'http://localhost:52331/DesignTool/',
    chromeDriver: '../../node_modules/chromedriver/lib/chromedriver/chromedriver',
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--no-sandbox']
        }
    },
    suites: {
        //create: ['designtool/tests/createProject/**/*.js'],
        //search: ['designtool/tests/searchProject/**/*.js'],
        //deploy: ['designtool/tests/deployment/yannick_test.js'],
        deploy: ['designtool/tests/deployment/couponReschedule_spec.js']
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        print: function() {}
    },
    allScriptsTimeout: 120000,
    getPageTimeout : 120000,

    params: {
        search:{
            user: 'l.turlure',
            partnerName: 'criteocentralwebdesignfr',
            partnerId: '6437'
        },
        login: {
            user: 'y.lerestif',
            pass: 'Annick1_'
        }
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: 'testResults/'
        }));

        jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testResults/',
                filePrefix: 'xmloutput'
    }));

        by.addLocator('exactText', function (text, element) {
            var result = [];
            if (element && element.textContent.trim() === text)
                result.push(element);
            return result;
        });

        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

        //Add browser log reporter
        jasmine.getEnv().addReporter(new BrowserLogReporter({reportFileName: './testResults/consoleErrorReport.txt'}));

        // set bigger window
        browser
            .manage()
            .window()
            .setSize(2400, 1800);

        // load Designtool
        browser
            .get(browser.baseUrl + 'index.html');
        // set login
        element(by.id('LoginCriteo_LoginComp_UserName'))
            .sendKeys(browser.params.login.user);
        // set password
        element(by.id('LoginCriteo_LoginComp_Password'))
            .sendKeys(browser.params.login.pass);
        // click on validate
        element(by.id('LoginCriteo_LoginComp_LoginButton'))
            .click();

        // wait for index page
        return browser.driver.wait(function () {
            return browser
                .driver
                .getCurrentUrl()
                .then(function (url) {
                    return /index/.test(url);
                });
        }, 10000);
    }
}