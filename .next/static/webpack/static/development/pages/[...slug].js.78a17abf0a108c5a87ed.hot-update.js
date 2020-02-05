webpackHotUpdate("static/development/pages/[...slug].js",{

/***/ "./components/table/index.js":
/*!***********************************!*\
  !*** ./components/table/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");

var _jsxFileName = "/home/rubenberna/code/Redcarrots/BossData/SEO_shell/components/table/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var SeoTable = function SeoTable(_ref) {
  var slug = _ref.slug;

  // useEffect(() => fetchTableContent(slug), [slug])
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tableList = _useState[0],
      setTableList = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var params = slug.split('/');
    var category = params[1];

    function fetchTableContent(slug) {
      var tableContent, data, filteredList, shortList;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchTableContent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3000/api/content'));

            case 2:
              tableContent = _context.sent;
              data = tableContent.data;
              filteredList = data.filter(function (t) {
                return t.Breadcrumb1 === category;
              });
              shortList = filteredList.splice(0, 200).sort();
              setTableList(shortList);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    fetchTableContent(slug), [slug, tableList];
  });

  var renderTable = function renderTable() {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
      striped: true,
      bordered: true,
      hover: true,
      responsive: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "#"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "URL"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "1st Category"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "City"))), renderTableBody());
  };

  var renderLastCategory = function renderLastCategory(item) {
    var lastCategory = item.Breadcrumb3category ? item.Breadcrumb3category : item.Breadcrumb2category ? item.Breadcrumb2category : item.Breadcrumb1category;
    var proper = lastCategory.replace(/-/g, " ").charAt(0).toUpperCase() + lastCategory.replace(/-/g, " ").slice(1);
    return proper;
  };

  var renderTableBody = function renderTableBody() {
    return tableList.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: i,
        href: "/".concat(slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, i), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, t.URL), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, renderLastCategory(t)), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, t.CityPostalcode))));
    });
  };

  return renderTable();
};

/* harmony default export */ __webpack_exports__["default"] = (SeoTable);

/***/ })

})
//# sourceMappingURL=[...slug].js.78a17abf0a108c5a87ed.hot-update.js.map