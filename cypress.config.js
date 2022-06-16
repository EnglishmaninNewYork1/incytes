const { defineConfig } = require("cypress");
const path = require("path");
const gmail = require("gmail-tester");

function getCredentials(email) {
    return path.resolve('\cypress\\plugins', 'credentialsgmail.json');
}

function getToken(email) {
    return path.resolve('\cypress\\plugins', 'tokengmail.json');
}


module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                'gmail:get-messages': async args => {
                    const messages = await gmail.get_messages(
                        await getCredentials(args.to),
                        await getToken(args.to),
                        args.options
                    )
                    return messages
                }
            })
        }

    },
    "chromeWebSecurity": false,
    projectId: "h7dbto",

    env: {
        CYPRESS_RECORD_KEY: "7bb5cd43-7ae4-4c31-bdb2-91b0da5c2b9c",
    }
})