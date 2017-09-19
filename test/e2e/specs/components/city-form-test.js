
/* eslint-disable */

module.exports = {
    before: (browser) => {
        const url = browser.globals.devServerURL;
        const timeOut = browser.globals.timeOut;
        browser.url(url);
        browser.pause(timeOut);
    },
    'Check if current location button is loaded': (browser) => {
        browser.expect.element('.City').to.be.present.and.to.be.visible;
        browser.expect.element('.City-form').to.be.present.and.to.be.visible;
        browser.expect.element('.City-form').to.be.a('form');
        browser.expect.element('.City-form--label').to.be.present.and.to.be.visible;
        browser.expect.element('.City-form--label').to.be.a('label');
        browser.expect.element('.City-form--label').text.to.equal('Get weather from specific city:');
        browser.expect.element('.City-form--input').to.be.present.and.to.be.visible;
        browser.expect.element('.City-form--input').to.be.an('input');
        browser.expect.element('.City-error').to.not.be.present;
    },
    // 'get user location': (browser) => {
    //     const timeOut = browser.globals.timeOut;

    //     browser.expect.element('.Location-button').to.be.present.and.to.be.visible;
    //     browser.click('.Location-button');
    //     browser.pause(timeOut);
    //     browser.acceptAlert();
    //     browser.expect.element('.Weather-location--country').text.to.equal('BR');
    // },
    after: (browser) => {
        browser.end();
    },
};
