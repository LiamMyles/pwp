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
      children: ["Polygon: (", vertex, ",", subdivisions, ",", points, "(", jumps.concat(","), ")) - Lines: "]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50c3giXSwibmFtZXMiOlsiU3R5bGVkUDVDYW52YXMiLCJzdHlsZWQiLCJQNUNhbnZhcyIsIlN0eWxlZFdyYXBwZXJEaXYiLCJTdHlsZWRTbGlkZXIiLCJUb2dnbGVCb3giLCJUb2dnbGVBcmVhIiwiSnVtcHNBcmVhIiwiVG90YWxKdW1wcyIsIkhvbWUiLCJ1c2VTdGF0ZSIsIkdsb2JhbFZhbHVlcyIsInZlcnRleCIsInNldFZlcnRleCIsInN1YmRpdmlzaW9ucyIsInNldFN1YmRpdmlzaW9ucyIsInBvaW50cyIsInNldFBvaW50cyIsInNob3dTdWJkaXZpc2lvbnMiLCJzZXRTaG93U3ViZGl2aXNpb25zIiwic2hvd1ZlcnRpY2VzIiwic2V0U2hvd1ZlcnRpY2VzIiwianVtcHMiLCJzZXRKdW1wcyIsInRvdGFsSnVtcHMiLCJzZXRUb3RhbEp1bXBzIiwic2hvdWxkU2xvd0RyYXciLCJzZXRTaG91bGRTbG93RHJhdyIsImdsb2JhbFZhbHVlcyIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByZXZpb3VzU3RhdGUiLCJsZW5ndGgiLCJBcnJheSIsIm1hcCIsIm5ld1N0YXRlIiwic2xpY2UiLCJjdXJyZW50IiwidmVydGljZXMiLCJzbG93RHJhdyIsInNrZXRjaCIsImNvbmNhdCIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsInBhcnNlSW50IiwiY2hlY2tlZCIsIl8iLCJpbmRleCIsIm1hdHJpeCIsImNvcmRzIiwieCIsInRvRml4ZWQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDBEQUFNLENBQUNDLHlEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsa0RBQXBCO0tBQU1GLGM7QUFNTixJQUFNRyxnQkFBZ0IsR0FBR0YscUVBQUg7QUFBQTtB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QUFjO0FBQzFDbkIsc0JBQVEsQ0FBQyxVQUFDUSxhQUFELEVBQW1CO0FBQzFCLG9CQUFNSSxRQUFRLEdBQUcsa0pBQUlKLGFBQVAsQ0FBZDs7QUFDQUksd0JBQVEsQ0FBQ1ksS0FBRCxDQUFSLEdBQWtCSCxRQUFRLENBQUNGLEtBQUQsQ0FBUixJQUFtQixDQUFyQztBQUNBLHVCQUFPUCxRQUFQO0FBQ0QsZUFKTyxDQUFSO0FBS0Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsMEJBQWtCWSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBa0JELE9BbkJBLENBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0hGLGVBaUtFLDhEQUFDLGdCQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsK0JBQ0U7QUFBQSxvQkFDR25CLFlBQVksQ0FBQ1MsT0FBYixDQUFxQlcsTUFBckIsQ0FBNEJkLEdBQTVCLENBQWdDLFVBQUNlLEtBQUQsRUFBUUYsS0FBUixFQUFrQjtBQUNqRCw2QkFBVUEsS0FBVixrQkFBdUJFLEtBQUssQ0FBQ0MsQ0FBTixDQUFRQyxPQUFSLENBQWdCLENBQWhCLENBQXZCLGlCQUFnREYsS0FBSyxDQUFDRyxDQUFOLENBQVFELE9BQVIsQ0FDOUMsQ0FEOEMsQ0FBaEQ7QUFJRCxXQUxBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqS0Y7QUFBQSxrQkFERjtBQWlMRDs7R0E1TmUxQyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiMTljZGIyNDA0ZDVlNjBjMzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcmVhY2gvc2xpZGVyL3N0eWxlcy5jc3NcIlxuXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQHJlYWNoL3NsaWRlclwiXG5pbXBvcnQgeyBQNUNhbnZhcyB9IGZyb20gXCJDb21wb25lbnRzL1A1Q2FudmFzXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbFZhbHVlcyB9IGZyb20gXCJTcmMvZ2xvYmFsc1wiXG5pbXBvcnQgeyBza2V0Y2ggfSBmcm9tIFwiU3JjL3NrZXRjaFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmNvbnN0IFN0eWxlZFA1Q2FudmFzID0gc3R5bGVkKFA1Q2FudmFzKWBcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbmBcblxuY29uc3QgU3R5bGVkV3JhcHBlckRpdiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBoMSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5gXG5cbmNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTdHlsZWRXcmFwcGVyRGl2KWBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTMwcHg7XG4gICYgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgJiBpbnB1dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG5gXG5jb25zdCBUb2dnbGVCb3ggPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDEwcHggMDtcbmBcblxuY29uc3QgVG9nZ2xlQXJlYSA9IHN0eWxlZChTdHlsZWRXcmFwcGVyRGl2KWBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyLXRvcDogc29saWQgZ3JleSAycHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGdyZXkgMnB4O1xuYFxuXG5jb25zdCBKdW1wc0FyZWEgPSBzdHlsZWQoU3R5bGVkV3JhcHBlckRpdilgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGdyZXkgMnB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gICYgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAmIGlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbmBcbmNvbnN0IFRvdGFsSnVtcHMgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMS82O1xuICBkaXNwbGF5OiBncmlkO1xuYFxuXG5leHBvcnQgZnVuY3Rpb24gSG9tZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBbdmVydGV4LCBzZXRWZXJ0ZXhdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnZlcnRpY2VzKVxuICBjb25zdCBbc3ViZGl2aXNpb25zLCBzZXRTdWJkaXZpc2lvbnNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucylcbiAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5wb2ludHMpXG4gIGNvbnN0IFtzaG93U3ViZGl2aXNpb25zLCBzZXRTaG93U3ViZGl2aXNpb25zXSA9IHVzZVN0YXRlKFxuICAgIEdsb2JhbFZhbHVlcy5zaG93U3ViZGl2aXNpb25zXG4gIClcbiAgY29uc3QgW3Nob3dWZXJ0aWNlcywgc2V0U2hvd1ZlcnRpY2VzXSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zaG93VmVydGljZXMpXG4gIGNvbnN0IFtqdW1wcywgc2V0SnVtcHNdID0gdXNlU3RhdGUoR2xvYmFsVmFsdWVzLmp1bXBzKVxuICBjb25zdCBbdG90YWxKdW1wcywgc2V0VG90YWxKdW1wc10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2hvdWxkU2xvd0RyYXcsIHNldFNob3VsZFNsb3dEcmF3XSA9IHVzZVN0YXRlKEdsb2JhbFZhbHVlcy5zbG93RHJhdylcblxuICBjb25zdCBnbG9iYWxWYWx1ZXMgPSB1c2VSZWYoR2xvYmFsVmFsdWVzKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SnVtcHMoKHByZXZpb3VzU3RhdGUpID0+IHtcbiAgICAgIGlmIChqdW1wcy5sZW5ndGggPCB0b3RhbEp1bXBzKSB7XG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkodG90YWxKdW1wcyldLm1hcCgoKSA9PiAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4ucHJldmlvdXNTdGF0ZV1cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlLnNsaWNlKDAsIHRvdGFsSnVtcHMgLSAxKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFt0b3RhbEp1bXBzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbFZhbHVlcy5jdXJyZW50LnZlcnRpY2VzID0gdmVydGV4XG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc3ViZGl2aXNpb25zID0gc3ViZGl2aXNpb25zXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQucG9pbnRzID0gcG9pbnRzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2hvd1N1YmRpdmlzaW9ucyA9IHNob3dTdWJkaXZpc2lvbnNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5zaG93VmVydGljZXMgPSBzaG93VmVydGljZXNcbiAgICBnbG9iYWxWYWx1ZXMuY3VycmVudC5qdW1wcyA9IGp1bXBzXG4gICAgZ2xvYmFsVmFsdWVzLmN1cnJlbnQuc2xvd0RyYXcgPSBzaG91bGRTbG93RHJhd1xuICB9LCBbXG4gICAgdmVydGV4LFxuICAgIHN1YmRpdmlzaW9ucyxcbiAgICBwb2ludHMsXG4gICAgc2hvd1N1YmRpdmlzaW9ucyxcbiAgICBzaG93VmVydGljZXMsXG4gICAganVtcHMsXG4gICAgc2hvdWxkU2xvd0RyYXcsXG4gIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QbGF5aW5nIFdpdGggUG9seWdvbnM8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIk1hdGhzLCBQb2x5Z29ucyBhbmQgQWR2ZW50dXJlcyB0byBiZSBoYWRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9wd3AvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tZXllci1yZXNldC8yLjAvcmVzZXQubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhNTEyLU5tTGtESVUxQy9DODh3aTMyNEhCYytTMmtMaGkwOFBONUdEZVVWVlZDL0JWdC85SXpkc2M5U1ZlVmZBMVVaYlkzc0hVbERTeVJYaEN6SGZyNmhtUFB3PT1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTdHlsZWRQNUNhbnZhcyBza2V0Y2g9e3NrZXRjaH0gLz5cbiAgICAgIDxoMT5cbiAgICAgICAgUG9seWdvbjogKHt2ZXJ0ZXh9LHtzdWJkaXZpc2lvbnN9LHtwb2ludHN9KHtqdW1wcy5jb25jYXQoXCIsXCIpfSkpIC1cbiAgICAgICAgTGluZXM6IHt9XG4gICAgICA8L2gxPlxuICAgICAgPFN0eWxlZFNsaWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZlcnRleC1udW1iZXItc2xpZGVyXCI+VmVydGV4IFNsaWRlcjwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgICAgIGlkPVwidmVydGV4LW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VmVydGV4KHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXt2ZXJ0ZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCI+VmVydGV4IElucHV0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ2ZXJ0ZXgtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRWZXJ0ZXgocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3ZlcnRleH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFN0eWxlZFNsaWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1zbGlkZXJcIj5TdWJkaXZpc2lvbiBTbGlkZXI8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MTAwMH1cbiAgICAgICAgICAgIGlkPVwic3ViZGl2aXNpb24tbnVtYmVyLXNsaWRlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTdWJkaXZpc2lvbnModmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3N1YmRpdmlzaW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiPlN1YmRpdmlzaW9uIElucHV0PC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInN1YmRpdmlzaW9uLW51bWJlci1pbnB1dFwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U3ViZGl2aXNpb25zKHBhcnNlSW50KHZhbHVlKSB8fCAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWJkaXZpc2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZFNsaWRlcj5cbiAgICAgIDxTdHlsZWRTbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLXNsaWRlclwiPlBvaW50cyBTbGlkZXI8L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIGlkPVwicG9pbnRzLW51bWJlci1zbGlkZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UG9pbnRzKHZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtwb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2ludHMtbnVtYmVyLWlucHV0XCI+UG9pbnRzIElucHV0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwb2ludHMtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRQb2ludHMocGFyc2VJbnQodmFsdWUpIHx8IDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3BvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkU2xpZGVyPlxuICAgICAgPFRvZ2dsZUFyZWE+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93U3ViZGl2aXNpb25zfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3ViZGl2aXNpb25zKGNoZWNrZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtc3ViZGl2aXNpb25zXCI+VG9nZ2xlIFN1YmRpdmlzaW9uczwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgICA8VG9nZ2xlQm94PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLXZlcnRpY2VzXCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG93VmVydGljZXN9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dWZXJ0aWNlcyhjaGVja2VkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLXZlcnRpY2VzXCI+VG9nZ2xlIFZlcnRpY2VzPC9sYWJlbD5cbiAgICAgICAgPC9Ub2dnbGVCb3g+XG4gICAgICAgIDxUb2dnbGVCb3g+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtc2xvdy1kcmF3XCJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtzaG91bGRTbG93RHJhd31gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvdWxkU2xvd0RyYXcoY2hlY2tlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1zbG93LWRyYXdcIj5Ub2dnbGUgRHJhd2luZzwvbGFiZWw+XG4gICAgICAgIDwvVG9nZ2xlQm94PlxuICAgICAgPC9Ub2dnbGVBcmVhPlxuICAgICAgPEp1bXBzQXJlYT5cbiAgICAgICAgPFRvdGFsSnVtcHM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbC1qdW1wc1wiPlRvdGFsIEp1bXBzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJ0b3RhbC1qdW1wc1wiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgc2V0VG90YWxKdW1wcyhwYXJzZUludCh2YWx1ZSkgfHwgMClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dG90YWxKdW1wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RvdGFsSnVtcHM+XG4gICAgICAgIHtbLi4uQXJyYXkodG90YWxKdW1wcyldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2BqdW1wLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtganVtcC0ke2luZGV4fWB9Pkp1bXAge2luZGV4ICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBpZD17YGp1bXAtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEp1bXBzKChwcmV2aW91c1N0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZpb3VzU3RhdGVdXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlKSB8fCAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvSnVtcHNBcmVhPlxuICAgICAgPFN0eWxlZFdyYXBwZXJEaXY+XG4gICAgICAgIDxwPkxpc3Qgb2YgdmVydGljZXM6PC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAge2dsb2JhbFZhbHVlcy5jdXJyZW50Lm1hdHJpeC5tYXAoKGNvcmRzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7aW5kZXh9IC0gWDoke2NvcmRzLngudG9GaXhlZCgzKX0sIFk6JHtjb3Jkcy55LnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICApfSwgXG5gXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgPC9TdHlsZWRXcmFwcGVyRGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9