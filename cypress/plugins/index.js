/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const path = require("path");
const gmail = require("gmail-tester");

const POLL_INTERVAL = 5;
const MAX_POLL_INTERVAL = 20;

function getCredentials(email) {
    return path.resolve('\cypress\\plugins', 'credentialsgmail.json');
}

function getToken(email) {
    return path.resolve('\cypress\\plugins', 'tokengmail.json');
}

module.exports = (on) => {
    on('before:browser:launch', (browser = {}, args) => {
        if (browser.name === 'chrome') {
            // ^ make sure this is your browser name, you may 
            // be using 'canary' or 'chromium' for example, so change it to match!
            args.push('--proxy-bypass-list=<-loopback>')
            return args
        }
    })
}

module.exports = (on, config) => {

    on('task', {
        'gmail:get-messages': async args => {
            const messages = await gmail.get_messages(
                await getCredentials(args.to),
                await getToken(args.to),
                args.options
            );
            return messages;
        }
    });
}