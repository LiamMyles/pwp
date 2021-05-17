self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Calculations/getLineDensity */ "./src/calculations/getLineDensity/index.ts");
/* harmony import */ var Components_P5Canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/P5Canvas */ "./src/components/P5Canvas/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Src_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Src/globals */ "./src/globals.ts");
/* harmony import */ var Src_sketch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Src/sketch */ "./src/sketch.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/liam/repos/projects/pwp/src/pages/home/home.tsx",
    _s = $RefreshSig$();










var StyledP5Canvas = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(Components_P5Canvas__WEBPACK_IMPORTED_MODULE_4__.P5Canvas).withConfig({
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.vertices),
      vertices = _useState[0],
      setVertex = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.subdivisions),
      subdivisions = _useState2[0],
      setSubdivisions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.points),
      points = _useState3[0],
      setPoints = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.showSubdivisions),
      showSubdivisions = _useState4[0],
      setShowSubdivisions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.showVertices),
      showVertices = _useState5[0],
      setShowVertices = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.jumps),
      jumps = _useState6[0],
      setJumps = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      totalJumps = _useState7[0],
      setTotalJumps = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues.slowDraw),
      shouldSlowDraw = _useState8[0],
      setShouldSlowDraw = _useState8[1];

  var globalValues = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(Src_globals__WEBPACK_IMPORTED_MODULE_7__.GlobalValues);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
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
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    globalValues.current.vertices = vertices;
    globalValues.current.subdivisions = subdivisions;
    globalValues.current.points = points;
    globalValues.current.showSubdivisions = showSubdivisions;
    globalValues.current.showVertices = showVertices;
    globalValues.current.jumps = jumps;
    globalValues.current.slowDraw = shouldSlowDraw;
  }, [vertices, subdivisions, points, showSubdivisions, showVertices, jumps, shouldSlowDraw]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
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
      sketch: Src_sketch__WEBPACK_IMPORTED_MODULE_8__.sketch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Polygon: (", vertices, ",", subdivisions, ",", points, jumps.length > 0 && "(".concat(jumps === null || jumps === void 0 ? void 0 : jumps.join(","), ")"), ") - Lines:", " ", (0,Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_3__.getLineDensity)({
        vertices: vertices,
        subdivisions: subdivisions,
        points: points
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-slider",
          children: "Vertex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          max: 20,
          id: "vertex-number-slider",
          onChange: function onChange(value) {
            return setVertex(value);
          },
          value: vertices
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-input",
          children: "Vertex Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "vertex-number-input",
          min: 1,
          onChange: function onChange(_ref) {
            var value = _ref.currentTarget.value;
            setVertex(parseInt(value) || 1);
          },
          value: vertices
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-slider",
          children: "Subdivision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
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
          lineNumber: 163,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-input",
          children: "Subdivision Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
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
          lineNumber: 174,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-slider",
          children: "Points"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
          lineNumber: 188,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-input",
          children: "Points Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
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
          lineNumber: 197,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
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
          lineNumber: 210,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-subdivisions",
          children: "Toggle Subdivisions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
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
          lineNumber: 221,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-vertices",
          children: "Toggle Vertices"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
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
          lineNumber: 232,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-slow-draw",
          children: "Toggle Drawing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JumpsArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TotalJumps, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "total-jumps",
          children: "Total Jumps"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
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
          lineNumber: 246,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 9
      }, this), (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(totalJumps)).map(function (_, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "jump-".concat(index),
            children: ["Jump ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
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
            lineNumber: 260,
            columnNumber: 15
          }, _this)]
        }, "jump-".concat(index), true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrapperDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "List of vertices:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
          children: globalValues.current.matrix.map(function (cords, index) {
            return "".concat(index, " - X:").concat(cords.x.toFixed(3), ", Y:").concat(cords.y.toFixed(3), ", \n");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "bWxdp0j3Mf0TjTBJb+zCEHOHpfk=");

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


/***/ }),

/***/ "./node_modules/@reach/auto-id/dist/reach-auto-id.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@reach/auto-id/dist/reach-auto-id.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils/use-isomorphic-layout-effect */ "./node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js");



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

  var _React$useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialId),
      id = _React$useState[0],
      setId = _React$useState[1];

  (0,_reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(function () {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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




/***/ }),

/***/ "./node_modules/@reach/slider/dist/reach-slider.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@reach/slider/dist/reach-slider.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLIDER_HANDLE_ALIGN_CENTER": function() { return /* binding */ SLIDER_HANDLE_ALIGN_CENTER; },
/* harmony export */   "SLIDER_HANDLE_ALIGN_CONTAIN": function() { return /* binding */ SLIDER_HANDLE_ALIGN_CONTAIN; },
/* harmony export */   "SLIDER_ORIENTATION_HORIZONTAL": function() { return /* binding */ SLIDER_ORIENTATION_HORIZONTAL; },
/* harmony export */   "SLIDER_ORIENTATION_VERTICAL": function() { return /* binding */ SLIDER_ORIENTATION_VERTICAL; },
/* harmony export */   "Slider": function() { return /* binding */ Slider; },
/* harmony export */   "SliderHandle": function() { return /* binding */ SliderHandle; },
/* harmony export */   "SliderHandleAlignment": function() { return /* binding */ SliderHandleAlignment; },
/* harmony export */   "SliderInput": function() { return /* binding */ SliderInput; },
/* harmony export */   "SliderMarker": function() { return /* binding */ SliderMarker; },
/* harmony export */   "SliderOrientation": function() { return /* binding */ SliderOrientation; },
/* harmony export */   "SliderRange": function() { return /* binding */ SliderRange; },
/* harmony export */   "SliderTrack": function() { return /* binding */ SliderTrack; },
/* harmony export */   "SliderTrackHighlight": function() { return /* binding */ SliderTrackHighlight; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_auto_id__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @reach/auto-id */ "./node_modules/@reach/auto-id/dist/reach-auto-id.esm.js");
/* harmony import */ var _reach_utils_use_controlled_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/utils/use-controlled-state */ "./node_modules/@reach/utils/use-controlled-state/dist/reach-utils-use-controlled-state.esm.js");
/* harmony import */ var _reach_utils_is_right_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/utils/is-right-click */ "./node_modules/@reach/utils/is-right-click/dist/reach-utils-is-right-click.esm.js");
/* harmony import */ var _reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/utils/use-stable-callback */ "./node_modules/@reach/utils/use-stable-callback/dist/reach-utils-use-stable-callback.esm.js");
/* harmony import */ var _reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/utils/use-isomorphic-layout-effect */ "./node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js");
/* harmony import */ var _reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/utils/owner-document */ "./node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js");
/* harmony import */ var _reach_utils_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reach/utils/context */ "./node_modules/@reach/utils/context/dist/reach-utils-context.esm.js");
/* harmony import */ var _reach_utils_type_check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reach/utils/type-check */ "./node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js");
/* harmony import */ var _reach_utils_make_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reach/utils/make-id */ "./node_modules/@reach/utils/make-id/dist/reach-utils-make-id.esm.js");
/* harmony import */ var _reach_utils_noop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/utils/noop */ "./node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js");
/* harmony import */ var _reach_utils_dev_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reach/utils/dev-utils */ "./node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js");
/* harmony import */ var _reach_utils_compose_refs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reach/utils/compose-refs */ "./node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js");
/* harmony import */ var _reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reach/utils/compose-event-handlers */ "./node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");

















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
var SliderContext = /*#__PURE__*/(0,_reach_utils_context__WEBPACK_IMPORTED_MODULE_7__.createNamedContext)("SliderContext", {});

var useSliderContext = function useSliderContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SliderContext);
}; // These proptypes are shared between the composed SliderInput component and the
// simplified Slider


var sliderPropTypes = {
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  getAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  getAriaValueText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  getValueText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  handleAlignment: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([SliderHandleAlignment.Center, SliderHandleAlignment.Contain]),
  min: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  max: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  orientation: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([SliderOrientation.Horizontal, SliderOrientation.Vertical]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  step: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * Slider
 *
 * @see Docs https://reach.tech/slider#slider
 */

var Slider = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Slider(_ref, forwardedRef) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderInput, _extends({}, props, {
    ref: forwardedRef,
    "data-reach-slider": "",
    __componentName: "Slider"
  }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderTrack, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderRange, null), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderHandle, null), children));
});
/**
 * @see Docs https://reach.tech/slider#slider-props
 */

if (true) {
  Slider.displayName = "Slider";
  Slider.propTypes = /*#__PURE__*/_extends({}, sliderPropTypes, {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
  });
} ////////////////////////////////////////////////////////////////////////////////

/**
 * SliderInput
 *
 * The parent component of the slider interface. This is a lower level component
 * if you need more control over styles or rendering the slider's inner
 * components.
 *
 * @see Docs https://reach.tech/slider#sliderinput
 */


var SliderInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SliderInput(_ref2, forwardedRef) {
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
      __componentName = _ref2$__componentName === void 0 ? "SliderInput" : _ref2$__componentName,
      rest = _objectWithoutPropertiesLoose(_ref2, ["aria-label", "aria-labelledby", "aria-valuetext", "as", "defaultValue", "disabled", "value", "getAriaLabel", "getAriaValueText", "getValueText", "handleAlignment", "max", "min", "name", "onChange", "onKeyDown", "onMouseDown", "onMouseMove", "onMouseUp", "onPointerDown", "onPointerUp", "onTouchEnd", "onTouchMove", "onTouchStart", "orientation", "step", "children", "__componentName"]);

  (0,_reach_utils_dev_utils__WEBPACK_IMPORTED_MODULE_11__.useControlledSwitchWarning)(controlledValue, "value", __componentName);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_14__.default)(!DEPRECATED_getValueText, "The `getValueText` prop in @reach/slider is deprecated. Please use `getAriaValueText` instead.") : 0;
  var touchId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var id = (0,_reach_auto_id__WEBPACK_IMPORTED_MODULE_15__.useId)(rest.id); // Track whether or not the pointer is down without updating the component

  var pointerDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var trackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var handleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var ref = (0,_reach_utils_compose_refs__WEBPACK_IMPORTED_MODULE_12__.useComposedRefs)(sliderRef, forwardedRef);

  var _React$useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      hasFocus = _React$useState[0],
      setHasFocus = _React$useState[1];

  var _useDimensions = useDimensions(handleRef),
      handleDimensions = _objectWithoutPropertiesLoose(_useDimensions, ["ref"]);

  var _useControlledState = (0,_reach_utils_use_controlled_state__WEBPACK_IMPORTED_MODULE_2__.useControlledState)(controlledValue, defaultValue || min),
      _value = _useControlledState[0],
      setValue = _useControlledState[1];

  var value = clamp(_value, min, max);
  var trackPercent = valueToPercent(value, min, max);
  var isVertical = orientation === SliderOrientation.Vertical;
  var handleSize = isVertical ? handleDimensions.height : handleDimensions.width; // TODO: Consider removing the `handleAlignment` prop
  // We may want to use accept a `handlePosition` prop instead and let apps
  // define their own positioning logic, similar to how we do for popovers.

  var handlePosition = "calc(" + trackPercent + "% - " + (handleAlignment === SliderHandleAlignment.Center ? handleSize + "px / 2" : handleSize + "px * " + trackPercent * 0.01) + ")";
  var handlePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handlePosition);
  (0,_reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () {
    handlePositionRef.current = handlePosition;
  }, [handlePosition]);
  var onChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange);
  (0,_reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () {
    onChangeRef.current = onChange;
  }, [onChange]);
  var updateValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function updateValue(newValue) {
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
  var getNewValueFromEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    return getNewValue(getPointerPosition(event, touchId), trackRef.current, {
      step: step,
      orientation: orientation,
      min: min,
      max: max
    });
  }, [max, min, orientation, step]); // https://www.w3.org/TR/wai-aria-practices-1.2/#slider_kbd_interaction

  var handleKeyDown = (0,_reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__.useStableLayoutCallback)(function (event) {
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

  var removeMoveEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_reach_utils_noop__WEBPACK_IMPORTED_MODULE_10__.noop);
  var removeStartEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_reach_utils_noop__WEBPACK_IMPORTED_MODULE_10__.noop);
  var removeEndEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_reach_utils_noop__WEBPACK_IMPORTED_MODULE_10__.noop); // Store our event handlers in refs so we aren't attaching/detaching events
  // on every render if the user doesn't useCallback

  var appEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    onTouchMove: onTouchMove,
    onPointerDown: onPointerDown,
    onPointerUp: onPointerUp
  });
  (0,_reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () {
    appEvents.current.onMouseMove = onMouseMove;
    appEvents.current.onMouseDown = onMouseDown;
    appEvents.current.onMouseUp = onMouseUp;
    appEvents.current.onTouchStart = onTouchStart;
    appEvents.current.onTouchEnd = onTouchEnd;
    appEvents.current.onTouchMove = onTouchMove;
    appEvents.current.onPointerDown = onPointerDown;
    appEvents.current.onPointerUp = onPointerUp;
  }, [onMouseMove, onMouseDown, onMouseUp, onTouchStart, onTouchEnd, onTouchMove, onPointerDown, onPointerUp]);
  var handleSlideStart = (0,_reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__.useStableLayoutCallback)(function (event) {
    if ((0,_reach_utils_is_right_click__WEBPACK_IMPORTED_MODULE_3__.isRightClick)(event)) return;

    if (disabled) {
      pointerDownRef.current = false;
      return;
    }

    var ownerDocument = (0,_reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(sliderRef.current);
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
  var setPointerCapture = (0,_reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__.useStableLayoutCallback)(function (event) {
    var _sliderRef$current;

    if ((0,_reach_utils_is_right_click__WEBPACK_IMPORTED_MODULE_3__.isRightClick)(event)) return;

    if (disabled) {
      pointerDownRef.current = false;
      return;
    }

    pointerDownRef.current = true;
    (_sliderRef$current = sliderRef.current) == null ? void 0 : _sliderRef$current.setPointerCapture(event.pointerId);
  });
  var releasePointerCapture = (0,_reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__.useStableLayoutCallback)(function (event) {
    var _sliderRef$current2;

    if ((0,_reach_utils_is_right_click__WEBPACK_IMPORTED_MODULE_3__.isRightClick)(event)) return;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.releasePointerCapture(event.pointerId);
    pointerDownRef.current = false;
  });
  var handlePointerMove = (0,_reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__.useStableLayoutCallback)(function (event) {
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
  var handleSlideStop = (0,_reach_utils_use_stable_callback__WEBPACK_IMPORTED_MODULE_4__.useStableLayoutCallback)(function (event) {
    if ((0,_reach_utils_is_right_click__WEBPACK_IMPORTED_MODULE_3__.isRightClick)(event)) return;
    pointerDownRef.current = false;
    var newValue = getNewValueFromEvent(event);

    if (newValue == null) {
      return;
    }

    touchId.current = undefined;
    removeMoveEvents.current();
    removeEndEvents.current();
  });
  var addMoveListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var ownerDocument = (0,_reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(sliderRef.current);
    var touchListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onTouchMove, handlePointerMove);
    var mouseListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onMouseMove, handlePointerMove);
    ownerDocument.addEventListener("touchmove", touchListener);
    ownerDocument.addEventListener("mousemove", mouseListener);
    return function () {
      ownerDocument.removeEventListener("touchmove", touchListener);
      ownerDocument.removeEventListener("mousemove", mouseListener);
    };
  }, [handlePointerMove]);
  var addEndListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var ownerDocument = (0,_reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(sliderRef.current);
    var ownerWindow = ownerDocument.defaultView || window;
    var pointerListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onPointerUp, releasePointerCapture);
    var touchListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onTouchEnd, handleSlideStop);
    var mouseListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onMouseUp, handleSlideStop);

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
  var addStartListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // e.preventDefault is ignored by React's synthetic touchStart event, so
    // we attach the listener directly to the DOM node
    // https://github.com/facebook/react/issues/9809#issuecomment-413978405
    var sliderElement = sliderRef.current;

    if (!sliderElement) {
      return _reach_utils_noop__WEBPACK_IMPORTED_MODULE_10__.noop;
    }

    var ownerDocument = (0,_reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(sliderElement);
    var ownerWindow = ownerDocument.defaultView || window;
    var touchListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onTouchStart, handleSlideStart);
    var mouseListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onMouseDown, handleSlideStart);
    var pointerListener = (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(appEvents.current.onPointerDown, setPointerCapture);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    removeStartEvents.current = addStartListener();
    return function () {
      removeStartEvents.current();
      removeEndEvents.current();
      removeMoveEvents.current();
    };
  }, [addStartListener]);
  (0,_reach_utils_dev_utils__WEBPACK_IMPORTED_MODULE_11__.useCheckStyles)("slider");
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderContext.Provider, {
    value: ctx
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({}, rest, {
    ref: ref,
    "data-reach-slider-input": "",
    "data-disabled": disabled ? "" : undefined,
    "data-orientation": orientation,
    tabIndex: -1
  }), (0,_reach_utils_type_check__WEBPACK_IMPORTED_MODULE_8__.isFunction)(children) ? children({
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    value: value,
    name: name,
    id: id && (0,_reach_utils_make_id__WEBPACK_IMPORTED_MODULE_9__.makeId)("input", id)
  })));
});
/**
 * @see Docs https://reach.tech/slider#sliderinput-props
 */

if (true) {
  SliderInput.displayName = "SliderInput";
  SliderInput.propTypes = /*#__PURE__*/_extends({}, sliderPropTypes, {
    children: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)]).isRequired
  });
} ////////////////////////////////////////////////////////////////////////////////

/**
 * SliderTrack
 *
 * @see Docs https://reach.tech/slider#slidertrack
 */


var SliderTrackImpl = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SliderTrack(_ref3, forwardedRef) {
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

  var ref = (0,_reach_utils_compose_refs__WEBPACK_IMPORTED_MODULE_12__.useComposedRefs)(trackRef, forwardedRef);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({
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

if (true) {
  SliderTrackImpl.displayName = "SliderTrack";
  SliderTrackImpl.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
  };
}

var SliderTrack = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SliderTrackImpl);
/**
 * @see Docs https://reach.tech/slider#slidertrack-props
 */

if (true) {
  SliderTrack.displayName = "SliderTrack";
} ////////////////////////////////////////////////////////////////////////////////

/**
 * SliderRange
 *
 * The (typically) highlighted portion of the track that represents the space
 * between the slider's `min` value and its current value.
 *
 * @see Docs https://reach.tech/slider#sliderrange
 */


var SliderRangeImpl = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SliderRange(_ref4, forwardedRef) {
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

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({
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

if (true) {
  SliderRangeImpl.displayName = "SliderRange";
  SliderRangeImpl.propTypes = {};
}

var SliderRange = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SliderRangeImpl); // TODO: Remove in 1.0

var SliderTrackHighlightImpl = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SliderTrackHighlightImpl(props, ref) {
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_14__.default)(false, "`SliderTrackHighlight` has been deprecated in favor of `SliderRange` and will be dropped from a future version of Reach UI.") : 0;
    }, []);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderRangeImpl, _extends({
    "data-reach-slider-track-highlight": ""
  }, props, {
    ref: ref
  }));
});

if (true) {
  SliderTrackHighlightImpl.displayName = "SliderTrackHighlight";
  SliderTrackHighlightImpl.propTypes = SliderRangeImpl.propTypes;
}

