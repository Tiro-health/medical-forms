import { _ as __assign, a as __spreadArray, c as createCommonjsModule, b as classnames, d as __rest } from './index-fcec37d7.js';
import * as React from 'react';
import React__default, { useCallback, useContext, useRef, useEffect, useMemo, useLayoutEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';

var isCallable = function (o) {
    return typeof o === "function";
};
var reduceSetStateAction = function (prevState, newState) {
    return isCallable(newState) ? newState(prevState) : newState;
};

var QRContext = React__default.createContext(null);
var useQuestionnaireResponse = function () {
    var qrContext = useContext(QRContext);
    if (!qrContext) {
        throw Error("Please use 'useQuestionnaireResponse' only inside '<QuestionnaireResponse>'.");
    }
    return qrContext;
};
var QuestionnaireResponse = function (_a) {
    var children = _a.children, qr = _a.questionnaireResponse, onQRChange = _a.onQuestionnaireResponseChange;
    return (React__default.createElement(QRContext.Provider, { value: [qr, onQRChange] }, children));
};
var QRItemContext = React__default.createContext(null);
var QuestionnaireResponseItem = function (_a) {
    var children = _a.children, linkId = _a.linkId, text = _a.text;
    var _b = useQuestionnaireResponse(), qr = _b[0], onQRChange = _b[1];
    var qrItemIndex = qr.item.findIndex(function (i) { return i.linkId === linkId; });
    var qrItem = (qrItemIndex > -1) ? qr.item[qrItemIndex] : undefined;
    if (!qrItem) {
        throw Error("Can't find QuestionnaireResponse item with linkId: " + linkId);
    }
    var onQRItemChange = useCallback(function (item) {
        return onQRChange(function (qr) { return (__assign(__assign({}, qr), { item: __spreadArray(__spreadArray(__spreadArray([], qr.item.slice(0, qrItemIndex)), [
                reduceSetStateAction(qrItem, item)
            ]), qr.item.slice(qrItemIndex + 1)) })); });
    }, [linkId, text, onQRChange]);
    var setAnswer = useCallback(function (answer) {
        onQRItemChange(function (qrItem) {
            if (!qrItem) {
                return;
            }
            return __assign(__assign({}, qrItem), { answer: reduceSetStateAction(qrItem.answer, answer) });
        });
    }, []);
    // return a children renderer with props: answer, appendAnswer, setAnswer, clearAnswers, 
    if (typeof children === "function") {
        return children({ answer: qrItem.answer, setAnswer: setAnswer });
    }
    return (React__default.createElement(QRItemContext.Provider, { value: [__assign(__assign({}, qrItem), { linkId: linkId, text: text }), onQRItemChange] }, children));
};

var QuantityContext = React__default.createContext(null);
var useQuantity = function (value) {
    var context = useContext(QuantityContext);
    var state = value !== null && value !== void 0 ? value : context;
    if (!state) {
        throw Error("Please use 'useQuantity' only inside a <Quantity/> element or pass it's value as an attribute.");
    }
    var quantity = state[0], onQuantityChange = state[1];
    var onValueChange = useCallback(function (value) { return onQuantityChange(function (q) { return (__assign(__assign({}, q), { value: reduceSetStateAction(q.value, value) })); }); }, [onQuantityChange]);
    var onUnitChange = useCallback(function (unit) { return onQuantityChange(function (q) { return (__assign(__assign({}, q), { unit: reduceSetStateAction(q.unit, unit) })); }); }, [onQuantityChange]);
    return __assign(__assign({}, quantity), { onValueChange: onValueChange, onUnitChange: onUnitChange });
};
var QuantityRenderChildren = function (_a) {
    var quantity = _a.quantity, onQuantityChange = _a.onQuantityChange, children = _a.children;
    var quantityChildrenProps = useQuantity([quantity, onQuantityChange]);
    return !!children ? children(quantityChildrenProps) : null;
};
var Quantity = function (_a) {
    var quantity = _a.quantity, onQuantityChange = _a.onQuantityChange, children = _a.children;
    if (typeof children == "function") {
        // pass quantity state handlers by rendering children
        return (React__default.createElement(QuantityRenderChildren, { quantity: quantity, onQuantityChange: onQuantityChange }, children));
    }
    return (
    // pass quanitty state handlers by context
    React__default.createElement(QuantityContext.Provider, { value: [quantity, onQuantityChange] }, children));
};

function SelectorIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
  }));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d$1=b$1?Symbol.for("react.portal"):60106,e$2=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$1=b$1?Symbol.for("react.concurrent_mode"):60111,n$2=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r$2=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$2:case g$1:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$2:case t$1:case r$2:case h$1:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l$1;var ConcurrentMode=m$1;var ContextConsumer$1=k$1;var ContextProvider$1=h$1;var Element$1=c$1;var ForwardRef$1=n$2;var Fragment$1=e$2;var Lazy$1=t$1;var Memo$1=r$2;var Portal$1=d$1;
var Profiler$1=g$1;var StrictMode$1=f$1;var Suspense$1=p$1;var isAsyncMode$1=function(a){return A$1(a)||z$1(a)===l$1};var isConcurrentMode$1=A$1;var isContextConsumer$1=function(a){return z$1(a)===k$1};var isContextProvider$1=function(a){return z$1(a)===h$1};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef$1=function(a){return z$1(a)===n$2};var isFragment$1=function(a){return z$1(a)===e$2};var isLazy$1=function(a){return z$1(a)===t$1};
var isMemo$1=function(a){return z$1(a)===r$2};var isPortal$1=function(a){return z$1(a)===d$1};var isProfiler$1=function(a){return z$1(a)===g$1};var isStrictMode$1=function(a){return z$1(a)===f$1};var isSuspense$1=function(a){return z$1(a)===p$1};
var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===e$2||a===m$1||a===g$1||a===f$1||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$2||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$2||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};var typeOf$1=z$1;

var reactIs_production_min$1 = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$1,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$1,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$1,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development$1 = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min$1;
} else {
  module.exports = reactIs_development$1;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e$1=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n$1=60115,p=60116,q=60121,r$1=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e$1=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n$1=x("react.memo");p=x("react.lazy");q=x("react.block");r$1=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e$1:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n$1:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n$1,F=c,G=f,H=e$1,I=l;var ContextConsumer=h;var ContextProvider=z;var Element=A;var ForwardRef=B;var Fragment=C;var Lazy=D;var Memo=E;var Portal=F;var Profiler=G;var StrictMode=H;
var Suspense=I;var isAsyncMode=function(){return !1};var isConcurrentMode=function(){return !1};var isContextConsumer=function(a){return y(a)===h};var isContextProvider=function(a){return y(a)===g};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};var isForwardRef=function(a){return y(a)===k};var isFragment=function(a){return y(a)===d};var isLazy=function(a){return y(a)===p};var isMemo=function(a){return y(a)===n$1};
var isPortal=function(a){return y(a)===c};var isProfiler=function(a){return y(a)===f};var isStrictMode=function(a){return y(a)===e$1};var isSuspense=function(a){return y(a)===l};var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e$1||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n$1||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r$1)?!0:!1};
var typeOf=y;

var reactIs_production_min = {
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

function t(t){return "object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return (!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return !!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return !1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}function computeScrollIntoView(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentElement)===f){s.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,a)&&s.push(p);}for(var m=o.visualViewport?o.visualViewport.width:innerWidth,g=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,E=W.right,M=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?M:y+b/2,I="center"===u?V+H/2:"end"===u?E:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&M<=g&&E<=m&&y>=R&&M<=Y&&V>=L&&E<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),q=parseInt(S.borderTopWidth,10),z=parseInt(S.borderRightWidth,10),A=parseInt(S.borderBottomWidth,10),F=0,G=0,J="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-z:0,K="offsetHeight"in k?k.offsetHeight-k.clientHeight-q-A:0;if(f===k)F="start"===d?x:"end"===d?x-g:"nearest"===d?r(v,v+g,g,q,A,v+x,v+x+b,b):x-g/2,G="start"===u?I:"center"===u?I-m/2:"end"===u?I-m:r(w,w+m,m,j,z,w+I,w+I+H,H),F=Math.max(0,F+v),G=Math.max(0,G+w);else {F="start"===d?x-R-q:"end"===d?x-Y+A+K:"nearest"===d?r(R,Y,D,q,A+K,x,x+b,b):x-(R+D/2)+K/2,G="start"===u?I-L-j:"center"===u?I-(L+O/2)+J/2:"end"===u?I-X+z+J:r(L,X,O,j,z+J,I,I+H,H);var N=k.scrollLeft,P=k.scrollTop;x+=P-(F=Math.max(0,Math.min(P+F,k.scrollHeight-D+K))),I+=N-(G=Math.max(0,Math.min(N+G,k.scrollWidth-O+J)));}C.push({el:k,top:F,left:G});}return C}

var idCounter = 0;

function noop() {}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */


function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }

  var actions = computeScrollIntoView(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @param {Window} environment The window context where downshift renders.
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */


function isOrContainsNode(parent, child, environment) {
  var result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}
/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */


function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
}
/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */


function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}

function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return function (node) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */


function generateId() {
  return String(idCounter++);
}
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */


function getA11yStatusMessage$1(_ref2) {
  var isOpen = _ref2.isOpen,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }

  return '';
}
/**
 * This will perform a shallow merge of the given state object
 * with the state coming from props
 * (for the controlled component scenario)
 * This is used in state updater functions so they're referencing
 * the right state regardless of where it comes from.
 *
 * @param {Object} state The state of the component/hook.
 * @param {Object} props The props that may contain controlled values.
 * @returns {Object} The merged controlled state.
 */


