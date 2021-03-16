webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Semantic__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Semantic__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello___default.a
  }, {
    path: '/testing-semantic',
    name: 'Semantic',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Semantic___default.a
  }]
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(15)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(26),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavigationMenu_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavigationMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_NavigationMenu_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		NavigationMenu: __WEBPACK_IMPORTED_MODULE_0__components_NavigationMenu_vue___default.a
	},
	name: 'app',
	data() {
		return {
			msg: 'Disorientation Station'
		};
	},
	mounted: function () {
		console.log("MOUNTED");
		this.initializeSemantic();
		this.setupLogoSidebarOpener();
	},
	ready: function () {
		console.log("READY");
		this.initializeSemantic();
		this.setupLogoSidebarOpener();
	},
	methods: {
		initializeSemantic: function () {
			console.log($(this.$el));
			$('#app .ui.sidebar').sidebar({ context: $('#app') }).sidebar('setting', 'transition', 'overlay').sidebar('toggle');
		},
		setupLogoSidebarOpener: function () {
			var swipeMenu = $('#app .ui.sidebar');
			$('.sidebar-opener').click(function () {
				swipeMenu.sidebar('toggle');
			});
		}
	}

});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data() {
    return {
      msg: 'Morphology Ecology'
    };
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'semantic',
  data() {
    return {
      msg: 'This is not the message you were looking for!'
    };
  },
  mounted: function () {
    console.log("MOUNTED");
    this.initializeSemantic();
  },
  ready: function () {
    console.log("READY");
    this.initializeSemantic();
  },
  methods: {
    initializeSemantic: function () {
      console.log($(this.$el));
      console.log("INITIALIZING ui.accordions :: ", $(this.$el).find('.ui.accordion'));
      // Update elements to match what is needed by Semantic.js
      $(this.$el).find('.ui.accordion').accordion();
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_semantic_ui_css_semantic_min_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_semantic_ui_css_semantic_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_semantic_ui_css_semantic_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semantic_dist_semantic_min_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semantic_dist_semantic_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__semantic_dist_semantic_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/nyc-empireslate.1c2353f.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(27),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-43a7bd3e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(25),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(28),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-534a4707",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "ui huge fixed borderless menu"
  }, [_c('a', {
    staticClass: "active item",
    staticStyle: {
      "font-size": "23px"
    }
  }, [_c('i', {
    staticClass: "fas fa-sun fa-2x mr-10"
  }), _vm._v("Quinquilharia com Desarmonia")]), _c('div', {
    staticClass: "ui dropdown item"
  }, [_vm._v(" Semitic"), _c('i', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_arrow_down")]), _c('div', {
    staticClass: "menu p-20"
  }, [_c('a', {
    staticClass: "item"
  }, [_vm._v("Arabic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Hebrew")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Aramaic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Akkadian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Himyarite")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Syriac")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Phoenician")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Tigrinya")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Turoyo")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Jibbali")])])]), _c('div', {
    staticClass: "ui dropdown item"
  }, [_vm._v(" Indo-European"), _c('i', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_arrow_down")]), _c('div', {
    staticClass: "menu p-15"
  }, [_c('a', {
    staticClass: "item"
  }, [_vm._v("Italic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Balto-Slavic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Phrygian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Hellenic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Celtic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Germanic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Indo-Iranian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Anatolian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Daco-Thracian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Aramaic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Cymerian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Ilyrian")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Lusitanian")])])]), _c('div', {
    staticClass: "ui dropdown item"
  }, [_vm._v(" Others"), _c('i', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_arrow_down")]), _c('div', {
    staticClass: "menu"
  }, [_c('a', {
    staticClass: "item"
  }, [_vm._v("Altaic")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Chagatai")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Bantu")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Swahili")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("English")])])]), _c('div', {
    staticClass: "right menu mr-10"
  }, [_c('div', {
    staticClass: "item mr-20"
  }, [_c('i', {
    staticClass: "material-icons sidebar-opener"
  }, [_vm._v("menu")]), _vm._v("Menu")])])])])
}]}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('NavigationMenu'), _vm._m(0), _c('div', {
    staticClass: "dimmmed pusher"
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui left vertical sidebar menu overlay visible"
  }, [_c('div', {
    staticClass: "ui card"
  }, [_c('div', {
    staticClass: "ui medium image"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(21)
    }
  })])]), _c('div', {
    staticClass: "ui dropdown item"
  }, [_c('i', {
    staticClass: "dropdown icon"
  }), _vm._v("Bass"), _c('div', {
    staticClass: "menu"
  }, [_c('a', {
    staticClass: "item"
  }, [_vm._v("Charles Mingus")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Percy Heath")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Charlie Haden")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("John Entwhistle\t\t")])])]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Drums\n")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Guitar\n")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Piano\n")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Vibraphone\n")]), _c('div', {
    staticClass: "ui bottom dropdown item"
  }, [_c('i', {
    staticClass: "dropdown icon"
  }), _vm._v("Woodwinds"), _c('div', {
    staticClass: "menu"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("Saxophones")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Alto ")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Tenor")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Baritone")])])]), _c('div', {
    staticClass: "ui dropdown item"
  }, [_c('i', {
    staticClass: "right dropdown icon"
  }), _vm._v("Brass\t"), _c('div', {
    staticClass: "menu"
  }, [_c('a', {
    staticClass: "item"
  }, [_vm._v("Trumpets")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Trombones")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("French Horns")]), _c('a', {
    staticClass: "item"
  }, [_vm._v("Tubas")])])])])
}]}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui container fluid"
  }, [_c('div', {
    staticClass: "hero-image",
    staticStyle: {
      "height": "95vh"
    }
  }, [_c('div', {
    staticClass: "hero-text"
  }, [_c('i', {
    staticClass: "material-icons md-96 mb-0"
  }, [_vm._v("all_inclusive")]), _c('h1', {
    staticClass: "ui huge white inverted header mb-5",
    staticStyle: {
      "font-size": "34px"
    }
  }, [_vm._v(_vm._s(_vm.msg) + " ")]), _c('h1', {
    staticClass: "ui huge header mb-10",
    staticStyle: {
      "color": "white",
      "font-size": "27px"
    }
  }, [_vm._v("Boiling and Bowling")]), _c('h1', {
    staticClass: "ui huge header mt-0 mb-30",
    staticStyle: {
      "color": "white",
      "font-size": "21px"
    }
  }, [_vm._v("Scientology Phrenology")]), _c('button', {
    staticClass: "ui huge primary button ml-15 sidebar-opener",
    staticStyle: {
      "font-weight": "300"
    },
    attrs: {
      "id": "boing"
    }
  }, [_vm._v("Click")])])])])
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "semantic-playground-body"
    }
  }, [_c('div', {
    staticClass: "ui styled fluid accordion"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "transition hidden"
  }, [_vm._v(_vm._s(_vm.msg) + " "), _c('br'), _vm._v("A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.")])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('router-link', {
    staticClass: "back-home-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" Back to Home ")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('i', {
    staticClass: "dropdown icon"
  }), _vm._v("\n      What is a dog?\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title active"
  }, [_c('i', {
    staticClass: "dropdown icon"
  }), _vm._v("\n      What kinds of dogs are there?\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content active"
  }, [_c('p', {
    staticClass: "transition visible"
  }, [_vm._v("There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('i', {
    staticClass: "dropdown icon"
  }), _vm._v("\n      How do you acquire a dog?\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._v("Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.")]), _vm._v(" "), _c('p', [_vm._v("A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "cards"
    }
  }, [_c('div', {
    staticClass: "ui link centered cards"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "https://api.adorable.io/avatars/285/leroy@adorable.io.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("Matt Giampietro")]), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('a', [_vm._v("Friends")])]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n          Matthew is an interior designer living in New York.\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "extra content"
  }, [_c('span', {
    staticClass: "right floated"
  }, [_vm._v("\n          Joined in 2013\n        ")]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "user icon"
  }), _vm._v("\n          75 Friends\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "https://api.adorable.io/avatars/285/molly@adorable.io.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("Molly")]), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('span', {
    staticClass: "date"
  }, [_vm._v("Coworker")])]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n          Molly is a personal assistant living in Paris.\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "extra content"
  }, [_c('span', {
    staticClass: "right floated"
  }, [_vm._v("\n          Joined in 2011\n        ")]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "user icon"
  }), _vm._v("\n          35 Friends\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "https://api.adorable.io/avatars/285/elyse@adorable.io.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("Elyse")]), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('a', [_vm._v("Coworker")])]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n          Elyse is a copywriter working in New York.\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "extra content"
  }, [_c('span', {
    staticClass: "right floated"
  }, [_vm._v("\n          Joined in 2014\n        ")]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "user icon"
  }), _vm._v("\n          151 Friends\n        ")])])])])])
}]}

/***/ })
],[13]);
//# sourceMappingURL=app.fc7632f629bb4469e63f.js.map