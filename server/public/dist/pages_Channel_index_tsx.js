"use strict";
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["pages_Channel_index_tsx"],{

/***/ "./pages/Channel/index.tsx":
/*!*********************************!*\
  !*** ./pages/Channel/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/ChatBox */ "./components/ChatBox/index.tsx");
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ChatList */ "./components/ChatList/index.tsx");
/* harmony import */ var _components_InviteChannelModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InviteChannelModal */ "./components/InviteChannelModal/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/useSocket */ "./hooks/useSocket.ts");
/* harmony import */ var _pages_Channel_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/Channel/styles */ "./pages/Channel/styles.tsx");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var _utils_makeSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/makeSection */ "./utils/makeSection.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swr/infinite */ "./node_modules/swr/infinite/dist/index.mjs");
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















var Channel = function Channel() {
  _s2();

  var _chatData$, _chatData;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_12__.useParams)(),
      workspace = _useParams.workspace,
      channel = _useParams.channel;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__["default"]),
      myData = _useSWR.data;

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 3),
      chat = _useInput2[0],
      onChangeChat = _useInput2[1],
      setChat = _useInput2[2];

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])("/api/workspaces/".concat(workspace, "/channels/").concat(channel), _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__["default"]),
      channelData = _useSWR2.data;

  var _useSWRInfinite = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_11__["default"])(function (index) {
    return "/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/chats?perPage=20&page=").concat(index + 1);
  }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__["default"]),
      chatData = _useSWRInfinite.data,
      mutateChat = _useSWRInfinite.mutate,
      setSize = _useSWRInfinite.setSize;

  var _useSWR3 = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])(myData ? "/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/members") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__["default"]),
      channelMembersData = _useSWR3.data;

  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_4__["default"])(workspace),
      _useSocket2 = _slicedToArray(_useSocket, 1),
      socket = _useSocket2[0];

  var isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0;
  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20 || false;
  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showInviteChannelModal = _useState2[0],
      setShowInviteChannelModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dragOver = _useState4[0],
      setDragOver = _useState4[1]; // 0초 A: 안녕~(optimistic UI)
  // 1초 B: 안녕~
  // 2초 A: 안녕~(실제 서버)


  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (e) {
    e.preventDefault();
    console.log(chat);

    if (chat !== null && chat !== void 0 && chat.trim() && chatData && channelData) {
      var savedChat = chat;
      mutateChat(function (prevChatData) {
        var _chatData$0$;

        prevChatData === null || prevChatData === void 0 ? void 0 : prevChatData[0].unshift({
          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,
          content: savedChat,
          UserId: myData.id,
          User: myData,
          ChannelId: channelData.id,
          Channel: channelData,
          createdAt: new Date()
        });
        return prevChatData;
      }, false).then(function () {
        var _scrollbarRef$current;

        setChat('');
        (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollToBottom();
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/chats"), {
        content: chat
      }).then(function () {
        mutateChat();
      }).catch(console.error);
    }
  }, [chat, chatData, myData, channelData, workspace, channel]);
  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (data) {
    // id는 상대방 아이디
    if (data.Channel.name === channel && (data.content.startsWith('uploads\\') || data.UserId !== (myData === null || myData === void 0 ? void 0 : myData.id))) {
      mutateChat(function (chatData) {
        chatData === null || chatData === void 0 ? void 0 : chatData[0].unshift(data);
        return chatData;
      }, false).then(function () {
        if (scrollbarRef.current) {
          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150) {
            var _scrollbarRef$current2;

            console.log('scrollToBottom!', (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.getValues());
            setTimeout(function () {
              var _scrollbarRef$current3;

              (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 ? void 0 : _scrollbarRef$current3.scrollToBottom();
            }, 50);
          }
        }
      });
    }
  }, [channel, myData]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    socket === null || socket === void 0 ? void 0 : socket.on('message', onMessage);
    return function () {
      socket === null || socket === void 0 ? void 0 : socket.off('message', onMessage);
    };
  }, [socket, onMessage]); // 로딩 시 스크롤바 제일 아래로

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {
      // console.log('toBottomWhenLoaded', scrollbarRef.current);
      setTimeout(function () {
        var _scrollbarRef$current4;

        // console.log('scrollbar', scrollbarRef.current);
        (_scrollbarRef$current4 = scrollbarRef.current) === null || _scrollbarRef$current4 === void 0 ? void 0 : _scrollbarRef$current4.scrollToBottom();
      }, 500);
    }
  }, [chatData]);
  var onClickInviteChannel = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    setShowInviteChannelModal(true);
  }, []);
  var onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    setShowInviteChannelModal(false);
  }, []);
  var onChangeFile = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (e) {
    var formData = new FormData();

    if (e.target.files) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < e.target.files.length; i++) {
        var file = e.target.files[i].getAsFile(); // console.log('... file[' + i + '].name = ' + file.name);

        formData.append('image', file);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/images"), formData).then(function () {});
  }, []);
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (e) {
    e.preventDefault();
    var formData = new FormData();

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === 'file') {
          var file = e.dataTransfer.items[i].getAsFile(); // console.log(e, '.... file[' + i + '].name = ' + file.name);

          formData.append('image', file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var _i2 = 0; _i2 < e.dataTransfer.files.length; _i2++) {
        // console.log(e, '... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
        formData.append('image', e.dataTransfer.files[_i2]);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/images"), formData).then(function () {
      setDragOver(false);
    });
  }, [workspace, channel]);
  var onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (e) {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  if (!myData || !myData) {
    return null;
  }

  var chatSections = (0,_utils_makeSection__WEBPACK_IMPORTED_MODULE_7__["default"])(chatData ? chatData.flat().reverse() : []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_pages_Channel_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {
    onDrop: onDrop,
    onDragOver: onDragOver
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_pages_Channel_styles__WEBPACK_IMPORTED_MODULE_5__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "#", channel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, channelMembersData === null || channelMembersData === void 0 ? void 0 : channelMembersData.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", {
    onClick: onClickInviteChannel,
    className: "c-button-unstyled p-ia__view_header__button",
    "aria-label": "Add people to #react-native",
    "data-sk": "tooltip_parent",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("i", {
    className: "c-icon p-ia__view_header__button_icon c-icon--add-user",
    "aria-hidden": "true"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    chatSections: chatSections,
    scrollRef: scrollbarRef,
    setSize: setSize,
    isReachingEnd: isReachingEnd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_0__["default"], {
    chat: chat,
    onChangeChat: onChangeChat,
    onSubmitForm: onSubmitForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_InviteChannelModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: showInviteChannelModal,
    onCloseModal: onCloseModal,
    setShowInviteChannelModal: setShowInviteChannelModal
  }), dragOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_pages_Channel_styles__WEBPACK_IMPORTED_MODULE_5__.DragOver, null, "\uC5C5\uB85C\uB4DC!"));
};

_s2(Channel, "AnrOn3Xps6HuerpI2CR4wKrGMLE=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_12__.useParams, swr__WEBPACK_IMPORTED_MODULE_10__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], swr__WEBPACK_IMPORTED_MODULE_10__["default"], swr_infinite__WEBPACK_IMPORTED_MODULE_11__["default"], swr__WEBPACK_IMPORTED_MODULE_10__["default"], _hooks_useSocket__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = Channel;
/* harmony default export */ __webpack_exports__["default"] = (Channel);

var _c;

__webpack_require__.$Refresh$.register(_c, "Channel");

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

/***/ "./pages/Channel/styles.tsx":
/*!**********************************!*\
  !*** ./pages/Channel/styles.tsx ***!
  \**********************************/
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
  target: "enhg4lt2",
  label: "Container"
})( false ? 0 : {
  name: "1a0r0eh",
  styles: "display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRW1DIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "enhg4lt1",
  label: "Header"
})( false ? 0 : {
  name: "1ezwwi6",
  styles: "height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& .header-right{display:flex;flex:1;justify-content:flex-end;align-items:center;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6Ii9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "enhg4lt0",
  label: "DragOver"
})( false ? 0 : {
  name: "czjct4",
  styles: "position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2JiaS9Eb2N1bWVudHMvaG9tZXdvcmsvc2xlYWN0L2NsaWVudC9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQyIsImZpbGUiOiIvVXNlcnMvZG9iYmkvRG9jdW1lbnRzL2hvbWV3b3JrL3NsZWFjdC9jbGllbnQvcGFnZXMvQ2hhbm5lbC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIC5oZWFkZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXX0= */",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUFzQyxTQUFTLEVBQUVyRCxZQUFqRDtJQUErRCxPQUFPLEVBQUVOLE9BQXhFO0lBQWlGLGFBQWEsRUFBRUs7RUFBaEcsRUFoQkYsZUFpQkUsMkRBQUMsMkRBQUQ7SUFBUyxJQUFJLEVBQUViLElBQWY7SUFBcUIsWUFBWSxFQUFFQyxZQUFuQztJQUFpRCxZQUFZLEVBQUVrQjtFQUEvRCxFQWpCRixlQWtCRSwyREFBQyxzRUFBRDtJQUNFLElBQUksRUFBRUosc0JBRFI7SUFFRSxZQUFZLEVBQUVxQyxZQUZoQjtJQUdFLHlCQUF5QixFQUFFcEM7RUFIN0IsRUFsQkYsRUF1QkdDLFFBQVEsaUJBQUksMkRBQUMsMkRBQUQsOEJBdkJmLENBREY7QUEyQkQsQ0FqTUQ7O0lBQU10QjtVQUMyQkgsc0RBQ05DLDhDQUNhZCx5REFDUmMsOENBSzFCQyx1REFJaUNELDhDQUlwQmI7OztLQWpCYmU7QUFtTU4sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pOTyxJQUFNZCxTQUFTLEdBQUcsa0ZBQUg7RUFBQTtFQUFBO0FBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtBQUFBLEVBQWY7QUFRQSxJQUFNQyxNQUFNLEdBQUcscUZBQUg7RUFBQTtFQUFBO0FBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtBQUFBLEVBQVo7QUFrQkEsSUFBTUMsUUFBUSxHQUFHLGtGQUFIO0VBQUE7RUFBQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7QUFBQSxFQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxlY3R1cmUvLi9wYWdlcy9DaGFubmVsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hbGVjdHVyZS8uL3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhdEJveCBmcm9tICdAY29tcG9uZW50cy9DaGF0Qm94JztcbmltcG9ydCBDaGF0TGlzdCBmcm9tICdAY29tcG9uZW50cy9DaGF0TGlzdCc7XG5pbXBvcnQgSW52aXRlQ2hhbm5lbE1vZGFsIGZyb20gJ0Bjb21wb25lbnRzL0ludml0ZUNoYW5uZWxNb2RhbCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCB1c2VTb2NrZXQgZnJvbSAnQGhvb2tzL3VzZVNvY2tldCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgRHJhZ092ZXIgfSBmcm9tICdAcGFnZXMvQ2hhbm5lbC9zdHlsZXMnO1xuaW1wb3J0IHsgSUNoYW5uZWwsIElDaGF0LCBJRE0sIElVc2VyIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuaW1wb3J0IG1ha2VTZWN0aW9uIGZyb20gJ0B1dGlscy9tYWtlU2VjdGlvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2Nyb2xsYmFycyBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHVzZVNXUkluZmluaXRlIGZyb20gJ3N3ci9pbmZpbml0ZSc7XG5cbmNvbnN0IENoYW5uZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlLCBjaGFubmVsIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZzsgY2hhbm5lbDogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IHsgZGF0YTogbXlEYXRhIH0gPSB1c2VTV1I8SVVzZXI+KCcvYXBpL3VzZXJzJywgZmV0Y2hlcik7XG4gIGNvbnN0IFtjaGF0LCBvbkNoYW5nZUNoYXQsIHNldENoYXRdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCB7IGRhdGE6IGNoYW5uZWxEYXRhIH0gPSB1c2VTV1I8SUNoYW5uZWw+KGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzLyR7Y2hhbm5lbH1gLCBmZXRjaGVyKTtcbiAgY29uc3Qge1xuICAgIGRhdGE6IGNoYXREYXRhLFxuICAgIG11dGF0ZTogbXV0YXRlQ2hhdCxcbiAgICBzZXRTaXplLFxuICB9ID0gdXNlU1dSSW5maW5pdGU8SUNoYXRbXT4oXG4gICAgKGluZGV4KSA9PiBgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9jaGFubmVscy8ke2NoYW5uZWx9L2NoYXRzP3BlclBhZ2U9MjAmcGFnZT0ke2luZGV4ICsgMX1gLFxuICAgIGZldGNoZXIsXG4gICk7XG4gIGNvbnN0IHsgZGF0YTogY2hhbm5lbE1lbWJlcnNEYXRhIH0gPSB1c2VTV1I8SVVzZXJbXT4oXG4gICAgbXlEYXRhID8gYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vY2hhbm5lbHMvJHtjaGFubmVsfS9tZW1iZXJzYCA6IG51bGwsXG4gICAgZmV0Y2hlcixcbiAgKTtcbiAgY29uc3QgW3NvY2tldF0gPSB1c2VTb2NrZXQod29ya3NwYWNlKTtcbiAgY29uc3QgaXNFbXB0eSA9IGNoYXREYXRhPy5bMF0/Lmxlbmd0aCA9PT0gMDtcbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9IGlzRW1wdHkgfHwgKGNoYXREYXRhICYmIGNoYXREYXRhW2NoYXREYXRhLmxlbmd0aCAtIDFdPy5sZW5ndGggPCAyMCkgfHwgZmFsc2U7XG4gIGNvbnN0IHNjcm9sbGJhclJlZiA9IHVzZVJlZjxTY3JvbGxiYXJzPihudWxsKTtcbiAgY29uc3QgW3Nob3dJbnZpdGVDaGFubmVsTW9kYWwsIHNldFNob3dJbnZpdGVDaGFubmVsTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZHJhZ092ZXIsIHNldERyYWdPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyAw7LSIIEE6IOyViOuFlX4ob3B0aW1pc3RpYyBVSSlcbiAgLy8gMey0iCBCOiDslYjrhZV+XG4gIC8vIDLstIggQTog7JWI64WVfijsi6TsoJwg7ISc67KEKVxuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBhbnkpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGNoYXQpO1xuICAgICAgaWYgKGNoYXQ/LnRyaW0oKSAmJiBjaGF0RGF0YSAmJiBjaGFubmVsRGF0YSkge1xuICAgICAgICBjb25zdCBzYXZlZENoYXQgPSBjaGF0O1xuICAgICAgICBtdXRhdGVDaGF0KChwcmV2Q2hhdERhdGEpID0+IHtcbiAgICAgICAgICBwcmV2Q2hhdERhdGE/LlswXS51bnNoaWZ0KHtcbiAgICAgICAgICAgIGlkOiAoY2hhdERhdGFbMF1bMF0/LmlkIHx8IDApICsgMSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHNhdmVkQ2hhdCxcbiAgICAgICAgICAgIFVzZXJJZDogbXlEYXRhIS5pZCxcbiAgICAgICAgICAgIFVzZXI6IG15RGF0YSEsXG4gICAgICAgICAgICBDaGFubmVsSWQ6IGNoYW5uZWxEYXRhLmlkLFxuICAgICAgICAgICAgQ2hhbm5lbDogY2hhbm5lbERhdGEsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHByZXZDaGF0RGF0YTtcbiAgICAgICAgfSwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNldENoYXQoJycpO1xuICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9jaGFubmVscy8ke2NoYW5uZWx9L2NoYXRzYCwge1xuICAgICAgICAgICAgY29udGVudDogY2hhdCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG11dGF0ZUNoYXQoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGF0LCBjaGF0RGF0YSwgbXlEYXRhLCBjaGFubmVsRGF0YSwgd29ya3NwYWNlLCBjaGFubmVsXSxcbiAgKTtcblxuICBjb25zdCBvbk1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YTogSUNoYXQpID0+IHtcbiAgICAgIC8vIGlk64qUIOyDgeuMgOuwqSDslYTsnbTrlJRcbiAgICAgIGlmIChkYXRhLkNoYW5uZWwubmFtZSA9PT0gY2hhbm5lbCAmJiAoZGF0YS5jb250ZW50LnN0YXJ0c1dpdGgoJ3VwbG9hZHNcXFxcJykgfHwgZGF0YS5Vc2VySWQgIT09IG15RGF0YT8uaWQpKSB7XG4gICAgICAgIG11dGF0ZUNoYXQoKGNoYXREYXRhKSA9PiB7XG4gICAgICAgICAgY2hhdERhdGE/LlswXS51bnNoaWZ0KGRhdGEpO1xuICAgICAgICAgIHJldHVybiBjaGF0RGF0YTtcbiAgICAgICAgfSwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChzY3JvbGxiYXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudC5nZXRTY3JvbGxIZWlnaHQoKSA8XG4gICAgICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50LmdldENsaWVudEhlaWdodCgpICsgc2Nyb2xsYmFyUmVmLmN1cnJlbnQuZ2V0U2Nyb2xsVG9wKCkgKyAxNTBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsVG9Cb3R0b20hJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LmdldFZhbHVlcygpKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2NoYW5uZWwsIG15RGF0YV0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQ/Lm9uKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Py5vZmYoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtzb2NrZXQsIG9uTWVzc2FnZV0pO1xuXG4gIC8vIOuhnOuUqSDsi5wg7Iqk7YGs66Gk67CUIOygnOydvCDslYTrnpjroZxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhdERhdGE/Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RvQm90dG9tV2hlbkxvYWRlZCcsIHNjcm9sbGJhclJlZi5jdXJyZW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2Nyb2xsYmFyJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQpO1xuICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9LCBbY2hhdERhdGFdKTtcblxuICBjb25zdCBvbkNsaWNrSW52aXRlQ2hhbm5lbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW52aXRlQ2hhbm5lbE1vZGFsKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbnZpdGVDaGFubmVsTW9kYWwoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VGaWxlID0gdXNlQ2FsbGJhY2soKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzKSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV0uZ2V0QXNGaWxlKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcuLi4gZmlsZVsnICsgaSArICddLm5hbWUgPSAnICsgZmlsZS5uYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBheGlvcy5wb3N0KGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzLyR7Y2hhbm5lbH0vaW1hZ2VzYCwgZm9ybURhdGEpLnRoZW4oKCkgPT4ge30pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IGFueSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gSWYgZHJvcHBlZCBpdGVtcyBhcmVuJ3QgZmlsZXMsIHJlamVjdCB0aGVtXG4gICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmtpbmQgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSwgJy4uLi4gZmlsZVsnICsgaSArICddLm5hbWUgPSAnICsgZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZSwgJy4uLiBmaWxlWycgKyBpICsgJ10ubmFtZSA9ICcgKyBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXS5uYW1lKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZS5kYXRhVHJhbnNmZXIuZmlsZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBheGlvcy5wb3N0KGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzLyR7Y2hhbm5lbH0vaW1hZ2VzYCwgZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXREcmFnT3ZlcihmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFt3b3Jrc3BhY2UsIGNoYW5uZWxdLFxuICApO1xuXG4gIGNvbnN0IG9uRHJhZ092ZXIgPSB1c2VDYWxsYmFjaygoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldERyYWdPdmVyKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFteURhdGEgfHwgIW15RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY2hhdFNlY3Rpb25zID0gbWFrZVNlY3Rpb24oY2hhdERhdGEgPyBjaGF0RGF0YS5mbGF0KCkucmV2ZXJzZSgpIDogW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvbkRyb3A9e29uRHJvcH0gb25EcmFnT3Zlcj17b25EcmFnT3Zlcn0+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8c3Bhbj4je2NoYW5uZWx9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgIDxzcGFuPntjaGFubmVsTWVtYmVyc0RhdGE/Lmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja0ludml0ZUNoYW5uZWx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjLWJ1dHRvbi11bnN0eWxlZCBwLWlhX192aWV3X2hlYWRlcl9fYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgcGVvcGxlIHRvICNyZWFjdC1uYXRpdmVcIlxuICAgICAgICAgICAgZGF0YS1zaz1cInRvb2x0aXBfcGFyZW50XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImMtaWNvbiBwLWlhX192aWV3X2hlYWRlcl9fYnV0dG9uX2ljb24gYy1pY29uLS1hZGQtdXNlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q2hhdExpc3QgY2hhdFNlY3Rpb25zPXtjaGF0U2VjdGlvbnN9IHNjcm9sbFJlZj17c2Nyb2xsYmFyUmVmfSBzZXRTaXplPXtzZXRTaXplfSBpc1JlYWNoaW5nRW5kPXtpc1JlYWNoaW5nRW5kfSAvPlxuICAgICAgPENoYXRCb3ggY2hhdD17Y2hhdH0gb25DaGFuZ2VDaGF0PXtvbkNoYW5nZUNoYXR9IG9uU3VibWl0Rm9ybT17b25TdWJtaXRGb3JtfSAvPlxuICAgICAgPEludml0ZUNoYW5uZWxNb2RhbFxuICAgICAgICBzaG93PXtzaG93SW52aXRlQ2hhbm5lbE1vZGFsfVxuICAgICAgICBvbkNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH1cbiAgICAgICAgc2V0U2hvd0ludml0ZUNoYW5uZWxNb2RhbD17c2V0U2hvd0ludml0ZUNoYW5uZWxNb2RhbH1cbiAgICAgIC8+XG4gICAgICB7ZHJhZ092ZXIgJiYgPERyYWdPdmVyPuyXheuhnOuTnCE8L0RyYWdPdmVyPn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdLCJuYW1lcyI6WyJDaGF0Qm94IiwiQ2hhdExpc3QiLCJJbnZpdGVDaGFubmVsTW9kYWwiLCJ1c2VJbnB1dCIsInVzZVNvY2tldCIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkRyYWdPdmVyIiwiZmV0Y2hlciIsIm1ha2VTZWN0aW9uIiwiYXhpb3MiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VTV1IiLCJ1c2VTV1JJbmZpbml0ZSIsIkNoYW5uZWwiLCJ3b3Jrc3BhY2UiLCJjaGFubmVsIiwibXlEYXRhIiwiZGF0YSIsImNoYXQiLCJvbkNoYW5nZUNoYXQiLCJzZXRDaGF0IiwiY2hhbm5lbERhdGEiLCJpbmRleCIsImNoYXREYXRhIiwibXV0YXRlQ2hhdCIsIm11dGF0ZSIsInNldFNpemUiLCJjaGFubmVsTWVtYmVyc0RhdGEiLCJzb2NrZXQiLCJpc0VtcHR5IiwibGVuZ3RoIiwiaXNSZWFjaGluZ0VuZCIsInNjcm9sbGJhclJlZiIsInNob3dJbnZpdGVDaGFubmVsTW9kYWwiLCJzZXRTaG93SW52aXRlQ2hhbm5lbE1vZGFsIiwiZHJhZ092ZXIiLCJzZXREcmFnT3ZlciIsIm9uU3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0cmltIiwic2F2ZWRDaGF0IiwicHJldkNoYXREYXRhIiwidW5zaGlmdCIsImlkIiwiY29udGVudCIsIlVzZXJJZCIsIlVzZXIiLCJDaGFubmVsSWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwidGhlbiIsImN1cnJlbnQiLCJzY3JvbGxUb0JvdHRvbSIsInBvc3QiLCJjYXRjaCIsImVycm9yIiwib25NZXNzYWdlIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJnZXRTY3JvbGxIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJnZXRTY3JvbGxUb3AiLCJnZXRWYWx1ZXMiLCJzZXRUaW1lb3V0Iiwib24iLCJvZmYiLCJvbkNsaWNrSW52aXRlQ2hhbm5lbCIsIm9uQ2xvc2VNb2RhbCIsIm9uQ2hhbmdlRmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJmaWxlcyIsImkiLCJmaWxlIiwiZ2V0QXNGaWxlIiwiYXBwZW5kIiwib25Ecm9wIiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJraW5kIiwib25EcmFnT3ZlciIsImNoYXRTZWN0aW9ucyIsImZsYXQiLCJyZXZlcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==