function getState(state, props) {
  return Object.keys(state).reduce(function (prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
/**
 * This determines whether a prop is a "controlled prop" meaning it is
 * state which is controlled by the outside of this component rather
 * than within this component.
 *
 * @param {Object} props The props that may contain controlled values.
 * @param {String} key the key to check
 * @return {Boolean} whether it is a controlled controlled prop
 */


function isControlledProp(props, key) {
  return props[key] !== undefined;
}
/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */


function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }

  return key;
}
/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index after the move.
 */


function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }

  if (itemCount === 0) {
    return -1;
  }

  var itemsLastIndex = itemCount - 1;

  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }

  var newIndex = baseIndex + moveAmount;

  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }

  var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);

  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }

  return nonDisabledNewIndex;
}
/**
 * Returns the next index in the list of an item that is not disabled.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
 */


function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  var currentElementNode = getItemNodeFromIndex(baseIndex);

  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex;
  }

  if (moveAmount > 0) {
    for (var index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  } else {
    for (var _index = baseIndex - 1; _index >= 0; _index--) {
      if (!getItemNodeFromIndex(_index).hasAttribute('disabled')) {
        return _index;
      }
    }
  }

  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }

  return -1;
}
/**
 * Checks if event target is within the downshift elements.
 *
 * @param {EventTarget} target Target to check.
 * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
 * @param {Window} environment The window context where downshift renders.
 * @param {boolean} checkActiveElement Whether to also check activeElement.
 *
 * @returns {boolean} Whether or not the target is within downshift elements.
 */


function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }

  return downshiftElements.some(function (contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment));
  });
} // eslint-disable-next-line import/no-mutable-exports


var validateControlledUnchanged = noop;
/* istanbul ignore next */

if (process.env.NODE_ENV !== 'production') {
  validateControlledUnchanged = function validateControlledUnchanged(state, prevProps, nextProps) {
    var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
    Object.keys(state).forEach(function (propKey) {
      if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
        // eslint-disable-next-line no-console
        console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
      } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
        // eslint-disable-next-line no-console
        console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
      }
    });
  };
}

var cleanupStatus = debounce(function (documentProp) {
  getStatusDiv(documentProp).textContent = '';
}, 500);
/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */

function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);

  if (!status) {
    return;
  }

  div.textContent = status;
  cleanupStatus(documentProp);
}
/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */


function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }

  var statusDiv = documentProp.getElementById('a11y-status-message');

  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}

process.env.NODE_ENV !== "production" ? '__autocomplete_unknown__' : 0;
process.env.NODE_ENV !== "production" ? '__autocomplete_mouseup__' : 1;
process.env.NODE_ENV !== "production" ? '__autocomplete_item_mouseenter__' : 2;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_arrow_up__' : 3;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_arrow_down__' : 4;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_escape__' : 5;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_enter__' : 6;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_home__' : 7;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_end__' : 8;
process.env.NODE_ENV !== "production" ? '__autocomplete_click_item__' : 9;
process.env.NODE_ENV !== "production" ? '__autocomplete_blur_input__' : 10;
process.env.NODE_ENV !== "production" ? '__autocomplete_change_input__' : 11;
process.env.NODE_ENV !== "production" ? '__autocomplete_keydown_space_button__' : 12;
process.env.NODE_ENV !== "production" ? '__autocomplete_click_button__' : 13;
process.env.NODE_ENV !== "production" ? '__autocomplete_blur_button__' : 14;
process.env.NODE_ENV !== "production" ? '__autocomplete_controlled_prop_updated_selected_item__' : 15;
process.env.NODE_ENV !== "production" ? '__autocomplete_touchend__' : 16;

process.env.NODE_ENV !== "production" ? {
  children: propTypes.func,
  defaultHighlightedIndex: propTypes.number,
  defaultIsOpen: propTypes.bool,
  initialHighlightedIndex: propTypes.number,
  initialSelectedItem: propTypes.any,
  initialInputValue: propTypes.string,
  initialIsOpen: propTypes.bool,
  getA11yStatusMessage: propTypes.func,
  itemToString: propTypes.func,
  onChange: propTypes.func,
  onSelect: propTypes.func,
  onStateChange: propTypes.func,
  onInputValueChange: propTypes.func,
  onUserAction: propTypes.func,
  onOuterClick: propTypes.func,
  selectedItemChanged: propTypes.func,
  stateReducer: propTypes.func,
  itemCount: propTypes.number,
  id: propTypes.string,
  environment: propTypes.shape({
    addEventListener: propTypes.func,
    removeEventListener: propTypes.func,
    document: propTypes.shape({
      getElementById: propTypes.func,
      activeElement: propTypes.any,
      body: propTypes.any
    })
  }),
  suppressRefError: propTypes.bool,
  scrollIntoView: propTypes.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components

  /* eslint-disable react/no-unused-prop-types */
  selectedItem: propTypes.any,
  isOpen: propTypes.bool,
  inputValue: propTypes.string,
  highlightedIndex: propTypes.number,
  labelId: propTypes.string,
  inputId: propTypes.string,
  menuId: propTypes.string,
  getItemId: propTypes.func
  /* eslint-enable react/no-unused-prop-types */

} : void 0;

var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};

function callOnChangeProps(action, state, newState) {
  var props = action.props,
      type = action.type;
  var changes = {};
  Object.keys(state).forEach(function (key) {
    invokeOnChangeHandler(key, action, state, newState);

    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });

  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(_extends({
      type: type
    }, changes));
  }
}

function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props,
      type = action.type;
  var handler = "on" + capitalizeString(key) + "Change";

  if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
    props[handler](_extends({
      type: type
    }, newState));
  }
}
/**
 * Default state reducer that returns the changes.
 *
 * @param {Object} s state.
 * @param {Object} a action with changes.
 * @returns {Object} changes.
 */


function stateReducer$1(s, a) {
  return a.changes;
}
/**
 * Returns a message to be added to aria-live region when item is selected.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11ySelectionMessage(selectionParameters) {
  var selectedItem = selectionParameters.selectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : '';
}
/**
 * Debounced call for updating the a11y message.
 */


var updateA11yStatus = debounce(function (getA11yMessage, document) {
  setStatus(getA11yMessage(), document);
}, 200); // istanbul ignore next

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? useLayoutEffect : useEffect;

function useElementIds(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "downshift-" + generateId() : _ref$id,
      labelId = _ref.labelId,
      menuId = _ref.menuId,
      getItemId = _ref.getItemId,
      toggleButtonId = _ref.toggleButtonId,
      inputId = _ref.inputId;
  var elementIdsRef = useRef({
    labelId: labelId || id + "-label",
    menuId: menuId || id + "-menu",
    getItemId: getItemId || function (index) {
      return id + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || id + "-toggle-button",
    inputId: inputId || id + "-input"
  });
  return elementIdsRef.current;
}

function getItemIndex(index, item, items) {
  if (index !== undefined) {
    return index;
  }

  if (items.length === 0) {
    return -1;
  }

  return items.indexOf(item);
}

function itemToString(item) {
  return item ? String(item) : '';
}

function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}

function useLatestRef(val) {
  var ref = useRef(val); // technically this is not "concurrent mode safe" because we're manipulating
  // the value during render (so it's not idempotent). However, the places this
  // hook is used is to support memoizing callbacks which will be called
  // *during* render, so we need the latest values *during* render.
  // If not for this, then we'd probably want to use useLayoutEffect instead.

  ref.current = val;
  return ref;
}
/**
 * Computes the controlled state using a the previous state, props,
 * two reducers, one from downshift and an optional one from the user.
 * Also calls the onChange handlers for state values that have changed.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */


function useEnhancedReducer(reducer, initialState, props) {
  var prevStateRef = useRef();
  var actionRef = useRef();
  var enhancedReducer = useCallback(function (state, action) {
    actionRef.current = action;
    state = getState(state, action.props);
    var changes = reducer(state, action);
    var newState = action.props.stateReducer(state, _extends({}, action, {
      changes: changes
    }));
    return newState;
  }, [reducer]);

  var _useReducer = useReducer(enhancedReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var propsRef = useLatestRef(props);
  var dispatchWithProps = useCallback(function (action) {
    return dispatch(_extends({
      props: propsRef.current
    }, action));
  }, [propsRef]);
  var action = actionRef.current;
  useEffect(function () {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }

    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}

var defaultProps$3 = {
  itemToString: itemToString,
  stateReducer: stateReducer$1,
  getA11ySelectionMessage: getA11ySelectionMessage,
  scrollIntoView: scrollIntoView,
  circularNavigation: false,
  environment: typeof window === 'undefined'
  /* istanbul ignore next (ssr) */
  ? {} : window
};

function getDefaultValue$1(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  var defaultPropKey = "default" + capitalizeString(propKey);

  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }

  return defaultStateValues[propKey];
}

function getInitialValue$1(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  if (propKey in props) {
    return props[propKey];
  }

  var initialPropKey = "initial" + capitalizeString(propKey);

  if (initialPropKey in props) {
    return props[initialPropKey];
  }

  return getDefaultValue$1(props, propKey, defaultStateValues);
}

function getInitialState$2(props) {
  var selectedItem = getInitialValue$1(props, 'selectedItem');
  var isOpen = getInitialValue$1(props, 'isOpen');
  var highlightedIndex = getInitialValue$1(props, 'highlightedIndex');
  var inputValue = getInitialValue$1(props, 'inputValue');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  var items = props.items,
      initialHighlightedIndex = props.initialHighlightedIndex,
      defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem,
      highlightedIndex = state.highlightedIndex;

  if (items.length === 0) {
    return -1;
  } // initialHighlightedIndex will give value to highlightedIndex on initial state only.


  if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }

  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }

  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }

    return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }

  if (offset === 0) {
    return -1;
  }

  return offset < 0 ? items.length - 1 : 0;
}
/**
 * Reuse the movement tracking of mouse and touch events.
 *
 * @param {boolean} isOpen Whether the dropdown is open or not.
 * @param {Array<Object>} downshiftElementRefs Downshift element refs to track movement (toggleButton, menu etc.)
 * @param {Object} environment Environment where component/hook exists.
 * @param {Function} handleBlur Handler on blur from mouse or touch.
 * @returns {Object} Ref containing whether mouseDown or touchMove event is happening
 */


