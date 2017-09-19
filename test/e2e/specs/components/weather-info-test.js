
/* eslint-disable */

module.exports = {
    before: (browser) => {
        const url = browser.globals.devServerURL;
        const timeOut = browser.globals.timeOut;
        browser.url(url);
        browser.pause(timeOut);
    },
    'Check if weather info is loaded': (browser) => {
        browser.expect.element('.Weather').to.be.present.and.to.be.visible;

        browser.expect.element('.Weather-location--title').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-location--title').text.to.equal('Location:');

        browser.expect.element('.Weather-location--city').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-location--city').text.to.not.equal('');

        browser.expect.element('.Weather-location--country').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-location--country').text.to.not.equal('');

        browser.expect.element('.Weather-info--title').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-info--title').text.to.equal('Temperature:');

        browser.expect.element('.Weather-info--current').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-info--current').text.to.not.equal('');
        browser.expect.element('.Weather-info--current').text.to.contain('C');

        browser.expect.element('.Weather-info--min').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-info--min').text.to.not.equal('');
        browser.expect.element('.Weather-info--min').text.to.contain('C');
        browser.expect.element('.Weather-icon--min').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-icon--min').to.be.a('svg');
        browser.expect.element('.Weather-icon--min').to.have.attribute('width').equals('24');
        browser.expect.element('.Weather-icon--min').to.have.attribute('height').equals('24');

        browser.expect.element('.Weather-info--max').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-info--max').text.to.not.equal('');
        browser.expect.element('.Weather-info--max').text.to.contain('C');
        browser.expect.element('.Weather-icon--max').to.be.present.and.to.be.visible;
        browser.expect.element('.Weather-icon--max').to.be.a('svg');
        browser.expect.element('.Weather-icon--max').to.have.attribute('width').equals('24');
        browser.expect.element('.Weather-icon--max').to.have.attribute('height').equals('24');
    },
    after: (browser) => {
        browser.end();
    },
};
