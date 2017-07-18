(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("moment")) : factory(root["moment"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _dateRangePicker = __webpack_require__(2);

var _calendar = __webpack_require__(5);

var _obDateRangePicker = __webpack_require__(8);

var _obDayPicker = __webpack_require__(11);

var _yearPicker = __webpack_require__(14);

var _monthPicker = __webpack_require__(16);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('obDateRangePicker', []).constant('moment', _moment2.default).directive('dateRangePicker', _dateRangePicker.DateRangePicker).directive('obDaterangepicker', _obDateRangePicker.ObDateRangePicker).directive('calendar', _calendar.Calendar).directive('yearPicker', _yearPicker.YearPicker).directive('monthPicker', _monthPicker.MonthPicker).directive('obDaypicker', _obDayPicker.ObDayPicker).name;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.DateRangePicker = DateRangePicker;

__webpack_require__(3);

var _dateRangePicker = __webpack_require__(4);

var _dateRangePicker2 = _interopRequireDefault(_dateRangePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DateRangePicker() {
  'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      weekStart: '&',
      range: '=?',
      minDay: '&',
      maxDay: '&',
      api: '&',
      monthFormat: '&',
      inputFormat: '&',
      weekDaysName: '&',
      linkedCalendars: '&',
      interceptors: '&'
    },
    template: _dateRangePicker2.default,
    controller: DateRangePickerController,
    controllerAs: 'picker',
    bindToController: true
  };

  return directive;
}

var DateRangePickerController = function () {
  DateRangePickerController.$inject = ['moment', '$scope'];

  function DateRangePickerController(moment, $scope) {
    'ngInject';

    _classCallCheck(this, DateRangePickerController);

    this.Moment = moment;
    this.Scope = $scope;

    this.range = this.range || {};
    this.setConfigurations();
    this.startCalendarApi = {};
    this.endCalendarApi = {};
    this.setInterceptors();
    this.setListeners();
    this.setApi();
    this.watchRangeChange();
    this.interceptors = this.interceptors() || {};
  }

  _createClass(DateRangePickerController, [{
    key: 'setApi',
    value: function setApi() {
      var _this = this;

      var api = this.api() || {};
      Object.assign(api, {
        setCalendarPosition: function setCalendarPosition(start, end) {
          _this.startCalendar = start;
          if (_this.linkedCalendars() || start.isSame(end, 'M')) {
            _this.endCalendar = _this.startCalendar.clone().add(1, 'M');
          } else {
            _this.endCalendar = end;
          }
        },
        render: function render() {
          _this.startCalendarApi.render();
          _this.endCalendarApi.render();
        }
      });
    }
  }, {
    key: 'setListeners',
    value: function setListeners() {
      var _this2 = this;

      this.Scope.$watchGroup([function () {
        return _this2.range.start;
      }, function () {
        return _this2.range.end;
      }], function (newRange) {
        if (newRange[0] && newRange[1]) {
          _this2.setConfigurations();
        }
      });
    }
  }, {
    key: 'setConfigurations',
    value: function setConfigurations() {
      var start = void 0,
          end = void 0;
      if (this.isMomentRange(this.range)) {
        start = this.range.start;
        end = this.range.end;
      } else {
        start = this.Moment(this.range.start, this.getFormat());
        end = this.Moment(this.range.end, this.getFormat());
      }

      end = end.diff(start) >= 0 ? end : start.clone();
      this.rangeStart = start;
      this.rangeEnd = end;
      this.daysSelected = 2;
      this.updateRange();
    }
  }, {
    key: 'updateRange',
    value: function updateRange() {
      if (this.isMomentRange(this.range)) {
        this.range.start = this.rangeStart;
        this.range.end = this.rangeEnd;
      } else {
        this.range.start = this.rangeStart ? this.rangeStart.format(this.getFormat()) : null;
        this.range.end = this.rangeEnd ? this.rangeEnd.format(this.getFormat()) : null;
      }
    }
  }, {
    key: 'setInterceptors',
    value: function setInterceptors() {
      var _this3 = this;

      this.startCalendarInterceptors = {
        moveToPrevClicked: function moveToPrevClicked() {
          _this3.moveCalenders(-1, 'start');
        },
        moveToNextClicked: function moveToNextClicked() {
          _this3.moveCalenders(1, 'start');
        },
        daySelected: function daySelected(day) {
          _this3.dayInStartSelected(day);
          _this3.daySelected(day);
          if (_this3.daysSelected == 2) {
            _this3.interceptors.rangeSelectedByClick && _this3.interceptors.rangeSelectedByClick();
          }
        },
        inputSelected: function inputSelected(day) {
          _this3.inputInStartSelected(day);
        }
      };

      this.endCalendarInterceptors = {
        moveToPrevClicked: function moveToPrevClicked() {
          _this3.moveCalenders(-1, 'end');
        },
        moveToNextClicked: function moveToNextClicked() {
          _this3.moveCalenders(1, 'end');
        },
        daySelected: function daySelected(day) {
          _this3.dayInEndSelected(day);
          _this3.daySelected(day);
          if (_this3.daysSelected == 2) {
            _this3.interceptors.rangeSelectedByClick && _this3.interceptors.rangeSelectedByClick();
          }
        },
        inputSelected: function inputSelected(day) {
          _this3.inputInEndSelected(day);
        }
      };
    }
  }, {
    key: 'inputInStartSelected',
    value: function inputInStartSelected(day) {
      switch (this.daysSelected) {
        case 0:
        case 1:
          this.rangeStart = day;
          this.daysSelected = 1;
          break;
        case 2:
          if (day.diff(this.rangeStart, 'days') < 0) {
            this.rangeStart = day;
          } else if (day.isBetween(this.rangeStart, this.rangeEnd)) {
            this.rangeStart = day;
          } else if (day.diff(this.rangeEnd, 'days') >= 0) {
            this.rangeStart = day;
            this.rangeEnd = day;
          }
          this.daysSelected = 2;
          this.updateRange();
          break;
      }
    }
  }, {
    key: 'inputInEndSelected',
    value: function inputInEndSelected(day) {
      switch (this.daysSelected) {
        case 0:
          this.rangeStart = day;
          this.daysSelected = 1;
          break;
        case 1:
        case 2:
          if (day.diff(this.rangeStart, 'days') <= 0) {
            this.rangeStart = day;
            this.rangeEnd = day;
          } else if (day.isSame(this.startCalendar, 'months') || day.isSame(this.endCalendar, 'months')) {
            this.rangeEnd = day;
          } else if (!day.isSame(this.endCalendar, 'months')) {
            this.rangeEnd = day;
          }

          this.daysSelected = 2;
          this.updateRange();
          break;
      }
    }
  }, {
    key: 'dayInStartSelected',
    value: function dayInStartSelected(day) {
      var nextMonth = this.startCalendar.clone().add(1, 'M');

      if (day.isSame(nextMonth, 'month')) {
        this.dayInEndSelected(day);
      }
    }
  }, {
    key: 'dayInEndSelected',
    value: function dayInEndSelected(day) {
      var prevMonth = this.endCalendar.clone().subtract(1, 'M');

      if (day.isSame(prevMonth, 'month')) {
        this.dayInStartSelected(day);
      }
    }
  }, {
    key: 'daySelected',
    value: function daySelected(day) {
      switch (this.daysSelected) {
        case 0:
          this.rangeStart = day;
          this.daysSelected = 1;
          break;
        case 1:
          if (day.diff(this.rangeStart, 'days') < 0) {
            this.rangeStart = day;
          } else {
            this.rangeEnd = day;
            this.daysSelected = 2;
            this.updateRange();
          }
          break;
        case 2:
          this.daysSelected = 1;
          this.rangeStart = day;
          this.rangeEnd = null;
          break;
      }
    }
  }, {
    key: 'moveCalenders',
    value: function moveCalenders(month, calendar) {
      if (this.areCalendarsLinked()) {
        this.startCalendar = this.startCalendar.clone().add(month, 'M');
        this.endCalendar = this.endCalendar.clone().add(month, 'M');
      } else {
        if (calendar === 'start') {
          this.startCalendar = this.startCalendar.clone().add(month, 'M');
        } else {
          this.endCalendar = this.endCalendar.clone().add(month, 'M');
        }
      }
    }
  }, {
    key: 'isMomentRange',
    value: function isMomentRange(range) {
      var isRange = false;
      if (range && range.start && range.end) {
        isRange = this.Moment.isMoment(this.range.start) && this.Moment.isMoment(this.range.end);
      }

      return isRange;
    }
  }, {
    key: 'watchRangeChange',
    value: function watchRangeChange() {
      var _this4 = this;

      this.Scope.$watchGroup([function () {
        return _this4.rangeStart;
      }, function () {
        return _this4.rangeEnd;
      }], function (newRange, oldRange) {
        var newStart = newRange[0];
        var newEnd = newRange[1];
        var oldStart = oldRange[0];
        var oldEnd = oldRange[1];

        if (_this4.maxDay() && newStart.isSame(_this4.maxDay(), 'M')) {
          newStart = newStart.clone().subtract(1, 'M');
        }

        if (!_this4.startCalendar && !_this4.endCalendar) {
          _this4.startCalendar = newStart;
          _this4.endCalendar = newStart.clone().add(1, 'M');
        }

        if (_this4.areCalendarsLinked()) {
          if (!(newStart.isSame(_this4.startCalendar, 'M') || newStart.isSame(_this4.endCalendar, 'M'))) {
            if (newStart.isSame(oldStart, 'M') && newEnd && !newEnd.isSame(oldEnd, 'M')) {
              _this4.startCalendar = newEnd.clone().subtract(1, 'M');
              _this4.endCalendar = newEnd;
            } else {
              _this4.startCalendar = newStart;
              _this4.endCalendar = newStart.clone().add(1, 'M');
            }
          } else if (newEnd && newEnd.isAfter(_this4.endCalendar, 'M')) {
            _this4.startCalendar = newEnd;
            _this4.endCalendar = newEnd.clone().add(1, 'M');
          } else if (!newStart.isSame(_this4.endCalendar, 'M')) {
            _this4.startCalendar = newStart;
            _this4.endCalendar = newStart.clone().add(1, 'M');
          }
        } else {
          if (!(newStart.isSame(_this4.startCalendar, 'M') || newStart.isSame(_this4.endCalendar, 'M'))) {
            if (newStart.isBefore(_this4.startCalendar, 'M')) {
              _this4.startCalendar = newStart;

              if (newEnd && !newEnd.isSame(_this4.endCalendar, 'M')) {
                if (newStart.isSame(newEnd, 'M')) {
                  _this4.endCalendar = newStart.clone().add(1, "M");
                } else {
                  _this4.endCalendar = newEnd;
                }
              }
            } else if (newStart.isAfter(_this4.endCalendar)) {
              _this4.startCalendar = newStart;
              _this4.endCalendar = newStart.clone().add(1, 'M');
            }
          } else if (newEnd && newEnd.isAfter(_this4.endCalendar, 'M')) {
            _this4.endCalendar = newEnd;
          }
        }
      });
    }
  }, {
    key: 'areCalendarsLinked',
    value: function areCalendarsLinked() {
      return angular.isDefined(this.linkedCalendars()) ? this.linkedCalendars() : true;
    }
  }]);

  return DateRangePickerController;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<calendar class=\"calendar\"\n          api=\"picker.startCalendarApi\"\n          min-day=\"picker.minDay()\"\n          max-day=\"picker.maxDay()\"\n          week-start=\"picker.weekStart()\"\n          month=\"picker.startCalendar\"\n          interceptors=\"picker.startCalendarInterceptors\"\n          range-start=\"picker.rangeStart\"\n          range-end=\"picker.rangeEnd\"\n          selected-day=\"picker.rangeStart\"\n          max-month=\"picker.endCalendar\"\n          week-days-name=\"picker.weekDaysName()\"\n          month-format=\"picker.monthFormat()\"\n          input-format=\"picker.inputFormat()\"\n          label=\"Start Date\">\n</calendar>\n<calendar class=\"calendar\"\n          api=\"picker.endCalendarApi\"\n          min-day=\"picker.minDay()\"\n          max-day=\"picker.maxDay()\"\n          week-start=\"picker.weekStart()\"\n          month=\"picker.endCalendar\"\n          interceptors=\"picker.endCalendarInterceptors\"\n          range-start=\"picker.rangeStart\"\n          range-end=\"picker.rangeEnd\"\n          selected-day=\"picker.rangeEnd\"\n          min-month=\"picker.startCalendar\"\n          week-days-name=\"picker.weekDaysName()\"\n          month-format=\"picker.monthFormat()\"\n          input-format=\"picker.inputFormat()\"\n          label=\"End Date\">\n</calendar>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Calendar = Calendar;

__webpack_require__(6);

var _calendar = __webpack_require__(7);

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Calendar() {
  'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      minDay: '&',
      maxDay: '&',
      weekStart: '&',
      getMonth: '&month',
      getInterceptors: '&interceptors',
      rangeStart: '&',
      rangeEnd: '&',
      changeYear: '=',
      selectedDay: '&',
      minMonth: '&',
      maxMonth: '&',
      weekDaysName: '&',
      monthFormat: '&',
      inputFormat: '&',
      showInput: '&',
      api: '=?'
    },
    template: _calendar2.default,
    controller: CalendarController,
    controllerAs: 'month',
    bindToController: true
  };

  return directive;
}

