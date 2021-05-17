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
    var lineDensity = (0,Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_1__.getLineDensity)({
      vertices: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.vertices,
      subdivisions: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.subdivisions,
      points: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.points
    });

    if (_globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.jumps.length > 0) {
      lineDensity = pointsMatrix.length;
    }

    speed = lineDensity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJHbG9iYWxWYWx1ZXMiLCJhbmdsZU1vZGUiLCJERUdSRUVTIiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImluaXRpYWxNYXRyaXgiLCJnZXROR29uVmVydGljZXMiLCJqdW1wZWRNYXRyaXgiLCJnZXRKdW1wZWRQb2ludHMiLCJzdWJkaXZpc2lvbk1hdHJpeCIsImdldFN1YmRpdmlzaW9uTWF0cml4IiwicG9pbnRzTWF0cml4IiwiZ2V0UG9pbnRzTWF0cml4IiwibGluZURlbnNpdHkiLCJnZXRMaW5lRGVuc2l0eSIsInZlcnRpY2VzIiwic3ViZGl2aXNpb25zIiwicG9pbnRzIiwibGVuZ3RoIiwicHVzaCIsInN1YlgiLCJ4Iiwic3ViWSIsInkiLCJwb2ludFgiLCJwb2ludFkiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwicG9wIiwic2V0VGltZW91dCIsInNsaWNlIiwiZm9yRWFjaCIsIl8iLCJjb3VudCIsImluZGV4Iiwic3Ryb2tlIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQU1DLElBQUksR0FBRyxHQUFiO0FBRU8sU0FBU0MsTUFBVCxDQUFnQkMsRUFBaEIsRUFBa0M7QUFDdkNBLElBQUUsQ0FBQ0MsS0FBSCxHQUFXLFlBQU07QUFDZkQsTUFBRSxDQUFDRSxZQUFILENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBRUFGLE1BQUUsQ0FBQ0csVUFBSCxDQUFjLEdBQWQ7QUFDQUgsTUFBRSxDQUFDSSxTQUFILENBQWFQ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ZSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmNUMsWUFBRSxDQUFDNkMsTUFBSCxDQUFVLE1BQVY7QUFDRCxTQUZELE1BRU87QUFDTDdDLFlBQUUsQ0FBQzZDLE1BQUgsQ0FBVSxPQUFWO0FBQ0Q7O0FBQ0Q3QyxVQUFFLENBQUNvQyxZQUFILENBQWdCLEVBQWhCO0FBQ0FwQyxVQUFFLENBQUM4QyxLQUFILENBQVNmLENBQUMsR0FBR2pDLElBQWIsRUFBbUJtQyxDQUFDLEdBQUduQyxJQUF2QjtBQUNBRSxVQUFFLENBQUNzQyxHQUFIO0FBQ0QsT0FWRDtBQVdEOztBQUNELFFBQUk5QixtRUFBSixFQUFtQztBQUNqQ1csdUJBQWlCLENBQUNzQixPQUFsQixDQUEwQixpQkFBYztBQUFBLFlBQVhWLENBQVcsU0FBWEEsQ0FBVztBQUFBLFlBQVJFLENBQVEsU0FBUkEsQ0FBUTtBQUN0Q2pDLFVBQUUsQ0FBQzZCLElBQUg7QUFDQTdCLFVBQUUsQ0FBQzZDLE1BQUgsQ0FBVSxRQUFWO0FBQ0E3QyxVQUFFLENBQUNvQyxZQUFILENBQWdCLEVBQWhCO0FBQ0FwQyxVQUFFLENBQUM4QyxLQUFILENBQVNmLENBQUMsR0FBR2pDLElBQWIsRUFBbUJtQyxDQUFDLEdBQUduQyxJQUF2QjtBQUNBRSxVQUFFLENBQUNzQyxHQUFIO0FBQ0QsT0FORDtBQU9EO0FBQ0YsR0FyR0Q7QUFzR0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2EzMDA1ZWMxZTkxNDNkMjFhZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldExpbmVEZW5zaXR5IH0gZnJvbSBcIkNhbGN1bGF0aW9ucy9nZXRMaW5lRGVuc2l0eVwiXG5pbXBvcnQgeyBnZXROR29uVmVydGljZXMgfSBmcm9tIFwiQ2FsY3VsYXRpb25zL2dldE5Hb25WZXJ0aWNlc1wiXG5pbXBvcnQgdHlwZSB0eXBlUDUgZnJvbSBcInA1XCJcblxuaW1wb3J0IHsgR2xvYmFsVmFsdWVzIH0gZnJvbSBcIi4vZ2xvYmFsc1wiXG5pbXBvcnQgeyBnZXRKdW1wZWRQb2ludHMsIGdldFBvaW50c01hdHJpeCwgZ2V0U3ViZGl2aXNpb25NYXRyaXggfSBmcm9tIFwiLi9wd3BcIlxuXG5sZXQgc3BlZWQgPSAyMFxuY29uc3Qgc2l6ZSA9IDI1MFxuXG5leHBvcnQgZnVuY3Rpb24gc2tldGNoKHA1OiB0eXBlUDUpOiB2b2lkIHtcbiAgcDUuc2V0dXAgPSAoKSA9PiB7XG4gICAgcDUuY3JlYXRlQ2FudmFzKDYwMCwgNjAwKVxuXG4gICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgcDUuZnJhbWVSYXRlKHNwZWVkKVxuICB9XG5cbiAgbGV0IHNsb3dEcmF3Q291bnQgPSAwXG4gIGxldCBwcmV2aW91c0RyYXdTdGF0ZSA9IGZhbHNlXG4gIHA1LmRyYXcgPSAoKSA9PiB7XG4gICAgaWYgKHByZXZpb3VzRHJhd1N0YXRlICE9PSBHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpIHtcbiAgICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgICAgcHJldmlvdXNEcmF3U3RhdGUgPSBHbG9iYWxWYWx1ZXMuc2xvd0RyYXdcbiAgICB9XG4gICAgcDUuYW5nbGVNb2RlKHA1LkRFR1JFRVMpXG4gICAgcDUudHJhbnNsYXRlKHA1LndpZHRoIC8gMiwgcDUuaGVpZ2h0IC8gMilcbiAgICBwNS5zY2FsZSgxLCAtMSlcblxuICAgIGNvbnN0IGluaXRpYWxNYXRyaXggPSBnZXROR29uVmVydGljZXMoR2xvYmFsVmFsdWVzLnZlcnRpY2VzKVxuXG4gICAgY29uc3QganVtcGVkTWF0cml4ID0gZ2V0SnVtcGVkUG9pbnRzKGluaXRpYWxNYXRyaXgsIC4uLkdsb2JhbFZhbHVlcy5qdW1wcylcbiAgICBHbG9iYWxWYWx1ZXMubWF0cml4ID0ganVtcGVkTWF0cml4XG5cbiAgICBjb25zdCBzdWJkaXZpc2lvbk1hdHJpeCA9IGdldFN1YmRpdmlzaW9uTWF0cml4KFxuICAgICAgR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIGp1bXBlZE1hdHJpeFxuICAgIClcbiAgICBjb25zdCBwb2ludHNNYXRyaXggPSBnZXRQb2ludHNNYXRyaXgoXG4gICAgICBHbG9iYWxWYWx1ZXMudmVydGljZXMsXG4gICAgICBHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zLFxuICAgICAgR2xvYmFsVmFsdWVzLnBvaW50cyxcbiAgICAgIHN1YmRpdmlzaW9uTWF0cml4LFxuICAgICAgLi4uR2xvYmFsVmFsdWVzLmp1bXBzXG4gICAgKVxuXG4gICAgbGV0IGxpbmVEZW5zaXR5ID0gZ2V0TGluZURlbnNpdHkoe1xuICAgICAgdmVydGljZXM6IEdsb2JhbFZhbHVlcy52ZXJ0aWNlcyxcbiAgICAgIHN1YmRpdmlzaW9uczogR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIHBvaW50czogR2xvYmFsVmFsdWVzLnBvaW50cyxcbiAgICB9KVxuXG4gICAgaWYgKEdsb2JhbFZhbHVlcy5qdW1wcy5sZW5ndGggPiAwKSB7XG4gICAgICBsaW5lRGVuc2l0eSA9IHBvaW50c01hdHJpeC5sZW5ndGhcbiAgICB9XG5cbiAgICBzcGVlZCA9IGxpbmVEZW5zaXR5XG5cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNsb3dEcmF3KSB7XG4gICAgICBwNS5wdXNoKClcbiAgICAgIGNvbnN0IHsgeDogc3ViWCwgeTogc3ViWSB9ID0gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnRdXG4gICAgICAgID8gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnRdXG4gICAgICAgIDogcG9pbnRzTWF0cml4W3BvaW50c01hdHJpeC5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgeyB4OiBwb2ludFgsIHk6IHBvaW50WSB9ID0gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnQgKyAxXVxuICAgICAgICA/IHBvaW50c01hdHJpeFtzbG93RHJhd0NvdW50ICsgMV1cbiAgICAgICAgOiBwb2ludHNNYXRyaXhbMF1cbiAgICAgIHA1LnN0cm9rZVdlaWdodCgwLjUpXG4gICAgICBwNS5saW5lKHBvaW50WCAqIHNpemUsIHBvaW50WSAqIHNpemUsIHN1YlggKiBzaXplLCBzdWJZICogc2l6ZSlcbiAgICAgIHA1LnBvcCgpXG5cbiAgICAgIHNsb3dEcmF3Q291bnQrK1xuICAgICAgaWYgKFxuICAgICAgICBzbG93RHJhd0NvdW50ID09PSBwb2ludHNNYXRyaXgubGVuZ3RoIHx8XG4gICAgICAgIHNsb3dEcmF3Q291bnQgPT09IGxpbmVEZW5zaXR5XG4gICAgICApIHtcbiAgICAgICAgcDUuZnJhbWVSYXRlKDApXG4gICAgICAgIHNsb3dEcmF3Q291bnQgPSAwXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgICAgICAgIHA1LmZyYW1lUmF0ZShzcGVlZClcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcDUuZnJhbWVSYXRlKHNwZWVkKVxuICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICBwb2ludHNNYXRyaXguc2xpY2UoMCwgbGluZURlbnNpdHkpLmZvckVhY2goKF8sIGNvdW50KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBjb25zdCB7IHg6IHN1YlgsIHk6IHN1YlkgfSA9IHBvaW50c01hdHJpeFtjb3VudF1cbiAgICAgICAgICA/IHBvaW50c01hdHJpeFtjb3VudF1cbiAgICAgICAgICA6IHBvaW50c01hdHJpeFtwb2ludHNNYXRyaXgubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc3QgeyB4OiBwb2ludFgsIHk6IHBvaW50WSB9ID0gcG9pbnRzTWF0cml4W2NvdW50ICsgMV1cbiAgICAgICAgICA/IHBvaW50c01hdHJpeFtjb3VudCArIDFdXG4gICAgICAgICAgOiBwb2ludHNNYXRyaXhbMF1cbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuMilcbiAgICAgICAgcDUubGluZShwb2ludFggKiBzaXplLCBwb2ludFkgKiBzaXplLCBzdWJYICogc2l6ZSwgc3ViWSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2hvd1ZlcnRpY2VzKSB7XG4gICAgICBpbml0aWFsTWF0cml4LmZvckVhY2goKHsgeCwgeSB9LCBpbmRleCkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgcDUuc3Ryb2tlKFwiYmx1ZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHA1LnN0cm9rZShcImdyZWVuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDE1KVxuICAgICAgICBwNS5wb2ludCh4ICogc2l6ZSwgeSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNob3dTdWJkaXZpc2lvbnMpIHtcbiAgICAgIHN1YmRpdmlzaW9uTWF0cml4LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBwNS5zdHJva2UoXCJwdXJwbGVcIilcbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDEwKVxuICAgICAgICBwNS5wb2ludCh4ICogc2l6ZSwgeSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==