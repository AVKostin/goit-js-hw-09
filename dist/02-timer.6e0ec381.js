// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/flatpickr/dist/esm/types/options.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.HOOKS = void 0;
const HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
exports.HOOKS = HOOKS;
const defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: err => typeof console !== "undefined" && console.warn(err),
  getWeek: givenDate => {
    const date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};
exports.defaults = defaults;
},{}],"../node_modules/flatpickr/dist/esm/l10n/default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.english = void 0;
const english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: nth => {
    const s = nth % 100;
    if (s > 3 && s < 21) return "th";

    switch (s % 10) {
      case 1:
        return "st";

      case 2:
        return "nd";

      case 3:
        return "rd";

      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
exports.english = english;
var _default = english;
exports.default = _default;
},{}],"../node_modules/flatpickr/dist/esm/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.arrayify = exports.int = exports.pad = void 0;

const pad = (number, length = 2) => `000${number}`.slice(length * -1);

exports.pad = pad;

const int = bool => bool === true ? 1 : 0;

exports.int = int;

function debounce(fn, wait) {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

const arrayify = obj => obj instanceof Array ? obj : [obj];

exports.arrayify = arrayify;
},{}],"../node_modules/flatpickr/dist/esm/utils/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleClass = toggleClass;
exports.createElement = createElement;
exports.clearNode = clearNode;
exports.findParent = findParent;
exports.createNumberInput = createNumberInput;
exports.getEventTarget = getEventTarget;

function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}

function createElement(tag, className, content) {
  const e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}

function createNumberInput(inputClassName, opts) {
  const wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");

  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }

  if (opts !== undefined) for (const key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}

function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      const path = event.composedPath();
      return path[0];
    }

    return event.target;
  } catch (error) {
    return event.target;
  }
}
},{}],"../node_modules/flatpickr/dist/esm/utils/formatting.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formats = exports.tokenRegex = exports.revFormat = exports.monthToStr = void 0;

var _utils = require("../utils");

const doNothing = () => undefined;

const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];

