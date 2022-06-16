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
      input: data.content,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.createdAt).format('h:mm A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, result)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19DaGF0Qm94X2luZGV4X3RzeC1jb21wb25lbnRzX0NoYXRMaXN0X2luZGV4X3RzeC11dGlsc19tYWtlU2VjdGlvbl90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1TLElBQWdCLEdBQUcsU0FBbkJBLElBQW1CLE9BQWM7RUFBQTs7RUFBQSxJQUFYQyxJQUFXLFFBQVhBLElBQVc7O0VBQ3JDLGlCQUFzQkYsMkRBQVMsRUFBL0I7RUFBQSxJQUFRRyxTQUFSLGNBQVFBLFNBQVI7O0VBQ0EsSUFBTUMsSUFBSSxHQUFHLFlBQVlGLElBQVosR0FBbUJBLElBQUksQ0FBQ0csTUFBeEIsR0FBaUNILElBQUksQ0FBQ0ksSUFBbkQ7RUFDQSxJQUFNQyxNQUFNLEdBQUdiLDhDQUFPLENBQ3BCO0lBQUEsT0FDRUksMkRBQWMsQ0FBQztNQUNiVSxLQUFLLEVBQUVOLElBQUksQ0FBQ08sT0FEQztNQUViQyxPQUFPLEVBQUUsMEJBRkk7TUFHYkMsU0FIYSxxQkFHSEMsS0FIRyxFQUdJQyxLQUhKLEVBR1c7UUFDdEIsSUFBTUMsR0FBb0IsR0FBR0YsS0FBSyxDQUFDQSxLQUFOLENBQVkscUJBQVosQ0FBN0I7O1FBQ0EsSUFBSUUsR0FBSixFQUFTO1VBQ1Asb0JBQ0UsMkRBQUMsa0RBQUQ7WUFBTSxHQUFHLEVBQUVGLEtBQUssR0FBR0MsS0FBbkI7WUFBMEIsRUFBRSx1QkFBZ0JWLFNBQWhCLGlCQUFnQ1csR0FBRyxDQUFDLENBQUQsQ0FBbkM7VUFBNUIsUUFDSUEsR0FBRyxDQUFDLENBQUQsQ0FEUCxDQURGO1FBS0Q7O1FBQ0Qsb0JBQU87VUFBSSxHQUFHLEVBQUVEO1FBQVQsRUFBUDtNQUNEO0lBYlksQ0FBRCxDQURoQjtFQUFBLENBRG9CLEVBaUJwQixDQUFDWCxJQUFJLENBQUNPLE9BQU4sQ0FqQm9CLENBQXRCO0VBb0JB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QUFOLENBQWNKLFFBQVEsQ0FBQ0UsU0FBRCxDQUF0QixDQUFKLEVBQXdDO01BQ3RDRixRQUFRLENBQUNFLFNBQUQsQ0FBUixDQUFvQkcsSUFBcEIsQ0FBeUJ0RCxJQUF6QjtJQUNELENBRkQsTUFFTztNQUNMaUQsUUFBUSxDQUFDRSxTQUFELENBQVIsR0FBc0IsQ0FBQ25ELElBQUQsQ0FBdEI7SUFDRDtFQUNGLENBUEQ7RUFRQSxPQUFPaUQsUUFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9jb21wb25lbnRzL0NoYXQvaW5kZXgudHN4Iiwid2VicGFjazovL2FsZWN0dXJlLy4vY29tcG9uZW50cy9DaGF0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9jb21wb25lbnRzL0NoYXRCb3gvaW5kZXgudHN4Iiwid2VicGFjazovL2FsZWN0dXJlLy4vY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9jb21wb25lbnRzL0NoYXRMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hbGVjdHVyZS8uL2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9hbGVjdHVyZS8uL3V0aWxzL21ha2VTZWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDaGF0LCBJRE0gfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgUmVhY3QsIHsgVkZDLCBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhdFdyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgZ3JhdmFydGEgZnJvbSAnZ3JhdmF0YXInO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCByZWdleGlmeVN0cmluZyBmcm9tICdyZWdleGlmeS1zdHJpbmcnO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgV29ya3NwYWNlIGZyb20gJ0BsYXlvdXRzL1dvcmtzcGFjZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IElETSB8IElDaGF0O1xufVxuXG4vL0Bb6raJ64+E7YagXSg3KVxuLy8gXFxkIOyIq+yekCAr64qUIDHqsJwg7J207IOBID/ripQgMOqwnOuCmCAx6rCcLCAq64qUIDDqsJwg7J207IOBXG4vLyBn64qUIOuqqOuRkOywvuq4sFxuLy8gfOuKlCBvciBcXG4g7KSE67CU6r+IXG5jb25zdCBDaGF0OiBWRkM8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZyB9PigpO1xuICBjb25zdCB1c2VyID0gJ1NlbmRlcicgaW4gZGF0YSA/IGRhdGEuU2VuZGVyIDogZGF0YS5Vc2VyO1xuICBjb25zdCByZXN1bHQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICByZWdleGlmeVN0cmluZyh7XG4gICAgICAgIGlucHV0OiBkYXRhLmNvbnRlbnQsXG4gICAgICAgIHBhdHRlcm46IC9AXFxbKC4rPylcXF1cXCgoXFxkKz8pXFwpfFxcbi9nLFxuICAgICAgICBkZWNvcmF0b3IobWF0Y2gsIGluZGV4KSB7XG4gICAgICAgICAgY29uc3QgYXJyOiBzdHJpbmdbXSB8IG51bGwgPSBtYXRjaC5tYXRjaCgvQFxcWyguKz8pXVxcKChcXGQrPylcXCkvKSE7XG4gICAgICAgICAgaWYgKGFycikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXttYXRjaCArIGluZGV4fSB0bz17YC93b3Jrc3BhY2UvJHt3b3Jrc3BhY2V9L2RtLyR7YXJyWzJdfWB9PlxuICAgICAgICAgICAgICAgIEB7YXJyWzFdfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gPGJyIGtleT17aW5kZXh9IC8+O1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgW2RhdGEuY29udGVudF0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdFdyYXBwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW1nXCI+XG4gICAgICAgIDxpbWcgc3JjPXtncmF2YXJ0YS51cmwodXNlcj8uZW1haWwsIHsgczogJzM2cHgnLCBkOiAncmV0cm8nIH0pfSBhbHQ9e3VzZXI/Lm5pY2tuYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdXNlclwiPlxuICAgICAgICAgIDxiPnt1c2VyLm5pY2tuYW1lfTwvYj5cbiAgICAgICAgICA8c3Bhbj57ZGF5anMoZGF0YS5jcmVhdGVkQXQpLmZvcm1hdCgnaDptbSBBJyl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+e3Jlc3VsdH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXRXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDaGF0KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgfVxuXG4gICYgLmNoYXQtaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgJiBpbWcge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuICB9XG5cbiAgJiAuY2hhdC10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAxO1xuXG4gICAgJiBwIHtcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gICYgLmNoYXQtdXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJiA+IGIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgJiA+IHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gICYgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXRBcmVhLCBFYWNoTWVudGlvbiwgRm9ybSwgTWVudGlvbnNUZXh0YXJlYSwgU2VuZEJ1dHRvbiwgVG9vbGJveCB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSc7XG5pbXBvcnQgeyBNZW50aW9uLCBTdWdnZXN0aW9uRGF0YUl0ZW0gfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ0B0eXBpbmdzL2RiJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgZ3JhdmF0YXIgZnJvbSAnZ3JhdmF0YXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGF0OiBzdHJpbmc7XG4gIG9uU3VibWl0Rm9ybTogKGU6IGFueSkgPT4gdm9pZDtcbiAgb25DaGFuZ2VDaGF0OiAoZTogYW55KSA9PiB2b2lkO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuY29uc3QgQ2hhdEJveDogVkZDPFByb3BzPiA9ICh7IGNoYXQsIG9uU3VibWl0Rm9ybSwgb25DaGFuZ2VDaGF0LCBwbGFjZWhvbGRlciB9KSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZyB9PigpO1xuICBjb25zdCB7XG4gICAgZGF0YTogdXNlckRhdGEsXG4gICAgZXJyb3IsXG4gICAgbXV0YXRlLFxuICB9ID0gdXNlU1dSPElVc2VyIHwgZmFsc2U+KCcvYXBpL3VzZXJzJywgZmV0Y2hlciwge1xuICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDIwMDAsXG4gIH0pO1xuICBjb25zdCB7IGRhdGE6IG1lbWJlckRhdGEgfSA9IHVzZVNXUjxJVXNlcltdPih1c2VyRGF0YSA/IGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L21lbWJlcnNgIDogbnVsbCwgZmV0Y2hlcik7XG4gIGNvbnN0IHRleHRhcmVhUmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0ZXh0YXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICBhdXRvc2l6ZSh0ZXh0YXJlYVJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbmtleWRvd25DaGF0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvblN1Ym1pdEZvcm0oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblN1Ym1pdEZvcm1dLFxuICApO1xuXG4gIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb246IChcbiAgICBzdWdnZXN0aW9uOiBTdWdnZXN0aW9uRGF0YUl0ZW0sXG4gICAgc2VhcmNoOiBzdHJpbmcsXG4gICAgaGlnaGxpZ2h0ZWREaXNwbGF5OiBSZWFjdC5SZWFjdE5vZGUsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBmb2N1c2VkOiBib29sZWFuLFxuICApID0+IFJlYWN0LlJlYWN0Tm9kZSA9IHVzZUNhbGxiYWNrKFxuICAgIChtZW1iZXIsIHNlYXJjaCwgaGlnaGxpZ2h0ZWREaXNwbGF5LCBpbmRleCwgZm9jdXMpID0+IHtcbiAgICAgIGlmICghbWVtYmVyRGF0YSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFYWNoTWVudGlvbiBmb2N1cz17Zm9jdXN9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Z3JhdmF0YXIudXJsKG1lbWJlckRhdGFbaW5kZXhdLmVtYWlsLCB7IHM6ICcyMHB4JywgZDogJ3JldHJvJyB9KX1cbiAgICAgICAgICAgIGFsdD17bWVtYmVyRGF0YVtpbmRleF0ubmlja25hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj57aGlnaGxpZ2h0ZWREaXNwbGF5fTwvc3Bhbj5cbiAgICAgICAgPC9FYWNoTWVudGlvbj5cbiAgICAgICk7XG4gICAgfSxcbiAgICBbbWVtYmVyRGF0YV0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdEFyZWE+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cbiAgICAgICAgPE1lbnRpb25zVGV4dGFyZWFcbiAgICAgICAgICBpZD1cImVkaXRvci1jaGF0XCJcbiAgICAgICAgICB2YWx1ZT17Y2hhdH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGF0fVxuICAgICAgICAgIG9uS2V5RG93bj17b25rZXlkb3duQ2hhdH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgaW5wdXRSZWY9e3RleHRhcmVhUmVmfVxuICAgICAgICAgIGFsbG93U3VnZ2VzdGlvbnNBYm92ZUN1cnNvclxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnRpb25cbiAgICAgICAgICAgIGFwcGVuZFNwYWNlT25BZGRcbiAgICAgICAgICAgIHRyaWdnZXI9XCJAXCJcbiAgICAgICAgICAgIGRhdGE9e21lbWJlckRhdGE/Lm1hcCgodikgPT4gKHsgaWQ6IHYuaWQsIGRpc3BsYXk6IHYubmlja25hbWUgfSkpIHx8IFtdfVxuICAgICAgICAgICAgcmVuZGVyU3VnZ2VzdGlvbj17cmVuZGVyU3VnZ2VzdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L01lbnRpb25zVGV4dGFyZWE+XG4gICAgICAgIDxUb29sYm94PlxuICAgICAgICAgIDxTZW5kQnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAnYy1idXR0b24tdW5zdHlsZWQgYy1pY29uX2J1dHRvbiBjLWljb25fYnV0dG9uLS1saWdodCBjLWljb25fYnV0dG9uLS1zaXplX21lZGl1bSBjLXRleHR5X2lucHV0X19idXR0b24gYy10ZXh0eV9pbnB1dF9fYnV0dG9uLS1zZW5kJyArXG4gICAgICAgICAgICAgIChjaGF0Py50cmltKCkgPyAnJyA6ICcgYy10ZXh0eV9pbnB1dF9fYnV0dG9uLS1kaXNhYmxlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLXFhPVwidGV4dHlfc2VuZF9idXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbmQgbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLXNrPVwidG9vbHRpcF9wYXJlbnRcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWNoYXQ/LnRyaW0oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjLWljb24gYy1pY29uLS1wYXBlcnBsYW5lLWZpbGxlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPC9TZW5kQnV0dG9uPlxuICAgICAgICA8L1Rvb2xib3g+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9DaGF0QXJlYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgLy8gbmVzdGVkIHNlbGVjdG9yXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiIsImltcG9ydCBDaGF0IGZyb20gJ0Bjb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IHsgSUNoYXQsIElETSB9IGZyb20gJ0B0eXBpbmdzL2RiJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgVkZDLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGF0Wm9uZSwgU2VjdGlvbiwgU3RpY2t5SGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2Nyb2xsUmVmOiBSZWZPYmplY3Q8U2Nyb2xsYmFycz47XG4gIGNoYXRTZWN0aW9uczogeyBba2V5OiBzdHJpbmddOiAoSURNIHwgSUNoYXQpW10gfTtcbiAgc2V0U2l6ZTogKGY6IChzaXplOiBudW1iZXIpID0+IG51bWJlcikgPT4gUHJvbWlzZTwoSURNIHwgSUNoYXQpW11bXSB8IHVuZGVmaW5lZD47XG4gIGlzUmVhY2hpbmdFbmQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBDaGF0TGlzdDogVkZDPFByb3BzPiA9ICh7IGNoYXRTZWN0aW9ucywgc2V0U2l6ZSwgaXNSZWFjaGluZ0VuZCwgc2Nyb2xsUmVmIH0pID0+IHtcbiAgY29uc3Qgb25TY3JvbGwgPSB1c2VDYWxsYmFjaygodmFsdWVzOiBhbnkpID0+IHtcbiAgICBpZiAodmFsdWVzLnNjcm9sbFRvcCA9PT0gMCAmJiAhaXNSZWFjaGluZ0VuZCkge1xuICAgICAgc2V0U2l6ZSgocHJldlNpemUpID0+IHByZXZTaXplICsgMSkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxSZWY/LmN1cnJlbnQpIHtcbiAgICAgICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG9wKHNjcm9sbFJlZi5jdXJyZW50Py5nZXRTY3JvbGxIZWlnaHQoKSAtIHZhbHVlcy5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTsgLy/siqTtgazroaTsi5wg7LGE7YyF65OkIOyDneq4sOqyjO2VmOugpOqzoCAo642w7J207YSwIOy2lOqwgCDroZzrlKkpXG4gIHJldHVybiAoXG4gICAgPENoYXRab25lPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGUgcmVmPXtzY3JvbGxSZWZ9IG9uU2Nyb2xsRnJhbWU9e29uU2Nyb2xsfT5cbiAgICAgICAge09iamVjdC5lbnRyaWVzKGNoYXRTZWN0aW9ucykubWFwKChbZGF0ZSwgY2hhdHNdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17YHNlY3Rpb24tJHtkYXRlfWB9IGtleT17ZGF0ZX0+XG4gICAgICAgICAgICAgIDxTdGlja3lIZWFkZXI+XG4gICAgICAgICAgICAgICAge2NoYXRzLm1hcCgoY2hhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENoYXQga2V5PXtjaGF0LmlkfSBkYXRhPXtjaGF0fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0aWNreUhlYWRlcj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICA8L0NoYXRab25lPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3Q7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDaGF0Wm9uZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3RpY2t5SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE0cHg7XG4gICYgYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2FmLTApLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG4iLCJpbXBvcnQgeyBJQ2hhdCwgSURNIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVNlY3Rpb248VCBleHRlbmRzIElETSB8IElDaGF0PihjaGF0TGlzdDogVFtdKSB7XG4gIGNvbnN0IHNlY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IFRbXSB9ID0ge307XG4gIGNoYXRMaXN0LmZvckVhY2goKGNoYXQpID0+IHtcbiAgICBjb25zdCBtb250aERhdGUgPSBkYXlqcyhjaGF0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VjdGlvbnNbbW9udGhEYXRlXSkpIHtcbiAgICAgIHNlY3Rpb25zW21vbnRoRGF0ZV0ucHVzaChjaGF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnNbbW9udGhEYXRlXSA9IFtjaGF0XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VjdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwidXNlTWVtbyIsIkNoYXRXcmFwcGVyIiwiZ3JhdmFydGEiLCJkYXlqcyIsInJlZ2V4aWZ5U3RyaW5nIiwiTGluayIsInVzZVBhcmFtcyIsIkNoYXQiLCJkYXRhIiwid29ya3NwYWNlIiwidXNlciIsIlNlbmRlciIsIlVzZXIiLCJyZXN1bHQiLCJpbnB1dCIsImNvbnRlbnQiLCJwYXR0ZXJuIiwiZGVjb3JhdG9yIiwibWF0Y2giLCJpbmRleCIsImFyciIsInVybCIsImVtYWlsIiwicyIsImQiLCJuaWNrbmFtZSIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2hhdEFyZWEiLCJFYWNoTWVudGlvbiIsIkZvcm0iLCJNZW50aW9uc1RleHRhcmVhIiwiU2VuZEJ1dHRvbiIsIlRvb2xib3giLCJhdXRvc2l6ZSIsIk1lbnRpb24iLCJmZXRjaGVyIiwidXNlU1dSIiwiZ3JhdmF0YXIiLCJDaGF0Qm94IiwiY2hhdCIsIm9uU3VibWl0Rm9ybSIsIm9uQ2hhbmdlQ2hhdCIsInBsYWNlaG9sZGVyIiwiZGVkdXBpbmdJbnRlcnZhbCIsInVzZXJEYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJtZW1iZXJEYXRhIiwidGV4dGFyZWFSZWYiLCJjdXJyZW50Iiwib25rZXlkb3duQ2hhdCIsImUiLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyU3VnZ2VzdGlvbiIsIm1lbWJlciIsInNlYXJjaCIsImhpZ2hsaWdodGVkRGlzcGxheSIsImZvY3VzIiwibWFwIiwidiIsImlkIiwiZGlzcGxheSIsInRyaW0iLCJNZW50aW9uc0lucHV0IiwiQ2hhdFpvbmUiLCJTZWN0aW9uIiwiU3RpY2t5SGVhZGVyIiwiU2Nyb2xsYmFycyIsIkNoYXRMaXN0IiwiY2hhdFNlY3Rpb25zIiwic2V0U2l6ZSIsImlzUmVhY2hpbmdFbmQiLCJzY3JvbGxSZWYiLCJvblNjcm9sbCIsInZhbHVlcyIsInNjcm9sbFRvcCIsInByZXZTaXplIiwidGhlbiIsImdldFNjcm9sbEhlaWdodCIsInNjcm9sbEhlaWdodCIsIk9iamVjdCIsImVudHJpZXMiLCJkYXRlIiwiY2hhdHMiLCJtYWtlU2VjdGlvbiIsImNoYXRMaXN0Iiwic2VjdGlvbnMiLCJmb3JFYWNoIiwibW9udGhEYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=