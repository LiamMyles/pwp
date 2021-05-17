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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slider, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slider, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slider, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giXSwibmFtZXMiOlsiU3R5bGVkUDVDYW52YXMiLCJzdHlsZWQiLCJQNUNhbnZhcyIsIlN0eWxlZFdyYXBwZXJEaXYiLCJTdHlsZWRTbGlkZXIiLCJUb2dnbGVCb3giLCJUb2dnbGVBcmVhIiwiSnVtcHNBcmVhIiwiVG90YWxKdW1wcyIsIkhvbWUiLCJ1c2VTdGF0ZSIsIkdsb2JhbFZhbHVlcyIsInZlcnRpY2VzIiwic2V0VmVydGV4Iiwic3ViZGl2aXNpb25zIiwic2V0U3ViZGl2aXNpb25zIiwicG9pbnRzIiwic2V0UG9pbnRzIiwic2hvd1N1YmRpdmlzaW9ucyIsInNldFNob3dTdWJkaXZpc2lvbnMiLCJzaG93VmVydGljZXMiLCJzZXRTaG93VmVydGljZXMiLCJqdW1wcyIsInNldEp1bXBzIiwidG90YWxKdW1wcyIsInNldFRvdGFsSnVtcHMiLCJzaG91bGRTbG93RHJhdyIsInNldFNob3VsZFNsb3dEcmF3IiwiZ2xvYmFsVmFsdWVzIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicHJldmlvdXNTdGF0ZSIsImxlbmd0aCIsIkFycmF5IiwibWFwIiwibmV3U3RhdGUiLCJzbGljZSIsImN1cnJlbnQiLCJzbG93RHJhdyIsInNrZXRjaCIsImpvaW4iLCJnZXRMaW5lRGVuc2l0eSIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsInBhcnNlSW50IiwiY2hlY2tlZCIsIl8iLCJpbmRleCIsIm1hdHJpeCIsImNvcmRzIiwieCIsInRvRml4ZWQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsMERBQU0sQ0FBQ0MseURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrREFBcEI7S0FBTUYsYztBQU1OLElBQU1HLGdCQUFnQixHQUFHRixx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OztHQTdOZTFDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZiOWQwMWMxZjMwZmEyMmJkYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkByZWFjaC9zbGlkZXIvc3R5bGVzLmNzc1wiXG5cbmltcG9ydCB7fSBmcm9tIFwiQHJlYWNoL3NsaWRlclwiXG5pbXBvcnQgeyBnZXRMaW5lRGVuc2l0eSB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TGluZURlbnNpdHlcIlxuaW1wb3J0IHsgUDVDYW52YXMgfSBmcm9tIFwiQ29tcG9uZW50cy9QNUNhbnZhc1wiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHbG9iYWxWYWx1ZXMgfSBmcm9tIFwiU3JjL2dsb2JhbHNcIlxuaW1wb3J0IHsgc2tldGNoIH0gZnJvbSBcIlNyYy9za2V0Y2hcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBTdHlsZWRQNUNhbnZhcyA9IHN0eWxlZChQNUNhbnZhcylgXG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG5gXG5cbmNvbnN0IFN0eWxlZFdyYXBwZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEzMHB4O1xuICAmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuYFxuY29uc3QgVG9nZ2xlQm94ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4IDA7XG5gXG5cbmNvbnN0IFRvZ2dsZUFyZWEgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlci10b3A6IHNvbGlkIGdyZXkgMnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDJweDtcbmBcblxuY29uc3QgSnVtcHNBcmVhID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDJweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICAmIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgJiBpbnB1dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG5gXG5jb25zdCBUb3RhbEp1bXBzID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEvNjtcbiAgZGlzcGxheTogZ3JpZDtcbmBcblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgW3ZlcnRpY2VzLCBzZXRWZXJ0ZXhdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnZlcnRpY2VzKVxuICBjb25zdCBbc3ViZGl2aXNpb25zLCBzZXRTdWJkaXZpc2lvbnNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucylcbiAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5wb2ludHMpXG4gIGNvbnN0IFtzaG93U3ViZGl2aXNpb25zLCBzZXRTaG93U3ViZGl2aXNpb25zXSA9IHVzZVN0YXRlKFxuICAgIEdsb2JhbFZhbHVlcy5zaG93U3ViZGl2aXNpb25zXG4gIClcbiAgY29uc3QgW3Nob3dWZXJ0aWNlcywgc2V0U2hvd1ZlcnRpY2VzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zaG93VmVydGljZXMpXG4gIGNvbnN0IFtqdW1wcywgc2V0SnVtcHNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLmp1bXBzKVxuICBjb25zdCBbdG90YWxKdW1wcywgc2V0VG90YWxKdW1wc10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2hvdWxkU2xvd0RyYXcsIHNldFNob3VsZFNsb3dEcmF3XSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zbG93RHJhdylcblxuICBjb25zdCBnbG9iYWxWYWx1ZXMgPSB1c2VSZWYoR2xvYmFsVmFsdWVzKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SnVtcHMoKHByZXZpb3VzU3RhdGUpID0+IHtcbiAgICAgIGlmIChqdW1wcy5sZW5ndGggPCB0b3RhbEp1bXBzKSB7XG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkodG90YWxKdW1wcyldLm1hcCgoKSA9PiAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4ucHJldmlvdXNTdGF0ZV1cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlLnNsaWNlKDAsIHRvdGFsSnVtcHMgLSAxKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFt0b3RhbEp1bXBzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnZlcnRpY2VzID0gdmVydGljZXNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zdWJkaXZpc2lvbnMgPSBzdWJkaXZpc2lvbnNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5wb2ludHMgPSBwb2ludHNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zaG93U3ViZGl2aXNpb25zID0gc2hvd1N1YmRpdmlzaW9uc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnNob3dWZXJ0aWNlcyA9IHNob3dWZXJ0aWNlc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50Lmp1bXBzID0ganVtcHNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zbG93RHJhdyA9IHNob3VsZFNsb3dEcmF3XG4gIH0sIFtcbiAgICB2ZXJ0aWNlcyxcbiAgICBzdWJkaXZpc2lvbnMsXG4gICAgcG9pbnRzLFxuICAgIHNob3dTdWJkaXZpc2lvbnMsXG4gICAgc2hvd1ZlcnRpY2VzLFxuICAgIGp1bXBzLFxuICAgIHNob3VsZFNsb3dEcmF3LFxuICBdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGxheWluZyBXaXRoIFBvbHlnb25zPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJNYXRocywgUG9seWdvbnMgYW5kIEFkdmVudHVyZXMgdG8gYmUgaGFkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvcHdwL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWV5ZXItcmVzZXQvMi4wL3Jlc2V0Lm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi1ObUxrRElVMUMvQzg4d2kzMjRIQmMrUzJrTGhpMDhQTjVHRGVVVlZWQy9CVnQvOUl6ZHNjOVNWZVZmQTFVWmJZM3NIVWxEU3lSWGhDekhmcjZobVBQdz09XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U3R5bGVkUDVDYW52YXMgc2tldGNoPXtza2V0Y2h9IC8+XG4gICAgICA8aDE+XG4gICAgICAgIFBvbHlnb246ICh7dmVydGljZXN9LHtzdWJkaXZpc2lvbnN9LHtwb2ludHN9XG4gICAgICAgIHtqdW1wcy5sZW5ndGggPiAwICYmIGAoJHtqdW1wcz8uam9pbihcIixcIil9KWB9KSAtIExpbmVzOntcIiBcIn1cbiAgICAgICAge2dldExpbmVEZW5zaXR5KHsgdmVydGljZXMsIHN1YmRpdmlzaW9ucywgcG9pbnRzIH0pfVxuICAgICAgPC9oMT5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZXJ0ZXgtbnVtYmVyLXNsaWRlclwiPlZlcnRleDwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgICAgIGlkPVwidmVydGV4LW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VmVydGV4KHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXt2ZXJ0aWNlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZlcnRleC1udW1iZXItaW5wdXRcIj5WZXJ0ZXggSW5wdXQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInZlcnRleC1udW1iZXItaW5wdXRcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFZlcnRleChwYXJzZUludCh2YWx1ZSkgfHwgMSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dmVydGljZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJkaXZpc2lvbi1udW1iZXItc2xpZGVyXCI+U3ViZGl2aXNpb248L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MTAwMH1cbiAgICAgICAgICAgIGlkPVwic3ViZGl2aXNpb24tbnVtYmVyLXNsaWRlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTdWJkaXZpc2lvbnModmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3N1YmRpdmlzaW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiPlN1YmRpdmlzaW9uIElucHV0PC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U3ViZGl2aXNpb25zKHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLXNsaWRlclwiPlBvaW50czwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgaWQ9XCJwb2ludHMtbnVtYmVyLXNsaWRlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRQb2ludHModmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3BvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvaW50cy1udW1iZXItaW5wdXRcIj5Qb2ludHMgSW5wdXQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInBvaW50cy1udW1iZXItaW5wdXRcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFBvaW50cyhwYXJzZUludCh2YWx1ZSkgfHwgMSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17cG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRTbGlkZXI+XG4gICAgICA8VG9nZ2xlQXJlYT5cbiAgICAgICAgPFRvZ2dsZUJveD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInRvZ2dsZS1zdWJkaXZpc2lvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e2Ake3Nob3dTdWJkaXZpc2lvbnN9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dTdWJkaXZpc2lvbnMoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1zdWJkaXZpc2lvbnNcIj5Ub2dnbGUgU3ViZGl2aXNpb25zPC9sYWJlbD5cbiAgICAgICAgPC9Ub2dnbGVCb3g+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtdmVydGljZXNcIlxuICAgICAgICAgICAgdmFsdWU9e2Ake3Nob3dWZXJ0aWNlc31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd1ZlcnRpY2VzKGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtdmVydGljZXNcIj5Ub2dnbGUgVmVydGljZXM8L2xhYmVsPlxuICAgICAgICA8L1RvZ2dsZUJveD5cbiAgICAgICAgPFRvZ2dsZUJveD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInRvZ2dsZS1zbG93LWRyYXdcIlxuICAgICAgICAgICAgdmFsdWU9e2Ake3Nob3VsZFNsb3dEcmF3fWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG91bGRTbG93RHJhdyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXNsb3ctZHJhd1wiPlRvZ2dsZSBEcmF3aW5nPC9sYWJlbD5cbiAgICAgICAgPC9Ub2dnbGVCb3g+XG4gICAgICA8L1RvZ2dsZUFyZWE+XG4gICAgICA8SnVtcHNBcmVhPlxuICAgICAgICA8VG90YWxKdW1wcz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsLWp1bXBzXCI+VG90YWwgSnVtcHM8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInRvdGFsLWp1bXBzXCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRUb3RhbEp1bXBzKHBhcnNlSW50KHZhbHVlKSB8fCAwKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbEp1bXBzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVG90YWxKdW1wcz5cbiAgICAgICAge1suLi5BcnJheSh0b3RhbEp1bXBzKV0ubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17YGp1bXAtJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BqdW1wLSR7aW5kZXh9YH0+SnVtcCB7aW5kZXggKyAxfTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJcIlxuICAgICAgICAgICAgICAgIGlkPXtganVtcC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0SnVtcHMoKHByZXZpb3VzU3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4ucHJldmlvdXNTdGF0ZV1cbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGVbaW5kZXhdID0gcGFyc2VJbnQodmFsdWUpIHx8IDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9KdW1wc0FyZWE+XG4gICAgICA8U3R5bGVkV3JhcHBlckRpdj5cbiAgICAgICAgPHA+TGlzdCBvZiB2ZXJ0aWNlczo8L3A+XG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICB7Z2xvYmFsVmFsdWVzLmN1cnJlbnQubWF0cml4Lm1hcCgoY29yZHMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgJHtpbmRleH0gLSBYOiR7Y29yZHMueC50b0ZpeGVkKDMpfSwgWToke2NvcmRzLnkudG9GaXhlZChcbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICl9LCBcbmBcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9wcmU+XG4gICAgICA8L1N0eWxlZFdyYXBwZXJEaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=