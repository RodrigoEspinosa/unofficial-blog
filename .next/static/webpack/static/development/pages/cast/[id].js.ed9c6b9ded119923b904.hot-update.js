webpackHotUpdate("static/development/pages/cast/[id].js",{

/***/ "./pages/cast/[id].js":
/*!****************************!*\
  !*** ./pages/cast/[id].js ***!
  \****************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/[id].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Cast = function Cast(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1764672427" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1764672427" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.show.name, "'s Unofficial Blog"), __jsx("ul", {
    className: "jsx-1764672427" + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1764672427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Cast"), props.cast.map(function (person) {
    return __jsx("li", {
      key: person.person.id,
      className: "jsx-1764672427",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/cast/person/[id]",
      as: "/cast/person/".concat(person.person.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "jsx-1764672427",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }
    }, person.person.name, "........", person.character.name)), __jsx("div", {
      className: "jsx-1764672427" + " " + "characterImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, person.person.image ? __jsx("img", {
      src: person.person.image.original,
      className: "jsx-1764672427",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 78
      }
    }) : __jsx("div", {
      className: "jsx-1764672427",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 123
      }
    })));
  })), __jsx("div", {
    className: "jsx-1764672427" + " " + "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, props.show.image ? __jsx("img", {
    src: props.show.image.original,
    className: "jsx-1764672427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 54
    }
  }) : __jsx("div", {
    className: "jsx-1764672427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 96
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1764672427",
    __self: _this
  }, ".characterImg img{object-fit:cover;max-height:10vh;}.title{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0px;}.list{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:5;margin:0;padding:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}li{list-style-type:none;height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:2vw;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border:1px solid #DDD;text-align:left;}.img{grid-column-start:3;grid-column-end:5;grid-row-start:2;grid-row-end:5;justify-self:center;margin-left:2vw;margin-top:8.2vh;}.img img{object-fit:cover;max-height:100%;max-width:100%;}.container{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:7vw 35vw 20vw 20vw;grid-template-rows:10vh 40vh 40vh 25vh;margin-left:6%;margin-right:6%;}@media (max-width:800px){Layout{font-size:10px;}.characterImg img{object-fit:cover;max-height:5vh;}.container{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:8vh 25vh 20vh 19vh;margin-left:9%;margin-right:9%;font-size:9px;}.img{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:3;justify-self:center;margin:0;}.list{grid-column-start:1;grid-column-end:5;grid-row-start:3;grid-row-end:5;}li{list-style-type:none;height:5vh;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9tYWQtbWVuLWJsb2cvcGFnZXMvY2FzdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCMkIsQUFJOEIsQUFJRyxBQVVBLEFBWUMsQUFVRCxBQVVILEFBTUEsQUFXRSxBQUdFLEFBSUEsQUFXRyxBQVFBLEFBTUMsZUEvQnpCLEVBL0RlLEFBOENBLEFBTVMsQUFjTixBQUlVLEdBbEVWLEFBVUEsQUFzQkksQUE2Q0EsQUFRQSxDQS9ETixBQXFFRCxXQTVCbkIsQUE2QndCLENBL0Y1QixBQTBCeUIsQUFvQkgsS0ExQ0csQUFVQSxBQXNCSSxBQTZDQSxBQVFBLFVBekM3QixBQWdEUSxPQTNGZSxBQVVBLEFBc0JJLEFBNkNBLEFBUUEsZUFwRk4sQUFVSixBQXNCZSxBQTZDQSxBQVF4QixTQTFFYyxVQUNTLENBcUJILEFBNkNQLFNBQ2IsT0E3Q3FCLENBYkUsYUF5QkQsQUFrQkksR0E1QjlCLHFCQW5DdUIsc0NBWVEsaUJBa0NkLEFBa0JJLENBM0NJLFlBMEJxQixBQWtCSyxLQTNDYixvQkFyQlgsZ0JBK0NnQixDQWtCRywyQkFuRC9DLFdBa0NvQixBQWtCSSxPQXBEdkIsUUFtQ29CLEFBa0JJLGdCQWpCdkIsQUFrQnFCLFNBOUNRLElBckJSLENBb0VqQixpQkFuRUwsQUFxQndCLGdCQUN4QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVzbWFydGluL0RvY3VtZW50cy9Db2RpbmcvbWFkLW1lbi1ibG9nL3BhZ2VzL2Nhc3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cblxuY29uc3QgQ2FzdCA9IHByb3BzID0+IChcblxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuc2hvdy5uYW1lfSdzIFVub2ZmaWNpYWwgQmxvZzwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxoMj5DYXN0PC9oMj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2FzdC5tYXAocGVyc29uID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGVyc29uLnBlcnNvbi5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXN0L3BlcnNvbi9baWRdXCIgYXM9e2AvY2FzdC9wZXJzb24vJHtwZXJzb24ucGVyc29uLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwZXJzb24ucGVyc29uLm5hbWV9Li4uLi4uLi57cGVyc29uLmNoYXJhY3Rlci5uYW1lfTwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJJbWdcIj57cGVyc29uLnBlcnNvbi5pbWFnZSA/IDxpbWcgc3JjPXtwZXJzb24ucGVyc29uLmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj57cHJvcHMuc2hvdy5pbWFnZSA/IDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiXG4gICAgICAgICAgICBnbG9iYWw9XCJ0cnVlXCI+e2BcblxuICAgICAgICAuY2hhcmFjdGVySW1nIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgbWF4LWhlaWdodDogMTB2aDsgICAgICAgICBcbiAgICB9XG4gICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOC4ydmg7XG5cbiAgICAgICAgfVxuICAgICAgICAuaW1nIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTsgXG4gICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDsgICBcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7ICAgICBcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDd2dyAzNXZ3IDIwdncgMjB2dyA7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNDB2aCA0MHZoIDI1dmg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNiU7IFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2JTsgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XG4gICAgICAgICAgICBMYXlvdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFyYWN0ZXJJbWcgaW1nIHtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDV2aDsgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoOyAgIFxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7ICAgICBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyAyMHZ3IDIwdncgMjB2dyA7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggMjV2aCAyMHZoIDE5dmg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDklOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDklO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4OyAgICAgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDU7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDV2aDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbik7XG5cbkNhc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnN0IFtzaG93LCBkYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfS9jYXN0YCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICBdKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3csXG4gICAgICAgIGNhc3Q6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5KVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0OyJdfQ== */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/[id].js */"));
};

Cast.getInitialProps = function _callee(context) {
  var id, _await$Promise$all, _await$Promise$all2, show, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.tvmaze.com/shows/".concat(id)).then(function (r) {
            return r.json();
          }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.tvmaze.com/shows/".concat(id, "/cast")).then(function (r) {
            return r.json();
          })]));

        case 3:
          _await$Promise$all = _context.sent;
          _await$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$Promise$all, 2);
          show = _await$Promise$all2[0];
          data = _await$Promise$all2[1];
          return _context.abrupt("return", {
            show: show,
            cast: data.map(function (entry) {
              return entry;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Cast);

/***/ })

})
//# sourceMappingURL=[id].js.ed9c6b9ded119923b904.hot-update.js.map