var CalendarController = function () {
  CalendarController.$inject = ['moment', '$scope', '$attrs'];

  function CalendarController(moment, $scope, $attrs) {
    'ngInject';

    _classCallCheck(this, CalendarController);

    this.Moment = moment;
    this.Scope = $scope;
    this.Attrs = $attrs;
    this.api && this.setApi();
    this.selectedYear = this.selectedDay().year();
    this.selectedMonth = this.selectedDay().month();
    this.render();
  }

  _createClass(CalendarController, [{
    key: 'setApi',
    value: function setApi() {
      Object.assign(this.api, {
        render: this.render.bind(this),
        moveToNext: this.moveToNext.bind(this),
        showLeftArrow: this.showLeftArrow.bind(this)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.defaultWeekDaysNames = this.weekDaysName() || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      this.firstDayOfWeek = this.weekStart() || 'su';
      this.daysOfWeek = this.buildWeek(this.firstDayOfWeek);
      this.calendar = this.buildCalendar(this.getMonth());
      this.interceptors = this.getInterceptors() || {};
      this.setListeners();
      this.daysName = this.setWeekDaysNames(this.daysOfWeek);
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      if (this.selectedDay()) {
        this.value = this.selectedDay().format(this.getInputFormat());
      }
    }
  }, {
    key: 'setWeekDaysNames',
    value: function setWeekDaysNames(weekDays) {
      var daysName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultWeekDaysNames;

      var weekDayNames = [];
      var defPosMap = this.Moment.weekdaysMin().reduce(function (obj, day, index) {
        obj[day.toLowerCase()] = index;
        return obj;
      }, {});

      weekDays.forEach(function (day, index) {
        var defPos = defPosMap[day];
        weekDayNames[index] = daysName[defPos];
      });

      return weekDayNames;
    }
  }, {
    key: 'setListeners',
    value: function setListeners() {
      var _this = this;

      this.Scope.$watch(function () {
        return _this.getMonth();
      }, function (newMonth) {
        _this.calendar = _this.buildCalendar(newMonth);
      });

      this.Scope.$watchGroup([function () {
        return _this.rangeStart();
      }, function () {
        return _this.rangeEnd();
      }], function () {
        _this.setValue();
        _this.updateDaysProperties(_this.calendar.monthWeeks);
      });
    }
  }, {
    key: 'monthChanged',
    value: function monthChanged(month) {
      var mo = this.calendar.currentCalendar;
      this.month = mo.clone().month(month);
      this.calendar = this.buildCalendar(this.month.clone());
    }
  }, {
    key: 'yearChanged',
    value: function yearChanged(year) {
      var mo = this.calendar.currentCalendar;
      this.month = mo.clone().year(year);
      this.calendar = this.buildCalendar(this.month.clone());
    }
  }, {
    key: 'updateDaysProperties',
    value: function updateDaysProperties(monthWeeks) {
      var _this2 = this;

      var minDay = this.minDay();
      var maxDay = this.maxDay();
      var selectedDay = this.selectedDay();
      var rangeStart = this.rangeStart();
      var rangeEnd = this.rangeEnd();

      monthWeeks.forEach(function (week) {
        week.forEach(function (day) {
          day.selected = day.mo.isSame(selectedDay || null, 'day');
          day.inRange = _this2.isInRange(day.mo);
          day.rangeStart = day.mo.isSame(rangeStart || null, 'day');
          day.rangeEnd = day.mo.isSame(rangeEnd || null, 'day');
          if (minDay) {
            day.disabled = day.mo.isBefore(minDay, 'day');
          }
          if (maxDay && !day.disabled) {
            day.disabled = day.mo.isAfter(maxDay, 'day');
          }
        });
      });
    }
  }, {
    key: 'buildWeek',
    value: function buildWeek(firstDay) {
      var daysOfWeek = this.Moment.weekdaysMin().map(function (day) {
        return day.toLowerCase();
      });
      var pivot = daysOfWeek.indexOf(firstDay.toLowerCase());
      var firstHalf = daysOfWeek.slice(0, pivot);
      var secondHalf = daysOfWeek.slice(pivot, daysOfWeek.length);
      var week = secondHalf.concat(firstHalf);

      return week;
    }
  }, {
    key: 'buildCalendar',
    value: function buildCalendar() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Moment();

      var monthWeeks = [[], [], [], [], [], []];
      var monthRange = this.getMonthDateRange(date.year(), date.month() + 1);
      var firstDayOfMonth = monthRange.start;

      var pivot = this.daysOfWeek.indexOf(firstDayOfMonth.format('dd').toLowerCase());
      var tmpDate = firstDayOfMonth.clone().subtract(pivot, 'd');

      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
          monthWeeks[i][j] = {
            mo: tmpDate,
            currentDay: tmpDate.isSame(this.Moment(), 'day'),
            currentMonth: tmpDate.isSame(date, 'month')
          };
          tmpDate = tmpDate.clone().add(1, 'd');
        }
      }
      this.selectedMonth = date.month();
      this.selectedYear = date.year();
      this.updateDaysProperties(monthWeeks);

      return {
        currentCalendar: date,
        selectedDate: date,
        firstDayOfMonth: monthRange.start.format('D'),
        lastDayOfMonth: monthRange.end.format('D'),
        monthWeeks: monthWeeks
      };
    }
  }, {
    key: 'moveCalenderByMonth',
    value: function moveCalenderByMonth(months) {
      var mo = this.calendar.currentCalendar;
      this.month = mo.clone().add(months, 'M');
      this.calendar = this.buildCalendar(this.month.clone());
    }
  }, {
    key: 'moveToNext',
    value: function moveToNext() {
      if (this.interceptors.moveToNextClicked) {
        this.interceptors.moveToNextClicked.call(this.interceptors.context);
      } else {
        this.moveCalenderByMonth(1);
      }
    }
  }, {
    key: 'moveToPrev',
    value: function moveToPrev() {
      if (this.interceptors.moveToPrevClicked) {
        this.interceptors.moveToPrevClicked.call(this.interceptors.context);
      } else {
        this.moveCalenderByMonth(-1);
      }
    }
  }, {
    key: 'getMonthDateRange',
    value: function getMonthDateRange(year, month) {
      var startDate = this.Moment([year, month - 1]);
      var endDate = this.Moment(startDate).endOf('month');
      return { start: startDate, end: endDate };
    }
  }, {
    key: 'isInRange',
    value: function isInRange(day) {
      var inRange = false;
      var rangeStart = this.rangeStart() || null;
      var rangeEnd = this.rangeEnd() || null;
      inRange = day.isBetween(rangeStart, rangeEnd) || day.isSame(rangeStart, 'day') || inRange || day.isSame(rangeEnd, 'day');

      return inRange;
    }
  }, {
    key: 'daySelected',
    value: function daySelected(day) {
      if (!day.disabled) {
        if (this.interceptors.daySelected) {
          this.interceptors.daySelected.call(this.interceptors.context, day.mo);
        }
      }
    }
  }, {
    key: 'dateInputEntered',
    value: function dateInputEntered(ev, value) {
      if (ev.keyCode == 13) {
        this.dateInputSelected(ev, value);

        // should prevent form submit if placed inside a form
        ev.preventDefault();
      }
    }
  }, {
    key: 'dateInputSelected',
    value: function dateInputSelected(ev, value) {
      var day = this.Moment(value, this.getInputFormat(), true);

      if (day.isValid()) {
        var minDay = this.minDay();
        var maxDay = this.maxDay();
        day = minDay && day.isBefore(minDay, 'day') ? minDay : day;
        day = maxDay && day.isAfter(maxDay, 'day') ? maxDay : day;

        if (!this.selectedDay() || !this.selectedDay().isSame(day, 'day')) {
          if (this.interceptors.inputSelected) {
            this.interceptors.inputSelected(day);
          } else {
            this.daySelected({ mo: day });
          }
        }
      }
    }
  }, {
    key: 'getFormattedMonth',
    value: function getFormattedMonth(day) {
      return this.Moment(day).format(this.getMonthFormat());
    }
  }, {
    key: 'getMonthFormat',
    value: function getMonthFormat() {
      return this.monthFormat() || 'MMMM YYYY';
    }
  }, {
    key: 'getInputFormat',
    value: function getInputFormat() {
      return this.inputFormat() || 'MMM DD, YYYY';
    }
  }, {
    key: 'showLeftArrow',
    value: function showLeftArrow() {
      if (this.minMonth()) {
        return !this.minMonth().isSame(this.calendar.currentCalendar.clone().subtract(1, 'M'), 'M');
      } else if (this.minDay()) {
        return !this.minDay().isSame(this.calendar.currentCalendar, 'M');
      } else {
        return true;
      }
    }
  }, {
    key: 'showRightArrow',
    value: function showRightArrow() {
      if (this.maxMonth()) {
        return !this.maxMonth().isSame(this.getMonth().clone().add(1, 'M'), 'M');
      } else if (this.maxDay()) {
        return !this.maxDay().isSame(this.getMonth(), 'M');
      } else {
        return true;
      }
    }
  }, {
    key: '_showInput',
    value: function _showInput() {
      return angular.isDefined(this.showInput()) ? this.showInput() : true;
    }
  }]);

  return CalendarController;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-container\" ng-if=\"month._showInput()\">\n  <label>{{month.Attrs.label}}</label>\n  <input type=\"text\"\n         ng-model=\"month.value\"\n         ng-keypress=\"month.dateInputEntered($event, month.value)\"\n         ng-blur=\"month.dateInputSelected($event, month.value)\"/>\n</div>\n\n<div class=\"header\">\n  <span class=\"arrow-btn left\" ng-if=\"month.showLeftArrow()\" ng-click=\"month.moveToPrev()\"></span>\n  <span class=\"date\">\n\n\n    <span ng-if=\"month.changeYear\">\n      <month-picker month-changed=\"month.monthChanged(newMonth)\" selected-month=\"month.selectedMonth\" />\n    </span>\n    <span ng-if=\"month.changeYear\">\n      <year-picker year-changed=\"month.yearChanged(year)\"\n                   selected-year=\"month.selectedYear\" />\n    </span>\n\n    <span ng-if=\"!month.changeYear\">\n      {{month.getFormattedMonth(month.calendar.currentCalendar)}}\n    </span>\n\n  </span>\n  <span class=\"arrow-btn right\" ng-if=\"month.showRightArrow()\" ng-click=\"month.moveToNext(1)\"></span>\n</div>\n\n<div class=\"board\">\n  <div class=\"days-of-week\">\n    <span class=\"day-name\" ng-repeat=\"day in month.daysName track by $index\">{{day}}</span>\n  </div>\n\n  <div class=\"weeks\">\n    <div ng-repeat=\"week in month.calendar.monthWeeks track by $index\">\n        <span class=\"day\"\n              ng-repeat=\"day in week track by $index\"\n              ng-class=\"{\n                'selected': day.selected,\n                'current': day.currentDay,\n                'other-month': !day.currentMonth,\n                'in-range': day.inRange,\n                'range-start': day.rangeStart,\n                'range-end': day.rangeEnd,\n                'disabled': day.disabled\n              }\"\n              ng-click=\"month.daySelected(day)\">\n              {{day.mo.format('D')}}\n        </span>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.ObDateRangePicker = ObDateRangePicker;

