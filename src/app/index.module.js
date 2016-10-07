/* global moment:false */

import { DateRangePicker } from './directives/date-range-picker/date-range-picker.directive';
import { Calendar } from './directives/calendar/calendar.directive';
import { ObDateRangePicker } from './directives/ob-date-range-picker/ob-date-range-picker.directive.js';
import { ObDayPicker } from './directives/ob-day-picker/ob-day-picker.directive';
import { YearPicker } from './directives/year-picker/year-picker.directive';
import { MonthPicker } from './directives/month-picker/month-picker.directive';

angular.module('obDateRangePicker', [])
  .constant('moment', moment)
  .directive('dateRangePicker', DateRangePicker)
  .directive('obDaterangepicker', ObDateRangePicker)
  .directive('calendar', Calendar)
  .directive('yearPicker', YearPicker)
  .directive('monthPicker', MonthPicker)
  .directive('obDaypicker', ObDayPicker);
