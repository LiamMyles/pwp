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
/* harmony import */ var _reach_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reach/slider */ "./node_modules/@reach/slider/dist/reach-slider.esm.js");
/* harmony import */ var Components_P5Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/P5Canvas */ "./src/components/P5Canvas/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Src_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Src/globals */ "./src/globals.ts");
/* harmony import */ var Src_sketch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Src/sketch */ "./src/sketch.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/liam/repos/projects/pwp/src/pages/home/home.tsx",
    _s = $RefreshSig$();









var StyledP5Canvas = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(Components_P5Canvas__WEBPACK_IMPORTED_MODULE_3__.P5Canvas).withConfig({
  displayName: "home__StyledP5Canvas",
  componentId: "x1qyyy-0"
})(["margin:10px auto;width:600px;height:600px;"]);
_c = StyledP5Canvas;
var StyledWrapperDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
  displayName: "home__StyledWrapperDiv",
  componentId: "x1qyyy-1"
})(["display:grid;grid-gap:10px;width:600px;margin:10px auto;h1{font-size:xx-large;}p{font-size:large;}"]);
_c2 = StyledWrapperDiv;
var StyledSlider = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(StyledWrapperDiv).withConfig({
  displayName: "home__StyledSlider",
  componentId: "x1qyyy-2"
})(["grid-template-columns:1fr 130px;& label{display:inline-block;margin-bottom:5px;}& input{width:calc(100% - 10px);}"]);
_c3 = StyledSlider;
var ToggleBox = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
  displayName: "home__ToggleBox",
  componentId: "x1qyyy-3"
})(["margin:10px 0;"]);
_c4 = ToggleBox;
var ToggleArea = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(StyledWrapperDiv).withConfig({
  displayName: "home__ToggleArea",
  componentId: "x1qyyy-4"
})(["grid-template-columns:1fr 1fr 1fr;justify-items:center;margin:10px auto;border-top:solid grey 2px;border-bottom:solid grey 2px;"]);
_c5 = ToggleArea;
var JumpsArea = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(StyledWrapperDiv).withConfig({
  displayName: "home__JumpsArea",
  componentId: "x1qyyy-5"
})(["grid-template-columns:repeat(5,1fr);border-bottom:solid grey 2px;padding:10px 0;& label{display:inline-block;margin-bottom:5px;}& input{width:calc(100% - 10px);}"]);
_c6 = JumpsArea;
var TotalJumps = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
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
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Maths, Polygons and Adventures to be had"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/pwp/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        integrity: "sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledP5Canvas, {
      sketch: Src_sketch__WEBPACK_IMPORTED_MODULE_7__.sketch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Polygon: (", vertex, ",", subdivisions, ",", points, jumps.length > 0 && "(".concat(jumps === null || jumps === void 0 ? void 0 : jumps.join(","), ")"), ") - Lines: "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-slider",
          children: "Vertex Slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_9__.Slider, {
          min: 1,
          max: 20,
          id: "vertex-number-slider",
          onChange: function onChange(value) {
            return setVertex(value);
          },
          value: vertex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "vertex-number-input",
          children: "Vertex Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-slider",
          children: "Subdivision Slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_9__.Slider, {
          min: 1,
          max: 1000,
          id: "subdivision-number-slider",
          onChange: function onChange(value) {
            return setSubdivisions(value);
          },
          value: subdivisions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "subdivision-number-input",
          children: "Subdivision Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-slider",
          children: "Points Slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_slider__WEBPACK_IMPORTED_MODULE_9__.Slider, {
          min: 1,
          id: "points-number-slider",
          onChange: function onChange(value) {
            return setPoints(value);
          },
          value: points
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "points-number-input",
          children: "Points Input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
          lineNumber: 195,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
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
          lineNumber: 208,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-subdivisions",
          children: "Toggle Subdivisions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
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
          lineNumber: 219,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-vertices",
          children: "Toggle Vertices"
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
          id: "toggle-slow-draw",
          value: "".concat(shouldSlowDraw),
          onChange: function onChange(_ref6) {
            var checked = _ref6.currentTarget.checked;
            setShouldSlowDraw(checked);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "toggle-slow-draw",
          children: "Toggle Drawing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JumpsArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TotalJumps, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "total-jumps",
          children: "Total Jumps"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
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
          lineNumber: 244,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, this), (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(totalJumps)).map(function (_, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "jump-".concat(index),
            children: ["Jump ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
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
            lineNumber: 258,
            columnNumber: 15
          }, _this)]
        }, "jump-".concat(index), true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrapperDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "List of vertices:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
          children: globalValues.current.matrix.map(function (cords, index) {
            return "".concat(index, " - X:").concat(cords.x.toFixed(3), ", Y:").concat(cords.y.toFixed(3), ", \n");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giXSwibmFtZXMiOlsiU3R5bGVkUDVDYW52YXMiLCJzdHlsZWQiLCJQNUNhbnZhcyIsIlN0eWxlZFdyYXBwZXJEaXYiLCJTdHlsZWRTbGlkZXIiLCJUb2dnbGVCb3giLCJUb2dnbGVBcmVhIiwiSnVtcHNBcmVhIiwiVG90YWxKdW1wcyIsIkhvbWUiLCJ1c2VTdGF0ZSIsIkdsb2JhbFZhbHVlcyIsInZlcnRleCIsInNldFZlcnRleCIsInN1YmRpdmlzaW9ucyIsInNldFN1YmRpdmlzaW9ucyIsInBvaW50cyIsInNldFBvaW50cyIsInNob3dTdWJkaXZpc2lvbnMiLCJzZXRTaG93U3ViZGl2aXNpb25zIiwic2hvd1ZlcnRpY2VzIiwic2V0U2hvd1ZlcnRpY2VzIiwianVtcHMiLCJzZXRKdW1wcyIsInRvdGFsSnVtcHMiLCJzZXRUb3RhbEp1bXBzIiwic2hvdWxkU2xvd0RyYXciLCJzZXRTaG91bGRTbG93RHJhdyIsImdsb2JhbFZhbHVlcyIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByZXZpb3VzU3RhdGUiLCJsZW5ndGgiLCJBcnJheSIsIm1hcCIsIm5ld1N0YXRlIiwic2xpY2UiLCJjdXJyZW50IiwidmVydGljZXMiLCJzbG93RHJhdyIsInNrZXRjaCIsImpvaW4iLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJzZUludCIsImNoZWNrZWQiLCJfIiwiaW5kZXgiLCJtYXRyaXgiLCJjb3JkcyIsIngiLCJ0b0ZpeGVkIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywwREFBTSxDQUFDQyx5REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGtEQUFwQjtLQUFNRixjO0FBTU4sSUFBTUcsZ0JBQWdCLEdBQUdGLHFFQUFIO0FBQUE7QUFB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QjtBQUtFLG9CQUFRLEVBQUUseUJBQWtDO0FBQUEsa0JBQWRMLEtBQWMsU0FBL0JDLGFBQStCLENBQWRELEtBQWM7QUFDMUNuQixzQkFBUSxDQUFDLFVBQUNRLGFBQUQsRUFBbUI7QUFDMUIsb0JBQU1JLFFBQVEsR0FBRyxrSkFBSUosYUFBUCxDQUFkOztBQUNBSSx3QkFBUSxDQUFDWSxLQUFELENBQVIsR0FBa0JILFFBQVEsQ0FBQ0YsS0FBRCxDQUFSLElBQW1CLENBQXJDO0FBQ0EsdUJBQU9QLFFBQVA7QUFDRCxlQUpPLENBQVI7QUFLRDtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSwwQkFBa0JZLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFrQkQsT0FuQkEsQ0FiSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvSEYsZUFpS0UsOERBQUMsZ0JBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSwrQkFDRTtBQUFBLG9CQUNHbkIsWUFBWSxDQUFDUyxPQUFiLENBQXFCVyxNQUFyQixDQUE0QmQsR0FBNUIsQ0FBZ0MsVUFBQ2UsS0FBRCxFQUFRRixLQUFSLEVBQWtCO0FBQ2pELDZCQUFVQSxLQUFWLGtCQUF1QkUsS0FBSyxDQUFDQyxDQUFOLENBQVFDLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBdkIsaUJBQWdERixLQUFLLENBQUNHLENBQU4sQ0FBUUQsT0FBUixDQUM5QyxDQUQ4QyxDQUFoRDtBQUlELFdBTEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpLRjtBQUFBLGtCQURGO0FBaUxEOztHQTVOZTFDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWM4OGQxMDczODY2MmUxM2YyYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkByZWFjaC9zbGlkZXIvc3R5bGVzLmNzc1wiXG5cbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJAcmVhY2gvc2xpZGVyXCJcbmltcG9ydCB7IFA1Q2FudmFzIH0gZnJvbSBcIkNvbXBvbmVudHMvUDVDYW52YXNcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2xvYmFsVmFsdWVzIH0gZnJvbSBcIlNyYy9nbG9iYWxzXCJcbmltcG9ydCB7IHNrZXRjaCB9IGZyb20gXCJTcmMvc2tldGNoXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgU3R5bGVkUDVDYW52YXMgPSBzdHlsZWQoUDVDYW52YXMpYFxuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuYFxuXG5jb25zdCBTdHlsZWRXcmFwcGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGgxIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbmBcblxuY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMzBweDtcbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAmIGlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbmBcbmNvbnN0IFRvZ2dsZUJveCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMTBweCAwO1xuYFxuXG5jb25zdCBUb2dnbGVBcmVhID0gc3R5bGVkKFN0eWxlZFdyYXBwZXJEaXYpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAycHg7XG5gXG5cbmNvbnN0IEp1bXBzQXJlYSA9IHN0eWxlZChTdHlsZWRXcmFwcGVyRGl2KWBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAycHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuYFxuY29uc3QgVG90YWxKdW1wcyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxLzY7XG4gIGRpc3BsYXk6IGdyaWQ7XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBIb21lKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFt2ZXJ0ZXgsIHNldFZlcnRleF0gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMudmVydGljZXMpXG4gIGNvbnN0IFtzdWJkaXZpc2lvbnMsIHNldFN1YmRpdmlzaW9uc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zKVxuICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnBvaW50cylcbiAgY29uc3QgW3Nob3dTdWJkaXZpc2lvbnMsIHNldFNob3dTdWJkaXZpc2lvbnNdID0gdXNlU3RhdGUoXG4gICAgR2xvYmFsVmFsdWVzLnNob3dTdWJkaXZpc2lvbnNcbiAgKVxuICBjb25zdCBbc2hvd1ZlcnRpY2VzLCBzZXRTaG93VmVydGljZXNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnNob3dWZXJ0aWNlcylcbiAgY29uc3QgW2p1bXBzLCBzZXRKdW1wc10gPSB1c2VTdGF0ZShHbG9iYWxWYWx1ZXMuanVtcHMpXG4gIGNvbnN0IFt0b3RhbEp1bXBzLCBzZXRUb3RhbEp1bXBzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzaG91bGRTbG93RHJhdywgc2V0U2hvdWxkU2xvd0RyYXddID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnNsb3dEcmF3KVxuXG4gIGNvbnN0IGdsb2JhbFZhbHVlcyA9IHVzZVJlZihHbG9iYWxWYWx1ZXMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRKdW1wcygocHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgICAgaWYgKGp1bXBzLmxlbmd0aCA8IHRvdGFsSnVtcHMpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5BcnJheSh0b3RhbEp1bXBzKV0ubWFwKCgpID0+IDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2aW91c1N0YXRlXVxuICAgICAgICByZXR1cm4gbmV3U3RhdGUuc2xpY2UoMCwgdG90YWxKdW1wcyAtIDEpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW3RvdGFsSnVtcHNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQudmVydGljZXMgPSB2ZXJ0ZXhcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zdWJkaXZpc2lvbnMgPSBzdWJkaXZpc2lvbnNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5wb2ludHMgPSBwb2ludHNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zaG93U3ViZGl2aXNpb25zID0gc2hvd1N1YmRpdmlzaW9uc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnNob3dWZXJ0aWNlcyA9IHNob3dWZXJ0aWNlc1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50Lmp1bXBzID0ganVtcHNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zbG93RHJhdyA9IHNob3VsZFNsb3dEcmF3XG4gIH0sIFtcbiAgICB2ZXJ0ZXgsXG4gICAgc3ViZGl2aXNpb25zLFxuICAgIHBvaW50cyxcbiAgICBzaG93U3ViZGl2aXNpb25zLFxuICAgIHNob3dWZXJ0aWNlcyxcbiAgICBqdW1wcyxcbiAgICBzaG91bGRTbG93RHJhdyxcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBsYXlpbmcgV2l0aCBQb2x5Z29uczwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTWF0aHMsIFBvbHlnb25zIGFuZCBBZHZlbnR1cmVzIHRvIGJlIGhhZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3B3cC9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21leWVyLXJlc2V0LzIuMC9yZXNldC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItTm1Ma0RJVTFDL0M4OHdpMzI0SEJjK1Mya0xoaTA4UE41R0RlVVZWVkMvQlZ0LzlJemRzYzlTVmVWZkExVVpiWTNzSFVsRFN5UlhoQ3pIZnI2aG1QUHc9PVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN0eWxlZFA1Q2FudmFzIHNrZXRjaD17c2tldGNofSAvPlxuICAgICAgPGgxPlxuICAgICAgICBQb2x5Z29uOiAoe3ZlcnRleH0se3N1YmRpdmlzaW9uc30se3BvaW50c31cbiAgICAgICAge2p1bXBzLmxlbmd0aCA+IDAgJiYgYCgke2p1bXBzPy5qb2luKFwiLFwiKX0pYH0pIC0gTGluZXM6IHt9XG4gICAgICA8L2gxPlxuICAgICAgPFN0eWxlZFNsaWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZlcnRleC1udW1iZXItc2xpZGVyXCI+VmVydGV4IFNsaWRlcjwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgICAgIGlkPVwidmVydGV4LW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VmVydGV4KHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXt2ZXJ0ZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCI+VmVydGV4IElucHV0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRWZXJ0ZXgocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3ZlcnRleH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFN0eWxlZFNsaWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1zbGlkZXJcIj5TdWJkaXZpc2lvbiBTbGlkZXI8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MTAwMH1cbiAgICAgICAgICAgIGlkPVwic3ViZGl2aXNpb24tbnVtYmVyLXNsaWRlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTdWJkaXZpc2lvbnModmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3N1YmRpdmlzaW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiPlN1YmRpdmlzaW9uIElucHV0PC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U3ViZGl2aXNpb25zKHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLXNsaWRlclwiPlBvaW50cyBTbGlkZXI8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIGlkPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UG9pbnRzKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtwb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLWlucHV0XCI+UG9pbnRzIElucHV0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwb2ludHMtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRQb2ludHMocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3BvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFRvZ2dsZUFyZWE+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93U3ViZGl2aXNpb25zfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3ViZGl2aXNpb25zKGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCI+VG9nZ2xlIFN1YmRpdmlzaW9uczwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXZlcnRpY2VzXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93VmVydGljZXN9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dWZXJ0aWNlcyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXZlcnRpY2VzXCI+VG9nZ2xlIFZlcnRpY2VzPC9sYWJlbD5cbiAgICAgICAgPC9Ub2dnbGVCb3g+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc2xvdy1kcmF3XCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG91bGRTbG93RHJhd31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvdWxkU2xvd0RyYXcoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1zbG93LWRyYXdcIj5Ub2dnbGUgRHJhd2luZzwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgPC9Ub2dnbGVBcmVhPlxuICAgICAgPEp1bXBzQXJlYT5cbiAgICAgICAgPFRvdGFsSnVtcHM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbC1qdW1wc1wiPlRvdGFsIEp1bXBzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ0b3RhbC1qdW1wc1wiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0VG90YWxKdW1wcyhwYXJzZUludCh2YWx1ZSkgfHwgMClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dG90YWxKdW1wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RvdGFsSnVtcHM+XG4gICAgICAgIHtbLi4uQXJyYXkodG90YWxKdW1wcyldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2BqdW1wLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtganVtcC0ke2luZGV4fWB9Pkp1bXAge2luZGV4ICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBpZD17YGp1bXAtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlKSB8fCAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvSnVtcHNBcmVhPlxuICAgICAgPFN0eWxlZFdyYXBwZXJEaXY+XG4gICAgICAgIDxwPkxpc3Qgb2YgdmVydGljZXM6PC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAge2dsb2JhbFZhbHVlcy5jdXJyZW50Lm1hdHJpeC5tYXAoKGNvcmRzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7aW5kZXh9IC0gWDoke2NvcmRzLngudG9GaXhlZCgzKX0sIFk6JHtjb3Jkcy55LnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICApfSwgXG5gXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgPC9TdHlsZWRXcmFwcGVyRGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9