exports.monthToStr = monthToStr;
const revFormat = {
  D: doNothing,
  F: function (dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  H: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  J: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  K: (dateObj, amPM, locale) => {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * (0, _utils.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function (dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1000),
  W: function (dateObj, weekNum, locale) {
    const weekNumber = parseInt(weekNum);
    const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: (dateObj, year) => {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: (_, ISODate) => new Date(ISODate),
  d: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  h: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  i: (dateObj, minutes) => {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
  w: doNothing,
  y: (dateObj, year) => {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
exports.revFormat = revFormat;
const tokenRegex = {
  D: "(\\w+)",
  F: "(\\w+)",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "(\\w+)",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "(\\w+)",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
exports.tokenRegex = tokenRegex;
const formats = {
  Z: date => date.toISOString(),
  D: function (date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function (date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function (date, locale, options) {
    return (0, _utils.pad)(formats.h(date, locale, options));
  },
  H: date => (0, _utils.pad)(date.getHours()),
  J: function (date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: (date, locale) => locale.amPM[(0, _utils.int)(date.getHours() > 11)],
  M: function (date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: date => (0, _utils.pad)(date.getSeconds()),
  U: date => date.getTime() / 1000,
  W: function (date, _, options) {
    return options.getWeek(date);
  },
  Y: date => (0, _utils.pad)(date.getFullYear(), 4),
  d: date => (0, _utils.pad)(date.getDate()),
  h: date => date.getHours() % 12 ? date.getHours() % 12 : 12,
  i: date => (0, _utils.pad)(date.getMinutes()),
  j: date => date.getDate(),
  l: function (date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: date => (0, _utils.pad)(date.getMonth() + 1),
  n: date => date.getMonth() + 1,
  s: date => date.getSeconds(),
  u: date => date.getTime(),
  w: date => date.getDay(),
  y: date => String(date.getFullYear()).substring(2)
};
exports.formats = formats;
},{"../utils":"../node_modules/flatpickr/dist/esm/utils/index.js"}],"../node_modules/flatpickr/dist/esm/utils/dates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareDates = compareDates;
exports.compareTimes = compareTimes;
exports.getDefaultHours = getDefaultHours;
exports.duration = exports.isBetween = exports.createDateParser = exports.createDateFormatter = void 0;

var _formatting = require("./formatting");

var _options = require("../types/options");

var _default = require("../l10n/default");

const createDateFormatter = ({
  config = _options.defaults,
  l10n = _default.english,
  isMobile = false
}) => (dateObj, frmt, overrideLocale) => {
  const locale = overrideLocale || l10n;

  if (config.formatDate !== undefined && !isMobile) {
    return config.formatDate(dateObj, frmt, locale);
  }

  return frmt.split("").map((c, i, arr) => _formatting.formats[c] && arr[i - 1] !== "\\" ? _formatting.formats[c](dateObj, locale, config) : c !== "\\" ? c : "").join("");
};

exports.createDateFormatter = createDateFormatter;

const createDateParser = ({
  config = _options.defaults,
  l10n = _default.english
}) => (date, givenFormat, timeless, customLocale) => {
  if (date !== 0 && !date) return undefined;
  const locale = customLocale || l10n;
  let parsedDate;
  const dateOrig = date;
  if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
    const format = givenFormat || (config || _options.defaults).dateFormat;
    const datestr = String(date).trim();

    if (datestr === "today") {
      parsedDate = new Date();
      timeless = true;
    } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
      parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
      let matched,
          ops = [];

      for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
        const token = format[i];
        const isBackSlash = token === "\\";
        const escaped = format[i - 1] === "\\" || isBackSlash;

        if (_formatting.tokenRegex[token] && !escaped) {
          regexStr += _formatting.tokenRegex[token];
          const match = new RegExp(regexStr).exec(date);

          if (match && (matched = true)) {
            ops[token !== "Y" ? "push" : "unshift"]({
              fn: _formatting.revFormat[token],
              val: match[++matchIndex]
            });
          }
        } else if (!isBackSlash) regexStr += ".";

        ops.forEach(({
          fn,
          val
        }) => parsedDate = fn(parsedDate, val, locale) || parsedDate);
      }

      parsedDate = matched ? parsedDate : undefined;
    }
  }

  if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
    config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
    return undefined;
  }

  if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
  return parsedDate;
};

exports.createDateParser = createDateParser;

function compareDates(date1, date2, timeless = true) {
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }

  return date1.getTime() - date2.getTime();
}

function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}

const isBetween = (ts, ts1, ts2) => {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};

exports.isBetween = isBetween;
const duration = {
  DAY: 86400000
};
exports.duration = duration;

function getDefaultHours(config) {
  let hours = config.defaultHour;
  let minutes = config.defaultMinute;
  let seconds = config.defaultSeconds;

  if (config.minDate !== undefined) {
    const minHour = config.minDate.getHours();
    const minMinutes = config.minDate.getMinutes();
    const minSeconds = config.minDate.getSeconds();

    if (hours < minHour) {
      hours = minHour;
    }

    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }

    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }

  if (config.maxDate !== undefined) {
    const maxHr = config.maxDate.getHours();
    const maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }

  return {
    hours,
    minutes,
    seconds
  };
}
},{"./formatting":"../node_modules/flatpickr/dist/esm/utils/formatting.js","../types/options":"../node_modules/flatpickr/dist/esm/types/options.js","../l10n/default":"../node_modules/flatpickr/dist/esm/l10n/default.js"}],"../node_modules/flatpickr/dist/esm/utils/polyfills.js":[function(require,module,exports) {
"use strict";

if (typeof Object.assign !== "function") {
  Object.assign = function (target, ...args) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }

    for (const source of args) {
      if (source) {
        Object.keys(source).forEach(key => target[key] = source[key]);
      }
    }

    return target;
  };
}
},{}],"../node_modules/flatpickr/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = require("./types/options");

var _default2 = _interopRequireDefault(require("./l10n/default"));

var _utils = require("./utils");

var _dom = require("./utils/dom");

var _dates = require("./utils/dates");

var _formatting = require("./utils/formatting");

require("./utils/polyfills");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEBOUNCED_CHANGE_MS = 300;

function FlatpickrInstance(element, instanceConfig) {
  const self = {
    config: Object.assign(Object.assign({}, _options.defaults), flatpickr.defaultConfig),
    l10n: _default2.default
  };
  self.parseDate = (0, _dates.createDateParser)({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self._createElement = _dom.createElement;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;

  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }

    };
  }

  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();

    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }

      updateValue(false);
    }

    setCalendarWidth();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!self.isMobile && isSafari) {
      positionCalendar();
    }

    triggerEvent("onReady");
  }

  function bindToInstance(fn) {
    return fn.bind(self);
  }

  function setCalendarWidth() {
    const config = self.config;

    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (self.daysContainer !== undefined) {
          const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }

  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      const defaultDate = self.config.minDate === undefined || (0, _dates.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      const defaults = (0, _dates.getDefaultHours)(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }

    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }

    const prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();

    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }

  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * (0, _utils.int)(amPM === self.l10n.amPM[1]);
  }

  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;

      default:
        return hour % 12;
    }
  }

  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
        minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
        seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }

    const limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0, _dates.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    const limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0, _dates.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

    if (limitMaxHours) {
      const maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
      hours = Math.min(hours, maxTime.getHours());
      if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
      if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
    }

    if (limitMinHours) {
      const minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
      hours = Math.max(hours, minTime.getHours());
      if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
      if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
    }

    setHours(hours, minutes, seconds);
  }

  function setHoursFromDate(dateObj) {
    const date = dateObj || self.latestSelectedDateObj;

    if (date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }

    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = (0, _utils.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0, _utils.int)(hours % 12 === 0) : hours);
    self.minuteElement.value = (0, _utils.pad)(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = (0, _utils.pad)(seconds);
  }

  function onYearInput(event) {
    const eventTarget = (0, _dom.getEventTarget)(event);
    const year = parseInt(eventTarget.value) + (event.delta || 0);

    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }

  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(ev => bind(element, ev, handler, options));
    if (element instanceof Array) return element.forEach(el => bind(el, event, handler, options));
    element.addEventListener(event, handler, options);

    self._handlers.push({
      remove: () => element.removeEventListener(event, handler)
    });
  }

  function triggerChange() {
    triggerEvent("onChange");
  }

  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(evt => {
        Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), el => bind(el, "click", self[evt]));
      });
    }

    if (self.isMobile) {
      setupMobile();
      return;
    }

    const debouncedResize = (0, _utils.debounce)(onResize, 50);
    self._debouncedChange = (0, _utils.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", e => {
      if (self.config.mode === "range") onMouseOver((0, _dom.getEventTarget)(e));
    });
    bind(window.document.body, "keydown", onKeyDown);
    if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });

    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }

    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }

    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      const selText = e => (0, _dom.getEventTarget)(e).select();

      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());

      if (self.amPM !== undefined) {
        bind(self.amPM, "click", e => {
          updateTime(e);
          triggerChange();
        });
      }
    }

    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }

  function jumpToDate(jumpDate, triggerChange) {
    const jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    const oldYear = self.currentYear;
    const oldMonth = self.currentMonth;

    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }

    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }

    self.redraw();
  }

  function timeIncrement(e) {
    const eventTarget = (0, _dom.getEventTarget)(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }

  function incrementNumInput(e, delta, inputElem) {
    const target = e && (0, _dom.getEventTarget)(e);
    const input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    const event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }

  function build() {
    const fragment = window.document.createDocumentFragment();
    self.calendarContainer = (0, _dom.createElement)("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;

    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = (0, _dom.createElement)("div", "flatpickr-innerContainer");

      if (self.config.weekNumbers) {
        const {
          weekWrapper,
          weekNumbers
        } = buildWeeks();
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }

      self.rContainer = (0, _dom.createElement)("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());

      if (!self.daysContainer) {
        self.daysContainer = (0, _dom.createElement)("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }

      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }

    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }

    (0, _dom.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
    (0, _dom.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
    (0, _dom.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    const customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }

      if (self.config.static) {
        const wrapper = (0, _dom.createElement)("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }

    if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }

  function createDay(className, date, dayNumber, i) {
    const dateIsEnabled = isEnabled(date, true),
          dayElement = (0, _dom.createElement)("span", "flatpickr-day " + className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

    if (className.indexOf("hidden") === -1 && (0, _dates.compareDates)(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }

    if (dateIsEnabled) {
      dayElement.tabIndex = -1;

      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;

        if (self.config.mode === "range") {
          (0, _dom.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0, _dates.compareDates)(date, self.selectedDates[0], true) === 0);
          (0, _dom.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0, _dates.compareDates)(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }

    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }

    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }

    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }

  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }

  function getFirstAvailableDay(delta) {
    const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    const endMonth = delta > 0 ? self.config.showMonths : -1;

    for (let m = startMonth; m != endMonth; m += delta) {
      const month = self.daysContainer.children[m];
      const startIndex = delta > 0 ? 0 : month.children.length - 1;
      const endIndex = delta > 0 ? month.children.length : -1;

      for (let i = startIndex; i != endIndex; i += delta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }

    return undefined;
  }

  function getNextAvailableDay(current, delta) {
    const givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    const endMonth = delta > 0 ? self.config.showMonths : -1;
    const loopDelta = delta > 0 ? 1 : -1;

    for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      const month = self.daysContainer.children[m];
      const startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      const numMonthDays = month.children.length;

      for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }

    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }

  function focusOnDay(current, offset) {
    const dayFocused = isInView(document.activeElement || document.body);
    const startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }

  function buildMonthDays(year, month) {
    const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    const daysInMonth = self.utils.getDaysInMonth(month, year),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    let dayNumber = prevMonthDays + 1 - firstOfMonth,
        dayIndex = 0;

    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }

    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }

    for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }

    const dayContainer = (0, _dom.createElement)("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }

  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }

    (0, _dom.clearNode)(self.daysContainer);
    if (self.weekNumbers) (0, _dom.clearNode)(self.weekNumbers);
    const frag = document.createDocumentFragment();

    for (let i = 0; i < self.config.showMonths; i++) {
      const d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }

    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;

    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }

  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

    const shouldBuildMonth = function (month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }

      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };

    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";

    for (let i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      const month = (0, _dom.createElement)("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = (0, _formatting.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;

      if (self.currentMonth === i) {
        month.selected = true;
      }

      self.monthsDropdownContainer.appendChild(month);
    }
  }

  function buildMonth() {
    const container = (0, _dom.createElement)("div", "flatpickr-month");
    const monthNavFragment = window.document.createDocumentFragment();
    let monthElement;

    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = (0, _dom.createElement)("span", "cur-month");
    } else {
      self.monthsDropdownContainer = (0, _dom.createElement)("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", e => {
        const target = (0, _dom.getEventTarget)(e);
        const selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }

    const yearInput = (0, _dom.createNumberInput)("cur-year", {
      tabindex: "-1"
    });
    const yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }

    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }

    const currentMonth = (0, _dom.createElement)("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }

  function buildMonths() {
    (0, _dom.clearNode)(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);

    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }

    for (let m = self.config.showMonths; m--;) {
      const month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }

    self.monthNav.appendChild(self.nextMonthNav);
  }

  function buildMonthNav() {
    self.monthNav = (0, _dom.createElement)("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = (0, _dom.createElement)("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = (0, _dom.createElement)("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: () => self.__hidePrevMonthArrow,

      set(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          (0, _dom.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }

    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: () => self.__hideNextMonthArrow,

      set(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          (0, _dom.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }

    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }

  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    const defaults = (0, _dates.getDefaultHours)(self.config);
    self.timeContainer = (0, _dom.createElement)("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    const separator = (0, _dom.createElement)("span", "flatpickr-time-separator", ":");
    const hourInput = (0, _dom.createNumberInput)("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    const minuteInput = (0, _dom.createNumberInput)("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      const secondInput = (0, _dom.createNumberInput)("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild((0, _dom.createElement)("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }

    if (!self.config.time_24hr) {
      self.amPM = (0, _dom.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0, _utils.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }

    return self.timeContainer;
  }

  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = (0, _dom.createElement)("div", "flatpickr-weekdays");else (0, _dom.clearNode)(self.weekdayContainer);

    for (let i = self.config.showMonths; i--;) {
      const container = (0, _dom.createElement)("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }

    updateWeekdays();
    return self.weekdayContainer;
  }

  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }

    const firstDayOfWeek = self.l10n.firstDayOfWeek;
    let weekdays = [...self.l10n.weekdays.shorthand];

    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = [...weekdays.splice(firstDayOfWeek, weekdays.length), ...weekdays.splice(0, firstDayOfWeek)];
    }

    for (let i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
    }
  }

  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    const weekWrapper = (0, _dom.createElement)("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild((0, _dom.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    const weekNumbers = (0, _dom.createElement)("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }

  function changeMonth(value, isOffset = true) {
    const delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;

    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }

  function clear(triggerChangeEvent = true, toInitial = true) {
    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;

    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }

    if (self.config.enableTime === true) {
      const {
        hours,
        minutes,
        seconds
      } = (0, _dates.getDefaultHours)(self.config);
      setHours(hours, minutes, seconds);
    }

    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }

  function close() {
    self.isOpen = false;

    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }

      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }

    triggerEvent("onClose");
  }

  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");

    for (let i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }

    self._handlers = [];

    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        const wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }

    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }

    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }

    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(k => {
      try {
        delete self[k];
      } catch (_) {}
    });
  }

  function isCalendarElem(elem) {
    if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
    return self.calendarContainer.contains(elem);
  }

  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      const eventTarget = (0, _dom.getEventTarget)(e);
      const isCalendarElement = isCalendarElem(eventTarget);
      const isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      const lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      const isIgnored = !self.config.ignoredFocusElements.some(elem => elem.contains(eventTarget));

      if (lostFocus && isIgnored) {
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }

        self.close();

        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
          self.clear(false);
          self.redraw();
        }
      }
    }
  }

  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    const newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;

    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }

    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }

  function isEnabled(date, timeless = true) {
    var _a;

    const dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    const bool = !!self.config.enable,
          array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

    for (let i = 0, d; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        const parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }

    return !bool;
  }

  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }

  function onBlur(e) {
    const isInput = e.target === self._input;

    if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }

  function onKeyDown(e) {
    const eventTarget = (0, _dom.getEventTarget)(e);
    const isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    const allowInput = self.config.allowInput;
    const allowKeydown = self.isOpen && (!allowInput || !isInput);
    const allowInlineKeydown = self.config.inline && isInput && !allowInput;

    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      const isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);

          break;

        case 27:
          e.preventDefault();
          focusAndClose();
          break;

        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }

          break;

        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();

            if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
              const delta = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey) focusOnDay(undefined, delta);else {
                e.stopPropagation();
                changeMonth(delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();

          break;

        case 38:
        case 40:
          e.preventDefault();
          const delta = e.keyCode === 40 ? 1 : -1;

          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);

            self._debouncedChange();
          }

          break;

        case 9:
          if (isTimeObj) {
            const elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(x => x);
            const i = elems.indexOf(eventTarget);

            if (i !== -1) {
              const target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();

              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();

            self._input.focus();
          }

          break;

        default:
          break;
      }
    }

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;

        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }

    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }

  function onMouseOver(elem) {
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
    const hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    let containsDisabled = false;
    let minRange = 0,
        maxRange = 0;

    for (let t = rangeStartDate; t < rangeEndDate; t += _dates.duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }

    for (let m = 0; m < self.config.showMonths; m++) {
      const month = self.daysContainer.children[m];

      for (let i = 0, l = month.children.length; i < l; i++) {
        const dayElem = month.children[i],
              date = dayElem.dateObj;
        const timestamp = date.getTime();
        const outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach(c => {
            dayElem.classList.remove(c);
          });
          continue;
        } else if (containsDisabled && !outOfRange) continue;

        ["startRange", "inRange", "endRange", "notAllowed"].forEach(c => {
          dayElem.classList.remove(c);
        });

        if (elem !== undefined) {
          elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0, _dates.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
        }
      }
    }
  }

  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }

  function open(e, positionElement = self._positionElement) {
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        const eventTarget = (0, _dom.getEventTarget)(e);

        if (eventTarget) {
          eventTarget.blur();
        }
      }

      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }

      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }

    const wasOpen = self.isOpen;
    self.isOpen = true;

    if (!wasOpen) {
      self.calendarContainer.classList.add("open");

      self._input.classList.add("active");

      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }

    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(() => self.hourElement.select(), 50);
      }
    }
  }

  function minMaxDateSetter(type) {
    return date => {
      const dateObj = self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat);
      const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];

      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }

      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(d => isEnabled(d));
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }

      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }

  function parseConfig() {
    const boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    const formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: () => self.config._enable,
      set: dates => {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: () => self.config._disable,
      set: dates => {
        self.config._disable = parseDateRules(dates);
      }
    });
    const timeMode = userConfig.mode === "time";

    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      const defaultDateFormat = flatpickr.defaultConfig.dateFormat || _options.defaults.dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }

    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      const defaultAltFormat = flatpickr.defaultConfig.altFormat || _options.defaults.altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
    }

    Object.defineProperty(self.config, "minDate", {
      get: () => self.config._minDate,
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: () => self.config._maxDate,
      set: minMaxDateSetter("max")
    });

    const minMaxTimeSetter = type => val => {
      self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
    };

    Object.defineProperty(self.config, "minTime", {
      get: () => self.config._minTime,
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: () => self.config._maxTime,
      set: minMaxTimeSetter("max")
    });

    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }

    Object.assign(self.config, formats, userConfig);

    for (let i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

    _options.HOOKS.filter(hook => self.config[hook] !== undefined).forEach(hook => {
      self.config[hook] = (0, _utils.arrayify)(self.config[hook] || []).map(bindToInstance);
    });

    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    for (let i = 0; i < self.config.plugins.length; i++) {
      const pluginConf = self.config.plugins[i](self) || {};

      for (const key in pluginConf) {
        if (_options.HOOKS.indexOf(key) > -1) {
          self.config[key] = (0, _utils.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }

    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }

    triggerEvent("onParseConfig");
  }

  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }

  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
    self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _formatting.tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
    const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }

    self.formatDate = (0, _dates.createDateFormatter)(self);
    self.parseDate = (0, _dates.createDateParser)({
      config: self.config,
      l10n: self.l10n
    });
  }

  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }

    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    const positionElement = customPositionElement || self._positionElement;
    const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (acc, child) => acc + child.offsetHeight, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    const top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    (0, _dom.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
    (0, _dom.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    let left = window.pageXOffset + inputBounds.left;
    let isCenter = false;
    let isRight = false;

    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }

    (0, _dom.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    (0, _dom.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
    (0, _dom.toggleClass)(self.calendarContainer, "arrowRight", isRight);
    const right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    const rightMost = left + calendarWidth > window.document.body.offsetWidth;
    const centerMost = right + calendarWidth > window.document.body.offsetWidth;
    (0, _dom.toggleClass)(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = `${top}px`;

    if (!rightMost) {
      self.calendarContainer.style.left = `${left}px`;
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = `${right}px`;
    } else {
      const doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      const bodyWidth = window.document.body.offsetWidth;
      const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      const centerBefore = ".flatpickr-calendar.centerMost:before";
      const centerAfter = ".flatpickr-calendar.centerMost:after";
      const centerIndex = doc.cssRules.length;
      const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
      (0, _dom.toggleClass)(self.calendarContainer, "rightMost", false);
      (0, _dom.toggleClass)(self.calendarContainer, "centerMost", true);
      doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
      self.calendarContainer.style.left = `${centerLeft}px`;
      self.calendarContainer.style.right = "auto";
    }
  }

  function getDocumentStyleSheet() {
    let editableSheet = null;

    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];

      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }

      editableSheet = sheet;
      break;
    }

    return editableSheet != null ? editableSheet : createStyleSheet();
  }

  function createStyleSheet() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }

  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }

  function focusAndClose() {
    self._input.focus();

    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }

  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();

    const isSelectable = day => day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");

    const t = (0, _dom.findParent)((0, _dom.getEventTarget)(e), isSelectable);
    if (t === undefined) return;
    const target = t;
    const selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      const selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }

      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if ((0, _dates.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    setHoursFromInputs();

    if (shouldChangeMonth) {
      const isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();

      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      triggerEvent("onMonthChange");
    }

    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

    if (self.config.closeOnSelect) {
      const single = self.config.mode === "single" && !self.config.enableTime;
      const range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

      if (single || range) {
        focusAndClose();
      }
    }

    triggerChange();
  }

  const CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    clickOpens: [() => {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);

        self._input.removeEventListener("click", self.open);
      }
    }]
  };

  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);

      for (const key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(x => x());
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(x => x());else if (_options.HOOKS.indexOf(option) > -1) self.config[option] = (0, _utils.arrayify)(value);
    }

    self.redraw();
    updateValue(true);
  }

  function setSelectedDate(inputDate, format) {
    let dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(d => self.parseDate(d, format));else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;

        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(date => self.parseDate(date, format));
          break;

        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(date => self.parseDate(date, format));
          break;

        default:
          break;
      }
    } else self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(d => d instanceof Date && isEnabled(d, false));
    if (self.config.mode === "range") self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
  }

  function setDate(date, triggerChange = false, format = self.config.dateFormat) {
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();

    if (self.selectedDates.length === 0) {
      self.clear(false);
    }

    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }

  function parseDateRules(arr) {
    return arr.slice().map(rule => {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };

      return rule;
    }).filter(x => x);
  }

  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    const preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }

  function setupInputs() {
    self.input = getInputElem();

    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }

    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;

    if (self.config.altInput) {
      self.altInput = (0, _dom.createElement)(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }

    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    self._positionElement = self.config.positionElement || self._input;
  }

  function setupMobile() {
    const inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = (0, _dom.createElement)("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }

    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";

    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}

    bind(self.mobileInput, "change", e => {
      self.setDate((0, _dom.getEventTarget)(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }

  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }

  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    const hooks = self.config[event];

    if (hooks !== undefined && hooks.length > 0) {
      for (let i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
    }

    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }

  function createEvent(name) {
    const e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }

  function isDateSelected(date) {
    for (let i = 0; i < self.selectedDates.length; i++) {
      if ((0, _dates.compareDates)(self.selectedDates[i], date) === 0) return "" + i;
    }

    return false;
  }

  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return (0, _dates.compareDates)(date, self.selectedDates[0]) >= 0 && (0, _dates.compareDates)(date, self.selectedDates[1]) <= 0;
  }

  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach((yearElement, i) => {
      const d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = (0, _formatting.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }

      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }

  function getDateStr(format) {
    return self.selectedDates.map(dObj => self.formatDate(dObj, format)).filter((d, i, arr) => self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }

  function updateValue(triggerChange = true) {
    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }

    self.input.value = getDateStr(self.config.dateFormat);

    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }

    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }

  function onMonthNavClick(e) {
    const eventTarget = (0, _dom.getEventTarget)(e);
    const isPrevMonth = self.prevMonthNav.contains(eventTarget);
    const isNextMonth = self.nextMonthNav.contains(eventTarget);

    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }

  function timeWrapper(e) {
    e.preventDefault();
    const isKeyDown = e.type === "keydown",
          eventTarget = (0, _dom.getEventTarget)(e),
          input = eventTarget;

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(self.amPM.textContent === self.l10n.amPM[0])];
    }

    const min = parseFloat(input.getAttribute("min")),
          max = parseFloat(input.getAttribute("max")),
          step = parseFloat(input.getAttribute("step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    let newValue = curValue + step * delta;

    if (typeof input.value !== "undefined" && input.value.length === 2) {
      const isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

      if (newValue < min) {
        newValue = max + newValue + (0, _utils.int)(!isHourElem) + ((0, _utils.int)(isHourElem) && (0, _utils.int)(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - (0, _utils.int)(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }

      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(self.amPM.textContent === self.l10n.amPM[0])];
      }

      input.value = (0, _utils.pad)(newValue);
    }
  }

  init();
  return self;
}

function _flatpickr(nodeList, config) {
  const nodes = Array.prototype.slice.call(nodeList).filter(x => x instanceof HTMLElement);
  const instances = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;

      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();

        node._flatpickr = undefined;
      }

      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };

  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}

