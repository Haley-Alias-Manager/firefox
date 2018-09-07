var NativeComInterface = function () {


    var _port = browser.runtime.connect({name:"background-content-port"});
    var _query_id = 0;
    var _pending_inputs = {};

    _port.onMessage.addListener(function(response) {
        console.log("Received: " + response);
        input = _pending_inputs[response.query];
        input.val(response.field_value);
        delete _pending_inputs[response.query];
    });

    this.queryAccountData = function(fieldType, url, email, input) {
        var query = {
            FIELD: fieldType,
            URL: url,
            EMAIL: email,
            QUERY: _query_id
        };

        _pending_inputs[_query_id] = input;
        _query_id++;

        console.log("MESSAGE:");
        console.log(query);
        _port.postMessage(query);
    }

    return this;
};