/**
 * This component was renamed to `SliderRange` in a previous version of Reach
 * UI. `SliderTrackHighlight` will be dropped in a future version. We recommend
 * updating your projects to replace `SliderTrackHighlight` with `SliderRange`.
 *
 * @alias SliderRange
 */
var SliderTrackHighlight = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SliderTrackHighlightImpl);
/**
 * `SliderRange` accepts any props that a HTML div component accepts.
 * `SliderRange` will not accept or render any children.
 *
 * @see Docs https://reach.tech/slider#sliderrange-props
 */

if (true) {
  SliderRange.displayName = "SliderRange";
} ////////////////////////////////////////////////////////////////////////////////

/**
 * SliderHandle
 *
 * The handle that the user drags along the track to set the slider value.
 *
 * @see Docs https://reach.tech/slider#sliderhandle
 */


var SliderHandleImpl = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SliderHandle(_ref5, forwardedRef) {
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

  var ref = (0,_reach_utils_compose_refs__WEBPACK_IMPORTED_MODULE_12__.useComposedRefs)(handleRef, forwardedRef);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({
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
    onBlur: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(onBlur, function () {
      setHasFocus(false);
    }),
    onFocus: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(onFocus, function () {
      setHasFocus(true);
    }),
    onKeyDown: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_13__.composeEventHandlers)(onKeyDown, handleKeyDown),
    style: _extends({
      position: "absolute"
    }, isVertical ? {
      bottom: handlePosition
    } : {
      left: handlePosition
    }, style)
  }));
});

if (true) {
  SliderHandleImpl.displayName = "SliderHandle";
  SliderHandleImpl.propTypes = {};
}

var SliderHandle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SliderHandleImpl);
/**
 * `SliderRange` accepts any props that a HTML div component accepts.
 *
 * @see Docs https://reach.tech/slider#sliderhandle-props
 */

if (true) {
  SliderHandle.displayName = "SliderHandle";
} ////////////////////////////////////////////////////////////////////////////////

/**
 * SliderMarker
 *
 * A fixed value marker. These can be used to illustrate a range of steps or
 * highlight important points along the slider track.
 *
 * @see Docs https://reach.tech/slider#slidermarker
 */


var SliderMarkerImpl = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SliderMarker(_ref6, forwardedRef) {
  var _ref6$as = _ref6.as,
      Comp = _ref6$as === void 0 ? "div" : _ref6$as,
      children = _ref6.children,
      _ref6$style = _ref6.style,
      style = _ref6$style === void 0 ? {} : _ref6$style,
      value = _ref6.value,
      props = _objectWithoutPropertiesLoose(_ref6, ["as", "children", "style", "value"]);

  var _useSliderContext4 = useSliderContext(),
      disabled = _useSliderContext4.disabled,
      isVertical = _useSliderContext4.isVertical,
      orientation = _useSliderContext4.orientation,
      sliderMin = _useSliderContext4.sliderMin,
      sliderMax = _useSliderContext4.sliderMax,
      sliderValue = _useSliderContext4.value;

  var inRange = !(value < sliderMin || value > sliderMax);
  var absoluteStartPosition = valueToPercent(value, sliderMin, sliderMax) + "%";
  var state = value < sliderValue ? "under-value" : value === sliderValue ? "at-value" : "over-value";
  return inRange ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({
    ref: forwardedRef,
    style: _extends({
      position: "absolute"
    }, isVertical ? {
      bottom: absoluteStartPosition
    } : {
      left: absoluteStartPosition
    }, style)
  }, props, {
    "data-reach-slider-marker": "",
    "data-disabled": disabled ? "" : undefined,
    "data-orientation": orientation,
    "data-state": state,
    "data-value": value,
    children: children
  })) : null;
});

if (true) {
  SliderMarkerImpl.displayName = "SliderMarker";
  SliderMarkerImpl.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
  };
}

var SliderMarker = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SliderMarkerImpl);
/**
 * @see Docs https://reach.tech/slider#slidermarker-props
 */

if (true) {
  SliderMarker.displayName = "SliderMarker";
} ////////////////////////////////////////////////////////////////////////////////


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
  var _React$useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
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


  (0,_reach_utils_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () {
    var ownerDocument = (0,_reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(ref.current);
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

/* harmony default export */ __webpack_exports__["default"] = (Slider);



/***/ }),

/***/ "./node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseDOM": function() { return /* binding */ canUseDOM; }
/* harmony export */ });
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}




/***/ }),

/***/ "./node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeEventHandlers": function() { return /* binding */ composeEventHandlers; }
/* harmony export */ });
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




/***/ }),

/***/ "./node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignRef": function() { return /* binding */ assignRef; },
/* harmony export */   "useComposedRefs": function() { return /* binding */ useComposedRefs; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type_check_dist_reach_utils_type_check_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type-check/dist/reach-utils-type-check.esm.js */ "./node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js");



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

  if ((0,_type_check_dist_reach_utils_type_check_esm_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
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

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      assignRef(ref, node);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, refs);
}




/***/ }),

/***/ "./node_modules/@reach/utils/context/dist/reach-utils-context.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@reach/utils/context/dist/reach-utils-context.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNamedContext": function() { return /* binding */ createNamedContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createNamedContext(name, defaultValue) {
  var Ctx = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);

  if (true) {
    Ctx.displayName = name;
  }

  return Ctx;
}




/***/ }),

/***/ "./node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStyles": function() { return /* binding */ checkStyles; },
/* harmony export */   "useCheckStyles": function() { return /* binding */ useCheckStyles; },
/* harmony export */   "useControlledSwitchWarning": function() { return /* binding */ useControlledSwitchWarning; },
/* harmony export */   "useStateLogger": function() { return /* binding */ useStateLogger; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


/* eslint-disable react-hooks/rules-of-hooks */
var checkedPkgs = {};
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */

function useStateLogger(state, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  if (true) {
    var debugRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(DEBUG);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      debugRef.current = DEBUG;
    }, [DEBUG]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      if (debugRef.current) {
        console.group("State Updated");
        console.log("%c" + state, "font-weight: normal; font-size: 120%; font-style: italic;");
        console.groupEnd();
      }
    }, [state]);
  }
}
/**
 * When in dev mode, checks that styles for a given `@reach` package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */

function checkStyles(packageName) {
  if (true) {
    // In CJS files, process.env.NODE_ENV is stripped from our build, but we
    // need it to prevent style checks from clogging up user logs while testing.
    // This is a workaround until we can tweak the build a bit to accommodate.
    var _ref = typeof process !== "undefined" ? process.env : {
      NODE_ENV: "development"
    },
        environment = _ref.NODE_ENV; // only check once per package


    if (checkedPkgs[packageName]) return;
    checkedPkgs[packageName] = true;

    if (environment === "development" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n  \n      import \"@reach/" + packageName + "/styles.css\";\n  \n    Otherwise you'll need to include them some other way:\n  \n      <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n  \n    For more information visit https://ui.reach.tech/styling.\n    ");
    }
  }
}
/**
 * When in dev mode, checks that styles for a given `@reach` package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example useCheckStyles("dialog") will check for styles for @reach/dialog
 */

function useCheckStyles(packageName) {
  if (true) {
    var name = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(packageName);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      return void (name.current = packageName);
    }, [packageName]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      return checkStyles(name.current);
    }, []);
  }
}
/**
 * Logs a warning in dev mode when a component switches from controlled to
 * uncontrolled, or vice versa
 *
 * A single prop should typically be used to determine whether or not a
 * component is controlled or not.
 *
 * @param controlledValue
 * @param controlledPropName
 * @param componentName
 */

function useControlledSwitchWarning(controlledValue, controlledPropName, componentName) {
  if (true) {
    var controlledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(controlledValue != null);
    var nameCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
      componentName: componentName,
      controlledPropName: controlledPropName
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      nameCache.current = {
        componentName: componentName,
        controlledPropName: controlledPropName
      };
    }, [componentName, controlledPropName]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      var wasControlled = controlledRef.current;
      var _nameCache$current = nameCache.current,
          componentName = _nameCache$current.componentName,
          controlledPropName = _nameCache$current.controlledPropName;
      var isControlled = controlledValue != null;

      if (wasControlled !== isControlled) {
        console.error("A component is changing an " + (wasControlled ? "" : "un") + "controlled `" + controlledPropName + "` state of " + componentName + " to be " + (wasControlled ? "un" : "") + "controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled " + componentName + " element for the lifetime of the component.\n      More info: https://fb.me/react-controlled-components");
      }
    }, [controlledValue]);
  }
}




/***/ }),

/***/ "./node_modules/@reach/utils/is-right-click/dist/reach-utils-is-right-click.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@reach/utils/is-right-click/dist/reach-utils-is-right-click.esm.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRightClick": function() { return /* binding */ isRightClick; }
/* harmony export */ });
/**
 * Detects right clicks
 *
 * @param nativeEvent
 */
function isRightClick(nativeEvent) {
  return "which" in nativeEvent ? nativeEvent.which === 3 : "button" in nativeEvent ? nativeEvent.button === 2 : false;
}




/***/ }),

/***/ "./node_modules/@reach/utils/make-id/dist/reach-utils-make-id.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@reach/utils/make-id/dist/reach-utils-make-id.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeId": function() { return /* binding */ makeId; }
/* harmony export */ });
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




/***/ }),

/***/ "./node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": function() { return /* binding */ noop; }
/* harmony export */ });
function noop() {}




/***/ }),

/***/ "./node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOwnerDocument": function() { return /* binding */ getOwnerDocument; },
/* harmony export */   "getOwnerWindow": function() { return /* binding */ getOwnerWindow; }
/* harmony export */ });
/* harmony import */ var _can_use_dom_dist_reach_utils_can_use_dom_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../can-use-dom/dist/reach-utils-can-use-dom.esm.js */ "./node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js");


/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return (0,_can_use_dom_dist_reach_utils_can_use_dom_esm_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM)() ? element ? element.ownerDocument : document : null;
}
/**
 * TODO: Remove in 1.0
 */

function getOwnerWindow(element) {
  var ownerDocument = getOwnerDocument(element);
  return ownerDocument ? ownerDocument.defaultView || window : null;
}




/***/ }),

/***/ "./node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBoolean": function() { return /* binding */ isBoolean; },
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "isString": function() { return /* binding */ isString; }
/* harmony export */ });
/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */
function isBoolean(value) {
  return typeof value === "boolean";
}
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
 * Checks whether or not a value is a number.
 *
 * @param value
 */

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */

function isString(value) {
  return typeof value === "string";
}




/***/ }),

/***/ "./node_modules/@reach/utils/use-controlled-state/dist/reach-utils-use-controlled-state.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@reach/utils/use-controlled-state/dist/reach-utils-use-controlled-state.esm.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControlledState": function() { return /* binding */ useControlledState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlledValue
 * @param defaultValue
 */
function useControlledState(controlledValue, defaultValue) {
  var controlledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(controlledValue != null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),
      valueState = _useState[0],
      setValue = _useState[1];

  var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (n) {
    if (!controlledRef.current) {
      setValue(n);
    }
  }, []);
  return [controlledRef.current ? controlledValue : valueState, set];
}




/***/ }),

/***/ "./node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _can_use_dom_dist_reach_utils_can_use_dom_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../can-use-dom/dist/reach-utils-can-use-dom.esm.js */ "./node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js");



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

var useIsomorphicLayoutEffect = /*#__PURE__*/(0,_can_use_dom_dist_reach_utils_can_use_dom_esm_js__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/@reach/utils/use-stable-callback/dist/reach-utils-use-stable-callback.esm.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@reach/utils/use-stable-callback/dist/reach-utils-use-stable-callback.esm.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStableCallback": function() { return /* binding */ useStableCallback; },
/* harmony export */   "useStableLayoutCallback": function() { return /* binding */ useStableLayoutCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_isomorphic_layout_effect_dist_reach_utils_use_isomorphic_layout_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js */ "./node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js");
/* harmony import */ var _can_use_dom_dist_reach_utils_can_use_dom_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../can-use-dom/dist/reach-utils-can-use-dom.esm.js */ "./node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js");




/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when
 * passed as a dependency.
 */
