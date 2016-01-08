/**
 * @todo Complete the test
 * This example is not perfect.
 * The `link` function is not tested.
 * (malarkey usage, addClass, $watch, $destroy)
 */
describe('directive', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('wistia-upload'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element('<wistia-upload></wistia-upload>');
    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;

  }));

  it('should be compiled', () => {
    expect(element.html()).not.to.be.empty;
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).to.equal(jasmine.any(Object));
  });

  // it('should log a info', inject($log => {
  //   expect($log.info.logs).toEqual(jasmine.stringMatching('Activated Contributors View'));
  // }));

  // it('should have isolate scope object with instanciate members', () => {
  //   expect(vm).toEqual(jasmine.any(Object));

  //   expect(vm.creationDate).toEqual(jasmine.any(Number));
  //   expect(vm.creationDate).toEqual(timeInMs);

  //   expect(vm.relativeDate).toEqual(jasmine.any(String));
  //   expect(vm.relativeDate).toEqual('a day ago');
  // });
});
