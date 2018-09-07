var nativePort = browser.runtime.connectNative("haley_alias_manager");
var contentPort;

nativePort.onMessage.addListener(function(response) {
    console.log(response);
    contentPort.postMessage(response);
});

function connected(port) {
    contentPort = port;
    contentPort.onMessage.addListener(function(message) {
        console.log(message);
        nativePort.postMessage(message);
    });
}
browser.runtime.onConnect.addListener(connected);


let gettingAllCommands = browser.commands.getAll();
gettingAllCommands.then((commands) => {
    for (let command of commands) {
        // Note that this logs to the Add-on Debugger's console: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Debugging
        // not the regular Web console.
        console.log(command);
    }
});


// console.log("LOADED");
browser.commands.onCommand.addListener(function(command) {
    if (command == "fill-forms") {
        browser.tabs.executeScript({file: "main.js"});
        console.log("toggling the feature!");
    }
});
