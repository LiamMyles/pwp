self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/calculations/getLineDensity/getLineDensity.ts":
/*!***********************************************************!*\
  !*** ./src/calculations/getLineDensity/getLineDensity.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLineDensity": function() { return /* binding */ getLineDensity; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function GCD(a, b) {
  if (!b) {
    return a;
  }

  return GCD(b, a % b);
}

_c = GCD;
function getLineDensity(_ref) {
  var vertices = _ref.vertices,
      subdivisions = _ref.subdivisions,
      points = _ref.points;
  var density = vertices * subdivisions / GCD(vertices * subdivisions, points);
  return density;
}

var _c;

$RefreshReg$(_c, "GCD");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/calculations/getLineDensity/index.ts":
/*!**************************************************!*\
  !*** ./src/calculations/getLineDensity/index.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLineDensity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLineDensity */ "./src/calculations/getLineDensity/getLineDensity.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _getLineDensity__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _getLineDensity__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* module decorator */ module = __webpack_require__.hmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/home/home.tsx":
/*!*********************************!*\
  !*** ./src/pages/home/home.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _reach_slider_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/slider/styles.css */ "./node_modules/@reach/slider/styles.css");
/* harmony import */ var _reach_slider_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_slider_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/slider */ "./node_modules/@reach/slider/dist/reach-slider.esm.js");
/* harmony import */ var Components_P5Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/P5Canvas */ "./src/components/P5Canvas/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Src_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Src/globals */ "./src/globals.ts");
/* harmony import */ var Src_sketch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Src/sketch */ "./src/sketch.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Calculations/getLineDensity */ "./src/calculations/getLineDensity/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/liam/repos/projects/pwp/src/pages/home/home.tsx",
    _s = $RefreshSig$();










