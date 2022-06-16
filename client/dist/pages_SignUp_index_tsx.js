"use strict";
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["pages_SignUp_index_tsx"],{

/***/ "./pages/SignUp/index.tsx":
/*!********************************!*\
  !*** ./pages/SignUp/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
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









var SignUp = function SignUp() {
  _s2();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      data = _useSWR.data,
      error = _useSWR.error,
      mutate = _useSWR.mutate;

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput4 = _slicedToArray(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput6 = _slicedToArray(_useInput5, 3),
      password = _useInput6[0],
      setPassword = _useInput6[2];

  var _useInput7 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput8 = _slicedToArray(_useInput7, 3),
      passwordCheck = _useInput8[0],
      setPasswordCheck = _useInput8[2];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      missmatchError = _useState2[0],
      setMissmatchError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      signUpError = _useState4[0],
      setSignupError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      signUpSuccess = _useState6[0],
      setSignupSuccess = _useState6[1];

  var Inputref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    setPassword(e.target.value);
    setMissmatchError(e.target.value !== passwordCheck);
  }, [passwordCheck] //함수 바깥에서 선언한 친구는 써도됨 (변하지 않는 값은 쓰지않아도됨 ex> setPassword)
  );
  var onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    setPasswordCheck(e.target.value);
    setMissmatchError(e.target.value !== password);
  }, [password]);
  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (email.length < 1) {
      e.preventDefault();
      Inputref.current.focus();
      return;
    } else {
      e.preventDefault(); // console.log('------------------로그인 확인', email, nickname, password, passwordCheck);

      setSignupError('');
      setSignupSuccess(false);

      if (!missmatchError) {
        axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/users', {
          email: email,
          nickname: nickname,
          password: password
        }).then(function (response) {
          // console.log('에러따위 없소 ! 서버로 회원가입가기 전송 !', response);
          setSignupSuccess(true);
        }).catch(function (err) {
          console.log('루저 ㅋ', err.response);
          setSignupError(err.response.data);
        }).finally(function () {// console.log('finally는 try, catch문에서도 사용가능');
        });
      }
    }
  }, [email, nickname, password, passwordCheck, missmatchError]);

  if (data === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uB85C\uB529\uC911\uC784 \uAE30\uB458\uAE30");
  }

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (data) {
      navigate('/workspace/sleact/channel/일반');
      return;
    } // 로그인전일때 data=false(api문서 참고)니까 실행안되고 패스됨
    //로그인되면 if문에서 걸림 리턴값나옴

  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, "JJAP SLACK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "email-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    autoComplete: "false",
    type: "email",
    id: "email",
    value: email,
    onChange: onChangeEmail,
    ref: Inputref
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "nickname-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uBCC4\uBA85"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    autoComplete: "false",
    type: "text",
    id: "nickname",
    value: nickname,
    onChange: onChangeNickname
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "password-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    autoComplete: "false",
    type: "password",
    id: "password",
    value: password,
    onChange: onChangePassword
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "password-check-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    autoComplete: "false",
    type: "password",
    id: "password-check",
    value: passwordCheck,
    onChange: onChangePasswordCheck
  })), missmatchError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"), !nickname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"), signUpError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, signUpError), signUpSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Success, null, "\uD658\uC601\uD569\uB2C8\uB2E4 ! \uB85C\uADF8\uC778 \uD574\uC8FC\uC138\uC694")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "\uD68C\uC6D0\uAC00\uC785")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, null, "\uC774\uBBF8 \uC800\uD76C \uC2DD\uAD6C\uC778\uAC00\uC694 ? \uD83D\uDC18", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/login"
  }, "\uB85C\uADF8\uC778 \uD558\uB7EC\uAC00\uAE30")));
};

_s2(SignUp, "MpjMntYpsa19gJzIOJVA0Qb3hic=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate];
});

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

__webpack_require__.$Refresh$.register(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9hbGVjdHVyZS8uL3BhZ2VzL1NpZ25VcC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdWNjZXNzLCBGb3JtLCBFcnJvciwgTGFiZWwsIElucHV0LCBMaW5rQ29udGFpbmVyLCBCdXR0b24sIEhlYWRlciB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJ0Bob29rcy91c2VJbnB1dCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAdXRpbHMvZmV0Y2hlcic7XG5cbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoJy9hcGkvdXNlcnMnLCBmZXRjaGVyKTtcblxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsICwgc2V0UGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3QgW21pc3NtYXRjaEVycm9yLCBzZXRNaXNzbWF0Y2hFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaWduVXBFcnJvciwgc2V0U2lnbnVwRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2lnblVwU3VjY2Vzcywgc2V0U2lnbnVwU3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgSW5wdXRyZWYgPSB1c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogYW55KSA9PiB7XG4gICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRNaXNzbWF0Y2hFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmRDaGVjayk7XG4gICAgfSxcbiAgICBbcGFzc3dvcmRDaGVja10sIC8v7ZWo7IiYIOuwlOq5peyXkOyEnCDshKDslrjtlZwg7Lmc6rWs64qUIOyNqOuPhOuQqCAo67OA7ZWY7KeAIOyViuuKlCDqsJLsnYAg7JOw7KeA7JWK7JWE64+E65CoIGV4PiBzZXRQYXNzd29yZClcbiAgKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogYW55KSA9PiB7XG4gICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldE1pc3NtYXRjaEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XG4gICAgfSxcbiAgICBbcGFzc3dvcmRdLFxuICApO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgICAgaWYgKGVtYWlsLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBJbnB1dHJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLeuhnOq3uOyduCDtmZXsnbgnLCBlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkLCBwYXNzd29yZENoZWNrKTtcbiAgICAgICAgc2V0U2lnbnVwRXJyb3IoJycpO1xuICAgICAgICBzZXRTaWdudXBTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgaWYgKCFtaXNzbWF0Y2hFcnJvcikge1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCgnL2FwaS91c2VycycsIHsgZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfsl5Drn6zrlLDsnIQg7JeG7IaMICEg7ISc67KE66GcIO2ajOybkOqwgOyeheqwgOq4sCDsoITshqEgIScsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgc2V0U2lnbnVwU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn66Oo7KCAIOOFiycsIGVyci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIHNldFNpZ251cEVycm9yKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaW5hbGx564qUIHRyeSwgY2F0Y2jrrLjsl5DshJzrj4Qg7IKs7Jqp6rCA64qlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2VtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIG1pc3NtYXRjaEVycm9yXSxcbiAgKTtcblxuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDxkaXY+66Gc65Sp7KSR7J6EIOq4sOuRmOq4sDwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgbmF2aWdhdGUoJy93b3Jrc3BhY2Uvc2xlYWN0L2NoYW5uZWwv7J2867CYJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOuhnOq3uOyduOyghOydvOuVjCBkYXRhPWZhbHNlKGFwaeusuOyEnCDssLjqs6Ap64uI6rmMIOyLpO2WieyViOuQmOqzoCDtjKjsiqTrkKhcbiAgICAvL+uhnOq3uOyduOuQmOuptCBpZuusuOyXkOyEnCDqsbjrprwg66as7YS06rCS64KY7Ji0XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPkpKQVAgU0xBQ0s8L0hlYWRlcj5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxMYWJlbCBpZD1cImVtYWlsLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+7J2066mU7J28IOyjvOyGjDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IHJlZj17SW5wdXRyZWZ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgPExhYmVsIGlkPVwibmlja25hbWUtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7rs4TrqoU8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dCBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuaWNrbmFtZVwiIHZhbHVlPXtuaWNrbmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgPExhYmVsIGlkPVwicGFzc3dvcmQtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7ruYTrsIDrsojtmLg8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dCBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+67mE67CA67KI7Zi4IO2ZleyduDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1jaGVja1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHttaXNzbWF0Y2hFcnJvciAmJiA8RXJyb3I+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6Q8L0Vycm9yPn1cbiAgICAgICAgICB7IW5pY2tuYW1lICYmIDxFcnJvcj7ri4nrhKTsnoTsnYQg7J6F66Cl7ZW07KO87IS47JqUPC9FcnJvcj59XG4gICAgICAgICAge3NpZ25VcEVycm9yICYmIDxFcnJvcj57c2lnblVwRXJyb3J9PC9FcnJvcj59XG4gICAgICAgICAge3NpZ25VcFN1Y2Nlc3MgJiYgPFN1Y2Nlc3M+7ZmY7JiB7ZWp64uI64ukICEg66Gc6re47J24IO2VtOyjvOyEuOyalDwvU3VjY2Vzcz59XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPu2ajOybkOqwgOyehTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgICAgPExpbmtDb250YWluZXI+XG4gICAgICAgIOydtOuvuCDsoIDtnawg7Iud6rWs7J246rCA7JqUID8g8J+QmFxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPuuhnOq3uOyduCDtlZjrn6zqsIDquLA8L0xpbms+XG4gICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiU3VjY2VzcyIsIkZvcm0iLCJFcnJvciIsIkxhYmVsIiwiSW5wdXQiLCJMaW5rQ29udGFpbmVyIiwiQnV0dG9uIiwiSGVhZGVyIiwiYXhpb3MiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c2VJbnB1dCIsInVzZVNXUiIsImZldGNoZXIiLCJTaWduVXAiLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJtaXNzbWF0Y2hFcnJvciIsInNldE1pc3NtYXRjaEVycm9yIiwic2lnblVwRXJyb3IiLCJzZXRTaWdudXBFcnJvciIsInNpZ25VcFN1Y2Nlc3MiLCJzZXRTaWdudXBTdWNjZXNzIiwiSW5wdXRyZWYiLCJvbkNoYW5nZVBhc3N3b3JkIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25TdWJtaXQiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJmb2N1cyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5IiwidW5kZWZpbmVkIiwibmF2aWdhdGUiXSwic291cmNlUm9vdCI6IiJ9