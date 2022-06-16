"use strict";
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["components_ChatBox_index_tsx-components_ChatList_index_tsx-utils_makeSection_ts"],{

/***/ "./components/Chat/index.tsx":
/*!***********************************!*\
  !*** ./components/Chat/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Chat/styles.tsx");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regexify_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regexify-string */ "./node_modules/regexify-string/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();








//@[궉도토](7)
// \d 숫자 +는 1개 이상 ?는 0개나 1개, *는 0개 이상
// g는 모두찾기
// |는 or \n 줄바꿈
var Chat = function Chat(_ref) {
  _s();

  var data = _ref.data;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      workspace = _useParams.workspace;

  var user = 'Sender' in data ? data.Sender : data.User;
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,regexify_string__WEBPACK_IMPORTED_MODULE_4__["default"])({
      input: data === null || data === void 0 ? void 0 : data.content,
      pattern: /@\[(.+?)\]\((\d+?)\)|\n/g,
      decorator: function decorator(match, index) {
        var arr = match.match(/@\[(.+?)]\((\d+?)\)/);

        if (arr) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
            key: match + index,
            to: "/workspace/".concat(workspace, "/dm/").concat(arr[2])
          }, "@", arr[1]);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
          key: index
        });
      }
    });
  }, [data.content]);
  console.log('------------------------', user === null || user === void 0 ? void 0 : user.nickname);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ChatWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chat-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(user === null || user === void 0 ? void 0 : user.email, {
      s: '36px',
      d: 'retro'
    }),
    alt: user === null || user === void 0 ? void 0 : user.nickname
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chat-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chat-user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, user === null || user === void 0 ? void 0 : user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data === null || data === void 0 ? void 0 : data.createdAt).format('h:mm A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, result)));
};

_s(Chat, "OKGkO2+xzl1QGtH+BqMIvyp4jpM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams];
});

_c = Chat;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Chat));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Chat");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ }),

/***/ "./components/Chat/styles.tsx":
/*!************************************!*\
  !*** ./components/Chat/styles.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatWrapper": function() { return /* binding */ ChatWrapper; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ChatWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ez0ni310",
  label: "ChatWrapper"
})( false ? 0 : {
  name: "2yhi1c",
  styles: "display:flex;padding:8px 20px;&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}& .chat-text{display:flex;flex-wrap:wrap;flex:1;& p{flex:0 0 100%;margin:0;}}& .chat-user{display:flex;flex:0 0 100%;align-items:center;&>b{margin-right:5px;}&>span{font-size:12px;}}& a{text-decoration:none;color:deepskyblue;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXQvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFcUMiLCJmaWxlIjoiL1VzZXJzL2RvYmJpL0RvY3VtZW50cy9ob21ld29yay9zbGVhY3QvY2xpZW50L2NvbXBvbmVudHMvQ2hhdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA4cHggMjBweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG5cbiAgJiAuY2hhdC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICAmIGltZyB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICB9XG4gIH1cblxuICAmIC5jaGF0LXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IDE7XG5cbiAgICAmIHAge1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgJiAuY2hhdC11c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmID4gYiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAmID4gc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRlZXBza3libHVlO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./components/ChatBox/index.tsx":
/*!**************************************!*\
  !*** ./components/ChatBox/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/ChatBox/styles.tsx");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.esm.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();










var ChatBox = function ChatBox(_ref) {
  _s();

  var chat = _ref.chat,
      onSubmitForm = _ref.onSubmitForm,
      onChangeChat = _ref.onChangeChat,
      placeholder = _ref.placeholder;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useParams)(),
      workspace = _useParams.workspace;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dedupingInterval: 2000
  }),
      userData = _useSWR.data,
      error = _useSWR.error,
      mutate = _useSWR.mutate;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(userData ? "/api/workspaces/".concat(workspace, "/members") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      memberData = _useSWR2.data;

  var textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (textareaRef.current) {
      (0,autosize__WEBPACK_IMPORTED_MODULE_2__["default"])(textareaRef.current);
    }
  }, []);
  var onkeydownChat = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        onSubmitForm(e);
      }
    }
  }, [onSubmitForm]);
  var renderSuggestion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (member, search, highlightedDisplay, index, focus) {
    if (!memberData) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.EachMention, {
      focus: focus
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: gravatar__WEBPACK_IMPORTED_MODULE_6___default().url(memberData[index].email, {
        s: '20px',
        d: 'retro'
      }),
      alt: memberData[index].nickname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, highlightedDisplay));
  }, [memberData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ChatArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.MentionsTextarea, {
    id: "editor-chat",
    value: chat,
    onChange: onChangeChat,
    onKeyDown: onkeydownChat,
    placeholder: placeholder,
    inputRef: textareaRef,
    allowSuggestionsAboveCursor: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_mentions__WEBPACK_IMPORTED_MODULE_3__.Mention, {
    appendSpaceOnAdd: true,
    trigger: "@",
    data: (memberData === null || memberData === void 0 ? void 0 : memberData.map(function (v) {
      return {
        id: v.id,
        display: v.nickname
      };
    })) || [],
    renderSuggestion: renderSuggestion
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Toolbox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.SendButton, {
    className: 'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' + (chat !== null && chat !== void 0 && chat.trim() ? '' : ' c-texty_input__button--disabled'),
    "data-qa": "texty_send_button",
    "aria-label": "Send message",
    "data-sk": "tooltip_parent",
    type: "submit",
    disabled: !(chat !== null && chat !== void 0 && chat.trim())
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "c-icon c-icon--paperplane-filled",
    "aria-hidden": "true"
  })))));
};

_s(ChatBox, "5Q1TcPpdVpX8bvVY0uLTWIWa3Bw=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_7__.useParams, swr__WEBPACK_IMPORTED_MODULE_5__["default"], swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = ChatBox;
/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatBox");

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

/***/ }),

