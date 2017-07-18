import template from './month-picker.html';

export function MonthPicker() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      selectedMonth: '=',
      monthChanged: '&?'
    },
    controller: MonthPickerController,
    template,
    controllerAs: 'monthPicker',
    bindToController: true
  };

  return directive;
}

class MonthPickerController {
  constructor(moment) {
    'ngInject';

    this.Moment = moment;
    this.months = this.generateMonths()
    this.month = this.defaultMonth();
  }

  defaultMonth() {
    let month = this.selectedMonth || this.Moment().month()
    for(var i = 0; i <= this.months.length; i++) {
      if(this.months[i].value == month) {
        return this.months[i].value;
      }
    }
  }

  generateMonths() {
    let months = []
    for(var i = 0; i <= 11; i++) {
      months.push({
        value: i,
        label: this.Moment().month(i).format('MMMM')
      })
    }
    return months
  }

  onMonthChange() {
    this.monthChanged({ newMonth: this.month.value })
  }
}
