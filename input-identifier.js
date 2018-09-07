var InputIdentifier = function() {

    this.identify = function(input) {
        if (input.is(":visible") && input.is(":enabled")) {
            if (input.is('[type=email]')) {
                return InputTypeEnum.EMAIL;
            }
            if (input.is('[type=password]')) {
                return InputTypeEnum.PASSWORD;
            }
        }
        return InputTypeEnum.UNKNOWN;
    }

    return this;
};
