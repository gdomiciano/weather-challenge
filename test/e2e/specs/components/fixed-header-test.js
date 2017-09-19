
/* eslint-disable */

module.exports = {
    before: (browser) => {
        const url = browser.globals.devServerURL;
        const timeOut = browser.globals.timeOut;
        browser.url(url);
        browser.pause(timeOut);
    },
    'Check if header is loaded': (browser) => {
        browser.expect.element('.Header').to.be.present.and.to.be.visible;
        browser.expect.element('.Header').to.be.a('header');
        browser.expect.element('.Header-brand').to.be.present.and.to.be.visible;
        browser.expect.element('.Header-brand').to.be.a('h1');
        browser.expect.element('.Header-brand').text.to.equal('Weather');
        browser.expect.element('.Header-icon').to.be.present.and.to.be.visible;
        browser.expect.element('.Header-icon').to.be.a('svg');
        browser.expect.element('.Header-icon').to.have.attribute('width').equals('50');
        browser.expect.element('.Header-icon').to.have.attribute('height').equals('50');
    },
    after: (browser) => {
        browser.end();
    },
};