function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  var mouseAndTouchTrackersRef = useRef({
    isMouseDown: false,
    isTouchMove: false
  });
  useEffect(function () {
    // The same strategy for checking if a click occurred inside or outside downsift
    // as in downshift.js.
    var onMouseDown = function onMouseDown() {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };

    var onMouseUp = function onMouseUp(event) {
      mouseAndTouchTrackersRef.current.isMouseDown = false;

      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment)) {
        handleBlur();
      }
    };

    var onTouchStart = function onTouchStart() {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };

    var onTouchMove = function onTouchMove() {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment, false)) {
        handleBlur();
      }
    };

    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);
    return function cleanup() {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}
/* istanbul ignore next */
// eslint-disable-next-line import/no-mutable-exports


var useGetterPropsCalledChecker = function useGetterPropsCalledChecker() {
  return noop;
};
/**
 * Custom hook that checks if getter props are called correctly.
 *
 * @param  {...any} propKeys Getter prop names to be handled.
 * @returns {Function} Setter function called inside getter props to set call information.
 */

/* istanbul ignore next */


if (process.env.NODE_ENV !== 'production') {
  useGetterPropsCalledChecker = function useGetterPropsCalledChecker() {
    var isInitialMountRef = useRef(true);

    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }

    var getterPropsCalledRef = useRef(propKeys.reduce(function (acc, propKey) {
      acc[propKey] = {};
      return acc;
    }, {}));
    useEffect(function () {
      Object.keys(getterPropsCalledRef.current).forEach(function (propKey) {
        var propCallInfo = getterPropsCalledRef.current[propKey];

        if (isInitialMountRef.current) {
          if (!Object.keys(propCallInfo).length) {
            // eslint-disable-next-line no-console
            console.error("downshift: You forgot to call the " + propKey + " getter function on your component / element.");
            return;
          }
        }

        var suppressRefError = propCallInfo.suppressRefError,
            refKey = propCallInfo.refKey,
            elementRef = propCallInfo.elementRef;

        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          // eslint-disable-next-line no-console
          console.error("downshift: The ref prop \"" + refKey + "\" from " + propKey + " was not applied correctly on your element.");
        }
      });
      isInitialMountRef.current = false;
    });
    var setGetterPropCallInfo = useCallback(function (propKey, suppressRefError, refKey, elementRef) {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError: suppressRefError,
        refKey: refKey,
        elementRef: elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  };
}

function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  var isInitialMount = _ref2.isInitialMount,
      highlightedIndex = _ref2.highlightedIndex,
      items = _ref2.items,
      environment = _ref2.environment,
      rest = _objectWithoutPropertiesLoose(_ref2, ["isInitialMount", "highlightedIndex", "items", "environment"]);

  // Sets a11y status message on changes in state.
  useEffect(function () {
    if (isInitialMount) {
      return;
    }

    updateA11yStatus(function () {
      return getA11yMessage(_extends({
        highlightedIndex: highlightedIndex,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length
      }, rest));
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray);
}

function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex,
      isOpen = _ref3.isOpen,
      itemRefs = _ref3.itemRefs,
      getItemNodeFromIndex = _ref3.getItemNodeFromIndex,
      menuElement = _ref3.menuElement,
      scrollIntoViewProp = _ref3.scrollIntoView;
  // used not to scroll on highlight by mouse.
  var shouldScrollRef = useRef(true); // Scroll on highlighted item if change comes from keyboard.

  useIsomorphicLayoutEffect(function () {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }

    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [highlightedIndex]);
  return shouldScrollRef;
} // eslint-disable-next-line import/no-mutable-exports


var useControlPropsValidator = noop;
/* istanbul ignore next */

if (process.env.NODE_ENV !== 'production') {
  useControlPropsValidator = function useControlPropsValidator(_ref4) {
    var isInitialMount = _ref4.isInitialMount,
        props = _ref4.props,
        state = _ref4.state;
    // used for checking when props are moving from controlled to uncontrolled.
    var prevPropsRef = useRef(props);
    useEffect(function () {
      if (isInitialMount) {
        return;
      }

      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  };
}

/* eslint-disable complexity */

function downshiftCommonReducer(state, action, stateChangeTypes) {
  var type = action.type,
      props = action.props;
  var changes;

  switch (type) {
    case stateChangeTypes.ItemMouseMove:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case stateChangeTypes.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;

    case stateChangeTypes.ToggleButtonClick:
    case stateChangeTypes.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case stateChangeTypes.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case stateChangeTypes.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;

    case stateChangeTypes.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case stateChangeTypes.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;

    case stateChangeTypes.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        isOpen: getDefaultValue$1(props, 'isOpen'),
        selectedItem: getDefaultValue$1(props, 'selectedItem'),
        inputValue: getDefaultValue$1(props, 'inputValue')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return _extends({}, state, changes);
}

({
  items: propTypes.array.isRequired,
  itemToString: propTypes.func,
  getA11yStatusMessage: propTypes.func,
  getA11ySelectionMessage: propTypes.func,
  circularNavigation: propTypes.bool,
  highlightedIndex: propTypes.number,
  defaultHighlightedIndex: propTypes.number,
  initialHighlightedIndex: propTypes.number,
  isOpen: propTypes.bool,
  defaultIsOpen: propTypes.bool,
  initialIsOpen: propTypes.bool,
  selectedItem: propTypes.any,
  initialSelectedItem: propTypes.any,
  defaultSelectedItem: propTypes.any,
  id: propTypes.string,
  labelId: propTypes.string,
  menuId: propTypes.string,
  getItemId: propTypes.func,
  toggleButtonId: propTypes.string,
  stateReducer: propTypes.func,
  onSelectedItemChange: propTypes.func,
  onHighlightedIndexChange: propTypes.func,
  onStateChange: propTypes.func,
  onIsOpenChange: propTypes.func,
  environment: propTypes.shape({
    addEventListener: propTypes.func,
    removeEventListener: propTypes.func,
    document: propTypes.shape({
      getElementById: propTypes.func,
      activeElement: propTypes.any,
      body: propTypes.any
    })
  })
});
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */

function getA11yStatusMessage(_ref) {
  var isOpen = _ref.isOpen,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.";
  }

  return '';
}

_extends({}, defaultProps$3, {
  getA11yStatusMessage: getA11yStatusMessage
}); // eslint-disable-next-line import/no-mutable-exports
/* istanbul ignore next */

if (process.env.NODE_ENV !== 'production') ;

process.env.NODE_ENV !== "production" ? '__menu_keydown_arrow_down__' : 0;
process.env.NODE_ENV !== "production" ? '__menu_keydown_arrow_up__' : 1;
process.env.NODE_ENV !== "production" ? '__menu_keydown_escape__' : 2;
process.env.NODE_ENV !== "production" ? '__menu_keydown_home__' : 3;
process.env.NODE_ENV !== "production" ? '__menu_keydown_end__' : 4;
process.env.NODE_ENV !== "production" ? '__menu_keydown_enter__' : 5;
process.env.NODE_ENV !== "production" ? '__menu_keydown_space_button__' : 6;
process.env.NODE_ENV !== "production" ? '__menu_keydown_character__' : 7;
process.env.NODE_ENV !== "production" ? '__menu_blur__' : 8;
process.env.NODE_ENV !== "production" ? '__menu_mouse_leave__' : 9;
process.env.NODE_ENV !== "production" ? '__item_mouse_move__' : 10;
process.env.NODE_ENV !== "production" ? '__item_click__' : 11;
process.env.NODE_ENV !== "production" ? '__togglebutton_click__' : 12;
process.env.NODE_ENV !== "production" ? '__togglebutton_keydown_arrow_down__' : 13;
process.env.NODE_ENV !== "production" ? '__togglebutton_keydown_arrow_up__' : 14;
process.env.NODE_ENV !== "production" ? '__togglebutton_keydown_character__' : 15;
process.env.NODE_ENV !== "production" ? '__function_toggle_menu__' : 16;
process.env.NODE_ENV !== "production" ? '__function_open_menu__' : 17;
process.env.NODE_ENV !== "production" ? '__function_close_menu__' : 18;
process.env.NODE_ENV !== "production" ? '__function_set_highlighted_index__' : 19;
process.env.NODE_ENV !== "production" ? '__function_select_item__' : 20;
process.env.NODE_ENV !== "production" ? '__function_set_input_value__' : 21;
process.env.NODE_ENV !== "production" ? '__function_reset__' : 22;

var InputKeyDownArrowDown = process.env.NODE_ENV !== "production" ? '__input_keydown_arrow_down__' : 0;
var InputKeyDownArrowUp = process.env.NODE_ENV !== "production" ? '__input_keydown_arrow_up__' : 1;
var InputKeyDownEscape = process.env.NODE_ENV !== "production" ? '__input_keydown_escape__' : 2;
var InputKeyDownHome = process.env.NODE_ENV !== "production" ? '__input_keydown_home__' : 3;
var InputKeyDownEnd = process.env.NODE_ENV !== "production" ? '__input_keydown_end__' : 4;
var InputKeyDownEnter = process.env.NODE_ENV !== "production" ? '__input_keydown_enter__' : 5;
var InputChange = process.env.NODE_ENV !== "production" ? '__input_change__' : 6;
var InputBlur = process.env.NODE_ENV !== "production" ? '__input_blur__' : 7;
var MenuMouseLeave = process.env.NODE_ENV !== "production" ? '__menu_mouse_leave__' : 8;
var ItemMouseMove = process.env.NODE_ENV !== "production" ? '__item_mouse_move__' : 9;
var ItemClick = process.env.NODE_ENV !== "production" ? '__item_click__' : 10;
var ToggleButtonClick = process.env.NODE_ENV !== "production" ? '__togglebutton_click__' : 11;
var FunctionToggleMenu = process.env.NODE_ENV !== "production" ? '__function_toggle_menu__' : 12;
var FunctionOpenMenu = process.env.NODE_ENV !== "production" ? '__function_open_menu__' : 13;
var FunctionCloseMenu = process.env.NODE_ENV !== "production" ? '__function_close_menu__' : 14;
var FunctionSetHighlightedIndex = process.env.NODE_ENV !== "production" ? '__function_set_highlighted_index__' : 15;
var FunctionSelectItem = process.env.NODE_ENV !== "production" ? '__function_select_item__' : 16;
var FunctionSetInputValue = process.env.NODE_ENV !== "production" ? '__function_set_input_value__' : 17;
var FunctionReset$1 = process.env.NODE_ENV !== "production" ? '__function_reset__' : 18;
var ControlledPropUpdatedSelectedItem = process.env.NODE_ENV !== "production" ? '__controlled_prop_updated_selected_item__' : 19;

var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: InputKeyDownArrowDown,
  InputKeyDownArrowUp: InputKeyDownArrowUp,
  InputKeyDownEscape: InputKeyDownEscape,
  InputKeyDownHome: InputKeyDownHome,
  InputKeyDownEnd: InputKeyDownEnd,
  InputKeyDownEnter: InputKeyDownEnter,
  InputChange: InputChange,
  InputBlur: InputBlur,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonClick: ToggleButtonClick,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionSetInputValue: FunctionSetInputValue,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
});

function getInitialState$1(props) {
  var initialState = getInitialState$2(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;

  if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
    inputValue = props.itemToString(selectedItem);
  }

  return _extends({}, initialState, {
    inputValue: inputValue
  });
}

var propTypes$1 = {
  items: propTypes.array.isRequired,
  itemToString: propTypes.func,
  getA11yStatusMessage: propTypes.func,
  getA11ySelectionMessage: propTypes.func,
  circularNavigation: propTypes.bool,
  highlightedIndex: propTypes.number,
  defaultHighlightedIndex: propTypes.number,
  initialHighlightedIndex: propTypes.number,
  isOpen: propTypes.bool,
  defaultIsOpen: propTypes.bool,
  initialIsOpen: propTypes.bool,
  selectedItem: propTypes.any,
  initialSelectedItem: propTypes.any,
  defaultSelectedItem: propTypes.any,
  inputValue: propTypes.string,
  defaultInputValue: propTypes.string,
  initialInputValue: propTypes.string,
  id: propTypes.string,
  labelId: propTypes.string,
  menuId: propTypes.string,
  getItemId: propTypes.func,
  inputId: propTypes.string,
  toggleButtonId: propTypes.string,
  stateReducer: propTypes.func,
  onSelectedItemChange: propTypes.func,
  onHighlightedIndexChange: propTypes.func,
  onStateChange: propTypes.func,
  onIsOpenChange: propTypes.func,
  onInputValueChange: propTypes.func,
  environment: propTypes.shape({
    addEventListener: propTypes.func,
    removeEventListener: propTypes.func,
    document: propTypes.shape({
      getElementById: propTypes.func,
      activeElement: propTypes.any,
      body: propTypes.any
    })
  })
};
/**
 * The useCombobox version of useControlledReducer, which also
 * checks if the controlled prop selectedItem changed between
 * renders. If so, it will also update inputValue with its
 * string equivalent. It uses the common useEnhancedReducer to
 * compute the rest of the state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */

function useControlledReducer(reducer, initialState, props) {
  var previousSelectedItemRef = useRef();

  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1]; // ToDo: if needed, make same approach as selectedItemChanged from Downshift.


  useEffect(function () {
    if (isControlledProp(props, 'selectedItem')) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }

      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
} // eslint-disable-next-line import/no-mutable-exports


var validatePropTypes$1 = noop;
/* istanbul ignore next */

if (process.env.NODE_ENV !== 'production') {
  validatePropTypes$1 = function validatePropTypes(options, caller) {
    propTypes.checkPropTypes(propTypes$1, options, 'prop', caller.name);
  };
}

var defaultProps$1 = _extends({}, defaultProps$3, {
  getA11yStatusMessage: getA11yStatusMessage$1,
  circularNavigation: true
});

/* eslint-disable complexity */

function downshiftUseComboboxReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;

    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }

      break;

    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }

      break;

    case InputKeyDownEnter:
      changes = _extends({}, state.isOpen && state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex],
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;

    case InputKeyDownEscape:
      changes = _extends({
        isOpen: false,
        highlightedIndex: -1
      }, !state.isOpen && {
        selectedItem: null,
        inputValue: ''
      });
      break;

    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case InputBlur:
      changes = _extends({
        isOpen: false,
        highlightedIndex: -1
      }, state.highlightedIndex >= 0 && action.selectItem && {
        selectedItem: props.items[state.highlightedIndex],
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;

    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        inputValue: action.inputValue
      };
      break;

    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;

    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;

    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }

  return _extends({}, state, changes);
}
/* eslint-enable complexity */

