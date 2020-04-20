webpackHotUpdate("static/development/pages/cast/person/[id].js",{

/***/ "./pages/cast/person/[id].js":
/*!***********************************!*\
  !*** ./pages/cast/person/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/person/[id].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Person = function Person(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3120417326" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3120417326" + " " + "personInfo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.personData.name), __jsx("div", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, " ", props.personData.birthday ? __jsx("h3", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 52
    }
  }, "Born: ", props.personData.birthday, ", ", props.personData.country.name) : __jsx("div", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 130
    }
  }), " "), __jsx("div", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, props.personData.deathday ? __jsx("h3", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 51
    }
  }, "Dead: ", props.personData.deathday) : __jsx("div", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "jsx-3120417326" + " " + "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.personData.image ? __jsx("img", {
    src: props.personData.image.original,
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 43
    }
  }) : __jsx("div", {
    className: "jsx-3120417326",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 91
    }
  })), __jsx("ul", {
    className: "jsx-3120417326" + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, props.actorData.map(function (show) {
    return __jsx("li", {
      key: show._embedded.show.id,
      className: "jsx-3120417326",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "jsx-3120417326" + " " + "showInfo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "jsx-3120417326",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, show._embedded.show.name, " (", show._embedded.show.network ? show._embedded.show.network.name : show._embedded.show.webChannel.name, ")"), __jsx("h4", {
      className: "jsx-3120417326",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, show._embedded.show.genres.join(" / ")), __jsx("p", {
      className: "jsx-3120417326",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, show._embedded.show.summary.substring(3, show._embedded.show.summary.length - 4).replace(/<[^>]*>?/gm, ''))), __jsx("div", {
      className: "jsx-3120417326" + " " + "showImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, show._embedded.show.image ? __jsx("img", {
      src: show._embedded.show.image.original,
      className: "jsx-3120417326",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 79
      }
    }) : __jsx("div", {
      className: "jsx-3120417326",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 130
      }
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3120417326",
    __self: _this
  }, ".container.jsx-3120417326{padding-top:25px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:35vh 40vh 20vh 19vh;margin-left:6%;margin-right:6%;}.personInfo.jsx-3120417326{grid-column-start:1;grid-column-end:3;grid-row-start:1;grid-row-end:2;padding:10%;width:40vw;}.img.jsx-3120417326{grid-column-start:3;grid-column-end:5;grid-row-start:1;grid-row-end:2;justify-self:right;margin-top:20px;}.img.jsx-3120417326 img.jsx-3120417326{object-fit:cover;max-height:100%;}.list.jsx-3120417326{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:5;}li.jsx-3120417326{list-style-type:none;height:50vh;padding-left:2vw;border:1px solid #DDD;}.showImg.jsx-3120417326 img.jsx-3120417326{object-fit:cover;max-height:50vh;float:right;}.showInfo.jsx-3120417326{float:left;width:65vw;}@media (max-width:800px){.characterImg.jsx-3120417326 img.jsx-3120417326{object-fit:cover;max-height:5vh;}.container.jsx-3120417326{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:18vh 25vh 20vh 19vh;margin-left:9%;margin-right:9%;font-size:7px;}.img.jsx-3120417326{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2;}.list.jsx-3120417326{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:5;margin-left:-9vw;margin-right:-1vw;}li.jsx-3120417326{list-style-type:none;height:30vh;text-align:left;margin-bottom:25px;}.showInfo.jsx-3120417326{width:22vh;}.showImg.jsx-3120417326 img.jsx-3120417326{max-height:30vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9tYWQtbWVuLWJsb2cvcGFnZXMvY2FzdC9wZXJzb24vW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ29CLEFBRzhCLEFBVUcsQUFRQSxBQVFILEFBSUcsQUFNQyxBQU1KLEFBS04sQUFLVSxBQUlBLEFBV0csQUFPQSxBQVFDLEFBTzFCLEFBRXFCLFdBMUN6QixBQXdDSyxLQUdBLENBM0Z3QixBQTBCVCxBQWdCQSxBQVVHLEFBSVUsR0E5Q1YsQUFRSSxBQVlKLEFBcUNJLEFBT0EsQ0F0Q1YsQUE4Q0ksQ0FsQ3BCLFVBS0EsQ0ExQkosQUFVNkIsQUFNVixBQXdDUyxLQXhFSCxBQVFJLEFBWUosQUFxQ0ksQUFPQSxPQS9CN0IsSUF3QytCLENBOUNHLEtBMUJYLEFBUUksQUFZSixBQXFDSSxBQU9BLGFBU25CLEVBeEVZLEFBUVcsQUFZM0IsQUFzQ0ksQUFNcUIsRUF0Q3pCLFVBekJlLEtBZ0VXLEVBeERGLElBUHZCLFlBUUQsQUF3REksZUE5RXNCLEFBd0RJLCtFQXZEYixBQXdESSxhQXZEMEIsQUF3REksMENBdkRSLEFBd0RJLHVDQXZENUIsQUF3REksZUF2REgsQUF3REksZ0JBdkR2QixBQXdEcUIsY0FDakIiLCJmaWxlIjoiL1VzZXJzL2FuZHJlc21hcnRpbi9Eb2N1bWVudHMvQ29kaW5nL21hZC1tZW4tYmxvZy9wYWdlcy9jYXN0L3BlcnNvbi9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQZXJzb24gPSBwcm9wcyA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJzb25JbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy5wZXJzb25EYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PiB7cHJvcHMucGVyc29uRGF0YS5iaXJ0aGRheSA/IDxoMz5Cb3JuOiB7cHJvcHMucGVyc29uRGF0YS5iaXJ0aGRheX0sIHtwcm9wcy5wZXJzb25EYXRhLmNvdW50cnkubmFtZX08L2gzPiA6IDxkaXYgLz59IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLnBlcnNvbkRhdGEuZGVhdGhkYXkgPyA8aDM+RGVhZDoge3Byb3BzLnBlcnNvbkRhdGEuZGVhdGhkYXl9PC9oMz4gOiA8ZGl2IC8+fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMucGVyc29uRGF0YS5pbWFnZSA/IDxpbWcgc3JjPXtwcm9wcy5wZXJzb25EYXRhLmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hY3RvckRhdGEubWFwKHNob3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93Ll9lbWJlZGRlZC5zaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Nob3cuX2VtYmVkZGVkLnNob3cubmFtZX0gKHtzaG93Ll9lbWJlZGRlZC5zaG93Lm5ldHdvcmsgPyBzaG93Ll9lbWJlZGRlZC5zaG93Lm5ldHdvcmsubmFtZSA6IHNob3cuX2VtYmVkZGVkLnNob3cud2ViQ2hhbm5lbC5uYW1lfSk8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntzaG93Ll9lbWJlZGRlZC5zaG93LmdlbnJlcy5qb2luKFwiIC8gXCIpfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Nob3cuX2VtYmVkZGVkLnNob3cuc3VtbWFyeS5zdWJzdHJpbmcoMywgc2hvdy5fZW1iZWRkZWQuc2hvdy5zdW1tYXJ5Lmxlbmd0aCAtIDQpLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dJbWdcIj57c2hvdy5fZW1iZWRkZWQuc2hvdy5pbWFnZSA/IDxpbWcgc3JjPXtzaG93Ll9lbWJlZGRlZC5zaG93LmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7ICAgXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDIwdncgMjB2dyAyMHZ3IDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzV2aCA0MHZoIDIwdmggMTl2aDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2JTsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlOyAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgLnBlcnNvbkluZm8ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICAgfVxuICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTsgICAgICAgICBcbiAgICB9XG4gICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogNTB2aDsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAydnc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICAgICAgfVxuICAgICAgICAuc2hvd0ltZyBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7IFxuICAgICAgICAgICBmbG9hdDogcmlnaHQ7ICAgICAgXG4gICAgfVxuICAgICAgICAuc2hvd0luZm8ge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogNjV2d1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XG4gICAgICAgICAgICAuY2hhcmFjdGVySW1nIGltZyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1dmg7ICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDsgICBcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgMjB2dyAyMHZ3IDIwdncgO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTh2aCAyNXZoIDIwdmggMTl2aDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOSU7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOSU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3cHg7ICAgICBcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXZ3OyAgICBcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvd0luZm8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnZoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvd0ltZyBpbWcge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwdmg7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cblBlcnNvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgICBjb25zdCBbcGVyc29uRGF0YSwgYWN0b3JEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vcGVvcGxlLyR7aWR9YCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vcGVvcGxlLyR7aWR9L2Nhc3RjcmVkaXRzP2VtYmVkPXNob3dgKS50aGVuKHIgPT4gci5qc29uKCkpLFxuXG4gICAgXSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBlcnNvbkRhdGEsIGFjdG9yRGF0YSxcblxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJzb247Il19 */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/person/[id].js */"));
};

Person.getInitialProps = function _callee(context) {
  var id, _await$Promise$all, _await$Promise$all2, personData, actorData;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/people/".concat(id)).then(function (r) {
            return r.json();
          }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/people/".concat(id, "/castcredits?embed=show")).then(function (r) {
            return r.json();
          })]));

        case 3:
          _await$Promise$all = _context.sent;
          _await$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$Promise$all, 2);
          personData = _await$Promise$all2[0];
          actorData = _await$Promise$all2[1];
          return _context.abrupt("return", {
            personData: personData,
            actorData: actorData
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ })

})
//# sourceMappingURL=[id].js.e6d94a2da113777d3156.hot-update.js.map