var StyledP5Canvas = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(Components_P5Canvas__WEBPACK_IMPORTED_MODULE_3__.P5Canvas).withConfig({
  displayName: "home__StyledP5Canvas",
  componentId: "x1qyyy-0"
})(["margin:10px auto;width:600px;height:600px;"]);
_c = StyledP5Canvas;
var StyledWrapperDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "home__StyledWrapperDiv",
  componentId: "x1qyyy-1"
})(["display:grid;grid-gap:10px;width:600px;margin:10px auto;h1{font-size:xx-large;}p{font-size:large;}"]);
_c2 = StyledWrapperDiv;
var StyledSlider = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(StyledWrapperDiv).withConfig({
  displayName: "home__StyledSlider",
  componentId: "x1qyyy-2"
})(["grid-template-columns:1fr 130px;& label{display:inline-block;margin-bottom:5px;}& input{width:calc(100% - 10px);}"]);
_c3 = StyledSlider;
var ToggleBox = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "home__ToggleBox",
  componentId: "x1qyyy-3"
})(["margin:10px 0;"]);
_c4 = ToggleBox;
var ToggleArea = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(StyledWrapperDiv).withConfig({
  displayName: "home__ToggleArea",
  componentId: "x1qyyy-4"
})(["grid-template-columns:1fr 1fr 1fr;justify-items:center;margin:10px auto;border-top:solid grey 2px;border-bottom:solid grey 2px;"]);
_c5 = ToggleArea;
var JumpsArea = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(StyledWrapperDiv).withConfig({
  displayName: "home__JumpsArea",
  componentId: "x1qyyy-5"
})(["grid-template-columns:repeat(5,1fr);border-bottom:solid grey 2px;padding:10px 0;& label{display:inline-block;margin-bottom:5px;}& input{width:calc(100% - 10px);}"]);
_c6 = JumpsArea;
var TotalJumps = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "home__TotalJumps",
  componentId: "x1qyyy-6"
})(["grid-column:1/6;display:grid;"]);
_c7 = TotalJumps;
function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.vertices),
      vertex = _useState[0],
      setVertex = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.subdivisions),
      subdivisions = _useState2[0],
      setSubdivisions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.points),
      points = _useState3[0],
      setPoints = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.showSubdivisions),
      showSubdivisions = _useState4[0],
      setShowSubdivisions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.showVertices),
      showVertices = _useState5[0],
      setShowVertices = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.jumps),
      jumps = _useState6[0],
      setJumps = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      totalJumps = _useState7[0],
      setTotalJumps = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues.slowDraw),
      shouldSlowDraw = _useState8[0],
      setShouldSlowDraw = _useState8[1];

  var globalValues = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(Src_globals__WEBPACK_IMPORTED_MODULE_6__.GlobalValues);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setJumps(function (previousState) {
      if (jumps.length < totalJumps) {
        return (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(totalJumps)).map(function () {
          return 1;
        });
      } else {
        var newState = (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(previousState);

        return newState.slice(0, totalJumps - 1);
      }
    });
  }, [totalJumps]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    globalValues.current.vertices = vertex;
    globalValues.current.subdivisions = subdivisions;
    globalValues.current.points = points;
    globalValues.current.showSubdivisions = showSubdivisions;
    globalValues.current.showVertices = showVertices;
    globalValues.current.jumps = jumps;
    globalValues.current.slowDraw = shouldSlowDraw;
  }, [vertex, subdivisions, points, showSubdivisions, showVertices, jumps, shouldSlowDraw]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Playing With Polygons"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Maths, Polygons and Adventures to be had"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/pwp/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        integrity: "sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledP5Canvas, {
      sketch: Src_sketch__WEBPACK_IMPORTED_MODULE_7__.sketch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Polygon: (", vertex, ",", subdivisions, ",", points, jumps.length > 0 && "(".concat(jumps === null || jumps === void 0 ? void 0 : jumps.join(","), ")"), ") - Lines: ", Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_8__.getLineDensity]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-slider",
          children: "Vertex Slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          max: 20,
          id: "vertex-number-slider",
          onChange: function onChange(value) {
            return setVertex(value);
          },
          value: vertex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-input",
          children: "Vertex Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "vertex-number-input",
          min: 1,
          onChange: function onChange(_ref) {
            var value = _ref.currentTarget.value;
            setVertex(parseInt(value) || 1);
          },
          value: vertex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-slider",
          children: "Subdivision Slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          max: 1000,
          id: "subdivision-number-slider",
          onChange: function onChange(value) {
            return setSubdivisions(value);
          },
          value: subdivisions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-input",
          children: "Subdivision Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "subdivision-number-input",
          min: 1,
          onChange: function onChange(_ref2) {
            var value = _ref2.currentTarget.value;
            setSubdivisions(parseInt(value) || 1);
          },
          value: subdivisions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-slider",
          children: "Points Slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          id: "points-number-slider",
          onChange: function onChange(value) {
            return setPoints(value);
          },
          value: points
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-input",
          children: "Points Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "points-number-input",
          min: 1,
          onChange: function onChange(_ref3) {
            var value = _ref3.currentTarget.value;
            setPoints(parseInt(value) || 1);
          },
          value: points
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleBox, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          id: "toggle-subdivisions",
          value: "".concat(showSubdivisions),
          onChange: function onChange(_ref4) {
            var checked = _ref4.currentTarget.checked;
            setShowSubdivisions(checked);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-subdivisions",
          children: "Toggle Subdivisions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleBox, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          id: "toggle-vertices",
          value: "".concat(showVertices),
          onChange: function onChange(_ref5) {
            var checked = _ref5.currentTarget.checked;
            setShowVertices(checked);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-vertices",
          children: "Toggle Vertices"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleBox, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          id: "toggle-slow-draw",
          value: "".concat(shouldSlowDraw),
          onChange: function onChange(_ref6) {
            var checked = _ref6.currentTarget.checked;
            setShouldSlowDraw(checked);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-slow-draw",
          children: "Toggle Drawing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JumpsArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TotalJumps, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "total-jumps",
          children: "Total Jumps"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "total-jumps",
          min: 1,
          onChange: function onChange(_ref7) {
            var value = _ref7.currentTarget.value;
            setTotalJumps(parseInt(value) || 0);
          },
          value: totalJumps
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, this), (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(totalJumps)).map(function (_, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "jump-".concat(index),
            children: ["Jump ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "",
            id: "jump-".concat(index),
            defaultValue: 1,
            onChange: function onChange(_ref8) {
              var value = _ref8.currentTarget.value;
              setJumps(function (previousState) {
                var newState = (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(previousState);

                newState[index] = parseInt(value) || 1;
                return newState;
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }, _this)]
        }, "jump-".concat(index), true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrapperDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "List of vertices:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
          children: globalValues.current.matrix.map(function (cords, index) {
            return "".concat(index, " - X:").concat(cords.x.toFixed(3), ", Y:").concat(cords.y.toFixed(3), ", \n");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "QQ4B+EFijRkURx4o2CO9nsIIlJk=");

_c8 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "StyledP5Canvas");
$RefreshReg$(_c2, "StyledWrapperDiv");
$RefreshReg$(_c3, "StyledSlider");
$RefreshReg$(_c4, "ToggleBox");
$RefreshReg$(_c5, "ToggleArea");
$RefreshReg$(_c6, "JumpsArea");
$RefreshReg$(_c7, "TotalJumps");
$RefreshReg$(_c8, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbGN1bGF0aW9ucy9nZXRMaW5lRGVuc2l0eS9nZXRMaW5lRGVuc2l0eS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbGN1bGF0aW9ucy9nZXRMaW5lRGVuc2l0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giXSwibmFtZXMiOlsiR0NEIiwiYSIsImIiLCJnZXRMaW5lRGVuc2l0eSIsInZlcnRpY2VzIiwic3ViZGl2aXNpb25zIiwicG9pbnRzIiwiZGVuc2l0eSIsIlN0eWxlZFA1Q2FudmFzIiwic3R5bGVkIiwiUDVDYW52YXMiLCJTdHlsZWRXcmFwcGVyRGl2IiwiU3R5bGVkU2xpZGVyIiwiVG9nZ2xlQm94IiwiVG9nZ2xlQXJlYSIsIkp1bXBzQXJlYSIsIlRvdGFsSnVtcHMiLCJIb21lIiwidXNlU3RhdGUiLCJHbG9iYWxWYWx1ZXMiLCJ2ZXJ0ZXgiLCJzZXRWZXJ0ZXgiLCJzZXRTdWJkaXZpc2lvbnMiLCJzZXRQb2ludHMiLCJzaG93U3ViZGl2aXNpb25zIiwic2V0U2hvd1N1YmRpdmlzaW9ucyIsInNob3dWZXJ0aWNlcyIsInNldFNob3dWZXJ0aWNlcyIsImp1bXBzIiwic2V0SnVtcHMiLCJ0b3RhbEp1bXBzIiwic2V0VG90YWxKdW1wcyIsInNob3VsZFNsb3dEcmF3Iiwic2V0U2hvdWxkU2xvd0RyYXciLCJnbG9iYWxWYWx1ZXMiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwcmV2aW91c1N0YXRlIiwibGVuZ3RoIiwiQXJyYXkiLCJtYXAiLCJuZXdTdGF0ZSIsInNsaWNlIiwiY3VycmVudCIsInNsb3dEcmF3Iiwic2tldGNoIiwiam9pbiIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsInBhcnNlSW50IiwiY2hlY2tlZCIsIl8iLCJpbmRleCIsIm1hdHJpeCIsImNvcmRzIiwieCIsInRvRml4ZWQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVB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LEdBQWtCSCxRQUFRLENBQUNGLEtBQUQsQ0FBUixJQUFtQixDQUFyQztBQUNBLHVCQUFPTixRQUFQO0FBQ0QsZUFKTyxDQUFSO0FBS0Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsMEJBQWtCVyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBa0JELE9BbkJBLENBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0hGLGVBaUtFLDhEQUFDLGdCQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsK0JBQ0U7QUFBQSxvQkFDR2xCLFlBQVksQ0FBQ1MsT0FBYixDQUFxQlUsTUFBckIsQ0FBNEJiLEdBQTVCLENBQWdDLFVBQUNjLEtBQUQsRUFBUUYsS0FBUixFQUFrQjtBQUNqRCw2QkFBVUEsS0FBVixrQkFBdUJFLEtBQUssQ0FBQ0MsQ0FBTixDQUFRQyxPQUFSLENBQWdCLENBQWhCLENBQXZCLGlCQUFnREYsS0FBSyxDQUFDRyxDQUFOLENBQVFELE9BQVIsQ0FDOUMsQ0FEOEMsQ0FBaEQ7QUFJRCxXQUxBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqS0Y7QUFBQSxrQkFERjtBQWlMRDs7R0E1TmV2QyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5MjU4N2UxNDQ2NTg3MzViZmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFZTUCB9IGZyb20gXCJDYWxjdWxhdGlvbnMvdHlwZXNcIlxuXG5mdW5jdGlvbiBHQ0QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoIWIpIHtcbiAgICByZXR1cm4gYVxuICB9XG5cbiAgcmV0dXJuIEdDRChiLCBhICUgYilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVEZW5zaXR5KHtcbiAgdmVydGljZXMsXG4gIHN1YmRpdmlzaW9ucyxcbiAgcG9pbnRzLFxufTogVlNQKTogbnVtYmVyIHtcbiAgY29uc3QgZGVuc2l0eSA9XG4gICAgKHZlcnRpY2VzICogc3ViZGl2aXNpb25zKSAvIEdDRCh2ZXJ0aWNlcyAqIHN1YmRpdmlzaW9ucywgcG9pbnRzKVxuXG4gIHJldHVybiBkZW5zaXR5XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nZXRMaW5lRGVuc2l0eVwiXG4iLCJpbXBvcnQgXCJAcmVhY2gvc2xpZGVyL3N0eWxlcy5jc3NcIlxuXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQHJlYWNoL3NsaWRlclwiXG5pbXBvcnQgeyBQNUNhbnZhcyB9IGZyb20gXCJDb21wb25lbnRzL1A1Q2FudmFzXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbFZhbHVlcyB9IGZyb20gXCJTcmMvZ2xvYmFsc1wiXG5pbXBvcnQgeyBza2V0Y2ggfSBmcm9tIFwiU3JjL3NrZXRjaFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBnZXRMaW5lRGVuc2l0eSB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TGluZURlbnNpdHlcIlxuXG5jb25zdCBTdHlsZWRQNUNhbnZhcyA9IHN0eWxlZChQNUNhbnZhcylgXG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG5gXG5cbmNvbnN0IFN0eWxlZFdyYXBwZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEzMHB4O1xuICAmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuYFxuY29uc3QgVG9nZ2xlQm94ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4IDA7XG5gXG5cbmNvbnN0IFRvZ2dsZUFyZWEgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlci10b3A6IHNvbGlkIGdyZXkgMnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDJweDtcbmBcblxuY29uc3QgSnVtcHNBcmVhID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDJweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICAmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgJiBpbnB1dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG5gXG5jb25zdCBUb3RhbEp1bXBzID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEvNjtcbiAgZGlzcGxheTogZ3JpZDtcbmBcblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgW3ZlcnRleCwgc2V0VmVydGV4XSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy52ZXJ0aWNlcylcbiAgY29uc3QgW3N1YmRpdmlzaW9ucywgc2V0U3ViZGl2aXNpb25zXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMpXG4gIGNvbnN0IFtwb2ludHMsIHNldFBvaW50c10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMucG9pbnRzKVxuICBjb25zdCBbc2hvd1N1YmRpdmlzaW9ucywgc2V0U2hvd1N1YmRpdmlzaW9uc10gPSB1c2VTdGF0ZShcbiAgICBHbG9iYWxWYWx1ZXMuc2hvd1N1YmRpdmlzaW9uc1xuICApXG4gIGNvbnN0IFtzaG93VmVydGljZXMsIHNldFNob3dWZXJ0aWNlc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc2hvd1ZlcnRpY2VzKVxuICBjb25zdCBbanVtcHMsIHNldEp1bXBzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5qdW1wcylcbiAgY29uc3QgW3RvdGFsSnVtcHMsIHNldFRvdGFsSnVtcHNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3Nob3VsZFNsb3dEcmF3LCBzZXRTaG91bGRTbG93RHJhd10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpXG5cbiAgY29uc3QgZ2xvYmFsVmFsdWVzID0gdXNlUmVmKEdsb2JhbFZhbHVlcylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICBpZiAoanVtcHMubGVuZ3RoIDwgdG90YWxKdW1wcykge1xuICAgICAgICByZXR1cm4gWy4uLkFycmF5KHRvdGFsSnVtcHMpXS5tYXAoKCkgPT4gMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZS5zbGljZSgwLCB0b3RhbEp1bXBzIC0gMSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbdG90YWxKdW1wc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC52ZXJ0aWNlcyA9IHZlcnRleFxuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnN1YmRpdmlzaW9ucyA9IHN1YmRpdmlzaW9uc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnBvaW50cyA9IHBvaW50c1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnNob3dTdWJkaXZpc2lvbnMgPSBzaG93U3ViZGl2aXNpb25zXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2hvd1ZlcnRpY2VzID0gc2hvd1ZlcnRpY2VzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuanVtcHMgPSBqdW1wc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnNsb3dEcmF3ID0gc2hvdWxkU2xvd0RyYXdcbiAgfSwgW1xuICAgIHZlcnRleCxcbiAgICBzdWJkaXZpc2lvbnMsXG4gICAgcG9pbnRzLFxuICAgIHNob3dTdWJkaXZpc2lvbnMsXG4gICAgc2hvd1ZlcnRpY2VzLFxuICAgIGp1bXBzLFxuICAgIHNob3VsZFNsb3dEcmF3LFxuICBdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGxheWluZyBXaXRoIFBvbHlnb25zPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJNYXRocywgUG9seWdvbnMgYW5kIEFkdmVudHVyZXMgdG8gYmUgaGFkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvcHdwL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWV5ZXItcmVzZXQvMi4wL3Jlc2V0Lm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi1ObUxrRElVMUMvQzg4d2kzMjRIQmMrUzJrTGhpMDhQTjVHRGVVVlZWQy9CVnQvOUl6ZHNjOVNWZVZmQTFVWmJZM3NIVWxEU3lSWGhDekhmcjZobVBQdz09XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U3R5bGVkUDVDYW52YXMgc2tldGNoPXtza2V0Y2h9IC8+XG4gICAgICA8aDE+XG4gICAgICAgIFBvbHlnb246ICh7dmVydGV4fSx7c3ViZGl2aXNpb25zfSx7cG9pbnRzfVxuICAgICAgICB7anVtcHMubGVuZ3RoID4gMCAmJiBgKCR7anVtcHM/LmpvaW4oXCIsXCIpfSlgfSkgLSBMaW5lczoge2dldExpbmVEZW5zaXR5fVxuICAgICAgPC9oMT5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZXJ0ZXgtbnVtYmVyLXNsaWRlclwiPlZlcnRleCBTbGlkZXI8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MjB9XG4gICAgICAgICAgICBpZD1cInZlcnRleC1udW1iZXItc2xpZGVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFZlcnRleCh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dmVydGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmVydGV4LW51bWJlci1pbnB1dFwiPlZlcnRleCBJbnB1dDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwidmVydGV4LW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0VmVydGV4KHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2ZXJ0ZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJkaXZpc2lvbi1udW1iZXItc2xpZGVyXCI+U3ViZGl2aXNpb24gU2xpZGVyPC9sYWJlbD5cbiAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBtYXg9ezEwMDB9XG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U3ViZGl2aXNpb25zKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJkaXZpc2lvbi1udW1iZXItaW5wdXRcIj5TdWJkaXZpc2lvbiBJbnB1dDwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJzdWJkaXZpc2lvbi1udW1iZXItaW5wdXRcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFN1YmRpdmlzaW9ucyhwYXJzZUludCh2YWx1ZSkgfHwgMSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17c3ViZGl2aXNpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRTbGlkZXI+XG4gICAgICA8U3R5bGVkU2xpZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIj5Qb2ludHMgU2xpZGVyPC9sYWJlbD5cbiAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBpZD1cInBvaW50cy1udW1iZXItc2xpZGVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFBvaW50cyh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17cG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9pbnRzLW51bWJlci1pbnB1dFwiPlBvaW50cyBJbnB1dDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwicG9pbnRzLW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0UG9pbnRzKHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtwb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxUb2dnbGVBcmVhPlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXN1YmRpdmlzaW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17YCR7c2hvd1N1YmRpdmlzaW9uc31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd1N1YmRpdmlzaW9ucyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXN1YmRpdmlzaW9uc1wiPlRvZ2dsZSBTdWJkaXZpc2lvbnM8L2xhYmVsPlxuICAgICAgICA8L1RvZ2dsZUJveD5cbiAgICAgICAgPFRvZ2dsZUJveD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInRvZ2dsZS12ZXJ0aWNlc1wiXG4gICAgICAgICAgICB2YWx1ZT17YCR7c2hvd1ZlcnRpY2VzfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93VmVydGljZXMoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS12ZXJ0aWNlc1wiPlRvZ2dsZSBWZXJ0aWNlczwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXNsb3ctZHJhd1wiXG4gICAgICAgICAgICB2YWx1ZT17YCR7c2hvdWxkU2xvd0RyYXd9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3VsZFNsb3dEcmF3KGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtc2xvdy1kcmF3XCI+VG9nZ2xlIERyYXdpbmc8L2xhYmVsPlxuICAgICAgICA8L1RvZ2dsZUJveD5cbiAgICAgIDwvVG9nZ2xlQXJlYT5cbiAgICAgIDxKdW1wc0FyZWE+XG4gICAgICAgIDxUb3RhbEp1bXBzPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWwtanVtcHNcIj5Ub3RhbCBKdW1wczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwidG90YWwtanVtcHNcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFRvdGFsSnVtcHMocGFyc2VJbnQodmFsdWUpIHx8IDApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RvdGFsSnVtcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ub3RhbEp1bXBzPlxuICAgICAgICB7Wy4uLkFycmF5KHRvdGFsSnVtcHMpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtganVtcC0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGp1bXAtJHtpbmRleH1gfT5KdW1wIHtpbmRleCArIDF9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgaWQ9e2BqdW1wLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRKdW1wcygocHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2aW91c1N0YXRlXVxuICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZVtpbmRleF0gPSBwYXJzZUludCh2YWx1ZSkgfHwgMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L0p1bXBzQXJlYT5cbiAgICAgIDxTdHlsZWRXcmFwcGVyRGl2PlxuICAgICAgICA8cD5MaXN0IG9mIHZlcnRpY2VzOjwvcD5cbiAgICAgICAgPHByZT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIHtnbG9iYWxWYWx1ZXMuY3VycmVudC5tYXRyaXgubWFwKChjb3JkcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2luZGV4fSAtIFg6JHtjb3Jkcy54LnRvRml4ZWQoMyl9LCBZOiR7Y29yZHMueS50b0ZpeGVkKFxuICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgKX0sIFxuYFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgIDwvU3R5bGVkV3JhcHBlckRpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==