useCombobox.stateChangeTypes = stateChangeTypes$1;

function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  validatePropTypes$1(userProps, useCombobox); // Props defaults and destructuring.

  var props = _extends({}, defaultProps$1, userProps);

  var initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      getA11yStatusMessage = props.getA11yStatusMessage,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      itemToString = props.itemToString; // Initial state depending on controlled props.

  var initialState = getInitialState$1(props);

  var _useControlledReducer = useControlledReducer(downshiftUseComboboxReducer, initialState, props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue; // Element refs.

  var menuRef = useRef(null);
  var itemRefs = useRef({});
  var inputRef = useRef(null);
  var toggleButtonRef = useRef(null);
  var comboboxRef = useRef(null);
  var isInitialMountRef = useRef(true); // prevent id re-generation between renders.

  var elementIds = useElementIds(props); // used to keep track of how many items we had on previous cycle.

  var previousResultCountRef = useRef(); // utility callback to get item element.

  var latest = useLatestRef({
    state: state,
    props: props
  });
  var getItemNodeFromIndex = useCallback(function (index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]); // Effects.
  // Sets a11y status message on changes in state.

  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], _extends({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Sets a11y status message on changes in selectedItem.

  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], _extends({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Scroll on highlighted item if change comes from keyboard.

  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    itemRefs: itemRefs,
    scrollIntoView: scrollIntoView,
    getItemNodeFromIndex: getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  }); // Focus the input on first render if required.

  useEffect(function () {
    var focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;

    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  useEffect(function () {
    if (isInitialMountRef.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  }); // Add mouse/touch events to document.

  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, function () {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getInputProps', 'getComboboxProps', 'getMenuProps'); // Make initial ref false.

  useEffect(function () {
    isInitialMountRef.current = false;
  }, []); // Reset itemRefs on close.

  useEffect(function () {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  /* Event handler functions */

  var inputKeyDownHandlers = useMemo(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowDown,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowUp,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Home: function Home(event) {
        if (!latest.current.state.isOpen) {
          return;
        }

        event.preventDefault();
        dispatch({
          type: InputKeyDownHome,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      End: function End(event) {
        if (!latest.current.state.isOpen) {
          return;
        }

        event.preventDefault();
        dispatch({
          type: InputKeyDownEnd,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        var latestState = latest.current.state;

        if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
          dispatch({
            type: InputKeyDownEscape
          });
        }
      },
      Enter: function Enter(event) {
        var latestState = latest.current.state; // if closed or no highlighted index, do nothing.

        if (!latestState.isOpen || latestState.highlightedIndex < 0 || event.which === 229 // if IME composing, wait for next Enter keydown event.
        ) {
            return;
          }

        event.preventDefault();
        dispatch({
          type: InputKeyDownEnter,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      }
    };
  }, [dispatch, latest, getItemNodeFromIndex]); // Getter props.

  var getLabelProps = useCallback(function (labelProps) {
    return _extends({
      id: elementIds.labelId,
      htmlFor: elementIds.inputId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = useCallback(function (_temp, _temp2) {
    var _extends2;

    var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        ref = _ref.ref,
        rest = _objectWithoutPropertiesLoose(_ref, ["onMouseLeave", "refKey", "ref"]);

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIds.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function () {
      dispatch({
        type: MenuMouseLeave
      });
    }), _extends2), rest);
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  var getItemProps = useCallback(function (_temp3) {
    var _extends3, _ref4;

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        item = _ref3.item,
        index = _ref3.index,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onMouseMove = _ref3.onMouseMove,
        onClick = _ref3.onClick;
        _ref3.onPress;
        var rest = _objectWithoutPropertiesLoose(_ref3, ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"]);

    var _latest$current = latest.current,
        latestProps = _latest$current.props,
        latestState = _latest$current.state;
    var itemIndex = getItemIndex(index, item, latestProps.items);

    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }

    var onSelectKey = 'onClick';
    var customClickHandler = onClick;

    var itemHandleMouseMove = function itemHandleMouseMove() {
      if (index === latestState.highlightedIndex) {
        return;
      }

      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index: index
      });
    };

    var itemHandleClick = function itemHandleClick() {
      dispatch({
        type: ItemClick,
        index: index
      });

      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
      }
    }), _extends3.role = 'option', _extends3['aria-selected'] = "" + (itemIndex === latestState.highlightedIndex), _extends3.id = elementIds.getItemId(itemIndex), _extends3), !rest.disabled && (_ref4 = {
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove)
    }, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, itemHandleClick), _ref4), rest);
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  var getToggleButtonProps = useCallback(function (_temp4) {
    var _extends4;

    var _ref5 = _temp4 === void 0 ? {} : _temp4,
        onClick = _ref5.onClick;
        _ref5.onPress;
        var _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = _objectWithoutPropertiesLoose(_ref5, ["onClick", "onPress", "refKey", "ref"]);

    var toggleButtonHandleClick = function toggleButtonHandleClick() {
      dispatch({
        type: ToggleButtonClick
      });

      if (!latest.current.state.isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends4.id = elementIds.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && _extends({}, {
      onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
    }), rest);
  }, [dispatch, latest, elementIds]);
  var getInputProps = useCallback(function (_temp5, _temp6) {
    var _extends5;

    var _ref6 = _temp5 === void 0 ? {} : _temp5,
        onKeyDown = _ref6.onKeyDown,
        onChange = _ref6.onChange,
        onInput = _ref6.onInput,
        onBlur = _ref6.onBlur;
        _ref6.onChangeText;
        var _ref6$refKey = _ref6.refKey,
        refKey = _ref6$refKey === void 0 ? 'ref' : _ref6$refKey,
        ref = _ref6.ref,
        rest = _objectWithoutPropertiesLoose(_ref6, ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"]);

    var _ref7 = _temp6 === void 0 ? {} : _temp6,
        _ref7$suppressRefErro = _ref7.suppressRefError,
        suppressRefError = _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro;

    setGetterPropCallInfo('getInputProps', suppressRefError, refKey, inputRef);
    var latestState = latest.current.state;

    var inputHandleKeyDown = function inputHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };

    var inputHandleChange = function inputHandleChange(event) {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };

    var inputHandleBlur = function inputHandleBlur() {
      /* istanbul ignore else */
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    /* istanbul ignore next (preact) */


    var onChangeKey = 'onChange';
    var eventHandlers = {};

    if (!rest.disabled) {
      var _eventHandlers;

      eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers);
    }

    return _extends((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function (inputNode) {
      inputRef.current = inputNode;
    }), _extends5.id = elementIds.inputId, _extends5['aria-autocomplete'] = 'list', _extends5['aria-controls'] = elementIds.menuId, _extends5), latestState.isOpen && latestState.highlightedIndex > -1 && {
      'aria-activedescendant': elementIds.getItemId(latestState.highlightedIndex)
    }, {
      'aria-labelledby': elementIds.labelId,
      // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
      // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
      autoComplete: 'off',
      value: latestState.inputValue
    }, eventHandlers, rest);
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);
  var getComboboxProps = useCallback(function (_temp7, _temp8) {
    var _extends6;

    var _ref8 = _temp7 === void 0 ? {} : _temp7,
        _ref8$refKey = _ref8.refKey,
        refKey = _ref8$refKey === void 0 ? 'ref' : _ref8$refKey,
        ref = _ref8.ref,
        rest = _objectWithoutPropertiesLoose(_ref8, ["refKey", "ref"]);

    var _ref9 = _temp8 === void 0 ? {} : _temp8,
        _ref9$suppressRefErro = _ref9.suppressRefError,
        suppressRefError = _ref9$suppressRefErro === void 0 ? false : _ref9$suppressRefErro;

    setGetterPropCallInfo('getComboboxProps', suppressRefError, refKey, comboboxRef);
    return _extends((_extends6 = {}, _extends6[refKey] = handleRefs(ref, function (comboboxNode) {
      comboboxRef.current = comboboxNode;
    }), _extends6.role = 'combobox', _extends6['aria-haspopup'] = 'listbox', _extends6['aria-owns'] = elementIds.menuId, _extends6['aria-expanded'] = latest.current.state.isOpen, _extends6), rest);
  }, [latest, setGetterPropCallInfo, elementIds]); // returns

  var toggleMenu = useCallback(function () {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  var closeMenu = useCallback(function () {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  var openMenu = useCallback(function () {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  var setHighlightedIndex = useCallback(function (newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = useCallback(function (newSelectedItem) {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var setInputValue = useCallback(function (newInputValue) {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var reset = useCallback(function () {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps: getItemProps,
    getLabelProps: getLabelProps,
    getMenuProps: getMenuProps,
    getInputProps: getInputProps,
    getComboboxProps: getComboboxProps,
    getToggleButtonProps: getToggleButtonProps,
    // actions.
    toggleMenu: toggleMenu,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setHighlightedIndex: setHighlightedIndex,
    setInputValue: setInputValue,
    selectItem: selectItem,
    reset: reset,
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}
/**
 * Returns a message to be added to aria-live region when item is removed.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11yRemovalMessage(selectionParameters) {
  var removedSelectedItem = selectionParameters.removedSelectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return itemToStringLocal(removedSelectedItem) + " has been removed.";
}

({
  selectedItems: propTypes.array,
  initialSelectedItems: propTypes.array,
  defaultSelectedItems: propTypes.array,
  itemToString: propTypes.func,
  getA11yRemovalMessage: propTypes.func,
  stateReducer: propTypes.func,
  activeIndex: propTypes.number,
  initialActiveIndex: propTypes.number,
  defaultActiveIndex: propTypes.number,
  onActiveIndexChange: propTypes.func,
  onSelectedItemsChange: propTypes.func,
  keyNavigationNext: propTypes.string,
  keyNavigationPrevious: propTypes.string,
  environment: propTypes.shape({
    addEventListener: propTypes.func,
    removeEventListener: propTypes.func,
    document: propTypes.shape({
      getElementById: propTypes.func,
      activeElement: propTypes.any,
      body: propTypes.any
    })
  })
});
({
  itemToString: defaultProps$3.itemToString,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  getA11yRemovalMessage: getA11yRemovalMessage,
  keyNavigationNext: 'ArrowRight',
  keyNavigationPrevious: 'ArrowLeft'
}); // eslint-disable-next-line import/no-mutable-exports
/* istanbul ignore next */

if (process.env.NODE_ENV !== 'production') ;

process.env.NODE_ENV !== "production" ? '__selected_item_click__' : 0;
process.env.NODE_ENV !== "production" ? '__selected_item_keydown_delete__' : 1;
process.env.NODE_ENV !== "production" ? '__selected_item_keydown_backspace__' : 2;
process.env.NODE_ENV !== "production" ? '__selected_item_keydown_navigation_next__' : 3;
process.env.NODE_ENV !== "production" ? '__selected_item_keydown_navigation_previous__' : 4;
process.env.NODE_ENV !== "production" ? '__dropdown_keydown_navigation_previous__' : 5;
process.env.NODE_ENV !== "production" ? '__dropdown_keydown_backspace__' : 6;
process.env.NODE_ENV !== "production" ? '__dropdown_click__' : 7;
process.env.NODE_ENV !== "production" ? '__function_add_selected_item__' : 8;
process.env.NODE_ENV !== "production" ? '__function_remove_selected_item__' : 9;
process.env.NODE_ENV !== "production" ? '__function_set_selected_items__' : 10;
process.env.NODE_ENV !== "production" ? '__function_set_active_index__' : 11;
process.env.NODE_ENV !== "production" ? '__function_reset__' : 12;

function stateReducer(state, actionAndChanges) {
    var type = actionAndChanges.type, changes = actionAndChanges.changes;
    // returning an uppercased version of the item string.
    switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
            return __assign(__assign({}, changes), { 
                // but taking the change from default reducer and uppercasing it.
                inputValue: changes.inputValue });
        // also on selection.
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.InputBlur:
            return __assign(__assign({}, changes), (changes.selectedItem && {
                // we will show it uppercased.
                inputValue: changes.inputValue,
            }));
        default:
            return changes; // otherwise business as usual.
    }
}
var ChoiceInput = function (_a) {
    var _b, _c, _d, _e;
    var value = _a.value, name = _a.name, className = _a.className, initOptions = _a.options, placeholder = _a.placeholder, onValueChange = _a.onValueChange, containerRef = _a.containerRef;
    var _f = useState(initOptions), displayOptions = _f[0], setDisplayOptions = _f[1];
    var _g = useCombobox({
        items: initOptions,
        defaultSelectedItem: value,
        itemToString: function (item) { var _a; return (_a = item === null || item === void 0 ? void 0 : item.display) !== null && _a !== void 0 ? _a : ""; },
        stateReducer: stateReducer,
        onInputValueChange: function (_a) {
            var inputValue = _a.inputValue;
            if (!inputValue || inputValue.length === 0) {
                setDisplayOptions(initOptions);
                return;
            }
            setDisplayOptions(initOptions.filter(function (option) { var _a; return option.display.toLowerCase().startsWith((_a = inputValue === null || inputValue === void 0 ? void 0 : inputValue.toLowerCase()) !== null && _a !== void 0 ? _a : ""); }));
        },
        onSelectedItemChange: function (_a) {
            var selectedItem = _a.selectedItem;
            onValueChange && onValueChange(selectedItem !== null && selectedItem !== void 0 ? selectedItem : undefined);
            setDisplayOptions(initOptions);
        },
        defaultHighlightedIndex: 0,
        initialHighlightedIndex: 0,
    }), isOpen = _g.isOpen, openMenu = _g.openMenu, getToggleButtonProps = _g.getToggleButtonProps; _g.getLabelProps; var getMenuProps = _g.getMenuProps, getInputProps = _g.getInputProps, getComboboxProps = _g.getComboboxProps, highlightedIndex = _g.highlightedIndex, getItemProps = _g.getItemProps;
    var comboRef = useRef(null);
    var createPortal = containerRef && containerRef.current;
    var comboPosition = createPortal ? (_b = comboRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect() : undefined;
    var SuggestionList = (React__default.createElement("ul", __assign({}, getMenuProps(), { className: classnames("absolute w-full z-20 mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm", { invisible: !isOpen, visible: isOpen }), style: comboPosition }), isOpen &&
        displayOptions.map(function (item, index) { return (React__default.createElement("li", __assign({ className: classnames({
                "text-white bg-blue-600": highlightedIndex === index,
                "text-gray-900": highlightedIndex !== index,
            }, "cursor-pointer select-none relative py-2 pl-3 pr-9"), key: "" + item + index }, getItemProps({ item: item, index: index })), item.display)); })));
    return (React__default.createElement("div", { className: "relative w-full" },
        React__default.createElement("div", __assign({}, getComboboxProps(), { className: "w-full" }),
            React__default.createElement("input", __assign({ name: name }, getInputProps({
                onFocus: function () {
                    !isOpen && openMenu();
                }
            }), { placeholder: placeholder, size: Math.max((_d = (_c = value === null || value === void 0 ? void 0 : value.display) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0, (_e = placeholder === null || placeholder === void 0 ? void 0 : placeholder.length) !== null && _e !== void 0 ? _e : 0) + 1, type: "text", className: classnames("block w-full", className) })),
            React__default.createElement("button", __assign({ type: "button", tabIndex: -1, className: "absolute focus:z-20 inset-y-0 right-0 pr-3 flex items-center pointer-events-none" }, getToggleButtonProps(), { "aria-label": "toggle menu" }),
                React__default.createElement(SelectorIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }))),
        containerRef && containerRef.current ? ReactDOM.createPortal(SuggestionList, containerRef.current) : SuggestionList));
};

var initBaselineTumorFactors = function () { return ({
    resourceType: "QuestionnaireResponse",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    item: [
        { linkId: "DIAGDATE", answer: [{ valueDate: "23/03/1999" }] },
        { linkId: "PSA", answer: [{ valueQuantity: { unit: "ng/ml", value: undefined } }] },
        { linkId: "TNMCT", answer: [{ valueCoding: undefined, }] },
        { linkId: "TNMCN", answer: [{ valueCoding: undefined }] },
        { linkId: "BIOPCORE", answer: [{ valueQuantity: { value: undefined } }] },
        { linkId: "BIOPPOS", answer: [{ valueQuantity: { value: undefined } }] },
        { linkId: "BIOPINVOL", answer: [{ valueQuantity: { value: undefined, unit: "%" } }] },
        { linkId: "GLEASONBIOP1", answer: [{ valueCoding: undefined }] },
        { linkId: "GLEASONBIOP2", answer: [{ valueCoding: undefined }] },
    ]
}); };
var initPathologicalInformation = function () { return ({
    resourceType: "QuestionnaireResponse",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
    item: [
        { linkId: "TNMPT", answer: [{ valueCoding: undefined }] },
        { linkId: "TNMPN", answer: [{ valueCoding: undefined }] },
        { linkId: "MARGIN", answer: [{ valueInteger: undefined }] },
        { linkId: "MARGINFOC", answer: [{ valueInteger: undefined }] },
        { linkId: "GLEASONPATH1", answer: [{ valueCoding: undefined }] },
        { linkId: "GLEASONPATH2", answer: [{ valueCoding: undefined }] },
    ]
}); };
var initTreatmentVariables = function () { return ({
    resourceType: "QuestionnaireResponse",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1",
    item: [
        { linkId: "PRIMARYTX", answer: [{ valueCoding: undefined }] },
        { linkId: "PRWATCHDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRACTIVEDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRRADPROTXDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRNERVESPARE", answer: [{ valueInteger: undefined }] },
        { linkId: "PREBRTTOTDOSE", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "PREBRTDOSEPERFRACT", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "PREBRTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PREBRTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PREBRTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRBRACHYTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRBRACHYTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRBRACHYTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRBRACHYDOSERATE", answer: [{ valueInteger: undefined }] },
        { linkId: "PRADTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRADTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRADTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRIMARYTXFT", answer: [{ valueString: undefined }] },
        { linkId: "PRFOCTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRFOCTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRFOCTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRIMARYTXOTHER", answer: [{ valueString: undefined }] },
        { linkId: "PROTHERTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PROTHERTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PROTHERTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SALVAGETXINI", answer: [{ valueInteger: undefined }] },
        { linkId: "SALVAGETX", answer: [{ valueInteger: undefined }] },
        { linkId: "SALVAGETXOTHER", answer: [{ valueString: undefined }] },
        { linkId: "SVRADPROTXDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVNERVESPARE", answer: [{ valueInteger: undefined }] },
        { linkId: "SVEBRTTOTDOSE", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "SVEBRTDOSEPERFRACT", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "SVEBRTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVEBRTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVEBRTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVBRACHYTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVBRACHYTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVBRACHYTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVBRACHYDOSERATE", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "SVADTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVADTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVADTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVFOCTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVFOCTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVFOCTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVOTHERTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVOTHERTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVOTHERTXONGOING", answer: [{ valueInteger: undefined }] },
    ]
}); };
var Footer = function (_a) {
    var clear = _a.clear;
    return (React__default.createElement("div", { className: "pt-5" },
        React__default.createElement("div", { className: "flex justify-end" },
            React__default.createElement("button", { type: "button", onClick: clear, className: "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" }, "Clear"),
            React__default.createElement("button", { type: "submit", className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" }, "Save"))));
};
var Form = function (_a) {
    var children = _a.children, title = _a.title, hideTitle = _a.hideTitle, handleSubmit = _a.handleSubmit, handleClear = _a.handleClear;
    return (React__default.createElement("form", { className: "space-y-8 divide-y divide-gray-200", onSubmit: handleSubmit },
        React__default.createElement("div", { className: "space-y-8 divide-y divide-gray-200 sm:space-y-5" },
            React__default.createElement("div", null,
                !hideTitle && (React__default.createElement("div", null,
                    React__default.createElement("h3", { className: "text-lg leading-6 font-medium text-gray-900" }, title),
                    React__default.createElement("p", { className: "mt-1 max-w-2xl text-sm text-gray-500" }))),
                React__default.createElement("div", { className: "mt-6 sm:mt-5 space-y-6 sm:space-y-5" }, React__default.Children.map(children, function (c) { return (React__default.createElement("div", { className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5" }, c)); })))),
        React__default.createElement(Footer, { clear: handleClear })));
};
var BaselineTumorFactors = function (_a) {
    _a.author; _a.subject; var onSubmit = _a.onSubmit; _a.hideTitle; var initQuestionnaireResponse = _a.initQuestionnaireResponse;
    var cTOptions = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT0", display: "cT0" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1", display: "cT1" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1a", display: "cT1a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1b", display: "cT1b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1c", display: "cT1c" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2", display: "cT2" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2a", display: "cT2a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2b", display: "cT2b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2c", display: "cT2c" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT3", display: "cT3" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT3a", display: "cT3a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT3b", display: "cT3b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT4", display: "cT4" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cTX", display: "cTX" },
    ];
    var cNOptions = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMCN/cN0", display: "cN0" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCN/cN1", display: "cN1" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCN/cNX", display: "cNX" },
    ];
    var _b = useState(initQuestionnaireResponse !== null && initQuestionnaireResponse !== void 0 ? initQuestionnaireResponse : initBaselineTumorFactors), qr = _b[0], setQR = _b[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        onSubmit && onSubmit(qr);
    };
    return (React__default.createElement(QuestionnaireResponse, { questionnaireResponse: qr, onQuestionnaireResponseChange: setQR },
        React__default.createElement(Form, { title: "Baseline Tumor Factors", handleSubmit: handleSubmit, handleClear: function () { return setQR(initBaselineTumorFactors); } },
            React__default.createElement(QuestionnaireResponseItem, { linkId: "DIAGDATE" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "DIAGDATE", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Histological diagnosis date"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement("div", { className: "mt-1 relative rounded-md w-full shadow-sm " },
                            React__default.createElement("input", { name: "DIAGDATE", type: "date", placeholder: "dd/mm/yyyy", value: answer[0].valueDate, onChange: function (event) { return setAnswer([{ valueDate: event.target.value }]); }, className: "focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows" })))));
            }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PSA" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PSA", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "PSA level at histological diagnosis"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement(Quantity, { quantity: answer[0].valueQuantity, onQuantityChange: function (q) { return setAnswer(function (a) { return [{ valueQuantity: reduceSetStateAction(a[0].valueQuantity, q) }]; }); } }, function (_a) {
                            var value = _a.value, unit = _a.unit, onValueChange = _a.onValueChange;
                            return (React__default.createElement("div", { className: "mt-1 relative rounded-md w-full shadow-sm " },
                                React__default.createElement("input", { name: "PSA", type: "number", min: 0, step: 0.01, value: value, onChange: function (event) { return onValueChange(parseFloat(event.target.value)); }, placeholder: "0.00", className: "focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300" }),
                                React__default.createElement("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" },
                                    React__default.createElement("span", { className: "text-gray-500 sm:text-sm bg-white" }, unit))));
                        }))));
            }),
            React__default.createElement(React__default.Fragment, null,
                React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Clinical stage"),
                React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                    React__default.createElement("div", { className: "mt-1 w-full relative flex border border-gray-300  bg-white rounded-md" },
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "TNMCT" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "TNMCT", className: "sr-only" }, "Clinical tumor stage"),
                                React__default.createElement(ChoiceInput, { name: "TNMCT", options: cTOptions, placeholder: "cT...", className: "focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-l-md", value: answer[0].valueCoding, onValueChange: function (coding) { return setAnswer([{ valueCoding: coding }]); } })));
                        }),
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "TNMCN" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "TNMCN", className: "sr-only" }, "Clinical nodal stage"),
                                React__default.createElement(ChoiceInput, { name: "TNMCN", placeholder: "cN...", options: cNOptions, className: "focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-r-md", value: answer[0].valueCoding, onValueChange: function (coding) { return setAnswer([{ valueCoding: coding }]); } })));
                        })))),
            React__default.createElement(React__default.Fragment, null,
                React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Ratio of positive biopsy cores"),
                React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                    React__default.createElement("fieldset", { name: "BIOCORERATIO", className: "mt-1 w-full relative flex border border-gray-300 bg-white rounded-md shadow-sm " },
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "BIOPCORE" }, function (_a) {
                            var _b, _c;
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "BIOPCORE", className: "sr-only" }, "Number of biopsy cores taken"),
                                React__default.createElement("input", { type: "number", value: (_c = (_b = answer[0].valueInteger) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, min: 0, step: 1, placeholder: "...", size: 4, name: "BIOPCORE", className: "focus:ring-blue-500 focus:border-blue-500 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" })));
                        }),
                        React__default.createElement("div", { className: "mx-3 flex items-center text-lg text-gray-400" },
                            React__default.createElement("span", null, "/")),
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "BIOPPOS" }, function (_a) {
                            var _b, _c;
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "BIOPPOS", className: "sr-only" }, "Number of biopsy cores positive"),
                                React__default.createElement("input", { type: "number", value: (_c = (_b = answer[0].valueInteger) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, min: 0, step: 1, size: 4, placeholder: "...", name: "BIOPPOS", className: "focus:ring-blue-500 focus:border-blue-500 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" })));
                        })))),
            React__default.createElement(React__default.Fragment, null,
                React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Gleason score"),
                React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                    React__default.createElement("fieldset", { className: "mt-1 relative flex rounded-md w-full shadow-sm border border-gray-300 bg-white" },
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "GLEASONBIOP1" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "GLEASONBIOP1", className: "sr-only" }, "Primary Gleason score"),
                                React__default.createElement("input", { type: "number", step: 1, min: 1, max: 5, value: answer[0].valueInteger, onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, name: "GLEASONBIOP1", className: "focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" })));
                        }),
                        React__default.createElement("div", { className: "mx-3 flex items-center text-lg text-gray-400" },
                            React__default.createElement("span", null, "+")),
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "GLEASONBIOP2" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "GLEASONBIOP2", className: "sr-only" }, "Secondary Gleason score"),
                                React__default.createElement("input", { type: "number", step: 1, min: 1, max: 5, value: answer[0].valueInteger, onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, name: "GLEASONBIOP2", className: "focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" })));
                        })))))));
};
var PathologyInformation = function (_a) {
    _a.author; _a.subject; var onSubmit = _a.onSubmit, initQuestionnaireResponse = _a.initQuestionnaireResponse;
    var _b = useState(initQuestionnaireResponse !== null && initQuestionnaireResponse !== void 0 ? initQuestionnaireResponse : initPathologicalInformation), qr = _b[0], setQR = _b[1];
    var pNOptions = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMPN/pN0", display: "pN0" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPN/pN1", display: "pN1" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPN/pNX", display: "pNX" },
    ];
    var pTOptions = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2", display: "pT2" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2a", display: "pT2a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2b", display: "pT2b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2c", display: "pT2c" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT3", display: "pT3" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT3a", display: "pT3a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT3b", display: "pT3b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT4", display: "pT4" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cTX", display: "pTX" },
    ];
    var handleSubmit = function (event) {
        event.preventDefault();
        onSubmit && onSubmit(qr);
    };
    return (React__default.createElement(QuestionnaireResponse, { questionnaireResponse: qr, onQuestionnaireResponseChange: setQR },
        React__default.createElement(Form, { title: "Pathological information", handleSubmit: handleSubmit, handleClear: function () { return setQR(initPathologicalInformation()); } },
            React__default.createElement(React__default.Fragment, null,
                React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Clinical stage"),
                React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                    React__default.createElement("div", { className: "mt-1 w-full relative flex border border-gray-300  bg-white rounded-md" },
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "TNMPT" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "TNMPT", className: "sr-only" }, "Clinical tumor stage"),
                                React__default.createElement(ChoiceInput, { name: "TNMPT", options: pTOptions, placeholder: "pT...", className: "focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-l-md", value: answer[0].valueCoding, onValueChange: function (coding) { return setAnswer([{ valueCoding: coding }]); } })));
                        }),
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "TNMPN" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "TNMPN", className: "sr-only" }, "Clinical nodal stage"),
                                React__default.createElement(ChoiceInput, { name: "TNMPN", placeholder: "cN...", options: pNOptions, className: "focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-r-md", value: answer[0].valueCoding, onValueChange: function (coding) { return setAnswer([{ valueCoding: coding }]); } })));
                        })))),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "MARGIN" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Margin status"),
                    React__default.createElement("fieldset", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement("div", { className: "flex items-center" },
                            React__default.createElement("input", { id: "marging-positive", type: "radio", name: "MARGIN", checked: answer[0].valueInteger === 1, value: "1", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                            React__default.createElement("label", { htmlFor: "margin-positive", className: "ml-3 block text-sm font-medium text-gray-700" }, "positive")),
                        React__default.createElement("div", { className: "flex items-center" },
                            React__default.createElement("input", { id: "margin-negative", type: "radio", name: "MARGIN", checked: answer[0].valueInteger === 0, value: "0", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                            React__default.createElement("label", { htmlFor: "margin-negative", className: "ml-3 block text-sm font-medium text-gray-700" }, "negative")))));
            }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "MARGINFOC" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Margin status focality"),
                    React__default.createElement("fieldset", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement("div", { className: "flex items-center" },
                            React__default.createElement("input", { id: "marging-focality-focal", type: "radio", name: "MARGINFOC", checked: answer[0].valueInteger === 1, value: "1", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                            React__default.createElement("label", { htmlFor: "margin-focality-focal", className: "ml-3 block text-sm font-medium text-gray-700" }, "focal")),
                        React__default.createElement("div", { className: "flex items-center" },
                            React__default.createElement("input", { id: "margin-focality-focal", type: "radio", name: "MARGINFOC", checked: answer[0].valueInteger === 2, value: "2", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                            React__default.createElement("label", { htmlFor: "margin-focality-multi", className: "ml-3 block text-sm font-medium text-gray-700" }, "multi-focal")))));
            }),
            React__default.createElement(React__default.Fragment, null,
                React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Gleason score"),
                React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                    React__default.createElement("fieldset", { className: "mt-1 relative flex rounded-md w-full shadow-sm border border-gray-300 bg-white" },
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "GLEASONPATH1" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "GLEASONPATH1", className: "sr-only" }, "Primary Gleason score"),
                                React__default.createElement("input", { type: "number", step: 1, min: 1, max: 5, value: answer[0].valueInteger, onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, name: "GLEASONPATH1", className: "focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" })));
                        }),
                        React__default.createElement("div", { className: "mx-3 flex items-center text-lg text-gray-400" },
                            React__default.createElement("span", null, "+")),
                        React__default.createElement(QuestionnaireResponseItem, { linkId: "GLEASONPATH2" }, function (_a) {
                            var answer = _a.answer, setAnswer = _a.setAnswer;
                            return (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("label", { htmlFor: "GLEASONPATH2", className: "sr-only" }, "Secondary Gleason score"),
                                React__default.createElement("input", { type: "number", step: 1, min: 1, max: 5, value: answer[0].valueInteger, onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, name: "GLEASONPATH2", className: "focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" })));
                        })))))));
};
var QuestionStartStopOngoing = function (_a) {
    var startVariableID = _a.startVariableID, stopVariableId = _a.stopVariableId, ongoingVariableId = _a.ongoingVariableId, label = _a.label;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, label),
        React__default.createElement("fieldset", null,
            React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                React__default.createElement("div", { className: "mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white" },
                    React__default.createElement(QuestionnaireResponseItem, { linkId: startVariableID }, function (_a) {
                        var answer = _a.answer, setAnswer = _a.setAnswer;
                        return (React__default.createElement("input", { name: startVariableID, type: "date", placeholder: "dd/mm/yyyy", value: answer[0].valueDate, onChange: function (event) { return setAnswer([{ valueDate: event.target.value }]); }, className: "focus:ring-blue-500 focus:border-blue-500 block w-0.5 flex-1 sm:text-sm border-transparent rounded-md" }));
                    }),
                    React__default.createElement("div", { className: "mx-3 flex items-center text-lg text-gray-400" },
                        React__default.createElement("span", null, "\u2192")),
                    React__default.createElement(QuestionnaireResponseItem, { linkId: stopVariableId }, function (_a) {
                        var answer = _a.answer, setAnswer = _a.setAnswer;
                        return (React__default.createElement("input", { name: stopVariableId, type: "date", placeholder: "dd/mm/yyyy", value: answer[0].valueDate, onChange: function (event) { return setAnswer([{ valueDate: event.target.value }]); }, className: "focus:ring-blue-500 focus:border-blue-500 block w-0.5 flex-1 sm:text-sm border-transparent rounded-md" }));
                    })),
                React__default.createElement(QuestionnaireResponseItem, { linkId: ongoingVariableId }, function (_a) {
                    var answer = _a.answer, setAnswer = _a.setAnswer;
                    return (React__default.createElement("div", { className: "mt-2 relative w-full flex" },
                        React__default.createElement("input", { type: "checkbox", name: ongoingVariableId, checked: answer[0].valueInteger === 0, value: "0", onChange: function (event) { return setAnswer([{ valueInteger: !!answer[0].valueInteger ? 1 - answer[0].valueInteger : 1 }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                        React__default.createElement("label", { htmlFor: "margin-negative", className: "ml-3 block text-sm font-medium text-gray-700" }, "ongoing")));
                })))));
};
var QuestionDate = function (_a) {
    var label = _a.label, variableID = _a.variableID;
    return (React__default.createElement(QuestionnaireResponseItem, { linkId: variableID }, function (_a) {
        var answer = _a.answer, setAnswer = _a.setAnswer;
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("label", { htmlFor: variableID, className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, label),
            React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                React__default.createElement("input", { name: variableID, type: "date", placeholder: "dd/mm/yyyy", value: answer[0].valueDate, onChange: function (event) { return setAnswer([{ valueDate: event.target.value }]); }, className: "focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md shadow-sm" }))));
    }));
};
var TreatmentVariables = function (_a) {
    _a.author; _a.subject; var onSubmit = _a.onSubmit; _a.hideTitle; var initQuestionnaireResponse = _a.initQuestionnaireResponse;
    var _b = useState(initQuestionnaireResponse !== null && initQuestionnaireResponse !== void 0 ? initQuestionnaireResponse : initTreatmentVariables), qr = _b[0], setQR = _b[1];
    var primaryTherapyOptions = [
        { display: "Watchful waiting", code: "PRIMARYTX/1", system: "" },
        { display: "Active surveillance", code: "PRIMARYTX/2", system: "" },
        { display: "Radical prostatectomy", code: "PRIMARYTX/3", system: "" },
        { display: "External beam radiation therapy", code: "PRIMARYTX/4", system: "" },
        { display: "Brachytherapy", code: "PRIMARYTX/5", system: "" },
        { display: "Androgen deprivation therapy", code: "PRIMARYTX/6", system: "" },
        { display: "Focal therapy", code: "PRIMARYTX/7", system: "" },
        { display: "Other", code: "PRIMARYTX/888", system: "" }
    ];
    var handleSubmit = function (event) {
        event.preventDefault();
        onSubmit && onSubmit(qr);
    };
    return (React__default.createElement(QuestionnaireResponse, { questionnaireResponse: qr, onQuestionnaireResponseChange: setQR },
        React__default.createElement(Form, { title: "Threatment variables", handleSubmit: handleSubmit, handleClear: function () { return setQR(initTreatmentVariables()); } },
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PRIMARYTX" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PRIMARYTX", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Treatment modalities used"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement(ChoiceInput, { value: answer[0].valueCoding, onValueChange: function (q) { return setAnswer(function (a) { return [{ valueCoding: answer[0].valueCoding }]; }); }, name: "PRIMARYTX", options: primaryTherapyOptions, placeholder: "...", className: "focus:ring-blue-500 focus:border-blue-500 block w-full flex-grow pl-7 sm:text-sm border-gray-300 rounded-md shadow-sm placeholder-gray-300" }))));
            }),
            React__default.createElement(QuestionDate, { variableID: "PRWATCHDATE", label: "Date watchful waiting initiated" }),
            React__default.createElement(QuestionDate, { variableID: "PRACTIVEDATE", label: "Date active surveillance initiated" }),
            React__default.createElement(QuestionDate, { variableID: "PRRADPROTXDATE", label: "Date of primary pradical prostatectomy" }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PRNERVESPARE" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("legend", { className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Primary nerve sparing status"),
                    React__default.createElement("fieldset", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement("div", { className: "flex items-center" },
                            React__default.createElement("input", { id: "PRNERVESPARE-non-nerve-sparing", type: "radio", name: "PRNERVESPARE", checked: answer[0].valueInteger === 1, value: "1", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                            React__default.createElement("label", { htmlFor: "margin-focality-focal", className: "ml-3 block text-sm font-medium text-gray-700" }, "non nerve-sparing")),
                        React__default.createElement("div", { className: "flex items-center" },
                            React__default.createElement("input", { id: "PRNERVESPARE-nerve-sparing", type: "radio", name: "PRNERVESPARE", checked: answer[0].valueInteger === 2, value: "2", onChange: function (event) { return setAnswer([{ valueInteger: parseInt(event.target.value) }]); }, className: "focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md" }),
                            React__default.createElement("label", { htmlFor: "margin-focality-multi", className: "ml-3 block text-sm font-medium text-gray-700" }, "nerve-sparing")))));
            }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PREBRTTOTDOSE" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PREBRTTOTDOSE", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Primary EBRT dose"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement(Quantity, { quantity: answer[0].valueQuantity, onQuantityChange: function (q) { return setAnswer(function (a) { return [{ valueQuantity: reduceSetStateAction(a[0].valueQuantity, q) }]; }); } }, function (_a) {
                            var value = _a.value, unit = _a.unit, onValueChange = _a.onValueChange;
                            return (React__default.createElement("div", { className: "mt-1 relative rounded-md w-full shadow-sm " },
                                React__default.createElement("input", { name: "PREBRTTOTDOSE", type: "number", min: 0, step: 0.01, value: value, onChange: function (event) { return onValueChange(parseFloat(event.target.value)); }, placeholder: "0.00", className: "focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300" }),
                                React__default.createElement("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" },
                                    React__default.createElement("span", { className: "text-gray-500 sm:text-sm bg-white" }, unit))));
                        }))));
            }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PREBRTDOSEPERFRACT" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PREBRTDOSEPERFRACT", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Primary EBRT average dose per fraction"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement(Quantity, { quantity: answer[0].valueQuantity, onQuantityChange: function (q) { return setAnswer(function (a) { return [{ valueQuantity: reduceSetStateAction(a[0].valueQuantity, q) }]; }); } }, function (_a) {
                            var value = _a.value, unit = _a.unit, onValueChange = _a.onValueChange;
                            return (React__default.createElement("div", { className: "mt-1 relative rounded-md w-full shadow-sm " },
                                React__default.createElement("input", { name: "PREBRTDOSEPERFRACT", type: "number", min: 0, step: 0.01, value: value, onChange: function (event) { return onValueChange(parseFloat(event.target.value)); }, placeholder: "0.00", className: "focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300" }),
                                React__default.createElement("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" },
                                    React__default.createElement("span", { className: "text-gray-500 sm:text-sm bg-white" }, unit))));
                        }))));
            }),
            React__default.createElement(QuestionStartStopOngoing, { startVariableID: "PREBRTTXSTARTDATE", stopVariableId: "PREBRTTXSTOPDATE", ongoingVariableId: "PREBRTTXONGOING", label: "Period of primary EBRT" }),
            React__default.createElement(QuestionStartStopOngoing, { startVariableID: "PRBRACHYTXSTARTDATE", stopVariableId: "PRBRACHYTXSTOPDATE", ongoingVariableId: "PRBRACHYTXONGOING", label: "Period of primary brachytherapy" }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PRBRACHYDOSERATE" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PRBRACHYDOSERATE", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Primary branchytherapy dose:"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement(Quantity, { quantity: answer[0].valueQuantity, onQuantityChange: function (q) { return setAnswer(function (a) { return [{ valueQuantity: reduceSetStateAction(a[0].valueQuantity, q) }]; }); } }, function (_a) {
                            var value = _a.value, unit = _a.unit, onValueChange = _a.onValueChange;
                            return (React__default.createElement("div", { className: "mt-1 relative rounded-md w-full shadow-sm " },
                                React__default.createElement("input", { name: "PRBRACHYDOSERATE", type: "number", min: 0, step: 0.01, value: value, onChange: function (event) { return onValueChange(parseFloat(event.target.value)); }, placeholder: "0.00", className: "focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300" }),
                                React__default.createElement("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" },
                                    React__default.createElement("span", { className: "text-gray-500 sm:text-sm bg-white" }, unit))));
                        }))));
            }),
            React__default.createElement(QuestionStartStopOngoing, { startVariableID: "PRADTTXSTARTDATE", stopVariableId: "PRADTTXSTOPDATE", ongoingVariableId: "PRADTTXONGOING", label: "Period of primary ADT" }),
            React__default.createElement(QuestionStartStopOngoing, { startVariableID: "PRBRACHYTXSTARTDATE", stopVariableId: "PRBRACHYTXSTOPDATE", ongoingVariableId: "PRBRACHYTXONGOING", label: "Period of primary brachytherapy" }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PRIMARYTXFT" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PRIMARYTXFT", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Indicate the type of focal therapy used for this patient"),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement("textarea", { className: "focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300", value: answer[0].valueString, onChange: function (event) { return setAnswer([{ valueString: event.target.value }]); } }))));
            }),
            React__default.createElement(QuestionStartStopOngoing, { startVariableID: "PRFOCTXSTARTDATE", stopVariableId: "PRFOCTXSTOPDATE", ongoingVariableId: "PRFOCTXONGOING", label: "Period of primary focal therapy" }),
            React__default.createElement(QuestionnaireResponseItem, { linkId: "PRIMARYTXOTHER" }, function (_a) {
                var answer = _a.answer, setAnswer = _a.setAnswer;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("label", { htmlFor: "PRIMARYTXOTHER", className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" }, "Indicate the other primary treatment modality used                               "),
                    React__default.createElement("div", { className: "mt-1 sm:mt-0 sm:col-span-2 md:col-span-1" },
                        React__default.createElement("textarea", { className: "focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300", value: answer[0].valueString, onChange: function (event) { return setAnswer([{ valueString: event.target.value }]); } }))));
            }),
            React__default.createElement(QuestionStartStopOngoing, { startVariableID: "PROTHERTXSTARTDATE", stopVariableId: "PROTHERTXSTOPDATE", ongoingVariableId: "PROTHERTXONGOING", label: "Period of primary other therapy" }))));
};

