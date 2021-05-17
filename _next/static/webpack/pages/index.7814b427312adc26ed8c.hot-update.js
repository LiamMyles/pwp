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
    speed = (0,Calculations_getLineDensity__WEBPACK_IMPORTED_MODULE_1__.getLineDensity)({
      vertices: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.vertices,
      subdivisions: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.subdivisions,
      points: _globals__WEBPACK_IMPORTED_MODULE_3__.GlobalValues.points
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJnZXRMaW5lRGVuc2l0eSIsInZlcnRpY2VzIiwiR2xvYmFsVmFsdWVzIiwic3ViZGl2aXNpb25zIiwicG9pbnRzIiwiYW5nbGVNb2RlIiwiREVHUkVFUyIsInRyYW5zbGF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbml0aWFsTWF0cml4IiwiZ2V0TkdvblZlcnRpY2VzIiwianVtcGVkTWF0cml4IiwiZ2V0SnVtcGVkUG9pbnRzIiwic3ViZGl2aXNpb25NYXRyaXgiLCJnZXRTdWJkaXZpc2lvbk1hdHJpeCIsInBvaW50c01hdHJpeCIsImdldFBvaW50c01hdHJpeCIsInB1c2giLCJsZW5ndGgiLCJzdWJYIiwieCIsInN1YlkiLCJ5IiwicG9pbnRYIiwicG9pbnRZIiwic3Ryb2tlV2VpZ2h0IiwibGluZSIsInBvcCIsInNldFRpbWVvdXQiLCJmb3JFYWNoIiwiXyIsImNvdW50IiwiaW5kZXgiLCJzdHJva2UiLCJwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLEdBQWI7QUFFTyxTQUFTQyxNQUFULENBQWdCQyxFQUFoQixFQUFrQztBQUN2Q0EsSUFBRSxDQUFDQyxLQUFILEdBQVcsWUFBTTtBQUNmRCxNQUFFLENBQUNFLFlBQUgsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFFQUYsTUFBRSxDQUFDRyxVQUFILENBQWMsR0FBZDtBQUNBSCxNQUFFLENBQUNJLFNBQUgsQ0FBYVAsS0FBYjtBQUNELEdBTEQ7O0FBT0Es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cUMsR0FBSDtBQUNELE9BVkQ7QUFXRDs7QUFDRCxRQUFJM0IsbUVBQUosRUFBbUM7QUFDakNhLHVCQUFpQixDQUFDZ0IsT0FBbEIsQ0FBMEIsaUJBQWM7QUFBQSxZQUFYVCxDQUFXLFNBQVhBLENBQVc7QUFBQSxZQUFSRSxDQUFRLFNBQVJBLENBQVE7QUFDdENoQyxVQUFFLENBQUMyQixJQUFIO0FBQ0EzQixVQUFFLENBQUMyQyxNQUFILENBQVUsUUFBVjtBQUNBM0MsVUFBRSxDQUFDbUMsWUFBSCxDQUFnQixFQUFoQjtBQUNBbkMsVUFBRSxDQUFDNEMsS0FBSCxDQUFTZCxDQUFDLEdBQUdoQyxJQUFiLEVBQW1Ca0MsQ0FBQyxHQUFHbEMsSUFBdkI7QUFDQUUsVUFBRSxDQUFDcUMsR0FBSDtBQUNELE9BTkQ7QUFPRDtBQUNGLEdBM0ZEO0FBNEZEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc4MTRiNDI3MzEyYWRjMjZlZDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMaW5lRGVuc2l0eSB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TGluZURlbnNpdHlcIlxuaW1wb3J0IHsgZ2V0TkdvblZlcnRpY2VzIH0gZnJvbSBcIkNhbGN1bGF0aW9ucy9nZXROR29uVmVydGljZXNcIlxuaW1wb3J0IHR5cGUgdHlwZVA1IGZyb20gXCJwNVwiXG5cbmltcG9ydCB7IEdsb2JhbFZhbHVlcyB9IGZyb20gXCIuL2dsb2JhbHNcIlxuaW1wb3J0IHsgZ2V0SnVtcGVkUG9pbnRzLCBnZXRQb2ludHNNYXRyaXgsIGdldFN1YmRpdmlzaW9uTWF0cml4IH0gZnJvbSBcIi4vcHdwXCJcblxubGV0IHNwZWVkID0gMjBcbmNvbnN0IHNpemUgPSAyNTBcblxuZXhwb3J0IGZ1bmN0aW9uIHNrZXRjaChwNTogdHlwZVA1KTogdm9pZCB7XG4gIHA1LnNldHVwID0gKCkgPT4ge1xuICAgIHA1LmNyZWF0ZUNhbnZhcyg2MDAsIDYwMClcblxuICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgIHA1LmZyYW1lUmF0ZShzcGVlZClcbiAgfVxuXG4gIGxldCBzbG93RHJhd0NvdW50ID0gMFxuICBsZXQgcHJldmlvdXNEcmF3U3RhdGUgPSBmYWxzZVxuICBwNS5kcmF3ID0gKCkgPT4ge1xuICAgIHNwZWVkID0gZ2V0TGluZURlbnNpdHkoe1xuICAgICAgdmVydGljZXM6IEdsb2JhbFZhbHVlcy52ZXJ0aWNlcyxcbiAgICAgIHN1YmRpdmlzaW9uczogR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIHBvaW50czogR2xvYmFsVmFsdWVzLnBvaW50cyxcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzRHJhd1N0YXRlICE9PSBHbG9iYWxWYWx1ZXMuc2xvd0RyYXcpIHtcbiAgICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgICAgcHJldmlvdXNEcmF3U3RhdGUgPSBHbG9iYWxWYWx1ZXMuc2xvd0RyYXdcbiAgICB9XG4gICAgcDUuYW5nbGVNb2RlKHA1LkRFR1JFRVMpXG4gICAgcDUudHJhbnNsYXRlKHA1LndpZHRoIC8gMiwgcDUuaGVpZ2h0IC8gMilcbiAgICBwNS5zY2FsZSgxLCAtMSlcblxuICAgIGNvbnN0IGluaXRpYWxNYXRyaXggPSBnZXROR29uVmVydGljZXMoR2xvYmFsVmFsdWVzLnZlcnRpY2VzKVxuXG4gICAgY29uc3QganVtcGVkTWF0cml4ID0gZ2V0SnVtcGVkUG9pbnRzKGluaXRpYWxNYXRyaXgsIC4uLkdsb2JhbFZhbHVlcy5qdW1wcylcbiAgICBHbG9iYWxWYWx1ZXMubWF0cml4ID0ganVtcGVkTWF0cml4XG5cbiAgICBjb25zdCBzdWJkaXZpc2lvbk1hdHJpeCA9IGdldFN1YmRpdmlzaW9uTWF0cml4KFxuICAgICAgR2xvYmFsVmFsdWVzLnN1YmRpdmlzaW9ucyxcbiAgICAgIGp1bXBlZE1hdHJpeFxuICAgIClcbiAgICBjb25zdCBwb2ludHNNYXRyaXggPSBnZXRQb2ludHNNYXRyaXgoXG4gICAgICBHbG9iYWxWYWx1ZXMudmVydGljZXMsXG4gICAgICBHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zLFxuICAgICAgR2xvYmFsVmFsdWVzLnBvaW50cyxcbiAgICAgIHN1YmRpdmlzaW9uTWF0cml4LFxuICAgICAgLi4uR2xvYmFsVmFsdWVzLmp1bXBzXG4gICAgKVxuXG4gICAgaWYgKEdsb2JhbFZhbHVlcy5zbG93RHJhdykge1xuICAgICAgcDUucHVzaCgpXG4gICAgICBjb25zdCB7IHg6IHN1YlgsIHk6IHN1YlkgfSA9IHBvaW50c01hdHJpeFtzbG93RHJhd0NvdW50XVxuICAgICAgICA/IHBvaW50c01hdHJpeFtzbG93RHJhd0NvdW50XVxuICAgICAgICA6IHBvaW50c01hdHJpeFtwb2ludHNNYXRyaXgubGVuZ3RoIC0gMV1cbiAgICAgIGNvbnN0IHsgeDogcG9pbnRYLCB5OiBwb2ludFkgfSA9IHBvaW50c01hdHJpeFtzbG93RHJhd0NvdW50ICsgMV1cbiAgICAgICAgPyBwb2ludHNNYXRyaXhbc2xvd0RyYXdDb3VudCArIDFdXG4gICAgICAgIDogcG9pbnRzTWF0cml4WzBdXG4gICAgICBwNS5zdHJva2VXZWlnaHQoMC41KVxuICAgICAgcDUubGluZShwb2ludFggKiBzaXplLCBwb2ludFkgKiBzaXplLCBzdWJYICogc2l6ZSwgc3ViWSAqIHNpemUpXG4gICAgICBwNS5wb3AoKVxuXG4gICAgICBzbG93RHJhd0NvdW50KytcbiAgICAgIGlmIChzbG93RHJhd0NvdW50ID09PSBwb2ludHNNYXRyaXgubGVuZ3RoKSB7XG4gICAgICAgIHA1LmZyYW1lUmF0ZSgwKVxuICAgICAgICBzbG93RHJhd0NvdW50ID0gMFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICAgICAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgICAgcG9pbnRzTWF0cml4LmZvckVhY2goKF8sIGNvdW50KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBjb25zdCB7IHg6IHN1YlgsIHk6IHN1YlkgfSA9IHBvaW50c01hdHJpeFtjb3VudF1cbiAgICAgICAgICA/IHBvaW50c01hdHJpeFtjb3VudF1cbiAgICAgICAgICA6IHBvaW50c01hdHJpeFtwb2ludHNNYXRyaXgubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc3QgeyB4OiBwb2ludFgsIHk6IHBvaW50WSB9ID0gcG9pbnRzTWF0cml4W2NvdW50ICsgMV1cbiAgICAgICAgICA/IHBvaW50c01hdHJpeFtjb3VudCArIDFdXG4gICAgICAgICAgOiBwb2ludHNNYXRyaXhbMF1cbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuMilcbiAgICAgICAgcDUubGluZShwb2ludFggKiBzaXplLCBwb2ludFkgKiBzaXplLCBzdWJYICogc2l6ZSwgc3ViWSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2hvd1ZlcnRpY2VzKSB7XG4gICAgICBpbml0aWFsTWF0cml4LmZvckVhY2goKHsgeCwgeSB9LCBpbmRleCkgPT4ge1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgcDUuc3Ryb2tlKFwiYmx1ZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHA1LnN0cm9rZShcImdyZWVuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDE1KVxuICAgICAgICBwNS5wb2ludCh4ICogc2l6ZSwgeSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNob3dTdWJkaXZpc2lvbnMpIHtcbiAgICAgIHN1YmRpdmlzaW9uTWF0cml4LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBwNS5zdHJva2UoXCJwdXJwbGVcIilcbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDEwKVxuICAgICAgICBwNS5wb2ludCh4ICogc2l6ZSwgeSAqIHNpemUpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==