var FormFiller = function () {

    var _inputIdentifier;
    var _comInterface;

    this.resetForms = function() {
        $('html').find('form').each(function () {
            $(this)[0].reset();
        });
    }

    this.fillForms = function() {
        _inputIdentifier = new InputIdentifier();
        _comInterface = new NativeComInterface();

        $('html').find('input, select, textarea').each(function () {
            var input = $(this);
            var type  = _inputIdentifier.identify(input);
            if (type != InputTypeEnum.UNKNOWN) {
                _comInterface.queryAccountData(type,
                                               "google.com",
                                               "temp@gmail.com",
                                               input);
            }
        });
    }

    return this;
}();
