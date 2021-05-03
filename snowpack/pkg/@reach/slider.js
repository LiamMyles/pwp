import { r as react } from '../common/index-7cda8b13.js';
import { c as createCommonjsModule } from '../common/_commonjsHelpers-4f955397.js';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

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

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

/**
 * React currently throws a warning when using useLayoutEffect on the server. To
 * get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? react.useLayoutEffect : react.useEffect;

/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reach.tech/auto-id
 */


function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _React$useState = react.useState(initialId),
      id = _React$useState[0],
      setId = _React$useState[1];

  useIsomorphicLayoutEffect(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  react.useEffect(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
}

/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlledValue
 * @param defaultValue
 */
function useControlledState(controlledValue, defaultValue) {
  var controlledRef = react.useRef(controlledValue != null);

  var _useState = react.useState(defaultValue),
      valueState = _useState[0],
      setValue = _useState[1];

  var set = react.useCallback(function (n) {
    if (!controlledRef.current) {
      setValue(n);
    }
  }, []);
  return [controlledRef.current ? controlledValue : valueState, set];
}

/**
 * Detects right clicks
 *
 * @param nativeEvent
 */
function isRightClick(nativeEvent) {
  return "which" in nativeEvent ? nativeEvent.which === 3 : "button" in nativeEvent ? nativeEvent.button === 2 : false;
}

/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when
 * passed as a dependency.
 */
function createStableCallbackHook(useEffectHook, callback) {
  var callbackRef = react.useRef(callback);
  useEffectHook(function () {
    callbackRef.current = callback;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return react.useCallback(function () {
    callbackRef.current && callbackRef.current.apply(callbackRef, arguments);
  }, []);
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when passed
 * as a dependency.
 *
 * Use this over `useStableCallback` when you want the callback to be cached in
 * `useLayoutEffect` instead of `useEffect` to deal with timing issues only when
 * needed.
 */

function useStableLayoutCallback(callback) {
  return createStableCallbackHook(useIsomorphicLayoutEffect, callback);
}

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}

function createNamedContext(name, defaultValue) {
  var Ctx = /*#__PURE__*/react.createContext(defaultValue);

  return Ctx;
}

/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  // eslint-disable-next-line eqeqeq
  return !!(value && {}.toString.call(value) == "[object Function]");
}

/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */
function makeId() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}

function noop() {}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */
function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return react.useCallback(function (node) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      assignRef(ref, node);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, refs);
}