/***/ "./components/ChatBox/styles.tsx":
/*!***************************************!*\
  !*** ./components/ChatBox/styles.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatArea": function() { return /* binding */ ChatArea; },
/* harmony export */   "EachMention": function() { return /* binding */ EachMention; },
/* harmony export */   "Form": function() { return /* binding */ Form; },
/* harmony export */   "MentionsTextarea": function() { return /* binding */ MentionsTextarea; },
/* harmony export */   "SendButton": function() { return /* binding */ SendButton; },
/* harmony export */   "Toolbox": function() { return /* binding */ Toolbox; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var ChatArea = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1hwany95",
  label: "ChatArea"
})( false ? 0 : {
  name: "ra6cyy",
  styles: "display:flex;width:100%;padding:20px;padding-top:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0MiLCJmaWxlIjoiL1VzZXJzL2RvYmJpL0RvY3VtZW50cy9ob21ld29yay9zbGVhY3QvY2xpZW50L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIC8vIG5lc3RlZCBzZWxlY3RvclxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Form = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("form",  false ? 0 : {
  target: "e1hwany94",
  label: "Form"
})( false ? 0 : {
  name: "33ihw2",
  styles: "color:rgb(29, 28, 29);font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29)",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVK0IiLCJmaWxlIjoiL1VzZXJzL2RvYmJpL0RvY3VtZW50cy9ob21ld29yay9zbGVhY3QvY2xpZW50L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIC8vIG5lc3RlZCBzZWxlY3RvclxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var MentionsTextarea = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_mentions__WEBPACK_IMPORTED_MODULE_1__.MentionsInput,  false ? 0 : {
  target: "e1hwany93",
  label: "MentionsTextarea"
})( false ? 0 : {
  name: "bka2jr",
  styles: "font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;width:100%;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnFEIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICAvLyBuZXN0ZWQgc2VsZWN0b3JcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Toolbox = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1hwany92",
  label: "Toolbox"
})( false ? 0 : {
  name: "13ie2qx",
  styles: "position:relative;background:rgb(248, 248, 248);height:41px;display:flex;border-top:1px solid rgb(221, 221, 221);align-items:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2lDIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICAvLyBuZXN0ZWQgc2VsZWN0b3JcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SendButton = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "e1hwany91",
  label: "SendButton"
})( false ? 0 : {
  name: "xrrdm2",
  styles: "position:absolute;right:5px;top:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHVDIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICAvLyBuZXN0ZWQgc2VsZWN0b3JcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var EachMention = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "e1hwany90",
  label: "EachMention"
})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}", function (_ref) {
  var focus = _ref.focus;
  return focus && "\n    background: #1264a3;\n    color: white;\n  ";
}, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRTREIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICAvLyBuZXN0ZWQgc2VsZWN0b3JcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIl19 */"));

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