var questionnaires = [
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1"
];
var getQuestionnaireIDs = function () { return questionnaires; };
var getQuestionnaire = function (id) {
    switch (id) {
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Baseline Tumor Factors",
                description: "Questionnaire following the ICHOM standard set for localised prostate cancer. This questionnaire captures the baseline histological and clinical staging information about the tumor."
            };
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Pathology Information",
                description: "Questionnaire following the ICHOM standard set for localised prostate cancer. This questionnaire captures the pathology results after surgery."
            };
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Treatment Variables",
                description: "Questionnaire followin teh ICHOM standard set for localised prostate cancer. This questionnaire captures the treatment decision after clincial staging."
            };
        default:
            throw Error("Invalid questionnaire id: " + id);
    }
};
var DynamicQuestionnaire = function (_a) {
    var questionnaire = _a.questionnaire, props = __rest(_a, ["questionnaire"]);
    switch (questionnaire) {
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1":
            return React__default.createElement(BaselineTumorFactors, __assign({}, props));
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1":
            return React__default.createElement(PathologyInformation, __assign({}, props));
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1":
            return React__default.createElement(TreatmentVariables, __assign({}, props));
    }
};

export { BaselineTumorFactors as B, DynamicQuestionnaire as D, PathologyInformation as P, TreatmentVariables as T, getQuestionnaireIDs as a, getQuestionnaire as g };
//# sourceMappingURL=Questionnaire-467ff968.js.map