__webpack_require__(9);

var _obDateRangePicker = __webpack_require__(10);

var _obDateRangePicker2 = _interopRequireDefault(_obDateRangePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ObDateRangePicker() {
  'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      weekStart: '&',
      range: '=?',
      weekDaysName: '&',
      format: '&',
      ranges: '&',
      minDay: '&',
      maxDay: '&',
      defaultEmpty: '&',
      monthFormat: '&',
      inputFormat: '&',
      onApply: '&',
      linkedCalendars: '&',
      autoApply: '&',
      disabled: '&',
      calendarsAlwaysOn: '&',
      api: '=?'
    },
    controller: ObDateRangePickerController,
    template: _obDateRangePicker2.default,
    controllerAs: 'obDateRangePicker',
    bindToController: true
  };

  return directive;
}

var ObDateRangePickerController = function () {
  ObDateRangePickerController.$inject = ['$document', '$element', '$scope', 'moment'];

  function ObDateRangePickerController($document, $element, $scope, moment) {
    'ngInject';

    var _this = this;

    _classCallCheck(this, ObDateRangePickerController);

    this.Element = $element;
    this.Document = $document;
    this.Scope = $scope;
    this.Moment = moment;
    this.range = this.range || {};
    this.pickerApi = {};
    this.isCustomVisible = this.calendarsAlwaysOn();

    this.setOpenCloseLogic();
    this.setWatchers();
    this.value = 'Select a Range';

    this.api && Object.assign(this.api, {
      setDateRange: this.setDateRange.bind(this),
      togglePicker: this.togglePicker.bind(this),
      render: function render() {
        _this.render();
        _this.pickerApi.render();
      }
    });
    this.preRanges = this.ranges() || [];
    if (this.preRanges.length) {
      this.preRanges.push({
        name: 'Custom',
        isCustom: true
      });
    } else {
      this.isCustomVisible = true;
    }

    this.render();
    this.setListeners();
  }

  _createClass(ObDateRangePickerController, [{
    key: 'render',
    value: function render() {
      this.setPredefinedStatus();

      if (this.range.start == null || this.range.end == null) {
        this.range.start = null;
        this.range.end = null;
        this._range = {
          start: this.Moment(),
          end: this.Moment()
        };
      }

      if (this.range.start && this.range.end && !this.Moment.isMoment(this.range.start) && !this.Moment.isMoment(this.range.end) && this.format()) {

        this._range = {
          start: this.Moment(this.range.start, this.getFormat()),
          end: this.Moment(this.range.end, this.getFormat())
        };
      } else if (this.Moment.isMoment(this.range.start) && this.Moment.isMoment(this.range.end)) {
        this._range = {
          start: this.range.start,
          end: this.range.end
        };
      } else if (this.preRanges.length > 1 && angular.isUndefined(this._range)) {
        var firstPreRange = this.preRanges[0];
        this._range.start = firstPreRange.start;
        this._range.end = firstPreRange.end;
      }

      if (this._range.start && this._range.start.isAfter(this._range.end)) {
        this._range.start = this._range.end.clone();
      } else if (this._range.end && this._range.end.isBefore(this._range.start)) {
        this._range.end = this._range.start.clone();
      }

      this.applyMinMaxDaysToRange();

      if (!this.defaultEmpty()) {
        this.setRange();
      }
      this.value = this.getRangeValue();
      this.markPredefined(this._range.start, this._range.end);
      this.setPickerInterceptors();
    }
  }, {
    key: 'applyMinMaxDaysToRange',
    value: function applyMinMaxDaysToRange() {
      if (this.minDay()) {
        var minDay = this._getMinDay();
        this._range.start = this._range.start.isBefore(minDay, 'd') ? minDay : this._range.start;
        this._range.end = this._range.end.isBefore(minDay, 'd') ? minDay : this._range.end;
      }

      if (this.maxDay()) {
        var maxDay = this._getMaxDay();
        this._range.start = this._range.start.isAfter(maxDay) ? maxDay : this._range.start;
        this._range.end = this._range.end.isAfter(maxDay) ? maxDay : this._range.end;
      }
    }
  }, {
    key: 'setPickerInterceptors',
    value: function setPickerInterceptors() {
      var _this2 = this;

      this.pickerInterceptors = {
        rangeSelectedByClick: function rangeSelectedByClick() {
          if (_this2.autoApply()) {
            _this2.applyChanges();
          }
        }
      };
    }
  }, {
    key: 'setPredefinedStatus',
    value: function setPredefinedStatus() {
      var _this3 = this;

      this.preRanges.forEach(function (range) {
        if (!range.isCustom) {
          range.disabled = false;

          if (_this3.minDay()) {
            var minDay = _this3._getMinDay();
            range.disabled = range.start.isBefore(minDay, 'd');
          }

          if (!range.disabled && _this3.maxDay()) {
            var maxDay = _this3._getMaxDay();
            range.disabled = range.end.isAfter(maxDay, 'd');
          }
        }
      });
    }
  }, {
    key: 'setWatchers',
    value: function setWatchers() {
      var _this4 = this;

      this.Scope.$watchGroup([function () {
        return _this4._range.start;
      }, function () {
        return _this4._range.end;
      }], function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            start = _ref2[0],
            end = _ref2[1];

        if (!_this4.selfChange) {
          if (start && end) {
            if (_this4.preRanges.length) {
              _this4.preRanges[_this4.preRanges.length - 1].start = start;
              _this4.preRanges[_this4.preRanges.length - 1].end = end;
              _this4.markPredefined(start, end);
            }
            _this4.value = _this4.getRangeValue();
          }
        }

        _this4.selfChange = false;
      });
    }
  }, {
    key: 'setOpenCloseLogic',
    value: function setOpenCloseLogic() {
      this.isPickerVisible = false;
      this.pickerPopup = angular.element(this.Element[0].querySelector('.picker'));
      this.elemClickFlag = false;
    }
  }, {
    key: 'setListeners',
    value: function setListeners() {
      var _this5 = this;

      var events = {
        documentClick: function documentClick() {
          if (_this5.elemClickFlag) {
            _this5.elemClickFlag = false;
          } else {
            _this5.isPickerVisible && _this5.discardChanges();
            _this5.Scope.$apply();
          }
        },
        documentEsc: function documentEsc(e) {
          if (e.keyCode == 27 && _this5.isPickerVisible) {
            _this5.discardChanges();
            _this5.hidePicker();
            _this5.Scope.$apply();
          }
        },
        pickerClick: function pickerClick() {
          _this5.elemClickFlag = true;
          _this5.Scope.$apply();
        }
      };

      this.pickerPopup.on('click', events.pickerClick.bind(this));
      this.Document.on('click', events.documentClick.bind(this));
      this.Document.on('keydown', events.documentEsc.bind(this));

      this.Scope.$on('$destroy', function () {
        _this5.pickerPopup.off('click', events.pickerClick);
        _this5.Document.off('click', events.documentClick);
        _this5.Document.off('keydown', events.documentClick);
      });
    }
  }, {
    key: 'togglePicker',
    value: function togglePicker() {
      var disabled = angular.isDefined(this.disabled()) ? this.disabled() : false;
      if (!disabled && !this.isPickerVisible) {
        this.isPickerVisible = true;
        this.elemClickFlag = true;
      } else {
        this.isPickerVisible = false;
      }
    }
  }, {
    key: 'hidePicker',
    value: function hidePicker() {
      this.isPickerVisible = false;
    }
  }, {
    key: 'setRange',
    value: function setRange() {
      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._range;

      if (this.format()) {
        this.range.start = range.start.format(this.getFormat());
        this.range.end = range.end.format(this.getFormat());
      } else {
        this.range.start = range.start;
        this.range.end = range.end;
      }
    }
  }, {
    key: 'predefinedRangeSelected',
    value: function predefinedRangeSelected(range, index) {
      if (!range.disabled) {
        if (!range.isCustom) {
          this.selfChange = true;
          this.selectedRengeIndex = index;
          this.value = range.name;
          this._range.start = range.start;
          this._range.end = range.end;
          this.isCustomVisible = this.calendarsAlwaysOn() || false;
          this.applyChanges();
        } else {
          this.isCustomVisible = true;
        }
      }
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      return this.format() || 'DD/MM/YYYY';
    }
  }, {
    key: 'discardChanges',
    value: function discardChanges() {
      var format = this.getFormat();
      var start = void 0,
          end = void 0;

      if (this.range.start != null) {
        start = this.Moment(this.range.start, format);
        end = this.Moment(this.range.end, format);
      } else {
        start = this.Moment();
        end = this.Moment();
      }
      this._range.start = start;
      this._range.end = end;
      this.value = this.getRangeValue();
      this.pickerApi.setCalendarPosition(start, end);
      this.hidePicker();
    }
  }, {
    key: 'clearChanges',
    value: function clearChanges() {
      this._range.start = this.Moment();
      this.range.start = null;

      this._range.end = this.Moment();
      this.range.end = null;
      this.value = this.getRangeValue();
      this.hidePicker();
    }
  }, {
    key: 'markPredefined',
    value: function markPredefined(start, end) {
      var _this6 = this;

      this.selectedRengeIndex = this.preRanges.findIndex(function (range) {
        if (_this6.defaultEmpty() && _this6.range.start == undefined) return false;
        return start.isSame(range.start, 'day') && end.isSame(range.end, 'day');
      });
    }
  }, {
    key: 'getRangeValue',
    value: function getRangeValue() {
      if (this.range.start == null) {
        return 'Select a Range';
      }
      var value = void 0;
      var format = this.getFormat();
      var start = this.Moment(this.range.start, format);
      var end = this.Moment(this.range.end, format);
      if (this.preRanges.length) {
        var index = this.preRanges.findIndex(function (range) {
          return start.isSame(range.start, 'day') && end.isSame(range.end, 'day');
        });

        if (index !== -1) {
          if (this.preRanges[index].isCustom) {
            value = this.preRanges[index].start.format(format) + ' - ' + this.preRanges[index].end.format(format);
          } else {
            value = this.preRanges[index].name;
          }
        } else {
          value = start.format(format) + ' - ' + end.format(format);
        }
      } else {
        value = start.format(format) + ' - ' + end.format(format);
      }

      return value;
    }
  }, {
    key: 'applyChanges',
    value: function applyChanges() {
      var callApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.setRange();
      this.hidePicker();
      this.value = this.getRangeValue();
      this.pickerApi.setCalendarPosition(this._range.start, this._range.end);
      if (callApply && this.onApply) {
        this.onApply({ start: this._range.start, end: this._range.end });
      }
    }
  }, {
    key: 'getInputFormat',
    value: function getInputFormat() {
      return this.inputFormat() || 'MMM DD, YYYY';
    }
  }, {
    key: 'setDateRange',
    value: function setDateRange(range) {
      this._range.start = range.start;
      this._range.end = range.end;
      this.applyChanges(false);
    }
  }, {
    key: '_getMinDay',
    value: function _getMinDay() {
      return this.minDay() ? this.Moment(this.minDay(), this.getFormat()) : undefined;
    }
  }, {
    key: '_getMaxDay',
    value: function _getMaxDay() {
      return this.maxDay() ? this.Moment(this.maxDay(), this.getFormat()) : undefined;
    }
  }]);

  return ObDateRangePickerController;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker-dropdown-container\" ng-class=\"{'disabled': obDateRangePicker.disabled()}\">\n  <div class=\"picker-dropdown\" ng-class=\"{'open': obDateRangePicker.isPickerVisible}\" ng-click=\"obDateRangePicker.togglePicker()\">\n    <span>{{obDateRangePicker.value}}</span>\n    <a ng-click=\"obDateRangePicker.clearChanges(); $event.stopPropagation()\" class=\"clear\" ng-show=\"obDateRangePicker.defaultEmpty() && obDateRangePicker.range.start\">&times;</a>\n  </div>\n  <div class=\"picker\" ng-class=\"{'open': obDateRangePicker.isPickerVisible}\" ng-show=\"obDateRangePicker.isPickerVisible\">\n    <div class=\"date-range\" ng-show=\"obDateRangePicker.isCustomVisible\">\n      <date-range-picker ng-if=\"obDateRangePicker.isPickerVisible\"\n        api=\"obDateRangePicker.pickerApi\"\n        interceptors=\"obDateRangePicker.pickerInterceptors\"\n        linked-calendars=\"obDateRangePicker.linkedCalendars()\"\n        week-start=\"obDateRangePicker.weekStart()\"\n        range=\"obDateRangePicker._range\"\n        week-days-name=\"obDateRangePicker.weekDaysName()\"\n        min-day=\"obDateRangePicker._getMinDay()\"\n        max-day=\"obDateRangePicker._getMaxDay()\"\n        month-format=\"obDateRangePicker.monthFormat()\"\n        input-format=\"obDateRangePicker.inputFormat()\">\n      </date-range-picker>\n    </div>\n\n    <div class=\"ranges-actions\" ng-class=\"{'custom-open': obDateRangePicker.isCustomVisible}\">\n      <div class=\"ranges\">\n        <div class=\"range\"\n             ng-repeat=\"range in obDateRangePicker.preRanges track by $index\"\n             ng-class=\"{'selected': obDateRangePicker.selectedRengeIndex === $index, 'disabled': range.disabled}\"\n             ng-click=\"obDateRangePicker.predefinedRangeSelected(range, $index)\"\n             ng-if=\"!$last || ($last && !obDateRangePicker.calendarsAlwaysOn())\">{{range.name}}\n        </div>\n      </div>\n\n      <div class=\"actions\">\n        <div class=\"drp_btn cancel\" ng-click=\"obDateRangePicker.discardChanges()\" ng-if=\"!obDateRangePicker.autoApply()\">Cancel</div>\n        <div class=\"drp_btn apply\" ng-click=\"obDateRangePicker.applyChanges()\" ng-if=\"!obDateRangePicker.autoApply()\">APPLY</div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.ObDayPicker = ObDayPicker;

