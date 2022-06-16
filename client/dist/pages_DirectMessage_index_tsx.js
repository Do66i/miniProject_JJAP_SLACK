"use strict";
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["pages_DirectMessage_index_tsx"],{

/***/ "./pages/DirectMessage/index.tsx":
/*!***************************************!*\
  !*** ./pages/DirectMessage/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./pages/DirectMessage/styles.tsx");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr/infinite */ "./node_modules/swr/infinite/dist/index.mjs");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ChatBox */ "./components/ChatBox/index.tsx");
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/ChatList */ "./components/ChatList/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_makeSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utils/makeSection */ "./utils/makeSection.ts");
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hooks/useSocket */ "./hooks/useSocket.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var PAGE_SIZE = 20;

var DirectMessage = function DirectMessage() {
  _s2();

  var _chatData$, _chatData, _ref;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_12__.useParams)(),
      workspace = _useParams.workspace,
      id = _useParams.id;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/workspaces/".concat(workspace, "/users/").concat(id), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      userData = _useSWR.data;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      myData = _useSWR2.data;

  var _useSWRInfinite = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_4__["default"])(function (index) {
    return "/api/workspaces/".concat(workspace, "/dms/").concat(id, "/chats?perPage=").concat(PAGE_SIZE, "&page=").concat(index + 1);
  }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      chatData = _useSWRInfinite.data,
      mutateChat = _useSWRInfinite.mutate,
      setSize = _useSWRInfinite.setSize; //채팅받아오는 API


  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 3),
      chat = _useInput2[0],
      onChangeChat = _useInput2[1],
      setChat = _useInput2[2];

  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_11__["default"])(workspace),
      _useSocket2 = _slicedToArray(_useSocket, 1),
      socket = _useSocket2[0];

  var isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0;
  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < PAGE_SIZE || false;
  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();

    if (chat !== null && chat !== void 0 && chat.trim() && chatData) {
      var savedChat = chat;
      mutateChat(function (prevChatData) {
        var _chatData$0$;

        prevChatData === null || prevChatData === void 0 ? void 0 : prevChatData[0].unshift({
          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,
          content: savedChat,
          SenderId: myData.id,
          Sender: myData,
          ReceiverId: userData.id,
          Receiver: userData,
          createdAt: new Date()
        });
        return prevChatData;
      }, false).then(function () {
        localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
        setChat('');

        if (scrollbarRef.current) {
          // console.log('scrollToBottom!', scrollbarRef.current?.getValues());
          scrollbarRef.current.scrollToBottom();
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_9___default().post("/api/workspaces/".concat(workspace, "/dms/").concat(id, "/chats"), {
        content: chat
      }).catch(console.error);
    }
  }, [chat, workspace, id, myData, userData, chatData, mutateChat, setChat]);
  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    // id는 상대방 아이디
    if (data.SenderId === Number(id) && (myData === null || myData === void 0 ? void 0 : myData.id) !== Number(id)) {
      mutateChat(function (chatData) {
        chatData === null || chatData === void 0 ? void 0 : chatData[0].unshift(data);
        return chatData;
      }, false).then(function () {
        if (scrollbarRef.current) {
          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150) {
            // console.log('scrollToBottom!', scrollbarRef.current?.getValues());
            setTimeout(function () {
              var _scrollbarRef$current;

              (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollToBottom();
            }, 50);
          }
        }
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    socket === null || socket === void 0 ? void 0 : socket.on('dm', onMessage);
    return function () {
      socket === null || socket === void 0 ? void 0 : socket.off('dm', onMessage);
    };
  }, [socket, onMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {
      var _scrollbarRef$current2;

      (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.scrollToBottom();
    }
  }, [chatData]);

  if (!userData || !myData) {
    return null;
  }

  var chatSections = (0,_utils_makeSection__WEBPACK_IMPORTED_MODULE_10__["default"])(chatData ? (_ref = []).concat.apply(_ref, _toConsumableArray(chatData)).reverse() : []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(userData === null || userData === void 0 ? void 0 : userData.email, {
      s: '24px',
      d: 'retro'
    }),
    alt: userData === null || userData === void 0 ? void 0 : userData.toString()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, userData === null || userData === void 0 ? void 0 : userData.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    chatSections: chatSections,
    scrollRef: scrollbarRef,
    setSize: setSize,
    isReachingEnd: isReachingEnd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    chat: chat,
    onChangeChat: onChangeChat,
    onSubmitForm: onSubmitForm
  }));
};

