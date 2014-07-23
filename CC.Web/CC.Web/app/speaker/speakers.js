﻿(function () {
    'use strict';

    var controllerId = 'speakers';

    angular.module('app').controller(controllerId,
        ['common', 'datacontext', speakers]);

    function speakers(common, datacontext) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.refresh = refresh;
        vm.title = 'Speakers';
        vm.speakers = [];

        activate();

        function activate() {
            common.activateController([getSpeakers()], controllerId)
                .then(function () { log('Activated Speakers View'); });
        }

        function getSpeakers(forceRefresh) {
            return datacontext.getSpeakerPartials(forceRefresh).then(function (data) {
                return vm.speakers = data;
            });
        }

        function refresh() { getSpeakers(true); }
    }
})();
