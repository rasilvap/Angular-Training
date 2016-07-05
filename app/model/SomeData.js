System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SomeData;
    return {
        setters:[],
        execute: function() {
            SomeData = (function () {
                function SomeData(prices) {
                    this.prices = prices;
                    this.price = prices;
                }
                return SomeData;
            }());
            exports_1("SomeData", SomeData);
        }
    }
});
//# sourceMappingURL=SomeData.js.map