_s2(DirectMessage, "jqkdAEGeumQLT1M1LFHykDpgGwk=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_12__.useParams, swr__WEBPACK_IMPORTED_MODULE_3__["default"], swr__WEBPACK_IMPORTED_MODULE_3__["default"], swr_infinite__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useSocket__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = DirectMessage;
/* harmony default export */ __webpack_exports__["default"] = (DirectMessage);

var _c;

__webpack_require__.$Refresh$.register(_c, "DirectMessage");

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

/***/ "./pages/DirectMessage/styles.tsx":
/*!****************************************!*\
  !*** ./pages/DirectMessage/styles.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "DragOver": function() { return /* binding */ DragOver; },
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Container = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "enpw7kx2",
  label: "Container"
})( false ? 0 : {
  name: "1a0r0eh",
  styles: "display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRW1DIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "enpw7kx1",
  label: "Header"
})( false ? 0 : {
  name: "1c17pcy",
  styles: "height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& img{margin-right:5px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "enpw7kx0",
  label: "DragOver"
})( false ? 0 : {
  name: "czjct4",
  styles: "position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQyIsImZpbGUiOiIvVXNlcnMvZG9iYmkvRG9jdW1lbnRzL2hvbWV3b3JrL3NsZWFjdC9jbGllbnQvcGFnZXMvRGlyZWN0TWVzc2FnZS9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNeUUsUUFBUSxHQUFHLGtGQUFIO0VBQUE7RUFBQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7QUFBQSxFQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9wYWdlcy9EaXJlY3RNZXNzYWdlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hbGVjdHVyZS8uL3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IGdyYXZhdGFyIGZyb20gJ2dyYXZhdGFyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB1c2VTV1JJbmZpbml0ZSBmcm9tICdzd3IvaW5maW5pdGUnO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IElETSwgSVVzZXIgfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgQ2hhdEJveCBmcm9tICdAY29tcG9uZW50cy9DaGF0Qm94JztcbmltcG9ydCBDaGF0TGlzdCBmcm9tICdAY29tcG9uZW50cy9DaGF0TGlzdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgbWFrZVNlY3Rpb24gZnJvbSAnQHV0aWxzL21ha2VTZWN0aW9uJztcbmltcG9ydCB1c2VTb2NrZXQgZnJvbSAnQGhvb2tzL3VzZVNvY2tldCc7XG5cbmNvbnN0IFBBR0VfU0laRSA9IDIwO1xuY29uc3QgRGlyZWN0TWVzc2FnZSA9ICgpID0+IHtcbiAgY29uc3QgeyB3b3Jrc3BhY2UsIGlkIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZzsgaWQ6IHN0cmluZyB9PigpO1xuICBjb25zdCB7IGRhdGE6IHVzZXJEYXRhIH0gPSB1c2VTV1I8SVVzZXI+KGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L3VzZXJzLyR7aWR9YCwgZmV0Y2hlcik7XG4gIGNvbnN0IHsgZGF0YTogbXlEYXRhIH0gPSB1c2VTV1I8SVVzZXI+KCcvYXBpL3VzZXJzJywgZmV0Y2hlcik7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBjaGF0RGF0YSxcbiAgICBtdXRhdGU6IG11dGF0ZUNoYXQsXG4gICAgc2V0U2l6ZSxcbiAgfSA9IHVzZVNXUkluZmluaXRlPElETVtdPihcbiAgICAoaW5kZXgpID0+IGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2Rtcy8ke2lkfS9jaGF0cz9wZXJQYWdlPSR7UEFHRV9TSVpFfSZwYWdlPSR7aW5kZXggKyAxfWAsXG4gICAgZmV0Y2hlcixcbiAgKTsgLy/ssYTtjIXrsJvslYTsmKTripQgQVBJXG4gIGNvbnN0IHNjcm9sbGJhclJlZiA9IHVzZVJlZjxTY3JvbGxiYXJzPihudWxsKTtcbiAgY29uc3QgW2NoYXQsIG9uQ2hhbmdlQ2hhdCwgc2V0Q2hhdF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IFtzb2NrZXRdID0gdXNlU29ja2V0KHdvcmtzcGFjZSk7XG4gIGNvbnN0IGlzRW1wdHkgPSBjaGF0RGF0YT8uWzBdPy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBpc0VtcHR5IHx8IChjaGF0RGF0YSAmJiBjaGF0RGF0YVtjaGF0RGF0YS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgUEFHRV9TSVpFKSB8fCBmYWxzZTtcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogYW55KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoY2hhdD8udHJpbSgpICYmIGNoYXREYXRhKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkQ2hhdCA9IGNoYXQ7XG4gICAgICAgIG11dGF0ZUNoYXQoKHByZXZDaGF0RGF0YSkgPT4ge1xuICAgICAgICAgIHByZXZDaGF0RGF0YT8uWzBdLnVuc2hpZnQoe1xuICAgICAgICAgICAgaWQ6IChjaGF0RGF0YVswXVswXT8uaWQgfHwgMCkgKyAxLFxuICAgICAgICAgICAgY29udGVudDogc2F2ZWRDaGF0LFxuICAgICAgICAgICAgU2VuZGVySWQ6IG15RGF0YSEuaWQsXG4gICAgICAgICAgICBTZW5kZXI6IG15RGF0YSEsXG4gICAgICAgICAgICBSZWNlaXZlcklkOiB1c2VyRGF0YSEuaWQsXG4gICAgICAgICAgICBSZWNlaXZlcjogdXNlckRhdGEhLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBwcmV2Q2hhdERhdGE7XG4gICAgICAgIH0sIGZhbHNlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt3b3Jrc3BhY2V9LSR7aWR9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2V0Q2hhdCgnJyk7XG4gICAgICAgICAgaWYgKHNjcm9sbGJhclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2Nyb2xsVG9Cb3R0b20hJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LmdldFZhbHVlcygpKTtcbiAgICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9kbXMvJHtpZH0vY2hhdHNgLCB7XG4gICAgICAgICAgICBjb250ZW50OiBjaGF0LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2NoYXQsIHdvcmtzcGFjZSwgaWQsIG15RGF0YSwgdXNlckRhdGEsIGNoYXREYXRhLCBtdXRhdGVDaGF0LCBzZXRDaGF0XSxcbiAgKTtcblxuICBjb25zdCBvbk1lc3NhZ2UgPSB1c2VDYWxsYmFjaygoZGF0YTogSURNKSA9PiB7XG4gICAgLy8gaWTripQg7IOB64yA67CpIOyVhOydtOuUlFxuICAgIGlmIChkYXRhLlNlbmRlcklkID09PSBOdW1iZXIoaWQpICYmIG15RGF0YT8uaWQgIT09IE51bWJlcihpZCkpIHtcbiAgICAgIG11dGF0ZUNoYXQoKGNoYXREYXRhKSA9PiB7XG4gICAgICAgIGNoYXREYXRhPy5bMF0udW5zaGlmdChkYXRhKTtcbiAgICAgICAgcmV0dXJuIGNoYXREYXRhO1xuICAgICAgfSwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsYmFyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudC5nZXRTY3JvbGxIZWlnaHQoKSA8XG4gICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudC5nZXRDbGllbnRIZWlnaHQoKSArIHNjcm9sbGJhclJlZi5jdXJyZW50LmdldFNjcm9sbFRvcCgpICsgMTUwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2Nyb2xsVG9Cb3R0b20hJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LmdldFZhbHVlcygpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Py5vbignZG0nLCBvbk1lc3NhZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQ/Lm9mZignZG0nLCBvbk1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtzb2NrZXQsIG9uTWVzc2FnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYXREYXRhPy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfSwgW2NoYXREYXRhXSk7XG5cbiAgaWYgKCF1c2VyRGF0YSB8fCAhbXlEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjaGF0U2VjdGlvbnMgPSBtYWtlU2VjdGlvbihjaGF0RGF0YSA/IChbXSBhcyBJRE1bXSkuY29uY2F0KC4uLmNoYXREYXRhKS5yZXZlcnNlKCkgOiBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGltZyBzcmM9e2dyYXZhdGFyLnVybCh1c2VyRGF0YT8uZW1haWwsIHsgczogJzI0cHgnLCBkOiAncmV0cm8nIH0pfSBhbHQ9e3VzZXJEYXRhPy50b1N0cmluZygpfSAvPlxuICAgICAgICA8c3Bhbj57dXNlckRhdGE/Lm5pY2tuYW1lfTwvc3Bhbj5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPENoYXRMaXN0IGNoYXRTZWN0aW9ucz17Y2hhdFNlY3Rpb25zfSBzY3JvbGxSZWY9e3Njcm9sbGJhclJlZn0gc2V0U2l6ZT17c2V0U2l6ZX0gaXNSZWFjaGluZ0VuZD17aXNSZWFjaGluZ0VuZH0gLz5cbiAgICAgIDxDaGF0Qm94IGNoYXQ9e2NoYXR9IG9uQ2hhbmdlQ2hhdD17b25DaGFuZ2VDaGF0fSBvblN1Ym1pdEZvcm09e29uU3VibWl0Rm9ybX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdE1lc3NhZ2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvbnRhaW5lciIsIkhlYWRlciIsImdyYXZhdGFyIiwidXNlU1dSIiwidXNlU1dSSW5maW5pdGUiLCJmZXRjaGVyIiwidXNlUGFyYW1zIiwiQ2hhdEJveCIsIkNoYXRMaXN0IiwidXNlSW5wdXQiLCJheGlvcyIsIm1ha2VTZWN0aW9uIiwidXNlU29ja2V0IiwiUEFHRV9TSVpFIiwiRGlyZWN0TWVzc2FnZSIsIndvcmtzcGFjZSIsImlkIiwidXNlckRhdGEiLCJkYXRhIiwibXlEYXRhIiwiaW5kZXgiLCJjaGF0RGF0YSIsIm11dGF0ZUNoYXQiLCJtdXRhdGUiLCJzZXRTaXplIiwic2Nyb2xsYmFyUmVmIiwiY2hhdCIsIm9uQ2hhbmdlQ2hhdCIsInNldENoYXQiLCJzb2NrZXQiLCJpc0VtcHR5IiwibGVuZ3RoIiwiaXNSZWFjaGluZ0VuZCIsIm9uU3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJzYXZlZENoYXQiLCJwcmV2Q2hhdERhdGEiLCJ1bnNoaWZ0IiwiY29udGVudCIsIlNlbmRlcklkIiwiU2VuZGVyIiwiUmVjZWl2ZXJJZCIsIlJlY2VpdmVyIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRoZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwiY3VycmVudCIsInNjcm9sbFRvQm90dG9tIiwicG9zdCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwib25NZXNzYWdlIiwiTnVtYmVyIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwic2V0VGltZW91dCIsIm9uIiwib2ZmIiwiY2hhdFNlY3Rpb25zIiwiY29uY2F0IiwicmV2ZXJzZSIsInVybCIsImVtYWlsIiwicyIsImQiLCJuaWNrbmFtZSIsIkRyYWdPdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==