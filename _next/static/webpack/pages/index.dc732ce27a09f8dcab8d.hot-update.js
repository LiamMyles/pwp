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
      pointsMatrix.slice(0, lineDensity).forEach(function (_, count) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJsaW5lRGVuc2l0eSIsImdldExpbmVEZW5zaXR5IiwidmVydGljZXMiLCJHbG9iYWxWYWx1ZXMiLCJzdWJkaXZpc2lvbnMiLCJwb2ludHMiLCJhbmdsZU1vZGUiLCJERUdSRUVTIiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImluaXRpYWxNYXRyaXgiLCJnZXROR29uVmVydGljZXMiLCJqdW1wZWRNYXRyaXgiLCJnZXRKdW1wZWRQb2ludHMiLCJzdWJkaXZpc2lvbk1hdHJpeCIsImdldFN1YmRpdmlzaW9uTWF0cml4IiwicG9pbnRzTWF0cml4IiwiZ2V0UG9pbnRzTWF0cml4IiwicHVzaCIsImxlbmd0aCIsInN1YlgiLCJ4Iiwic3ViWSIsInkiLCJwb2ludFgiLCJwb2ludFkiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwicG9wIiwic2V0VGltZW91dCIsInNsaWNlIiwiZm9yRWFjaCIsIl8iLCJjb3VudCIsImluZGV4Iiwic3Ryb2tlIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQU1DLElBQUksR0FBRyxHQUFiO0FBRU8sU0FBU0MsTUFBVCxDQUFnQkMsRUFBaEIsRUFBa0M7QUFDdkNBLElBQUUsQ0FBQ0MsS0FBSCxHQUFXLFlBQU07QUFDZkQsTUFBRSxDQUFDRSxZQUFILENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBRUFGLE1BQUUsQ0FBQ0csVUFBSCxDQUFjLEdBQWQ7QUFDQUgsTUFBRSxDQUFDSSxTQUFILENBQWFQ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WUFBRSxDQUFDNkMsTUFBSCxDQUFVLE9BQVY7QUFDRDs7QUFDRDdDLFVBQUUsQ0FBQ29DLFlBQUgsQ0FBZ0IsRUFBaEI7QUFDQXBDLFVBQUUsQ0FBQzhDLEtBQUgsQ0FBU2YsQ0FBQyxHQUFHakMsSUFBYixFQUFtQm1DLENBQUMsR0FBR25DLElBQXZCO0FBQ0FFLFVBQUUsQ0FBQ3NDLEdBQUg7QUFDRCxPQVZEO0FBV0Q7O0FBQ0QsUUFBSTNCLG1FQUFKLEVBQW1DO0FBQ2pDYSx1QkFBaUIsQ0FBQ2lCLE9BQWxCLENBQTBCLGlCQUFjO0FBQUEsWUFBWFYsQ0FBVyxTQUFYQSxDQUFXO0FBQUEsWUFBUkUsQ0FBUSxTQUFSQSxDQUFRO0FBQ3RDakMsVUFBRSxDQUFDNEIsSUFBSDtBQUNBNUIsVUFBRSxDQUFDNkMsTUFBSCxDQUFVLFFBQVY7QUFDQTdDLFVBQUUsQ0FBQ29DLFlBQUgsQ0FBZ0IsRUFBaEI7QUFDQXBDLFVBQUUsQ0FBQzhDLEtBQUgsQ0FBU2YsQ0FBQyxHQUFHakMsSUFBYixFQUFtQm1DLENBQUMsR0FBR25DLElBQXZCO0FBQ0FFLFVBQUUsQ0FBQ3NDLEdBQUg7QUFDRCxPQU5EO0FBT0Q7QUFDRixHQWpHRDtBQWtHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYzczMmNlMjdhMDlmOGRjYWI4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TGluZURlbnNpdHkgfSBmcm9tIFwiQ2FsY3VsYXRpb25zL2dldExpbmVEZW5zaXR5XCJcbmltcG9ydCB7IGdldE5Hb25WZXJ0aWNlcyB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TkdvblZlcnRpY2VzXCJcbmltcG9ydCB0eXBlIHR5cGVQNSBmcm9tIFwicDVcIlxuXG5pbXBvcnQgeyBHbG9iYWxWYWx1ZXMgfSBmcm9tIFwiLi9nbG9iYWxzXCJcbmltcG9ydCB7IGdldEp1bXBlZFBvaW50cywgZ2V0UG9pbnRzTWF0cml4LCBnZXRTdWJkaXZpc2lvbk1hdHJpeCB9IGZyb20gXCIuL3B3cFwiXG5cbmxldCBzcGVlZCA9IDIwXG5jb25zdCBzaXplID0gMjUwXG5cbmV4cG9ydCBmdW5jdGlvbiBza2V0Y2gocDU6IHR5cGVQNSk6IHZvaWQge1xuICBwNS5zZXR1cCA9ICgpID0+IHtcbiAgICBwNS5jcmVhdGVDYW52YXMoNjAwLCA2MDApXG5cbiAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gIH1cblxuICBsZXQgc2xvd0RyYXdDb3VudCA9IDBcbiAgbGV0IHByZXZpb3VzRHJhd1N0YXRlID0gZmFsc2VcbiAgcDUuZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5lRGVuc2l0eSA9IGdldExpbmVEZW5zaXR5KHtcbiAgICAgIHZlcnRpY2VzOiBHbG9iYWxWYWx1ZXMudmVydGljZXMsXG4gICAgICBzdWJkaXZpc2lvbnM6IEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBwb2ludHM6IEdsb2JhbFZhbHVlcy5wb2ludHMsXG4gICAgfSlcblxuICAgIHNwZWVkID0gbGluZURlbnNpdHlcblxuICAgIGlmIChwcmV2aW91c0RyYXdTdGF0ZSAhPT0gR2xvYmFsVmFsdWVzLnNsb3dEcmF3KSB7XG4gICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgIHByZXZpb3VzRHJhd1N0YXRlID0gR2xvYmFsVmFsdWVzLnNsb3dEcmF3XG4gICAgfVxuICAgIHA1LmFuZ2xlTW9kZShwNS5ERUdSRUVTKVxuICAgIHA1LnRyYW5zbGF0ZShwNS53aWR0aCAvIDIsIHA1LmhlaWdodCAvIDIpXG4gICAgcDUuc2NhbGUoMSwgLTEpXG5cbiAgICBjb25zdCBpbml0aWFsTWF0cml4ID0gZ2V0TkdvblZlcnRpY2VzKEdsb2JhbFZhbHVlcy52ZXJ0aWNlcylcblxuICAgIGNvbnN0IGp1bXBlZE1hdHJpeCA9IGdldEp1bXBlZFBvaW50cyhpbml0aWFsTWF0cml4LCAuLi5HbG9iYWxWYWx1ZXMuanVtcHMpXG4gICAgR2xvYmFsVmFsdWVzLm1hdHJpeCA9IGp1bXBlZE1hdHJpeFxuXG4gICAgY29uc3Qgc3ViZGl2aXNpb25NYXRyaXggPSBnZXRTdWJkaXZpc2lvbk1hdHJpeChcbiAgICAgIEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBqdW1wZWRNYXRyaXhcbiAgICApXG4gICAgY29uc3QgcG9pbnRzTWF0cml4ID0gZ2V0UG9pbnRzTWF0cml4KFxuICAgICAgR2xvYmFsVmFsdWVzLnZlcnRpY2VzLFxuICAgICAgR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIEdsb2JhbFZhbHVlcy5wb2ludHMsXG4gICAgICBzdWJkaXZpc2lvbk1hdHJpeCxcbiAgICAgIC4uLkdsb2JhbFZhbHVlcy5qdW1wc1xuICAgIClcblxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpIHtcbiAgICAgIHA1LnB1c2goKVxuICAgICAgY29uc3QgeyB4OiBzdWJYLCB5OiBzdWJZIH0gPSBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudF1cbiAgICAgICAgPyBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudF1cbiAgICAgICAgOiBwb2ludHNNYXRyaXhbcG9pbnRzTWF0cml4Lmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCB7IHg6IHBvaW50WCwgeTogcG9pbnRZIH0gPSBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudCArIDFdXG4gICAgICAgID8gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnQgKyAxXVxuICAgICAgICA6IHBvaW50c01hdHJpeFswXVxuICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuNSlcbiAgICAgIHA1LmxpbmUocG9pbnRYICogc2l6ZSwgcG9pbnRZICogc2l6ZSwgc3ViWCAqIHNpemUsIHN1YlkgKiBzaXplKVxuICAgICAgcDUucG9wKClcblxuICAgICAgc2xvd0RyYXdDb3VudCsrXG4gICAgICBpZiAoXG4gICAgICAgIHNsb3dEcmF3Q291bnQgPT09IHBvaW50c01hdHJpeC5sZW5ndGggfHxcbiAgICAgICAgc2xvd0RyYXdDb3VudCA9PT0gbGluZURlbnNpdHlcbiAgICAgICkge1xuICAgICAgICBwNS5mcmFtZVJhdGUoMClcbiAgICAgICAgc2xvd0RyYXdDb3VudCA9IDBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICAgICAgcDUuZnJhbWVSYXRlKHNwZWVkKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgIHBvaW50c01hdHJpeC5zbGljZSgwLCBsaW5lRGVuc2l0eSkuZm9yRWFjaCgoXywgY291bnQpID0+IHtcbiAgICAgICAgcDUucHVzaCgpXG4gICAgICAgIGNvbnN0IHsgeDogc3ViWCwgeTogc3ViWSB9ID0gcG9pbnRzTWF0cml4W2NvdW50XVxuICAgICAgICAgID8gcG9pbnRzTWF0cml4W2NvdW50XVxuICAgICAgICAgIDogcG9pbnRzTWF0cml4W3BvaW50c01hdHJpeC5sZW5ndGggLSAxXVxuICAgICAgICBjb25zdCB7IHg6IHBvaW50WCwgeTogcG9pbnRZIH0gPSBwb2ludHNNYXRyaXhbY291bnQgKyAxXVxuICAgICAgICAgID8gcG9pbnRzTWF0cml4W2NvdW50ICsgMV1cbiAgICAgICAgICA6IHBvaW50c01hdHJpeFswXVxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoMC4yKVxuICAgICAgICBwNS5saW5lKHBvaW50WCAqIHNpemUsIHBvaW50WSAqIHNpemUsIHN1YlggKiBzaXplLCBzdWJZICogc2l6ZSlcbiAgICAgICAgcDUucG9wKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKEdsb2JhbFZhbHVlcy5zaG93VmVydGljZXMpIHtcbiAgICAgIGluaXRpYWxNYXRyaXguZm9yRWFjaCgoeyB4LCB5IH0sIGluZGV4KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBwNS5zdHJva2UoXCJibHVlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcDUuc3Ryb2tlKFwiZ3JlZW5cIilcbiAgICAgICAgfVxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoMTUpXG4gICAgICAgIHA1LnBvaW50KHggKiBzaXplLCB5ICogc2l6ZSlcbiAgICAgICAgcDUucG9wKClcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2hvd1N1YmRpdmlzaW9ucykge1xuICAgICAgc3ViZGl2aXNpb25NYXRyaXguZm9yRWFjaCgoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgcDUucHVzaCgpXG4gICAgICAgIHA1LnN0cm9rZShcInB1cnBsZVwiKVxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoMTApXG4gICAgICAgIHA1LnBvaW50KHggKiBzaXplLCB5ICogc2l6ZSlcbiAgICAgICAgcDUucG9wKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9