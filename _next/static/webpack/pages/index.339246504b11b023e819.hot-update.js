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

    speed = lineDensity / 2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJHbG9iYWxWYWx1ZXMiLCJhbmdsZU1vZGUiLCJERUdSRUVTIiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImluaXRpYWxNYXRyaXgiLCJnZXROR29uVmVydGljZXMiLCJqdW1wZWRNYXRyaXgiLCJnZXRKdW1wZWRQb2ludHMiLCJzdWJkaXZpc2lvbk1hdHJpeCIsImdldFN1YmRpdmlzaW9uTWF0cml4IiwicG9pbnRzTWF0cml4IiwiZ2V0UG9pbnRzTWF0cml4IiwibGluZURlbnNpdHkiLCJnZXRMaW5lRGVuc2l0eSIsInZlcnRpY2VzIiwic3ViZGl2aXNpb25zIiwicG9pbnRzIiwibGVuZ3RoIiwicHVzaCIsInN1YlgiLCJ4Iiwic3ViWSIsInkiLCJwb2ludFgiLCJwb2ludFkiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwicG9wIiwic2V0VGltZW91dCIsInNsaWNlIiwiZm9yRWFjaCIsIl8iLCJjb3VudCIsImluZGV4Iiwic3Ryb2tlIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQU1DLElBQUksR0FBRyxHQUFiO0FBRU8sU0FBU0MsTUFBVCxDQUFnQkMsRUFBaEIsRUFBa0M7QUFDdkNBLElBQUUsQ0FBQ0MsS0FBSCxHQUFXLFlBQU07QUFDZkQsTUFBRSxDQUFDRSxZQUFILENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBRUFGLE1BQUUsQ0FBQ0csVUFBSCxDQUFjLEdBQWQ7QUFDQUgsTUFBRSxDQUFDSSxTQUFILENBQWFQ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OztBQUNBLFlBQUllLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2Y1QyxZQUFFLENBQUM2QyxNQUFILENBQVUsTUFBVjtBQUNELFNBRkQsTUFFTztBQUNMN0MsWUFBRSxDQUFDNkMsTUFBSCxDQUFVLE9BQVY7QUFDRDs7QUFDRDdDLFVBQUUsQ0FBQ29DLFlBQUgsQ0FBZ0IsRUFBaEI7QUFDQXBDLFVBQUUsQ0FBQzhDLEtBQUgsQ0FBU2YsQ0FBQyxHQUFHakMsSUFBYixFQUFtQm1DLENBQUMsR0FBR25DLElBQXZCO0FBQ0FFLFVBQUUsQ0FBQ3NDLEdBQUg7QUFDRCxPQVZEO0FBV0Q7O0FBQ0QsUUFBSTlCLG1FQUFKLEVBQW1DO0FBQ2pDVyx1QkFBaUIsQ0FBQ3NCLE9BQWxCLENBQTBCLGlCQUFjO0FBQUEsWUFBWFYsQ0FBVyxTQUFYQSxDQUFXO0FBQUEsWUFBUkUsQ0FBUSxTQUFSQSxDQUFRO0FBQ3RDakMsVUFBRSxDQUFDNkIsSUFBSDtBQUNBN0IsVUFBRSxDQUFDNkMsTUFBSCxDQUFVLFFBQVY7QUFDQTdDLFVBQUUsQ0FBQ29DLFlBQUgsQ0FBZ0IsRUFBaEI7QUFDQXBDLFVBQUUsQ0FBQzhDLEtBQUgsQ0FBU2YsQ0FBQyxHQUFHakMsSUFBYixFQUFtQm1DLENBQUMsR0FBR25DLElBQXZCO0FBQ0FFLFVBQUUsQ0FBQ3NDLEdBQUg7QUFDRCxPQU5EO0FBT0Q7QUFDRixHQXJHRDtBQXNHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMzkyNDY1MDRiMTFiMDIzZTgxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TGluZURlbnNpdHkgfSBmcm9tIFwiQ2FsY3VsYXRpb25zL2dldExpbmVEZW5zaXR5XCJcbmltcG9ydCB7IGdldE5Hb25WZXJ0aWNlcyB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TkdvblZlcnRpY2VzXCJcbmltcG9ydCB0eXBlIHR5cGVQNSBmcm9tIFwicDVcIlxuXG5pbXBvcnQgeyBHbG9iYWxWYWx1ZXMgfSBmcm9tIFwiLi9nbG9iYWxzXCJcbmltcG9ydCB7IGdldEp1bXBlZFBvaW50cywgZ2V0UG9pbnRzTWF0cml4LCBnZXRTdWJkaXZpc2lvbk1hdHJpeCB9IGZyb20gXCIuL3B3cFwiXG5cbmxldCBzcGVlZCA9IDIwXG5jb25zdCBzaXplID0gMjUwXG5cbmV4cG9ydCBmdW5jdGlvbiBza2V0Y2gocDU6IHR5cGVQNSk6IHZvaWQge1xuICBwNS5zZXR1cCA9ICgpID0+IHtcbiAgICBwNS5jcmVhdGVDYW52YXMoNjAwLCA2MDApXG5cbiAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gIH1cblxuICBsZXQgc2xvd0RyYXdDb3VudCA9IDBcbiAgbGV0IHByZXZpb3VzRHJhd1N0YXRlID0gZmFsc2VcbiAgcDUuZHJhdyA9ICgpID0+IHtcbiAgICBpZiAocHJldmlvdXNEcmF3U3RhdGUgIT09IEdsb2JhbFZhbHVlcy5zbG93RHJhdykge1xuICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICBwcmV2aW91c0RyYXdTdGF0ZSA9IEdsb2JhbFZhbHVlcy5zbG93RHJhd1xuICAgIH1cbiAgICBwNS5hbmdsZU1vZGUocDUuREVHUkVFUylcbiAgICBwNS50cmFuc2xhdGUocDUud2lkdGggLyAyLCBwNS5oZWlnaHQgLyAyKVxuICAgIHA1LnNjYWxlKDEsIC0xKVxuXG4gICAgY29uc3QgaW5pdGlhbE1hdHJpeCA9IGdldE5Hb25WZXJ0aWNlcyhHbG9iYWxWYWx1ZXMudmVydGljZXMpXG5cbiAgICBjb25zdCBqdW1wZWRNYXRyaXggPSBnZXRKdW1wZWRQb2ludHMoaW5pdGlhbE1hdHJpeCwgLi4uR2xvYmFsVmFsdWVzLmp1bXBzKVxuICAgIEdsb2JhbFZhbHVlcy5tYXRyaXggPSBqdW1wZWRNYXRyaXhcblxuICAgIGNvbnN0IHN1YmRpdmlzaW9uTWF0cml4ID0gZ2V0U3ViZGl2aXNpb25NYXRyaXgoXG4gICAgICBHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zLFxuICAgICAganVtcGVkTWF0cml4XG4gICAgKVxuICAgIGNvbnN0IHBvaW50c01hdHJpeCA9IGdldFBvaW50c01hdHJpeChcbiAgICAgIEdsb2JhbFZhbHVlcy52ZXJ0aWNlcyxcbiAgICAgIEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBHbG9iYWxWYWx1ZXMucG9pbnRzLFxuICAgICAgc3ViZGl2aXNpb25NYXRyaXgsXG4gICAgICAuLi5HbG9iYWxWYWx1ZXMuanVtcHNcbiAgICApXG5cbiAgICBsZXQgbGluZURlbnNpdHkgPSBnZXRMaW5lRGVuc2l0eSh7XG4gICAgICB2ZXJ0aWNlczogR2xvYmFsVmFsdWVzLnZlcnRpY2VzLFxuICAgICAgc3ViZGl2aXNpb25zOiBHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zLFxuICAgICAgcG9pbnRzOiBHbG9iYWxWYWx1ZXMucG9pbnRzLFxuICAgIH0pXG5cbiAgICBpZiAoR2xvYmFsVmFsdWVzLmp1bXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxpbmVEZW5zaXR5ID0gcG9pbnRzTWF0cml4Lmxlbmd0aFxuICAgIH1cblxuICAgIHNwZWVkID0gbGluZURlbnNpdHkgLyAyXG5cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNsb3dEcmF3KSB7XG4gICAgICBwNS5wdXNoKClcbiAgICAgIGNvbnN0IHsgeDogc3ViWCwgeTogc3ViWSB9ID0gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnRdXG4gICAgICAgID8gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnRdXG4gICAgICAgIDogcG9pbnRzTWF0cml4W3BvaW50c01hdHJpeC5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgeyB4OiBwb2ludFgsIHk6IHBvaW50WSB9ID0gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnQgKyAxXVxuICAgICAgICA/IHBvaW50c01hdHJpeFtzbG93RHJhd0NvdW50ICsgMV1cbiAgICAgICAgOiBwb2ludHNNYXRyaXhbMF1cbiAgICAgIHA1LnN0cm9rZVdlaWdodCgwLjUpXG4gICAgICBwNS5saW5lKHBvaW50WCAqIHNpemUsIHBvaW50WSAqIHNpemUsIHN1YlggKiBzaXplLCBzdWJZICogc2l6ZSlcbiAgICAgIHA1LnBvcCgpXG5cbiAgICAgIHNsb3dEcmF3Q291bnQrK1xuICAgICAgaWYgKFxuICAgICAgICBzbG93RHJhd0NvdW50ID09PSBwb2ludHNNYXRyaXgubGVuZ3RoIHx8XG4gICAgICAgIHNsb3dEcmF3Q291bnQgPT09IGxpbmVEZW5zaXR5XG4gICAgICApIHtcbiAgICAgICAgcDUuZnJhbWVSYXRlKDApXG4gICAgICAgIHNsb3dEcmF3Q291bnQgPSAwXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgICAgICAgIHA1LmZyYW1lUmF0ZShzcGVlZClcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcDUuZnJhbWVSYXRlKHNwZWVkKVxuICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICBwb2ludHNNYXRyaXguc2xpY2UoMCwgbGluZURlbnNpdHkpLmZvckVhY2goKF8sIGNvdW50KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBjb25zdCB7IHg6IHN1YlgsIHk6IHN1YlkgfSA9IHBvaW50c01hdHJpeFtjb3VudF1cbiAgICAgICAgICA/IHBvaW50c01hdHJpeFtjb3VudF1cbiAgICAgICAgICA6IHBvaW50c01hdHJpeFtwb2ludHNNYXRyaXgubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc3QgeyB4OiBwb2ludFgsIHk6IHBvaW50WSB9ID0gcG9pbnRzTWF0cml4W2NvdW50ICsgMV1cbiAgICAgICAgICA/IHBvaW50c01hdHJpeFtjb3VudCArIDFdXG4gICAgICAgICAgOiBwb2ludHNNYXRyaXhbMF1cbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuMilcbiAgICAgICAgcDUubGluZShwb2ludFggKiBzaXplLCBwb2ludFkgKiBzaXplLCBzdWJYICogc2l6ZSwgc3ViWSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2hvd1ZlcnRpY2VzKSB7XG4gICAgICBpbml0aWFsTWF0cml4LmZvckVhY2goKHsgeCwgeSB9LCBpbmRleCkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgcDUuc3Ryb2tlKFwiYmx1ZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHA1LnN0cm9rZShcImdyZWVuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDE1KVxuICAgICAgICBwNS5wb2ludCh4ICogc2l6ZSwgeSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNob3dTdWJkaXZpc2lvbnMpIHtcbiAgICAgIHN1YmRpdmlzaW9uTWF0cml4LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBwNS5zdHJva2UoXCJwdXJwbGVcIilcbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDEwKVxuICAgICAgICBwNS5wb2ludCh4ICogc2l6ZSwgeSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==