function createStableCallbackHook(useEffectHook, callback) {
  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
  useEffectHook(function () {
    callbackRef.current = callback;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    callbackRef.current && callbackRef.current.apply(callbackRef, arguments);
  }, []);
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when passed
 * as a dependency.
 */


function useStableCallback(callback) {
  return createStableCallbackHook(react__WEBPACK_IMPORTED_MODULE_0__.useEffect, callback);
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
  return createStableCallbackHook(_use_isomorphic_layout_effect_dist_reach_utils_use_isomorphic_layout_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect, callback);
}




/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
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
          printWarning(
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

          printWarning(
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
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
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

module.exports = function(isValidElement, throwOnDirectAccess) {
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
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
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
      if (!ReactIs.isValidElementType(propValue)) {
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
      if (true) {
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
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
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
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
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
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvYXV0by1pZC9kaXN0L3JlYWNoLWF1dG8taWQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL3NsaWRlci9kaXN0L3JlYWNoLXNsaWRlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvY2FuLXVzZS1kb20vZGlzdC9yZWFjaC11dGlscy1jYW4tdXNlLWRvbS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvY29tcG9zZS1ldmVudC1oYW5kbGVycy9kaXN0L3JlYWNoLXV0aWxzLWNvbXBvc2UtZXZlbnQtaGFuZGxlcnMuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL3V0aWxzL2NvbXBvc2UtcmVmcy9kaXN0L3JlYWNoLXV0aWxzLWNvbXBvc2UtcmVmcy5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvY29udGV4dC9kaXN0L3JlYWNoLXV0aWxzLWNvbnRleHQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL3V0aWxzL2Rldi11dGlscy9kaXN0L3JlYWNoLXV0aWxzLWRldi11dGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvaXMtcmlnaHQtY2xpY2svZGlzdC9yZWFjaC11dGlscy1pcy1yaWdodC1jbGljay5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvbWFrZS1pZC9kaXN0L3JlYWNoLXV0aWxzLW1ha2UtaWQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL3V0aWxzL25vb3AvZGlzdC9yZWFjaC11dGlscy1ub29wLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWFjaC91dGlscy9vd25lci1kb2N1bWVudC9kaXN0L3JlYWNoLXV0aWxzLW93bmVyLWRvY3VtZW50LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWFjaC91dGlscy90eXBlLWNoZWNrL2Rpc3QvcmVhY2gtdXRpbHMtdHlwZS1jaGVjay5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvdXNlLWNvbnRyb2xsZWQtc3RhdGUvZGlzdC9yZWFjaC11dGlscy11c2UtY29udHJvbGxlZC1zdGF0ZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC9kaXN0L3JlYWNoLXV0aWxzLXVzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL3V0aWxzL3VzZS1zdGFibGUtY2FsbGJhY2svZGlzdC9yZWFjaC11dGlscy11c2Utc3RhYmxlLWNhbGxiYWNrLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRQNUNhbnZhcyIsInN0eWxlZCIsIlA1Q2FudmFzIiwiU3R5bGVkV3JhcHBlckRpdiIsIlN0eWxlZFNsaWRlciIsIlRvZ2dsZUJveCIsIlRvZ2dsZUFyZWEiLCJKdW1wc0FyZWEiLCJUb3RhbEp1bXBzIiwiSG9tZSIsInVzZVN0YXRlIiwiR2xvYmFsVmFsdWVzIiwidmVydGljZXMiLCJzZXRWZXJ0ZXgiLCJzdWJkaXZpc2lvbnMiLCJzZXRTdWJkaXZpc2lvbnMiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJzaG93U3ViZGl2aXNpb25zIiwic2V0U2hvd1N1YmRpdmlzaW9ucyIsInNob3dWZXJ0aWNlcyIsInNldFNob3dWZXJ0aWNlcyIsImp1bXBzIiwic2V0SnVtcHMiLCJ0b3RhbEp1bXBzIiwic2V0VG90YWxKdW1wcyIsInNob3VsZFNsb3dEcmF3Iiwic2V0U2hvdWxkU2xvd0RyYXciLCJnbG9iYWxWYWx1ZXMiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwcmV2aW91c1N0YXRlIiwibGVuZ3RoIiwiQXJyYXkiLCJtYXAiLCJuZXdTdGF0ZSIsInNsaWNlIiwiY3VycmVudCIsInNsb3dEcmF3Iiwic2tldGNoIiwiam9pbiIsImdldExpbmVEZW5zaXR5IiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJjaGVja2VkIiwiXyIsImluZGV4IiwibWF0cml4IiwiY29yZHMiLCJ4IiwidG9GaXhlZCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsMERBQU0sQ0FBQ0MseURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrREFBcEI7S0FBTUYsYztBQU1OLElBQU1HLGdCQUFnQixHQUFHRixxRUFBSDtBQUFBO0FBQUE7QUFBQSwwR0FBdEI7TUFBTUUsZ0I7QUFhTixJQUFNQyxZQUFZLEdB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsQ0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBLG1CQUFtQixhQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsK0RBQWUsT0FBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiZWE5MDgyNDZhYjU0NTc5YjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcmVhY2gvc2xpZGVyL3N0eWxlcy5jc3NcIlxuXG5pbXBvcnQge1NsaWRlcn0gZnJvbSBcIkByZWFjaC9zbGlkZXJcIlxuaW1wb3J0IHsgZ2V0TGluZURlbnNpdHkgfSBmcm9tIFwiQ2FsY3VsYXRpb25zL2dldExpbmVEZW5zaXR5XCJcbmltcG9ydCB7IFA1Q2FudmFzIH0gZnJvbSBcIkNvbXBvbmVudHMvUDVDYW52YXNcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2xvYmFsVmFsdWVzIH0gZnJvbSBcIlNyYy9nbG9iYWxzXCJcbmltcG9ydCB7IHNrZXRjaCB9IGZyb20gXCJTcmMvc2tldGNoXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgU3R5bGVkUDVDYW52YXMgPSBzdHlsZWQoUDVDYW52YXMpYFxuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuYFxuXG5jb25zdCBTdHlsZWRXcmFwcGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGgxIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbmBcblxuY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMzBweDtcbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAmIGlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbmBcbmNvbnN0IFRvZ2dsZUJveCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMTBweCAwO1xuYFxuXG5jb25zdCBUb2dnbGVBcmVhID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAycHg7XG5gXG5cbmNvbnN0IEp1bXBzQXJlYSA9IHN0eWxlZChTdHlsZWRXcmFwcGVyRGl2KWBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAycHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuYFxuY29uc3QgVG90YWxKdW1wcyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxLzY7XG4gIGRpc3BsYXk6IGdyaWQ7XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBIb21lKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFt2ZXJ0aWNlcywgc2V0VmVydGV4XSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy52ZXJ0aWNlcylcbiAgY29uc3QgW3N1YmRpdmlzaW9ucywgc2V0U3ViZGl2aXNpb25zXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMpXG4gIGNvbnN0IFtwb2ludHMsIHNldFBvaW50c10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMucG9pbnRzKVxuICBjb25zdCBbc2hvd1N1YmRpdmlzaW9ucywgc2V0U2hvd1N1YmRpdmlzaW9uc10gPSB1c2VTdGF0ZShcbiAgICBHbG9iYWxWYWx1ZXMuc2hvd1N1YmRpdmlzaW9uc1xuICApXG4gIGNvbnN0IFtzaG93VmVydGljZXMsIHNldFNob3dWZXJ0aWNlc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc2hvd1ZlcnRpY2VzKVxuICBjb25zdCBbanVtcHMsIHNldEp1bXBzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5qdW1wcylcbiAgY29uc3QgW3RvdGFsSnVtcHMsIHNldFRvdGFsSnVtcHNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3Nob3VsZFNsb3dEcmF3LCBzZXRTaG91bGRTbG93RHJhd10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpXG5cbiAgY29uc3QgZ2xvYmFsVmFsdWVzID0gdXNlUmVmKEdsb2JhbFZhbHVlcylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICBpZiAoanVtcHMubGVuZ3RoIDwgdG90YWxKdW1wcykge1xuICAgICAgICByZXR1cm4gWy4uLkFycmF5KHRvdGFsSnVtcHMpXS5tYXAoKCkgPT4gMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZS5zbGljZSgwLCB0b3RhbEp1bXBzIC0gMSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbdG90YWxKdW1wc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC52ZXJ0aWNlcyA9IHZlcnRpY2VzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc3ViZGl2aXNpb25zID0gc3ViZGl2aXNpb25zXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQucG9pbnRzID0gcG9pbnRzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2hvd1N1YmRpdmlzaW9ucyA9IHNob3dTdWJkaXZpc2lvbnNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zaG93VmVydGljZXMgPSBzaG93VmVydGljZXNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5qdW1wcyA9IGp1bXBzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2xvd0RyYXcgPSBzaG91bGRTbG93RHJhd1xuICB9LCBbXG4gICAgdmVydGljZXMsXG4gICAgc3ViZGl2aXNpb25zLFxuICAgIHBvaW50cyxcbiAgICBzaG93U3ViZGl2aXNpb25zLFxuICAgIHNob3dWZXJ0aWNlcyxcbiAgICBqdW1wcyxcbiAgICBzaG91bGRTbG93RHJhdyxcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBsYXlpbmcgV2l0aCBQb2x5Z29uczwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTWF0aHMsIFBvbHlnb25zIGFuZCBBZHZlbnR1cmVzIHRvIGJlIGhhZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3B3cC9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21leWVyLXJlc2V0LzIuMC9yZXNldC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItTm1Ma0RJVTFDL0M4OHdpMzI0SEJjK1Mya0xoaTA4UE41R0RlVVZWVkMvQlZ0LzlJemRzYzlTVmVWZkExVVpiWTNzSFVsRFN5UlhoQ3pIZnI2aG1QUHc9PVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN0eWxlZFA1Q2FudmFzIHNrZXRjaD17c2tldGNofSAvPlxuICAgICAgPGgxPlxuICAgICAgICBQb2x5Z29uOiAoe3ZlcnRpY2VzfSx7c3ViZGl2aXNpb25zfSx7cG9pbnRzfVxuICAgICAgICB7anVtcHMubGVuZ3RoID4gMCAmJiBgKCR7anVtcHM/LmpvaW4oXCIsXCIpfSlgfSkgLSBMaW5lczp7XCIgXCJ9XG4gICAgICAgIHtnZXRMaW5lRGVuc2l0eSh7IHZlcnRpY2VzLCBzdWJkaXZpc2lvbnMsIHBvaW50cyB9KX1cbiAgICAgIDwvaDE+XG4gICAgICA8U3R5bGVkU2xpZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmVydGV4LW51bWJlci1zbGlkZXJcIj5WZXJ0ZXg8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MjB9XG4gICAgICAgICAgICBpZD1cInZlcnRleC1udW1iZXItc2xpZGVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFZlcnRleCh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dmVydGljZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCI+VmVydGV4IElucHV0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRWZXJ0ZXgocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3ZlcnRpY2VzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRTbGlkZXI+XG4gICAgICA8U3R5bGVkU2xpZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3ViZGl2aXNpb24tbnVtYmVyLXNsaWRlclwiPlN1YmRpdmlzaW9uPC9sYWJlbD5cbiAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBtYXg9ezEwMDB9XG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U3ViZGl2aXNpb25zKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJkaXZpc2lvbi1udW1iZXItaW5wdXRcIj5TdWJkaXZpc2lvbiBJbnB1dDwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJzdWJkaXZpc2lvbi1udW1iZXItaW5wdXRcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFN1YmRpdmlzaW9ucyhwYXJzZUludCh2YWx1ZSkgfHwgMSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17c3ViZGl2aXNpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRTbGlkZXI+XG4gICAgICA8U3R5bGVkU2xpZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIj5Qb2ludHM8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIGlkPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UG9pbnRzKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtwb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLWlucHV0XCI+UG9pbnRzIElucHV0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwb2ludHMtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRQb2ludHMocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3BvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFRvZ2dsZUFyZWE+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93U3ViZGl2aXNpb25zfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3ViZGl2aXNpb25zKGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCI+VG9nZ2xlIFN1YmRpdmlzaW9uczwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXZlcnRpY2VzXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93VmVydGljZXN9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dWZXJ0aWNlcyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXZlcnRpY2VzXCI+VG9nZ2xlIFZlcnRpY2VzPC9sYWJlbD5cbiAgICAgICAgPC9Ub2dnbGVCb3g+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc2xvdy1kcmF3XCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG91bGRTbG93RHJhd31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvdWxkU2xvd0RyYXcoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1zbG93LWRyYXdcIj5Ub2dnbGUgRHJhd2luZzwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgPC9Ub2dnbGVBcmVhPlxuICAgICAgPEp1bXBzQXJlYT5cbiAgICAgICAgPFRvdGFsSnVtcHM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbC1qdW1wc1wiPlRvdGFsIEp1bXBzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ0b3RhbC1qdW1wc1wiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0VG90YWxKdW1wcyhwYXJzZUludCh2YWx1ZSkgfHwgMClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dG90YWxKdW1wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RvdGFsSnVtcHM+XG4gICAgICAgIHtbLi4uQXJyYXkodG90YWxKdW1wcyldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2BqdW1wLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtganVtcC0ke2luZGV4fWB9Pkp1bXAge2luZGV4ICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBpZD17YGp1bXAtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlKSB8fCAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvSnVtcHNBcmVhPlxuICAgICAgPFN0eWxlZFdyYXBwZXJEaXY+XG4gICAgICAgIDxwPkxpc3Qgb2YgdmVydGljZXM6PC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAge2dsb2JhbFZhbHVlcy5jdXJyZW50Lm1hdHJpeC5tYXAoKGNvcmRzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7aW5kZXh9IC0gWDoke2NvcmRzLngudG9GaXhlZCgzKX0sIFk6JHtjb3Jkcy55LnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICApfSwgXG5gXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgPC9TdHlsZWRXcmFwcGVyRGl2PlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJ0ByZWFjaC91dGlscy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0JztcblxuLypcbiAqIFdlbGNvbWUgdG8gQHJlYWNoL2F1dG8taWQhXG5cbiAqIExldCdzIHNlZSBpZiB3ZSBjYW4gbWFrZSBzZW5zZSBvZiB3aHkgdGhpcyBob29rIGV4aXN0cyBhbmQgaXRzXG4gKiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBTb21lIGJhY2tncm91bmQ6XG4gKiAgIDEuIEFjY2Vzc2liaWxpeSBBUElzIHJlbHkgaGVhdmlseSBvbiBlbGVtZW50IElEc1xuICogICAyLiBSZXF1aXJpbmcgZGV2ZWxvcGVycyB0byBwdXQgSURzIG9uIGV2ZXJ5IGVsZW1lbnQgaW4gUmVhY2ggVUkgaXMgYm90aFxuICogICAgICBjdW1iZXJzb21lIGFuZCBlcnJvci1wcm9uZVxuICogICAzLiBXaXRoIGEgY29tcG9uZW50IG1vZGVsLCB3ZSBjYW4gZ2VuZXJhdGUgSURzIGZvciB0aGVtIVxuICpcbiAqIFNvbHV0aW9uIDE6IEdlbmVyYXRlIHJhbmRvbSBJRHMuXG4gKlxuICogVGhpcyB3b3JrcyBncmVhdCBhcyBsb25nIGFzIHlvdSBkb24ndCBzZXJ2ZXIgcmVuZGVyIHlvdXIgYXBwLiBXaGVuIFJlYWN0IChpblxuICogdGhlIGNsaWVudCkgdHJpZXMgdG8gcmV1c2UgdGhlIG1hcmt1cCBmcm9tIHRoZSBzZXJ2ZXIsIHRoZSBJRHMgd29uJ3QgbWF0Y2hcbiAqIGFuZCBSZWFjdCB3aWxsIHRoZW4gcmVjcmVhdGUgdGhlIGVudGlyZSBET00gdHJlZS5cbiAqXG4gKiBTb2x1dGlvbiAyOiBJbmNyZW1lbnQgYW4gaW50ZWdlclxuICpcbiAqIFRoaXMgc291bmRzIGdyZWF0LiBTaW5jZSB3ZSdyZSByZW5kZXJpbmcgdGhlIGV4YWN0IHNhbWUgdHJlZSBvbiB0aGUgc2VydmVyXG4gKiBhbmQgY2xpZW50LCB3ZSBjYW4gaW5jcmVtZW50IGEgY291bnRlciBhbmQgZ2V0IGEgZGV0ZXJtaW5pc3RpYyByZXN1bHQgYmV0d2VlblxuICogY2xpZW50IGFuZCBzZXJ2ZXIuIEFsc28sIEpTIGludGVnZXJzIGNhbiBnbyB1cCB0byBuaW5lLXF1YWRyaWxsaW9uLiBJJ21cbiAqIHByZXR0eSBzdXJlIHRoZSB0YWIgd2lsbCBiZSBjbG9zZWQgYmVmb3JlIGFuIGFwcCBuZXZlciBuZWVkc1xuICogMTAgcXVhZHJpbGxpb24gSURzIVxuICpcbiAqIFByb2JsZW0gc29sdmVkLCByaWdodD9cbiAqXG4gKiBBaCwgYnV0IHRoZXJlJ3MgYSBjYXRjaCEgUmVhY3QncyBjb25jdXJyZW50IHJlbmRlcmluZyBtYWtlcyB0aGlzIGFwcHJvYWNoXG4gKiBub24tZGV0ZXJtaW5pc3RpYy4gV2hpbGUgdGhlIGNsaWVudCBhbmQgc2VydmVyIHdpbGwgZW5kIHVwIHdpdGggdGhlIHNhbWVcbiAqIGVsZW1lbnRzIGluIHRoZSBlbmQsIGRlcGVuZGluZyBvbiBzdXNwZW5zZSBib3VuZGFyaWVzIChhbmQgcG9zc2libHkgc29tZSB1c2VyXG4gKiBpbnB1dCBkdXJpbmcgdGhlIGluaXRpYWwgcmVuZGVyKSB0aGUgaW5jcmVtZW50aW5nIGludGVnZXJzIHdvbid0IGFsd2F5cyBtYXRjaFxuICogdXAuXG4gKlxuICogU29sdXRpb24gMzogRG9uJ3QgdXNlIElEcyBhdCBhbGwgb24gdGhlIHNlcnZlcjsgcGF0Y2ggYWZ0ZXIgZmlyc3QgcmVuZGVyLlxuICpcbiAqIFdoYXQgd2UndmUgZG9uZSBoZXJlIGlzIHNvbHV0aW9uIDIgd2l0aCBzb21lIHRyaWNrcy4gV2l0aCB0aGlzIGFwcHJvYWNoLCB0aGVcbiAqIElEIHJldHVybmVkIGlzIGFuIGVtcHR5IHN0cmluZyBvbiB0aGUgZmlyc3QgcmVuZGVyLiBUaGlzIHdheSB0aGUgc2VydmVyIGFuZFxuICogY2xpZW50IGhhdmUgdGhlIHNhbWUgbWFya3VwIG5vIG1hdHRlciBob3cgd2lsZCB0aGUgY29uY3VycmVudCByZW5kZXJpbmcgbWF5XG4gKiBoYXZlIGdvdHRlbi5cbiAqXG4gKiBBZnRlciB0aGUgcmVuZGVyLCB3ZSBwYXRjaCB1cCB0aGUgY29tcG9uZW50cyB3aXRoIGFuIGluY3JlbWVudGVkIElELiBUaGlzXG4gKiBjYXVzZXMgYSBkb3VibGUgcmVuZGVyIG9uIGFueSBjb21wb25lbnRzIHdpdGggYHVzZUlkYC4gU2hvdWxkbid0IGJlIGEgcHJvYmxlbVxuICogc2luY2UgdGhlIGNvbXBvbmVudHMgdXNpbmcgdGhpcyBob29rIHNob3VsZCBiZSBzbWFsbCwgYW5kIHdlJ3JlIG9ubHkgdXBkYXRpbmdcbiAqIHRoZSBJRCBhdHRyaWJ1dGUgb24gdGhlIERPTSwgbm90aGluZyBiaWcgaXMgaGFwcGVuaW5nLlxuICpcbiAqIEl0IGRvZXNuJ3QgaGF2ZSB0byBiZSBhbiBpbmNyZW1lbnRlZCBudW1iZXIsIHRob3VnaC0td2UgY291bGQgZG8gZ2VuZXJhdGVcbiAqIHJhbmRvbSBzdHJpbmdzIGluc3RlYWQsIGJ1dCBpbmNyZW1lbnRpbmcgYSBudW1iZXIgaXMgcHJvYmFibHkgdGhlIGNoZWFwZXN0XG4gKiB0aGluZyB3ZSBjYW4gZG8uXG4gKlxuICogQWRkaXRpb25hbGx5LCB3ZSBvbmx5IGRvIHRoaXMgcGF0Y2h1cCBvbiB0aGUgdmVyeSBmaXJzdCBjbGllbnQgcmVuZGVyIGV2ZXIuXG4gKiBBbnkgY2FsbHMgdG8gYHVzZUlkYCB0aGF0IGhhcHBlbiBkeW5hbWljYWxseSBpbiB0aGUgY2xpZW50IHdpbGwgYmVcbiAqIHBvcHVsYXRlZCBpbW1lZGlhdGVseSB3aXRoIGEgdmFsdWUuIFNvLCB3ZSBvbmx5IGdldCB0aGUgZG91YmxlIHJlbmRlciBhZnRlclxuICogc2VydmVyIGh5ZHJhdGlvbiBhbmQgbmV2ZXIgYWdhaW4sIFNPIEJBQ0sgT0ZGIEFMUklHSFQ/XG4gKi9cbnZhciBzZXJ2ZXJIYW5kb2ZmQ29tcGxldGUgPSBmYWxzZTtcbnZhciBpZCA9IDA7XG5cbnZhciBnZW5JZCA9IGZ1bmN0aW9uIGdlbklkKCkge1xuICByZXR1cm4gKytpZDtcbn07XG4vKipcbiAqIHVzZUlkXG4gKlxuICogQXV0b2dlbmVyYXRlIElEcyB0byBmYWNpbGl0YXRlIFdBSS1BUklBIGFuZCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIE5vdGU6IFRoZSByZXR1cm5lZCBJRCB3aWxsIGluaXRpYWxseSBiZSBgbnVsbGAgYW5kIHdpbGwgdXBkYXRlIGFmdGVyIGFcbiAqIGNvbXBvbmVudCBtb3VudHMuIFVzZXJzIG1heSBuZWVkIHRvIHN1cHBseSB0aGVpciBvd24gSUQgaWYgdGhleSBuZWVkXG4gKiBjb25zaXN0ZW50IHZhbHVlcyBmb3IgU1NSLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvYXV0by1pZFxuICovXG5cblxuZnVuY3Rpb24gdXNlSWQoaWRGcm9tUHJvcHMpIHtcbiAgLypcbiAgICogSWYgdGhpcyBpbnN0YW5jZSBpc24ndCBwYXJ0IG9mIHRoZSBpbml0aWFsIHJlbmRlciwgd2UgZG9uJ3QgaGF2ZSB0byBkbyB0aGVcbiAgICogZG91YmxlIHJlbmRlci9wYXRjaC11cCBkYW5jZS4gV2UgY2FuIGp1c3QgZ2VuZXJhdGUgdGhlIElEIGFuZCByZXR1cm4gaXQuXG4gICAqL1xuICB2YXIgaW5pdGlhbElkID0gaWRGcm9tUHJvcHMgfHwgKHNlcnZlckhhbmRvZmZDb21wbGV0ZSA/IGdlbklkKCkgOiBudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUoaW5pdGlhbElkKSxcbiAgICAgIGlkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlkID09PSBudWxsKSB7XG4gICAgICAvKlxuICAgICAgICogUGF0Y2ggdGhlIElEIGFmdGVyIHJlbmRlci4gV2UgZG8gdGhpcyBpbiBgdXNlTGF5b3V0RWZmZWN0YCB0byBhdm9pZCBhbnlcbiAgICAgICAqIHJlbmRlcmluZyBmbGlja2VyLCB0aG91Z2ggaXQnbGwgbWFrZSB0aGUgZmlyc3QgcmVuZGVyIHNsb3dlciAodW5saWtlbHlcbiAgICAgICAqIHRvIG1hdHRlciwgYnV0IHlvdSdyZSB3ZWxjb21lIHRvIG1lYXN1cmUgeW91ciBhcHAgYW5kIGxldCB1cyBrbm93IGlmXG4gICAgICAgKiBpdCdzIGEgcHJvYmxlbSkuXG4gICAgICAgKi9cbiAgICAgIHNldElkKGdlbklkKCkpO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VydmVySGFuZG9mZkNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgICAgLypcbiAgICAgICAqIEZsYWcgYWxsIGZ1dHVyZSB1c2VzIG9mIGB1c2VJZGAgdG8gc2tpcCB0aGUgdXBkYXRlIGRhbmNlLiBUaGlzIGlzIGluXG4gICAgICAgKiBgdXNlRWZmZWN0YCBiZWNhdXNlIGl0IGdvZXMgYWZ0ZXIgYHVzZUxheW91dEVmZmVjdGAsIGVuc3VyaW5nIHdlIGRvbid0XG4gICAgICAgKiBhY2NpZGVudGFsbHkgYmFpbCBvdXQgb2YgdGhlIHBhdGNoLXVwIGRhbmNlIHByZW1hdHVyZWx5LlxuICAgICAgICovXG4gICAgICBzZXJ2ZXJIYW5kb2ZmQ29tcGxldGUgPSB0cnVlO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gaWQgIT0gbnVsbCA/IFN0cmluZyhpZCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCB7IHVzZUlkIH07XG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnQHJlYWNoL2F1dG8taWQnO1xuaW1wb3J0IHsgdXNlQ29udHJvbGxlZFN0YXRlIH0gZnJvbSAnQHJlYWNoL3V0aWxzL3VzZS1jb250cm9sbGVkLXN0YXRlJztcbmltcG9ydCB7IGlzUmlnaHRDbGljayB9IGZyb20gJ0ByZWFjaC91dGlscy9pcy1yaWdodC1jbGljayc7XG5pbXBvcnQgeyB1c2VTdGFibGVMYXlvdXRDYWxsYmFjayB9IGZyb20gJ0ByZWFjaC91dGlscy91c2Utc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICdAcmVhY2gvdXRpbHMvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdCc7XG5pbXBvcnQgeyBnZXRPd25lckRvY3VtZW50IH0gZnJvbSAnQHJlYWNoL3V0aWxzL293bmVyLWRvY3VtZW50JztcbmltcG9ydCB7IGNyZWF0ZU5hbWVkQ29udGV4dCB9IGZyb20gJ0ByZWFjaC91dGlscy9jb250ZXh0JztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICdAcmVhY2gvdXRpbHMvdHlwZS1jaGVjayc7XG5pbXBvcnQgeyBtYWtlSWQgfSBmcm9tICdAcmVhY2gvdXRpbHMvbWFrZS1pZCc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQHJlYWNoL3V0aWxzL25vb3AnO1xuaW1wb3J0IHsgdXNlQ29udHJvbGxlZFN3aXRjaFdhcm5pbmcsIHVzZUNoZWNrU3R5bGVzIH0gZnJvbSAnQHJlYWNoL3V0aWxzL2Rldi11dGlscyc7XG5pbXBvcnQgeyB1c2VDb21wb3NlZFJlZnMgfSBmcm9tICdAcmVhY2gvdXRpbHMvY29tcG9zZS1yZWZzJztcbmltcG9ydCB7IGNvbXBvc2VFdmVudEhhbmRsZXJzIH0gZnJvbSAnQHJlYWNoL3V0aWxzL2NvbXBvc2UtZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBTbGlkZXJPcmllbnRhdGlvbjtcblxuKGZ1bmN0aW9uIChTbGlkZXJPcmllbnRhdGlvbikge1xuICBTbGlkZXJPcmllbnRhdGlvbltcIkhvcml6b250YWxcIl0gPSBcImhvcml6b250YWxcIjtcbiAgU2xpZGVyT3JpZW50YXRpb25bXCJWZXJ0aWNhbFwiXSA9IFwidmVydGljYWxcIjtcbn0pKFNsaWRlck9yaWVudGF0aW9uIHx8IChTbGlkZXJPcmllbnRhdGlvbiA9IHt9KSk7XG5cbi8vIFRPRE86IFJlbW92ZSBpbiAxLjBcbnZhciBTbGlkZXJIYW5kbGVBbGlnbm1lbnQ7IC8vIFRPRE86IFJlbW92ZSBpbiAxLjBcblxuKGZ1bmN0aW9uIChTbGlkZXJIYW5kbGVBbGlnbm1lbnQpIHtcbiAgU2xpZGVySGFuZGxlQWxpZ25tZW50W1wiQ2VudGVyXCJdID0gXCJjZW50ZXJcIjtcbiAgU2xpZGVySGFuZGxlQWxpZ25tZW50W1wiQ29udGFpblwiXSA9IFwiY29udGFpblwiO1xufSkoU2xpZGVySGFuZGxlQWxpZ25tZW50IHx8IChTbGlkZXJIYW5kbGVBbGlnbm1lbnQgPSB7fSkpO1xuXG52YXIgU0xJREVSX09SSUVOVEFUSU9OX0hPUklaT05UQUwgPSBTbGlkZXJPcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xudmFyIFNMSURFUl9PUklFTlRBVElPTl9WRVJUSUNBTCA9IFNsaWRlck9yaWVudGF0aW9uLlZlcnRpY2FsO1xudmFyIFNMSURFUl9IQU5ETEVfQUxJR05fQ0VOVEVSID0gU2xpZGVySGFuZGxlQWxpZ25tZW50LkNlbnRlcjtcbnZhciBTTElERVJfSEFORExFX0FMSUdOX0NPTlRBSU4gPSBTbGlkZXJIYW5kbGVBbGlnbm1lbnQuQ29udGFpbjtcbnZhciBTbGlkZXJDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZU5hbWVkQ29udGV4dChcIlNsaWRlckNvbnRleHRcIiwge30pO1xuXG52YXIgdXNlU2xpZGVyQ29udGV4dCA9IGZ1bmN0aW9uIHVzZVNsaWRlckNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFNsaWRlckNvbnRleHQpO1xufTsgLy8gVGhlc2UgcHJvcHR5cGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGUgY29tcG9zZWQgU2xpZGVySW5wdXQgY29tcG9uZW50IGFuZCB0aGVcbi8vIHNpbXBsaWZpZWQgU2xpZGVyXG5cblxudmFyIHNsaWRlclByb3BUeXBlcyA9IHtcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGdldEFyaWFMYWJlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEFyaWFWYWx1ZVRleHQ6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRWYWx1ZVRleHQ6IFByb3BUeXBlcy5mdW5jLFxuICBoYW5kbGVBbGlnbm1lbnQ6IC8qI19fUFVSRV9fKi9Qcm9wVHlwZXMub25lT2YoW1NsaWRlckhhbmRsZUFsaWdubWVudC5DZW50ZXIsIFNsaWRlckhhbmRsZUFsaWdubWVudC5Db250YWluXSksXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmllbnRhdGlvbjogLyojX19QVVJFX18qL1Byb3BUeXBlcy5vbmVPZihbU2xpZGVyT3JpZW50YXRpb24uSG9yaXpvbnRhbCwgU2xpZGVyT3JpZW50YXRpb24uVmVydGljYWxdKSxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlclxufTsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBTbGlkZXJcbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9yZWFjaC50ZWNoL3NsaWRlciNzbGlkZXJcbiAqL1xuXG52YXIgU2xpZGVyID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gU2xpZGVyKF9yZWYsIGZvcndhcmRlZFJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFNsaWRlcklucHV0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBcImRhdGEtcmVhY2gtc2xpZGVyXCI6IFwiXCIsXG4gICAgX19jb21wb25lbnROYW1lOiBcIlNsaWRlclwiXG4gIH0pLCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChTbGlkZXJUcmFjaywgbnVsbCwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoU2xpZGVyUmFuZ2UsIG51bGwpLCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChTbGlkZXJIYW5kbGUsIG51bGwpLCBjaGlsZHJlbikpO1xufSk7XG4vKipcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvc2xpZGVyI3NsaWRlci1wcm9wc1xuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU2xpZGVyLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJcIjtcbiAgU2xpZGVyLnByb3BUeXBlcyA9IC8qI19fUFVSRV9fKi9fZXh0ZW5kcyh7fSwgc2xpZGVyUHJvcFR5cGVzLCB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH0pO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIFNsaWRlcklucHV0XG4gKlxuICogVGhlIHBhcmVudCBjb21wb25lbnQgb2YgdGhlIHNsaWRlciBpbnRlcmZhY2UuIFRoaXMgaXMgYSBsb3dlciBsZXZlbCBjb21wb25lbnRcbiAqIGlmIHlvdSBuZWVkIG1vcmUgY29udHJvbCBvdmVyIHN0eWxlcyBvciByZW5kZXJpbmcgdGhlIHNsaWRlcidzIGlubmVyXG4gKiBjb21wb25lbnRzLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvc2xpZGVyI3NsaWRlcmlucHV0XG4gKi9cblxuXG52YXIgU2xpZGVySW5wdXQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBTbGlkZXJJbnB1dChfcmVmMiwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmFuZ2VTdHlsZTtcblxuICB2YXIgYXJpYUxhYmVsID0gX3JlZjJbXCJhcmlhLWxhYmVsXCJdLFxuICAgICAgYXJpYUxhYmVsbGVkQnkgPSBfcmVmMltcImFyaWEtbGFiZWxsZWRieVwiXSxcbiAgICAgIGFyaWFWYWx1ZVRleHRQcm9wID0gX3JlZjJbXCJhcmlhLXZhbHVldGV4dFwiXSxcbiAgICAgIF9yZWYyJGFzID0gX3JlZjIuYXMsXG4gICAgICBDb21wID0gX3JlZjIkYXMgPT09IHZvaWQgMCA/IFwiZGl2XCIgOiBfcmVmMiRhcyxcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWYyLmRlZmF1bHRWYWx1ZSxcbiAgICAgIF9yZWYyJGRpc2FibGVkID0gX3JlZjIuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYyJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGRpc2FibGVkLFxuICAgICAgY29udHJvbGxlZFZhbHVlID0gX3JlZjIudmFsdWUsXG4gICAgICBnZXRBcmlhTGFiZWwgPSBfcmVmMi5nZXRBcmlhTGFiZWwsXG4gICAgICBnZXRBcmlhVmFsdWVUZXh0ID0gX3JlZjIuZ2V0QXJpYVZhbHVlVGV4dCxcbiAgICAgIERFUFJFQ0FURURfZ2V0VmFsdWVUZXh0ID0gX3JlZjIuZ2V0VmFsdWVUZXh0LFxuICAgICAgX3JlZjIkaGFuZGxlQWxpZ25tZW50ID0gX3JlZjIuaGFuZGxlQWxpZ25tZW50LFxuICAgICAgaGFuZGxlQWxpZ25tZW50ID0gX3JlZjIkaGFuZGxlQWxpZ25tZW50ID09PSB2b2lkIDAgPyBTbGlkZXJIYW5kbGVBbGlnbm1lbnQuQ2VudGVyIDogX3JlZjIkaGFuZGxlQWxpZ25tZW50LFxuICAgICAgX3JlZjIkbWF4ID0gX3JlZjIubWF4LFxuICAgICAgbWF4ID0gX3JlZjIkbWF4ID09PSB2b2lkIDAgPyAxMDAgOiBfcmVmMiRtYXgsXG4gICAgICBfcmVmMiRtaW4gPSBfcmVmMi5taW4sXG4gICAgICBtaW4gPSBfcmVmMiRtaW4gPT09IHZvaWQgMCA/IDAgOiBfcmVmMiRtaW4sXG4gICAgICBuYW1lID0gX3JlZjIubmFtZSxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZjIub25DaGFuZ2UsXG4gICAgICBvbktleURvd24gPSBfcmVmMi5vbktleURvd24sXG4gICAgICBvbk1vdXNlRG93biA9IF9yZWYyLm9uTW91c2VEb3duLFxuICAgICAgb25Nb3VzZU1vdmUgPSBfcmVmMi5vbk1vdXNlTW92ZSxcbiAgICAgIG9uTW91c2VVcCA9IF9yZWYyLm9uTW91c2VVcCxcbiAgICAgIG9uUG9pbnRlckRvd24gPSBfcmVmMi5vblBvaW50ZXJEb3duLFxuICAgICAgb25Qb2ludGVyVXAgPSBfcmVmMi5vblBvaW50ZXJVcCxcbiAgICAgIG9uVG91Y2hFbmQgPSBfcmVmMi5vblRvdWNoRW5kLFxuICAgICAgb25Ub3VjaE1vdmUgPSBfcmVmMi5vblRvdWNoTW92ZSxcbiAgICAgIG9uVG91Y2hTdGFydCA9IF9yZWYyLm9uVG91Y2hTdGFydCxcbiAgICAgIF9yZWYyJG9yaWVudGF0aW9uID0gX3JlZjIub3JpZW50YXRpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IF9yZWYyJG9yaWVudGF0aW9uID09PSB2b2lkIDAgPyBTbGlkZXJPcmllbnRhdGlvbi5Ib3Jpem9udGFsIDogX3JlZjIkb3JpZW50YXRpb24sXG4gICAgICBfcmVmMiRzdGVwID0gX3JlZjIuc3RlcCxcbiAgICAgIHN0ZXAgPSBfcmVmMiRzdGVwID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc3RlcCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBfcmVmMiRfX2NvbXBvbmVudE5hbWUgPSBfcmVmMi5fX2NvbXBvbmVudE5hbWUsXG4gICAgICBfX2NvbXBvbmVudE5hbWUgPSBfcmVmMiRfX2NvbXBvbmVudE5hbWUgPT09IHZvaWQgMCA/IFwiU2xpZGVySW5wdXRcIiA6IF9yZWYyJF9fY29tcG9uZW50TmFtZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiYXJpYS1sYWJlbFwiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtdmFsdWV0ZXh0XCIsIFwiYXNcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcInZhbHVlXCIsIFwiZ2V0QXJpYUxhYmVsXCIsIFwiZ2V0QXJpYVZhbHVlVGV4dFwiLCBcImdldFZhbHVlVGV4dFwiLCBcImhhbmRsZUFsaWdubWVudFwiLCBcIm1heFwiLCBcIm1pblwiLCBcIm5hbWVcIiwgXCJvbkNoYW5nZVwiLCBcIm9uS2V5RG93blwiLCBcIm9uTW91c2VEb3duXCIsIFwib25Nb3VzZU1vdmVcIiwgXCJvbk1vdXNlVXBcIiwgXCJvblBvaW50ZXJEb3duXCIsIFwib25Qb2ludGVyVXBcIiwgXCJvblRvdWNoRW5kXCIsIFwib25Ub3VjaE1vdmVcIiwgXCJvblRvdWNoU3RhcnRcIiwgXCJvcmllbnRhdGlvblwiLCBcInN0ZXBcIiwgXCJjaGlsZHJlblwiLCBcIl9fY29tcG9uZW50TmFtZVwiXSk7XG5cbiAgdXNlQ29udHJvbGxlZFN3aXRjaFdhcm5pbmcoY29udHJvbGxlZFZhbHVlLCBcInZhbHVlXCIsIF9fY29tcG9uZW50TmFtZSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIURFUFJFQ0FURURfZ2V0VmFsdWVUZXh0LCBcIlRoZSBgZ2V0VmFsdWVUZXh0YCBwcm9wIGluIEByZWFjaC9zbGlkZXIgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgZ2V0QXJpYVZhbHVlVGV4dGAgaW5zdGVhZC5cIikgOiB2b2lkIDA7XG4gIHZhciB0b3VjaElkID0gdXNlUmVmKCk7XG4gIHZhciBpZCA9IHVzZUlkKHJlc3QuaWQpOyAvLyBUcmFjayB3aGV0aGVyIG9yIG5vdCB0aGUgcG9pbnRlciBpcyBkb3duIHdpdGhvdXQgdXBkYXRpbmcgdGhlIGNvbXBvbmVudFxuXG4gIHZhciBwb2ludGVyRG93blJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciB0cmFja1JlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHNsaWRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHJlZiA9IHVzZUNvbXBvc2VkUmVmcyhzbGlkZXJSZWYsIGZvcndhcmRlZFJlZik7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGhhc0ZvY3VzID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SGFzRm9jdXMgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF91c2VEaW1lbnNpb25zID0gdXNlRGltZW5zaW9ucyhoYW5kbGVSZWYpLFxuICAgICAgaGFuZGxlRGltZW5zaW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF91c2VEaW1lbnNpb25zLCBbXCJyZWZcIl0pO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZFN0YXRlID0gdXNlQ29udHJvbGxlZFN0YXRlKGNvbnRyb2xsZWRWYWx1ZSwgZGVmYXVsdFZhbHVlIHx8IG1pbiksXG4gICAgICBfdmFsdWUgPSBfdXNlQ29udHJvbGxlZFN0YXRlWzBdLFxuICAgICAgc2V0VmFsdWUgPSBfdXNlQ29udHJvbGxlZFN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZSA9IGNsYW1wKF92YWx1ZSwgbWluLCBtYXgpO1xuICB2YXIgdHJhY2tQZXJjZW50ID0gdmFsdWVUb1BlcmNlbnQodmFsdWUsIG1pbiwgbWF4KTtcbiAgdmFyIGlzVmVydGljYWwgPSBvcmllbnRhdGlvbiA9PT0gU2xpZGVyT3JpZW50YXRpb24uVmVydGljYWw7XG4gIHZhciBoYW5kbGVTaXplID0gaXNWZXJ0aWNhbCA/IGhhbmRsZURpbWVuc2lvbnMuaGVpZ2h0IDogaGFuZGxlRGltZW5zaW9ucy53aWR0aDsgLy8gVE9ETzogQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIGBoYW5kbGVBbGlnbm1lbnRgIHByb3BcbiAgLy8gV2UgbWF5IHdhbnQgdG8gdXNlIGFjY2VwdCBhIGBoYW5kbGVQb3NpdGlvbmAgcHJvcCBpbnN0ZWFkIGFuZCBsZXQgYXBwc1xuICAvLyBkZWZpbmUgdGhlaXIgb3duIHBvc2l0aW9uaW5nIGxvZ2ljLCBzaW1pbGFyIHRvIGhvdyB3ZSBkbyBmb3IgcG9wb3ZlcnMuXG5cbiAgdmFyIGhhbmRsZVBvc2l0aW9uID0gXCJjYWxjKFwiICsgdHJhY2tQZXJjZW50ICsgXCIlIC0gXCIgKyAoaGFuZGxlQWxpZ25tZW50ID09PSBTbGlkZXJIYW5kbGVBbGlnbm1lbnQuQ2VudGVyID8gaGFuZGxlU2l6ZSArIFwicHggLyAyXCIgOiBoYW5kbGVTaXplICsgXCJweCAqIFwiICsgdHJhY2tQZXJjZW50ICogMC4wMSkgKyBcIilcIjtcbiAgdmFyIGhhbmRsZVBvc2l0aW9uUmVmID0gdXNlUmVmKGhhbmRsZVBvc2l0aW9uKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaGFuZGxlUG9zaXRpb25SZWYuY3VycmVudCA9IGhhbmRsZVBvc2l0aW9uO1xuICB9LCBbaGFuZGxlUG9zaXRpb25dKTtcbiAgdmFyIG9uQ2hhbmdlUmVmID0gdXNlUmVmKG9uQ2hhbmdlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgb25DaGFuZ2VSZWYuY3VycmVudCA9IG9uQ2hhbmdlO1xuICB9LCBbb25DaGFuZ2VdKTtcbiAgdmFyIHVwZGF0ZVZhbHVlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXBkYXRlVmFsdWUobmV3VmFsdWUpIHtcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICBpZiAob25DaGFuZ2VSZWYuY3VycmVudCkge1xuICAgICAgLy8gUHJldmVudCBvbkNoYW5nZSBmcm9tIHJlY3JlYXRpbmcgdGhlIGZ1bmN0aW9uXG4gICAgICAvLyBUT0RPOiBSZW9uc2lkZXIgdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIEFQSVxuICAgICAgb25DaGFuZ2VSZWYuY3VycmVudChuZXdWYWx1ZSwge1xuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgIC8vIFByZXZlbnQgaGFuZGxlUG9zaXRpb24gZnJvbSByZWNyZWF0aW5nIHRoZSBmdW5jdGlvblxuICAgICAgICBoYW5kbGVQb3NpdGlvbjogaGFuZGxlUG9zaXRpb25SZWYuY3VycmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbWF4LCBtaW4sIHNldFZhbHVlXSk7XG4gIHZhciBnZXROZXdWYWx1ZUZyb21FdmVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBnZXROZXdWYWx1ZShnZXRQb2ludGVyUG9zaXRpb24oZXZlbnQsIHRvdWNoSWQpLCB0cmFja1JlZi5jdXJyZW50LCB7XG4gICAgICBzdGVwOiBzdGVwLFxuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgICAgbWluOiBtaW4sXG4gICAgICBtYXg6IG1heFxuICAgIH0pO1xuICB9LCBbbWF4LCBtaW4sIG9yaWVudGF0aW9uLCBzdGVwXSk7IC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4yLyNzbGlkZXJfa2JkX2ludGVyYWN0aW9uXG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSB1c2VTdGFibGVMYXlvdXRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV3VmFsdWU7XG4gICAgdmFyIHRlblN0ZXBzID0gKG1heCAtIG1pbikgLyAxMDtcbiAgICB2YXIga2V5U3RlcCA9IHN0ZXAgfHwgKG1heCAtIG1pbikgLyAxMDA7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgLy8gRGVjcmVhc2UgdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYnkgb25lIHN0ZXAuXG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIG5ld1ZhbHVlID0gdmFsdWUgLSBrZXlTdGVwO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIEluY3JlYXNlIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGJ5IG9uZSBzdGVwXG5cbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlICsga2V5U3RlcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBEZWNyZW1lbnQgdGhlIHNsaWRlciBieSBhbiBhbW91bnQgbGFyZ2VyIHRoYW4gdGhlIHN0ZXAgY2hhbmdlIG1hZGUgYnlcbiAgICAgIC8vIGBBcnJvd0Rvd25gLlxuXG4gICAgICBjYXNlIFwiUGFnZURvd25cIjpcbiAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZSAtIHRlblN0ZXBzO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIEluY3JlbWVudCB0aGUgc2xpZGVyIGJ5IGFuIGFtb3VudCBsYXJnZXIgdGhhbiB0aGUgc3RlcCBjaGFuZ2UgbWFkZSBieVxuICAgICAgLy8gYEFycm93VXBgLlxuXG4gICAgICBjYXNlIFwiUGFnZVVwXCI6XG4gICAgICAgIG5ld1ZhbHVlID0gdmFsdWUgKyB0ZW5TdGVwcztcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBTZXQgdGhlIHNsaWRlciB0byB0aGUgZmlyc3QgYWxsb3dlZCB2YWx1ZSBpbiBpdHMgcmFuZ2UuXG5cbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIG5ld1ZhbHVlID0gbWluO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIFNldCB0aGUgc2xpZGVyIHRvIHRoZSBsYXN0IGFsbG93ZWQgdmFsdWUgaW4gaXRzIHJhbmdlLlxuXG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIG5ld1ZhbHVlID0gbWF4O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmV3VmFsdWUgPSBjbGFtcChzdGVwID8gcm91bmRWYWx1ZVRvU3RlcChuZXdWYWx1ZSwgc3RlcCwgbWluKSA6IG5ld1ZhbHVlLCBtaW4sIG1heCk7XG4gICAgdXBkYXRlVmFsdWUobmV3VmFsdWUpO1xuICB9KTtcbiAgdmFyIGFyaWFWYWx1ZVRleHQgPSBERVBSRUNBVEVEX2dldFZhbHVlVGV4dCA/IERFUFJFQ0FURURfZ2V0VmFsdWVUZXh0KHZhbHVlKSA6IGdldEFyaWFWYWx1ZVRleHQgPyBnZXRBcmlhVmFsdWVUZXh0KHZhbHVlKSA6IGFyaWFWYWx1ZVRleHRQcm9wO1xuICB2YXIgcmFuZ2VTdHlsZSA9IChfcmFuZ2VTdHlsZSA9IHt9LCBfcmFuZ2VTdHlsZVtpc1ZlcnRpY2FsID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIl0gPSB0cmFja1BlcmNlbnQgKyBcIiVcIiwgX3JhbmdlU3R5bGUpO1xuICB2YXIgY3R4ID0ge1xuICAgIGFyaWFMYWJlbDogZ2V0QXJpYUxhYmVsID8gZ2V0QXJpYUxhYmVsKHZhbHVlKSA6IGFyaWFMYWJlbCxcbiAgICBhcmlhTGFiZWxsZWRCeTogYXJpYUxhYmVsbGVkQnksXG4gICAgYXJpYVZhbHVlVGV4dDogYXJpYVZhbHVlVGV4dCxcbiAgICBoYW5kbGVEaW1lbnNpb25zOiBoYW5kbGVEaW1lbnNpb25zLFxuICAgIGhhbmRsZUtleURvd246IGhhbmRsZUtleURvd24sXG4gICAgaGFuZGxlUG9zaXRpb246IGhhbmRsZVBvc2l0aW9uLFxuICAgIGhhbmRsZVJlZjogaGFuZGxlUmVmLFxuICAgIGhhc0ZvY3VzOiBoYXNGb2N1cyxcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICBzZXRIYXNGb2N1czogc2V0SGFzRm9jdXMsXG4gICAgc2xpZGVySWQ6IGlkLFxuICAgIHNsaWRlck1heDogbWF4LFxuICAgIHNsaWRlck1pbjogbWluLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkaXNhYmxlZDogISFkaXNhYmxlZCxcbiAgICBpc1ZlcnRpY2FsOiBpc1ZlcnRpY2FsLFxuICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcbiAgICB0cmFja1BlcmNlbnQ6IHRyYWNrUGVyY2VudCxcbiAgICB0cmFja1JlZjogdHJhY2tSZWYsXG4gICAgcmFuZ2VTdHlsZTogcmFuZ2VTdHlsZSxcbiAgICB1cGRhdGVWYWx1ZTogdXBkYXRlVmFsdWVcbiAgfTsgLy8gU2xpZGUgZXZlbnRzIVxuICAvLyBXZSB3aWxsIHRyeSB0byB1c2UgcG9pbnRlciBldmVudHMgaWYgdGhleSBhcmUgc3VwcG9ydGVkIHRvIGxldmVyYWdlXG4gIC8vIHNldFBvaW50ZXJDYXB0dXJlIGFuZCByZWxlYXNlUG9pbnRlckNhcHR1cmUuIFdlJ2xsIGZhbGwgYmFjayB0byBzZXBhcmF0ZVxuICAvLyBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzLlxuICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlIG1vcmUgY29uY2lzZVxuXG4gIHZhciByZW1vdmVNb3ZlRXZlbnRzID0gdXNlUmVmKG5vb3ApO1xuICB2YXIgcmVtb3ZlU3RhcnRFdmVudHMgPSB1c2VSZWYobm9vcCk7XG4gIHZhciByZW1vdmVFbmRFdmVudHMgPSB1c2VSZWYobm9vcCk7IC8vIFN0b3JlIG91ciBldmVudCBoYW5kbGVycyBpbiByZWZzIHNvIHdlIGFyZW4ndCBhdHRhY2hpbmcvZGV0YWNoaW5nIGV2ZW50c1xuICAvLyBvbiBldmVyeSByZW5kZXIgaWYgdGhlIHVzZXIgZG9lc24ndCB1c2VDYWxsYmFja1xuXG4gIHZhciBhcHBFdmVudHMgPSB1c2VSZWYoe1xuICAgIG9uTW91c2VNb3ZlOiBvbk1vdXNlTW92ZSxcbiAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsXG4gICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgb25Ub3VjaEVuZDogb25Ub3VjaEVuZCxcbiAgICBvblRvdWNoTW92ZTogb25Ub3VjaE1vdmUsXG4gICAgb25Qb2ludGVyRG93bjogb25Qb2ludGVyRG93bixcbiAgICBvblBvaW50ZXJVcDogb25Qb2ludGVyVXBcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGFwcEV2ZW50cy5jdXJyZW50Lm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gICAgYXBwRXZlbnRzLmN1cnJlbnQub25Nb3VzZURvd24gPSBvbk1vdXNlRG93bjtcbiAgICBhcHBFdmVudHMuY3VycmVudC5vbk1vdXNlVXAgPSBvbk1vdXNlVXA7XG4gICAgYXBwRXZlbnRzLmN1cnJlbnQub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0O1xuICAgIGFwcEV2ZW50cy5jdXJyZW50Lm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kO1xuICAgIGFwcEV2ZW50cy5jdXJyZW50Lm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmU7XG4gICAgYXBwRXZlbnRzLmN1cnJlbnQub25Qb2ludGVyRG93biA9IG9uUG9pbnRlckRvd247XG4gICAgYXBwRXZlbnRzLmN1cnJlbnQub25Qb2ludGVyVXAgPSBvblBvaW50ZXJVcDtcbiAgfSwgW29uTW91c2VNb3ZlLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvblRvdWNoU3RhcnQsIG9uVG91Y2hFbmQsIG9uVG91Y2hNb3ZlLCBvblBvaW50ZXJEb3duLCBvblBvaW50ZXJVcF0pO1xuICB2YXIgaGFuZGxlU2xpZGVTdGFydCA9IHVzZVN0YWJsZUxheW91dENhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChpc1JpZ2h0Q2xpY2soZXZlbnQpKSByZXR1cm47XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHBvaW50ZXJEb3duUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IGdldE93bmVyRG9jdW1lbnQoc2xpZGVyUmVmLmN1cnJlbnQpO1xuICAgIHZhciBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICAgIHBvaW50ZXJEb3duUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICB2YXIgX2NoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBmb3IgdG91Y2ggZXZlbnRzXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHRvdWNoID0gKF9jaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzKSA9PSBudWxsID8gdm9pZCAwIDogX2NoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgICBpZiAodG91Y2ggIT0gbnVsbCkge1xuICAgICAgICB0b3VjaElkLmN1cnJlbnQgPSB0b3VjaC5pZGVudGlmaWVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdWYWx1ZSA9IGdldE5ld1ZhbHVlRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJXaW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfaGFuZGxlUmVmJGN1cnJlbnQ7XG5cbiAgICAgIHJldHVybiAoX2hhbmRsZVJlZiRjdXJyZW50ID0gaGFuZGxlUmVmLmN1cnJlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfaGFuZGxlUmVmJGN1cnJlbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgICB1cGRhdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgcmVtb3ZlTW92ZUV2ZW50cy5jdXJyZW50ID0gYWRkTW92ZUxpc3RlbmVyKCk7XG4gICAgcmVtb3ZlRW5kRXZlbnRzLmN1cnJlbnQgPSBhZGRFbmRMaXN0ZW5lcigpO1xuICB9KTtcbiAgdmFyIHNldFBvaW50ZXJDYXB0dXJlID0gdXNlU3RhYmxlTGF5b3V0Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIF9zbGlkZXJSZWYkY3VycmVudDtcblxuICAgIGlmIChpc1JpZ2h0Q2xpY2soZXZlbnQpKSByZXR1cm47XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHBvaW50ZXJEb3duUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwb2ludGVyRG93blJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAoX3NsaWRlclJlZiRjdXJyZW50ID0gc2xpZGVyUmVmLmN1cnJlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfc2xpZGVyUmVmJGN1cnJlbnQuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgfSk7XG4gIHZhciByZWxlYXNlUG9pbnRlckNhcHR1cmUgPSB1c2VTdGFibGVMYXlvdXRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3NsaWRlclJlZiRjdXJyZW50MjtcblxuICAgIGlmIChpc1JpZ2h0Q2xpY2soZXZlbnQpKSByZXR1cm47XG4gICAgKF9zbGlkZXJSZWYkY3VycmVudDIgPSBzbGlkZXJSZWYuY3VycmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zbGlkZXJSZWYkY3VycmVudDIucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG4gICAgcG9pbnRlckRvd25SZWYuY3VycmVudCA9IGZhbHNlO1xuICB9KTtcbiAgdmFyIGhhbmRsZVBvaW50ZXJNb3ZlID0gdXNlU3RhYmxlTGF5b3V0Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGRpc2FibGVkIHx8ICFwb2ludGVyRG93blJlZi5jdXJyZW50KSB7XG4gICAgICBwb2ludGVyRG93blJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5ld1ZhbHVlID0gZ2V0TmV3VmFsdWVGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShuZXdWYWx1ZSk7XG4gIH0pO1xuICB2YXIgaGFuZGxlU2xpZGVTdG9wID0gdXNlU3RhYmxlTGF5b3V0Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGlzUmlnaHRDbGljayhldmVudCkpIHJldHVybjtcbiAgICBwb2ludGVyRG93blJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgdmFyIG5ld1ZhbHVlID0gZ2V0TmV3VmFsdWVGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b3VjaElkLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgcmVtb3ZlTW92ZUV2ZW50cy5jdXJyZW50KCk7XG4gICAgcmVtb3ZlRW5kRXZlbnRzLmN1cnJlbnQoKTtcbiAgfSk7XG4gIHZhciBhZGRNb3ZlTGlzdGVuZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBnZXRPd25lckRvY3VtZW50KHNsaWRlclJlZi5jdXJyZW50KTtcbiAgICB2YXIgdG91Y2hMaXN0ZW5lciA9IGNvbXBvc2VFdmVudEhhbmRsZXJzKGFwcEV2ZW50cy5jdXJyZW50Lm9uVG91Y2hNb3ZlLCBoYW5kbGVQb2ludGVyTW92ZSk7XG4gICAgdmFyIG1vdXNlTGlzdGVuZXIgPSBjb21wb3NlRXZlbnRIYW5kbGVycyhhcHBFdmVudHMuY3VycmVudC5vbk1vdXNlTW92ZSwgaGFuZGxlUG9pbnRlck1vdmUpO1xuICAgIG93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaExpc3RlbmVyKTtcbiAgICBvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VMaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaExpc3RlbmVyKTtcbiAgICAgIG93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlUG9pbnRlck1vdmVdKTtcbiAgdmFyIGFkZEVuZExpc3RlbmVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gZ2V0T3duZXJEb2N1bWVudChzbGlkZXJSZWYuY3VycmVudCk7XG4gICAgdmFyIG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gICAgdmFyIHBvaW50ZXJMaXN0ZW5lciA9IGNvbXBvc2VFdmVudEhhbmRsZXJzKGFwcEV2ZW50cy5jdXJyZW50Lm9uUG9pbnRlclVwLCByZWxlYXNlUG9pbnRlckNhcHR1cmUpO1xuICAgIHZhciB0b3VjaExpc3RlbmVyID0gY29tcG9zZUV2ZW50SGFuZGxlcnMoYXBwRXZlbnRzLmN1cnJlbnQub25Ub3VjaEVuZCwgaGFuZGxlU2xpZGVTdG9wKTtcbiAgICB2YXIgbW91c2VMaXN0ZW5lciA9IGNvbXBvc2VFdmVudEhhbmRsZXJzKGFwcEV2ZW50cy5jdXJyZW50Lm9uTW91c2VVcCwgaGFuZGxlU2xpZGVTdG9wKTtcblxuICAgIGlmIChcIlBvaW50ZXJFdmVudFwiIGluIG93bmVyV2luZG93KSB7XG4gICAgICBvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgcG9pbnRlckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaExpc3RlbmVyKTtcbiAgICBvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlTGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoXCJQb2ludGVyRXZlbnRcIiBpbiBvd25lcldpbmRvdykge1xuICAgICAgICBvd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgcG9pbnRlckxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgb3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hMaXN0ZW5lcik7XG4gICAgICBvd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlTGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVTbGlkZVN0b3AsIHJlbGVhc2VQb2ludGVyQ2FwdHVyZV0pO1xuICB2YXIgYWRkU3RhcnRMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0IGlzIGlnbm9yZWQgYnkgUmVhY3QncyBzeW50aGV0aWMgdG91Y2hTdGFydCBldmVudCwgc29cbiAgICAvLyB3ZSBhdHRhY2ggdGhlIGxpc3RlbmVyIGRpcmVjdGx5IHRvIHRoZSBET00gbm9kZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvOTgwOSNpc3N1ZWNvbW1lbnQtNDEzOTc4NDA1XG4gICAgdmFyIHNsaWRlckVsZW1lbnQgPSBzbGlkZXJSZWYuY3VycmVudDtcblxuICAgIGlmICghc2xpZGVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuXG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBnZXRPd25lckRvY3VtZW50KHNsaWRlckVsZW1lbnQpO1xuICAgIHZhciBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICAgIHZhciB0b3VjaExpc3RlbmVyID0gY29tcG9zZUV2ZW50SGFuZGxlcnMoYXBwRXZlbnRzLmN1cnJlbnQub25Ub3VjaFN0YXJ0LCBoYW5kbGVTbGlkZVN0YXJ0KTtcbiAgICB2YXIgbW91c2VMaXN0ZW5lciA9IGNvbXBvc2VFdmVudEhhbmRsZXJzKGFwcEV2ZW50cy5jdXJyZW50Lm9uTW91c2VEb3duLCBoYW5kbGVTbGlkZVN0YXJ0KTtcbiAgICB2YXIgcG9pbnRlckxpc3RlbmVyID0gY29tcG9zZUV2ZW50SGFuZGxlcnMoYXBwRXZlbnRzLmN1cnJlbnQub25Qb2ludGVyRG93biwgc2V0UG9pbnRlckNhcHR1cmUpO1xuICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hMaXN0ZW5lcik7XG4gICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlTGlzdGVuZXIpO1xuXG4gICAgaWYgKFwiUG9pbnRlckV2ZW50XCIgaW4gb3duZXJXaW5kb3cpIHtcbiAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHBvaW50ZXJMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNsaWRlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hMaXN0ZW5lcik7XG4gICAgICBzbGlkZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VMaXN0ZW5lcik7XG5cbiAgICAgIGlmIChcIlBvaW50ZXJFdmVudFwiIGluIG93bmVyV2luZG93KSB7XG4gICAgICAgIHNsaWRlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHBvaW50ZXJMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3NldFBvaW50ZXJDYXB0dXJlLCBoYW5kbGVTbGlkZVN0YXJ0XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlU3RhcnRFdmVudHMuY3VycmVudCA9IGFkZFN0YXJ0TGlzdGVuZXIoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlU3RhcnRFdmVudHMuY3VycmVudCgpO1xuICAgICAgcmVtb3ZlRW5kRXZlbnRzLmN1cnJlbnQoKTtcbiAgICAgIHJlbW92ZU1vdmVFdmVudHMuY3VycmVudCgpO1xuICAgIH07XG4gIH0sIFthZGRTdGFydExpc3RlbmVyXSk7XG4gIHVzZUNoZWNrU3R5bGVzKFwic2xpZGVyXCIpO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoU2xpZGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjdHhcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29tcCwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICByZWY6IHJlZixcbiAgICBcImRhdGEtcmVhY2gtc2xpZGVyLWlucHV0XCI6IFwiXCIsXG4gICAgXCJkYXRhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gXCJcIiA6IHVuZGVmaW5lZCxcbiAgICBcImRhdGEtb3JpZW50YXRpb25cIjogb3JpZW50YXRpb24sXG4gICAgdGFiSW5kZXg6IC0xXG4gIH0pLCBpc0Z1bmN0aW9uKGNoaWxkcmVuKSA/IGNoaWxkcmVuKHtcbiAgICBoYXNGb2N1czogaGFzRm9jdXMsXG4gICAgaWQ6IGlkLFxuICAgIG1heDogbWF4LFxuICAgIG1pbjogbWluLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBhcmlhVmFsdWVUZXh0OiBhcmlhVmFsdWVUZXh0LFxuICAgIHZhbHVlVGV4dDogYXJpYVZhbHVlVGV4dCAvLyBUT0RPOiBSZW1vdmUgaW4gMS4wXG5cbiAgfSkgOiBjaGlsZHJlbiwgbmFtZSAmJlxuICAvKiNfX1BVUkVfXyovXG4gIC8vIElmIHRoZSBzbGlkZXIgaXMgdXNlZCBpbiBhIGZvcm0gd2UnbGwgbmVlZCBhbiBpbnB1dCBmaWVsZCB0b1xuICAvLyBjYXB0dXJlIHRoZSB2YWx1ZS4gV2UnbGwgYXNzdW1lIHRoaXMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGdpdmVuIGFcbiAgLy8gZm9ybSBmaWVsZCBuYW1lIChBIGBuYW1lYCBwcm9wIGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgaW4gYW55XG4gIC8vIG90aGVyIGNvbnRleHQpLlxuICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgaWQ6IGlkICYmIG1ha2VJZChcImlucHV0XCIsIGlkKVxuICB9KSkpO1xufSk7XG4vKipcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvc2xpZGVyI3NsaWRlcmlucHV0LXByb3BzXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTbGlkZXJJbnB1dC5kaXNwbGF5TmFtZSA9IFwiU2xpZGVySW5wdXRcIjtcbiAgU2xpZGVySW5wdXQucHJvcFR5cGVzID0gLyojX19QVVJFX18qL19leHRlbmRzKHt9LCBzbGlkZXJQcm9wVHlwZXMsIHtcbiAgICBjaGlsZHJlbjogLyojX19QVVJFX18qL1Byb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWRcbiAgfSk7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogU2xpZGVyVHJhY2tcbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9yZWFjaC50ZWNoL3NsaWRlciNzbGlkZXJ0cmFja1xuICovXG5cblxudmFyIFNsaWRlclRyYWNrSW1wbCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIFNsaWRlclRyYWNrKF9yZWYzLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIF9yZWYzJGFzID0gX3JlZjMuYXMsXG4gICAgICBDb21wID0gX3JlZjMkYXMgPT09IHZvaWQgMCA/IFwiZGl2XCIgOiBfcmVmMyRhcyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjMuY2hpbGRyZW4sXG4gICAgICBfcmVmMyRzdHlsZSA9IF9yZWYzLnN0eWxlLFxuICAgICAgc3R5bGUgPSBfcmVmMyRzdHlsZSA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRzdHlsZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJzdHlsZVwiXSk7XG5cbiAgdmFyIF91c2VTbGlkZXJDb250ZXh0ID0gdXNlU2xpZGVyQ29udGV4dCgpLFxuICAgICAgZGlzYWJsZWQgPSBfdXNlU2xpZGVyQ29udGV4dC5kaXNhYmxlZCxcbiAgICAgIG9yaWVudGF0aW9uID0gX3VzZVNsaWRlckNvbnRleHQub3JpZW50YXRpb24sXG4gICAgICB0cmFja1JlZiA9IF91c2VTbGlkZXJDb250ZXh0LnRyYWNrUmVmO1xuXG4gIHZhciByZWYgPSB1c2VDb21wb3NlZFJlZnModHJhY2tSZWYsIGZvcndhcmRlZFJlZik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb21wLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgIH0pXG4gIH0sIHByb3BzLCB7XG4gICAgXCJkYXRhLXJlYWNoLXNsaWRlci10cmFja1wiOiBcIlwiLFxuICAgIFwiZGF0YS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/IFwiXCIgOiB1bmRlZmluZWQsXG4gICAgXCJkYXRhLW9yaWVudGF0aW9uXCI6IG9yaWVudGF0aW9uXG4gIH0pLCBjaGlsZHJlbik7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTbGlkZXJUcmFja0ltcGwuZGlzcGxheU5hbWUgPSBcIlNsaWRlclRyYWNrXCI7XG4gIFNsaWRlclRyYWNrSW1wbC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxudmFyIFNsaWRlclRyYWNrID0gLyojX19QVVJFX18qL21lbW8oU2xpZGVyVHJhY2tJbXBsKTtcbi8qKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vcmVhY2gudGVjaC9zbGlkZXIjc2xpZGVydHJhY2stcHJvcHNcbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFNsaWRlclRyYWNrLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJUcmFja1wiO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIFNsaWRlclJhbmdlXG4gKlxuICogVGhlICh0eXBpY2FsbHkpIGhpZ2hsaWdodGVkIHBvcnRpb24gb2YgdGhlIHRyYWNrIHRoYXQgcmVwcmVzZW50cyB0aGUgc3BhY2VcbiAqIGJldHdlZW4gdGhlIHNsaWRlcidzIGBtaW5gIHZhbHVlIGFuZCBpdHMgY3VycmVudCB2YWx1ZS5cbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9yZWFjaC50ZWNoL3NsaWRlciNzbGlkZXJyYW5nZVxuICovXG5cblxudmFyIFNsaWRlclJhbmdlSW1wbCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIFNsaWRlclJhbmdlKF9yZWY0LCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIF9yZWY0JGFzID0gX3JlZjQuYXMsXG4gICAgICBDb21wID0gX3JlZjQkYXMgPT09IHZvaWQgMCA/IFwiZGl2XCIgOiBfcmVmNCRhcztcbiAgICAgIF9yZWY0LmNoaWxkcmVuO1xuICAgICAgdmFyIF9yZWY0JHN0eWxlID0gX3JlZjQuc3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWY0JHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9yZWY0JHN0eWxlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgW1wiYXNcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgX3VzZVNsaWRlckNvbnRleHQyID0gdXNlU2xpZGVyQ29udGV4dCgpLFxuICAgICAgZGlzYWJsZWQgPSBfdXNlU2xpZGVyQ29udGV4dDIuZGlzYWJsZWQsXG4gICAgICBvcmllbnRhdGlvbiA9IF91c2VTbGlkZXJDb250ZXh0Mi5vcmllbnRhdGlvbixcbiAgICAgIHJhbmdlU3R5bGUgPSBfdXNlU2xpZGVyQ29udGV4dDIucmFuZ2VTdHlsZTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29tcCwgX2V4dGVuZHMoe1xuICAgIHJlZjogZm9yd2FyZGVkUmVmLFxuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiXG4gICAgfSwgcmFuZ2VTdHlsZSwgc3R5bGUpXG4gIH0sIHByb3BzLCB7XG4gICAgXCJkYXRhLXJlYWNoLXNsaWRlci1yYW5nZVwiOiBcIlwiLFxuICAgIFwiZGF0YS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/IFwiXCIgOiB1bmRlZmluZWQsXG4gICAgXCJkYXRhLW9yaWVudGF0aW9uXCI6IG9yaWVudGF0aW9uXG4gIH0pKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFNsaWRlclJhbmdlSW1wbC5kaXNwbGF5TmFtZSA9IFwiU2xpZGVyUmFuZ2VcIjtcbiAgU2xpZGVyUmFuZ2VJbXBsLnByb3BUeXBlcyA9IHt9O1xufVxuXG52YXIgU2xpZGVyUmFuZ2UgPSAvKiNfX1BVUkVfXyovbWVtbyhTbGlkZXJSYW5nZUltcGwpOyAvLyBUT0RPOiBSZW1vdmUgaW4gMS4wXG5cbnZhciBTbGlkZXJUcmFja0hpZ2hsaWdodEltcGwgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBTbGlkZXJUcmFja0hpZ2hsaWdodEltcGwocHJvcHMsIHJlZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiYFNsaWRlclRyYWNrSGlnaGxpZ2h0YCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIGBTbGlkZXJSYW5nZWAgYW5kIHdpbGwgYmUgZHJvcHBlZCBmcm9tIGEgZnV0dXJlIHZlcnNpb24gb2YgUmVhY2ggVUkuXCIpIDogdm9pZCAwO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChTbGlkZXJSYW5nZUltcGwsIF9leHRlbmRzKHtcbiAgICBcImRhdGEtcmVhY2gtc2xpZGVyLXRyYWNrLWhpZ2hsaWdodFwiOiBcIlwiXG4gIH0sIHByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU2xpZGVyVHJhY2tIaWdobGlnaHRJbXBsLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJUcmFja0hpZ2hsaWdodFwiO1xuICBTbGlkZXJUcmFja0hpZ2hsaWdodEltcGwucHJvcFR5cGVzID0gU2xpZGVyUmFuZ2VJbXBsLnByb3BUeXBlcztcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB3YXMgcmVuYW1lZCB0byBgU2xpZGVyUmFuZ2VgIGluIGEgcHJldmlvdXMgdmVyc2lvbiBvZiBSZWFjaFxuICogVUkuIGBTbGlkZXJUcmFja0hpZ2hsaWdodGAgd2lsbCBiZSBkcm9wcGVkIGluIGEgZnV0dXJlIHZlcnNpb24uIFdlIHJlY29tbWVuZFxuICogdXBkYXRpbmcgeW91ciBwcm9qZWN0cyB0byByZXBsYWNlIGBTbGlkZXJUcmFja0hpZ2hsaWdodGAgd2l0aCBgU2xpZGVyUmFuZ2VgLlxuICpcbiAqIEBhbGlhcyBTbGlkZXJSYW5nZVxuICovXG52YXIgU2xpZGVyVHJhY2tIaWdobGlnaHQgPSAvKiNfX1BVUkVfXyovbWVtbyhTbGlkZXJUcmFja0hpZ2hsaWdodEltcGwpO1xuLyoqXG4gKiBgU2xpZGVyUmFuZ2VgIGFjY2VwdHMgYW55IHByb3BzIHRoYXQgYSBIVE1MIGRpdiBjb21wb25lbnQgYWNjZXB0cy5cbiAqIGBTbGlkZXJSYW5nZWAgd2lsbCBub3QgYWNjZXB0IG9yIHJlbmRlciBhbnkgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vcmVhY2gudGVjaC9zbGlkZXIjc2xpZGVycmFuZ2UtcHJvcHNcbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFNsaWRlclJhbmdlLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJSYW5nZVwiO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIFNsaWRlckhhbmRsZVxuICpcbiAqIFRoZSBoYW5kbGUgdGhhdCB0aGUgdXNlciBkcmFncyBhbG9uZyB0aGUgdHJhY2sgdG8gc2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vcmVhY2gudGVjaC9zbGlkZXIjc2xpZGVyaGFuZGxlXG4gKi9cblxuXG52YXIgU2xpZGVySGFuZGxlSW1wbCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIFNsaWRlckhhbmRsZShfcmVmNSwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmNSRhcyA9IF9yZWY1LmFzLFxuICAgICAgQ29tcCA9IF9yZWY1JGFzID09PSB2b2lkIDAgPyBcImRpdlwiIDogX3JlZjUkYXMsXG4gICAgICBvbkJsdXIgPSBfcmVmNS5vbkJsdXIsXG4gICAgICBvbkZvY3VzID0gX3JlZjUub25Gb2N1cyxcbiAgICAgIF9yZWY1JHN0eWxlID0gX3JlZjUuc3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWY1JHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9yZWY1JHN0eWxlLFxuICAgICAgb25LZXlEb3duID0gX3JlZjUub25LZXlEb3duLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgW1wiYXNcIiwgXCJvbkJsdXJcIiwgXCJvbkZvY3VzXCIsIFwic3R5bGVcIiwgXCJvbktleURvd25cIl0pO1xuXG4gIHZhciBfdXNlU2xpZGVyQ29udGV4dDMgPSB1c2VTbGlkZXJDb250ZXh0KCksXG4gICAgICBhcmlhTGFiZWwgPSBfdXNlU2xpZGVyQ29udGV4dDMuYXJpYUxhYmVsLFxuICAgICAgYXJpYUxhYmVsbGVkQnkgPSBfdXNlU2xpZGVyQ29udGV4dDMuYXJpYUxhYmVsbGVkQnksXG4gICAgICBhcmlhVmFsdWVUZXh0ID0gX3VzZVNsaWRlckNvbnRleHQzLmFyaWFWYWx1ZVRleHQsXG4gICAgICBkaXNhYmxlZCA9IF91c2VTbGlkZXJDb250ZXh0My5kaXNhYmxlZCxcbiAgICAgIGhhbmRsZVBvc2l0aW9uID0gX3VzZVNsaWRlckNvbnRleHQzLmhhbmRsZVBvc2l0aW9uLFxuICAgICAgaGFuZGxlUmVmID0gX3VzZVNsaWRlckNvbnRleHQzLmhhbmRsZVJlZixcbiAgICAgIGlzVmVydGljYWwgPSBfdXNlU2xpZGVyQ29udGV4dDMuaXNWZXJ0aWNhbCxcbiAgICAgIGhhbmRsZUtleURvd24gPSBfdXNlU2xpZGVyQ29udGV4dDMuaGFuZGxlS2V5RG93bixcbiAgICAgIG9yaWVudGF0aW9uID0gX3VzZVNsaWRlckNvbnRleHQzLm9yaWVudGF0aW9uLFxuICAgICAgc2V0SGFzRm9jdXMgPSBfdXNlU2xpZGVyQ29udGV4dDMuc2V0SGFzRm9jdXMsXG4gICAgICBzbGlkZXJNaW4gPSBfdXNlU2xpZGVyQ29udGV4dDMuc2xpZGVyTWluLFxuICAgICAgc2xpZGVyTWF4ID0gX3VzZVNsaWRlckNvbnRleHQzLnNsaWRlck1heCxcbiAgICAgIHZhbHVlID0gX3VzZVNsaWRlckNvbnRleHQzLnZhbHVlO1xuXG4gIHZhciByZWYgPSB1c2VDb21wb3NlZFJlZnMoaGFuZGxlUmVmLCBmb3J3YXJkZWRSZWYpO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29tcCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCB8fCB1bmRlZmluZWQgLy8gSWYgdGhlIHNsaWRlciBoYXMgYSB2aXNpYmxlIGxhYmVsLCBpdCBpcyByZWZlcmVuY2VkIGJ5XG4gICAgLy8gYGFyaWEtbGFiZWxsZWRieWAgb24gdGhlIHNsaWRlciBlbGVtZW50LiBPdGhlcndpc2UsIHRoZSBzbGlkZXJcbiAgICAvLyBlbGVtZW50IGhhcyBhIGxhYmVsIHByb3ZpZGVkIGJ5IGBhcmlhLWxhYmVsYC5cbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMi8jc2xpZGVyX3JvbGVzX3N0YXRlc19wcm9wc1xuICAgICxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbCA/IHVuZGVmaW5lZCA6IGFyaWFMYWJlbGxlZEJ5IC8vIElmIHRoZSBzbGlkZXIgaXMgdmVydGljYWxseSBvcmllbnRlZCwgaXQgaGFzIGBhcmlhLW9yaWVudGF0aW9uYCBzZXRcbiAgICAvLyB0byB2ZXJ0aWNhbC4gVGhlIGRlZmF1bHQgdmFsdWUgb2YgYGFyaWEtb3JpZW50YXRpb25gIGZvciBhIHNsaWRlciBpc1xuICAgIC8vIGhvcml6b250YWwuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjIvI3NsaWRlcl9yb2xlc19zdGF0ZXNfcHJvcHNcbiAgICAsXG4gICAgXCJhcmlhLW9yaWVudGF0aW9uXCI6IG9yaWVudGF0aW9uIC8vIFRoZSBzbGlkZXIgZWxlbWVudCBoYXMgdGhlIGBhcmlhLXZhbHVlbWF4YCBwcm9wZXJ0eSBzZXQgdG8gYSBkZWNpbWFsXG4gICAgLy8gdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUgb2YgdGhlIHNsaWRlci5cbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMi8jc2xpZGVyX3JvbGVzX3N0YXRlc19wcm9wc1xuICAgICxcbiAgICBcImFyaWEtdmFsdWVtYXhcIjogc2xpZGVyTWF4IC8vIFRoZSBzbGlkZXIgZWxlbWVudCBoYXMgdGhlIGBhcmlhLXZhbHVlbWluYCBwcm9wZXJ0eSBzZXQgdG8gYSBkZWNpbWFsXG4gICAgLy8gdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtaW5pbXVtIGFsbG93ZWQgdmFsdWUgb2YgdGhlIHNsaWRlci5cbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMi8jc2xpZGVyX3JvbGVzX3N0YXRlc19wcm9wc1xuICAgICxcbiAgICBcImFyaWEtdmFsdWVtaW5cIjogc2xpZGVyTWluIC8vIFRoZSBzbGlkZXIgZWxlbWVudCBoYXMgdGhlIGBhcmlhLXZhbHVlbm93YCBwcm9wZXJ0eSBzZXQgdG8gYSBkZWNpbWFsXG4gICAgLy8gdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBzbGlkZXIuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjIvI3NsaWRlcl9yb2xlc19zdGF0ZXNfcHJvcHNcbiAgICAsXG4gICAgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlIC8vIElmIHRoZSB2YWx1ZSBvZiBgYXJpYS12YWx1ZW5vd2AgaXMgbm90IHVzZXItZnJpZW5kbHksIGUuZy4sIHRoZSBkYXlcbiAgICAvLyBvZiB0aGUgd2VlayBpcyByZXByZXNlbnRlZCBieSBhIG51bWJlciwgdGhlIGBhcmlhLXZhbHVldGV4dGAgcHJvcGVydHlcbiAgICAvLyBpcyBzZXQgdG8gYSBzdHJpbmcgdGhhdCBtYWtlcyB0aGUgc2xpZGVyIHZhbHVlIHVuZGVyc3RhbmRhYmxlLCBlLmcuLFxuICAgIC8vIFwiTW9uZGF5XCIuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjIvI3NsaWRlcl9yb2xlc19zdGF0ZXNfcHJvcHNcbiAgICAsXG4gICAgXCJhcmlhLXZhbHVldGV4dFwiOiBhcmlhVmFsdWVUZXh0IC8vIFRoZSBlbGVtZW50IHNlcnZpbmcgYXMgdGhlIGZvY3VzYWJsZSBzbGlkZXIgY29udHJvbCBoYXMgcm9sZVxuICAgIC8vIGBzbGlkZXJgLlxuICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4yLyNzbGlkZXJfcm9sZXNfc3RhdGVzX3Byb3BzXG4gICAgLFxuICAgIHJvbGU6IFwic2xpZGVyXCIsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gLTEgOiAwXG4gIH0sIHByb3BzLCB7XG4gICAgXCJkYXRhLXJlYWNoLXNsaWRlci1oYW5kbGVcIjogXCJcIixcbiAgICByZWY6IHJlZixcbiAgICBvbkJsdXI6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQmx1ciwgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SGFzRm9jdXMoZmFsc2UpO1xuICAgIH0pLFxuICAgIG9uRm9jdXM6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRm9jdXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldEhhc0ZvY3VzKHRydWUpO1xuICAgIH0pLFxuICAgIG9uS2V5RG93bjogY29tcG9zZUV2ZW50SGFuZGxlcnMob25LZXlEb3duLCBoYW5kbGVLZXlEb3duKSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICAgIH0sIGlzVmVydGljYWwgPyB7XG4gICAgICBib3R0b206IGhhbmRsZVBvc2l0aW9uXG4gICAgfSA6IHtcbiAgICAgIGxlZnQ6IGhhbmRsZVBvc2l0aW9uXG4gICAgfSwgc3R5bGUpXG4gIH0pKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFNsaWRlckhhbmRsZUltcGwuZGlzcGxheU5hbWUgPSBcIlNsaWRlckhhbmRsZVwiO1xuICBTbGlkZXJIYW5kbGVJbXBsLnByb3BUeXBlcyA9IHt9O1xufVxuXG52YXIgU2xpZGVySGFuZGxlID0gLyojX19QVVJFX18qL21lbW8oU2xpZGVySGFuZGxlSW1wbCk7XG4vKipcbiAqIGBTbGlkZXJSYW5nZWAgYWNjZXB0cyBhbnkgcHJvcHMgdGhhdCBhIEhUTUwgZGl2IGNvbXBvbmVudCBhY2NlcHRzLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvc2xpZGVyI3NsaWRlcmhhbmRsZS1wcm9wc1xuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU2xpZGVySGFuZGxlLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJIYW5kbGVcIjtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBTbGlkZXJNYXJrZXJcbiAqXG4gKiBBIGZpeGVkIHZhbHVlIG1hcmtlci4gVGhlc2UgY2FuIGJlIHVzZWQgdG8gaWxsdXN0cmF0ZSBhIHJhbmdlIG9mIHN0ZXBzIG9yXG4gKiBoaWdobGlnaHQgaW1wb3J0YW50IHBvaW50cyBhbG9uZyB0aGUgc2xpZGVyIHRyYWNrLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvc2xpZGVyI3NsaWRlcm1hcmtlclxuICovXG5cblxudmFyIFNsaWRlck1hcmtlckltcGwgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBTbGlkZXJNYXJrZXIoX3JlZjYsIGZvcndhcmRlZFJlZikge1xuICB2YXIgX3JlZjYkYXMgPSBfcmVmNi5hcyxcbiAgICAgIENvbXAgPSBfcmVmNiRhcyA9PT0gdm9pZCAwID8gXCJkaXZcIiA6IF9yZWY2JGFzLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmNi5jaGlsZHJlbixcbiAgICAgIF9yZWY2JHN0eWxlID0gX3JlZjYuc3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWY2JHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9yZWY2JHN0eWxlLFxuICAgICAgdmFsdWUgPSBfcmVmNi52YWx1ZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjYsIFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJzdHlsZVwiLCBcInZhbHVlXCJdKTtcblxuICB2YXIgX3VzZVNsaWRlckNvbnRleHQ0ID0gdXNlU2xpZGVyQ29udGV4dCgpLFxuICAgICAgZGlzYWJsZWQgPSBfdXNlU2xpZGVyQ29udGV4dDQuZGlzYWJsZWQsXG4gICAgICBpc1ZlcnRpY2FsID0gX3VzZVNsaWRlckNvbnRleHQ0LmlzVmVydGljYWwsXG4gICAgICBvcmllbnRhdGlvbiA9IF91c2VTbGlkZXJDb250ZXh0NC5vcmllbnRhdGlvbixcbiAgICAgIHNsaWRlck1pbiA9IF91c2VTbGlkZXJDb250ZXh0NC5zbGlkZXJNaW4sXG4gICAgICBzbGlkZXJNYXggPSBfdXNlU2xpZGVyQ29udGV4dDQuc2xpZGVyTWF4LFxuICAgICAgc2xpZGVyVmFsdWUgPSBfdXNlU2xpZGVyQ29udGV4dDQudmFsdWU7XG5cbiAgdmFyIGluUmFuZ2UgPSAhKHZhbHVlIDwgc2xpZGVyTWluIHx8IHZhbHVlID4gc2xpZGVyTWF4KTtcbiAgdmFyIGFic29sdXRlU3RhcnRQb3NpdGlvbiA9IHZhbHVlVG9QZXJjZW50KHZhbHVlLCBzbGlkZXJNaW4sIHNsaWRlck1heCkgKyBcIiVcIjtcbiAgdmFyIHN0YXRlID0gdmFsdWUgPCBzbGlkZXJWYWx1ZSA/IFwidW5kZXItdmFsdWVcIiA6IHZhbHVlID09PSBzbGlkZXJWYWx1ZSA/IFwiYXQtdmFsdWVcIiA6IFwib3Zlci12YWx1ZVwiO1xuICByZXR1cm4gaW5SYW5nZSA/IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbXAsIF9leHRlbmRzKHtcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICAgIH0sIGlzVmVydGljYWwgPyB7XG4gICAgICBib3R0b206IGFic29sdXRlU3RhcnRQb3NpdGlvblxuICAgIH0gOiB7XG4gICAgICBsZWZ0OiBhYnNvbHV0ZVN0YXJ0UG9zaXRpb25cbiAgICB9LCBzdHlsZSlcbiAgfSwgcHJvcHMsIHtcbiAgICBcImRhdGEtcmVhY2gtc2xpZGVyLW1hcmtlclwiOiBcIlwiLFxuICAgIFwiZGF0YS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/IFwiXCIgOiB1bmRlZmluZWQsXG4gICAgXCJkYXRhLW9yaWVudGF0aW9uXCI6IG9yaWVudGF0aW9uLFxuICAgIFwiZGF0YS1zdGF0ZVwiOiBzdGF0ZSxcbiAgICBcImRhdGEtdmFsdWVcIjogdmFsdWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pKSA6IG51bGw7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTbGlkZXJNYXJrZXJJbXBsLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJNYXJrZXJcIjtcbiAgU2xpZGVyTWFya2VySW1wbC5wcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xufVxuXG52YXIgU2xpZGVyTWFya2VyID0gLyojX19QVVJFX18qL21lbW8oU2xpZGVyTWFya2VySW1wbCk7XG4vKipcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvc2xpZGVyI3NsaWRlcm1hcmtlci1wcm9wc1xuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU2xpZGVyTWFya2VyLmRpc3BsYXlOYW1lID0gXCJTbGlkZXJNYXJrZXJcIjtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBjbGFtcCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiB2YWwgPiBtYXggPyBtYXggOiB2YWwgPCBtaW4gPyBtaW4gOiB2YWw7XG59XG4vKipcbiAqIFRoaXMgaGFuZGxlcyB0aGUgY2FzZSB3aGVuIG51bSBpcyB2ZXJ5IHNtYWxsICgwLjAwMDAwMDAxKSwganMgd2lsbCB0dXJuXG4gKiB0aGlzIGludG8gMWUtOC4gV2hlbiBudW0gaXMgYmlnZ2VyIHRoYW4gMSBvciBsZXNzIHRoYW4gLTEgaXQgd29uJ3QgZ2V0XG4gKiBjb252ZXJ0ZWQgdG8gdGhpcyBub3RhdGlvbiBzbyBpdCdzIGZpbmUuXG4gKlxuICogQHBhcmFtIG51bVxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9ibG9iL21hc3Rlci9wYWNrYWdlcy9tYXRlcmlhbC11aS9zcmMvU2xpZGVyL1NsaWRlci5qcyNMNjlcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldERlY2ltYWxQcmVjaXNpb24obnVtKSB7XG4gIGlmIChNYXRoLmFicyhudW0pIDwgMSkge1xuICAgIHZhciBwYXJ0cyA9IG51bS50b0V4cG9uZW50aWFsKCkuc3BsaXQoXCJlLVwiKTtcbiAgICB2YXIgbWF0aXNzYURlY2ltYWxQYXJ0ID0gcGFydHNbMF0uc3BsaXQoXCIuXCIpWzFdO1xuICAgIHJldHVybiAobWF0aXNzYURlY2ltYWxQYXJ0ID8gbWF0aXNzYURlY2ltYWxQYXJ0Lmxlbmd0aCA6IDApICsgcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcbiAgfVxuXG4gIHZhciBkZWNpbWFsUGFydCA9IG51bS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXTtcbiAgcmV0dXJuIGRlY2ltYWxQYXJ0ID8gZGVjaW1hbFBhcnQubGVuZ3RoIDogMDtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFRvVmFsdWUocGVyY2VudCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogcGVyY2VudCArIG1pbjtcbn1cblxuZnVuY3Rpb24gcm91bmRWYWx1ZVRvU3RlcCh2YWx1ZSwgc3RlcCwgbWluKSB7XG4gIHZhciBuZWFyZXN0ID0gTWF0aC5yb3VuZCgodmFsdWUgLSBtaW4pIC8gc3RlcCkgKiBzdGVwICsgbWluO1xuICByZXR1cm4gTnVtYmVyKG5lYXJlc3QudG9GaXhlZChnZXREZWNpbWFsUHJlY2lzaW9uKHN0ZXApKSk7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50ZXJQb3NpdGlvbihldmVudCwgdG91Y2hJZCkge1xuICBpZiAodG91Y2hJZC5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcblxuICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IHRvdWNoSWQuY3VycmVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgeTogdG91Y2guY2xpZW50WVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICB5OiBldmVudC5jbGllbnRZXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE5ld1ZhbHVlKGhhbmRsZVBvc2l0aW9uLCB0cmFjaywgcHJvcHMpIHtcbiAgdmFyIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBtaW4gPSBwcm9wcy5taW4sXG4gICAgICBtYXggPSBwcm9wcy5tYXgsXG4gICAgICBzdGVwID0gcHJvcHMuc3RlcDtcblxuICBpZiAoIXRyYWNrIHx8ICFoYW5kbGVQb3NpdGlvbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIF90cmFjayRnZXRCb3VuZGluZ0NsaSA9IHRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgbGVmdCA9IF90cmFjayRnZXRCb3VuZGluZ0NsaS5sZWZ0LFxuICAgICAgd2lkdGggPSBfdHJhY2skZ2V0Qm91bmRpbmdDbGkud2lkdGgsXG4gICAgICBib3R0b20gPSBfdHJhY2skZ2V0Qm91bmRpbmdDbGkuYm90dG9tLFxuICAgICAgaGVpZ2h0ID0gX3RyYWNrJGdldEJvdW5kaW5nQ2xpLmhlaWdodDtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uID09PSBTbGlkZXJPcmllbnRhdGlvbi5WZXJ0aWNhbDtcbiAgdmFyIGRpZmYgPSBpc1ZlcnRpY2FsID8gYm90dG9tIC0gaGFuZGxlUG9zaXRpb24ueSA6IGhhbmRsZVBvc2l0aW9uLnggLSBsZWZ0O1xuICB2YXIgcGVyY2VudCA9IGRpZmYgLyAoaXNWZXJ0aWNhbCA/IGhlaWdodCA6IHdpZHRoKTtcbiAgdmFyIG5ld1ZhbHVlID0gcGVyY2VudFRvVmFsdWUocGVyY2VudCwgbWluLCBtYXgpO1xuICByZXR1cm4gY2xhbXAoc3RlcCA/IHJvdW5kVmFsdWVUb1N0ZXAobmV3VmFsdWUsIHN0ZXAsIG1pbikgOiBuZXdWYWx1ZSwgbWluLCBtYXgpO1xufVxuXG5mdW5jdGlvbiB1c2VEaW1lbnNpb25zKHJlZikge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyJCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICB3aWR0aCA9IF9SZWFjdCR1c2VTdGF0ZTIkLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX1JlYWN0JHVzZVN0YXRlMiQuaGVpZ2h0LFxuICAgICAgc2V0RGltZW5zaW9ucyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07IC8vIE1hbnkgZXhpc3RpbmcgYHVzZURpbWVuc2lvbnNgIHR5cGUgaG9va3Mgd2lsbCB1c2UgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGBcbiAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGRvZXMgbm90IHdvcmsgaGVyZSB3aGVuIGJvcmRlcnMgYXJlIGFwcGxpZWQuXG4gIC8vIGdldENvbXB1dGVkU3R5bGUgaXMgbm90IGFzIHBlcmZvcm1hbnQgc28gd2UgbWF5IHdhbnQgdG8gY3JlYXRlIGEgdXRpbGl0eSB0b1xuICAvLyBjaGVjayBmb3IgYW55IGNvbmZsaWN0cyB3aXRoIGJveCBzaXppbmcgZmlyc3QgYW5kIG9ubHkgdXNlXG4gIC8vIGBnZXRDb21wdXRlZFN0eWxlYCBpZiBuZWNjZXNzYXJ5LlxuXG4gIC8qIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVmLmN1cnJlbnRcbiAgICA/IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgOiAwOyAqL1xuXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBnZXRPd25lckRvY3VtZW50KHJlZi5jdXJyZW50KTtcbiAgICB2YXIgb3duZXJXaW5kb3cgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcblxuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgdmFyIF9vd25lcldpbmRvdyRnZXRDb21wdSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUocmVmLmN1cnJlbnQpLFxuICAgICAgICAgIF9uZXdIZWlnaHQgPSBfb3duZXJXaW5kb3ckZ2V0Q29tcHUuaGVpZ2h0LFxuICAgICAgICAgIF9uZXdXaWR0aCA9IF9vd25lcldpbmRvdyRnZXRDb21wdS53aWR0aDtcblxuICAgICAgdmFyIG5ld0hlaWdodCA9IHBhcnNlRmxvYXQoX25ld0hlaWdodCk7XG4gICAgICB2YXIgbmV3V2lkdGggPSBwYXJzZUZsb2F0KF9uZXdXaWR0aCk7XG5cbiAgICAgIGlmIChuZXdIZWlnaHQgIT09IGhlaWdodCB8fCBuZXdXaWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgc2V0RGltZW5zaW9ucyh7XG4gICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IG5ld1dpZHRoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3JlZiwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIHJlZjogcmVmLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiB2YWx1ZVRvUGVyY2VudCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIG1pbikgKiAxMDAgLyAobWF4IC0gbWluKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xuZXhwb3J0IHsgU0xJREVSX0hBTkRMRV9BTElHTl9DRU5URVIsIFNMSURFUl9IQU5ETEVfQUxJR05fQ09OVEFJTiwgU0xJREVSX09SSUVOVEFUSU9OX0hPUklaT05UQUwsIFNMSURFUl9PUklFTlRBVElPTl9WRVJUSUNBTCwgU2xpZGVyLCBTbGlkZXJIYW5kbGUsIFNsaWRlckhhbmRsZUFsaWdubWVudCwgU2xpZGVySW5wdXQsIFNsaWRlck1hcmtlciwgU2xpZGVyT3JpZW50YXRpb24sIFNsaWRlclJhbmdlLCBTbGlkZXJUcmFjaywgU2xpZGVyVHJhY2tIaWdobGlnaHQgfTtcbiIsImZ1bmN0aW9uIGNhblVzZURPTSgpIHtcbiAgcmV0dXJuICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgY2FuVXNlRE9NIH07XG4iLCIvKipcbiAqIFdyYXBzIGEgbGliLWRlZmluZWQgZXZlbnQgaGFuZGxlciBhbmQgYSB1c2VyLWRlZmluZWQgZXZlbnQgaGFuZGxlciwgcmV0dXJuaW5nXG4gKiBhIHNpbmdsZSBoYW5kbGVyIHRoYXQgYWxsb3dzIGEgdXNlciB0byBwcmV2ZW50IGxpYi1kZWZpbmVkIGhhbmRsZXJzIGZyb21cbiAqIGZpcmluZy5cbiAqXG4gKiBAcGFyYW0gdGhlaXJIYW5kbGVyIFVzZXItc3VwcGxpZWQgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIG91ckhhbmRsZXIgTGlicmFyeS1zdXBwbGllZCBldmVudCBoYW5kbGVyXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VFdmVudEhhbmRsZXJzKHRoZWlySGFuZGxlciwgb3VySGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhlaXJIYW5kbGVyICYmIHRoZWlySGFuZGxlcihldmVudCk7XG5cbiAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybiBvdXJIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IGNvbXBvc2VFdmVudEhhbmRsZXJzIH07XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi8uLi90eXBlLWNoZWNrL2Rpc3QvcmVhY2gtdXRpbHMtdHlwZS1jaGVjay5lc20uanMnO1xuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkge1xuICB2YXIgaXQ7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpdC5uZXh0LmJpbmQoaXQpO1xufVxuXG4vKipcbiAqIFBhc3NlcyBvciBhc3NpZ25zIGFuIGFyYml0cmFyeSB2YWx1ZSB0byBhIHJlZiBmdW5jdGlvbiBvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHJlZlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblJlZihyZWYsIHZhbHVlKSB7XG4gIGlmIChyZWYgPT0gbnVsbCkgcmV0dXJuO1xuXG4gIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICByZWYodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYXNzaWduIHZhbHVlIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIHRvIHJlZiBcXFwiXCIgKyByZWYgKyBcIlxcXCJcIik7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIFBhc3NlcyBvciBhc3NpZ25zIGEgdmFsdWUgdG8gbXVsdGlwbGUgcmVmcyAodHlwaWNhbGx5IGEgRE9NIG5vZGUpLiBVc2VmdWwgZm9yXG4gKiBkZWFsaW5nIHdpdGggY29tcG9uZW50cyB0aGF0IG5lZWQgYW4gZXhwbGljaXQgcmVmIGZvciBET00gY2FsY3VsYXRpb25zIGJ1dFxuICogYWxzbyBmb3J3YXJkcyByZWZzIGFzc2lnbmVkIGJ5IGFuIGFwcC5cbiAqXG4gKiBAcGFyYW0gcmVmcyBSZWZzIHRvIGZvcmtcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb21wb3NlZFJlZnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZWZzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlZnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHJlZnMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIHJlZiA9IF9zdGVwLnZhbHVlO1xuICAgICAgYXNzaWduUmVmKHJlZiwgbm9kZSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgcmVmcyk7XG59XG5cbmV4cG9ydCB7IGFzc2lnblJlZiwgdXNlQ29tcG9zZWRSZWZzIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYW1lZENvbnRleHQobmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciBDdHggPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBDdHguZGlzcGxheU5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcmV0dXJuIEN0eDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmFtZWRDb250ZXh0IH07XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cbnZhciBjaGVja2VkUGtncyA9IHt9O1xuLyoqXG4gKiBKdXN0IGEgbGlsIHN0YXRlIGxvZ2dlclxuICpcbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIERFQlVHXG4gKi9cblxuZnVuY3Rpb24gdXNlU3RhdGVMb2dnZXIoc3RhdGUsIERFQlVHKSB7XG4gIGlmIChERUJVRyA9PT0gdm9pZCAwKSB7XG4gICAgREVCVUcgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgZGVidWdSZWYgPSB1c2VSZWYoREVCVUcpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1Z1JlZi5jdXJyZW50ID0gREVCVUc7XG4gICAgfSwgW0RFQlVHXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkZWJ1Z1JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoXCJTdGF0ZSBVcGRhdGVkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBzdGF0ZSwgXCJmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDEyMCU7IGZvbnQtc3R5bGU6IGl0YWxpYztcIik7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH1cbiAgICB9LCBbc3RhdGVdKTtcbiAgfVxufVxuLyoqXG4gKiBXaGVuIGluIGRldiBtb2RlLCBjaGVja3MgdGhhdCBzdHlsZXMgZm9yIGEgZ2l2ZW4gYEByZWFjaGAgcGFja2FnZSBhcmUgbG9hZGVkLlxuICpcbiAqIEBwYXJhbSBwYWNrYWdlTmFtZSBOYW1lIG9mIHRoZSBwYWNrYWdlIHRvIGNoZWNrLlxuICogQGV4YW1wbGUgY2hlY2tTdHlsZXMoXCJkaWFsb2dcIikgd2lsbCBjaGVjayBmb3Igc3R5bGVzIGZvciBAcmVhY2gvZGlhbG9nXG4gKi9cblxuZnVuY3Rpb24gY2hlY2tTdHlsZXMocGFja2FnZU5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIEluIENKUyBmaWxlcywgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgaXMgc3RyaXBwZWQgZnJvbSBvdXIgYnVpbGQsIGJ1dCB3ZVxuICAgIC8vIG5lZWQgaXQgdG8gcHJldmVudCBzdHlsZSBjaGVja3MgZnJvbSBjbG9nZ2luZyB1cCB1c2VyIGxvZ3Mgd2hpbGUgdGVzdGluZy5cbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB1bnRpbCB3ZSBjYW4gdHdlYWsgdGhlIGJ1aWxkIGEgYml0IHRvIGFjY29tbW9kYXRlLlxuICAgIHZhciBfcmVmID0gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgPyBwcm9jZXNzLmVudiA6IHtcbiAgICAgIE5PREVfRU5WOiBcImRldmVsb3BtZW50XCJcbiAgICB9LFxuICAgICAgICBlbnZpcm9ubWVudCA9IF9yZWYuTk9ERV9FTlY7IC8vIG9ubHkgY2hlY2sgb25jZSBwZXIgcGFja2FnZVxuXG5cbiAgICBpZiAoY2hlY2tlZFBrZ3NbcGFja2FnZU5hbWVdKSByZXR1cm47XG4gICAgY2hlY2tlZFBrZ3NbcGFja2FnZU5hbWVdID0gdHJ1ZTtcblxuICAgIGlmIChlbnZpcm9ubWVudCA9PT0gXCJkZXZlbG9wbWVudFwiICYmIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoXCItLXJlYWNoLVwiICsgcGFja2FnZU5hbWUpLCAxMCkgIT09IDEpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkByZWFjaC9cIiArIHBhY2thZ2VOYW1lICsgXCIgc3R5bGVzIG5vdCBmb3VuZC4gSWYgeW91IGFyZSB1c2luZyBhIGJ1bmRsZXIgbGlrZSB3ZWJwYWNrIG9yIHBhcmNlbCBpbmNsdWRlIHRoaXMgaW4gdGhlIGVudHJ5IGZpbGUgb2YgeW91ciBhcHAgYmVmb3JlIGFueSBvZiB5b3VyIG93biBzdHlsZXM6XFxuICBcXG4gICAgICBpbXBvcnQgXFxcIkByZWFjaC9cIiArIHBhY2thZ2VOYW1lICsgXCIvc3R5bGVzLmNzc1xcXCI7XFxuICBcXG4gICAgT3RoZXJ3aXNlIHlvdSdsbCBuZWVkIHRvIGluY2x1ZGUgdGhlbSBzb21lIG90aGVyIHdheTpcXG4gIFxcbiAgICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgdHlwZT1cXFwidGV4dC9jc3NcXFwiIGhyZWY9XFxcIm5vZGVfbW9kdWxlcy9AcmVhY2gvXCIgKyBwYWNrYWdlTmFtZSArIFwiL3N0eWxlcy5jc3NcXFwiIC8+XFxuICBcXG4gICAgRm9yIG1vcmUgaW5mb3JtYXRpb24gdmlzaXQgaHR0cHM6Ly91aS5yZWFjaC50ZWNoL3N0eWxpbmcuXFxuICAgIFwiKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogV2hlbiBpbiBkZXYgbW9kZSwgY2hlY2tzIHRoYXQgc3R5bGVzIGZvciBhIGdpdmVuIGBAcmVhY2hgIHBhY2thZ2UgYXJlIGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0gcGFja2FnZU5hbWUgTmFtZSBvZiB0aGUgcGFja2FnZSB0byBjaGVjay5cbiAqIEBleGFtcGxlIHVzZUNoZWNrU3R5bGVzKFwiZGlhbG9nXCIpIHdpbGwgY2hlY2sgZm9yIHN0eWxlcyBmb3IgQHJlYWNoL2RpYWxvZ1xuICovXG5cbmZ1bmN0aW9uIHVzZUNoZWNrU3R5bGVzKHBhY2thZ2VOYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgbmFtZSA9IHVzZVJlZihwYWNrYWdlTmFtZSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2b2lkIChuYW1lLmN1cnJlbnQgPSBwYWNrYWdlTmFtZSk7XG4gICAgfSwgW3BhY2thZ2VOYW1lXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjaGVja1N0eWxlcyhuYW1lLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuLyoqXG4gKiBMb2dzIGEgd2FybmluZyBpbiBkZXYgbW9kZSB3aGVuIGEgY29tcG9uZW50IHN3aXRjaGVzIGZyb20gY29udHJvbGxlZCB0b1xuICogdW5jb250cm9sbGVkLCBvciB2aWNlIHZlcnNhXG4gKlxuICogQSBzaW5nbGUgcHJvcCBzaG91bGQgdHlwaWNhbGx5IGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGFcbiAqIGNvbXBvbmVudCBpcyBjb250cm9sbGVkIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0gY29udHJvbGxlZFZhbHVlXG4gKiBAcGFyYW0gY29udHJvbGxlZFByb3BOYW1lXG4gKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbnRyb2xsZWRTd2l0Y2hXYXJuaW5nKGNvbnRyb2xsZWRWYWx1ZSwgY29udHJvbGxlZFByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgY29udHJvbGxlZFJlZiA9IHVzZVJlZihjb250cm9sbGVkVmFsdWUgIT0gbnVsbCk7XG4gICAgdmFyIG5hbWVDYWNoZSA9IHVzZVJlZih7XG4gICAgICBjb21wb25lbnROYW1lOiBjb21wb25lbnROYW1lLFxuICAgICAgY29udHJvbGxlZFByb3BOYW1lOiBjb250cm9sbGVkUHJvcE5hbWVcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgbmFtZUNhY2hlLmN1cnJlbnQgPSB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IGNvbXBvbmVudE5hbWUsXG4gICAgICAgIGNvbnRyb2xsZWRQcm9wTmFtZTogY29udHJvbGxlZFByb3BOYW1lXG4gICAgICB9O1xuICAgIH0sIFtjb21wb25lbnROYW1lLCBjb250cm9sbGVkUHJvcE5hbWVdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdhc0NvbnRyb2xsZWQgPSBjb250cm9sbGVkUmVmLmN1cnJlbnQ7XG4gICAgICB2YXIgX25hbWVDYWNoZSRjdXJyZW50ID0gbmFtZUNhY2hlLmN1cnJlbnQsXG4gICAgICAgICAgY29tcG9uZW50TmFtZSA9IF9uYW1lQ2FjaGUkY3VycmVudC5jb21wb25lbnROYW1lLFxuICAgICAgICAgIGNvbnRyb2xsZWRQcm9wTmFtZSA9IF9uYW1lQ2FjaGUkY3VycmVudC5jb250cm9sbGVkUHJvcE5hbWU7XG4gICAgICB2YXIgaXNDb250cm9sbGVkID0gY29udHJvbGxlZFZhbHVlICE9IG51bGw7XG5cbiAgICAgIGlmICh3YXNDb250cm9sbGVkICE9PSBpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkEgY29tcG9uZW50IGlzIGNoYW5naW5nIGFuIFwiICsgKHdhc0NvbnRyb2xsZWQgPyBcIlwiIDogXCJ1blwiKSArIFwiY29udHJvbGxlZCBgXCIgKyBjb250cm9sbGVkUHJvcE5hbWUgKyBcImAgc3RhdGUgb2YgXCIgKyBjb21wb25lbnROYW1lICsgXCIgdG8gYmUgXCIgKyAod2FzQ29udHJvbGxlZCA/IFwidW5cIiA6IFwiXCIpICsgXCJjb250cm9sbGVkLiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgdGhlIHZhbHVlIGNoYW5naW5nIGZyb20gdW5kZWZpbmVkIHRvIGEgZGVmaW5lZCB2YWx1ZSwgd2hpY2ggc2hvdWxkIG5vdCBoYXBwZW4uIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgXCIgKyBjb21wb25lbnROYW1lICsgXCIgZWxlbWVudCBmb3IgdGhlIGxpZmV0aW1lIG9mIHRoZSBjb21wb25lbnQuXFxuICAgICAgTW9yZSBpbmZvOiBodHRwczovL2ZiLm1lL3JlYWN0LWNvbnRyb2xsZWQtY29tcG9uZW50c1wiKTtcbiAgICAgIH1cbiAgICB9LCBbY29udHJvbGxlZFZhbHVlXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hlY2tTdHlsZXMsIHVzZUNoZWNrU3R5bGVzLCB1c2VDb250cm9sbGVkU3dpdGNoV2FybmluZywgdXNlU3RhdGVMb2dnZXIgfTtcbiIsIi8qKlxuICogRGV0ZWN0cyByaWdodCBjbGlja3NcbiAqXG4gKiBAcGFyYW0gbmF0aXZlRXZlbnRcbiAqL1xuZnVuY3Rpb24gaXNSaWdodENsaWNrKG5hdGl2ZUV2ZW50KSB7XG4gIHJldHVybiBcIndoaWNoXCIgaW4gbmF0aXZlRXZlbnQgPyBuYXRpdmVFdmVudC53aGljaCA9PT0gMyA6IFwiYnV0dG9uXCIgaW4gbmF0aXZlRXZlbnQgPyBuYXRpdmVFdmVudC5idXR0b24gPT09IDIgOiBmYWxzZTtcbn1cblxuZXhwb3J0IHsgaXNSaWdodENsaWNrIH07XG4iLCIvKipcbiAqIEpvaW5zIHN0cmluZ3MgdG8gZm9ybWF0IElEcyBmb3IgY29tcG91bmQgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gYXJnc1xuICovXG5mdW5jdGlvbiBtYWtlSWQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gYXJncy5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwgIT0gbnVsbDtcbiAgfSkuam9pbihcIi0tXCIpO1xufVxuXG5leHBvcnQgeyBtYWtlSWQgfTtcbiIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgeyBub29wIH07XG4iLCJpbXBvcnQgeyBjYW5Vc2VET00gfSBmcm9tICcuLi8uLi9jYW4tdXNlLWRvbS9kaXN0L3JlYWNoLXV0aWxzLWNhbi11c2UtZG9tLmVzbS5qcyc7XG5cbi8qKlxuICogR2V0IGFuIGVsZW1lbnQncyBvd25lciBkb2N1bWVudC4gVXNlZnVsIHdoZW4gY29tcG9uZW50cyBhcmUgdXNlZCBpbiBpZnJhbWVzXG4gKiBvciBvdGhlciBlbnZpcm9ubWVudHMgbGlrZSBkZXYgdG9vbHMuXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXRPd25lckRvY3VtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGNhblVzZURPTSgpID8gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IGRvY3VtZW50IDogbnVsbDtcbn1cbi8qKlxuICogVE9ETzogUmVtb3ZlIGluIDEuMFxuICovXG5cbmZ1bmN0aW9uIGdldE93bmVyV2luZG93KGVsZW1lbnQpIHtcbiAgdmFyIG93bmVyRG9jdW1lbnQgPSBnZXRPd25lckRvY3VtZW50KGVsZW1lbnQpO1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogbnVsbDtcbn1cblxuZXhwb3J0IHsgZ2V0T3duZXJEb2N1bWVudCwgZ2V0T3duZXJXaW5kb3cgfTtcbiIsIi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBib29sZWFuLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCI7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIHJldHVybiAhISh2YWx1ZSAmJiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBvciBub3QgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFpc05hTih2YWx1ZSk7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCB7IGlzQm9vbGVhbiwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nIH07XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBDaGVjayBpZiBhIGNvbXBvbmVudCBpcyBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0XG4gKiBzdGF0ZSB2YWx1ZSBhbmQgc2V0dGVyIGFjY29yZGluZ2x5LiBJZiB0aGUgY29tcG9uZW50IHN0YXRlIGlzIGNvbnRyb2xsZWQgYnlcbiAqIHRoZSBhcHAsIHRoZSBzZXR0ZXIgaXMgYSBub29wLlxuICpcbiAqIEBwYXJhbSBjb250cm9sbGVkVmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWVcbiAqL1xuZnVuY3Rpb24gdXNlQ29udHJvbGxlZFN0YXRlKGNvbnRyb2xsZWRWYWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciBjb250cm9sbGVkUmVmID0gdXNlUmVmKGNvbnRyb2xsZWRWYWx1ZSAhPSBudWxsKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKSxcbiAgICAgIHZhbHVlU3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRWYWx1ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIWNvbnRyb2xsZWRSZWYuY3VycmVudCkge1xuICAgICAgc2V0VmFsdWUobik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiBbY29udHJvbGxlZFJlZi5jdXJyZW50ID8gY29udHJvbGxlZFZhbHVlIDogdmFsdWVTdGF0ZSwgc2V0XTtcbn1cblxuZXhwb3J0IHsgdXNlQ29udHJvbGxlZFN0YXRlIH07XG4iLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNhblVzZURPTSB9IGZyb20gJy4uLy4uL2Nhbi11c2UtZG9tL2Rpc3QvcmVhY2gtdXRpbHMtY2FuLXVzZS1kb20uZXNtLmpzJztcblxuLyoqXG4gKiBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLiBUb1xuICogZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbiAqIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci4gV2Ugb2NjYXNpb25hbGx5IG5lZWQgdXNlTGF5b3V0RWZmZWN0IHRvXG4gKiBlbnN1cmUgd2UgZG9uJ3QgZ2V0IGEgcmVuZGVyIGZsYXNoIGZvciBjZXJ0YWluIG9wZXJhdGlvbnMsIGJ1dCB3ZSBtYXkgYWxzb1xuICogbmVlZCBhZmZlY3RlZCBjb21wb25lbnRzIHRvIHJlbmRlciBvbiB0aGUgc2VydmVyLiBPbmUgZXhhbXBsZSBpcyB3aGVuIHNldHRpbmdcbiAqIGEgY29tcG9uZW50J3MgZGVzY2VuZGFudHMgdG8gcmV0cmlldmUgdGhlaXIgaW5kZXggdmFsdWVzLlxuICpcbiAqIEltcG9ydGFudCB0byBub3RlIHRoYXQgdXNpbmcgdGhpcyBob29rIGFzIGFuIGVzY2FwZSBoYXRjaCB3aWxsIGJyZWFrIHRoZVxuICogZXNsaW50IGRlcGVuZGVuY3kgd2FybmluZ3MgdW5sZXNzIHlvdSByZW5hbWUgdGhlIGltcG9ydCB0byBgdXNlTGF5b3V0RWZmZWN0YC5cbiAqIFVzZSBzcGFyaW5nbHkgb25seSB3aGVuIHRoZSBlZmZlY3Qgd29uJ3QgZWZmZWN0IHRoZSByZW5kZXJlZCBIVE1MIHRvIGF2b2lkXG4gKiBhbnkgc2VydmVyL2NsaWVudCBtaXNtYXRjaC5cbiAqXG4gKiBJZiBhIHVzZUxheW91dEVmZmVjdCBpcyBuZWVkZWQgYW5kIHRoZSByZXN1bHQgd291bGQgY3JlYXRlIGEgbWlzbWF0Y2gsIGl0J3NcbiAqIGxpa2VseSB0aGF0IHRoZSBjb21wb25lbnQgaW4gcXVlc3Rpb24gc2hvdWxkbid0IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgYXRcbiAqIGFsbCwgc28gYSBiZXR0ZXIgYXBwcm9hY2ggd291bGQgYmUgdG8gbGF6aWx5IHJlbmRlciB0aG9zZSBpbiBhIHBhcmVudFxuICogY29tcG9uZW50IGFmdGVyIGNsaWVudC1zaWRlIGh5ZHJhdGlvbi5cbiAqXG4gKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWVhcm9uL2U3ZDk3Y2RmMzhhMjkwNzkyNGVhMTJlNGViZGYzYzg1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVkdXhqcy9yZWFjdC1yZWR1eC9ibG9iL21hc3Rlci9zcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qc1xuICpcbiAqIEBwYXJhbSBlZmZlY3RcbiAqIEBwYXJhbSBkZXBzXG4gKi9cblxudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSAvKiNfX1BVUkVfXyovY2FuVXNlRE9NKCkgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbmV4cG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi8uLi91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0L2Rpc3QvcmVhY2gtdXRpbHMtdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC5lc20uanMnO1xuaW1wb3J0ICcuLi8uLi9jYW4tdXNlLWRvbS9kaXN0L3JlYWNoLXV0aWxzLWNhbi11c2UtZG9tLmVzbS5qcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5cbi8qKlxuICogQ29udmVydHMgYSBjYWxsYmFjayB0byBhIHJlZiB0byBhdm9pZCB0cmlnZ2VyaW5nIHJlLXJlbmRlcnMgd2hlbiBwYXNzZWQgYXMgYVxuICogcHJvcCBhbmQgZXhwb3NlZCBhcyBhIHN0YWJsZSBmdW5jdGlvbiB0byBhdm9pZCBleGVjdXRpbmcgZWZmZWN0cyB3aGVuXG4gKiBwYXNzZWQgYXMgYSBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdGFibGVDYWxsYmFja0hvb2sodXNlRWZmZWN0SG9vaywgY2FsbGJhY2spIHtcbiAgdmFyIGNhbGxiYWNrUmVmID0gdXNlUmVmKGNhbGxiYWNrKTtcbiAgdXNlRWZmZWN0SG9vayhmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrO1xuICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGJhY2tSZWYuY3VycmVudCAmJiBjYWxsYmFja1JlZi5jdXJyZW50LmFwcGx5KGNhbGxiYWNrUmVmLCBhcmd1bWVudHMpO1xuICB9LCBbXSk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGJhY2sgdG8gYSByZWYgdG8gYXZvaWQgdHJpZ2dlcmluZyByZS1yZW5kZXJzIHdoZW4gcGFzc2VkIGFzIGFcbiAqIHByb3AgYW5kIGV4cG9zZWQgYXMgYSBzdGFibGUgZnVuY3Rpb24gdG8gYXZvaWQgZXhlY3V0aW5nIGVmZmVjdHMgd2hlbiBwYXNzZWRcbiAqIGFzIGEgZGVwZW5kZW5jeS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiBjcmVhdGVTdGFibGVDYWxsYmFja0hvb2sodXNlRWZmZWN0LCBjYWxsYmFjayk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGJhY2sgdG8gYSByZWYgdG8gYXZvaWQgdHJpZ2dlcmluZyByZS1yZW5kZXJzIHdoZW4gcGFzc2VkIGFzIGFcbiAqIHByb3AgYW5kIGV4cG9zZWQgYXMgYSBzdGFibGUgZnVuY3Rpb24gdG8gYXZvaWQgZXhlY3V0aW5nIGVmZmVjdHMgd2hlbiBwYXNzZWRcbiAqIGFzIGEgZGVwZW5kZW5jeS5cbiAqXG4gKiBVc2UgdGhpcyBvdmVyIGB1c2VTdGFibGVDYWxsYmFja2Agd2hlbiB5b3Ugd2FudCB0aGUgY2FsbGJhY2sgdG8gYmUgY2FjaGVkIGluXG4gKiBgdXNlTGF5b3V0RWZmZWN0YCBpbnN0ZWFkIG9mIGB1c2VFZmZlY3RgIHRvIGRlYWwgd2l0aCB0aW1pbmcgaXNzdWVzIG9ubHkgd2hlblxuICogbmVlZGVkLlxuICovXG5cbmZ1bmN0aW9uIHVzZVN0YWJsZUxheW91dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiBjcmVhdGVTdGFibGVDYWxsYmFja0hvb2sodXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgeyB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlTGF5b3V0Q2FsbGJhY2sgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=