(function () {
    'use strict';

    var controllerId = 'sessions';

    angular.module('app').controller(controllerId,
        ['common', 'datacontext', sessions]);

    function sessions(common, datacontext) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.sessions = [];
        vm.title = 'Sessions';

        activate();

        function activate() {
            common.activateController(getSessions(), controllerId)
                .then(function () { log('Activated Sessions View'); });
        }

        function getSessions() {
            return datacontext.getSessionPartials().then(function (data) {
                return vm.sessions = data;
            });
        }
    }
})();
