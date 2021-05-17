self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sketch.ts":
/*!***********************!*\
  !*** ./src/sketch.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sketch": function() { return /* binding */ sketch; }
/* harmony export */ });
/* harmony import */ var _home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Calculations/getLineDensity */ "./src/calculations/getLineDensity/index.ts");
/* harmony import */ var Calculations_getNGonVertices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Calculations/getNGonVertices */ "./src/calculations/getNGonVertices/index.tsx");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/globals.ts");
/* harmony import */ var _pwp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pwp */ "./src/pwp.ts");
/* module decorator */ module = __webpack_require__.hmd(module);





var speed = 20;
var size = 250;
function sketch(p5) {
  p5.setup = function () {
    p5.createCanvas(600, 600);
    p5.background(220);
    p5.frameRate(speed);
  };

  var slowDrawCount = 0;
  var previousDrawState = false;

  p5.draw = function () {
    var lineDensity = (0,Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_1__.getLineDensity)({
      vertices: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.vertices,
      subdivisions: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.subdivisions,
      points: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.points
    });
    speed = lineDensity;

    if (previousDrawState !== _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.slowDraw) {
      p5.background(220);
      previousDrawState = _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.slowDraw;
    }

    p5.angleMode(p5.DEGREES);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.scale(1, -1);
    var initialMatrix = (0,Calculations_getNGonVertices__WEBPACK_IMPORTED_MODULE_2__.getNGonVertices)(_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.vertices);
    var jumpedMatrix = _pwp__WEBPACK_IMPORTED_MODULE_4__.getJumpedPoints.apply(void 0, [initialMatrix].concat((0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.jumps)));
    _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.matrix = jumpedMatrix;
    var subdivisionMatrix = (0,_pwp__WEBPACK_IMPORTED_MODULE_4__.getSubdivisionMatrix)(_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.subdivisions, jumpedMatrix);
    var pointsMatrix = _pwp__WEBPACK_IMPORTED_MODULE_4__.getPointsMatrix.apply(void 0, [_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.vertices, _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.subdivisions, _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.points, subdivisionMatrix].concat((0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.jumps)));

    if (_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.slowDraw) {
      p5.push();

      var _ref = pointsMatrix[slowDrawCount] ? pointsMatrix[slowDrawCount] : pointsMatrix[pointsMatrix.length - 1],
          subX = _ref.x,
          subY = _ref.y;

      var _ref2 = pointsMatrix[slowDrawCount + 1] ? pointsMatrix[slowDrawCount + 1] : pointsMatrix[0],
          pointX = _ref2.x,
          pointY = _ref2.y;

      p5.strokeWeight(0.5);
      p5.line(pointX * size, pointY * size, subX * size, subY * size);
      p5.pop();
      slowDrawCount++;

      if (slowDrawCount === pointsMatrix.length || slowDrawCount === lineDensity) {
        p5.frameRate(0);
        slowDrawCount = 0;
        setTimeout(function () {
          p5.background(220);
          p5.frameRate(speed);
        }, 2000);
      }
    } else {
      p5.frameRate(speed);
      p5.background(220);
      pointsMatrix.forEach(function (_, count) {
        p5.push();

        var _ref3 = pointsMatrix[count] ? pointsMatrix[count] : pointsMatrix[pointsMatrix.length - 1],
            subX = _ref3.x,
            subY = _ref3.y;

        var _ref4 = pointsMatrix[count + 1] ? pointsMatrix[count + 1] : pointsMatrix[0],
            pointX = _ref4.x,
            pointY = _ref4.y;

        p5.strokeWeight(0.2);
        p5.line(pointX * size, pointY * size, subX * size, subY * size);
        p5.pop();
      });
    }

    if (_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.showVertices) {
      initialMatrix.forEach(function (_ref5, index) {
        var x = _ref5.x,
            y = _ref5.y;
        p5.push();

        if (index === 0) {
          p5.stroke("blue");
        } else {
          p5.stroke("green");
        }

        p5.strokeWeight(15);
        p5.point(x * size, y * size);
        p5.pop();
      });
    }

    if (_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.showSubdivisions) {
      subdivisionMatrix.forEach(function (_ref6) {
        var x = _ref6.x,
            y = _ref6.y;
        p5.push();
        p5.stroke("purple");
        p5.strokeWeight(10);
        p5.point(x * size, y * size);
        p5.pop();
      });
    }
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJsaW5lRGVuc2l0eSIsImdldExpbmVEZW5zaXR5IiwidmVydGljZXMiLCJHbG9iYWxWYWx1ZXMiLCJzdWJkaXZpc2lvbnMiLCJwb2ludHMiLCJhbmdsZU1vZGUiLCJERUdSRUVTIiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImluaXRpYWxNYXRyaXgiLCJnZXROR29uVmVydGljZXMiLCJqdW1wZWRNYXRyaXgiLCJnZXRKdW1wZWRQb2ludHMiLCJzdWJkaXZpc2lvbk1hdHJpeCIsImdldFN1YmRpdmlzaW9uTWF0cml4IiwicG9pbnRzTWF0cml4IiwiZ2V0UG9pbnRzTWF0cml4IiwicHVzaCIsImxlbmd0aCIsInN1YlgiLCJ4Iiwic3ViWSIsInkiLCJwb2ludFgiLCJwb2ludFkiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwicG9wIiwic2V0VGltZW91dCIsImZvckVhY2giLCJfIiwiY291bnQiLCJpbmRleCIsInN0cm9rZSIsInBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFNQyxJQUFJLEdBQUcsR0FBYjtBQUVPLFNBQVNDLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQWtDO0FBQ3ZDQSxJQUFFLENBQUNDLEtBQUgsR0FBVyxZQUFNO0FBQ2ZELE1BQUUsQ0FBQ0UsWUFBSCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUVBRixNQUFFLENBQUNHLFVBQUgsQ0FBYyxHQUFkO0FBQ0FILE1BQUUsQ0FBQ0ksU0FBSCxDQUFhUCxLQUFiO0FB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Q0FBZ0IsRUFBaEI7QUFDQXBDLFVBQUUsQ0FBQzZDLEtBQUgsQ0FBU2QsQ0FBQyxHQUFHakMsSUFBYixFQUFtQm1DLENBQUMsR0FBR25DLElBQXZCO0FBQ0FFLFVBQUUsQ0FBQ3NDLEdBQUg7QUFDRCxPQVZEO0FBV0Q7O0FBQ0QsUUFBSTNCLG1FQUFKLEVBQW1DO0FBQ2pDYSx1QkFBaUIsQ0FBQ2dCLE9BQWxCLENBQTBCLGlCQUFjO0FBQUEsWUFBWFQsQ0FBVyxTQUFYQSxDQUFXO0FBQUEsWUFBUkUsQ0FBUSxTQUFSQSxDQUFRO0FBQ3RDakMsVUFBRSxDQUFDNEIsSUFBSDtBQUNBNUIsVUFBRSxDQUFDNEMsTUFBSCxDQUFVLFFBQVY7QUFDQTVDLFVBQUUsQ0FBQ29DLFlBQUgsQ0FBZ0IsRUFBaEI7QUFDQXBDLFVBQUUsQ0FBQzZDLEtBQUgsQ0FBU2QsQ0FBQyxHQUFHakMsSUFBYixFQUFtQm1DLENBQUMsR0FBR25DLElBQXZCO0FBQ0FFLFVBQUUsQ0FBQ3NDLEdBQUg7QUFDRCxPQU5EO0FBT0Q7QUFDRixHQWpHRDtBQWtHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xODk4NjVlYWRjYjRhMDhjYmQzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TGluZURlbnNpdHkgfSBmcm9tIFwiQ2FsY3VsYXRpb25zL2dldExpbmVEZW5zaXR5XCJcbmltcG9ydCB7IGdldE5Hb25WZXJ0aWNlcyB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TkdvblZlcnRpY2VzXCJcbmltcG9ydCB0eXBlIHR5cGVQNSBmcm9tIFwicDVcIlxuXG5pbXBvcnQgeyBHbG9iYWxWYWx1ZXMgfSBmcm9tIFwiLi9nbG9iYWxzXCJcbmltcG9ydCB7IGdldEp1bXBlZFBvaW50cywgZ2V0UG9pbnRzTWF0cml4LCBnZXRTdWJkaXZpc2lvbk1hdHJpeCB9IGZyb20gXCIuL3B3cFwiXG5cbmxldCBzcGVlZCA9IDIwXG5jb25zdCBzaXplID0gMjUwXG5cbmV4cG9ydCBmdW5jdGlvbiBza2V0Y2gocDU6IHR5cGVQNSk6IHZvaWQge1xuICBwNS5zZXR1cCA9ICgpID0+IHtcbiAgICBwNS5jcmVhdGVDYW52YXMoNjAwLCA2MDApXG5cbiAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gIH1cblxuICBsZXQgc2xvd0RyYXdDb3VudCA9IDBcbiAgbGV0IHByZXZpb3VzRHJhd1N0YXRlID0gZmFsc2VcbiAgcDUuZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5lRGVuc2l0eSA9IGdldExpbmVEZW5zaXR5KHtcbiAgICAgIHZlcnRpY2VzOiBHbG9iYWxWYWx1ZXMudmVydGljZXMsXG4gICAgICBzdWJkaXZpc2lvbnM6IEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBwb2ludHM6IEdsb2JhbFZhbHVlcy5wb2ludHMsXG4gICAgfSlcblxuICAgIHNwZWVkID0gbGluZURlbnNpdHlcblxuICAgIGlmIChwcmV2aW91c0RyYXdTdGF0ZSAhPT0gR2xvYmFsVmFsdWVzLnNsb3dEcmF3KSB7XG4gICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgIHByZXZpb3VzRHJhd1N0YXRlID0gR2xvYmFsVmFsdWVzLnNsb3dEcmF3XG4gICAgfVxuICAgIHA1LmFuZ2xlTW9kZShwNS5ERUdSRUVTKVxuICAgIHA1LnRyYW5zbGF0ZShwNS53aWR0aCAvIDIsIHA1LmhlaWdodCAvIDIpXG4gICAgcDUuc2NhbGUoMSwgLTEpXG5cbiAgICBjb25zdCBpbml0aWFsTWF0cml4ID0gZ2V0TkdvblZlcnRpY2VzKEdsb2JhbFZhbHVlcy52ZXJ0aWNlcylcblxuICAgIGNvbnN0IGp1bXBlZE1hdHJpeCA9IGdldEp1bXBlZFBvaW50cyhpbml0aWFsTWF0cml4LCAuLi5HbG9iYWxWYWx1ZXMuanVtcHMpXG4gICAgR2xvYmFsVmFsdWVzLm1hdHJpeCA9IGp1bXBlZE1hdHJpeFxuXG4gICAgY29uc3Qgc3ViZGl2aXNpb25NYXRyaXggPSBnZXRTdWJkaXZpc2lvbk1hdHJpeChcbiAgICAgIEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBqdW1wZWRNYXRyaXhcbiAgICApXG4gICAgY29uc3QgcG9pbnRzTWF0cml4ID0gZ2V0UG9pbnRzTWF0cml4KFxuICAgICAgR2xvYmFsVmFsdWVzLnZlcnRpY2VzLFxuICAgICAgR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIEdsb2JhbFZhbHVlcy5wb2ludHMsXG4gICAgICBzdWJkaXZpc2lvbk1hdHJpeCxcbiAgICAgIC4uLkdsb2JhbFZhbHVlcy5qdW1wc1xuICAgIClcblxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpIHtcbiAgICAgIHA1LnB1c2goKVxuICAgICAgY29uc3QgeyB4OiBzdWJYLCB5OiBzdWJZIH0gPSBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudF1cbiAgICAgICAgPyBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudF1cbiAgICAgICAgOiBwb2ludHNNYXRyaXhbcG9pbnRzTWF0cml4Lmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCB7IHg6IHBvaW50WCwgeTogcG9pbnRZIH0gPSBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudCArIDFdXG4gICAgICAgID8gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnQgKyAxXVxuICAgICAgICA6IHBvaW50c01hdHJpeFswXVxuICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuNSlcbiAgICAgIHA1LmxpbmUocG9pbnRYICogc2l6ZSwgcG9pbnRZICogc2l6ZSwgc3ViWCAqIHNpemUsIHN1YlkgKiBzaXplKVxuICAgICAgcDUucG9wKClcblxuICAgICAgc2xvd0RyYXdDb3VudCsrXG4gICAgICBpZiAoXG4gICAgICAgIHNsb3dEcmF3Q291bnQgPT09IHBvaW50c01hdHJpeC5sZW5ndGggfHxcbiAgICAgICAgc2xvd0RyYXdDb3VudCA9PT0gbGluZURlbnNpdHlcbiAgICAgICkge1xuICAgICAgICBwNS5mcmFtZVJhdGUoMClcbiAgICAgICAgc2xvd0RyYXdDb3VudCA9IDBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICAgICAgcDUuZnJhbWVSYXRlKHNwZWVkKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgIHBvaW50c01hdHJpeC5mb3JFYWNoKChfLCBjb3VudCkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgY29uc3QgeyB4OiBzdWJYLCB5OiBzdWJZIH0gPSBwb2ludHNNYXRyaXhbY291bnRdXG4gICAgICAgICAgPyBwb2ludHNNYXRyaXhbY291bnRdXG4gICAgICAgICAgOiBwb2ludHNNYXRyaXhbcG9pbnRzTWF0cml4Lmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnN0IHsgeDogcG9pbnRYLCB5OiBwb2ludFkgfSA9IHBvaW50c01hdHJpeFtjb3VudCArIDFdXG4gICAgICAgICAgPyBwb2ludHNNYXRyaXhbY291bnQgKyAxXVxuICAgICAgICAgIDogcG9pbnRzTWF0cml4WzBdXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgwLjIpXG4gICAgICAgIHA1LmxpbmUocG9pbnRYICogc2l6ZSwgcG9pbnRZICogc2l6ZSwgc3ViWCAqIHNpemUsIHN1YlkgKiBzaXplKVxuICAgICAgICBwNS5wb3AoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNob3dWZXJ0aWNlcykge1xuICAgICAgaW5pdGlhbE1hdHJpeC5mb3JFYWNoKCh7IHgsIHkgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgcDUucHVzaCgpXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHA1LnN0cm9rZShcImJsdWVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwNS5zdHJva2UoXCJncmVlblwiKVxuICAgICAgICB9XG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgxNSlcbiAgICAgICAgcDUucG9pbnQoeCAqIHNpemUsIHkgKiBzaXplKVxuICAgICAgICBwNS5wb3AoKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKEdsb2JhbFZhbHVlcy5zaG93U3ViZGl2aXNpb25zKSB7XG4gICAgICBzdWJkaXZpc2lvbk1hdHJpeC5mb3JFYWNoKCh7IHgsIHkgfSkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgcDUuc3Ryb2tlKFwicHVycGxlXCIpXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgxMClcbiAgICAgICAgcDUucG9pbnQoeCAqIHNpemUsIHkgKiBzaXplKVxuICAgICAgICBwNS5wb3AoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=