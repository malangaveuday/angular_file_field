/**
 * Created by uday on 23/8/16.
 */
(function () {

    angular.module('angular.fileField', [])
        .directive('grabFileName', grabFileName);

    function grabFileName() {
        return {
            restrict: 'AE',
            scope: {

            },
            template: '<input type="file" style="position: absolute;' +
            'top: 0;left: 0;margin: 0;padding: 0;font-size: 20px;' +
            'cursor: pointer;opacity: 0;">',
            replace: true,
            link: function (scope, ele, attrs, ctrl) {
                ele.bind("change", function (v) {
                    scope.$parent.fileName = (ele[0].files[0].name).split("from")[0];
                    scope.$apply();
                });
            }
        }
    }
})();