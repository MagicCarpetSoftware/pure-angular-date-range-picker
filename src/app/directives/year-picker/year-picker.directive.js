export function YearPicker() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      yearChanged: '&?',
      selectedYear: '&',
      minYear: '&',
      maxYear: '&'
    },
    controller: YearPickerController,
    templateUrl: 'app/directives/year-picker/year-picker.html',
    controllerAs: 'yearPicker',
    bindToController: true
  };

  return directive;
}

class YearPickerController {

  constructor($document, $element, $scope, $timeout, moment) {
    'ngInject';

    this.years = this.generateYears();
    this.year = this.defaultYear();
  }

  defaultYear() {
    let year = this.selectedYear() || moment().year();
    for(var i = 0; i <= this.years.length; i++) {
      if(this.years[i].value == year) {
        return this.years[i];
      }
    }
    return this.years[0];
  }

  generateYears() {
    let years = []
    for(var i = this.endYear(); i >= this.startYear(); i--) {
      years.push({ value: i, label: i })
    }
    return years;
  }

  startYear() {
    if(this.minYear()) { return this.minYear() }
    return moment().year() - 80
  }

  endYear() {
    if(this.maxYear()) { return this.maxYear() }
    return moment().year() + 5
  }

  onYearChange() {
    this.yearChanged({ year: this.year.value })
  }
}