__webpack_require__(12);

var _obDayPicker = __webpack_require__(13);

var _obDayPicker2 = _interopRequireDefault(_obDayPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ObDayPicker() {
  'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      weekStart: '&',
      selectedDay: '=?',
      weekDaysName: '&',
      format: '&',
      minDay: '&',
      maxDay: '&',
      monthFormat: '&',
      displayFormat: '&',
      changeYear: '=',
      onApply: '&',
      disabled: '&',
      formName: '@name',
      isValidDateEnabled: '&validDay',
      autoApply: '&',
      api: '=?'
    },
    controller: ObDayPickerController,
    template: _obDayPicker2.default,
    controllerAs: 'dayPicker',
    bindToController: true
  };

  return directive;
}

var ObDayPickerController = function () {
  ObDayPickerController.$inject = ['$document', '$element', '$scope', '$timeout', 'moment'];

  function ObDayPickerController($document, $element, $scope, $timeout, moment) {
    'ngInject';

    var _this = this;

    _classCallCheck(this, ObDayPickerController);

    this.Element = $element;
    this.Document = $document;
    this.Scope = $scope;
    this.$timeout = $timeout;
    this.Moment = moment;
    this.formName = this.formName || 'dayPickerInput';
    this.setOpenCloseLogic();
    this._selectedDay = this.getSelectedDay();
    this.value = this.Moment(this._selectedDay).format(this.getDisplayFormat());
    this.setCalendarInterceptors();
    this.calendarApi = {};

    this.api && Object.assign(this.api, {
      render: function render() {
        _this.render();
      }
    });

    this.setListeners();
    this.dayValidity = this.checkIfDayIsValid(this._selectedDay);
    this.$timeout(function () {
      _this.applyValidity(_this.dayValidity);
    });
  }

  _createClass(ObDayPickerController, [{
    key: 'render',
    value: function render() {
      this.dayValidity = this.checkIfDayIsValid(this._selectedDay);
      this.applyValidity(this.dayValidity);
      this.calendarApi.render && this.calendarApi.render();
    }
  }, {
    key: 'setOpenCloseLogic',
    value: function setOpenCloseLogic() {
      this.isPickerVisible = false;
      this.pickerPopup = angular.element(this.Element[0].querySelector('.picker'));
      this.elemClickFlag = false;
    }
  }, {
    key: 'setCalendarInterceptors',
    value: function setCalendarInterceptors() {
      this.calendarInterceptors = {
        daySelected: this.daySelected.bind(this)
      };
    }
  }, {
    key: 'setListeners',
    value: function setListeners() {
      var _this2 = this;

      var events = {
        documentClick: function documentClick() {
          if (_this2.elemClickFlag) {
            _this2.elemClickFlag = false;
          } else {
            _this2.onBlur();
            _this2.Scope.$digest();
          }
        },
        pickerClick: function pickerClick() {
          _this2.elemClickFlag = true;
          _this2.Scope.$digest();
        }
      };

      this.pickerPopup.on('click', events.pickerClick.bind(this));
      this.Document.on('click', events.documentClick.bind(this));

      this.Scope.$on('$destroy', function () {
        _this2.pickerPopup.off('click', events.pickerClick);
        _this2.Document.off('click', events.documentClick);
      });

      this.Scope.$watchGroup([function () {
        return _this2.Moment(_this2.minDay(), _this2.getFormat()).format();
      }, function () {
        return _this2.Moment(_this2.maxDay(), _this2.getFormat()).format();
      }], function (min, max) {
        if (min && min[0] || max && max[0]) {
          _this2.render();
        }
      });
    }
  }, {
    key: 'showPicker',
    value: function showPicker() {
      var disabled = angular.isDefined(this.disabled()) ? this.disabled() : false;
      if (!disabled && !this.isPickerVisible) {
        this.isPickerVisible = true;
      }
      this.elemClickFlag = true;
    }
  }, {
    key: 'hidePicker',
    value: function hidePicker() {
      this.isPickerVisible = false;
    }
  }, {
    key: 'daySelected',
    value: function daySelected(day) {
      var _this3 = this;

      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      this.applyValidity(this.checkIfDayIsValid(day));
      if (!day.isSame(this._selectedDay, 'day')) {
        this.calendarApi.render();
        this.value = this.Moment(day).format(this.getDisplayFormat());
        this._selectedDay = day;

        this.$timeout(function () {
          _this3.hidePicker();
          _this3.updateSelectedDate(day);
        }, timeout);
      } else {
        this.hidePicker();
      }
    }
  }, {
    key: 'dateInputEntered',
    value: function dateInputEntered(e, value) {
      var isDaySelectable = this.checkIfDayIsValid(value);
      switch (e.keyCode) {
        case 9:
        case 13:
          var day = this.getInputValue();
          if (isDaySelectable) {
            this.daySelected(day, 0);
          } else {
            this.hidePicker();

            // should prevent form submit if placed inside a form
            e.keyCode === 13 && e.preventDefault();
          }
          break;
        case 40:
          this.isPickerVisible = true;
          break;
        case 27:
          this.isPickerVisible = false;
          this.value = this._selectedDay.format(this.getDisplayFormat());
          break;
        default:
          break;
      }
    }
  }, {
    key: 'getInputValue',
    value: function getInputValue() {
      return this.Moment(this.value, this.getDisplayFormat(), true);
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var currentValue = this.getInputValue();
      var isValid = this.checkIfDayIsValid(currentValue);
      if (isValid) {
        this.daySelected(currentValue);
      } else {
        this.hidePicker();
      }
    }
  }, {
    key: 'updateValidity',
    value: function updateValidity() {
      var day = this.getInputValue();
      var isValid = this.checkIfDayIsValid(day);
      this.applyValidity(isValid);

      if (isValid && this.autoApply() && !day.isSame(this._selectedDay, 'day')) {
        this._selectedDay = day;
        this.updateSelectedDate(day);
      }
    }
  }, {
    key: 'checkIfDayIsValid',
    value: function checkIfDayIsValid(value) {
      var day = this.Moment(value, this.getDisplayFormat(), true);
      var minDay = this._getMinDay();
      var maxDay = this._getMaxDay();
      var isValid = day.isValid();

      if (isValid && minDay) {
        isValid = day.isAfter(minDay, 'day') || day.isSame(minDay, 'day');
      }

      if (isValid && maxDay) {
        isValid = day.isBefore(maxDay, 'day') || day.isSame(maxDay, 'day');
      }

      return isValid;
    }
  }, {
    key: 'applyValidity',
    value: function applyValidity(isDateValid) {
      if (this.Scope[this.formName]) {
        if (this.disabled && this.disabled()) {
          this.Scope[this.formName].$setValidity('validDay', true);
          this.dayValidity = true;
        } else if (this.isValidDateEnabled() && this.Scope[this.formName]) {
          this.Scope[this.formName].$setValidity('validDay', isDateValid);
          this.dayValidity = isDateValid;
        }
      }
    }
  }, {
    key: 'updateSelectedDate',
    value: function updateSelectedDate() {
      var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._selectedDay;

      if (this.format()) {
        this.selectedDay = day.format(this.getFormat());
      } else {
        this.selectedDay = day;
      }

      this.onApply({ day: this.selectedDay });
    }
  }, {
    key: 'getSelectedDay',
    value: function getSelectedDay() {
      return this.Moment(this.selectedDay || this.Moment(), this.getFormat());
    }
  }, {
    key: 'getDisplayFormat',
    value: function getDisplayFormat() {
      return this.displayFormat() || this.getFormat();
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      return this.format() || 'MMM DD, YYYY';
    }
  }, {
    key: '_getMinDay',
    value: function _getMinDay() {
      return this.minDay() ? this.Moment(this.minDay(), this.getFormat()) : undefined;
    }
  }, {
    key: '_getMaxDay',
    value: function _getMaxDay() {
      return this.maxDay() ? this.Moment(this.maxDay(), this.getFormat()) : undefined;
    }
  }]);

  return ObDayPickerController;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div ng-form=\"{{::dayPicker.formName}}\" class=\"picker-dropdown-container\"\n     ng-class=\"{'open': dayPicker.isPickerVisible,\n                'disabled': dayPicker.disabled(),\n                'invalid': !dayPicker.dayValidity}\">\n  <input class=\"picker-input\"\n         ng-model=\"dayPicker.value\"\n         ng-change=\"dayPicker.updateValidity()\"\n         ng-keydown=\"dayPicker.dateInputEntered($event, dayPicker.value)\"\n         ng-click=\"dayPicker.showPicker()\"\n         ng-disabled=\"dayPicker.disabled()\"/>\n  <div class=\"picker\" ng-show=\"dayPicker.isPickerVisible\">\n    <calendar class=\"calendar\"\n              api=\"dayPicker.calendarApi\"\n              min-day=\"dayPicker._getMinDay()\"\n              max-day=\"dayPicker._getMaxDay()\"\n              week-start=\"dayPicker.weekStart()\"\n              change-year=\"dayPicker.changeYear\"\n              month=\"dayPicker._selectedDay\"\n              interceptors=\"dayPicker.calendarInterceptors\"\n              selected-day=\"dayPicker._selectedDay\"\n              min-month=\"dayPicker.startCalendar\"\n              week-days-name=\"dayPicker.weekDaysName()\"\n              month-format=\"dayPicker.monthFormat()\"\n              show-input=\"false\">\n    </calendar>\n  </div>\n</div>\n";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.YearPicker = YearPicker;

var _yearPicker = __webpack_require__(15);

var _yearPicker2 = _interopRequireDefault(_yearPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function YearPicker() {
  'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      yearChanged: '&?',
      selectedYear: '=',
      minYear: '&',
      maxYear: '&'
    },
    controller: YearPickerController,
    template: _yearPicker2.default,
    controllerAs: 'yearPicker',
    bindToController: true
  };

  return directive;
}

