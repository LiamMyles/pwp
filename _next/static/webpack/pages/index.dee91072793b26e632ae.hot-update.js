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
})(["font-size:20px;width:600px;margin:5px auto;padding:0 0 10px;border-bottom:solid grey 2px;"]);
_c8 = Title;
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
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Maths, Polygons and Adventures to be had"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/pwp/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        integrity: "sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledP5Canvas, {
      sketch: Src_sketch__WEBPACK_IMPORTED_MODULE_8__.sketch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: ["Polygon: (", vertices, ",", subdivisions, ",", points, jumps.length > 0 && "(".concat(jumps === null || jumps === void 0 ? void 0 : jumps.join(","), ")"), ") - Lines:", " ", (0,Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_3__.getLineDensity)({
        vertices: vertices,
        subdivisions: subdivisions,
        points: points
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-slider",
          children: "N-Gon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-input",
          children: "N-Gon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
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
          lineNumber: 157,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-slider",
          children: "Subdivision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 171,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-input",
          children: "Subdivision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 182,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-slider",
          children: "Points"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
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
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-input",
          children: "Points"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
          lineNumber: 206,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
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
          lineNumber: 219,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-subdivisions",
          children: "Toggle Subdivisions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
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
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-vertices",
          children: "Toggle Vertices"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
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
          lineNumber: 241,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-slow-draw",
          children: "Toggle Drawing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JumpsArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TotalJumps, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "total-jumps",
          children: "Total Jumps"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
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
          lineNumber: 255,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, this), (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(totalJumps)).map(function (_, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "jump-".concat(index),
            children: ["Jump ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
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
            lineNumber: 269,
            columnNumber: 15
          }, _this)]
        }, "jump-".concat(index), true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrapperDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "List of vertices:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
          children: globalValues.current.matrix.map(function (cords, index) {
            return "".concat(index, " - X:").concat(cords.x.toFixed(3), ", Y:").concat(cords.y.toFixed(3), ", \n");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "bWxdp0j3Mf0TjTBJb+zCEHOHpfk=");

_c9 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "StyledP5Canvas");
$RefreshReg$(_c2, "StyledWrapperDiv");
$RefreshReg$(_c3, "StyledSlider");
$RefreshReg$(_c4, "ToggleBox");
$RefreshReg$(_c5, "ToggleArea");
$RefreshReg$(_c6, "JumpsArea");
$RefreshReg$(_c7, "TotalJumps");
$RefreshReg$(_c8, "Title");
$RefreshReg$(_c9, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giXSwibmFtZXMiOlsiU3R5bGVkUDVDYW52YXMiLCJzdHlsZWQiLCJQNUNhbnZhcyIsIlN0eWxlZFdyYXBwZXJEaXYiLCJTdHlsZWRTbGlkZXIiLCJUb2dnbGVCb3giLCJUb2dnbGVBcmVhIiwiSnVtcHNBcmVhIiwiVG90YWxKdW1wcyIsIlRpdGxlIiwiSG9tZSIsInVzZVN0YXRlIiwiR2xvYmFsVmFsdWVzIiwidmVydGljZXMiLCJzZXRWZXJ0ZXgiLCJzdWJkaXZpc2lvbnMiLCJzZXRTdWJkaXZpc2lvbnMiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJzaG93U3ViZGl2aXNpb25zIiwic2V0U2hvd1N1YmRpdmlzaW9ucyIsInNob3dWZXJ0aWNlcyIsInNldFNob3dWZXJ0aWNlcyIsImp1bXBzIiwic2V0SnVtcHMiLCJ0b3RhbEp1bXBzIiwic2V0VG90YWxKdW1wcyIsInNob3VsZFNsb3dEcmF3Iiwic2V0U2hvdWxkU2xvd0RyYXciLCJnbG9iYWxWYWx1ZXMiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwcmV2aW91c1N0YXRlIiwibGVuZ3RoIiwiQXJyYXkiLCJtYXAiLCJuZXdTdGF0ZSIsInNsaWNlIiwiY3VycmVudCIsInNsb3dEcmF3Iiwic2tldGNoIiwiam9pbiIsImdldExpbmVEZW5zaXR5IiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJNYXRoIiwiZmxvb3IiLCJjaGVja2VkIiwiXyIsImluZGV4IiwibWF0cml4IiwiY29yZHMiLCJ4IiwidG9GaXhlZCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsMERBQU0sQ0FBQ0MseURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrREFBcEI7S0FBTUYsYztB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QUF2QixpQkFBZ0RGLEtBQUssQ0FBQ0csQ0FBTixDQUFRRCxPQUFSLENBQzlDLENBRDhDLENBQWhEO0FBSUQsV0FMQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbktGO0FBQUEsa0JBREY7QUFtTEQ7O0dBOU5lNUMsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZWU5MTA3Mjc5M2IyNmU2MzJhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHJlYWNoL3NsaWRlci9zdHlsZXMuY3NzXCJcblxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIkByZWFjaC9zbGlkZXJcIlxuaW1wb3J0IHsgZ2V0TGluZURlbnNpdHkgfSBmcm9tIFwiQ2FsY3VsYXRpb25zL2dldExpbmVEZW5zaXR5XCJcbmltcG9ydCB7IFA1Q2FudmFzIH0gZnJvbSBcIkNvbXBvbmVudHMvUDVDYW52YXNcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2xvYmFsVmFsdWVzIH0gZnJvbSBcIlNyYy9nbG9iYWxzXCJcbmltcG9ydCB7IHNrZXRjaCB9IGZyb20gXCJTcmMvc2tldGNoXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgU3R5bGVkUDVDYW52YXMgPSBzdHlsZWQoUDVDYW52YXMpYFxuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuYFxuXG5jb25zdCBTdHlsZWRXcmFwcGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGgxIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbmBcblxuY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMzBweDtcbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAmIGlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbmBcbmNvbnN0IFRvZ2dsZUJveCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMTBweCAwO1xuYFxuXG5jb25zdCBUb2dnbGVBcmVhID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAycHg7XG5gXG5cbmNvbnN0IEp1bXBzQXJlYSA9IHN0eWxlZChTdHlsZWRXcmFwcGVyRGl2KWBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAycHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuYFxuY29uc3QgVG90YWxKdW1wcyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxLzY7XG4gIGRpc3BsYXk6IGdyaWQ7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgcGFkZGluZzogMCAwIDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGdyZXkgMnB4O1xuYFxuXG5leHBvcnQgZnVuY3Rpb24gSG9tZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBbdmVydGljZXMsIHNldFZlcnRleF0gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMudmVydGljZXMpXG4gIGNvbnN0IFtzdWJkaXZpc2lvbnMsIHNldFN1YmRpdmlzaW9uc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zKVxuICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnBvaW50cylcbiAgY29uc3QgW3Nob3dTdWJkaXZpc2lvbnMsIHNldFNob3dTdWJkaXZpc2lvbnNdID0gdXNlU3RhdGUoXG4gICAgR2xvYmFsVmFsdWVzLnNob3dTdWJkaXZpc2lvbnNcbiAgKVxuICBjb25zdCBbc2hvd1ZlcnRpY2VzLCBzZXRTaG93VmVydGljZXNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnNob3dWZXJ0aWNlcylcbiAgY29uc3QgW2p1bXBzLCBzZXRKdW1wc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuanVtcHMpXG4gIGNvbnN0IFt0b3RhbEp1bXBzLCBzZXRUb3RhbEp1bXBzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzaG91bGRTbG93RHJhdywgc2V0U2hvdWxkU2xvd0RyYXddID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnNsb3dEcmF3KVxuXG4gIGNvbnN0IGdsb2JhbFZhbHVlcyA9IHVzZVJlZihHbG9iYWxWYWx1ZXMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRKdW1wcygocHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgICAgaWYgKGp1bXBzLmxlbmd0aCA8IHRvdGFsSnVtcHMpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5BcnJheSh0b3RhbEp1bXBzKV0ubWFwKCgpID0+IDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2aW91c1N0YXRlXVxuICAgICAgICByZXR1cm4gbmV3U3RhdGUuc2xpY2UoMCwgdG90YWxKdW1wcyAtIDEpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW3RvdGFsSnVtcHNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQudmVydGljZXMgPSB2ZXJ0aWNlc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnN1YmRpdmlzaW9ucyA9IHN1YmRpdmlzaW9uc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnBvaW50cyA9IHBvaW50c1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnNob3dTdWJkaXZpc2lvbnMgPSBzaG93U3ViZGl2aXNpb25zXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2hvd1ZlcnRpY2VzID0gc2hvd1ZlcnRpY2VzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuanVtcHMgPSBqdW1wc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnNsb3dEcmF3ID0gc2hvdWxkU2xvd0RyYXdcbiAgfSwgW1xuICAgIHZlcnRpY2VzLFxuICAgIHN1YmRpdmlzaW9ucyxcbiAgICBwb2ludHMsXG4gICAgc2hvd1N1YmRpdmlzaW9ucyxcbiAgICBzaG93VmVydGljZXMsXG4gICAganVtcHMsXG4gICAgc2hvdWxkU2xvd0RyYXcsXG4gIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QbGF5aW5nIFdpdGggUG9seWdvbnM8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIk1hdGhzLCBQb2x5Z29ucyBhbmQgQWR2ZW50dXJlcyB0byBiZSBoYWRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9wd3AvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tZXllci1yZXNldC8yLjAvcmVzZXQubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhNTEyLU5tTGtESVUxQy9DODh3aTMyNEhCYytTMmtMaGkwOFBONUdEZVVWVlZDL0JWdC85SXpkc2M5U1ZlVmZBMVVaYlkzc0hVbERTeVJYaEN6SGZyNmhtUFB3PT1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTdHlsZWRQNUNhbnZhcyBza2V0Y2g9e3NrZXRjaH0gLz5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAgUG9seWdvbjogKHt2ZXJ0aWNlc30se3N1YmRpdmlzaW9uc30se3BvaW50c31cbiAgICAgICAge2p1bXBzLmxlbmd0aCA+IDAgJiYgYCgke2p1bXBzPy5qb2luKFwiLFwiKX0pYH0pIC0gTGluZXM6e1wiIFwifVxuICAgICAgICB7Z2V0TGluZURlbnNpdHkoeyB2ZXJ0aWNlcywgc3ViZGl2aXNpb25zLCBwb2ludHMgfSl9XG4gICAgICA8L1RpdGxlPlxuICAgICAgPFN0eWxlZFNsaWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZlcnRleC1udW1iZXItc2xpZGVyXCI+Ti1Hb248L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MzZ9XG4gICAgICAgICAgICBpZD1cInZlcnRleC1udW1iZXItc2xpZGVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFZlcnRleCh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dmVydGljZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCI+Ti1Hb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInZlcnRleC1udW1iZXItaW5wdXRcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFZlcnRleChwYXJzZUludCh2YWx1ZSkgfHwgMSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dmVydGljZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJkaXZpc2lvbi1udW1iZXItc2xpZGVyXCI+U3ViZGl2aXNpb248L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17NTB9XG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U3ViZGl2aXNpb25zKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJkaXZpc2lvbi1udW1iZXItaW5wdXRcIj5TdWJkaXZpc2lvbjwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJzdWJkaXZpc2lvbi1udW1iZXItaW5wdXRcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFN1YmRpdmlzaW9ucyhwYXJzZUludCh2YWx1ZSkgfHwgMSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17c3ViZGl2aXNpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRTbGlkZXI+XG4gICAgICA8U3R5bGVkU2xpZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIj5Qb2ludHM8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17TWF0aC5mbG9vcigodmVydGljZXMgKiBzdWJkaXZpc2lvbnMpIC8gMil9XG4gICAgICAgICAgICBpZD1cInBvaW50cy1udW1iZXItc2xpZGVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFBvaW50cyh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17cG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9pbnRzLW51bWJlci1pbnB1dFwiPlBvaW50czwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwicG9pbnRzLW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0UG9pbnRzKHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtwb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxUb2dnbGVBcmVhPlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXN1YmRpdmlzaW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17YCR7c2hvd1N1YmRpdmlzaW9uc31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd1N1YmRpdmlzaW9ucyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXN1YmRpdmlzaW9uc1wiPlRvZ2dsZSBTdWJkaXZpc2lvbnM8L2xhYmVsPlxuICAgICAgICA8L1RvZ2dsZUJveD5cbiAgICAgICAgPFRvZ2dsZUJveD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInRvZ2dsZS12ZXJ0aWNlc1wiXG4gICAgICAgICAgICB2YWx1ZT17YCR7c2hvd1ZlcnRpY2VzfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93VmVydGljZXMoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS12ZXJ0aWNlc1wiPlRvZ2dsZSBWZXJ0aWNlczwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXNsb3ctZHJhd1wiXG4gICAgICAgICAgICB2YWx1ZT17YCR7c2hvdWxkU2xvd0RyYXd9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3VsZFNsb3dEcmF3KGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtc2xvdy1kcmF3XCI+VG9nZ2xlIERyYXdpbmc8L2xhYmVsPlxuICAgICAgICA8L1RvZ2dsZUJveD5cbiAgICAgIDwvVG9nZ2xlQXJlYT5cbiAgICAgIDxKdW1wc0FyZWE+XG4gICAgICAgIDxUb3RhbEp1bXBzPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWwtanVtcHNcIj5Ub3RhbCBKdW1wczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwidG90YWwtanVtcHNcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFRvdGFsSnVtcHMocGFyc2VJbnQodmFsdWUpIHx8IDApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RvdGFsSnVtcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ub3RhbEp1bXBzPlxuICAgICAgICB7Wy4uLkFycmF5KHRvdGFsSnVtcHMpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtganVtcC0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGp1bXAtJHtpbmRleH1gfT5KdW1wIHtpbmRleCArIDF9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgaWQ9e2BqdW1wLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRKdW1wcygocHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2aW91c1N0YXRlXVxuICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZVtpbmRleF0gPSBwYXJzZUludCh2YWx1ZSkgfHwgMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L0p1bXBzQXJlYT5cbiAgICAgIDxTdHlsZWRXcmFwcGVyRGl2PlxuICAgICAgICA8cD5MaXN0IG9mIHZlcnRpY2VzOjwvcD5cbiAgICAgICAgPHByZT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIHtnbG9iYWxWYWx1ZXMuY3VycmVudC5tYXRyaXgubWFwKChjb3JkcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2luZGV4fSAtIFg6JHtjb3Jkcy54LnRvRml4ZWQoMyl9LCBZOiR7Y29yZHMueS50b0ZpeGVkKFxuICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgKX0sIFxuYFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgIDwvU3R5bGVkV3JhcHBlckRpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==