import WistiaUploadDirective from './wistia.upload.directive';

angular.module('wistia-upload', [])
  .directive('wistiaUpload', WistiaUploadDirective);

export default 'wistia-upload';