var flatpickr = function (selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};

flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: Object.assign({}, _default2.default),
  default: Object.assign({}, _default2.default)
};

flatpickr.localize = l10n => {
  flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};

flatpickr.setDefaults = config => {
  flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
};

flatpickr.parseDate = (0, _dates.createDateParser)({});
flatpickr.formatDate = (0, _dates.createDateFormatter)({});
flatpickr.compareDates = _dates.compareDates;

if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}

Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};

if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}

var _default = flatpickr;
exports.default = _default;
},{"./types/options":"../node_modules/flatpickr/dist/esm/types/options.js","./l10n/default":"../node_modules/flatpickr/dist/esm/l10n/default.js","./utils":"../node_modules/flatpickr/dist/esm/utils/index.js","./utils/dom":"../node_modules/flatpickr/dist/esm/utils/dom.js","./utils/dates":"../node_modules/flatpickr/dist/esm/utils/dates.js","./utils/formatting":"../node_modules/flatpickr/dist/esm/utils/formatting.js","./utils/polyfills":"../node_modules/flatpickr/dist/esm/utils/polyfills.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/flatpickr/dist/flatpickr.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/notiflix/dist/notiflix-aio-3.2.4.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/* Notiflix AIO (https://notiflix.github.io) - Version: 3.2.4 - Author: Furkan MT (https://github.com/furcan) - Copyright 2019 - 2022 Notiflix, MIT Licence (https://opensource.org/licenses/MIT) */

(function(t,e){"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(t):t.Notiflix=e(t)})("undefined"==typeof global?"undefined"==typeof window?this:window:global,function(t){'use strict';if("undefined"==typeof t&&"undefined"==typeof t.document)return!1;var e,i,a,n,o,r="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s="-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif",l={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},m={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},c={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},p={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},f={Show:"Show",Ask:"Ask",Prompt:"Prompt"},d={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},g={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},b={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},u={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},y=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+r)},k=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+r)},w=function(e){return e||(e="head"),null!==t.document[e]||(y("\nNotiflix needs to be appended to the \"<"+e+">\" element, but you called it before the \"<"+e+">\" element has been created."),!1)},h=function(e,i){if(!w("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var a=t.document.createElement("style");a.id=i,a.innerHTML=e(),t.document.head.appendChild(a)}},v=function(){var t={},e=!1,a=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],a++);for(var n=function(i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=e&&"[object Object]"===Object.prototype.toString.call(i[a])?v(t[a],i[a]):i[a])};a<arguments.length;a++)n(arguments[a]);return t},N=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},C=function(t,e){t||(t="110px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportSuccess\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\"><path d=\"M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z\" style=\"-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\"><path d=\"M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z\" style=\"-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},z=function(t,e){t||(t="110px"),e||(e="#ff5549");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportFailure\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z\" style=\"-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z\" style=\"-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},S=function(t,e){t||(t="110px"),e||(e="#eebf31");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportWarning\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z\" style=\"-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)\"><path d=\"M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z\" style=\"-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},L=function(t,e){t||(t="110px"),e||(e="#26c0d3");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportInfo\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z\" style=\"-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z\" style=\"-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},W=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\""+e+"\" width=\""+t+"\" height=\""+t+"\" transform=\"scale(.8)\" viewBox=\"0 0 38 38\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\" transform=\"translate(1 1)\"><circle cx=\"18\" cy=\"18\" r=\"18\" stroke-opacity=\".25\"/><path d=\"M36 18c0-9.94-8.06-18-18-18\"><animateTransform attributeName=\"transform\" dur=\"1s\" from=\"0 18 18\" repeatCount=\"indefinite\" to=\"360 18 18\" type=\"rotate\"/></path></g></svg>";return i},I=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXLoadingHourglass\" fill=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 200 200\"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group=\"true\" data-animator-type=\"1\" style=\"-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box\"><g id=\"NXhourglass2\" fill=\"inherit\"><g data-animator-group=\"true\" data-animator-type=\"2\" style=\"-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box\" opacity=\".4\"><path id=\"NXhourglass4\" d=\"M100 100l-34.38 32.08v31.14h68.76v-31.14z\"/></g><g data-animator-group=\"true\" data-animator-type=\"2\" style=\"-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box\" opacity=\".4\"><path id=\"NXhourglass6\" d=\"M100 100L65.62 67.92V36.78h68.76v31.14z\"/></g><path d=\"M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z\"/></g></g></svg>";return i},R=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\""+t+"\" height=\""+t+"\" viewBox=\"25 25 50 50\" style=\"-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:"+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+";position:absolute;top:0;left:0;margin:auto\"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\""+e+"\" stroke-width=\"2\" style=\"-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite\" stroke-dasharray=\"150 200\" stroke-dashoffset=\"-10\" stroke-linecap=\"round\"/></svg>";return i},A=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 128 128\"><g><path fill=\"inherit\" d=\"M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z\"/><animateTransform attributeName=\"transform\" dur=\"1.5s\" from=\"0 64 64\" repeatCount=\"indefinite\" to=\"360 64 64\" type=\"rotate\"/></g></svg>";return i},M=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 100 100\"><g transform=\"translate(25 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.239)\"><animateTransform attributeName=\"transform\" begin=\"-0.266s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g><g transform=\"translate(50 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.00152)\"><animateTransform attributeName=\"transform\" begin=\"-0.133s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g><g transform=\"translate(75 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.299)\"><animateTransform attributeName=\"transform\" begin=\"0s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g></svg>";return i},B=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 44 44\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\"><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle></g></svg>";return i},X=function(t,e,i){t||(t="60px"),e||(e="#f8f8f8"),i||(i="#32c682");var a="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXLoadingNotiflixLib\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 200 200\"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:"+e+";stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d=\"M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z\" style=\"animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal\" fill=\""+i+"\" stroke=\""+i+"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"22\" stroke-width=\"12\"/><path class=\"nx-icon-line\" d=\"M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21\" style=\"animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal\" stroke-dasharray=\"500\"/><path class=\"nx-icon-line\" d=\"M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75\" style=\"animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal\" stroke-dasharray=\"500\"/></svg>";return a},D=function(){return"[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}"},T=0,F=function(a,n,o,r){if(!w("body"))return!1;e||G.Notify.init({});var c=v(!0,e,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof r&&!Array.isArray(r)){var p={};"object"==typeof o?p=o:"object"==typeof r&&(p=r),e=v(!0,e,p)}var f=e[a.toLocaleLowerCase("en")];T++,"string"!=typeof n&&(n="Notiflix "+a),e.plainText&&(n=N(n)),!e.plainText&&n.length>e.messageMaxLength&&(e=v(!0,e,{closeButton:!0,messageMaxLength:150}),n="Possible HTML Tags Error: The \"plainText\" option is \"false\" and the notification content length is more than the \"messageMaxLength\" option."),n.length>e.messageMaxLength&&(n=n.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),e.cssAnimation||(e.cssAnimationDuration=0);var d=t.document.getElementById(m.wrapID)||t.document.createElement("div");if(d.id=m.wrapID,d.style.width=e.width,d.style.zIndex=e.zindex,d.style.opacity=e.opacity,"center-center"===e.position?(d.style.left=e.distance,d.style.top=e.distance,d.style.right=e.distance,d.style.bottom=e.distance,d.style.margin="auto",d.classList.add("nx-flex-center-center"),d.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="center",d.style.pointerEvents="none"):"center-top"===e.position?(d.style.left=e.distance,d.style.right=e.distance,d.style.top=e.distance,d.style.bottom="auto",d.style.margin="auto"):"center-bottom"===e.position?(d.style.left=e.distance,d.style.right=e.distance,d.style.bottom=e.distance,d.style.top="auto",d.style.margin="auto"):"right-bottom"===e.position?(d.style.right=e.distance,d.style.bottom=e.distance,d.style.top="auto",d.style.left="auto"):"left-top"===e.position?(d.style.left=e.distance,d.style.top=e.distance,d.style.right="auto",d.style.bottom="auto"):"left-bottom"===e.position?(d.style.left=e.distance,d.style.bottom=e.distance,d.style.top="auto",d.style.right="auto"):(d.style.right=e.distance,d.style.top=e.distance,d.style.left="auto",d.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(m.overlayID)||t.document.createElement("div");x.id=m.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=f.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(m.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(m.wrapID)||t.document.body.appendChild(d);var g=t.document.createElement("div");g.id=e.ID+"-"+T,g.className=e.className+" "+f.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof o?"nx-with-close-button":"")+" "+("function"==typeof o?"nx-with-callback":"")+" "+(e.clickToClose?"nx-click-to-close":""),g.style.fontSize=e.fontSize,g.style.color=f.textColor,g.style.background=f.background,g.style.borderRadius=e.borderRadius,g.style.pointerEvents="all",e.rtl&&(g.setAttribute("dir","rtl"),g.classList.add("nx-rtl-on")),g.style.fontFamily="\""+e.fontFamily+"\", "+s,e.cssAnimation&&(g.style.animationDuration=e.cssAnimationDuration+"ms");var b="";if(e.closeButton&&"function"!=typeof o&&(b="<span class=\"nx-close-button\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z\"/></g></svg></span>"),!e.useIcon)g.innerHTML="<span class=\"nx-message\">"+n+"</span>"+(e.closeButton?b:"");else if(e.useFontAwesome)g.innerHTML="<i style=\"color:"+f.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+";\" class=\"nx-message-icon nx-message-icon-fa "+f.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+"\"></i><span class=\"nx-message nx-with-icon\">"+n+"</span>"+(e.closeButton?b:"");else{var u="";a===l.Success?u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z\"/></g></svg>":a===l.Failure?u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z\"/></g></svg>":a===l.Warning?u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z\"/></g></svg>":a===l.Info&&(u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z\"/></g></svg>"),g.innerHTML=u+"<span class=\"nx-message nx-with-icon\">"+n+"</span>"+(e.closeButton?b:"")}if("left-bottom"===e.position||"right-bottom"===e.position){var y=t.document.getElementById(m.wrapID);y.insertBefore(g,y.firstChild)}else t.document.getElementById(m.wrapID).appendChild(g);var k=t.document.getElementById(g.id);if(k){var h,C,z=function(){k.classList.add("nx-remove");var e=t.document.getElementById(m.overlayID);e&&0>=d.childElementCount&&e.classList.add("nx-remove"),clearTimeout(h)},S=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),0>=d.childElementCount&&null!==d.parentNode){d.parentNode.removeChild(d);var e=t.document.getElementById(m.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};if(e.closeButton&&"function"!=typeof o){var L=t.document.getElementById(g.id).querySelector("span.nx-close-button");L.addEventListener("click",function(){z();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)})}if(("function"==typeof o||e.clickToClose)&&k.addEventListener("click",function(){"function"==typeof o&&o(),z();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof o){var W=function(){h=setTimeout(function(){z()},e.timeout),C=setTimeout(function(){S()},e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(k.addEventListener("mouseenter",function(){k.classList.add("nx-paused"),clearTimeout(h),clearTimeout(C)}),k.addEventListener("mouseleave",function(){k.classList.remove("nx-paused"),W()}))}}if(e.showOnlyTheLastOne&&0<T)for(var I,R=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+T+"])"),A=0;A<R.length;A++)I=R[A],null!==I.parentNode&&I.parentNode.removeChild(I);e=v(!0,e,c)},E=function(){return"[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div[class*=\"-content\"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*=\"-content\"]>div[class$=\"-icon\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*=\"-content\"]>div[class$=\"-icon\"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*=\"-overlay\"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*=\"-content\"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*=\"-content\"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*=\"-overlay\"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*=\"-content\"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*=\"-content\"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}"},j=function(e,a,n,o,r,l){if(!w("body"))return!1;i||G.Report.init({});var m={};if("object"==typeof r&&!Array.isArray(r)||"object"==typeof l&&!Array.isArray(l)){var f={};"object"==typeof r?f=r:"object"==typeof l&&(f=l),m=v(!0,i,{}),i=v(!0,i,f)}var d=i[e.toLocaleLowerCase("en")];"string"!=typeof a&&(a="Notiflix "+e),"string"!=typeof n&&(e===c.Success?n="\"Do not try to become a person of success but try to become a person of value.\" <br><br>- Albert Einstein":e===c.Failure?n="\"Failure is simply the opportunity to begin again, this time more intelligently.\" <br><br>- Henry Ford":e===c.Warning?n="\"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny.\" <br><br>- Mustafa Kemal Ataturk":e===c.Info&&(n="\"Knowledge rests not upon truth alone, but upon error also.\" <br><br>- Carl Gustav Jung")),"string"!=typeof o&&(o="Okay"),i.plainText&&(a=N(a),n=N(n),o=N(o)),i.plainText||(a.length>i.titleMaxLength&&(a="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the title content length is more than the \"titleMaxLength\" option.",o="Okay"),n.length>i.messageMaxLength&&(a="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the message content length is more than the \"messageMaxLength\" option.",o="Okay"),o.length>i.buttonMaxLength&&(a="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the button content length is more than the \"buttonMaxLength\" option.",o="Okay")),a.length>i.titleMaxLength&&(a=a.substring(0,i.titleMaxLength)+"..."),n.length>i.messageMaxLength&&(n=n.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonMaxLength&&(o=o.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var x=t.document.createElement("div");x.id=p.ID,x.className=i.className,x.style.zIndex=i.zindex,x.style.borderRadius=i.borderRadius,x.style.fontFamily="\""+i.fontFamily+"\", "+s,i.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.alignItems="center",x.style.justifyContent="center";var g="";i.backOverlay&&(g="<div class=\""+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+"\" style=\"background:"+(d.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+"ms;\"></div>");var b="";if(e===c.Success?b=C(i.svgSize,d.svgColor):e===c.Failure?b=z(i.svgSize,d.svgColor):e===c.Warning?b=S(i.svgSize,d.svgColor):e===c.Info&&(b=L(i.svgSize,d.svgColor)),x.innerHTML=g+"<div class=\""+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+"\" style=\"width:"+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms;\"><div style=\"width:"+i.svgSize+"; height:"+i.svgSize+";\" class=\""+i.className+"-icon\">"+b+"</div><h5 class=\""+i.className+"-title\" style=\"font-weight:500; font-size:"+i.titleFontSize+"; color:"+d.titleColor+";\">"+a+"</h5><p class=\""+i.className+"-message\" style=\"font-size:"+i.messageFontSize+"; color:"+d.messageColor+";\">"+n+"</p><a id=\"NXReportButton\" class=\""+i.className+"-button\" style=\"font-weight:500; font-size:"+i.buttonFontSize+"; background:"+d.buttonBackground+"; color:"+d.buttonColor+";\">"+o+"</a></div>",!t.document.getElementById(x.id)){t.document.body.appendChild(x);var u=t.document.getElementById(x.id),y=t.document.getElementById("NXReportButton");y.addEventListener("click",function(){"function"==typeof r&&r(),u.classList.add("nx-remove");var t=setTimeout(function(){null!==u.parentNode&&u.parentNode.removeChild(u),clearTimeout(t)},i.cssAnimationDuration)})}i=v(!0,i,m)},H=function(){return"[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*=\"-overlay\"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*=\"-content\"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*=\"-content\"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}"},O=function(e,i,n,o,r,l,m,c,p){if(!w("body"))return!1;a||G.Confirm.init({});var x=v(!0,a,{});"object"!=typeof p||Array.isArray(p)||(a=v(!0,a,p)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof n&&(n="Do you agree with me?"),"string"!=typeof r&&(r="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof m&&(m=void 0),"function"!=typeof c&&(c=void 0),a.plainText&&(i=N(i),n=N(n),r=N(r),l=N(l)),a.plainText||(i.length>a.titleMaxLength&&(i="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the title content length is more than \"titleMaxLength\" option.",r="Okay",l="..."),n.length>a.messageMaxLength&&(i="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the message content length is more than \"messageMaxLength\" option.",r="Okay",l="..."),(r.length||l.length)>a.buttonsMaxLength&&(i="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the buttons content length is more than \"buttonsMaxLength\" option.",r="Okay",l="...")),i.length>a.titleMaxLength&&(i=i.substring(0,a.titleMaxLength)+"..."),n.length>a.messageMaxLength&&(n=n.substring(0,a.messageMaxLength)+"..."),r.length>a.buttonsMaxLength&&(r=r.substring(0,a.buttonsMaxLength)+"..."),l.length>a.buttonsMaxLength&&(l=l.substring(0,a.buttonsMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var g=t.document.createElement("div");g.id=d.ID,g.className=a.className+(a.cssAnimation?" nx-with-animation nx-"+a.cssAnimationStyle:""),g.style.zIndex=a.zindex,g.style.padding=a.distance,a.rtl&&(g.setAttribute("dir","rtl"),g.classList.add("nx-rtl-on"));var b="string"==typeof a.position?a.position.trim():"center";g.classList.add("nx-position-"+b),g.style.fontFamily="\""+a.fontFamily+"\", "+s;var u="";a.backOverlay&&(u="<div class=\""+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+"\" style=\"background:"+a.backOverlayColor+";animation-duration:"+a.cssAnimationDuration+"ms;\"></div>");var y="";"function"==typeof m&&(y="<a id=\"NXConfirmButtonCancel\" class=\"nx-confirm-button-cancel\" style=\"color:"+a.cancelButtonColor+";background:"+a.cancelButtonBackground+";font-size:"+a.buttonsFontSize+";\">"+l+"</a>");var k="",h=null,C=void 0;if(e===f.Ask||e===f.Prompt){h=o||"";var z=e===f.Ask?Math.ceil(1.5*h.length):200<h.length?Math.ceil(1.5*h.length):250,S=e===f.Prompt?"value=\""+h+"\"":"";k="<div><input id=\"NXConfirmValidationInput\" type=\"text\" "+S+" maxlength=\""+z+"\" style=\"font-size:"+a.messageFontSize+";border-radius: "+a.borderRadius+";\" autocomplete=\"off\" spellcheck=\"false\" autocapitalize=\"none\" /></div>"}if(g.innerHTML=u+"<div class=\""+a.className+"-content\" style=\"width:"+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+"ms; border-radius: "+a.borderRadius+";\"><div class=\""+a.className+"-head\"><h5 style=\"color:"+a.titleColor+";font-size:"+a.titleFontSize+";\">"+i+"</h5><div style=\"color:"+a.messageColor+";font-size:"+a.messageFontSize+";\">"+n+k+"</div></div><div class=\""+a.className+"-buttons\"><a id=\"NXConfirmButtonOk\" class=\"nx-confirm-button-ok"+("function"==typeof m?"":" nx-full")+"\" style=\"color:"+a.okButtonColor+";background:"+a.okButtonBackground+";font-size:"+a.buttonsFontSize+";\">"+r+"</a>"+y+"</div></div>",!t.document.getElementById(g.id)){t.document.body.appendChild(g);var L=t.document.getElementById(g.id),W=t.document.getElementById("NXConfirmButtonOk"),I=t.document.getElementById("NXConfirmValidationInput");if(I&&(I.focus(),I.setSelectionRange(0,(I.value||"").length),I.addEventListener("keyup",function(t){var i=t.target.value;if(e===f.Ask&&i!==h)t.preventDefault(),I.classList.add("nx-validation-failure"),I.classList.remove("nx-validation-success");else{e===f.Ask&&(I.classList.remove("nx-validation-failure"),I.classList.add("nx-validation-success"));var a="enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode;a&&W.dispatchEvent(new Event("click"))}})),W.addEventListener("click",function(t){if(e===f.Ask&&h&&I){var i=(I.value||"").toString();if(i!==h)return I.focus(),I.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;I.classList.remove("nx-validation-failure")}"function"==typeof m&&(e===f.Prompt&&I&&(C=I.value||""),m(C)),L.classList.add("nx-remove");var n=setTimeout(function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(n))},a.cssAnimationDuration)}),"function"==typeof m){var R=t.document.getElementById("NXConfirmButtonCancel");R.addEventListener("click",function(){"function"==typeof c&&(e===f.Prompt&&I&&(C=I.value||""),c(C)),L.classList.add("nx-remove");var t=setTimeout(function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(t))},a.cssAnimationDuration)})}}a=v(!0,a,x)},P=function(){return"[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"] img,[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}"},U=function(e,i,a,o,r){if(!w("body"))return!1;n||G.Loading.init({});var l=v(!0,n,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof a&&!Array.isArray(a)){var m={};"object"==typeof i?m=i:"object"==typeof a&&(m=a),n=v(!0,n,m)}var c="";if("string"==typeof i&&0<i.length&&(c=i),o){c=c.length>n.messageMaxLength?N(c).toString().substring(0,n.messageMaxLength)+"...":N(c).toString();var p="";0<c.length&&(p="<p id=\""+n.messageID+"\" class=\"nx-loading-message\" style=\"color:"+n.messageColor+";font-size:"+n.messageFontSize+";\">"+c+"</p>"),n.cssAnimation||(n.cssAnimationDuration=0);var f="";if(e===x.Standard)f=W(n.svgSize,n.svgColor);else if(e===x.Hourglass)f=I(n.svgSize,n.svgColor);else if(e===x.Circle)f=R(n.svgSize,n.svgColor);else if(e===x.Arrows)f=A(n.svgSize,n.svgColor);else if(e===x.Dots)f=M(n.svgSize,n.svgColor);else if(e===x.Pulse)f=B(n.svgSize,n.svgColor);else if(e===x.Custom&&null!==n.customSvgCode&&null===n.customSvgUrl)f=n.customSvgCode||"";else if(e===x.Custom&&null!==n.customSvgUrl&&null===n.customSvgCode)f="<img class=\"nx-custom-loading-icon\" width=\""+n.svgSize+"\" height=\""+n.svgSize+"\" src=\""+n.customSvgUrl+"\" alt=\"Notiflix\">";else{if(e===x.Custom&&(null===n.customSvgUrl||null===n.customSvgCode))return y("You have to set a static SVG url to \"customSvgUrl\" option to use Loading Custom."),!1;f=X(n.svgSize,"#f8f8f8","#32c682")}var d=parseInt((n.svgSize||"").replace(/[^0-9]/g,"")),b=t.innerWidth,u=d>=b?b-40+"px":d+"px",k="<div style=\"width:"+u+"; height:"+u+";\" class=\""+n.className+"-icon"+(0<c.length?" nx-with-message":"")+"\">"+f+"</div>",h=t.document.createElement("div");if(h.id=g.ID,h.className=n.className+(n.cssAnimation?" nx-with-animation":"")+(n.clickToClose?" nx-click-to-close":""),h.style.zIndex=n.zindex,h.style.background=n.backgroundColor,h.style.animationDuration=n.cssAnimationDuration+"ms",h.style.fontFamily="\""+n.fontFamily+"\", "+s,h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center",n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.innerHTML=k+p,!t.document.getElementById(h.id)&&(t.document.body.appendChild(h),n.clickToClose)){var C=t.document.getElementById(h.id);C.addEventListener("click",function(){h.classList.add("nx-remove");var t=setTimeout(function(){null!==h.parentNode&&(h.parentNode.removeChild(h),clearTimeout(t))},n.cssAnimationDuration)})}}else if(t.document.getElementById(g.ID))var z=t.document.getElementById(g.ID),S=setTimeout(function(){z.classList.add("nx-remove");var t=setTimeout(function(){null!==z.parentNode&&(z.parentNode.removeChild(z),clearTimeout(t))},n.cssAnimationDuration);clearTimeout(S)},r);n=v(!0,n,l)},V=function(e){"string"!=typeof e&&(e="");var i=t.document.getElementById(g.ID);if(i)if(0<e.length){e=e.length>n.messageMaxLength?N(e).substring(0,n.messageMaxLength)+"...":N(e);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=e;else{var o=t.document.createElement("p");o.id=n.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=n.messageColor,o.style.fontSize=n.messageFontSize,o.innerHTML=e,i.appendChild(o)}}else y("Where is the new message?")},Q=function(){return"[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*=\"-icon\"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*=\"-icon\"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*=\"-message\"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}"},Y=0,q=function(e,i,a,n,r,l){var m;if(Array.isArray(a)){if(1>a.length)return y("Array of HTMLElements should contains at least one HTMLElement."),!1;m=a}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,a)){if(1>a.length)return y("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;m=Array.prototype.slice.call(a)}else{var c="string"!=typeof a||1>(a||"").length||1===(a||"").length&&("#"===(a||"")[0]||"."===(a||"")[0]);if(c)return y("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var p=t.document.querySelectorAll(a);if(1>p.length)return y("You called the \"Notiflix.Block...\" function with \""+a+"\" selector, but there is no such element(s) in the document."),!1;m=p}o||G.Block.init({});var f=v(!0,o,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var d={};"object"==typeof n?d=n:"object"==typeof r&&(d=r),o=v(!0,o,d)}var x="";"string"==typeof n&&0<n.length&&(x=n),o.cssAnimation||(o.cssAnimationDuration=0);var g=u.className;"string"==typeof o.className&&(g=o.className.trim());var h="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,C=(m||[]).length>=h?h:m.length,z="nx-block-temporary-position";if(e){for(var S,L=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],X=0;X<C;X++)if(S=m[X],S){if(-1<L.indexOf(S.tagName.toLocaleLowerCase("en")))break;var D=S.querySelectorAll("[id^="+u.ID+"]");if(1>D.length){var T="";i&&(i===b.Hourglass?T=I(o.svgSize,o.svgColor):i===b.Circle?T=R(o.svgSize,o.svgColor):i===b.Arrows?T=A(o.svgSize,o.svgColor):i===b.Dots?T=M(o.svgSize,o.svgColor):i===b.Pulse?T=B(o.svgSize,o.svgColor):T=W(o.svgSize,o.svgColor));var F="<span class=\""+g+"-icon\" style=\"width:"+o.svgSize+";height:"+o.svgSize+";\">"+T+"</span>",E="";0<x.length&&(x=x.length>o.messageMaxLength?N(x).substring(0,o.messageMaxLength)+"...":N(x),E="<span style=\"font-size:"+o.messageFontSize+";color:"+o.messageColor+";\" class=\""+g+"-message\">"+x+"</span>"),Y++;var j=t.document.createElement("div");j.id=u.ID+"-"+Y,j.className=g+(o.cssAnimation?" nx-with-animation":""),j.style.position=o.position,j.style.zIndex=o.zindex,j.style.background=o.backgroundColor,j.style.animationDuration=o.cssAnimationDuration+"ms",j.style.fontFamily="\""+o.fontFamily+"\", "+s,j.style.display="flex",j.style.flexWrap="wrap",j.style.flexDirection="column",j.style.alignItems="center",j.style.justifyContent="center",o.rtl&&(j.setAttribute("dir","rtl"),j.classList.add("nx-rtl-on")),j.innerHTML=F+E;var H=t.getComputedStyle(S).getPropertyValue("position"),O="string"==typeof H?H.toLocaleLowerCase("en"):"relative",P=Math.round(1.25*parseInt(o.svgSize))+40,U=S.offsetHeight||0,V="";P>U&&(V="min-height:"+P+"px;");var Q="";Q=S.getAttribute("id")?"#"+S.getAttribute("id"):S.classList[0]?"."+S.classList[0]:(S.tagName||"").toLocaleLowerCase("en");var q="",K=-1>=["absolute","relative","fixed","sticky"].indexOf(O);if(K||0<V.length){if(!w("head"))return!1;K&&(q="position:relative!important;");var $="<style id=\"Style-"+u.ID+"-"+Y+"\">"+Q+"."+z+"{"+q+V+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Z=J.createContextualFragment($);t.document.head.appendChild(Z),S.classList.add(z)}S.appendChild(j)}}}else var _=function(e){var i=setTimeout(function(){null!==e.parentNode&&e.parentNode.removeChild(e);var a=e.getAttribute("id"),n=t.document.getElementById("Style-"+a);n&&null!==n.parentNode&&n.parentNode.removeChild(n),clearTimeout(i)},o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)e=t[n],e&&(e.classList.add("nx-remove"),_(e));else"string"==typeof a?k("\"Notiflix.Block.remove();\" function called with \""+a+"\" selector, but this selector does not have a \"Block\" element to remove."):k("\"Notiflix.Block.remove();\" function called with \""+a+"\", but this \"Array<HTMLElement>\" or \"NodeListOf<HTMLElement>\" does not have a \"Block\" element to remove.")},et=function(t){var e=setTimeout(function(){t.classList.remove(z),clearTimeout(e)},o.cssAnimationDuration+300)},it=setTimeout(function(){for(var t,e=0;e<C;e++)t=m[e],t&&(et(t),D=t.querySelectorAll("[id^="+u.ID+"]"),tt(D));clearTimeout(it)},l);o=v(!0,o,f)},G={Notify:{init:function(t){e=v(!0,m,t),h(D,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=v(!0,e,t)):(y("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,i){F(l.Success,t,e,i)},failure:function(t,e,i){F(l.Failure,t,e,i)},warning:function(t,e,i){F(l.Warning,t,e,i)},info:function(t,e,i){F(l.Info,t,e,i)}},Report:{init:function(t){i=v(!0,p,t),h(E,"NotiflixReportInternalCSS")},merge:function(t){return i?void(i=v(!0,i,t)):(y("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,i,a,n){j(c.Success,t,e,i,a,n)},failure:function(t,e,i,a,n){j(c.Failure,t,e,i,a,n)},warning:function(t,e,i,a,n){j(c.Warning,t,e,i,a,n)},info:function(t,e,i,a,n){j(c.Info,t,e,i,a,n)}},Confirm:{init:function(t){a=v(!0,d,t),h(H,"NotiflixConfirmInternalCSS")},merge:function(t){return a?void(a=v(!0,a,t)):(y("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,i,a,n,o,r){O(f.Show,t,e,null,i,a,n,o,r)},ask:function(t,e,i,a,n,o,r,s){O(f.Ask,t,e,i,a,n,o,r,s)},prompt:function(t,e,i,a,n,o,r,s){O(f.Prompt,t,e,i,a,n,o,r,s)}},Loading:{init:function(t){n=v(!0,g,t),h(P,"NotiflixLoadingInternalCSS")},merge:function(t){return n?void(n=v(!0,n,t)):(y("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){U(x.Standard,t,e,!0,0)},hourglass:function(t,e){U(x.Hourglass,t,e,!0,0)},circle:function(t,e){U(x.Circle,t,e,!0,0)},arrows:function(t,e){U(x.Arrows,t,e,!0,0)},dots:function(t,e){U(x.Dots,t,e,!0,0)},pulse:function(t,e){U(x.Pulse,t,e,!0,0)},custom:function(t,e){U(x.Custom,t,e,!0,0)},notiflix:function(t,e){U(x.Notiflix,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),U(null,null,null,!1,t)},change:function(t){V(t)}},Block:{init:function(t){o=v(!0,u,t),h(Q,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=v(!0,o,t)):(y("You have to initialize the \"Notiflix.Block\" module before call Merge function."),!1)},standard:function(t,e,i){q(!0,b.Standard,t,e,i)},hourglass:function(t,e,i){q(!0,b.Hourglass,t,e,i)},circle:function(t,e,i){q(!0,b.Circle,t,e,i)},arrows:function(t,e,i){q(!0,b.Arrows,t,e,i)},dots:function(t,e,i){q(!0,b.Dots,t,e,i)},pulse:function(t,e,i){q(!0,b.Pulse,t,e,i)},remove:function(t,e){"number"!=typeof e&&(e=0),q(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?v(!0,t.Notiflix,{Notify:G.Notify,Report:G.Report,Confirm:G.Confirm,Loading:G.Loading,Block:G.Block}):{Notify:G.Notify,Report:G.Report,Confirm:G.Confirm,Loading:G.Loading,Block:G.Block}});
},{}],"js/02-timer.js":[function(require,module,exports) {
"use strict";

var _flatpickr = _interopRequireDefault(require("flatpickr"));

require("flatpickr/dist/flatpickr.min.css");

var _notiflix = _interopRequireDefault(require("notiflix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_notiflix.default.Notify.init({
  fontSize: '18px',
  position: 'center-top',
  width: '600px'
});

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]')
};
let selectedTime = 0;
let timerId = null;
disableBtnStart();
refs.startBtn.addEventListener('click', onClickBtnStart);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onChange() {
    updateClockFace('00', '00', '00', '00');
    clearInterval(timerId);
  },

  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      _notiflix.default.Notify.failure('ВНИМАНИЕ!!! Выберите дату и время в будущем периоде!');

      return disableBtnStart();
    }

    _notiflix.default.Notify.success('Верный выбор! Для запуска обратного отсчёта жми START');

    refs.startBtn.removeAttribute('disabled');
    selectedTime = selectedDates[0].getTime();
  }

};
(0, _flatpickr.default)(refs.input, options);

function disableBtnStart() {
  refs.startBtn.setAttribute('disabled', true);
}

function onClickBtnStart() {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;
    const {
      days,
      hours,
      minutes,
      seconds
    } = convertMs(deltaTime);
    updateClockFace(days, hours, minutes, seconds);

    if (days < 1 && hours < 1 && minutes < 1 && seconds < 1) {
      clearInterval(timerId);
    }
  }, 1000);
  disableBtnStart();
}

function updateClockFace(days, hours, minutes, seconds) {
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor(ms % day / hour);
  const minutes = Math.floor(ms % day % hour / minute);
  const seconds = Math.floor(ms % day % hour % minute / second);
  return {
    days,
    hours,
    minutes,
    seconds
  };
}
},{"flatpickr":"../node_modules/flatpickr/dist/esm/index.js","flatpickr/dist/flatpickr.min.css":"../node_modules/flatpickr/dist/flatpickr.min.css","notiflix":"../node_modules/notiflix/dist/notiflix-aio-3.2.4.min.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56116" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/02-timer.js"], null)
//# sourceMappingURL=/02-timer.6e0ec381.js.map