/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */
function composeEventHandlers(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
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

var SliderOrientation;

(function (SliderOrientation) {
  SliderOrientation["Horizontal"] = "horizontal";
  SliderOrientation["Vertical"] = "vertical";
})(SliderOrientation || (SliderOrientation = {}));

// TODO: Remove in 1.0
var SliderHandleAlignment; // TODO: Remove in 1.0

(function (SliderHandleAlignment) {
  SliderHandleAlignment["Center"] = "center";
  SliderHandleAlignment["Contain"] = "contain";
})(SliderHandleAlignment || (SliderHandleAlignment = {}));

var SLIDER_ORIENTATION_HORIZONTAL = SliderOrientation.Horizontal;
var SLIDER_ORIENTATION_VERTICAL = SliderOrientation.Vertical;
var SLIDER_HANDLE_ALIGN_CENTER = SliderHandleAlignment.Center;
var SLIDER_HANDLE_ALIGN_CONTAIN = SliderHandleAlignment.Contain;
var SliderContext = /*#__PURE__*/createNamedContext("SliderContext", {});

var useSliderContext = function useSliderContext() {
  return react.useContext(SliderContext);
}; // These proptypes are shared between the composed SliderInput component and the
// simplified Slider


var sliderPropTypes = {
  defaultValue: propTypes.number,
  disabled: propTypes.bool,
  getAriaLabel: propTypes.func,
  getAriaValueText: propTypes.func,
  getValueText: propTypes.func,
  handleAlignment: /*#__PURE__*/propTypes.oneOf([SliderHandleAlignment.Center, SliderHandleAlignment.Contain]),
  min: propTypes.number,
  max: propTypes.number,
  name: propTypes.string,
  orientation: /*#__PURE__*/propTypes.oneOf([SliderOrientation.Horizontal, SliderOrientation.Vertical]),
  onChange: propTypes.func,
  step: propTypes.number,
  value: propTypes.number
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * Slider
 *
 * @see Docs https://reach.tech/slider#slider
 */

var Slider = /*#__PURE__*/react.forwardRef(function Slider(_ref, forwardedRef) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/react.createElement(SliderInput, _extends({}, props, {
    ref: forwardedRef,
    "data-reach-slider": "",
    __componentName: "Slider"
  }), /*#__PURE__*/react.createElement(SliderTrack, null, /*#__PURE__*/react.createElement(SliderRange, null), /*#__PURE__*/react.createElement(SliderHandle, null), children));
});

/**
 * SliderInput
 *
 * The parent component of the slider interface. This is a lower level component
 * if you need more control over styles or rendering the slider's inner
 * components.
 *
 * @see Docs https://reach.tech/slider#sliderinput
 */


var SliderInput = /*#__PURE__*/react.forwardRef(function SliderInput(_ref2, forwardedRef) {
  var _rangeStyle;

  var ariaLabel = _ref2["aria-label"],
      ariaLabelledBy = _ref2["aria-labelledby"],
      ariaValueTextProp = _ref2["aria-valuetext"],
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      defaultValue = _ref2.defaultValue,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      controlledValue = _ref2.value,
      getAriaLabel = _ref2.getAriaLabel,
      getAriaValueText = _ref2.getAriaValueText,
      DEPRECATED_getValueText = _ref2.getValueText,
      _ref2$handleAlignment = _ref2.handleAlignment,
      handleAlignment = _ref2$handleAlignment === void 0 ? SliderHandleAlignment.Center : _ref2$handleAlignment,
      _ref2$max = _ref2.max,
      max = _ref2$max === void 0 ? 100 : _ref2$max,
      _ref2$min = _ref2.min,
      min = _ref2$min === void 0 ? 0 : _ref2$min,
      name = _ref2.name,
      onChange = _ref2.onChange,
      onKeyDown = _ref2.onKeyDown,
      onMouseDown = _ref2.onMouseDown,
      onMouseMove = _ref2.onMouseMove,
      onMouseUp = _ref2.onMouseUp,
      onPointerDown = _ref2.onPointerDown,
      onPointerUp = _ref2.onPointerUp,
      onTouchEnd = _ref2.onTouchEnd,
      onTouchMove = _ref2.onTouchMove,
      onTouchStart = _ref2.onTouchStart,
      _ref2$orientation = _ref2.orientation,
      orientation = _ref2$orientation === void 0 ? SliderOrientation.Horizontal : _ref2$orientation,
      _ref2$step = _ref2.step,
      step = _ref2$step === void 0 ? 1 : _ref2$step,
      children = _ref2.children,
      _ref2$__componentName = _ref2.__componentName,
      rest = _objectWithoutPropertiesLoose(_ref2, ["aria-label", "aria-labelledby", "aria-valuetext", "as", "defaultValue", "disabled", "value", "getAriaLabel", "getAriaValueText", "getValueText", "handleAlignment", "max", "min", "name", "onChange", "onKeyDown", "onMouseDown", "onMouseMove", "onMouseUp", "onPointerDown", "onPointerUp", "onTouchEnd", "onTouchMove", "onTouchStart", "orientation", "step", "children", "__componentName"]);
  var touchId = react.useRef();
  var id = useId(rest.id); // Track whether or not the pointer is down without updating the component

  var pointerDownRef = react.useRef(false);
  var trackRef = react.useRef(null);
  var handleRef = react.useRef(null);
  var sliderRef = react.useRef(null);
  var ref = useComposedRefs(sliderRef, forwardedRef);

  var _React$useState = react.useState(false),
      hasFocus = _React$useState[0],
      setHasFocus = _React$useState[1];

  var _useDimensions = useDimensions(handleRef),
      handleDimensions = _objectWithoutPropertiesLoose(_useDimensions, ["ref"]);

  var _useControlledState = useControlledState(controlledValue, defaultValue || min),
      _value = _useControlledState[0],
      setValue = _useControlledState[1];

  var value = clamp(_value, min, max);
  var trackPercent = valueToPercent(value, min, max);
  var isVertical = orientation === SliderOrientation.Vertical;
  var handleSize = isVertical ? handleDimensions.height : handleDimensions.width; // TODO: Consider removing the `handleAlignment` prop
  // We may want to use accept a `handlePosition` prop instead and let apps
  // define their own positioning logic, similar to how we do for popovers.

  var handlePosition = "calc(" + trackPercent + "% - " + (handleAlignment === SliderHandleAlignment.Center ? handleSize + "px / 2" : handleSize + "px * " + trackPercent * 0.01) + ")";
  var handlePositionRef = react.useRef(handlePosition);
  useIsomorphicLayoutEffect(function () {
    handlePositionRef.current = handlePosition;
  }, [handlePosition]);
  var onChangeRef = react.useRef(onChange);
  useIsomorphicLayoutEffect(function () {
    onChangeRef.current = onChange;
  }, [onChange]);
  var updateValue = react.useCallback(function updateValue(newValue) {
    setValue(newValue);

    if (onChangeRef.current) {
      // Prevent onChange from recreating the function
      // TODO: Reonsider the onChange callback API
      onChangeRef.current(newValue, {
        min: min,
        max: max,
        // Prevent handlePosition from recreating the function
        handlePosition: handlePositionRef.current
      });
    }
  }, [max, min, setValue]);
  var getNewValueFromEvent = react.useCallback(function (event) {
    return getNewValue(getPointerPosition(event, touchId), trackRef.current, {
      step: step,
      orientation: orientation,
      min: min,
      max: max
    });
  }, [max, min, orientation, step]); // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_kbd_interaction

  var handleKeyDown = useStableLayoutCallback(function (event) {
    if (disabled) {
      return;
    }

    var newValue;
    var tenSteps = (max - min) / 10;
    var keyStep = step || (max - min) / 100;

    switch (event.key) {
      // Decrease the value of the slider by one step.
      case "ArrowLeft":
      case "ArrowDown":
        newValue = value - keyStep;
        break;
      // Increase the value of the slider by one step

      case "ArrowRight":
      case "ArrowUp":
        newValue = value + keyStep;
        break;
      // Decrement the slider by an amount larger than the step change made by
      // `ArrowDown`.

      case "PageDown":
        newValue = value - tenSteps;
        break;
      // Increment the slider by an amount larger than the step change made by
      // `ArrowUp`.

      case "PageUp":
        newValue = value + tenSteps;
        break;
      // Set the slider to the first allowed value in its range.

      case "Home":
        newValue = min;
        break;
      // Set the slider to the last allowed value in its range.

      case "End":
        newValue = max;
        break;

      default:
        return;
    }

    event.preventDefault();
    newValue = clamp(step ? roundValueToStep(newValue, step, min) : newValue, min, max);
    updateValue(newValue);
  });
  var ariaValueText = DEPRECATED_getValueText ? DEPRECATED_getValueText(value) : getAriaValueText ? getAriaValueText(value) : ariaValueTextProp;
  var rangeStyle = (_rangeStyle = {}, _rangeStyle[isVertical ? "height" : "width"] = trackPercent + "%", _rangeStyle);
  var ctx = {
    ariaLabel: getAriaLabel ? getAriaLabel(value) : ariaLabel,
    ariaLabelledBy: ariaLabelledBy,
    ariaValueText: ariaValueText,
    handleDimensions: handleDimensions,
    handleKeyDown: handleKeyDown,
    handlePosition: handlePosition,
    handleRef: handleRef,
    hasFocus: hasFocus,
    onKeyDown: onKeyDown,
    setHasFocus: setHasFocus,
    sliderId: id,
    sliderMax: max,
    sliderMin: min,
    value: value,
    disabled: !!disabled,
    isVertical: isVertical,
    orientation: orientation,
    trackPercent: trackPercent,
    trackRef: trackRef,
    rangeStyle: rangeStyle,
    updateValue: updateValue
  }; // Slide events!
  // We will try to use pointer events if they are supported to leverage
  // setPointerCapture and releasePointerCapture. We'll fall back to separate
  // mouse and touch events.
  // TODO: This could be more concise

  var removeMoveEvents = react.useRef(noop);
  var removeStartEvents = react.useRef(noop);
  var removeEndEvents = react.useRef(noop); // Store our event handlers in refs so we aren't attaching/detaching events
  // on every render if the user doesn't useCallback

  var appEvents = react.useRef({
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    onTouchMove: onTouchMove,
    onPointerDown: onPointerDown,
    onPointerUp: onPointerUp
  });
  useIsomorphicLayoutEffect(function () {
    appEvents.current.onMouseMove = onMouseMove;
    appEvents.current.onMouseDown = onMouseDown;
    appEvents.current.onMouseUp = onMouseUp;
    appEvents.current.onTouchStart = onTouchStart;
    appEvents.current.onTouchEnd = onTouchEnd;
    appEvents.current.onTouchMove = onTouchMove;
    appEvents.current.onPointerDown = onPointerDown;
    appEvents.current.onPointerUp = onPointerUp;
  }, [onMouseMove, onMouseDown, onMouseUp, onTouchStart, onTouchEnd, onTouchMove, onPointerDown, onPointerUp]);
  var handleSlideStart = useStableLayoutCallback(function (event) {
    if (isRightClick(event)) return;

    if (disabled) {
      pointerDownRef.current = false;
      return;
    }

    var ownerDocument = getOwnerDocument(sliderRef.current);
    var ownerWindow = ownerDocument.defaultView || window;
    pointerDownRef.current = true;

    if (event.changedTouches) {
      var _changedTouches;

      // Prevent scrolling for touch events
      event.preventDefault();
      var touch = (_changedTouches = event.changedTouches) == null ? void 0 : _changedTouches[0];

      if (touch != null) {
        touchId.current = touch.identifier;
      }
    }

    var newValue = getNewValueFromEvent(event);

    if (newValue == null) {
      return;
    }

    ownerWindow.requestAnimationFrame(function () {
      var _handleRef$current;

      return (_handleRef$current = handleRef.current) == null ? void 0 : _handleRef$current.focus();
    });
    updateValue(newValue);
    removeMoveEvents.current = addMoveListener();
    removeEndEvents.current = addEndListener();
  });
  var setPointerCapture = useStableLayoutCallback(function (event) {
    var _sliderRef$current;

    if (isRightClick(event)) return;

    if (disabled) {
      pointerDownRef.current = false;
      return;
    }

    pointerDownRef.current = true;
    (_sliderRef$current = sliderRef.current) == null ? void 0 : _sliderRef$current.setPointerCapture(event.pointerId);
  });
  var releasePointerCapture = useStableLayoutCallback(function (event) {
    var _sliderRef$current2;

    if (isRightClick(event)) return;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.releasePointerCapture(event.pointerId);
    pointerDownRef.current = false;
  });
  var handlePointerMove = useStableLayoutCallback(function (event) {
    if (disabled || !pointerDownRef.current) {
      pointerDownRef.current = false;
      return;
    }

    var newValue = getNewValueFromEvent(event);

    if (newValue == null) {
      return;
    }

    updateValue(newValue);
  });
  var handleSlideStop = useStableLayoutCallback(function (event) {
    if (isRightClick(event)) return;
    pointerDownRef.current = false;
    var newValue = getNewValueFromEvent(event);

    if (newValue == null) {
      return;
    }

    touchId.current = undefined;
    removeMoveEvents.current();
    removeEndEvents.current();
  });
  var addMoveListener = react.useCallback(function () {
    var ownerDocument = getOwnerDocument(sliderRef.current);
    var touchListener = composeEventHandlers(appEvents.current.onTouchMove, handlePointerMove);
    var mouseListener = composeEventHandlers(appEvents.current.onMouseMove, handlePointerMove);
    ownerDocument.addEventListener("touchmove", touchListener);
    ownerDocument.addEventListener("mousemove", mouseListener);
    return function () {
      ownerDocument.removeEventListener("touchmove", touchListener);
      ownerDocument.removeEventListener("mousemove", mouseListener);
    };
  }, [handlePointerMove]);
  var addEndListener = react.useCallback(function () {
    var ownerDocument = getOwnerDocument(sliderRef.current);
    var ownerWindow = ownerDocument.defaultView || window;
    var pointerListener = composeEventHandlers(appEvents.current.onPointerUp, releasePointerCapture);
    var touchListener = composeEventHandlers(appEvents.current.onTouchEnd, handleSlideStop);
    var mouseListener = composeEventHandlers(appEvents.current.onMouseUp, handleSlideStop);

    if ("PointerEvent" in ownerWindow) {
      ownerDocument.addEventListener("pointerup", pointerListener);
    }

    ownerDocument.addEventListener("touchend", touchListener);
    ownerDocument.addEventListener("mouseup", mouseListener);
    return function () {
      if ("PointerEvent" in ownerWindow) {
        ownerDocument.removeEventListener("pointerup", pointerListener);
      }

      ownerDocument.removeEventListener("touchend", touchListener);
      ownerDocument.removeEventListener("mouseup", mouseListener);
    };
  }, [handleSlideStop, releasePointerCapture]);
  var addStartListener = react.useCallback(function () {
    // e.preventDefault is ignored by React's synthetic touchStart event, so
    // we attach the listener directly to the DOM node
    // https://github.com/facebook/react/issues/9809#issuecomment-413978405
    var sliderElement = sliderRef.current;

    if (!sliderElement) {
      return noop;
    }

    var ownerDocument = getOwnerDocument(sliderElement);
    var ownerWindow = ownerDocument.defaultView || window;
    var touchListener = composeEventHandlers(appEvents.current.onTouchStart, handleSlideStart);
    var mouseListener = composeEventHandlers(appEvents.current.onMouseDown, handleSlideStart);
    var pointerListener = composeEventHandlers(appEvents.current.onPointerDown, setPointerCapture);
    sliderElement.addEventListener("touchstart", touchListener);
    sliderElement.addEventListener("mousedown", mouseListener);

    if ("PointerEvent" in ownerWindow) {
      sliderElement.addEventListener("pointerdown", pointerListener);
    }

    return function () {
      sliderElement.removeEventListener("touchstart", touchListener);
      sliderElement.removeEventListener("mousedown", mouseListener);

      if ("PointerEvent" in ownerWindow) {
        sliderElement.removeEventListener("pointerdown", pointerListener);
      }
    };
  }, [setPointerCapture, handleSlideStart]);
  react.useEffect(function () {
    removeStartEvents.current = addStartListener();
    return function () {
      removeStartEvents.current();
      removeEndEvents.current();
      removeMoveEvents.current();
    };
  }, [addStartListener]);
  return /*#__PURE__*/react.createElement(SliderContext.Provider, {
    value: ctx
  }, /*#__PURE__*/react.createElement(Comp, _extends({}, rest, {
    ref: ref,
    "data-reach-slider-input": "",
    "data-disabled": disabled ? "" : undefined,
    "data-orientation": orientation,
    tabIndex: -1
  }), isFunction(children) ? children({
    hasFocus: hasFocus,
    id: id,
    max: max,
    min: min,
    value: value,
    ariaValueText: ariaValueText,
    valueText: ariaValueText // TODO: Remove in 1.0

  }) : children, name &&
  /*#__PURE__*/
  // If the slider is used in a form we'll need an input field to
  // capture the value. We'll assume this when the component is given a
  // form field name (A `name` prop doesn't really make sense in any
  // other context).
  react.createElement("input", {
    type: "hidden",
    value: value,
    name: name,
    id: id && makeId("input", id)
  })));
});

/**
 * SliderTrack
 *
 * @see Docs https://reach.tech/slider#slidertrack
 */


var SliderTrackImpl = /*#__PURE__*/react.forwardRef(function SliderTrack(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "div" : _ref3$as,
      children = _ref3.children,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? {} : _ref3$style,
      props = _objectWithoutPropertiesLoose(_ref3, ["as", "children", "style"]);

  var _useSliderContext = useSliderContext(),
      disabled = _useSliderContext.disabled,
      orientation = _useSliderContext.orientation,
      trackRef = _useSliderContext.trackRef;

  var ref = useComposedRefs(trackRef, forwardedRef);
  return /*#__PURE__*/react.createElement(Comp, _extends({
    ref: ref,
    style: _extends({}, style, {
      position: "relative"
    })
  }, props, {
    "data-reach-slider-track": "",
    "data-disabled": disabled ? "" : undefined,
    "data-orientation": orientation
  }), children);
});

var SliderTrack = /*#__PURE__*/react.memo(SliderTrackImpl);

/**
 * SliderRange
 *
 * The (typically) highlighted portion of the track that represents the space
 * between the slider's `min` value and its current value.
 *
 * @see Docs https://reach.tech/slider#sliderrange
 */


var SliderRangeImpl = /*#__PURE__*/react.forwardRef(function SliderRange(_ref4, forwardedRef) {
  var _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as;
      _ref4.children;
      var _ref4$style = _ref4.style,
      style = _ref4$style === void 0 ? {} : _ref4$style,
      props = _objectWithoutPropertiesLoose(_ref4, ["as", "children", "style"]);

  var _useSliderContext2 = useSliderContext(),
      disabled = _useSliderContext2.disabled,
      orientation = _useSliderContext2.orientation,
      rangeStyle = _useSliderContext2.rangeStyle;

  return /*#__PURE__*/react.createElement(Comp, _extends({
    ref: forwardedRef,
    style: _extends({
      position: "absolute"
    }, rangeStyle, style)
  }, props, {
    "data-reach-slider-range": "",
    "data-disabled": disabled ? "" : undefined,
    "data-orientation": orientation
  }));
});

var SliderRange = /*#__PURE__*/react.memo(SliderRangeImpl); // TODO: Remove in 1.0

/**
 * SliderHandle
 *
 * The handle that the user drags along the track to set the slider value.
 *
 * @see Docs https://reach.tech/slider#sliderhandle
 */


var SliderHandleImpl = /*#__PURE__*/react.forwardRef(function SliderHandle(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      onBlur = _ref5.onBlur,
      onFocus = _ref5.onFocus,
      _ref5$style = _ref5.style,
      style = _ref5$style === void 0 ? {} : _ref5$style,
      onKeyDown = _ref5.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref5, ["as", "onBlur", "onFocus", "style", "onKeyDown"]);

  var _useSliderContext3 = useSliderContext(),
      ariaLabel = _useSliderContext3.ariaLabel,
      ariaLabelledBy = _useSliderContext3.ariaLabelledBy,
      ariaValueText = _useSliderContext3.ariaValueText,
      disabled = _useSliderContext3.disabled,
      handlePosition = _useSliderContext3.handlePosition,
      handleRef = _useSliderContext3.handleRef,
      isVertical = _useSliderContext3.isVertical,
      handleKeyDown = _useSliderContext3.handleKeyDown,
      orientation = _useSliderContext3.orientation,
      setHasFocus = _useSliderContext3.setHasFocus,
      sliderMin = _useSliderContext3.sliderMin,
      sliderMax = _useSliderContext3.sliderMax,
      value = _useSliderContext3.value;

  var ref = useComposedRefs(handleRef, forwardedRef);
  return /*#__PURE__*/react.createElement(Comp, _extends({
    "aria-disabled": disabled || undefined // If the slider has a visible label, it is referenced by
    // `aria-labelledby` on the slider element. Otherwise, the slider
    // element has a label provided by `aria-label`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabel ? undefined : ariaLabelledBy // If the slider is vertically oriented, it has `aria-orientation` set
    // to vertical. The default value of `aria-orientation` for a slider is
    // horizontal.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    "aria-orientation": orientation // The slider element has the `aria-valuemax` property set to a decimal
    // value representing the maximum allowed value of the slider.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    "aria-valuemax": sliderMax // The slider element has the `aria-valuemin` property set to a decimal
    // value representing the minimum allowed value of the slider.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    "aria-valuemin": sliderMin // The slider element has the `aria-valuenow` property set to a decimal
    // value representing the current value of the slider.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    "aria-valuenow": value // If the value of `aria-valuenow` is not user-friendly, e.g., the day
    // of the week is represented by a number, the `aria-valuetext` property
    // is set to a string that makes the slider value understandable, e.g.,
    // "Monday".
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    "aria-valuetext": ariaValueText // The element serving as the focusable slider control has role
    // `slider`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_roles_states_props
    ,
    role: "slider",
    tabIndex: disabled ? -1 : 0
  }, props, {
    "data-reach-slider-handle": "",
    ref: ref,
    onBlur: composeEventHandlers(onBlur, function () {
      setHasFocus(false);
    }),
    onFocus: composeEventHandlers(onFocus, function () {
      setHasFocus(true);
    }),
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    style: _extends({
      position: "absolute"
    }, isVertical ? {
      bottom: handlePosition
    } : {
      left: handlePosition
    }, style)
  }));
});

