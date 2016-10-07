export function MonthPicker() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      selectedMonth: '&?',
      monthChanged: '&?'
    },
    controller: MonthPickerController,
    templateUrl: 'app/directives/month-picker/month-picker.html',
    controllerAs: 'monthPicker',
    bindToController: true
  };

  return directive;
}

class MonthPickerController {
  constructor($document, $element, $scope, $timeout, moment) {
    'ngInject';

    debugger
    this.months = this.generateMonths()
    this.month = this.defaultMonth();
  }

  defaultMonth() {
    let month = this.selectedMonth() || moment().month()
    for(var i = 0; i <= this.months.length; i++) {
      if(this.months[i].value == month) {
        return this.months[i];
      }
    }
  }

  generateMonths() {
    let months = []
    for(var i = 0; i <= 11; i++) {
      months.push({
        value: i,
        label: moment().month(i).format('MMMM')
      })
    }
    return months
  }

  onMonthChange() {
    this.monthChanged({ newMonth: this.month.value })
  }
}
