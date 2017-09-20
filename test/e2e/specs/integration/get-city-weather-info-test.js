
/* eslint-disable */

module.exports = {
    before: (browser) => {
        const url = browser.globals.devServerURL;
        const timeOut = browser.globals.timeOut;
        browser.url(url);
        browser.pause(timeOut);
    },
    'Get weather info from Diadema, BR': (browser) => {
        const timeOut = browser.globals.timeOut;
        const asyncTimeOut = browser.globals.asyncTimeOut;
        browser.expect.element('.City-form--input').to.be.present.and.to.be.visible;
        browser.setValue('.City-form--input', 'diadema');
        browser.waitForElementVisible('.pac-container', 1000);
        browser.click('.pac-container  .pac-item:first-child');

        browser.pause(timeOut);
        browser.timeoutsAsyncScript(asyncTimeOut);

        browser.expect.element('.Weather-location--city').text.to.contain('Diadema');
        browser.expect.element('.Weather-location--country').text.to.equal('BR');

        browser.expect.element('.City-error').to.not.be.present;
    },
    'Get weather info from Berlin, DE': (browser) => {
        const timeOut = browser.globals.timeOut;
        const asyncTimeOut = browser.globals.asyncTimeOut;
        browser.expect.element('.City-form--input').to.be.present.and.to.be.visible;
        browser.setValue('.City-form--input', 'berlin');
        browser.waitForElementVisible('.pac-container', 1000);
        browser.pause(timeOut);
        browser.click('.pac-container  .pac-item:first-child');
        browser.pause(timeOut);
        browser.timeoutsAsyncScript(asyncTimeOut);

        browser.expect.element('.Weather-location--city').text.to.contain('Berlin');
        browser.expect.element('.Weather-location--country').text.to.equal('DE');

        browser.expect.element('.City-error').to.not.be.present;
    },
    'Not get weather info from Arctic Ocean': (browser) => {
        const timeOut = browser.globals.timeOut;
        const asyncTimeOut = browser.globals.asyncTimeOut;
        browser.expect.element('.City-form--input').to.be.present.and.to.be.visible;
        browser.setValue('.City-form--input', 'Arctic Ocean');
        browser.pause(timeOut);
        browser.waitForElementVisible('.pac-container', 1000);
        browser.click('.pac-container  .pac-item:first-child');
        browser.pause(timeOut);

        browser.expect.element('.Weather-location--city').text.to.contain('Berlin');
        browser.expect.element('.Weather-location--country').text.to.equal('DE');

        browser.waitForElementVisible('.City-error', 1000);
        browser.expect.element('.Error-message').text.to.equals('Sorry, there is no weather information of Arctic Ocean. Try another city.');
        browser.waitForElementNotPresent('.City-error', 5100);

    },
    'Not get weather info from fjsdhfnmsdfn': (browser) => {
        const timeOut = browser.globals.timeOut;
        const asyncTimeOut = browser.globals.asyncTimeOut;
        browser.expect.element('.City-form--input').to.be.present.and.to.be.visible;
        browser.setValue('.City-form--input', ['fjsdhfnmsdfn', browser.Keys.ENTER]);
        browser.pause(timeOut);
        browser.timeoutsAsyncScript(asyncTimeOut);

        browser.expect.element('.Weather-location--city').text.to.contain('Berlin');
        browser.expect.element('.Weather-location--country').text.to.equal('DE');

        browser.expect.element('.City-error').to.be.present.and.to.be.visible;
        browser.expect.element('.Error-message').text.to.equals('Sorry, there is no weather information of fjsdhfnmsdfn. Try another city.');
        browser.waitForElementNotPresent('.City-error', 5100);

    },
    after: (browser) => {
        browser.end();
    },
};
