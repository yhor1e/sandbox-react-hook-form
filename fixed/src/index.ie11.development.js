'use strict';

var _fillInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/fill");

var _spliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/splice");

var _Date$now = require("@babel/runtime-corejs3/core-js-stable/date/now");

var _Object$values = require("@babel/runtime-corejs3/core-js-stable/object/values");

var _valuesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/values");

var _includesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/includes");

var _Set = require("@babel/runtime-corejs3/core-js-stable/set");

var _someInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/some");

var _flatInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/flat");

var _parseFloat = require("@babel/runtime-corejs3/core-js-stable/parse-float");

var _bindInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/bind");

var _everyInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/every");

var _findInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/find");

var _startsWithInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/starts-with");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _mapInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/map");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$entries = require("@babel/runtime-corejs3/core-js-stable/object/entries");

var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _concatInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Symbol$iterator = require("@babel/runtime-corejs3/core-js-stable/symbol/iterator");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _Promise = require("@babel/runtime-corejs3/core-js-stable/promise");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _indexOfInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/index-of");

var _Object$assign = require("@babel/runtime-corejs3/core-js-stable/object/assign");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var React = require('react');
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


var __assign = function () {
  __assign = _Object$assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && _indexOfInstanceProperty(e).call(e, p) < 0) t[p] = s[p];

  if (s != null && typeof _Object$getOwnPropertySymbols === "function") for (var i = 0, p = _Object$getOwnPropertySymbols(s); i < p.length; i++) {
    if (_indexOfInstanceProperty(e).call(e, p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = _Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof _Symbol === "function" && (g[_Symbol$iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __values(o) {
  var s = typeof _Symbol === "function" && _Symbol$iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof _Symbol === "function" && _getIteratorMethod(o);

  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = _concatInstanceProperty(ar).call(ar, __read(arguments[i]));

  return ar;
}

var isHTMLElement = function (value) {
  return value instanceof HTMLElement;
};

var EVENTS = {
  BLUR: 'blur',
  CHANGE: 'change',
  INPUT: 'input'
};
var VALIDATION_MODE = {
  onBlur: 'onBlur',
  onChange: 'onChange',
  onSubmit: 'onSubmit',
  all: 'all'
};
var VALUE = 'value';
var SELECT = 'select';
var UNDEFINED = 'undefined';
var INPUT_VALIDATION_RULES = {
  max: 'max',
  min: 'min',
  maxLength: 'maxLength',
  minLength: 'minLength',
  pattern: 'pattern',
  required: 'required',
  validate: 'validate'
};

function attachEventListeners(_a, shouldAttachChangeEvent, handleChange) {
  var ref = _a.ref;

  if (isHTMLElement(ref) && handleChange) {
    ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
    ref.addEventListener(EVENTS.BLUR, handleChange);
  }
}

var isNullOrUndefined = function (value) {
  return value == null;
};

var isArray = function (value) {
  return _Array$isArray(value);
};

var isObjectType = function (value) {
  return typeof value === 'object';
};

var isObject = function (value) {
  return !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);
};

var isKey = function (value) {
  return !isArray(value) && (/^\w*$/.test(value) || !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));
};

var stringToPath = function (input) {
  var result = [];
  input.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, function (match, mathNumber, mathQuote, originalString) {
    result.push(mathQuote ? originalString.replace(/\\(\\)?/g, '$1') : mathNumber || match);
  });
  return result;
};

function set(object, path, value) {
  var index = -1;
  var tempPath = isKey(path) ? [path] : stringToPath(path);
  var length = tempPath.length;
  var lastIndex = length - 1;

  while (++index < length) {
    var key = tempPath[index];
    var newValue = value;

    if (index !== lastIndex) {
      var objValue = object[key];
      newValue = isObject(objValue) || isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }

    object[key] = newValue;
    object = object[key];
  }

  return object;
}

var transformToNestObject = function (data) {
  var _context;

  return _reduceInstanceProperty(_context = _Object$entries(data)).call(_context, function (previous, _a) {
    var _b;

    var _c = __read(_a, 2),
        key = _c[0],
        value = _c[1];

    if (!isKey(key)) {
      set(previous, key, value);
      return previous;
    }

    return __assign(__assign({}, previous), (_b = {}, _b[key] = value, _b));
  }, {});
};

var isUndefined = function (val) {
  return val === undefined;
};

var unique = function (value) {
  return _filterInstanceProperty(value).call(value, Boolean);
};

var get = function (obj, path, defaultValue) {
  var _context2;

  var result = _reduceInstanceProperty(_context2 = unique(path.split(/[,[\].]+?/))).call(_context2, function (result, key) {
    return isNullOrUndefined(result) ? result : result[key];
  }, obj);

  return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};

var focusOnErrorField = function (fields, fieldErrors) {
  for (var key in fields) {
    if (get(fieldErrors, key)) {
      var field = fields[key];

      if (field) {
        if (field.ref.focus) {
          field.ref.focus();
          break;
        } else if (field.options) {
          field.options[0].ref.focus();
          break;
        }
      }
    }
  }
};

var removeAllEventListeners = function (ref, validateWithStateUpdate) {
  if (isHTMLElement(ref) && ref.removeEventListener) {
    ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
    ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
    ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
  }
};

var defaultReturn = {
  isValid: false,
  value: ''
};

var getRadioValue = function (options) {
  return isArray(options) ? _reduceInstanceProperty(options).call(options, function (previous, option) {
    return option && option.ref.checked ? {
      isValid: true,
      value: option.ref.value
    } : previous;
  }, defaultReturn) : defaultReturn;
};

var getMultipleSelectValue = function (options) {
  var _context3, _context4;

  return _mapInstanceProperty(_context3 = _filterInstanceProperty(_context4 = __spread(options)).call(_context4, function (_a) {
    var selected = _a.selected;
    return selected;
  })).call(_context3, function (_a) {
    var value = _a.value;
    return value;
  });
};

var isRadioInput = function (element) {
  return element.type === 'radio';
};

var isFileInput = function (element) {
  return element.type === 'file';
};

var isCheckBoxInput = function (element) {
  return element.type === 'checkbox';
};

var isMultipleSelect = function (element) {
  return element.type === SELECT + "-multiple";
};

var defaultResult = {
  value: false,
  isValid: false
};
var validResult = {
  value: true,
  isValid: true
};

var getCheckboxValue = function (options) {
  if (isArray(options)) {
    if (options.length > 1) {
      var _context5;

      var values = _mapInstanceProperty(_context5 = _filterInstanceProperty(options).call(options, function (option) {
        return option && option.ref.checked;
      })).call(_context5, function (_a) {
        var value = _a.ref.value;
        return value;
      });

      return {
        value: values,
        isValid: !!values.length
      };
    }

    var _a = options[0].ref,
        checked = _a.checked,
        value = _a.value,
        attributes = _a.attributes;
    return checked ? attributes && !isUndefined(attributes.value) ? isUndefined(value) || value === '' ? validResult : {
      value: value,
      isValid: true
    } : validResult : defaultResult;
  }

  return defaultResult;
};

function getFieldValue(fieldsRef, name, unmountFieldsStateRef) {
  var field = fieldsRef.current[name];

  if (field) {
    var value = field.ref.value,
        ref = field.ref;

    if (isFileInput(ref)) {
      return ref.files;
    }

    if (isRadioInput(ref)) {
      return getRadioValue(field.options).value;
    }

    if (isMultipleSelect(ref)) {
      return getMultipleSelectValue(ref.options);
    }

    if (isCheckBoxInput(ref)) {
      return getCheckboxValue(field.options).value;
    }

    return value;
  }

  if (unmountFieldsStateRef) {
    return unmountFieldsStateRef.current[name];
  }
}

function isDetached(element) {
  if (!element) {
    return true;
  }

  if (!(element instanceof HTMLElement) || element.nodeType === Node.DOCUMENT_NODE) {
    return false;
  }

  return isDetached(element.parentNode);
}

var isEmptyObject = function (value) {
  return isObject(value) && !_Object$keys(value).length;
};

function baseGet(object, updatePath) {
  var path = _sliceInstanceProperty(updatePath).call(updatePath, 0, -1);

  var length = path.length;
  var index = 0;

  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }

  return object;
}

function unset(object, path) {
  var updatePath = isKey(path) ? [path] : stringToPath(path);
  var childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
  var key = updatePath[updatePath.length - 1];
  var previousObjRef = undefined;

  if (childObject) {
    delete childObject[key];
  }

  for (var k = 0; k < _sliceInstanceProperty(updatePath).call(updatePath, 0, -1).length; k++) {
    var index = -1;
    var objectRef = undefined;

    var currentPaths = _sliceInstanceProperty(updatePath).call(updatePath, 0, -(k + 1));

    var currentPathsLength = currentPaths.length - 1;

    if (k > 0) {
      previousObjRef = object;
    }

    while (++index < currentPaths.length) {
      var item = currentPaths[index];
      objectRef = objectRef ? objectRef[item] : object[item];

      if (currentPathsLength === index && (isObject(objectRef) && isEmptyObject(objectRef) || isArray(objectRef) && !_filterInstanceProperty(objectRef).call(objectRef, function (data) {
        return isObject(data) && !isEmptyObject(data);
      }).length)) {
        previousObjRef ? delete previousObjRef[item] : delete object[item];
      }

      previousObjRef = objectRef;
    }
  }

  return object;
}

var isSameRef = function (fieldValue, ref) {
  return fieldValue && fieldValue.ref === ref;
};

function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, unmountFieldsStateRef, shouldUnregister, forceDelete) {
  var ref = field.ref,
      _a = field.ref,
      name = _a.name,
      type = _a.type,
      mutationWatcher = field.mutationWatcher;
  var fieldRef = fieldsRef.current[name];

  if (!shouldUnregister) {
    var value = getFieldValue(fieldsRef, name, unmountFieldsStateRef);

    if (!isUndefined(value)) {
      unmountFieldsStateRef.current[name] = value;
    }
  }

  if (!type) {
    delete fieldsRef.current[name];
    return;
  }

  if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
    var options_1 = fieldRef.options;

    if (isArray(options_1) && options_1.length) {
      var _context6;

      _forEachInstanceProperty(_context6 = unique(options_1)).call(_context6, function (option, index) {
        var ref = option.ref,
            mutationWatcher = option.mutationWatcher;

        if (ref && isDetached(ref) && isSameRef(option, ref) || forceDelete) {
          removeAllEventListeners(ref, handleChange);

          if (mutationWatcher) {
            mutationWatcher.disconnect();
          }

          unset(options_1, "[" + index + "]");
        }
      });

      if (options_1 && !unique(options_1).length) {
        delete fieldsRef.current[name];
      }
    } else {
      delete fieldsRef.current[name];
    }
  } else if (isDetached(ref) && isSameRef(fieldRef, ref) || forceDelete) {
    removeAllEventListeners(ref, handleChange);

    if (mutationWatcher) {
      mutationWatcher.disconnect();
    }

    delete fieldsRef.current[name];
  }
}