/***/ }),

/***/ "./components/ChatList/index.tsx":
/*!***************************************!*\
  !*** ./components/ChatList/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Chat */ "./components/Chat/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/ChatList/styles.tsx");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
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






var ChatList = function ChatList(_ref) {
  _s2();

  var chatSections = _ref.chatSections,
      setSize = _ref.setSize,
      isReachingEnd = _ref.isReachingEnd,
      scrollRef = _ref.scrollRef;
  var onScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (values) {
    if (values.scrollTop === 0 && !isReachingEnd) {
      setSize(function (prevSize) {
        return prevSize + 1;
      }).then(function () {
        if (scrollRef !== null && scrollRef !== void 0 && scrollRef.current) {
          var _scrollRef$current, _scrollRef$current2;

          (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scrollTop(((_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 ? void 0 : _scrollRef$current2.getScrollHeight()) - values.scrollHeight);
        }
      });
    }
  }, []); //스크롤시 채팅들 생기게하려고 (데이터 추가 로딩)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.ChatZone, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__.Scrollbars, {
    autoHide: true,
    ref: scrollRef,
    onScrollFrame: onScroll
  }, Object.entries(chatSections).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        date = _ref3[0],
        chats = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Section, {
      className: "section-".concat(date),
      key: date
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.StickyHeader, null, chats.map(function (chat) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_0__["default"], {
        key: chat.id,
        data: chat
      });
    })));
  })));
};

_s2(ChatList, "EfBdFFGza9k3eGlVsnvddhAgPCg=");

_c = ChatList;
/* harmony default export */ __webpack_exports__["default"] = (ChatList);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatList");

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

/***/ }),