var SliderHandle = /*#__PURE__*/react.memo(SliderHandleImpl);


function clamp(val, min, max) {
  return val > max ? max : val < min ? min : val;
}
/**
 * This handles the case when num is very small (0.00000001), js will turn
 * this into 1e-8. When num is bigger than 1 or less than -1 it won't get
 * converted to this notation so it's fine.
 *
 * @param num
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Slider/Slider.js#L69
 */


function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split("e-");
    var matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function roundValueToStep(value, step, min) {
  var nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function getPointerPosition(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY
  };
}

function getNewValue(handlePosition, track, props) {
  var orientation = props.orientation,
      min = props.min,
      max = props.max,
      step = props.step;

  if (!track || !handlePosition) {
    return null;
  }

  var _track$getBoundingCli = track.getBoundingClientRect(),
      left = _track$getBoundingCli.left,
      width = _track$getBoundingCli.width,
      bottom = _track$getBoundingCli.bottom,
      height = _track$getBoundingCli.height;

  var isVertical = orientation === SliderOrientation.Vertical;
  var diff = isVertical ? bottom - handlePosition.y : handlePosition.x - left;
  var percent = diff / (isVertical ? height : width);
  var newValue = percentToValue(percent, min, max);
  return clamp(step ? roundValueToStep(newValue, step, min) : newValue, min, max);
}

