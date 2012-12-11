var unique = require('unique-selector');

describe('unique-selector', function() {
    describe('with undefined', function() {
        it('should return a TypeError', function() {
            try {
                unique();
                assert(false);
            } catch(e) {
                assert(e instanceof TypeError);
            }
        });
    });

    describe('with Object', function() {
        it('should return a TypeError', function() {
            try {
                unique({});
                assert(false);
            } catch(e) {
                assert(e instanceof TypeError);
            }
        });
    });

    var selectors = {
        'HTML > BODY': 'html > body',
        'HTML > BODY > DIV#fixture': '#fixture',
        'HTML > BODY > DIV#fixture H3 SMALL': '#fixture > h3 > small'
    };

    for (selector in selectors) {
        describe('with ' + selector, function() {
            var expected    = selectors[selector];
            var actual      = unique(document.querySelector(selector));

            it('should return `' + expected + '`', function() {
                assert(expected === actual, actual);
            });
        });
    }
});