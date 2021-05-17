self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pwp.ts":
/*!********************!*\
  !*** ./src/pwp.ts ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJumpedPoints": function() { return /* binding */ getJumpedPoints; },
/* harmony export */   "getSubdivisionMatrix": function() { return /* binding */ getSubdivisionMatrix; },
/* harmony export */   "getPointsMatrix": function() { return /* binding */ getPointsMatrix; }
/* harmony export */ });
/* harmony import */ var _home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function getJumpedPoints(initialVertices) {
  for (var _len = arguments.length, jumps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    jumps[_key - 1] = arguments[_key];
  }

  if (jumps.length !== 0) {
    var lastValue = 0;

    var jumpedMatrix = (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(initialVertices.length * jumps.length)).map(function (_, index) {
      var currentJump = index % jumps.length;
      var newValue = jumps[currentJump] + lastValue;
      lastValue = newValue;
      return initialVertices[newValue % initialVertices.length];
    });

    jumpedMatrix.push(jumpedMatrix.shift());
    return jumpedMatrix;
  } else {
    return initialVertices;
  }
}
function getSubdivisionMatrix(subdivisions, matrix) {
  return matrix.map(function (_, index, passedMatrix) {
    var startY = passedMatrix[index].y;
    var endY = passedMatrix[index + 1] ? passedMatrix[index + 1].y : passedMatrix[0].y;
    var startX = passedMatrix[index].x;
    var endX = passedMatrix[index + 1] ? passedMatrix[index + 1].x : passedMatrix[0].x;
    return (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(subdivisions)).map(function (_, index) {
      var partOfSubdivision = index;
      var y = (1 - partOfSubdivision / subdivisions) * startY + partOfSubdivision / subdivisions * endY;
      var x = (1 - partOfSubdivision / subdivisions) * startX + partOfSubdivision / subdivisions * endX;
      return {
        x: x,
        y: y
      };
    });
  }).flat();
}
function getPointsMatrix(vertices, subdivisions, points, subdivisionMatrix) {
  var totalPoints = vertices * subdivisions;

  if ((arguments.length <= 4 ? 0 : arguments.length - 4) !== 0) {
    totalPoints = (arguments.length <= 4 ? 0 : arguments.length - 4) * vertices * subdivisions;
  }

  return (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(totalPoints)).map(function (_, index) {
    return subdivisionMatrix[index * points % totalPoints];
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B3cC50cyJdLCJuYW1lcyI6WyJnZXRKdW1wZWRQb2ludHMiLCJpbml0aWFsVmVydGljZXMiLCJqdW1wcyIsImxlbmd0aCIsImxhc3RWYWx1ZSIsImp1bXBlZE1hdHJpeCIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiY3VycmVudEp1bXAiLCJuZXdWYWx1ZSIsInB1c2giLCJzaGlmdCIsImdldFN1YmRpdmlzaW9uTWF0cml4Iiwic3ViZGl2aXNpb25zIiwibWF0cml4IiwicGFzc2VkTWF0cml4Iiwic3RhcnRZIiwieSIsImVuZFkiLCJzdGFydFgiLCJ4IiwiZW5kWCIsInBhcnRPZlN1YmRpdmlzaW9uIiwiZmxhdCIsImdldFBvaW50c01hdHJpeCIsInZlcnRpY2VzIiwicG9pbnRzIiwic3ViZGl2aXNpb25NYXRyaXgiLCJ0b3RhbFBvaW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS08sU0FBU0EsZUFBVCxDQUNMQyxlQURLLEVBR2E7QUFBQSxvQ0FEZkMsS0FDZTtBQURmQSxTQUNlO0FBQUE7O0FBQ2xCLE1BQUlBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixRQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLGtKQUFJQyxLQUFLLENBQUNMLGVBQWUsQ0FBQ0UsTUFBaEIsR0FBeUJELEtBQUssQ0FBQ0MsTUFBaEMsQ0FBVCxFQUFrREksR0FBbEQsQ0FDbkIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDWixVQUFNQyxXQUFXLEdBQUdELEtBQUssR0FBR1AsS0FBSyxDQUFDQyxNQUFsQztBQUNBLFVBQU1RLFFBQVEsR0FBR1QsS0FBSyxDQUFDUSxXQUFELENBQUwsR0FBcUJOLFNBQXRDO0FBRUFBLGVBQVMsR0FBR08sUUFBWjtBQUNBLGFBQU9WLGVBQWUsQ0FBQ1UsUUFBUSxHQUFHVixlQUFlLENBQUNFLE1BQTVCLENBQXRCO0FBQ0QsS0FQa0IsQ0FBckI7O0FBVUFFLGdCQUFZLENBQUNPLElBQWIsQ0FBa0JQLFlBQVksQ0FBQ1EsS0FBYixFQUFsQjtBQUNBLFdBQU9SLFlBQVA7QUFDRCxHQWRELE1BY087QUFDTCxXQUFPSixlQUFQO0FBQ0Q7QUFDRjtBQUVNLFNBQVNhLG9CQUFULENBQ0xDLFlBREssRUFFTEMsTUFGSyxFQUdhO0FBQ2xCLFNBQU9BLE1BQU0sQ0FDVlQsR0FESSxDQUNBLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFXUSxZQUFYLEVBQTRCO0FBQy9CLFFBQU1DLE1BQU0sR0FBR0QsWUFBWSxDQUFDUixLQUFELENBQVosQ0FBb0JVLENBQW5DO0FBQ0EsUUFBTUMsSUFBSSxHQUFHSCxZQUFZLENBQUNSLEtBQUssR0FBRyxDQUFULENBQVosR0FDVFEsWUFBWSxDQUFDUixLQUFLLEdBQUcsQ0FBVCxDQUFaLENBQXdCVSxDQURmLEdBRVRGLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JFLENBRnBCO0FBR0EsUUFBTUUsTUFBTSxHQUFHSixZQUFZLENBQUNSLEtBQUQsQ0FBWixDQUFvQmEsQ0FBbkM7QUFDQSxRQUFNQyxJQUFJLEdBQUdOLFlBQVksQ0FBQ1IsS0FBSyxHQUFHLENBQVQsQ0FBWixHQUNUUSxZQUFZLENBQUNSLEtBQUssR0FBRyxDQUFULENBQVosQ0FBd0JhLENBRGYsR0FFVEwsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQkssQ0FGcEI7QUFJQSxXQUFPLGtKQUFJaEIsS0FBSyxDQUFDUyxZQUFELENBQVQsRUFBeUJSLEdBQXpCLENBQTZCLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ2hELFVBQU1lLGlCQUFpQixHQUFHZixLQUExQjtBQUNBLFVBQU1VLENBQUMsR0FDTCxDQUFDLElBQUlLLGlCQUFpQixHQUFHVCxZQUF6QixJQUF5Q0csTUFBekMsR0FDQ00saUJBQWlCLEdBQUdULFlBQXJCLEdBQXFDSyxJQUZ2QztBQUlBLFVBQU1FLENBQUMsR0FDTCxDQUFDLElBQUlFLGlCQUFpQixHQUFHVCxZQUF6QixJQUF5Q00sTUFBekMsR0FDQ0csaUJBQWlCLEdBQUdULFlBQXJCLEdBQXFDUSxJQUZ2QztBQUlBLGFBQU87QUFBRUQsU0FBQyxFQUFEQSxDQUFGO0FBQUtILFNBQUMsRUFBREE7QUFBTCxPQUFQO0FBQ0QsS0FYTSxDQUFQO0FBWUQsR0F2QkksRUF3QkpNLElBeEJJLEVBQVA7QUF5QkQ7QUFFTSxTQUFTQyxlQUFULENBQ0xDLFFBREssRUFFTFosWUFGSyxFQUdMYSxNQUhLLEVBSUxDLGlCQUpLLEVBTWE7QUFDbEIsTUFBSUMsV0FBVyxHQUFHSCxRQUFRLEdBQUdaLFlBQTdCOztBQUNBLE1BQUksdURBQWlCLENBQXJCLEVBQXdCO0FBQ3RCZSxlQUFXLEdBQUcscURBQWVILFFBQWYsR0FBMEJaLFlBQXhDO0FBQ0Q7O0FBRUQsU0FBTyxrSkFBSVQsS0FBSyxDQUFDd0IsV0FBRCxDQUFULEVBQXdCdkIsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDL0MsV0FBT29CLGlCQUFpQixDQUFFcEIsS0FBSyxHQUFHbUIsTUFBVCxHQUFtQkUsV0FBcEIsQ0FBeEI7QUFDRCxHQUZNLENBQVA7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTNlMTU0NzAyNDJiMjU3YzdlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIHZlcnRpY2VzTWF0cml4IHtcbiAgeDogbnVtYmVyXG4gIHk6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SnVtcGVkUG9pbnRzKFxuICBpbml0aWFsVmVydGljZXM6IHZlcnRpY2VzTWF0cml4W10sXG4gIC4uLmp1bXBzOiBudW1iZXJbXVxuKTogdmVydGljZXNNYXRyaXhbXSB7XG4gIGlmIChqdW1wcy5sZW5ndGggIT09IDApIHtcbiAgICBsZXQgbGFzdFZhbHVlID0gMFxuICAgIGNvbnN0IGp1bXBlZE1hdHJpeCA9IFsuLi5BcnJheShpbml0aWFsVmVydGljZXMubGVuZ3RoICoganVtcHMubGVuZ3RoKV0ubWFwKFxuICAgICAgKF8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRKdW1wID0gaW5kZXggJSBqdW1wcy5sZW5ndGhcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBqdW1wc1tjdXJyZW50SnVtcF0gKyBsYXN0VmFsdWVcblxuICAgICAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICByZXR1cm4gaW5pdGlhbFZlcnRpY2VzW25ld1ZhbHVlICUgaW5pdGlhbFZlcnRpY2VzLmxlbmd0aF1cbiAgICAgIH1cbiAgICApXG5cbiAgICBqdW1wZWRNYXRyaXgucHVzaChqdW1wZWRNYXRyaXguc2hpZnQoKSBhcyB2ZXJ0aWNlc01hdHJpeClcbiAgICByZXR1cm4ganVtcGVkTWF0cml4XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0aWNlc1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJkaXZpc2lvbk1hdHJpeChcbiAgc3ViZGl2aXNpb25zOiBudW1iZXIsXG4gIG1hdHJpeDogdmVydGljZXNNYXRyaXhbXVxuKTogdmVydGljZXNNYXRyaXhbXSB7XG4gIHJldHVybiBtYXRyaXhcbiAgICAubWFwKChfLCBpbmRleCwgcGFzc2VkTWF0cml4KSA9PiB7XG4gICAgICBjb25zdCBzdGFydFkgPSBwYXNzZWRNYXRyaXhbaW5kZXhdLnlcbiAgICAgIGNvbnN0IGVuZFkgPSBwYXNzZWRNYXRyaXhbaW5kZXggKyAxXVxuICAgICAgICA/IHBhc3NlZE1hdHJpeFtpbmRleCArIDFdLnlcbiAgICAgICAgOiBwYXNzZWRNYXRyaXhbMF0ueVxuICAgICAgY29uc3Qgc3RhcnRYID0gcGFzc2VkTWF0cml4W2luZGV4XS54XG4gICAgICBjb25zdCBlbmRYID0gcGFzc2VkTWF0cml4W2luZGV4ICsgMV1cbiAgICAgICAgPyBwYXNzZWRNYXRyaXhbaW5kZXggKyAxXS54XG4gICAgICAgIDogcGFzc2VkTWF0cml4WzBdLnhcblxuICAgICAgcmV0dXJuIFsuLi5BcnJheShzdWJkaXZpc2lvbnMpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRPZlN1YmRpdmlzaW9uID0gaW5kZXhcbiAgICAgICAgY29uc3QgeSA9XG4gICAgICAgICAgKDEgLSBwYXJ0T2ZTdWJkaXZpc2lvbiAvIHN1YmRpdmlzaW9ucykgKiBzdGFydFkgK1xuICAgICAgICAgIChwYXJ0T2ZTdWJkaXZpc2lvbiAvIHN1YmRpdmlzaW9ucykgKiBlbmRZXG5cbiAgICAgICAgY29uc3QgeCA9XG4gICAgICAgICAgKDEgLSBwYXJ0T2ZTdWJkaXZpc2lvbiAvIHN1YmRpdmlzaW9ucykgKiBzdGFydFggK1xuICAgICAgICAgIChwYXJ0T2ZTdWJkaXZpc2lvbiAvIHN1YmRpdmlzaW9ucykgKiBlbmRYXG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgLmZsYXQoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRzTWF0cml4KFxuICB2ZXJ0aWNlczogbnVtYmVyLFxuICBzdWJkaXZpc2lvbnM6IG51bWJlcixcbiAgcG9pbnRzOiBudW1iZXIsXG4gIHN1YmRpdmlzaW9uTWF0cml4OiB2ZXJ0aWNlc01hdHJpeFtdLFxuICAuLi5qdW1wczogbnVtYmVyW11cbik6IHZlcnRpY2VzTWF0cml4W10ge1xuICBsZXQgdG90YWxQb2ludHMgPSB2ZXJ0aWNlcyAqIHN1YmRpdmlzaW9uc1xuICBpZiAoanVtcHMubGVuZ3RoICE9PSAwKSB7XG4gICAgdG90YWxQb2ludHMgPSBqdW1wcy5sZW5ndGggKiB2ZXJ0aWNlcyAqIHN1YmRpdmlzaW9uc1xuICB9XG5cbiAgcmV0dXJuIFsuLi5BcnJheSh0b3RhbFBvaW50cyldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gc3ViZGl2aXNpb25NYXRyaXhbKGluZGV4ICogcG9pbnRzKSAlIHRvdGFsUG9pbnRzXVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==