/***/ "./components/ChatList/styles.tsx":
/*!****************************************!*\
  !*** ./components/ChatList/styles.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatZone": function() { return /* binding */ ChatZone; },
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "StickyHeader": function() { return /* binding */ StickyHeader; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ChatZone = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1gz5es32",
  label: "ChatZone"
})( false ? 0 : {
  name: "1op36e9",
  styles: "width:100%;display:flex;flex:1",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtDIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDaGF0Wm9uZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3RpY2t5SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE0cHg7XG4gICYgYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2FmLTApLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Section = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("section",  false ? 0 : {
  target: "e1gz5es31",
  label: "Section"
})( false ? 0 : {
  name: "10zp55f",
  styles: "margin-top:20px;border-top:1px solid #eee",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXFDIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDaGF0Wm9uZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3RpY2t5SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE0cHg7XG4gICYgYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2FmLTApLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var StickyHeader = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1gz5es30",
  label: "StickyHeader"
})( false ? 0 : {
  name: "1w049ii",
  styles: "justify-content:center;flex:1;width:100%;position:sticky;top:14px;& button{font-weight:bold;font-size:13px;height:28px;line-height:27px;padding:0 16px;z-index:2;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 1px 3px 0 rgba(0, 0, 0, 0.08);border-radius:24px;position:relative;top:-13px;background:white;border:none;outline:none;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXNDIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDaGF0Wm9uZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3RpY2t5SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE0cHg7XG4gICYgYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2FmLTApLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./utils/makeSection.ts":
/*!******************************!*\
  !*** ./utils/makeSection.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ makeSection; }
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function makeSection(chatList) {
  var sections = {};
  chatList.forEach(function (chat) {
    var monthDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chat.createdAt).format('YYYY-MM-DD');

    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19DaGF0Qm94X2luZGV4X3RzeC1jb21wb25lbnRzX0NoYXRMaXN0X2luZGV4X3RzeC11dGlsc19tYWtlU2VjdGlvbl90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1TLElBQWdCLEdBQUcsU0FBbkJBLElBQW1CLE9BQWM7RUFBQTs7RUFBQSxJQUFYQyxJQUFXLFFBQVhBLElBQVc7O0VBQ3JDLGlCQUFzQkYsMkRBQVMsRUFBL0I7RUFBQSxJQUFRRyxTQUFSLGNBQVFBLFNBQVI7O0VBQ0EsSUFBTUMsSUFBSSxHQUFHLFlBQVlGLElBQVosR0FBbUJBLElBQUksQ0FBQ0csTUFBeEIsR0FBaUNILElBQUksQ0FBQ0ksSUFBbkQ7RUFDQSxJQUFNQyxNQUFNLEdBQUdiLDhDQUFPLENBQ3BCO0lBQUEsT0FDRUksMkRBQWMsQ0FBQztNQUNiVSxLQUFLLEVBQUVOLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFTyxPQURBO01BRWJDLE9BQU8sRUFBRSwwQkFGSTtNQUdiQyxTQUhhLHFCQUdIQyxLQUhHLEVBR0lDLEtBSEosRUFHVztRQUN0QixJQUFNQyxHQUFvQixHQUFHRixLQUFLLENBQUNBLEtBQU4sQ0FBWSxxQkFBWixDQUE3Qjs7UUFDQSxJQUFJRSxHQUFKLEVBQVM7VUFDUCxvQkFDRSwyREFBQyxrREFBRDtZQUFNLEdBQUcsRUFBRUYsS0FBSyxHQUFHQyxLQUFuQjtZQUEwQixFQUFFLHVCQUFnQlYsU0FBaEIsaUJBQWdDVyxHQUFHLENBQUMsQ0FBRCxDQUFuQztVQUE1QixRQUNJQSxHQUFHLENBQUMsQ0FBRCxDQURQLENBREY7UUFLRDs7UUFDRCxvQkFBTztVQUFJLEdBQUcsRUFBRUQ7UUFBVCxFQUFQO01BQ0Q7SUFiWSxDQUFELENBRGhCO0VBQUEsQ0FEb0IsRUFpQnBCLENBQUNYLElBQUksQ0FBQ08s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LFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDbEQsSUFBRCxFQUFVO0lBQ3pCLElBQU1tRCxTQUFTLEdBQUc3Riw0Q0FBSyxDQUFDMEMsSUFBSSxDQUFDakIsU0FBTixDQUFMLENBQXNCQyxNQUF0QixDQUE2QixZQUE3QixDQUFsQjs7SUFDQSxJQUFJb0UsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFFBQVEsQ0FBQ0UsU0FBRCxDQUF0QixDQUFKLEVBQXdDO01BQ3RDRixRQUFRLENBQUNFLFNBQUQsQ0FBUixDQUFvQkcsSUFBcEIsQ0FBeUJ0RCxJQUF6QjtJQUNELENBRkQsTUFFTztNQUNMaUQsUUFBUSxDQUFDRSxTQUFELENBQVIsR0FBc0IsQ0FBQ25ELElBQUQsQ0FBdEI7SUFDRDtFQUNGLENBUEQ7RUFRQSxPQUFPaUQsUUFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9jb21wb25lbnRzL0NoYXQvaW5kZXgudHN4Iiwid2VicGFjazovL2FsZWN0dXJlLy4vY29tcG9uZW50cy9DaGF0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9jb21wb25lbnRzL0NoYXRCb3gvaW5kZXgudHN4Iiwid2VicGFjazovL2FsZWN0dXJlLy4vY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9jb21wb25lbnRzL0NoYXRMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hbGVjdHVyZS8uL2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9hbGVjdHVyZS8uL3V0aWxzL21ha2VTZWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDaGF0LCBJRE0gfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgUmVhY3QsIHsgVkZDLCBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhdFdyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgZ3JhdmFydGEgZnJvbSAnZ3JhdmF0YXInO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCByZWdleGlmeVN0cmluZyBmcm9tICdyZWdleGlmeS1zdHJpbmcnO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgV29ya3NwYWNlIGZyb20gJ0BsYXlvdXRzL1dvcmtzcGFjZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IElETSB8IElDaGF0O1xufVxuXG4vL0Bb6raJ64+E7YagXSg3KVxuLy8gXFxkIOyIq+yekCAr64qUIDHqsJwg7J207IOBID/ripQgMOqwnOuCmCAx6rCcLCAq64qUIDDqsJwg7J207IOBXG4vLyBn64qUIOuqqOuRkOywvuq4sFxuLy8gfOuKlCBvciBcXG4g7KSE67CU6r+IXG5jb25zdCBDaGF0OiBWRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZyB9PigpO1xuICBjb25zdCB1c2VyID0gJ1NlbmRlcicgaW4gZGF0YSA/IGRhdGEuU2VuZGVyIDogZGF0YS5Vc2VyO1xuICBjb25zdCByZXN1bHQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICByZWdleGlmeVN0cmluZyh7XG4gICAgICAgIGlucHV0OiBkYXRhPy5jb250ZW50LFxuICAgICAgICBwYXR0ZXJuOiAvQFxcWyguKz8pXFxdXFwoKFxcZCs/KVxcKXxcXG4vZyxcbiAgICAgICAgZGVjb3JhdG9yKG1hdGNoLCBpbmRleCkge1xuICAgICAgICAgIGNvbnN0IGFycjogc3RyaW5nW10gfCBudWxsID0gbWF0Y2gubWF0Y2goL0BcXFsoLis/KV1cXCgoXFxkKz8pXFwpLykhO1xuICAgICAgICAgIGlmIChhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bWF0Y2ggKyBpbmRleH0gdG89e2Avd29ya3NwYWNlLyR7d29ya3NwYWNlfS9kbS8ke2FyclsyXX1gfT5cbiAgICAgICAgICAgICAgICBAe2FyclsxXX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDxiciBrZXk9e2luZGV4fSAvPjtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIFtkYXRhLmNvbnRlbnRdLFxuICApO1xuXG4gIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB1c2VyPy5uaWNrbmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdFdyYXBwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW1nXCI+XG4gICAgICAgIDxpbWcgc3JjPXtncmF2YXJ0YS51cmwodXNlcj8uZW1haWwsIHsgczogJzM2cHgnLCBkOiAncmV0cm8nIH0pfSBhbHQ9e3VzZXI/Lm5pY2tuYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdXNlclwiPlxuICAgICAgICAgIDxiPnt1c2VyPy5uaWNrbmFtZX08L2I+XG4gICAgICAgICAgPHNwYW4+e2RheWpzKGRhdGE/LmNyZWF0ZWRBdCkuZm9ybWF0KCdoOm1tIEEnKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD57cmVzdWx0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2hhdFdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENoYXQpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA4cHggMjBweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG5cbiAgJiAuY2hhdC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICAmIGltZyB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICB9XG4gIH1cblxuICAmIC5jaGF0LXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IDE7XG5cbiAgICAmIHAge1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgJiAuY2hhdC11c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmID4gYiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAmID4gc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRlZXBza3libHVlO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgVkZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhdEFyZWEsIEVhY2hNZW50aW9uLCBGb3JtLCBNZW50aW9uc1RleHRhcmVhLCBTZW5kQnV0dG9uLCBUb29sYm94IH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IGF1dG9zaXplIGZyb20gJ2F1dG9zaXplJztcbmltcG9ydCB7IE1lbnRpb24sIFN1Z2dlc3Rpb25EYXRhSXRlbSB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBncmF2YXRhciBmcm9tICdncmF2YXRhcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoYXQ6IHN0cmluZztcbiAgb25TdWJtaXRGb3JtOiAoZTogYW55KSA9PiB2b2lkO1xuICBvbkNoYW5nZUNoYXQ6IChlOiBhbnkpID0+IHZvaWQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBDaGF0Qm94OiBWRkM8UHJvcHM+ID0gKHsgY2hhdCwgb25TdWJtaXRGb3JtLCBvbkNoYW5nZUNoYXQsIHBsYWNlaG9sZGVyIH0pID0+IHtcbiAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHVzZVBhcmFtczx7IHdvcmtzcGFjZTogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICBlcnJvcixcbiAgICBtdXRhdGUsXG4gIH0gPSB1c2VTV1I8SVVzZXIgfCBmYWxzZT4oJy9hcGkvdXNlcnMnLCBmZXRjaGVyLCB7XG4gICAgZGVkdXBpbmdJbnRlcnZhbDogMjAwMCxcbiAgfSk7XG4gIGNvbnN0IHsgZGF0YTogbWVtYmVyRGF0YSB9ID0gdXNlU1dSPElVc2VyW10+KHVzZXJEYXRhID8gYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vbWVtYmVyc2AgOiBudWxsLCBmZXRjaGVyKTtcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRleHRhcmVhUmVmLmN1cnJlbnQpIHtcbiAgICAgIGF1dG9zaXplKHRleHRhcmVhUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9ua2V5ZG93bkNoYXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogYW55KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9uU3VibWl0Rm9ybShlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW29uU3VibWl0Rm9ybV0sXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyU3VnZ2VzdGlvbjogKFxuICAgIHN1Z2dlc3Rpb246IFN1Z2dlc3Rpb25EYXRhSXRlbSxcbiAgICBzZWFyY2g6IHN0cmluZyxcbiAgICBoaWdobGlnaHRlZERpc3BsYXk6IFJlYWN0LlJlYWN0Tm9kZSxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGZvY3VzZWQ6IGJvb2xlYW4sXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlID0gdXNlQ2FsbGJhY2soXG4gICAgKG1lbWJlciwgc2VhcmNoLCBoaWdobGlnaHRlZERpc3BsYXksIGluZGV4LCBmb2N1cykgPT4ge1xuICAgICAgaWYgKCFtZW1iZXJEYXRhKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVhY2hNZW50aW9uIGZvY3VzPXtmb2N1c30+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtncmF2YXRhci51cmwobWVtYmVyRGF0YVtpbmRleF0uZW1haWwsIHsgczogJzIwcHgnLCBkOiAncmV0cm8nIH0pfVxuICAgICAgICAgICAgYWx0PXttZW1iZXJEYXRhW2luZGV4XS5uaWNrbmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPntoaWdobGlnaHRlZERpc3BsYXl9PC9zcGFuPlxuICAgICAgICA8L0VhY2hNZW50aW9uPlxuICAgICAgKTtcbiAgICB9LFxuICAgIFttZW1iZXJEYXRhXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGF0QXJlYT5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdEZvcm19PlxuICAgICAgICA8TWVudGlvbnNUZXh0YXJlYVxuICAgICAgICAgIGlkPVwiZWRpdG9yLWNoYXRcIlxuICAgICAgICAgIHZhbHVlPXtjaGF0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoYXR9XG4gICAgICAgICAgb25LZXlEb3duPXtvbmtleWRvd25DaGF0fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBpbnB1dFJlZj17dGV4dGFyZWFSZWZ9XG4gICAgICAgICAgYWxsb3dTdWdnZXN0aW9uc0Fib3ZlQ3Vyc29yXG4gICAgICAgID5cbiAgICAgICAgICA8TWVudGlvblxuICAgICAgICAgICAgYXBwZW5kU3BhY2VPbkFkZFxuICAgICAgICAgICAgdHJpZ2dlcj1cIkBcIlxuICAgICAgICAgICAgZGF0YT17bWVtYmVyRGF0YT8ubWFwKCh2KSA9PiAoeyBpZDogdi5pZCwgZGlzcGxheTogdi5uaWNrbmFtZSB9KSkgfHwgW119XG4gICAgICAgICAgICByZW5kZXJTdWdnZXN0aW9uPXtyZW5kZXJTdWdnZXN0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWVudGlvbnNUZXh0YXJlYT5cbiAgICAgICAgPFRvb2xib3g+XG4gICAgICAgICAgPFNlbmRCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICdjLWJ1dHRvbi11bnN0eWxlZCBjLWljb25fYnV0dG9uIGMtaWNvbl9idXR0b24tLWxpZ2h0IGMtaWNvbl9idXR0b24tLXNpemVfbWVkaXVtIGMtdGV4dHlfaW5wdXRfX2J1dHRvbiBjLXRleHR5X2lucHV0X19idXR0b24tLXNlbmQnICtcbiAgICAgICAgICAgICAgKGNoYXQ/LnRyaW0oKSA/ICcnIDogJyBjLXRleHR5X2lucHV0X19idXR0b24tLWRpc2FibGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEtcWE9XCJ0ZXh0eV9zZW5kX2J1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VuZCBtZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtc2s9XCJ0b29sdGlwX3BhcmVudFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshY2hhdD8udHJpbSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImMtaWNvbiBjLWljb24tLXBhcGVycGxhbmUtZmlsbGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8L1NlbmRCdXR0b24+XG4gICAgICAgIDwvVG9vbGJveD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0NoYXRBcmVhPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICAvLyBuZXN0ZWQgc2VsZWN0b3JcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIiwiaW1wb3J0IENoYXQgZnJvbSAnQGNvbXBvbmVudHMvQ2hhdCc7XG5pbXBvcnQgeyBJQ2hhdCwgSURNIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCBWRkMsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXRab25lLCBTZWN0aW9uLCBTdGlja3lIZWFkZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzY3JvbGxSZWY6IFJlZk9iamVjdDxTY3JvbGxiYXJzPjtcbiAgY2hhdFNlY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IChJRE0gfCBJQ2hhdClbXSB9O1xuICBzZXRTaXplOiAoZjogKHNpemU6IG51bWJlcikgPT4gbnVtYmVyKSA9PiBQcm9taXNlPChJRE0gfCBJQ2hhdClbXVtdIHwgdW5kZWZpbmVkPjtcbiAgaXNSZWFjaGluZ0VuZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IENoYXRMaXN0OiBWRkM8UHJvcHM+ID0gKHsgY2hhdFNlY3Rpb25zLCBzZXRTaXplLCBpc1JlYWNoaW5nRW5kLCBzY3JvbGxSZWYgfSkgPT4ge1xuICBjb25zdCBvblNjcm9sbCA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IGFueSkgPT4ge1xuICAgIGlmICh2YWx1ZXMuc2Nyb2xsVG9wID09PSAwICYmICFpc1JlYWNoaW5nRW5kKSB7XG4gICAgICBzZXRTaXplKChwcmV2U2l6ZSkgPT4gcHJldlNpemUgKyAxKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbFJlZj8uY3VycmVudCkge1xuICAgICAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxUb3Aoc2Nyb2xsUmVmLmN1cnJlbnQ/LmdldFNjcm9sbEhlaWdodCgpIC0gdmFsdWVzLnNjcm9sbEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pOyAvL+yKpO2BrOuhpOyLnCDssYTtjIXrk6Qg7IOd6riw6rKM7ZWY66Ck6rOgICjrjbDsnbTthLAg7LaU6rCAIOuhnOuUqSlcbiAgcmV0dXJuIChcbiAgICA8Q2hhdFpvbmU+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZSByZWY9e3Njcm9sbFJlZn0gb25TY3JvbGxGcmFtZT17b25TY3JvbGx9PlxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoY2hhdFNlY3Rpb25zKS5tYXAoKFtkYXRlLCBjaGF0c10pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtgc2VjdGlvbi0ke2RhdGV9YH0ga2V5PXtkYXRlfT5cbiAgICAgICAgICAgICAgPFN0aWNreUhlYWRlcj5cbiAgICAgICAgICAgICAgICB7Y2hhdHMubWFwKChjaGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2hhdCBrZXk9e2NoYXQuaWR9IGRhdGE9e2NoYXR9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RpY2t5SGVhZGVyPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvQ2hhdFpvbmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRab25lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdGlja3lIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTRweDtcbiAgJiBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1zYWYtMCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcbiIsImltcG9ydCB7IElDaGF0LCBJRE0gfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlU2VjdGlvbjxUIGV4dGVuZHMgSURNIHwgSUNoYXQ+KGNoYXRMaXN0OiBUW10pIHtcbiAgY29uc3Qgc2VjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogVFtdIH0gPSB7fTtcbiAgY2hhdExpc3QuZm9yRWFjaCgoY2hhdCkgPT4ge1xuICAgIGNvbnN0IG1vbnRoRGF0ZSA9IGRheWpzKGNoYXQuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWN0aW9uc1ttb250aERhdGVdKSkge1xuICAgICAgc2VjdGlvbnNbbW9udGhEYXRlXS5wdXNoKGNoYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uc1ttb250aERhdGVdID0gW2NoYXRdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWN0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJ1c2VNZW1vIiwiQ2hhdFdyYXBwZXIiLCJncmF2YXJ0YSIsImRheWpzIiwicmVnZXhpZnlTdHJpbmciLCJMaW5rIiwidXNlUGFyYW1zIiwiQ2hhdCIsImRhdGEiLCJ3b3Jrc3BhY2UiLCJ1c2VyIiwiU2VuZGVyIiwiVXNlciIsInJlc3VsdCIsImlucHV0IiwiY29udGVudCIsInBhdHRlcm4iLCJkZWNvcmF0b3IiLCJtYXRjaCIsImluZGV4IiwiYXJyIiwiY29uc29sZSIsImxvZyIsIm5pY2tuYW1lIiwidXJsIiwiZW1haWwiLCJzIiwiZCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2hhdEFyZWEiLCJFYWNoTWVudGlvbiIsIkZvcm0iLCJNZW50aW9uc1RleHRhcmVhIiwiU2VuZEJ1dHRvbiIsIlRvb2xib3giLCJhdXRvc2l6ZSIsIk1lbnRpb24iLCJmZXRjaGVyIiwidXNlU1dSIiwiZ3JhdmF0YXIiLCJDaGF0Qm94IiwiY2hhdCIsIm9uU3VibWl0Rm9ybSIsIm9uQ2hhbmdlQ2hhdCIsInBsYWNlaG9sZGVyIiwiZGVkdXBpbmdJbnRlcnZhbCIsInVzZXJEYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJtZW1iZXJEYXRhIiwidGV4dGFyZWFSZWYiLCJjdXJyZW50Iiwib25rZXlkb3duQ2hhdCIsImUiLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyU3VnZ2VzdGlvbiIsIm1lbWJlciIsInNlYXJjaCIsImhpZ2hsaWdodGVkRGlzcGxheSIsImZvY3VzIiwibWFwIiwidiIsImlkIiwiZGlzcGxheSIsInRyaW0iLCJNZW50aW9uc0lucHV0IiwiQ2hhdFpvbmUiLCJTZWN0aW9uIiwiU3RpY2t5SGVhZGVyIiwiU2Nyb2xsYmFycyIsIkNoYXRMaXN0IiwiY2hhdFNlY3Rpb25zIiwic2V0U2l6ZSIsImlzUmVhY2hpbmdFbmQiLCJzY3JvbGxSZWYiLCJvblNjcm9sbCIsInZhbHVlcyIsInNjcm9sbFRvcCIsInByZXZTaXplIiwidGhlbiIsImdldFNjcm9sbEhlaWdodCIsInNjcm9sbEhlaWdodCIsIk9iamVjdCIsImVudHJpZXMiLCJkYXRlIiwiY2hhdHMiLCJtYWtlU2VjdGlvbiIsImNoYXRMaXN0Iiwic2VjdGlvbnMiLCJmb3JFYWNoIiwibW9udGhEYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=