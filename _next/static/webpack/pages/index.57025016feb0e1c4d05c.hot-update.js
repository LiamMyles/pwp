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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NrZXRjaC50cyJdLCJuYW1lcyI6WyJzcGVlZCIsInNpemUiLCJza2V0Y2giLCJwNSIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNsb3dEcmF3Q291bnQiLCJwcmV2aW91c0RyYXdTdGF0ZSIsImRyYXciLCJHbG9iYWxWYWx1ZXMiLCJhbmdsZU1vZGUiLCJERUdSRUVTIiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImluaXRpYWxNYXRyaXgiLCJnZXROR29uVmVydGljZXMiLCJqdW1wZWRNYXRyaXgiLCJnZXRKdW1wZWRQb2ludHMiLCJzdWJkaXZpc2lvbk1hdHJpeCIsImdldFN1YmRpdmlzaW9uTWF0cml4IiwicG9pbnRzTWF0cml4IiwiZ2V0UG9pbnRzTWF0cml4IiwicHVzaCIsImxlbmd0aCIsInN1YlgiLCJ4Iiwic3ViWSIsInkiLCJwb2ludFgiLCJwb2ludFkiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwicG9wIiwic2V0VGltZW91dCIsImZvckVhY2giLCJfIiwiY291bnQiLCJpbmRleCIsInN0cm9rZSIsInBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQUcsR0FBYjtBQUVPLFNBQVNDLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQWtDO0FBQ3ZDQSxJQUFFLENBQUNDLEtBQUgsR0FBVyxZQUFNO0FBQ2ZELE1BQUUsQ0FBQ0UsWUFBSCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUVBRixNQUFFLENBQUNHLFVBQUgsQ0FBYyxHQUFkO0FBQ0FILE1BQUUsQ0FBQ0ksU0FBSCxDQUFhUCxLQUFiO0FBQ0QsR0FMRDs7QUFPQSxNQUFJUSxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxLQUF4Qjs7QUFDQU4sSUFBRSxDQUFDTyxJQUFILEdBQVUsWUFBTTtBQUNkLFFBQUlELGlCQUFpQixLQUFLRSwyREFBMUIsRUFBaUQ7QUFDL0NSLFFBQUUsQ0FBQ0csVUFBSCxDQUFjLEdBQWQ7QUFDQUcsdUJBQWlCLEdBQUdFLDJEQUFwQjtBQUNEOztBQUNEUixNQUFFLENBQUNTLFNBQUgsQ0FBYVQsRUFBRSxDQUFDVSxPQUFoQjtBQUNBVixNQUFFLENBQUNXLFNBQUgsQ0FBYVgsRUFBRSxDQUFDWSxLQUFILEdBQVcsQ0FBeEIsRUFBMkJaLEVBQUUsQ0FBQ2EsTUFBSCxHQUFZLENBQXZDO0FBQ0FiLE1BQUUsQ0FBQ2MsS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFDLENBQWI7QUFFQSxRQUFNQyxhQUFhLEdBQUdDLDZFQUFlLENBQUNSLDJEQUFELENBQXJDO0FBRUEsUUFBTVMsWUFBWSxHQUFHQyx1REFBQSxVQUFnQkgsYUFBaEIsMkpBQWtDUCx3REFBbEMsR0FBckI7QUFDQUEsNkRBQUEsR0FBc0JTLFlBQXRCO0FBRUEsUUFBTUUsaUJBQWlCLEdBQUdDLDBEQUFvQixDQUM1Q1osK0RBRDRDLEVBRTVDUyxZQUY0QyxDQUE5QztBQUlBLFFBQU1JLFlBQVksR0FBR0MsdURBQUEsVUFDbkJkLDJEQURtQixFQUVuQkEsK0RBRm1CLEVBR25CQSx5REFIbUIsRUFJbkJXLGlCQUptQiwySkFLaEJYLHdEQUxnQixHQUFyQjs7QUFRQSxRQUFJQSwyREFBSixFQUEyQjtBQUN6QlIsUUFBRSxDQUFDdUIsSUFBSDs7QUFEeUIsaUJBRUlGLFlBQVksQ0FBQ2hCLGFBQUQsQ0FBWixHQUN6QmdCLFlBQVksQ0FBQ2hCLGFBQUQsQ0FEYSxHQUV6QmdCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDRyxNQUFiLEdBQXNCLENBQXZCLENBSlM7QUFBQSxVQUVkQyxJQUZjLFFBRWpCQyxDQUZpQjtBQUFBLFVBRUxDLElBRkssUUFFUkMsQ0FGUTs7QUFBQSxrQkFLUVAsWUFBWSxDQUFDaEIsYUFBYSxHQUFHLENBQWpCLENBQVosR0FDN0JnQixZQUFZLENBQUNoQixhQUFhLEdBQUcsQ0FBakIsQ0FEaUIsR0FFN0JnQixZQUFZLENBQUMsQ0FBRCxDQVBTO0FBQUEsVUFLZFEsTUFMYyxTQUtqQkgsQ0FMaUI7QUFBQSxVQUtISSxNQUxHLFNBS05GLENBTE07O0FBUXpCNUIsUUFBRSxDQUFDK0IsWUFBSCxDQUFnQixHQUFoQjtBQUNBL0IsUUFBRSxDQUFDZ0MsSUFBSCxDQUFRSCxNQUFNLEdBQUcvQixJQUFqQixFQUF1QmdDLE1BQU0sR0FBR2hDLElBQWhDLEVBQXNDMkIsSUFBSSxHQUFHM0IsSUFBN0MsRUFBbUQ2QixJQUFJLEdBQUc3QixJQUExRDtBQUNBRSxRQUFFLENBQUNpQyxHQUFIO0FBRUE1QixtQkFBYTs7QUFDYixVQUFJQSxhQUFhLEtBQUtnQixZQUFZLENBQUNHLE1BQW5DLEVBQTJDO0FBQ3pDeEIsVUFBRSxDQUFDSSxTQUFILENBQWEsQ0FBYjtBQUNBQyxxQkFBYSxHQUFHLENBQWhCO0FBQ0E2QixrQkFBVSxDQUFDLFlBQU07QUFDZmxDLFlBQUUsQ0FBQ0csVUFBSCxDQUFjLEdBQWQ7QUFDQUgsWUFBRSxDQUFDSSxTQUFILENBQWFQLEtBQWI7QUFDRCxTQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQ7QUFDRixLQXJCRCxNQXFCTztBQUNMRyxRQUFFLENBQUNHLFVBQUgsQ0FBYyxHQUFkO0FBQ0FrQixrQkFBWSxDQUFDYyxPQUFiLENBQXFCLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ2pDckMsVUFBRSxDQUFDdUIsSUFBSDs7QUFEaUMsb0JBRUpGLFlBQVksQ0FBQ2dCLEtBQUQsQ0FBWixHQUN6QmhCLFlBQVksQ0FBQ2dCLEtBQUQsQ0FEYSxHQUV6QmhCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDRyxNQUFiLEdBQXNCLENBQXZCLENBSmlCO0FBQUEsWUFFdEJDLElBRnNCLFNBRXpCQyxDQUZ5QjtBQUFBLFlBRWJDLElBRmEsU0FFaEJDLENBRmdCOztBQUFBLG9CQUtBUCxZQUFZLENBQUNnQixLQUFLLEdBQUcsQ0FBVCxDQUFaLEdBQzdCaEIsWUFBWSxDQUFDZ0IsS0FBSyxHQUFHLENBQVQsQ0FEaUIsR0FFN0JoQixZQUFZLENBQUMsQ0FBRCxDQVBpQjtBQUFBLFlBS3RCUSxNQUxzQixTQUt6QkgsQ0FMeUI7QUFBQSxZQUtYSSxNQUxXLFNBS2RGLENBTGM7O0FBUWpDNUIsVUFBRSxDQUFDK0IsWUFBSCxDQUFnQixHQUFoQjtBQUNBL0IsVUFBRSxDQUFDZ0MsSUFBSCxDQUFRSCxNQUFNLEdBQUcvQixJQUFqQixFQUF1QmdDLE1BQU0sR0FBR2hDLElBQWhDLEVBQXNDMkIsSUFBSSxHQUFHM0IsSUFBN0MsRUFBbUQ2QixJQUFJLEdBQUc3QixJQUExRDtBQUNBRSxVQUFFLENBQUNpQyxHQUFIO0FBQ0QsT0FYRDtBQVlEOztBQUVELFFBQUl6QiwrREFBSixFQUErQjtBQUM3Qk8sbUJBQWEsQ0FBQ29CLE9BQWQsQ0FBc0IsaUJBQVdHLEtBQVgsRUFBcUI7QUFBQSxZQUFsQlosQ0FBa0IsU0FBbEJBLENBQWtCO0FBQUEsWUFBZkUsQ0FBZSxTQUFmQSxDQUFlO0FBQ3pDNUIsVUFBRSxDQUFDdUIsSUFBSDs7QUFDQSxZQUFJZSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmdEMsWUFBRSxDQUFDdUMsTUFBSCxDQUFVLE1BQVY7QUFDRCxTQUZELE1BRU87QUFDTHZDLFlBQUUsQ0FBQ3VDLE1BQUgsQ0FBVSxPQUFWO0FBQ0Q7O0FBQ0R2QyxVQUFFLENBQUMrQixZQUFILENBQWdCLEVBQWhCO0FBQ0EvQixVQUFFLENBQUN3QyxLQUFILENBQVNkLENBQUMsR0FBRzVCLElBQWIsRUFBbUI4QixDQUFDLEdBQUc5QixJQUF2QjtBQUNBRSxVQUFFLENBQUNpQyxHQUFIO0FBQ0QsT0FWRDtBQVdEOztBQUNELFFBQUl6QixtRUFBSixFQUFtQztBQUNqQ1csdUJBQWlCLENBQUNnQixPQUFsQixDQUEwQixpQkFBYztBQUFBLFlBQVhULENBQVcsU0FBWEEsQ0FBVztBQUFBLFlBQVJFLENBQVEsU0FBUkEsQ0FBUTtBQUN0QzVCLFVBQUUsQ0FBQ3VCLElBQUg7QUFDQXZCLFVBQUUsQ0FBQ3VDLE1BQUgsQ0FBVSxRQUFWO0FBQ0F2QyxVQUFFLENBQUMrQixZQUFILENBQWdCLEVBQWhCO0FBQ0EvQixVQUFFLENBQUN3QyxLQUFILENBQVNkLENBQUMsR0FBRzVCLElBQWIsRUFBbUI4QixDQUFDLEdBQUc5QixJQUF2QjtBQUNBRSxVQUFFLENBQUNpQyxHQUFIO0FBQ0QsT0FORDtBQU9EO0FBQ0YsR0FyRkQ7QUFzRkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTcwMjUwMTZmZWIwZTFjNGQwNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE5Hb25WZXJ0aWNlcyB9IGZyb20gXCJDYWxjdWxhdGlvbnMvZ2V0TkdvblZlcnRpY2VzXCJcbmltcG9ydCB7IGdldExpbmVEZW5zaXR5IH0gZnJvbSBcIkNhbGN1bGF0aW9ucy9nZXRMaW5lRGVuc2l0eVwiXG5pbXBvcnQgdHlwZSB0eXBlUDUgZnJvbSBcInA1XCJcblxuaW1wb3J0IHsgR2xvYmFsVmFsdWVzIH0gZnJvbSBcIi4vZ2xvYmFsc1wiXG5pbXBvcnQgeyBnZXRKdW1wZWRQb2ludHMsIGdldFBvaW50c01hdHJpeCwgZ2V0U3ViZGl2aXNpb25NYXRyaXggfSBmcm9tIFwiLi9wd3BcIlxuXG5jb25zdCBzcGVlZCA9IDIwXG5jb25zdCBzaXplID0gMjUwXG5cbmV4cG9ydCBmdW5jdGlvbiBza2V0Y2gocDU6IHR5cGVQNSk6IHZvaWQge1xuICBwNS5zZXR1cCA9ICgpID0+IHtcbiAgICBwNS5jcmVhdGVDYW52YXMoNjAwLCA2MDApXG5cbiAgICBwNS5iYWNrZ3JvdW5kKDIyMClcbiAgICBwNS5mcmFtZVJhdGUoc3BlZWQpXG4gIH1cblxuICBsZXQgc2xvd0RyYXdDb3VudCA9IDBcbiAgbGV0IHByZXZpb3VzRHJhd1N0YXRlID0gZmFsc2VcbiAgcDUuZHJhdyA9ICgpID0+IHtcbiAgICBpZiAocHJldmlvdXNEcmF3U3RhdGUgIT09IEdsb2JhbFZhbHVlcy5zbG93RHJhdykge1xuICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICBwcmV2aW91c0RyYXdTdGF0ZSA9IEdsb2JhbFZhbHVlcy5zbG93RHJhd1xuICAgIH1cbiAgICBwNS5hbmdsZU1vZGUocDUuREVHUkVFUylcbiAgICBwNS50cmFuc2xhdGUocDUud2lkdGggLyAyLCBwNS5oZWlnaHQgLyAyKVxuICAgIHA1LnNjYWxlKDEsIC0xKVxuXG4gICAgY29uc3QgaW5pdGlhbE1hdHJpeCA9IGdldE5Hb25WZXJ0aWNlcyhHbG9iYWxWYWx1ZXMudmVydGljZXMpXG5cbiAgICBjb25zdCBqdW1wZWRNYXRyaXggPSBnZXRKdW1wZWRQb2ludHMoaW5pdGlhbE1hdHJpeCwgLi4uR2xvYmFsVmFsdWVzLmp1bXBzKVxuICAgIEdsb2JhbFZhbHVlcy5tYXRyaXggPSBqdW1wZWRNYXRyaXhcblxuICAgIGNvbnN0IHN1YmRpdmlzaW9uTWF0cml4ID0gZ2V0U3ViZGl2aXNpb25NYXRyaXgoXG4gICAgICBHbG9iYWxWYWx1ZXMuc3ViZGl2aXNpb25zLFxuICAgICAganVtcGVkTWF0cml4XG4gICAgKVxuICAgIGNvbnN0IHBvaW50c01hdHJpeCA9IGdldFBvaW50c01hdHJpeChcbiAgICAgIEdsb2JhbFZhbHVlcy52ZXJ0aWNlcyxcbiAgICAgIEdsb2JhbFZhbHVlcy5zdWJkaXZpc2lvbnMsXG4gICAgICBHbG9iYWxWYWx1ZXMucG9pbnRzLFxuICAgICAgc3ViZGl2aXNpb25NYXRyaXgsXG4gICAgICAuLi5HbG9iYWxWYWx1ZXMuanVtcHNcbiAgICApXG5cbiAgICBpZiAoR2xvYmFsVmFsdWVzLnNsb3dEcmF3KSB7XG4gICAgICBwNS5wdXNoKClcbiAgICAgIGNvbnN0IHsgeDogc3ViWCwgeTogc3ViWSB9ID0gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnRdXG4gICAgICAgID8gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnRdXG4gICAgICAgIDogcG9pbnRzTWF0cml4W3BvaW50c01hdHJpeC5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgeyB4OiBwb2ludFgsIHk6IHBvaW50WSB9ID0gcG9pbnRzTWF0cml4W3Nsb3dEcmF3Q291bnQgKyAxXVxuICAgICAgICA/IHBvaW50c01hdHJpeFtzbG93RHJhd0NvdW50ICsgMV1cbiAgICAgICAgOiBwb2ludHNNYXRyaXhbMF1cbiAgICAgIHA1LnN0cm9rZVdlaWdodCgwLjUpXG4gICAgICBwNS5saW5lKHBvaW50WCAqIHNpemUsIHBvaW50WSAqIHNpemUsIHN1YlggKiBzaXplLCBzdWJZICogc2l6ZSlcbiAgICAgIHA1LnBvcCgpXG5cbiAgICAgIHNsb3dEcmF3Q291bnQrK1xuICAgICAgaWYgKHNsb3dEcmF3Q291bnQgPT09IHBvaW50c01hdHJpeC5sZW5ndGgpIHtcbiAgICAgICAgcDUuZnJhbWVSYXRlKDApXG4gICAgICAgIHNsb3dEcmF3Q291bnQgPSAwXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHA1LmJhY2tncm91bmQoMjIwKVxuICAgICAgICAgIHA1LmZyYW1lUmF0ZShzcGVlZClcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcDUuYmFja2dyb3VuZCgyMjApXG4gICAgICBwb2ludHNNYXRyaXguZm9yRWFjaCgoXywgY291bnQpID0+IHtcbiAgICAgICAgcDUucHVzaCgpXG4gICAgICAgIGNvbnN0IHsgeDogc3ViWCwgeTogc3ViWSB9ID0gcG9pbnRzTWF0cml4W2NvdW50XVxuICAgICAgICAgID8gcG9pbnRzTWF0cml4W2NvdW50XVxuICAgICAgICAgIDogcG9pbnRzTWF0cml4W3BvaW50c01hdHJpeC5sZW5ndGggLSAxXVxuICAgICAgICBjb25zdCB7IHg6IHBvaW50WCwgeTogcG9pbnRZIH0gPSBwb2ludHNNYXRyaXhbY291bnQgKyAxXVxuICAgICAgICAgID8gcG9pbnRzTWF0cml4W2NvdW50ICsgMV1cbiAgICAgICAgICA6IHBvaW50c01hdHJpeFswXVxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoMC4yKVxuICAgICAgICBwNS5saW5lKHBvaW50WCAqIHNpemUsIHBvaW50WSAqIHNpemUsIHN1YlggKiBzaXplLCBzdWJZICogc2l6ZSlcbiAgICAgICAgcDUucG9wKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKEdsb2JhbFZhbHVlcy5zaG93VmVydGljZXMpIHtcbiAgICAgIGluaXRpYWxNYXRyaXguZm9yRWFjaCgoeyB4LCB5IH0sIGluZGV4KSA9PiB7XG4gICAgICAgIHA1LnB1c2goKVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBwNS5zdHJva2UoXCJibHVlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcDUuc3Ryb2tlKFwiZ3JlZW5cIilcbiAgICAgICAgfVxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoMTUpXG4gICAgICAgIHA1LnBvaW50KHggKiBzaXplLCB5ICogc2l6ZSlcbiAgICAgICAgcDUucG9wKClcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChHbG9iYWxWYWx1ZXMuc2hvd1N1YmRpdmlzaW9ucykge1xuICAgICAgc3ViZGl2aXNpb25NYXRyaXguZm9yRWFjaCgoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgcDUucHVzaCgpXG4gICAgICAgIHA1LnN0cm9rZShcInB1cnBsZVwiKVxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoMTApXG4gICAgICAgIHA1LnBvaW50KHggKiBzaXplLCB5ICogc2l6ZSlcbiAgICAgICAgcDUucG9wKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9