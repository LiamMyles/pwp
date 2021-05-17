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
var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.h1.withConfig({
  displayName: "home__Title",
  componentId: "x1qyyy-7"
})(["font-size:20p;width:600px;"]);
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
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Maths, Polygons and Adventures to be had"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/pwp/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        integrity: "sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledP5Canvas, {
      sketch: Src_sketch__WEBPACK_IMPORTED_MODULE_8__.sketch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Polygon: (", vertices, ",", subdivisions, ",", points, jumps.length > 0 && "(".concat(jumps === null || jumps === void 0 ? void 0 : jumps.join(","), ")"), ") - Lines:", " ", (0,Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_3__.getLineDensity)({
        vertices: vertices,
        subdivisions: subdivisions,
        points: points
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-slider",
          children: "N-Gon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          max: 36,
          id: "vertex-number-slider",
          onChange: function onChange(value) {
            return setVertex(value);
          },
          value: vertices
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-input",
          children: "N-Gon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
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
          lineNumber: 154,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-slider",
          children: "Subdivision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          max: 50,
          id: "subdivision-number-slider",
          onChange: function onChange(value) {
            return setSubdivisions(value);
          },
          value: subdivisions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-input",
          children: "Subdivision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
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
          lineNumber: 179,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-slider",
          children: "Points"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
          min: 1,
          max: Math.floor(vertices * subdivisions / 2),
          id: "points-number-slider",
          onChange: function onChange(value) {
            return setPoints(value);
          },
          value: points
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-input",
          children: "Points"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
          lineNumber: 203,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
          lineNumber: 216,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-subdivisions",
          children: "Toggle Subdivisions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
          lineNumber: 227,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-vertices",
          children: "Toggle Vertices"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
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
          lineNumber: 238,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-slow-draw",
          children: "Toggle Drawing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JumpsArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TotalJumps, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "total-jumps",
          children: "Total Jumps"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
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
          lineNumber: 252,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, this), (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(totalJumps)).map(function (_, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "jump-".concat(index),
            children: ["Jump ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
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
            lineNumber: 266,
            columnNumber: 15
          }, _this)]
        }, "jump-".concat(index), true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrapperDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "List of vertices:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
          children: globalValues.current.matrix.map(function (cords, index) {
            return "".concat(index, " - X:").concat(cords.x.toFixed(3), ", Y:").concat(cords.y.toFixed(3), ", \n");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 283,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giXSwibmFtZXMiOlsiU3R5bGVkUDVDYW52YXMiLCJzdHlsZWQiLCJQNUNhbnZhcyIsIlN0eWxlZFdyYXBwZXJEaXYiLCJTdHlsZWRTbGlkZXIiLCJUb2dnbGVCb3giLCJUb2dnbGVBcmVhIiwiSnVtcHNBcmVhIiwiVG90YWxKdW1wcyIsIlRpdGxlIiwiSG9tZSIsInVzZVN0YXRlIiwiR2xvYmFsVmFsdWVzIiwidmVydGljZXMiLCJzZXRWZXJ0ZXgiLCJzdWJkaXZpc2lvbnMiLCJzZXRTdWJkaXZpc2lvbnMiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJzaG93U3ViZGl2aXNpb25zIiwic2V0U2hvd1N1YmRpdmlzaW9ucyIsInNob3dWZXJ0aWNlcyIsInNldFNob3dWZXJ0aWNlcyIsImp1bXBzIiwic2V0SnVtcHMiLCJ0b3RhbEp1bXBzIiwic2V0VG90YWxKdW1wcyIsInNob3VsZFNsb3dEcmF3Iiwic2V0U2hvdWxkU2xvd0RyYXciLCJnbG9iYWxWYWx1ZXMiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwcmV2aW91c1N0YXRlIiwibGVuZ3RoIiwiQXJyYXkiLCJtYXAiLCJuZXdTdGF0ZSIsInNsaWNlIiwiY3VycmVudCIsInNsb3dEcmF3Iiwic2tldGNoIiwiam9pbiIsImdldExpbmVEZW5zaXR5IiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJNYXRoIiwiZmxvb3IiLCJjaGVja2VkIiwiXyIsImluZGV4IiwibWF0cml4IiwiY29yZHMiLCJ4IiwidG9GaXhlZCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsMERBQU0sQ0FBQ0MseURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrREFBcEI7S0FBTUYsYztB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QUFDRyxDQUFOLENBQVFELE9BQVIsQ0FDOUMsQ0FEOEMsQ0FBaEQ7QUFJRCxXQUxBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuS0Y7QUFBQSxrQkFERjtBQW1MRDs7R0E5TmU1QyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2ZmQyMzlhNmNhNjUxY2YxODA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcmVhY2gvc2xpZGVyL3N0eWxlcy5jc3NcIlxuXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQHJlYWNoL3NsaWRlclwiXG5pbXBvcnQgeyBnZXRMaW5lRGVuc2l0eSB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TGluZURlbnNpdHlcIlxuaW1wb3J0IHsgUDVDYW52YXMgfSBmcm9tIFwiQ29tcG9uZW50cy9QNUNhbnZhc1wiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHbG9iYWxWYWx1ZXMgfSBmcm9tIFwiU3JjL2dsb2JhbHNcIlxuaW1wb3J0IHsgc2tldGNoIH0gZnJvbSBcIlNyYy9za2V0Y2hcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBTdHlsZWRQNUNhbnZhcyA9IHN0eWxlZChQNUNhbnZhcylgXG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG5gXG5cbmNvbnN0IFN0eWxlZFdyYXBwZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEzMHB4O1xuICAmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuYFxuY29uc3QgVG9nZ2xlQm94ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4IDA7XG5gXG5cbmNvbnN0IFRvZ2dsZUFyZWEgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlci10b3A6IHNvbGlkIGdyZXkgMnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDJweDtcbmBcblxuY29uc3QgSnVtcHNBcmVhID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDJweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICAmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgJiBpbnB1dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG5gXG5jb25zdCBUb3RhbEp1bXBzID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEvNjtcbiAgZGlzcGxheTogZ3JpZDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMjBwO1xuICB3aWR0aDogNjAwcHg7XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBIb21lKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFt2ZXJ0aWNlcywgc2V0VmVydGV4XSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy52ZXJ0aWNlcylcbiAgY29uc3QgW3N1YmRpdmlzaW9ucywgc2V0U3ViZGl2aXNpb25zXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMpXG4gIGNvbnN0IFtwb2ludHMsIHNldFBvaW50c10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMucG9pbnRzKVxuICBjb25zdCBbc2hvd1N1YmRpdmlzaW9ucywgc2V0U2hvd1N1YmRpdmlzaW9uc10gPSB1c2VTdGF0ZShcbiAgICBHbG9iYWxWYWx1ZXMuc2hvd1N1YmRpdmlzaW9uc1xuICApXG4gIGNvbnN0IFtzaG93VmVydGljZXMsIHNldFNob3dWZXJ0aWNlc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc2hvd1ZlcnRpY2VzKVxuICBjb25zdCBbanVtcHMsIHNldEp1bXBzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5qdW1wcylcbiAgY29uc3QgW3RvdGFsSnVtcHMsIHNldFRvdGFsSnVtcHNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3Nob3VsZFNsb3dEcmF3LCBzZXRTaG91bGRTbG93RHJhd10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpXG5cbiAgY29uc3QgZ2xvYmFsVmFsdWVzID0gdXNlUmVmKEdsb2JhbFZhbHVlcylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICBpZiAoanVtcHMubGVuZ3RoIDwgdG90YWxKdW1wcykge1xuICAgICAgICByZXR1cm4gWy4uLkFycmF5KHRvdGFsSnVtcHMpXS5tYXAoKCkgPT4gMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZS5zbGljZSgwLCB0b3RhbEp1bXBzIC0gMSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbdG90YWxKdW1wc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC52ZXJ0aWNlcyA9IHZlcnRpY2VzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc3ViZGl2aXNpb25zID0gc3ViZGl2aXNpb25zXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQucG9pbnRzID0gcG9pbnRzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2hvd1N1YmRpdmlzaW9ucyA9IHNob3dTdWJkaXZpc2lvbnNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zaG93VmVydGljZXMgPSBzaG93VmVydGljZXNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5qdW1wcyA9IGp1bXBzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2xvd0RyYXcgPSBzaG91bGRTbG93RHJhd1xuICB9LCBbXG4gICAgdmVydGljZXMsXG4gICAgc3ViZGl2aXNpb25zLFxuICAgIHBvaW50cyxcbiAgICBzaG93U3ViZGl2aXNpb25zLFxuICAgIHNob3dWZXJ0aWNlcyxcbiAgICBqdW1wcyxcbiAgICBzaG91bGRTbG93RHJhdyxcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBsYXlpbmcgV2l0aCBQb2x5Z29uczwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTWF0aHMsIFBvbHlnb25zIGFuZCBBZHZlbnR1cmVzIHRvIGJlIGhhZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3B3cC9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21leWVyLXJlc2V0LzIuMC9yZXNldC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItTm1Ma0RJVTFDL0M4OHdpMzI0SEJjK1Mya0xoaTA4UE41R0RlVVZWVkMvQlZ0LzlJemRzYzlTVmVWZkExVVpiWTNzSFVsRFN5UlhoQ3pIZnI2aG1QUHc9PVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN0eWxlZFA1Q2FudmFzIHNrZXRjaD17c2tldGNofSAvPlxuICAgICAgPGgxPlxuICAgICAgICBQb2x5Z29uOiAoe3ZlcnRpY2VzfSx7c3ViZGl2aXNpb25zfSx7cG9pbnRzfVxuICAgICAgICB7anVtcHMubGVuZ3RoID4gMCAmJiBgKCR7anVtcHM/LmpvaW4oXCIsXCIpfSlgfSkgLSBMaW5lczp7XCIgXCJ9XG4gICAgICAgIHtnZXRMaW5lRGVuc2l0eSh7IHZlcnRpY2VzLCBzdWJkaXZpc2lvbnMsIHBvaW50cyB9KX1cbiAgICAgIDwvaDE+XG4gICAgICA8U3R5bGVkU2xpZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmVydGV4LW51bWJlci1zbGlkZXJcIj5OLUdvbjwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXszNn1cbiAgICAgICAgICAgIGlkPVwidmVydGV4LW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VmVydGV4KHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXt2ZXJ0aWNlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZlcnRleC1udW1iZXItaW5wdXRcIj5OLUdvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwidmVydGV4LW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0VmVydGV4KHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2ZXJ0aWNlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFN0eWxlZFNsaWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1zbGlkZXJcIj5TdWJkaXZpc2lvbjwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXs1MH1cbiAgICAgICAgICAgIGlkPVwic3ViZGl2aXNpb24tbnVtYmVyLXNsaWRlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTdWJkaXZpc2lvbnModmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3N1YmRpdmlzaW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiPlN1YmRpdmlzaW9uPC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U3ViZGl2aXNpb25zKHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLXNsaWRlclwiPlBvaW50czwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXtNYXRoLmZsb29yKCh2ZXJ0aWNlcyAqIHN1YmRpdmlzaW9ucykgLyAyKX1cbiAgICAgICAgICAgIGlkPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UG9pbnRzKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtwb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLWlucHV0XCI+UG9pbnRzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwb2ludHMtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRQb2ludHMocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3BvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFRvZ2dsZUFyZWE+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93U3ViZGl2aXNpb25zfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3ViZGl2aXNpb25zKGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCI+VG9nZ2xlIFN1YmRpdmlzaW9uczwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXZlcnRpY2VzXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93VmVydGljZXN9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dWZXJ0aWNlcyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXZlcnRpY2VzXCI+VG9nZ2xlIFZlcnRpY2VzPC9sYWJlbD5cbiAgICAgICAgPC9Ub2dnbGVCb3g+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc2xvdy1kcmF3XCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG91bGRTbG93RHJhd31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvdWxkU2xvd0RyYXcoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1zbG93LWRyYXdcIj5Ub2dnbGUgRHJhd2luZzwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgPC9Ub2dnbGVBcmVhPlxuICAgICAgPEp1bXBzQXJlYT5cbiAgICAgICAgPFRvdGFsSnVtcHM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbC1qdW1wc1wiPlRvdGFsIEp1bXBzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ0b3RhbC1qdW1wc1wiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0VG90YWxKdW1wcyhwYXJzZUludCh2YWx1ZSkgfHwgMClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dG90YWxKdW1wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RvdGFsSnVtcHM+XG4gICAgICAgIHtbLi4uQXJyYXkodG90YWxKdW1wcyldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2BqdW1wLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtganVtcC0ke2luZGV4fWB9Pkp1bXAge2luZGV4ICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBpZD17YGp1bXAtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlKSB8fCAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvSnVtcHNBcmVhPlxuICAgICAgPFN0eWxlZFdyYXBwZXJEaXY+XG4gICAgICAgIDxwPkxpc3Qgb2YgdmVydGljZXM6PC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAge2dsb2JhbFZhbHVlcy5jdXJyZW50Lm1hdHJpeC5tYXAoKGNvcmRzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7aW5kZXh9IC0gWDoke2NvcmRzLngudG9GaXhlZCgzKX0sIFk6JHtjb3Jkcy55LnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICApfSwgXG5gXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgPC9TdHlsZWRXcmFwcGVyRGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9