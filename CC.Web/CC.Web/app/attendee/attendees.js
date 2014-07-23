(function () {
    'use strict';

    var controllerId = 'attendees';
    
    angular.module('app').controller(controllerId,
        ['common', 'datacontext', attendees]);

    function attendees(common, datacontext) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.refresh = refresh;
        vm.title = 'Attendees';
        vm.attendees = [];

        activate();

        function activate() {
            common.activateController([getAttendees()], controllerId)
                .then(function () { log('Activated Attendees View'); });
        }

        function getAttendees(forceRefresh) {
            return datacontext.getAttendees(forceRefresh).then(
                function (data) {
                    return vm.attendees = data;
            });
        }

        function refresh() { getAttendees(true); }
    }
})();