var isString = function (value) {
  return typeof value === 'string';
};

function deepMerge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  for (var key in source) {
    var targetValue = target[key];
    var sourceValue = source[key];

    if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }

  return target;
}

var getFieldsValues = function (fieldsRef, unmountFieldsStateRef, search) {
  var output = {};

  var _loop_1 = function (name_1) {
    if (isUndefined(search) || (isString(search) ? _startsWithInstanceProperty(name_1).call(name_1, search) : isArray(search) && _findInstanceProperty(search).call(search, function (data) {
      return _startsWithInstanceProperty(name_1).call(name_1, data);
    }))) {
      output[name_1] = getFieldValue(fieldsRef, name_1);
    }
  };

  for (var name_1 in fieldsRef.current) {
    _loop_1(name_1);
  }

  return deepMerge(transformToNestObject((unmountFieldsStateRef || {}).current || {}), transformToNestObject(output));
};

var isSameError = function (error, _a) {
  var _context7;

  var type = _a.type,
      _b = _a.types,
      types = _b === void 0 ? {} : _b,
      message = _a.message;
  return isObject(error) && error.type === type && error.message === message && _Object$keys(error.types || {}).length === _Object$keys(types).length && _everyInstanceProperty(_context7 = _Object$entries(error.types || {})).call(_context7, function (_a) {
    var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];

    return types[key] === value;
  });
};

function shouldRenderBasedOnError(_a) {
  var errors = _a.errors,
      name = _a.name,
      error = _a.error,
      validFields = _a.validFields,
      fieldsWithValidation = _a.fieldsWithValidation;
  var isFieldValid = isEmptyObject(error);
  var isFormValid = isEmptyObject(errors);
  var currentFieldError = get(error, name);
  var existFieldError = get(errors, name);

  if (isFieldValid && validFields.has(name)) {
    return false;
  }

  if (isFormValid !== isFieldValid || !isFormValid && !existFieldError || isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name)) {
    return true;
  }

  return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = function (value) {
  return value instanceof RegExp;
};

var isValueMessage = function (value) {
  return isObject(value) && !isRegex(value);
};

var getValueAndMessage = function (validationData) {
  return isValueMessage(validationData) ? validationData : {
    value: validationData,
    message: ''
  };
};

var isFunction = function (value) {
  return typeof value === 'function';
};

var isBoolean = function (value) {
  return typeof value === 'boolean';
};

var isMessage = function (value) {
  return isString(value) || isObject(value) && React.isValidElement(value);
};

function getValidateError(result, ref, type) {
  if (type === void 0) {
    type = 'validate';
  }

  if (isMessage(result) || isBoolean(result) && !result) {
    return {
      type: type,
      message: isMessage(result) ? result : '',
      ref: ref
    };
  }
}

var appendErrors = function (name, validateAllFieldCriteria, errors, type, message) {
  var _a;

  if (validateAllFieldCriteria) {
    var error = errors[name];
    return __assign(__assign({}, error), {
      types: __assign(__assign({}, error && error.types ? error.types : {}), (_a = {}, _a[type] = message || true, _a))
    });
  }

  return {};
};

var validateField = function (fieldsRef, validateAllFieldCriteria, _a, unmountFieldsStateRef) {
  var ref = _a.ref,
      _b = _a.ref,
      type = _b.type,
      value = _b.value,
      options = _a.options,
      required = _a.required,
      maxLength = _a.maxLength,
      minLength = _a.minLength,
      min = _a.min,
      max = _a.max,
      pattern = _a.pattern,
      validate = _a.validate;
  return __awaiter(void 0, void 0, void 0, function () {
    var fields, name, error, isRadio, isCheckBox, isRadioOrCheckbox, isEmpty, appendErrorsCurry, getMinMaxMessage, _c, requiredValue, requiredMessage, exceedMax, exceedMin, _d, maxValue, maxMessage, _e, minValue, minMessage, valueNumber, valueDate, _f, maxLengthValue, maxLengthMessage, _g, minLengthValue, minLengthMessage, inputLength, exceedMax, exceedMin, _h, patternValue, patternMessage, fieldValue, validateRef, result, validateError, validationResult, _j, _k, _l, key, validateFunction, validateResult, validateError, e_1_1;

    var e_1, _m;

    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          fields = fieldsRef.current;
          name = ref.name;
          error = {};
          isRadio = isRadioInput(ref);
          isCheckBox = isCheckBoxInput(ref);
          isRadioOrCheckbox = isRadio || isCheckBox;
          isEmpty = value === '';
          appendErrorsCurry = _bindInstanceProperty(appendErrors).call(appendErrors, null, name, validateAllFieldCriteria, error);

          getMinMaxMessage = function (exceedMax, maxLengthMessage, minLengthMessage, maxType, minType) {
            if (maxType === void 0) {
              maxType = INPUT_VALIDATION_RULES.maxLength;
            }

            if (minType === void 0) {
              minType = INPUT_VALIDATION_RULES.minLength;
            }

            var message = exceedMax ? maxLengthMessage : minLengthMessage;
            error[name] = __assign({
              type: exceedMax ? maxType : minType,
              message: message,
              ref: ref
            }, exceedMax ? appendErrorsCurry(maxType, message) : appendErrorsCurry(minType, message));
          };

          if (required && (!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value)) || isBoolean(value) && !value || isCheckBox && !getCheckboxValue(options).isValid || isRadio && !getRadioValue(options).isValid)) {
            _c = isMessage(required) ? {
              value: !!required,
              message: required
            } : getValueAndMessage(required), requiredValue = _c.value, requiredMessage = _c.message;

            if (requiredValue) {
              error[name] = __assign({
                type: INPUT_VALIDATION_RULES.required,
                message: requiredMessage,
                ref: isRadioOrCheckbox ? (fields[name].options || [])[0].ref : ref
              }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));

              if (!validateAllFieldCriteria) {
                return [2
                /*return*/
                , error];
              }
            }
          }

          if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
            exceedMax = void 0;
            exceedMin = void 0;
            _d = getValueAndMessage(max), maxValue = _d.value, maxMessage = _d.message;
            _e = getValueAndMessage(min), minValue = _e.value, minMessage = _e.message;

            if (type === 'number' || !type && !isNaN(value)) {
              valueNumber = ref.valueAsNumber || _parseFloat(value);

              if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
              }

              if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
              }
            } else {
              valueDate = ref.valueAsDate || new Date(value);

              if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
              }

              if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
              }
            }

            if (exceedMax || exceedMin) {
              getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);

              if (!validateAllFieldCriteria) {
                return [2
                /*return*/
                , error];
              }
            }
          }

          if (isString(value) && !isEmpty && (maxLength || minLength)) {
            _f = getValueAndMessage(maxLength), maxLengthValue = _f.value, maxLengthMessage = _f.message;
            _g = getValueAndMessage(minLength), minLengthValue = _g.value, minLengthMessage = _g.message;
            inputLength = value.toString().length;
            exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
            exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;

            if (exceedMax || exceedMin) {
              getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);

              if (!validateAllFieldCriteria) {
                return [2
                /*return*/
                , error];
              }
            }
          }

          if (pattern && !isEmpty) {
            _h = getValueAndMessage(pattern), patternValue = _h.value, patternMessage = _h.message;

            if (isRegex(patternValue) && !patternValue.test(value)) {
              error[name] = __assign({
                type: INPUT_VALIDATION_RULES.pattern,
                message: patternMessage,
                ref: ref
              }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));

              if (!validateAllFieldCriteria) {
                return [2
                /*return*/
                , error];
              }
            }
          }

          if (!validate) return [3
          /*break*/
          , 11];
          fieldValue = getFieldValue(fieldsRef, name, unmountFieldsStateRef);
          validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
          if (!isFunction(validate)) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , validate(fieldValue)];

        case 1:
          result = _o.sent();
          validateError = getValidateError(result, validateRef);

          if (validateError) {
            error[name] = __assign(__assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));

            if (!validateAllFieldCriteria) {
              return [2
              /*return*/
              , error];
            }
          }

          return [3
          /*break*/
          , 11];

        case 2:
          if (!isObject(validate)) return [3
          /*break*/
          , 11];
          validationResult = {};
          _o.label = 3;

        case 3:
          _o.trys.push([3, 8, 9, 10]);

          _j = __values(_Object$entries(validate)), _k = _j.next();
          _o.label = 4;

        case 4:
          if (!!_k.done) return [3
          /*break*/
          , 7];
          _l = __read(_k.value, 2), key = _l[0], validateFunction = _l[1];

          if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
            return [3
            /*break*/
            , 7];
          }

          return [4
          /*yield*/
          , validateFunction(fieldValue)];

        case 5:
          validateResult = _o.sent();
          validateError = getValidateError(validateResult, validateRef, key);

          if (validateError) {
            validationResult = __assign(__assign({}, validateError), appendErrorsCurry(key, validateError.message));

            if (validateAllFieldCriteria) {
              error[name] = validationResult;
            }
          }

          _o.label = 6;

        case 6:
          _k = _j.next();
          return [3
          /*break*/
          , 4];

        case 7:
          return [3
          /*break*/
          , 10];

        case 8:
          e_1_1 = _o.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 10];

        case 9:
          try {
            if (_k && !_k.done && (_m = _j.return)) _m.call(_j);
          } finally {
            if (e_1) throw e_1.error;
          }

          return [7
          /*endfinally*/
          ];

        case 10:
          if (!isEmptyObject(validationResult)) {
            error[name] = __assign({
              ref: validateRef
            }, validationResult);

            if (!validateAllFieldCriteria) {
              return [2
              /*return*/
              , error];
            }
          }

          _o.label = 11;

        case 11:
          return [2
          /*return*/
          , error];
      }
    });
  });
};

