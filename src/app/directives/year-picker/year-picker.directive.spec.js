describe('directive year-picker', function() {
  let element, moment, $compile, $scope, $rootScope;

  beforeEach(angular.mock.module('obDateRangePicker'));

  beforeEach(inject((_$compile_, _$rootScope_, _moment_ ) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    moment = _moment_;
    $scope = $rootScope.$new();
    $scope.yearChanged = () => {
      return 1
    }
  }));

  function prepare(options) {
    $scope.picker = options;
    element = angular.element(`
      <year-picker
        year-changed="yearChanged(year)"
        selected-year="picker.selectedYear"
        min-year="picker.minYear"
        max-year="picker.maxYear"
      </year-picker>
    `);

    $compile(element)($scope);
    $rootScope.$digest();
  }

  describe('outputs', () => {
    var select, options
    beforeEach(() => {
      spyOn($scope, 'yearChanged')

      prepare({
        minYear: 2000,
        selectedYear: $scope.selectedYear,
        maxYear: 2020
      })
      select = element.find('select');
      options = element.find('option');
    });

    it('has correct element count', () => {
      expect(select.length).toEqual(1);
      expect(options.length).toEqual(21);
    });

    it('selects the current year', () => {
      expect(select.val()).toBe('number:' + moment().year().toString());
    });

    it('first option is latest year', () => {
      expect(options[0].innerHTML).toEqual('2020');
    });

    it('last option is earliest year', () => {
      expect(options[options.length-1].innerHTML).toEqual('2000');
    });

    it('callback', () => {
      select.val('number:2017');
      select.triggerHandler('change');
      expect($scope.yearChanged).toHaveBeenCalled();
    });
  });

  describe('outputs', () => {
    var select
    beforeEach(() => {
      spyOn($scope, 'yearChanged')
      prepare({
        minYear: 2000,
        selectedYear: 2005,
        maxYear: 2020
      })
      select = element.find('select');
    });

    it('defaults to provided year', () => {
      expect(select.val()).toEqual('number:2005');
    });
  });
});
