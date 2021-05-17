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
/* harmony import */ var Calculations_getNGonVertices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Calculations/getNGonVertices */ "./src/calculations/getNGonVertices/index.tsx");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/globals.ts");
/* harmony import */ var _pwp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pwp */ "./src/pwp.ts");
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
    if (previousDrawState !== _globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.slowDraw) {
      p5.background(220);
      previousDrawState = _globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.slowDraw;
    }

    p5.angleMode(p5.DEGREES);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.scale(1, -1);
    var initialMatrix = (0,Calculations_getNGonVertices__WEBPACK_IMPORTED_MODULE_1__.getNGonVertices)(_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.vertices);
    var jumpedMatrix = _pwp__WEBPACK_IMPORTED_MODULE_3__.getJumpedPoints.apply(void 0, [initialMatrix].concat((0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.jumps)));
    _globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.matrix = jumpedMatrix;
    var subdivisionMatrix = (0,_pwp__WEBPACK_IMPORTED_MODULE_3__.getSubdivisionMatrix)(_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.subdivisions, jumpedMatrix);
    var pointsMatrix = _pwp__WEBPACK_IMPORTED_MODULE_3__.getPointsMatrix.apply(void 0, [_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.vertices, _globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.subdivisions, _globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.points, subdivisionMatrix].concat((0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.jumps)));

    if (_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.slowDraw) {
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

      if (slowDrawCount === pointsMatrix.length) {
        p5.frameRate(0);
        slowDrawCount = 0;
        setTimeout(function () {
          p5.background(220);
          p5.frameRate(speed);
        }, 2000);
      }
    } else {
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

    if (_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.showVertices) {
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

    if (_globals__WEBPACK_IMPORTED_MODULE_2__.GlobalValues.showSubdivisions) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJHbG9iYWxWYWx1ZXMiLCJhbmdsZU1vZGUiLCJERUdSRUVTIiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImluaXRpYWxNYXRyaXgiLCJnZXROR29uVmVydGljZXMiLCJqdW1wZWRNYXRyaXgiLCJnZXRKdW1wZWRQb2ludHMiLCJzdWJkaXZpc2lvbk1hdHJpeCIsImdldFN1YmRpdmlzaW9uTWF0cml4IiwicG9pbnRzTWF0cml4IiwiZ2V0UG9pbnRzTWF0cml4IiwicHVzaCIsImxlbmd0aCIsInN1YlgiLCJ4Iiwic3ViWSIsInkiLCJwb2ludFgiLCJwb2ludFkiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwicG9wIiwic2V0VGltZW91dCIsImZvckVhY2giLCJfIiwiY291bnQiLCJpbmRleCIsInN0cm9rZSIsInBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQUcsR0FBYjtBQUVPLFNBQVNDLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQWtDO0FBQ3ZDQSxJQUFFLENBQUNDLEtBQUgsR0FBVyxZQUFNO0FBQ2ZELE1BQUUsQ0FBQ0UsWUFBSCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUVBRixNQUFFLENBQUNHLFVBQUgsQ0FBYyxHQUFkO0FBQ0FILE1BQUUsQ0FBQ0ksU0FBSCxDQUFhUCxLQUFiO0FBQ0QsR0FMRDs7QUFPQSxNQUFJUSxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxLQUF4Qjs7QUFDQU4s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LE1BQUgsQ0FBVSxRQUFWO0FBQ0F2QyxVQUFFLENBQUMrQixZQUFILENBQWdCLEVBQWhCO0FBQ0EvQixVQUFFLENBQUN3QyxLQUFILENBQVNkLENBQUMsR0FBRzVCLElBQWIsRUFBbUI4QixDQUFDLEdBQUc5QixJQUF2QjtBQUNBRSxVQUFFLENBQUNpQyxHQUFIO0FBQ0QsT0FORDtBQU9EO0FBQ0YsR0FyRkQ7QUFzRkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWU1YzQ1NWE0NWIxMGNlODY2NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE5Hb25WZXJ0aWNlcyB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TkdvblZlcnRpY2VzXCJcbmltcG9ydCB0eXBlIHR5cGVQNSBmcm9tIFwicDVcIlxuXG5pbXBvcnQgeyBHbG9iYWxWYWx1ZXMgfSBmcm9tIFwiLi9nbG9iYWxzXCJcbmltcG9ydCB7IGdldEp1bXBlZFBvaW50cywgZ2V0UG9pbnRzTWF0cml4LCBnZXRTdWJkaXZpc2lvbk1hdHJpeCB9IGZyb20gXCIuL3B3cFwiXG5cbmNvbnN0IHNwZWVkID0gMjBcbmNvbnN0IHNpemUgPSAyNTBcblxuZXhwb3J0IGZ1bmN0aW9uIHNrZXRjaChwNTogdHlwZVA1KTogdm9pZCB7XG4gIHA1LnNldHVwID0gKCkgPT4ge1xuICAgIHA1LmNyZWF0ZUNhbnZhcyg2MDAsIDYwMClcblxuICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgIHA1LmZyYW1lUmF0ZShzcGVlZClcbiAgfVxuXG4gIGxldCBzbG93RHJhd0NvdW50ID0gMFxuICBsZXQgcHJldmlvdXNEcmF3U3RhdGUgPSBmYWxzZVxuICBwNS5kcmF3ID0gKCkgPT4ge1xuICAgIGlmIChwcmV2aW91c0RyYXdTdGF0ZSAhPT0gR2xvYmFsVmFsdWVzLnNsb3dEcmF3KSB7XG4gICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgIHByZXZpb3VzRHJhd1N0YXRlID0gR2xvYmFsVmFsdWVzLnNsb3dEcmF3XG4gICAgfVxuICAgIHA1LmFuZ2xlTW9kZShwNS5ERUdSRUVTKVxuICAgIHA1LnRyYW5zbGF0ZShwNS53aWR0aCAvIDIsIHA1LmhlaWdodCAvIDIpXG4gICAgcDUuc2NhbGUoMSwgLTEpXG5cbiAgICBjb25zdCBpbml0aWFsTWF0cml4ID0gZ2V0TkdvblZlcnRpY2VzKEdsb2JhbFZhbHVlcy52ZXJ0aWNlcylcblxuICAgIGNvbnN0IGp1bXBlZE1hdHJpeCA9IGdldEp1bXBlZFBvaW50cyhpbml0aWFsTWF0cml4LCAuLi5HbG9iYWxWYWx1ZXMuanVtcHMpXG4gICAgR2xvYmFsVmFsdWVzLm1hdHJpeCA9IGp1bXBlZE1hdHJpeFxuXG4gICAgY29uc3Qgc3ViZGl2aXNpb25NYXRyaXggPSBnZXRTdWJkaXZpc2lvbk1hdHJpeChcbiAgICAgIEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBqdW1wZWRNYXRyaXhcbiAgICApXG4gICAgY29uc3QgcG9pbnRzTWF0cml4ID0gZ2V0UG9pbnRzTWF0cml4KFxuICAgICAgR2xvYmFsVmFsdWVzLnZlcnRpY2VzLFxuICAgICAgR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIEdsb2JhbFZhbHVlcy5wb2ludHMsXG4gICAgICBzdWJkaXZpc2lvbk1hdHJpeCxcbiAgICAgIC4uLkdsb2JhbFZhbHVlcy5qdW1wc1xuICAgIClcblxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpIHtcbiAgICAgIHA1LnB1c2goKVxuICAgICAgY29uc3QgeyB4OiBzdWJYLCB5OiBzdWJZIH0gPSBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudF1cbiAgICAgICAgPyBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudF1cbiAgICAgICAgOiBwb2ludHNNYXRyaXhbcG9pbnRzTWF0cml4Lmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCB7IHg6IHBvaW50WCwgeTogcG9pbnRZIH0gPSBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudCArIDFdXG4gICAgICAgID8gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnQgKyAxXVxuICAgICAgICA6IHBvaW50c01hdHJpeFswXVxuICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuNSlcbiAgICAgIHA1LmxpbmUocG9pbnRYICogc2l6ZSwgcG9pbnRZICogc2l6ZSwgc3ViWCAqIHNpemUsIHN1YlkgKiBzaXplKVxuICAgICAgcDUucG9wKClcblxuICAgICAgc2xvd0RyYXdDb3VudCsrXG4gICAgICBpZiAoc2xvd0RyYXdDb3VudCA9PT0gcG9pbnRzTWF0cml4Lmxlbmd0aCkge1xuICAgICAgICBwNS5mcmFtZVJhdGUoMClcbiAgICAgICAgc2xvd0RyYXdDb3VudCA9IDBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICAgICAgcDUuZnJhbWVSYXRlKHNwZWVkKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgIHBvaW50c01hdHJpeC5mb3JFYWNoKChfLCBjb3VudCkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgY29uc3QgeyB4OiBzdWJYLCB5OiBzdWJZIH0gPSBwb2ludHNNYXRyaXhbY291bnRdXG4gICAgICAgICAgPyBwb2ludHNNYXRyaXhbY291bnRdXG4gICAgICAgICAgOiBwb2ludHNNYXRyaXhbcG9pbnRzTWF0cml4Lmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnN0IHsgeDogcG9pbnRYLCB5OiBwb2ludFkgfSA9IHBvaW50c01hdHJpeFtjb3VudCArIDFdXG4gICAgICAgICAgPyBwb2ludHNNYXRyaXhbY291bnQgKyAxXVxuICAgICAgICAgIDogcG9pbnRzTWF0cml4WzBdXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgwLjIpXG4gICAgICAgIHA1LmxpbmUocG9pbnRYICogc2l6ZSwgcG9pbnRZICogc2l6ZSwgc3ViWCAqIHNpemUsIHN1YlkgKiBzaXplKVxuICAgICAgICBwNS5wb3AoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNob3dWZXJ0aWNlcykge1xuICAgICAgaW5pdGlhbE1hdHJpeC5mb3JFYWNoKCh7IHgsIHkgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgcDUucHVzaCgpXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHA1LnN0cm9rZShcImJsdWVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwNS5zdHJva2UoXCJncmVlblwiKVxuICAgICAgICB9XG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgxNSlcbiAgICAgICAgcDUucG9pbnQoeCAqIHNpemUsIHkgKiBzaXplKVxuICAgICAgICBwNS5wb3AoKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKEdsb2JhbFZhbHVlcy5zaG93U3ViZGl2aXNpb25zKSB7XG4gICAgICBzdWJkaXZpc2lvbk1hdHJpeC5mb3JFYWNoKCh7IHgsIHkgfSkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgcDUuc3Ryb2tlKFwicHVycGxlXCIpXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgxMClcbiAgICAgICAgcDUucG9pbnQoeCAqIHNpemUsIHkgKiBzaXplKVxuICAgICAgICBwNS5wb3AoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=