var isPrimitive = function (value) {
  return isNullOrUndefined(value) || !isObjectType(value);
};

var getPath = function (path, values) {
  var _context8, _context9;

  var getInnerPath = function (value, key, isObject) {
    var pathWithIndex = isObject ? path + "." + key : path + "[" + key + "]";
    return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
  };

  return _flatInstanceProperty(_context8 = _mapInstanceProperty(_context9 = _Object$entries(values)).call(_context9, function (_a) {
    var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];

    return getInnerPath(value, key, isObject(values));
  })).call(_context8, Infinity);
};

var assignWatchFields = function (fieldValues, fieldName, watchFields, inputValue, isSingleField) {
  var value;
  watchFields.add(fieldName);

  if (isEmptyObject(fieldValues)) {
    value = undefined;
  } else {
    value = get(fieldValues, fieldName);

    if (isObject(value) || isArray(value)) {
      var _context10;

      _forEachInstanceProperty(_context10 = getPath(fieldName, value)).call(_context10, function (name) {
        return watchFields.add(name);
      });
    }
  }

  return isUndefined(value) ? isSingleField ? inputValue : get(inputValue, fieldName) : value;
};

var skipValidation = function (_a) {
  var isOnBlur = _a.isOnBlur,
      isOnChange = _a.isOnChange,
      isReValidateOnBlur = _a.isReValidateOnBlur,
      isReValidateOnChange = _a.isReValidateOnChange,
      isBlurEvent = _a.isBlurEvent,
      isSubmitted = _a.isSubmitted,
      isOnAll = _a.isOnAll;

  if (isOnAll) {
    return false;
  } else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? isReValidateOnChange : isOnChange) {
    return isBlurEvent;
  }

  return true;
};

var getFieldArrayParentName = function (name) {
  return name.substring(0, _indexOfInstanceProperty(name).call(name, '['));
};

function getIsFieldsDifferent(referenceArray, differenceArray) {
  if (!isArray(referenceArray) || !isArray(differenceArray) || referenceArray.length !== differenceArray.length) {
    return true;
  }

  for (var i = 0; i < referenceArray.length; i++) {
    var dataA = referenceArray[i];
    var dataB = differenceArray[i];

    if (isUndefined(dataB) || _Object$keys(dataA).length !== _Object$keys(dataB).length) {
      return true;
    }

    for (var key in dataA) {
      if (dataA[key] !== dataB[key]) {
        return true;
      }
    }
  }

  return false;
}