function useDimensions(ref) {
  var _React$useState2 = react.useState({
    width: 0,
    height: 0
  }),
      _React$useState2$ = _React$useState2[0],
      width = _React$useState2$.width,
      height = _React$useState2$.height,
      setDimensions = _React$useState2[1]; // Many existing `useDimensions` type hooks will use `getBoundingClientRect`
  // getBoundingClientRect does not work here when borders are applied.
  // getComputedStyle is not as performant so we may want to create a utility to
  // check for any conflicts with box sizing first and only use
  // `getComputedStyle` if neccessary.

  /* const { width, height } = ref.current
    ? ref.current.getBoundingClientRect()
    : 0; */


  useIsomorphicLayoutEffect(function () {
    var ownerDocument = getOwnerDocument(ref.current);
    var ownerWindow = ownerDocument.defaultView || window;

    if (ref.current) {
      var _ownerWindow$getCompu = ownerWindow.getComputedStyle(ref.current),
          _newHeight = _ownerWindow$getCompu.height,
          _newWidth = _ownerWindow$getCompu.width;

      var newHeight = parseFloat(_newHeight);
      var newWidth = parseFloat(_newWidth);

      if (newHeight !== height || newWidth !== width) {
        setDimensions({
          height: newHeight,
          width: newWidth
        });
      }
    }
  }, [ref, width, height]);
  return {
    ref: ref,
    width: width,
    height: height
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
} ////////////////////////////////////////////////////////////////////////////////

export { Slider };