var YearPickerController = function () {
  YearPickerController.$inject = ['moment'];

  function YearPickerController(moment) {
    'ngInject';

    _classCallCheck(this, YearPickerController);

    this.Moment = moment;
    this.years = this.generateYears();
    this.selectedYear = this.selectedYear || this.defaultYear();
  }

  _createClass(YearPickerController, [{
    key: 'defaultYear',
    value: function defaultYear() {
      var year = this.selectedYear || this.Moment().year();
      for (var i = 0; i <= this.years.length; i++) {
        if (this.years[i].value == year) {
          return this.years[i].value;
        }
      }
      return this.years[0].value;
    }
  }, {
    key: 'generateYears',
    value: function generateYears() {
      var years = [];
      for (var i = this.endYear(); i >= this.startYear(); i--) {
        years.push({ value: i, label: i });
      }
      return years;
    }
  }, {
    key: 'startYear',
    value: function startYear() {
      if (this.minYear()) {
        return this.minYear();
      }
      return this.Moment().year() - 80;
    }
  }, {
    key: 'endYear',
    value: function endYear() {
      if (this.maxYear()) {
        return this.maxYear();
      }
      return this.Moment().year() + 5;
    }
  }, {
    key: 'onYearChange',
    value: function onYearChange() {
      this.yearChanged({ year: this.selectedYear });
    }
  }]);

  return YearPickerController;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<select ng-options= 'year.value as year.label for year in yearPicker.years'\n        ng-model= 'yearPicker.selectedYear'\n        ng-change='yearPicker.onYearChange()' />\n";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.MonthPicker = MonthPicker;

var _monthPicker = __webpack_require__(17);

var _monthPicker2 = _interopRequireDefault(_monthPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MonthPicker() {
  'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      selectedMonth: '=',
      monthChanged: '&?'
    },
    controller: MonthPickerController,
    template: _monthPicker2.default,
    controllerAs: 'monthPicker',
    bindToController: true
  };

  return directive;
}

var MonthPickerController = function () {
  MonthPickerController.$inject = ['moment'];

  function MonthPickerController(moment) {
    'ngInject';

    _classCallCheck(this, MonthPickerController);

    this.Moment = moment;
    this.months = this.generateMonths();
    this.month = this.defaultMonth();
  }

  _createClass(MonthPickerController, [{
    key: 'defaultMonth',
    value: function defaultMonth() {
      var month = this.selectedMonth || this.Moment().month();
      for (var i = 0; i <= this.months.length; i++) {
        if (this.months[i].value == month) {
          return this.months[i].value;
        }
      }
    }
  }, {
    key: 'generateMonths',
    value: function generateMonths() {
      var months = [];
      for (var i = 0; i <= 11; i++) {
        months.push({
          value: i,
          label: this.Moment().month(i).format('MMMM')
        });
      }
      return months;
    }
  }, {
    key: 'onMonthChange',
    value: function onMonthChange() {
      this.monthChanged({ newMonth: this.month.value });
    }
  }]);

  return MonthPickerController;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<select ng-options= 'month.value as month.label for month in monthPicker.months'\n        ng-model= 'monthPicker.selectedMonth'\n        ng-change='monthPicker.onMonthChange()'/>\n\n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});