var isMatchFieldArrayName = function (name, searchName) {
  return RegExp(("^" + searchName + "[\\d+]").replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
};

var isNameInFieldArray = function (names, name) {
  var _context11;

  return _someInstanceProperty(_context11 = __spread(names)).call(_context11, function (current) {
    return isMatchFieldArrayName(name, current);
  });
};

var isSelectInput = function (element) {
  return element.type === SELECT + "-one";
};

function onDomRemove(element, onDetachCallback) {
  var observer = new MutationObserver(function () {
    if (isDetached(element)) {
      observer.disconnect();
      onDetachCallback();
    }
  });
  observer.observe(window.document, {
    childList: true,
    subtree: true
  });
  return observer;
}

var modeChecker = function (mode) {
  return {
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all
  };
};

var isRadioOrCheckboxFunction = function (ref) {
  return isRadioInput(ref) || isCheckBoxInput(ref);
};

var isWindowUndefined = typeof window === UNDEFINED;
var isWeb = typeof document !== UNDEFINED && !isWindowUndefined && !isUndefined(window.HTMLElement);
var isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;

function useForm(_a) {
  var _this = this;

  var _b = _a === void 0 ? {} : _a,
      _c = _b.mode,
      mode = _c === void 0 ? VALIDATION_MODE.onSubmit : _c,
      _d = _b.reValidateMode,
      reValidateMode = _d === void 0 ? VALIDATION_MODE.onChange : _d,
      resolver = _b.resolver,
      context = _b.context,
      _e = _b.defaultValues,
      defaultValues = _e === void 0 ? {} : _e,
      _f = _b.shouldFocusError,
      shouldFocusError = _f === void 0 ? true : _f,
      _g = _b.shouldUnregister,
      shouldUnregister = _g === void 0 ? true : _g,
      criteriaMode = _b.criteriaMode;

  var fieldsRef = React.useRef({});
  var errorsRef = React.useRef({});
  var touchedFieldsRef = React.useRef({});
  var fieldArrayDefaultValues = React.useRef({});
  var dirtyFieldsRef = React.useRef({});
  var watchFieldsRef = React.useRef(new _Set());
  var watchFieldsHookRef = React.useRef({});
  var watchFieldsHookRenderRef = React.useRef({});
  var fieldsWithValidationRef = React.useRef(new _Set());
  var validFieldsRef = React.useRef(new _Set());
  var isValidRef = React.useRef(true);
  var defaultValuesRef = React.useRef(defaultValues);
  var defaultValuesAtRenderRef = React.useRef({});
  var isUnMount = React.useRef(false);
  var isWatchAllRef = React.useRef(false);
  var isSubmittedRef = React.useRef(false);
  var isDirtyRef = React.useRef(false);
  var submitCountRef = React.useRef(0);
  var isSubmittingRef = React.useRef(false);
  var handleChangeRef = React.useRef();
  var unmountFieldsStateRef = React.useRef({});
  var resetFieldArrayFunctionRef = React.useRef({});
  var contextRef = React.useRef(context);
  var resolverRef = React.useRef(resolver);
  var fieldArrayNamesRef = React.useRef(new _Set());

  var _h = __read(React.useState(), 2),
      render = _h[1];

  var modeRef = React.useRef(modeChecker(mode));
  var _j = modeRef.current,
      isOnSubmit = _j.isOnSubmit,
      isOnAll = _j.isOnAll;
  var isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
  var readFormStateRef = React.useRef({
    isDirty: !isProxyEnabled,
    dirtyFields: !isProxyEnabled,
    isSubmitted: isOnSubmit,
    submitCount: !isProxyEnabled,
    touched: !isProxyEnabled,
    isSubmitting: !isProxyEnabled,
    isValid: !isProxyEnabled
  });
  var _k = React.useRef(modeChecker(reValidateMode)).current,
      isReValidateOnBlur = _k.isOnBlur,
      isReValidateOnChange = _k.isOnChange;
  contextRef.current = context;
  resolverRef.current = resolver;
  var reRender = React.useCallback(function () {
    return !isUnMount.current && render({});
  }, []);
  var shouldRenderBaseOnError = React.useCallback(function (name, error, shouldRender) {
    if (shouldRender === void 0) {
      shouldRender = false;
    }

    var shouldReRender = shouldRender || shouldRenderBasedOnError({
      errors: errorsRef.current,
      error: error,
      name: name,
      validFields: validFieldsRef.current,
      fieldsWithValidation: fieldsWithValidationRef.current
    });
    var previousError = get(errorsRef.current, name);

    if (isEmptyObject(error)) {
      if (fieldsWithValidationRef.current.has(name) || resolverRef.current) {
        validFieldsRef.current.add(name);
        shouldReRender = shouldReRender || previousError;
      }

      errorsRef.current = unset(errorsRef.current, name);
    } else {
      validFieldsRef.current.delete(name);
      shouldReRender = shouldReRender || !previousError || !isSameError(previousError, error[name]);
      set(errorsRef.current, name, error[name]);
    }

    if (shouldReRender && !isNullOrUndefined(shouldRender)) {
      reRender();
      return true;
    }
  }, []);
  var setFieldValue = React.useCallback(function (_a, rawValue) {
    var ref = _a.ref,
        options = _a.options;
    var value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue) ? '' : rawValue;

    if (isRadioInput(ref) && options) {
      _forEachInstanceProperty(options).call(options, function (_a) {
        var radioRef = _a.ref;
        return radioRef.checked = radioRef.value === value;
      });
    } else if (isFileInput(ref) && !isString(value)) {
      ref.files = value;
    } else if (isMultipleSelect(ref)) {
      var _context12;

      _forEachInstanceProperty(_context12 = __spread(ref.options)).call(_context12, function (selectRef) {
        return selectRef.selected = _includesInstanceProperty(value).call(value, selectRef.value);
      });
    } else if (isCheckBoxInput(ref) && options) {
      options.length > 1 ? _forEachInstanceProperty(options).call(options, function (_a) {
        var checkboxRef = _a.ref;
        return checkboxRef.checked = _includesInstanceProperty(value).call(value, checkboxRef.value);
      }) : options[0].ref.checked = !!value;
    } else {
      ref.value = value;
    }
  }, []);
  var setDirty = React.useCallback(function (name) {
    var _a = readFormStateRef.current,
        isDirty = _a.isDirty,
        dirtyFields = _a.dirtyFields;

    if (!fieldsRef.current[name] || !isDirty && !dirtyFields) {
      return false;
    }

    var isFieldDirty = defaultValuesAtRenderRef.current[name] !== getFieldValue(fieldsRef, name, unmountFieldsStateRef);
    var isDirtyFieldExist = get(dirtyFieldsRef.current, name);
    var isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
    var previousIsDirty = isDirtyRef.current;

    if (isFieldDirty) {
      set(dirtyFieldsRef.current, name, true);
    } else {
      unset(dirtyFieldsRef.current, name);
    }

    isDirtyRef.current = isFieldArray && getIsFieldsDifferent(get(getValues(), getFieldArrayParentName(name)), get(defaultValuesRef.current, getFieldArrayParentName(name))) || !isEmptyObject(dirtyFieldsRef.current);
    return isDirty && previousIsDirty !== isDirtyRef.current || dirtyFields && isDirtyFieldExist !== get(dirtyFieldsRef.current, name);
  }, []);
  var executeValidation = React.useCallback(function (name, skipReRender) {
    return __awaiter(_this, void 0, void 0, function () {
      var error;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!fieldsRef.current[name]) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], unmountFieldsStateRef)];

          case 1:
            error = _a.sent();
            shouldRenderBaseOnError(name, error, skipReRender ? null : false);
            return [2
            /*return*/
            , isEmptyObject(error)];

          case 2:
            return [2
            /*return*/
            , false];
        }
      });
    });
  }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
  var executeSchemaOrResolverValidation = React.useCallback(function (payload) {
    return __awaiter(_this, void 0, void 0, function () {
      var errors, previousFormIsValid, isInputsValid, error;

      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria)];

          case 1:
            errors = _b.sent().errors;
            previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);

            if (isArray(payload)) {
              var _context13;

              isInputsValid = _everyInstanceProperty(_context13 = _mapInstanceProperty(payload).call(payload, function (name) {
                var error = get(errors, name);

                if (error) {
                  set(errorsRef.current, name, error);
                } else {
                  unset(errorsRef.current, name);
                }

                return !error;
              })).call(_context13, Boolean);
              reRender();
              return [2
              /*return*/
              , isInputsValid];
            } else {
              error = get(errors, payload);
              shouldRenderBaseOnError(payload, error ? (_a = {}, _a[payload] = error, _a) : {}, previousFormIsValid !== isValidRef.current);
              return [2
              /*return*/
              , !error];
            }

        }
      });
    });
  }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
  var trigger = React.useCallback(function (name) {
    return __awaiter(_this, void 0, void 0, function () {
      var fields, result;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            fields = name || _Object$keys(fieldsRef.current);

            if (resolverRef.current) {
              return [2
              /*return*/
              , executeSchemaOrResolverValidation(fields)];
            }

            if (!isArray(fields)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , _Promise.all(_mapInstanceProperty(fields).call(fields, function (data) {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , executeValidation(data, true)];

                    case 1:
                      return [2
                      /*return*/
                      , _a.sent()];
                  }
                });
              });
            }))];

          case 1:
            result = _a.sent();
            reRender();
            return [2
            /*return*/
            , _everyInstanceProperty(result).call(result, Boolean)];

          case 2:
            return [4
            /*yield*/
            , executeValidation(fields)];

          case 3:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  }, [executeSchemaOrResolverValidation, executeValidation]);
  var setInternalValues = React.useCallback(function (name, value, _a) {
    var _context14;

    var shouldDirty = _a.shouldDirty,
        shouldValidate = _a.shouldValidate;

    _forEachInstanceProperty(_context14 = getPath(name, value)).call(_context14, function (fieldName) {
      var data = {};
      var field = fieldsRef.current[fieldName];

      if (field) {
        set(data, name, value);
        setFieldValue(field, get(data, fieldName));

        if (shouldDirty) {
          setDirty(fieldName);
        }

        if (shouldValidate) {
          trigger(fieldName);
        }
      }
    });
  }, [trigger, setFieldValue, setDirty]);
  var setInternalValue = React.useCallback(function (name, value, config) {
    if (fieldsRef.current[name]) {
      setFieldValue(fieldsRef.current[name], value);
      return config.shouldDirty && setDirty(name);
    } else if (!isPrimitive(value)) {
      setInternalValues(name, value, config);
    }

    if (!shouldUnregister) {
      unmountFieldsStateRef.current[name] = value;
    }

    return true;
  }, [setDirty, setFieldValue, setInternalValues]);

  var isFieldWatched = function (name) {
    return isWatchAllRef.current || watchFieldsRef.current.has(name) || watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
  };

  var renderWatchedInputs = function (name, found) {
    if (found === void 0) {
      found = true;
    }

    if (!isEmptyObject(watchFieldsHookRef.current)) {
      for (var key in watchFieldsHookRef.current) {
        if (name === '' || watchFieldsHookRef.current[key].has(name) || watchFieldsHookRef.current[key].has(getFieldArrayParentName(name)) || !watchFieldsHookRef.current[key].size) {
          watchFieldsHookRenderRef.current[key]();
          found = false;
        }
      }
    }

    return found;
  };

  function setValue(name, value, config) {
    if (config === void 0) {
      config = {};
    }

    var shouldRender = setInternalValue(name, value, config) || isFieldWatched(name);
    renderWatchedInputs(name);

    if (shouldRender) {
      reRender();
    }

    if (config.shouldValidate) {
      trigger(name);
    }
  }

  handleChangeRef.current = handleChangeRef.current ? handleChangeRef.current : function (_a) {
    var type = _a.type,
        target = _a.target;
    return __awaiter(_this, void 0, void 0, function () {
      var name, field, error, isBlurEvent, shouldSkipValidation, shouldRender, errors, previousFormIsValid;

      var _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            name = target.name;
            field = fieldsRef.current[name];
            if (!field) return [3
            /*break*/
            , 5];
            isBlurEvent = type === EVENTS.BLUR;
            shouldSkipValidation = !isOnAll && skipValidation(__assign({
              isBlurEvent: isBlurEvent,
              isReValidateOnChange: isReValidateOnChange,
              isReValidateOnBlur: isReValidateOnBlur,
              isSubmitted: isSubmittedRef.current
            }, modeRef.current));
            shouldRender = setDirty(name) || isFieldWatched(name);

            if (isBlurEvent && !get(touchedFieldsRef.current, name) && readFormStateRef.current.touched) {
              set(touchedFieldsRef.current, name, true);
              shouldRender = true;
            }

            if (shouldSkipValidation) {
              renderWatchedInputs(name);
              return [2
              /*return*/
              , shouldRender && reRender()];
            }

            if (!resolver) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , resolver(getValues(), contextRef.current, isValidateAllFieldCriteria)];

          case 1:
            errors = _c.sent().errors;
            previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            error = get(errors, name) ? (_b = {}, _b[name] = get(errors, name), _b) : {};

            if (previousFormIsValid !== isValidRef.current) {
              shouldRender = true;
            }

            return [3
            /*break*/
            , 4];

          case 2:
            return [4
            /*yield*/
            , validateField(fieldsRef, isValidateAllFieldCriteria, field, unmountFieldsStateRef)];

          case 3:
            error = _c.sent();
            _c.label = 4;

          case 4:
            renderWatchedInputs(name);

            if (!shouldRenderBaseOnError(name, error) && shouldRender) {
              reRender();
            }

            _c.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  function getValues(payload) {
    if (isString(payload)) {
      return getFieldValue(fieldsRef, payload, unmountFieldsStateRef);
    }

    if (isArray(payload)) {
      return _reduceInstanceProperty(payload).call(payload, function (previous, name) {
        var _a;

        return __assign(__assign({}, previous), (_a = {}, _a[name] = getFieldValue(fieldsRef, name, unmountFieldsStateRef), _a));
      }, {});
    }

    return getFieldsValues(fieldsRef, unmountFieldsStateRef);
  }

  var validateResolver = React.useCallback(function (values) {
    if (values === void 0) {
      values = {};
    }

    return __awaiter(_this, void 0, void 0, function () {
      var errors, previousFormIsValid;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , resolverRef.current(__assign(__assign(__assign({}, defaultValuesRef.current), getValues()), values), contextRef.current, isValidateAllFieldCriteria)];

          case 1:
            errors = _a.sent().errors;
            previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);

            if (previousFormIsValid !== isValidRef.current) {
              reRender();
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  }, [isValidateAllFieldCriteria]);
  var removeFieldEventListener = React.useCallback(function (field, forceDelete) {
    return findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, unmountFieldsStateRef, shouldUnregister, forceDelete);
  }, [shouldUnregister]);
  var removeFieldEventListenerAndRef = React.useCallback(function (field, forceDelete) {
    if (field && (!isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) || forceDelete)) {
      removeFieldEventListener(field, forceDelete);

      if (shouldUnregister) {
        var _context15, _context16;

        _forEachInstanceProperty(_context15 = [errorsRef, touchedFieldsRef, dirtyFieldsRef, defaultValuesAtRenderRef]).call(_context15, function (data) {
          return unset(data.current, field.ref.name);
        });

        _forEachInstanceProperty(_context16 = [fieldsWithValidationRef, validFieldsRef]).call(_context16, function (data) {
          return data.current.delete(field.ref.name);
        });

        if (readFormStateRef.current.isValid || readFormStateRef.current.touched || readFormStateRef.current.isDirty) {
          isDirtyRef.current = !isEmptyObject(dirtyFieldsRef.current);
          reRender();

          if (resolverRef.current) {
            validateResolver();
          }
        }
      }
    }
  }, [validateResolver, removeFieldEventListener]);

  function clearErrors(name) {
    if (name) {
      var _context17;

      _forEachInstanceProperty(_context17 = isArray(name) ? name : [name]).call(_context17, function (inputName) {
        return unset(errorsRef.current, inputName);
      });
    } else {
      errorsRef.current = {};
    }

    reRender();
  }

  function setError(name, error) {
    isValidRef.current = false;
    set(errorsRef.current, name, __assign(__assign({}, error), {
      ref: (fieldsRef.current[name] || {}).ref
    }));
    reRender();
  }

  var watchInternal = React.useCallback(function (fieldNames, defaultValue, watchId) {
    var watchFields = watchId ? watchFieldsHookRef.current[watchId] : watchFieldsRef.current;
    var combinedDefaultValues = isUndefined(defaultValue) ? defaultValuesRef.current : defaultValue;
    var fieldValues = getFieldsValues(fieldsRef, unmountFieldsStateRef, fieldNames);

    if (isString(fieldNames)) {
      return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue) ? get(combinedDefaultValues, fieldNames) : defaultValue, true);
    }

    if (isArray(fieldNames)) {
      return _reduceInstanceProperty(fieldNames).call(fieldNames, function (previous, name) {
        var _a;

        return __assign(__assign({}, previous), (_a = {}, _a[name] = assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues), _a));
      }, {});
    }

    if (isUndefined(watchId)) {
      isWatchAllRef.current = true;
    }

    return transformToNestObject(!isEmptyObject(fieldValues) && fieldValues || combinedDefaultValues);
  }, []);

  function watch(fieldNames, defaultValue) {
    return watchInternal(fieldNames, defaultValue);
  }

  function unregister(name) {
    var _context18;

    _forEachInstanceProperty(_context18 = isArray(name) ? name : [name]).call(_context18, function (fieldName) {
      return removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
    });
  }

  function registerFieldRef(ref, validateOptions) {
    var _context19;

    if (validateOptions === void 0) {
      validateOptions = {};
    }

    {
      if (!ref.name) {
        return console.warn('📋 Field is missing `name` attribute:', ref);
      }

      if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) && !RegExp(("^" + ref.name.split(/\[\d+\]$/)[0] + "[\\d+].\\w+").replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(ref.name)) {
        return console.warn('📋 `name` prop should be in object shape: name="test[index].name". https://react-hook-form.com/api#useFieldArray');
      }
    }
    var name = ref.name,
        type = ref.type,
        value = ref.value;

    var fieldRefAndValidationOptions = __assign({
      ref: ref
    }, validateOptions);

    var fields = fieldsRef.current;
    var isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
    var field = fields[name];
    var isEmptyDefaultValue = true;
    var isFieldArray;
    var defaultValue;

    if (field && (isRadioOrCheckbox ? isArray(field.options) && _findInstanceProperty(_context19 = unique(field.options)).call(_context19, function (option) {
      return value === option.ref.value && option.ref === ref;
    }) : ref === field.ref)) {
      fields[name] = __assign(__assign({}, field), validateOptions);
      return;
    }

    if (type) {
      var mutationWatcher = onDomRemove(ref, function () {
        return removeFieldEventListenerAndRef(field);
      });
      field = isRadioOrCheckbox ? __assign({
        options: __spread(unique(field && field.options || []), [{
          ref: ref,
          mutationWatcher: mutationWatcher
        }]),
        ref: {
          type: type,
          name: name
        }
      }, validateOptions) : __assign(__assign({}, fieldRefAndValidationOptions), {
        mutationWatcher: mutationWatcher
      });
    } else {
      field = fieldRefAndValidationOptions;
    }

    fields[name] = field;
    var isEmptyUnmountFields = isUndefined(get(unmountFieldsStateRef.current, name));

    if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
      defaultValue = get(isEmptyUnmountFields ? defaultValuesRef.current : unmountFieldsStateRef.current, name);
      isEmptyDefaultValue = isUndefined(defaultValue);
      isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);

      if (!isEmptyDefaultValue && !isFieldArray) {
        setFieldValue(field, defaultValue);
      }
    }

    if (resolver && !isFieldArray && readFormStateRef.current.isValid) {
      validateResolver();
    } else if (!isEmptyObject(validateOptions)) {
      fieldsWithValidationRef.current.add(name);

      if (!isOnSubmit && readFormStateRef.current.isValid) {
        validateField(fieldsRef, isValidateAllFieldCriteria, field, unmountFieldsStateRef).then(function (error) {
          var previousFormIsValid = isValidRef.current;
          isEmptyObject(error) ? validFieldsRef.current.add(name) : isValidRef.current = false;

          if (previousFormIsValid !== isValidRef.current) {
            reRender();
          }
        });
      }
    }

    if (!defaultValuesAtRenderRef.current[name] && !(isFieldArray && isEmptyDefaultValue)) {
      var fieldValue = getFieldValue(fieldsRef, name, unmountFieldsStateRef);
      defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue ? isObject(fieldValue) ? __assign({}, fieldValue) : fieldValue : defaultValue;
    }

    if (type) {
      attachEventListeners(isRadioOrCheckbox && field.options ? field.options[field.options.length - 1] : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
    }
  }

  function register(refOrValidationOptions, rules) {
    if (!isWindowUndefined) {
      if (isString(refOrValidationOptions)) {
        registerFieldRef({
          name: refOrValidationOptions
        }, rules);
      } else if (isObject(refOrValidationOptions) && 'name' in refOrValidationOptions) {
        registerFieldRef(refOrValidationOptions, rules);
      } else {
        return function (ref) {
          return ref && registerFieldRef(ref, refOrValidationOptions);
        };
      }
    }
  }

  var handleSubmit = React.useCallback(function (callback) {
    return function (e) {
      return __awaiter(_this, void 0, void 0, function () {
        var fieldErrors, fieldValues, _a, errors, values, _b, _c, field, name_1, fieldError, e_1_1;

        var e_1, _d;

        return __generator(this, function (_e) {
          var _context20;

          switch (_e.label) {
            case 0:
              if (e && e.preventDefault) {
                e.preventDefault();
                e.persist();
              }

              fieldErrors = {};
              fieldValues = getFieldsValues(fieldsRef, unmountFieldsStateRef);

              if (readFormStateRef.current.isSubmitting) {
                isSubmittingRef.current = true;
                reRender();
              }

              _e.label = 1;

            case 1:
              _e.trys.push([1,, 14, 15]);

              if (!resolverRef.current) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria)];

            case 2:
              _a = _e.sent(), errors = _a.errors, values = _valuesInstanceProperty(_a);
              errorsRef.current = errors;
              fieldErrors = errors;
              fieldValues = values;
              return [3
              /*break*/
              , 10];

            case 3:
              _e.trys.push([3, 8, 9, 10]);

              _b = __values(_Object$values(fieldsRef.current)), _c = _b.next();
              _e.label = 4;

            case 4:
              if (!!_c.done) return [3
              /*break*/
              , 7];
              field = _c.value;
              if (!field) return [3
              /*break*/
              , 6];
              name_1 = field.ref.name;
              return [4
              /*yield*/
              , validateField(fieldsRef, isValidateAllFieldCriteria, field, unmountFieldsStateRef)];

            case 5:
              fieldError = _e.sent();

              if (fieldError[name_1]) {
                set(fieldErrors, name_1, fieldError[name_1]);
                validFieldsRef.current.delete(name_1);
              } else if (fieldsWithValidationRef.current.has(name_1)) {
                unset(errorsRef.current, name_1);
                validFieldsRef.current.add(name_1);
              }

              _e.label = 6;

            case 6:
              _c = _b.next();
              return [3
              /*break*/
              , 4];

            case 7:
              return [3
              /*break*/
              , 10];

            case 8:
              e_1_1 = _e.sent();
              e_1 = {
                error: e_1_1
              };
              return [3
              /*break*/
              , 10];

            case 9:
              try {
                if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }

              return [7
              /*endfinally*/
              ];

            case 10:
              if (!(isEmptyObject(fieldErrors) && _everyInstanceProperty(_context20 = _Object$keys(errorsRef.current)).call(_context20, function (name) {
                var _context21;

                return _includesInstanceProperty(_context21 = _Object$keys(fieldsRef.current)).call(_context21, name);
              }))) return [3
              /*break*/
              , 12];
              errorsRef.current = {};
              reRender();
              return [4
              /*yield*/
              , callback(fieldValues, e)];

            case 11:
              _e.sent();

              return [3
              /*break*/
              , 13];

            case 12:
              errorsRef.current = __assign(__assign({}, errorsRef.current), fieldErrors);

              if (shouldFocusError) {
                focusOnErrorField(fieldsRef.current, fieldErrors);
              }

              _e.label = 13;

            case 13:
              return [3
              /*break*/
              , 15];

            case 14:
              isSubmittedRef.current = true;
              isSubmittingRef.current = false;
              submitCountRef.current = submitCountRef.current + 1;
              reRender();
              return [7
              /*endfinally*/
              ];

            case 15:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
  }, [shouldFocusError, isValidateAllFieldCriteria]);

  var resetRefs = function (_a) {
    var errors = _a.errors,
        isDirty = _a.isDirty,
        isSubmitted = _a.isSubmitted,
        touched = _a.touched,
        isValid = _a.isValid,
        submitCount = _a.submitCount,
        dirtyFields = _a.dirtyFields;

    if (!errors) {
      errorsRef.current = {};
    }

    if (!touched) {
      touchedFieldsRef.current = {};
    }

    if (!isValid) {
      validFieldsRef.current = new _Set();
      fieldsWithValidationRef.current = new _Set();
      isValidRef.current = true;
    }

    if (!isDirty) {
      isDirtyRef.current = false;
    }

    if (!dirtyFields) {
      dirtyFieldsRef.current = {};
    }

    if (!isSubmitted) {
      isSubmittedRef.current = false;
    }

    if (!submitCount) {
      submitCountRef.current = 0;
    }

    defaultValuesAtRenderRef.current = {};
    fieldArrayDefaultValues.current = {};
    watchFieldsRef.current = new _Set();
    isWatchAllRef.current = false;
  };

  var reset = function (values, omitResetState) {
    var _context22;

    var e_2, _a;

    if (omitResetState === void 0) {
      omitResetState = {};
    }

    if (isWeb) {
      try {
        for (var _b = __values(_Object$values(fieldsRef.current)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var field = _c.value;

          if (field) {
            var ref = field.ref,
                options = field.options;
            var inputRef = isRadioOrCheckboxFunction(ref) && isArray(options) ? options[0].ref : ref;

            if (isHTMLElement(inputRef)) {
              try {
                inputRef.closest('form').reset();
                break;
              } catch (_d) {}
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    fieldsRef.current = {};

    if (values) {
      defaultValuesRef.current = values;
      renderWatchedInputs('');
    }

    unmountFieldsStateRef.current = shouldUnregister ? {} : values || {};

    _forEachInstanceProperty(_context22 = _Object$values(resetFieldArrayFunctionRef.current)).call(_context22, function (resetFieldArray) {
      return isFunction(resetFieldArray) && resetFieldArray();
    });

    resetRefs(omitResetState);
    reRender();
  };

  React.useEffect(function () {
    isUnMount.current = false;
    return function () {
      var _context23;

      isUnMount.current = true;
      fieldsRef.current && "development" === 'production' && _forEachInstanceProperty(_context23 = _Object$values(fieldsRef.current)).call(_context23, function (field) {
        return removeFieldEventListenerAndRef(field, true);
      });
    };
  }, [removeFieldEventListenerAndRef]);

  if (!resolver) {
    isValidRef.current = validFieldsRef.current.size >= fieldsWithValidationRef.current.size && isEmptyObject(errorsRef.current);
  }

  var formState = {
    dirtyFields: dirtyFieldsRef.current,
    isSubmitted: isSubmittedRef.current,
    submitCount: submitCountRef.current,
    touched: touchedFieldsRef.current,
    isDirty: isDirtyRef.current,
    isSubmitting: isSubmittingRef.current,
    isValid: isOnSubmit ? isSubmittedRef.current && isEmptyObject(errorsRef.current) : isValidRef.current
  };
  var commonProps = {
    trigger: trigger,
    setValue: React.useCallback(setValue, [reRender, setInternalValue, trigger]),
    getValues: React.useCallback(getValues, []),
    register: React.useCallback(register, [defaultValuesRef.current]),
    unregister: React.useCallback(unregister, []),
    formState: isProxyEnabled ? new Proxy(formState, {
      get: function (obj, prop) {
        if (prop === 'isValid' && isOnSubmit) {
          console.warn('📋 `formState.isValid` is applicable with `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
        }

        if (prop in obj) {
          readFormStateRef.current[prop] = true;
          return obj[prop];
        }

        return undefined;
      }
    }) : formState
  };

  var control = __assign(__assign({
    removeFieldEventListener: removeFieldEventListener,
    renderWatchedInputs: renderWatchedInputs,
    watchInternal: watchInternal,
    reRender: reRender,
    mode: modeRef.current,
    reValidateMode: {
      isReValidateOnBlur: isReValidateOnBlur,
      isReValidateOnChange: isReValidateOnChange
    },
    errorsRef: errorsRef,
    touchedFieldsRef: touchedFieldsRef,
    fieldsRef: fieldsRef,
    isWatchAllRef: isWatchAllRef,
    watchFieldsRef: watchFieldsRef,
    resetFieldArrayFunctionRef: resetFieldArrayFunctionRef,
    watchFieldsHookRef: watchFieldsHookRef,
    watchFieldsHookRenderRef: watchFieldsHookRenderRef,
    fieldArrayDefaultValues: fieldArrayDefaultValues,
    validFieldsRef: validFieldsRef,
    dirtyFieldsRef: dirtyFieldsRef,
    fieldsWithValidationRef: fieldsWithValidationRef,
    fieldArrayNamesRef: fieldArrayNamesRef,
    isDirtyRef: isDirtyRef,
    isSubmittedRef: isSubmittedRef,
    readFormStateRef: readFormStateRef,
    defaultValuesRef: defaultValuesRef,
    unmountFieldsStateRef: unmountFieldsStateRef
  }, resolver ? {
    validateSchemaIsValid: validateResolver
  } : {}), commonProps);

  return __assign({
    watch: watch,
    control: control,
    handleSubmit: handleSubmit,
    reset: React.useCallback(reset, []),
    clearErrors: React.useCallback(clearErrors, []),
    setError: React.useCallback(setError, []),
    errors: errorsRef.current
  }, commonProps);
}

var FormContext = React.createContext(null);
FormContext.displayName = 'RHFContext';

var useFormContext = function () {
  return React.useContext(FormContext);
};

var FormProvider = function (_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  return React.createElement(FormContext.Provider, {
    value: __assign({}, props)
  }, children);
};

var generateId = function () {
  var d = typeof performance === UNDEFINED ? _Date$now() : performance.now() * 1000;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16 + d) % 16 | 0;
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};

var removeAt = function (data, index) {
  return __spread(_sliceInstanceProperty(data).call(data, 0, index), _sliceInstanceProperty(data).call(data, index + 1));
};

function removeAtIndexes(data, index) {
  var k = -1;

  while (++k < data.length) {
    if (_indexOfInstanceProperty(index).call(index, k) >= 0) {
      delete data[k];
    }
  }

  return unique(data);
}

var removeArrayAt = function (data, index) {
  return isUndefined(index) ? [] : isArray(index) ? removeAtIndexes(data, index) : removeAt(data, index);
};

var moveArrayAt = function (data, from, to) {
  if (isArray(data)) {
    if (isUndefined(data[to])) {
      data[to] = undefined;
    }

    _spliceInstanceProperty(data).call(data, to, 0, _spliceInstanceProperty(data).call(data, from, 1)[0]);

    return data;
  }

  return [];
};

var swapArrayAt = function (data, indexA, indexB) {
  var temp = [data[indexB], data[indexA]];
  data[indexA] = temp[0];
  data[indexB] = temp[1];
};

function prepend(data, value) {
  return __spread(isArray(value) ? value : [value || undefined], data);
}

function insert(data, index, value) {
  return __spread(_sliceInstanceProperty(data).call(data, 0, index), isArray(value) ? value : [value || undefined], _sliceInstanceProperty(data).call(data, index));
}

var fillEmptyArray = function (value) {
  var _context24;

  return isArray(value) ? _fillInstanceProperty(_context24 = Array(value.length)).call(_context24, undefined) : undefined;
};

function mapValueToBoolean(value) {
  if (isObject(value)) {
    var object = {};

    for (var key in value) {
      object[key] = true;
    }

    return [object];
  }

  return [true];
}

var filterBooleanArray = function (value) {
  var _context25;

  return isArray(value) ? _flatInstanceProperty(_context25 = _mapInstanceProperty(value).call(value, mapValueToBoolean)).call(_context25) : mapValueToBoolean(value);
};

var appendId = function (value, keyName) {
  var _a;

  return __assign((_a = {}, _a[keyName] = generateId(), _a), isObject(value) ? value : {
    value: value
  });
};

var mapIds = function (data, keyName) {
  var _context26;

  return _mapInstanceProperty(_context26 = isArray(data) ? data : []).call(_context26, function (value) {
    return appendId(value, keyName);
  });
};

var useFieldArray = function (_a) {
  var control = _a.control,
      name = _a.name,
      _b = _a.keyName,
      keyName = _b === void 0 ? 'id' : _b;
  var methods = useFormContext();
  var focusIndexRef = React.useRef(-1);

  var _c = control || methods.control,
      isWatchAllRef = _c.isWatchAllRef,
      resetFieldArrayFunctionRef = _c.resetFieldArrayFunctionRef,
      fieldArrayNamesRef = _c.fieldArrayNamesRef,
      reRender = _c.reRender,
      fieldsRef = _c.fieldsRef,
      defaultValuesRef = _c.defaultValuesRef,
      removeFieldEventListener = _c.removeFieldEventListener,
      errorsRef = _c.errorsRef,
      dirtyFieldsRef = _c.dirtyFieldsRef,
      isDirtyRef = _c.isDirtyRef,
      touchedFieldsRef = _c.touchedFieldsRef,
      readFormStateRef = _c.readFormStateRef,
      watchFieldsRef = _c.watchFieldsRef,
      validFieldsRef = _c.validFieldsRef,
      fieldsWithValidationRef = _c.fieldsWithValidationRef,
      fieldArrayDefaultValues = _c.fieldArrayDefaultValues,
      validateSchemaIsValid = _c.validateSchemaIsValid,
      renderWatchedInputs = _c.renderWatchedInputs,
      getValues = _c.getValues;

  var shouldRender;

  var getDefaultValues = function () {
    return __spread(get(get(fieldArrayDefaultValues.current, getFieldArrayParentName(name)) ? fieldArrayDefaultValues.current : defaultValuesRef.current, name, []));
  };

  var memoizedDefaultValues = React.useRef(getDefaultValues());

  var _d = __read(React.useState(mapIds(memoizedDefaultValues.current, keyName)), 2),
      fields = _d[0],
      setField = _d[1];

  var allFields = React.useRef(fields);

  var getCurrentFieldsValues = function () {
    var _context27;

    return _mapInstanceProperty(_context27 = get(getValues() || {}, name, allFields.current)).call(_context27, function (item, index) {
      return __assign(__assign({}, allFields.current[index]), item);
    });
  };

  allFields.current = fields;
  fieldArrayNamesRef.current.add(name);
  {
    if (!control && !methods.control) {
      console.warn('📋 useFieldArray is missing `control` prop.');
    }

    if (!name) {
      console.warn('📋 useFieldArray is missing `name` attribute.');
    }
  }

  var appendValueWithKey = function (values) {
    return _mapInstanceProperty(values).call(values, function (value) {
      return appendId(value, keyName);
    });
  };

  var setFieldAndValidState = function (fieldsValues) {
    var _a;

    setField(fieldsValues);

    if (readFormStateRef.current.isValid && validateSchemaIsValid) {
      validateSchemaIsValid((_a = {}, _a[name] = fieldsValues, _a));
    }
  };

  var shouldRenderFieldArray = function (shouldRender) {
    if (readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty || readFormStateRef.current.isValid) {
      shouldRender = true;
    }

    renderWatchedInputs(name);
    shouldRender && !isWatchAllRef.current && reRender();
  };

  var resetFields = function (flagOrFields) {
    if (readFormStateRef.current.isDirty || readFormStateRef.current.dirtyFields) {
      isDirtyRef.current = isUndefined(flagOrFields) || getIsFieldsDifferent(_mapInstanceProperty(flagOrFields).call(flagOrFields, function (_a) {
        if (_a === void 0) {
          _a = {};
        }

        var _b = keyName,
            omitted = _a[_b],
            rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);

        return rest;
      }), get(defaultValuesRef.current, name, []));
    }

    for (var key in fieldsRef.current) {
      if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
        removeFieldEventListener(fieldsRef.current[key], true);
      }
    }
  };

  var append = function (value, shouldFocus) {
    if (shouldFocus === void 0) {
      shouldFocus = true;
    }

    shouldRender = false;
    setFieldAndValidState(__spread(allFields.current, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));

    if (readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty) {
      dirtyFieldsRef.current[name] = __spread(dirtyFieldsRef.current[name] || fillEmptyArray(_sliceInstanceProperty(fields).call(fields, 0, 1)), filterBooleanArray(value));
      isDirtyRef.current = true;
      shouldRender = true;
    }

    focusIndexRef.current = shouldFocus ? allFields.current.length : -1;
    shouldRenderFieldArray(shouldRender);
  };

  var prepend$1 = function (value, shouldFocus) {
    if (shouldFocus === void 0) {
      shouldFocus = true;
    }

    var emptyArray = fillEmptyArray(value);
    shouldRender = false;
    setFieldAndValidState(prepend(getCurrentFieldsValues(), isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
    resetFields();

    if (isArray(get(errorsRef.current, name))) {
      errorsRef.current[name] = prepend(get(errorsRef.current, name), emptyArray);
    }

    if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
      touchedFieldsRef.current[name] = prepend(touchedFieldsRef.current[name], emptyArray);
      shouldRender = true;
    }

    if (readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty) {
      dirtyFieldsRef.current[name] = prepend(dirtyFieldsRef.current[name] || [], filterBooleanArray(value));
      shouldRender = true;
    }

    shouldRenderFieldArray(shouldRender);
    focusIndexRef.current = shouldFocus ? 0 : -1;
  };

  var remove = function (index) {
    shouldRender = false;
    var fieldValues = getCurrentFieldsValues();
    setFieldAndValidState(removeArrayAt(fieldValues, index));
    resetFields(removeArrayAt(fieldValues, index));

    if (isArray(get(errorsRef.current, name))) {
      set(errorsRef.current, name, removeArrayAt(get(errorsRef.current, name), index));

      if (!unique(get(errorsRef.current, name, [])).length) {
        unset(errorsRef.current, name);
      }
    }

    if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
      touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
      shouldRender = true;
    }

    if ((readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty) && dirtyFieldsRef.current[name]) {
      dirtyFieldsRef.current[name] = removeArrayAt(dirtyFieldsRef.current[name], index);

      if (!dirtyFieldsRef.current[name].length) {
        delete dirtyFieldsRef.current[name];
      }

      shouldRender = true;
    }

    if (readFormStateRef.current.isValid && !validateSchemaIsValid) {
      var fieldIndex = -1;
      var isFound = false;
      var isIndexUndefined = isUndefined(index);

      while (fieldIndex++ < fields.length) {
        var _context28;

        var isLast = fieldIndex === fields.length - 1;
        var isCurrentIndex = _indexOfInstanceProperty(_context28 = isArray(index) ? index : [index]).call(_context28, fieldIndex) >= 0;

        if (isCurrentIndex || isIndexUndefined) {
          isFound = true;
        }

        if (!isFound) {
          continue;
        }

        for (var key in fields[fieldIndex]) {
          var currentFieldName = name + "[" + fieldIndex + "]." + key;

          if (isCurrentIndex || isLast || isIndexUndefined) {
            validFieldsRef.current.delete(currentFieldName);
            fieldsWithValidationRef.current.delete(currentFieldName);
          } else {
            var previousFieldName = name + "[" + (fieldIndex - 1) + "]." + key;

            if (validFieldsRef.current.has(currentFieldName)) {
              validFieldsRef.current.add(previousFieldName);
            }

            if (fieldsWithValidationRef.current.has(currentFieldName)) {
              fieldsWithValidationRef.current.add(previousFieldName);
            }
          }
        }
      }
    }

    shouldRenderFieldArray(shouldRender);
  };

  var insert$1 = function (index, value, shouldFocus) {
    if (shouldFocus === void 0) {
      shouldFocus = true;
    }

    shouldRender = false;
    var emptyArray = fillEmptyArray(value);
    var fieldValues = getCurrentFieldsValues();
    setFieldAndValidState(insert(fieldValues, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
    resetFields(insert(fieldValues, index));

    if (isArray(get(errorsRef.current, name))) {
      errorsRef.current[name] = insert(get(errorsRef.current, name), index, emptyArray);
    }

    if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
      touchedFieldsRef.current[name] = insert(touchedFieldsRef.current[name], index, emptyArray);
      shouldRender = true;
    }

    if ((readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty) && dirtyFieldsRef.current[name]) {
      dirtyFieldsRef.current[name] = insert(dirtyFieldsRef.current[name], index, filterBooleanArray(value));
      shouldRender = true;
    }

    shouldRenderFieldArray(shouldRender);
    focusIndexRef.current = shouldFocus ? index : -1;
  };

  var swap = function (indexA, indexB) {
    shouldRender = false;
    var fieldValues = getCurrentFieldsValues();
    swapArrayAt(fieldValues, indexA, indexB);
    resetFields(fieldValues);
    setFieldAndValidState(__spread(fieldValues));

    if (isArray(get(errorsRef.current, name))) {
      swapArrayAt(get(errorsRef.current, name), indexA, indexB);
    }

    if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
      swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
      shouldRender = true;
    }

    if ((readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty) && dirtyFieldsRef.current[name]) {
      swapArrayAt(dirtyFieldsRef.current[name], indexA, indexB);
      shouldRender = true;
    }

    shouldRenderFieldArray(shouldRender);
  };

  var move = function (from, to) {
    shouldRender = false;
    var fieldValues = getCurrentFieldsValues();
    moveArrayAt(fieldValues, from, to);
    resetFields(fieldValues);
    setFieldAndValidState(__spread(fieldValues));

    if (isArray(get(errorsRef.current, name))) {
      moveArrayAt(get(errorsRef.current, name), from, to);
    }

    if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
      moveArrayAt(touchedFieldsRef.current[name], from, to);
      shouldRender = true;
    }

    if ((readFormStateRef.current.dirtyFields || readFormStateRef.current.isDirty) && dirtyFieldsRef.current[name]) {
      moveArrayAt(dirtyFieldsRef.current[name], from, to);
      shouldRender = true;
    }

    shouldRenderFieldArray(shouldRender);
  };

  var reset = function () {
    resetFields();
    memoizedDefaultValues.current = getDefaultValues();
    setField(mapIds(memoizedDefaultValues.current, keyName));
  };

  React.useEffect(function () {
    var e_1, _a;

    var defaultValues = get(fieldArrayDefaultValues.current, name);

    if (defaultValues && fields.length < defaultValues.length) {
      defaultValues.pop();
      set(fieldArrayDefaultValues.current, name, defaultValues);
    }

    if (isWatchAllRef.current) {
      reRender();
    } else if (watchFieldsRef) {
      var shouldRenderUseWatch = true;

      try {
        for (var _b = __values(watchFieldsRef.current), _c = _b.next(); !_c.done; _c = _b.next()) {
          var watchField = _c.value;

          if (_startsWithInstanceProperty(watchField).call(watchField, name)) {
            reRender();
            shouldRenderUseWatch = false;
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      shouldRenderUseWatch && renderWatchedInputs(name);
    }

    if (focusIndexRef.current > -1) {
      for (var key in fieldsRef.current) {
        var field = fieldsRef.current[key];

        if (_startsWithInstanceProperty(key).call(key, name + "[" + focusIndexRef.current + "]") && field.ref.focus) {
          field.ref.focus();
          break;
        }
      }
    }

    focusIndexRef.current = -1;
  }, [fields, name, fieldArrayDefaultValues, reRender, fieldsRef, watchFieldsRef, isWatchAllRef]);
  React.useEffect(function () {
    var resetFunctions = resetFieldArrayFunctionRef.current;
    resetFunctions[name] = reset;
    set(fieldArrayDefaultValues.current, name, memoizedDefaultValues.current);
    return function () {
      resetFields();
      delete resetFunctions[name];
      fieldArrayNamesRef.current.delete(name);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    swap: React.useCallback(swap, [name]),
    move: React.useCallback(move, [name]),
    prepend: React.useCallback(prepend$1, [name]),
    append: React.useCallback(append, [name]),
    remove: React.useCallback(remove, [fields, name]),
    insert: React.useCallback(insert$1, [name]),
    fields: fields
  };
};

function useWatch(_a) {
  var control = _a.control,
      name = _a.name,
      defaultValue = _a.defaultValue;
  var methods = useFormContext();

  var _b = control || methods.control,
      watchFieldsHookRef = _b.watchFieldsHookRef,
      watchFieldsHookRenderRef = _b.watchFieldsHookRenderRef,
      watchInternal = _b.watchInternal,
      defaultValuesRef = _b.defaultValuesRef;

  var _c = __read(React.useState(isUndefined(defaultValue) ? isString(name) ? get(defaultValuesRef.current, name) : isArray(name) ? _reduceInstanceProperty(name).call(name, function (previous, inputName) {
    var _a;

    return __assign(__assign({}, previous), (_a = {}, _a[inputName] = get(defaultValuesRef.current, inputName), _a));
  }, {}) : defaultValuesRef.current : defaultValue), 2),
      value = _c[0],
      setValue = _c[1];

  var idRef = React.useRef();
  var defaultValueRef = React.useRef(defaultValue);
  var nameRef = React.useRef(name);
  var updateWatchValue = React.useCallback(function () {
    return setValue(watchInternal(nameRef.current, defaultValueRef.current, idRef.current));
  }, [setValue, watchInternal, defaultValueRef, nameRef, idRef]);

  if (!control && !methods.control) {
    console.warn('📋 useWatch is missing `control` prop.');
  }

  React.useEffect(function () {
    var id = idRef.current = generateId();
    var watchFieldsHookRender = watchFieldsHookRenderRef.current;
    var watchFieldsHook = watchFieldsHookRef.current;
    watchFieldsHook[id] = new _Set();
    watchFieldsHookRender[id] = updateWatchValue;
    watchInternal(nameRef.current, defaultValueRef.current, id);
    return function () {
      delete watchFieldsHook[id];
      delete watchFieldsHookRender[id];
    };
  }, [nameRef, updateWatchValue, watchFieldsHookRenderRef, watchFieldsHookRef, watchInternal, defaultValueRef]);
  return isUndefined(value) ? defaultValue : value;
}

var getInputValue = function (event) {
  return isPrimitive(event) || !isObject(event.target) || isObject(event.target) && !event.type ? event : isUndefined(event.target.value) ? event.target.checked : event.target.value;
};

var Controller = function (_a) {
  var name = _a.name,
      rules = _a.rules,
      as = _a.as,
      render = _a.render,
      defaultValue = _a.defaultValue,
      control = _a.control,
      onFocus = _a.onFocus,
      rest = __rest(_a, ["name", "rules", "as", "render", "defaultValue", "control", "onFocus"]);

  var methods = useFormContext();

  var _b = control || methods.control,
      defaultValuesRef = _b.defaultValuesRef,
      setValue = _b.setValue,
      register = _b.register,
      unregister = _b.unregister,
      trigger = _b.trigger,
      mode = _b.mode,
      _c = _b.reValidateMode,
      isReValidateOnBlur = _c.isReValidateOnBlur,
      isReValidateOnChange = _c.isReValidateOnChange,
      isSubmittedRef = _b.isSubmittedRef,
      touchedFieldsRef = _b.touchedFieldsRef,
      readFormStateRef = _b.readFormStateRef,
      reRender = _b.reRender,
      fieldsRef = _b.fieldsRef,
      fieldArrayNamesRef = _b.fieldArrayNamesRef,
      unmountFieldsStateRef = _b.unmountFieldsStateRef;

  var isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);

  var getInitialValue = function () {
    return !isUndefined(get(unmountFieldsStateRef.current, name)) && isNotFieldArray ? unmountFieldsStateRef.current[name] : isUndefined(defaultValue) ? get(defaultValuesRef.current, name) : defaultValue;
  };

  var _d = __read(React.useState(getInitialValue()), 2),
      value = _d[0],
      setInputStateValue = _d[1];

  var valueRef = React.useRef(value);
  var onFocusRef = React.useRef(onFocus);
  var isSubmitted = isSubmittedRef.current;
  {
    if (isUndefined(value)) {
      console.warn('📋 Controller `defaultValue` or useForm `defaultValues` is missing.');
    }

    if (as && render) {
      console.warn('📋 Should use either `as` or `render` prop.');
    }

    if (!control && !methods.control) {
      console.warn('📋 Controller is missing `control` prop.');
    }

    if (!isNotFieldArray && isUndefined(defaultValue)) {
      console.warn('📋 Controller is missing `defaultValue` prop when using `useFieldArray`.');
    }
  }

  var shouldValidate = function (isBlurEvent) {
    return !skipValidation(__assign({
      isBlurEvent: isBlurEvent,
      isReValidateOnBlur: isReValidateOnBlur,
      isReValidateOnChange: isReValidateOnChange,
      isSubmitted: isSubmitted
    }, mode));
  };

  var commonTask = function (_a) {
    var _b = __read(_a, 1),
        event = _b[0];

    var data = getInputValue(event);
    setInputStateValue(data);
    valueRef.current = data;
    return data;
  };

  var registerField = React.useCallback(function () {
    if (!name) {
      return console.warn('📋 Field is missing `name` prop.');
    }

    if (fieldsRef.current[name]) {
      fieldsRef.current[name] = __assign({
        ref: fieldsRef.current[name].ref
      }, rules);
    } else {
      register(_Object$defineProperty({
        name: name,
        focus: onFocusRef.current
      }, VALUE, {
        set: function (data) {
          setInputStateValue(data);
          valueRef.current = data;
        },
        get: function () {
          return valueRef.current;
        }
      }), rules);
    }
  }, [fieldsRef, rules, name, onFocusRef, register]);
  React.useEffect(function () {
    return function () {
      !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
    };
  }, [unregister, name, fieldArrayNamesRef]);
  React.useEffect(function () {
    registerField();
  }, [registerField]); // eslint-disable-next-line react-hooks/exhaustive-deps

  React.useEffect(function () {
    if (!fieldsRef.current[name]) {
      registerField();

      if (isNotFieldArray) {
        setInputStateValue(getInitialValue());
      }
    }
  });

  var onBlur = function () {
    if (readFormStateRef.current.touched && !get(touchedFieldsRef.current, name)) {
      set(touchedFieldsRef.current, name, true);
      reRender();
    }

    if (shouldValidate(true)) {
      trigger(name);
    }
  };

  var onChange = function () {
    var event = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      event[_i] = arguments[_i];
    }

    return setValue(name, commonTask(event), {
      shouldValidate: shouldValidate(),
      shouldDirty: true
    });
  };

  var props = __assign(__assign({}, rest), {
    onChange: onChange,
    onBlur: onBlur,
    name: name,
    value: value
  });

  return as ? React.isValidElement(as) ? React.cloneElement(as, props) : React.createElement(as, props) : render ? render({
    onChange: onChange,
    onBlur: onBlur,
    value: value
  }) : null;
};

exports.Controller = Controller;
exports.FormProvider = FormProvider;
exports.appendErrors = appendErrors;
exports.get = get;
exports.transformToNestObject = transformToNestObject;
exports.useFieldArray = useFieldArray;
exports.useForm = useForm;
exports.useFormContext = useFormContext;
exports.useWatch = useWatch;
//# sourceMappingURL=index.ie11.development.js.map
