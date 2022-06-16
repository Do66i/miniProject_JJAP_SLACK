"use strict";
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["pages_Login_index_tsx"],{

/***/ "./pages/Login/index.tsx":
/*!*******************************!*\
  !*** ./pages/Login/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var LogIn = function LogIn() {
  _s2();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dedupingInterval: 100000
  }),
      data = _useSWR.data,
      error = _useSWR.error,
      mutate = _useSWR.mutate; //로그인 후에 데이터를 전해줄 API


  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput4 = _slicedToArray(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      logInError = _useState2[0],
      setLogInError = _useState2[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (data) {
      navigate('/workspace/sleact/channel/일반');
      return;
    } // 로그인전일때 data=false(api문서 참고)니까 실행안되고 패스됨
    //로그인되면 if문에서 걸림 리턴값나옴

  }, [data]);
  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    e.preventDefault();
    setLogInError(false);
    axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/users/login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    }).then(function (response) {
      mutate(response.data); // OPTIMISTIC UI

      console.log('로그인 성공띠', data);
    }).catch(function (err) {
      console.log('ㅋ 루저', err.response.data);
    }).finally(function () {});
  }, [email, password]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Header, null, "JJAP SLACK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Label, {
    id: "email-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    autoComplete: "false",
    type: "email",
    id: "email",
    value: email,
    onChange: onChangeEmail
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Label, {
    id: "password-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    autoComplete: "false",
    type: "password",
    id: "password",
    value: password,
    onChange: onChangePassword
  })), logInError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Error, null, "\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638 \uB458 \uC911 \uD558\uB098 \uD2C0\uB9BC \uC785.\uAD6C.\uCEF7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "submit"
  }, "\uB85C\uADF8\uC778")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, null, "\uC544\uC9C1 \uC2DD\uAD6C\uAC00 \uC544\uB2CC\uAC00\uBD10\uC694?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/signup"
  }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uB7EC\uAC00\uAE30")));
};

_s2(LogIn, "GCjkJaJ9hr2+Qy5kUr5fGOKzeH4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate];
});

_c = LogIn;
/* harmony default export */ __webpack_exports__["default"] = (LogIn);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogIn");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNfTG9naW5faW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWlCLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07RUFBQTs7RUFDbEIsY0FBZ0NGLCtDQUFNLENBQUMsWUFBRCxFQUFlQyxzREFBZixFQUF3QjtJQUFFRSxnQkFBZ0IsRUFBRTtFQUFwQixDQUF4QixDQUF0QztFQUFBLElBQVFDLElBQVIsV0FBUUEsSUFBUjtFQUFBLElBQWNDLEtBQWQsV0FBY0EsS0FBZDtFQUFBLElBQXFCQyxNQUFyQixXQUFxQkEsTUFBckIsQ0FEa0IsQ0FDMkU7OztFQUM3RixnQkFBK0JyQiwyREFBUSxDQUFDLEVBQUQsQ0FBdkM7RUFBQTtFQUFBLElBQU9zQixLQUFQO0VBQUEsSUFBY0MsYUFBZDs7RUFDQSxpQkFBcUN2QiwyREFBUSxDQUFDLEVBQUQsQ0FBN0M7RUFBQTtFQUFBLElBQU93QixRQUFQO0VBQUEsSUFBaUJDLGdCQUFqQjs7RUFDQSxnQkFBb0NyQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7RUFBQTtFQUFBLElBQU9zQixVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUVBLElBQU1DLFFBQVEsR0FBR3RCLDZEQUFXLEVBQTVCO0VBRUFILGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlnQixJQUFKLEVBQVU7TUFDUlMsUUFBUSxDQUFDLDhCQUFELENBQVI7TUFDQTtJQUNELENBSmEsQ0FLZDtJQUNBOztFQUNELENBUFEsRUFPTixDQUFDVCxJQUFELENBUE0sQ0FBVDtFQVNBLElBQU1VLFFBQVEsR0FBRzNCLGtEQUFXLENBQzFCLFVBQUM0QixDQUFELEVBQVk7SUFDVkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FKLGFBQWEsQ0FBQyxLQUFELENBQWI7SUFDQXBCLGlEQUFBLENBRUksa0JBRkosRUFHSTtNQUFFZSxLQUFLLEVBQUxBLEtBQUY7TUFBU0UsUUFBUSxFQUFSQTtJQUFULENBSEosRUFJSTtNQUNFUyxlQUFlLEVBQUU7SUFEbkIsQ0FKSixFQVFHQyxJQVJILENBUVEsVUFBQ0MsUUFBRCxFQUFjO01BQ2xCZCxNQUFNLENBQUNjLFFBQVEsQ0FBQ2hCLElBQVYsQ0FBTixDQURrQixDQUNLOztNQUN2QmlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJsQixJQUF2QjtJQUNELENBWEgsRUFZR21CLEtBWkgsQ0FZUyxVQUFDQyxHQUFELEVBQVM7TUFDZEgsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkUsR0FBRyxDQUFDSixRQUFKLENBQWFoQixJQUFqQztJQUNELENBZEgsRUFlR3FCLE9BZkgsQ0FlVyxZQUFNLENBQUUsQ0FmbkI7RUFnQkQsQ0FwQnlCLEVBcUIxQixDQUFDbEIsS0FBRCxFQUFRRSxRQUFSLENBckIwQixDQUE1QjtFQXdCQSxvQkFDRTtJQUFLLEVBQUUsRUFBQztFQUFSLGdCQUNFLDJEQUFDLHdEQUFELHFCQURGLGVBRUUsMkRBQUMsc0RBQUQ7SUFBTSxRQUFRLEVBQUVLO0VBQWhCLGdCQUNFLDJEQUFDLHVEQUFEO0lBQU8sRUFBRSxFQUFDO0VBQVYsZ0JBQ0UsMkdBREYsZUFFRSxxRkFDRSwyREFBQyx1REFBRDtJQUFPLFlBQVksRUFBQyxPQUFwQjtJQUE0QixJQUFJLEVBQUMsT0FBakM7SUFBeUMsRUFBRSxFQUFDLE9BQTVDO0lBQW9ELEtBQUssRUFBRVAsS0FBM0Q7SUFBa0UsUUFBUSxFQUFFQztFQUE1RSxFQURGLENBRkYsQ0FERixlQU9FLDJEQUFDLHVEQUFEO0lBQU8sRUFBRSxFQUFDO0VBQVYsZ0JBQ0Usb0dBREYsZUFFRSxxRkFDRSwyREFBQyx1REFBRDtJQUFPLFlBQVksRUFBQyxPQUFwQjtJQUE0QixJQUFJLEVBQUMsVUFBakM7SUFBNEMsRUFBRSxFQUFDLFVBQS9DO0lBQTBELEtBQUssRUFBRUMsUUFBakU7SUFBMkUsUUFBUSxFQUFFQztFQUFyRixFQURGLENBRkYsRUFLR0MsVUFBVSxpQkFBSSwyREFBQyx1REFBRCx5SEFMakIsQ0FQRixlQWNFLDJEQUFDLHdEQUFEO0lBQVEsSUFBSSxFQUFDO0VBQWIsd0JBZEYsQ0FGRixlQWtCRSwyREFBQywrREFBRCx3RkFFRSwyREFBQyxrREFBRDtJQUFNLEVBQUUsRUFBQztFQUFULHVEQUZGLENBbEJGLENBREY7QUF5QkQsQ0FsRUQ7O0lBQU1UO1VBQzRCRiw2Q0FDRGYseURBQ01BLHlEQUdwQk07OztLQU5iVztBQW9FTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZWN0dXJlLy4vcGFnZXMvTG9naW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VJbnB1dCBmcm9tICdAaG9va3MvdXNlSW5wdXQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTdWNjZXNzLCBGb3JtLCBFcnJvciwgTGFiZWwsIElucHV0LCBMaW5rQ29udGFpbmVyLCBCdXR0b24sIEhlYWRlciB9IGZyb20gJ0BwYWdlcy9TaWduVXAvc3R5bGVzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcblxuY29uc3QgTG9nSW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvYXBpL3VzZXJzJywgZmV0Y2hlciwgeyBkZWR1cGluZ0ludGVydmFsOiAxMDAwMDAgfSk7IC8v66Gc6re47J24IO2bhOyXkCDrjbDsnbTthLDrpbwg7KCE7ZW07KSEIEFQSVxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbbG9nSW5FcnJvciwgc2V0TG9nSW5FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIG5hdmlnYXRlKCcvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDroZzqt7jsnbjsoITsnbzrlYwgZGF0YT1mYWxzZShhcGnrrLjshJwg7LC46rOgKeuLiOq5jCDsi6TtlonslYjrkJjqs6Ag7Yyo7Iqk65CoXG4gICAgLy/roZzqt7jsnbjrkJjrqbQgaWbrrLjsl5DshJwg6rG466a8IOumrO2EtOqwkuuCmOyYtFxuICB9LCBbZGF0YV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IGFueSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0TG9nSW5FcnJvcihmYWxzZSk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICAnL2FwaS91c2Vycy9sb2dpbicsXG4gICAgICAgICAgeyBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBtdXRhdGUocmVzcG9uc2UuZGF0YSk7IC8vIE9QVElNSVNUSUMgVUlcbiAgICAgICAgICBjb25zb2xlLmxvZygn66Gc6re47J24IOyEseqzteudoCcsIGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfjhYsg66Oo7KCAJywgZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7fSk7XG4gICAgfSxcbiAgICBbZW1haWwsIHBhc3N3b3JkXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkZXI+SkpBUCBTTEFDSzwvSGVhZGVyPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7snbTrqZTsnbwg7KO87IaMPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPExhYmVsIGlkPVwicGFzc3dvcmQtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7ruYTrsIDrsojtmLg8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dCBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtsb2dJbkVycm9yICYmIDxFcnJvcj7snbTrqZTsnbzqs7wg67mE67CA67KI7Zi4IOuRmCDspJEg7ZWY64KYIO2LgOumvCDsnoUu6rWsLuy7tzwvRXJyb3I+fVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICDslYTsp4Eg7Iud6rWs6rCAIOyVhOuLjOqwgOu0kOyalD9cbiAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+7ZqM7JuQ6rCA7J6FIO2VmOufrOqwgOq4sDwvTGluaz5cbiAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xuIl0sIm5hbWVzIjpbInVzZUlucHV0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZU5hdmlnYXRlIiwiYXhpb3MiLCJGb3JtIiwiRXJyb3IiLCJMYWJlbCIsIklucHV0IiwiTGlua0NvbnRhaW5lciIsIkJ1dHRvbiIsIkhlYWRlciIsInVzZVNXUiIsImZldGNoZXIiLCJMb2dJbiIsImRlZHVwaW5nSW50ZXJ2YWwiLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsIm5hdmlnYXRlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZmluYWxseSJdLCJzb3VyY2VSb290IjoiIn0=