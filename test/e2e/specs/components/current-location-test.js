
/* eslint-disable */

module.exports = {
    before: (browser) => {
        const url = browser.globals.devServerURL;
        const timeOut = browser.globals.timeOut;
        browser.url(url);
        browser.pause(timeOut);
    },
    'Check if current location button is loaded': (browser) => {
        browser.expect.element('.Location').to.be.present.and.to.be.visible;

        browser.expect.element('.Location-button').to.be.present.and.to.be.visible;
        browser.expect.element('.Location-button').to.be.a('button');
        browser.expect.element('.Location-button').text.to.equal('Get weather from current location');

        browser.expect.element('.Location-icon').to.be.present.and.to.be.visible;
        browser.expect.element('.Location-icon').to.be.a('svg');
        browser.expect.element('.Location-icon').to.have.attribute('width').equals('30');
        browser.expect.element('.Location-icon').to.have.attribute('height').equals('30');
        
        browser.expect.element('.Location-error').to.not.be.present;
    },
    after: (browser) => {
        browser.end();
    },
};
