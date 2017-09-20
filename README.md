# weather-challenge

> Code challenge for Klöeckner.i

## Introduction

This project is a code challenge that has been developed with [Vue.js](https://vuejs.org/) and [Nuxt.js](https://nuxtjs.org/) to cover the SSR, it is also preconfigured to work as a PWA.
The application is integrated with [Open Weather Map API](http://openweathermap.org/API#weather), [Google Places API](https://developers.google.com/places/javascript/) and [HTML5 Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation).

**It basically:**
* On the load show weather information based on random position
* Fetches city weather information previously typed/selected on Google Autocomplete field
* Fetches the weather information based on user's location after given permission. (support: Chrome and Safari)

![Image](https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/assets/screenshots/load.png) ![Image](https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/assets/screenshots/search.png) ![Image](https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/assets/screenshots/error.png) ![Image](https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/assets/screenshots/location.png)

## Install
- Clone the project: `git clone https://github.com/gdomiciano/weather-challenge.git`
- Go to project's folder: `cd weather-challenge`
- Install dependencies: `npm i` or `yarn`

## Usage
To see this project running locally:
- execute `npm run dev` or `yarn dev`
- access [localhost:3000](http://localhost:3000)

## Required Features

-   [x] Display the weather at random geographic coordinates
-   [x] A form with city and country that fetches and displays the weather in this city
-   [ ] **optional**: cache the fetched weather data
-   [x] Gracefully handle the case where the city could not be found (display the information to the user)
-   [x] Have fun!

## Tests
This project contains End to End tests that are used to test components on initial loading and also for integration tests. Tests were developed using [Nightwatch.js](http://nightwatchjs.org/) and [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) running into a [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) without any Java/Selenium dependency, which means it is already preconfigured to run into CI server.

### How tests were developed

   I have created two different type of tests: components and integration; Components are responsible for guarantee if component is rendering correctly and has all needed information, while Integration tests are used to test a whole flow, and scenarios, e.g. look for existent and inexistent city, this kind of test is also important to be implemented on CI server.
   The test folder structure looks like:

   ```
   test
   |- e2e
       |- reports
       |- screenshots
       |- specs
       |    |- components
       |    |   |- component-test.js
       |    |- integration
       |        |- complete-flow-test.js
       |- nightwatch.conf.js
   ```

### Execute tests**

As mentioned before, this tests were based on Chromedriver and Headless Chrome, which means that now they are dependencies, fortunately the Chromedriver can be installed via NPM and it is already into the project, although chrome has to be installed according to your Operating System:
   - **OSX:** install [Chrome Canary](https://www.google.com/chrome/browser/canary.html?platform=mac)
   - **Linux:** install the latest version of [Chrome](https://www.google.com/chrome/browser/desktop/index.html) or [Chromium](https://www.chromium.org/getting-involved/download-chromium)

Once you have it installed, you should open two different tabs on your terminal:
   - The first one will run Chromedriver server via the command: `npm run chromedriver` or `yarn chromedriver`
   - The second one will run the tests, you can choose among:
       - Run components and integration tests: `npm run test` or `yarn test`
       - Run only components tests: `npm run test:components` or `yarn test:components`
       - Run only integration tests: `npm run test:integration` or `yarn test:integration`

## Todo
During the development I have created [Github Projects](https://github.com/gdomiciano/weather-challenge/projects/1) to Kanban Board to organize my development process:
    - **Backlog**: indicates features/improvements that will be developed after the MVP
    - **ToDo**: showd all features have to be delivered for the MVP
    - **In Progress**: tasks that are being developed
    - **Tests**: tasks that are totally developed, however must contain tests
    - **Done**: expose all tasks that are developed and tested.
    - **Published**: This column is enabled after the first deploy, it contains all tasks that are in production environment

![Image](https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/assets/screenshots/github-projects.png)


